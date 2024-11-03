import { ProjectContext } from "@/contexts/ProjectContext";
import clsx from "clsx";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import { useContext, useMemo, useState } from "react";

interface Props {
  item: any;
  depth?:0,
}

export default function LayerSnippet({item,depth = 0}:Props) {

  const {setActiveLayer,activeLayer,selectedLayer} = useContext(ProjectContext);
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
        <ArrowDown2 variant="Bold" className="w-[18px] h-[16px]"/> :
        <ArrowRight2 variant="Bold" className="w-[18px] h-[16px]"/>
      }
      </div>
    ) 
    
  },[isOpen,item.children])

  if (item.tag === 'basemodal') return null;

  return(
    //GRID_START
    <div className="flex flex-col max-w-[297px] min-w-[60px]">
      <div
        className={
          clsx(
            "text-xs flex items-center cursor-pointer py-2 hover:bg-fill-100 pl-1",
            {
              "bg-fill-500": activeLayer === item.id,
              "bg-fill-100": selectedLayer === item.id,
            }
          )
        }
        onClick={()=>{
          setActiveLayer(item.id);
          setIsOpen(!isOpen);
        }}
      >
        {chevron}
        <span className="line-clamp-1 ml-[6px]" >
          {item.tag}
          <span className="text-white/40">{item.id ? `#${item.id}` : ''}</span>
        </span>
      </div>

      {isOpen && childrens}
    </div>
    //GRID_END
  )
}