import LeftSidebar from "@/components/pages/app/sidebar/Left";
import RightSidebar from "@/components/pages/app/sidebar/Right";
import AppCanvas from "./canvas";
import { useContext, useEffect } from "react";
import { ProjectContext } from "@/contexts/ProjectContext";
import { isEmpty } from "lodash-es";
import AppPageProjectLanding from "./landing";
import useBeforeUnload from "@/hooks/useBeforeUnload";

export default function AppPageProject() {

  const {directory,setDirectory} = useContext(ProjectContext);

  useBeforeUnload(isEmpty(directory), ()=>{
    setDirectory({});
  })

  if (isEmpty(directory)) {
    return <AppPageProjectLanding/>
  }

  return(
    <div className="flex">
      <LeftSidebar/>
      <AppCanvas/>
      <RightSidebar/>
    </div>
  )
}