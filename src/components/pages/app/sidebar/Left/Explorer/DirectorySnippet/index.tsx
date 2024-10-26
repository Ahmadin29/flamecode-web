import { ProjectContext } from "@/contexts/ProjectContext";
import { getFileContent, isEditableFile } from "@/utilities/client-file-directory";
import { componentSerializer, transformJS } from "@/utilities/transform-js";
import clsx from "clsx";
import { ArrowDown2, ArrowRight2, DocumentCode } from "iconsax-react";
import React, { useCallback, useContext, useState } from "react";

interface Props {
  item: any;
  depth?: number;
}

function File({item,depth = 0}:Props) {
  const indent = depth * 12;
  const {setSelectedFile,setContent} = useContext(ProjectContext);
  
  const onOpenFile = useCallback(async(item:any)=>{
    const content = await getFileContent(item);
    setSelectedFile(item)
    if (isEditableFile(item.name)) {
      const component = transformJS(content);
      const serializedComponent = componentSerializer(component);
      setContent(serializedComponent)
    }
  },[]);

  return (
    <div
      style={{paddingLeft: `${indent}px`}}
      className="flex py-1 items-center hover:bg-fill-100 text-xs cursor-pointer" key={item.name}
      onClick={()=>onOpenFile(item)}
    >
      <DocumentCode className="w-[18px]"/>
      <span className="ml-1">{item.name}</span>
    </div>
  ) 
}

export default function DirectorySnippet({item,depth = 1}:Props) {
  const indent = depth * 12;
  const [isOpen,setIsOpen] = useState(false);

  if (item.kind === 'file') {
    return <File item={item} depth={depth}/>
  }

  return(
    <div
    className={
      clsx(
        "flex flex-col text-xs",
        {
          "text-slate-600": item.ignored,
        }
      )
    } key={item.name}>
      <div
        style={{paddingLeft: `${indent}px`}}
        className="flex items-center hover:bg-fill-100 py-1 cursor-pointer"
        onClick={()=>setIsOpen(!isOpen)}
      >
        {
          isOpen ?
          <ArrowDown2 variant="Bold" className="w-[18px]"/> :
          <ArrowRight2 variant="Bold" className="w-[18px]"/>
        }
        <span className="ml-1">{item.name}</span>
      </div>
      {
        isOpen &&
        <div className="flex flex-col">
          {
            item?.child?.map((item: any)=>{
              return <DirectorySnippet key={item.path} item={item} depth={depth+1}/>
            })
          }
        </div>
      }
    </div>
  )
}