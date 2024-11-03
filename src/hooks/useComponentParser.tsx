import ALLOWED_SVG_TAGS from "@/consts/allowed-svg-tag";
import { ProjectContext } from "@/contexts/ProjectContext";
import { formatHTML } from "@/utilities/transform-js";
import { isEmpty } from "lodash-es";
import { useCallback, useContext, useEffect } from "react";

export default function useComponentParser() {
  const {
    setActiveLayer,
    activeLayer,
    selectedLayer,
    setSelectedLayer,
  } = useContext(ProjectContext);

  const parser = useCallback((item:any,parent:any)=>{

    if (item.tag === 'basemodal') {
      return;
    }

    if (item.tag === 'text') {
      parent.innerHTML = item.text;
      return;
    };

    let component = document.createElement(item.tag);
    
    if (ALLOWED_SVG_TAGS.includes(item.tag)) {
      component = document.createElementNS('http://www.w3.org/2000/svg', item.tag);
    }
    
    component.setAttribute('id', item.id);

    Object.keys(item.props).forEach((key:any)=>{
      if (key === 'classname') {
        component.setAttribute('class', item.props[key]);
      }else{
        component.setAttribute(key, item.props[key]);
      }
    })

    if (!ALLOWED_SVG_TAGS.includes(item.tag)) {
      component.addEventListener('mouseover',(event:MouseEvent)=>{
        const target = event.target as HTMLElement;
        setSelectedLayer(target.id);
      });
  
      component.addEventListener('click',(event:MouseEvent)=>{
        const target = event.target as HTMLElement;
        setActiveLayer(target.id);
      });
    }

    if (item.children) {
      item.children.forEach((child:any)=>{
        parser(child,component);
      })
    }

    parent.appendChild(component);
  },[]);

  useEffect(()=>{
    if (selectedLayer) {
      const element = document.getElementById(selectedLayer);

      const activeElement = document.getElementsByClassName('selected-layer');
      if (activeElement.length > 0) {
        for (let i = 0; i < activeElement.length; i++) {
          activeElement[i].classList.remove('selected-layer');
        }
      }
      if (element) {
        element.classList.add('selected-layer');
      }
    }

    if (activeLayer) {
      const element = document.getElementById(activeLayer);

      const activeElement = document.getElementsByClassName('active-layer');
      if (activeElement.length > 0) {
        for (let i = 0; i < activeElement.length; i++) {
          activeElement[i].classList.remove('active-layer');
        }
      }
      if (element) {
        element.classList.add('active-layer');
      }
    }
  },[selectedLayer,activeLayer])

  // MOVE IT UNDER MAIN FRAME
  // const updateContent = useCallback(async()=>{
  //   const fileHandle = selectedFile.fileHandle;
  //   const file = await fileHandle.getFile();
  //   const rawContent = await file.text();
    
  //   const component = document.getElementById('canvas');
  //   if (isEmpty(component)) return;

  //   const newContent = formatHTML(component.innerHTML);
  //   const updatedContent = rawContent.replace(/\/\/GRID_START[\s\S]*?\/\/GRID_END/, `//GRID_START\n${newContent}\n//GRID_END`);

  //   const writableStream = await fileHandle.createWritable();
  //   await writableStream.write(updatedContent);
  //   await writableStream.close();
  // },[selectedFile])

  // useEffect(()=>{
  //   if (isEmpty(content) || isEmpty(selectedFile)) return;
  //   // updateContent()
  // },[content,selectedFile])

  return {
    parser,
  };
}