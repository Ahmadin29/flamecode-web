import { ProjectContext } from "@/contexts/ProjectContext";
import { useContext, useEffect } from "react";

export default function useIframeHandler() {

  const {setSelectedLayer,setActiveLayer} = useContext(ProjectContext);

  useEffect(()=>{
    const handleMessage = (event: MessageEvent) => {
      const { type, message } = event.data;
      if (type === 'SELECTED_LAYER') {
        setSelectedLayer(message);
      }
      if (type === 'ACTIVE_LAYER') {
        setActiveLayer(message);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  },[])
}