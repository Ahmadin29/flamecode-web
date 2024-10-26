import { ProjectContext } from "@/contexts/ProjectContext";
import { useContext, useMemo, useState } from "react";
import { isEmpty } from "lodash-es";
import LayerSnippet from "./LayerSnippet";

export default function LeftSideBarLayers() {

  const {content,selectedFile} = useContext(ProjectContext);

  const layers = useMemo(()=>{
    if (isEmpty(content)){

      if (!isEmpty(selectedFile)) {
        return(
          <div className="p-3 text-sm bg-primary/30 rounded">
            <h1 className="text-base font-semibold">Important</h1>
            <span className="text-primary bg-white px-1 text-xs" >{selectedFile.name}</span> has no content or you haven't set the <span className="text-primary bg-white px-1 text-xs" >BeGRID Standard</span> yet.
          </div>
        )
      }

      return null;
    }
    
    return content.map((item:any,index:number)=>{
      return <LayerSnippet key={`layer-${index}`} item={item}/>
    })
  },[content]);

  return(
    //GRID_START
    <div className="flex-1 overflow-y-scroll border-b border-b-fill-500">
      <div className="flex font-medium sticky top-0 bg-fill-300 items-center justify-between p-2 border-b border-b-fill-500">
        Layers
      </div>
      <div className="text-sm">
        {layers}
      </div>
    </div>
    //GRID_END
  )
}