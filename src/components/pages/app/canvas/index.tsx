import { ProjectContext } from "@/contexts/ProjectContext";
import useIframeHandler from "@/hooks/useIframeHandler";
import { useContext, useEffect } from "react";

export default function AppCanvas(){

  const {content} = useContext(ProjectContext);
  useIframeHandler();
  
  useEffect(()=>{
    if (typeof window === 'undefined') return;

    const iframe = document.getElementById('canvas-frame') as HTMLIFrameElement;

    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        { type: 'CONTENT', message: content }, 
        '*'
      );
    }
  },[content])
  
  return(
    <main className="h-[calc(100vh-60px)] overflow-y-scroll flex-1" >
      <iframe id="canvas-frame" className="w-full min-h-full bg-white" src="http://localhost:3000/app/canvas" sandbox="allow-scripts"></iframe>
    </main>
  )
}