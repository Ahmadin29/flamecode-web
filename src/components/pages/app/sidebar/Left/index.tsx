import clsx from "clsx";
import LeftSideBarControls from "./Controls";
import LeftSideBarExplorer from "./Explorer";
import LeftSideBarLayers from "./Layers";
import { ProjectContext } from "@/contexts/ProjectContext";
import { useContext } from "react";
import { ArrowLeft2 } from "iconsax-react";

export default function LeftSidebar() {

  const { isLeftSidebarOpen } = useContext(ProjectContext);

  return(
    <aside className={
      clsx(
        "flex h-[calc(100vh-60px)] sticky top-[60px] overflow-x-hidden overflow-y-scroll no-scrollbar",
        {
          "w-[360px] resize-x max-w-[360px] min-w-[60px]": isLeftSidebarOpen,
          "!w-[60px]": !isLeftSidebarOpen,
        }
      )
    }>
      <LeftSideBarControls/>
      <div className="flex flex-col flex-1 h-full bg-fill-300">
        <LeftSideBarExplorer/>
        <LeftSideBarLayers/>
      </div>
    </aside>
  )
}