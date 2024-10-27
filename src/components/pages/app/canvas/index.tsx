import { ProjectContext } from "@/contexts/ProjectContext";
import useComponentParser from "@/hooks/useComponentParser";
import { isEmpty, set } from "lodash-es";
import { useCallback, useContext, useEffect, useMemo } from "react";

export default function AppCanvas(){

  const {content} = useContext(ProjectContext);
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
  
  return(
    <main className="h-[calc(100vh-60px)] overflow-y-scroll flex-1" >
      <div id='canvas' className="bg-white w-full min-h-full"></div>
    </main>
  )
}