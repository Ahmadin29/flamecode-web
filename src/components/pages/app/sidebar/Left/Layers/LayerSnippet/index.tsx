import { ProjectContext } from "@/contexts/ProjectContext";
import clsx from "clsx";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import { useContext, useMemo, useState } from "react";

interface Props {
  item: any;
  depth?:0,
}

export default function LayerSnippet({item,depth = 0}:Props) {

  const {setActiveLayer,activeLayer} = useContext(ProjectContext);
  const [isOpen,setIsOpen] = useState(true);

  const childrens = useMemo(()=>{
    const indent = (depth + 1) * 12;

    if (!item.children) return null;

    return item.children.map((child:any)=>{
      return (
        <div key={child.id} style={{
          marginLeft: `${indent}px`,
        }} className="border-l border-l-fill-500 ml-1">
          <LayerSnippet item={child}/>
        </div>
      )
    })
  },[item.children])

  const chevron = useMemo(()=>{
    if (!item.children) return null;

    return (
      <div className="flex items-center justify-center">
      {
        isOpen ?
        <ArrowDown2 variant="Bold" className="w-[18px] h-[15px]"/> :
        <ArrowRight2 variant="Bold" className="w-[18px] h-[15px]"/>
      }
      </div>
    ) 
    
  },[isOpen,item.children])

  return(
    //GRID_START
    <div className="flex flex-col">
      <div
        className={
          clsx(
            "text-xs flex items-center cursor-pointer py-2 hover:bg-fill-100",
            {
              "bg-fill-500": activeLayer === item.id,
            }
          )
        }
        onClick={()=>{
          setActiveLayer(item.id);
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex flex-row">
          <div className="flex items-center mr-2">
            <div className={
              clsx(
                "w-[8px] h-[1px] rounded-full",
                {
                  "bg-slate-200": activeLayer === item.id,
                  "bg-fill-500": activeLayer !== item.id,
                }
              )
            }></div>
            <div className={
              clsx(
                "min-w-[10px] min-h-[10px] rounded-full",
                {
                  "bg-slate-200": activeLayer === item.id,
                  "bg-fill-500": activeLayer !== item.id,
                }
              )
            }></div>
          </div>
          <span className="line-clamp-1" >
            {item.tag}
            <span className="text-white/40">{item.id ? `#${item.id}` : ''}</span>
          </span>
        </div>
        {chevron}
      </div>

      {isOpen && childrens}
    </div>
    //GRID_END
  )
}