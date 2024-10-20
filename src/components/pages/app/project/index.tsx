import LeftSidebar from "@/components/pages/app/project/sidebar/Left";
import RightSidebar from "@/components/pages/app/project/sidebar/Right";
import AppCanvas from "./canvas";

export default function AppPageProject() {
  return(
    <div className="flex">
      <LeftSidebar/>
      <AppCanvas/>
      <RightSidebar/>
    </div>
  )
}