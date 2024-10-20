import Button from "@/components/button"
import { SIDEBAR_CONTROLS, SIDEBAR_CONTROLS_SECONDARY } from "@/consts/app/sidebar/controls"
import { useMemo } from "react"

export default function LeftSideBarControls() {

  const renderControls = useMemo(()=>{
    return SIDEBAR_CONTROLS.map((item)=>{
      return(
        <Button key={item.title} variant="ghost" className="flex items-center gap-4 p-4 !px-4 hover:bg-fill-300 rounded-none">
          {item.icon}
        </Button>
      )
    })
  },[])

  const renderSecondaryControls = useMemo(()=>{
    return SIDEBAR_CONTROLS_SECONDARY.map((item)=>{
      return(
        <Button key={item.title} variant="ghost" className="flex items-center gap-4 p-4 !px-4 hover:bg-fill-300 rounded-none">
          {item.icon}
        </Button>
      )
    })
  },[])

  return(
    <div className="flex flex-col justify-between bg-fill-500">
      <div className="flex flex-col">
        {renderControls}
      </div>
      <div className="flex flex-col">
        {renderSecondaryControls}
      </div>
    </div>
  )
}