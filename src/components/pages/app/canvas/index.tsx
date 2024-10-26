import { ProjectContext } from "@/contexts/ProjectContext";
import { isEmpty } from "lodash-es";
import { useCallback, useContext, useEffect, useMemo } from "react";

export default function AppCanvas(){

  const {content,setActiveLayer} = useContext(ProjectContext);

  const parseComponent = useCallback((item:any,parent:any)=>{
    if (item.tag === 'text') {
      parent.innerHTML = item.text;
      return;
    };

    const component = document.createElement(item.tag);
    component.setAttribute('id', item.id);

    Object.keys(item.props).forEach((key:any)=>{
      if (key === 'classname') {
        component.setAttribute('class', item.props[key]);
      }else{
        component.setAttribute(key, item.props[key]);
      }
    })

    component.onclick = ()=>{
      const activeElement = document.getElementsByClassName('active-element');
      if (activeElement.length < 1) {
        component.classList.add('active-element');
        setActiveLayer(item.id);
        setTimeout(() => {
          component.classList.remove('active-element');
        }, 100);
      }
    }

    component.classList.add('cursor-pointer');

    if (item.children) {
      item.children.forEach((child:any)=>{
        parseComponent(child,component);
      })
    }

    parent.appendChild(component);
  },[]);

  useEffect(()=>{
    if (typeof window === 'undefined' || isEmpty(content)) return;

    const parent = document.getElementById('canvas');
    if (parent) {
      parent.innerHTML = '';
    }
    content.forEach((item:any)=>{
      parseComponent(item,parent);
    })
  },[parseComponent,content])
  
  return(
    <main className="h-[calc(100vh-60px)] overflow-y-scroll flex-1" >
      <div id='canvas' className="bg-white w-full min-h-full"></div>
    </main>
  )
}