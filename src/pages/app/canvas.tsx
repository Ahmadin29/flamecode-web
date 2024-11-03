import { ProjectContext } from "@/contexts/ProjectContext";
import useComponentParser from "@/hooks/useComponentParser";
import { isEmpty, set } from "lodash-es";
import { useContext, useEffect, useState } from "react";

function AppCanvas(){

  const {selectedLayer,activeLayer} = useContext(ProjectContext);
  const [content,setContent] = useState([]);
  const {parser} = useComponentParser();

  useEffect(()=>{
    if (typeof window === 'undefined' || isEmpty(content)) return;

    const parent = document.getElementById('canvas');
    
    if (parent) {
      parent.innerHTML = '';
    }
    content.forEach((item:any)=>{
      parser(item,parent);
    })
  },[content])

  useEffect(()=>{
    if (typeof window === 'undefined') return;

    window.addEventListener('message', (event) => {
      const { type, message } = event.data;
      if (type === 'CONTENT') {
        setContent(message)
      }
    });
  },[]);

  useEffect(()=>{
    if (typeof window === 'undefined' || !window.parent) return;

    window.parent.postMessage(
      { type: 'SELECTED_LAYER', message: selectedLayer },
      '*'
    );
  },[selectedLayer])

  useEffect(()=>{
    if (typeof window === 'undefined' || !window.parent) return;

    window.parent.postMessage(
      { type: 'ACTIVE_LAYER', message: activeLayer },
      '*'
    );
  },[activeLayer])
  
  return(
    <main className="h-[100vh] overflow-y-scroll flex-1" >
      <div id='canvas' className="flex-1 bg-white w-full min-h-full"></div>
    </main>
  )
}

AppCanvas.disableLayout = true;

export default AppCanvas;