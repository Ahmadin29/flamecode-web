import LeftSideBarControls from "./Controls";
import LeftSideBarExplorer from "./Explorer";
import LeftSideBarLayers from "./Layers";

export default function LeftSidebar() {
  return(
    <aside className="flex h-[calc(100vh-60px)] max-w-[360px] min-w-[320px] sticky top-[60px] bg-fill-300 overflow-x-hidden overflow-y-scroll no-scrollbar">
      <LeftSideBarControls/>
      <div className="flex flex-col flex-1 h-full">
        <LeftSideBarExplorer/>
        <LeftSideBarLayers/>
      </div>
    </aside>
  )
}