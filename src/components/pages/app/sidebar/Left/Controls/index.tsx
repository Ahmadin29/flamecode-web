import Button from "@/components/button";
import {
  SIDEBAR_CONTROLS,
  SIDEBAR_CONTROLS_SECONDARY,
} from "@/consts/app/sidebar/controls";
import { ProjectContext } from "@/contexts/ProjectContext";
import clsx from "clsx";
import { useCallback, useContext, useMemo } from "react";

export default function LeftSideBarControls() {
  const { setPage, page, setIsLeftSidebarOpen, isLeftSidebarOpen } = useContext(ProjectContext);

  const renderControls = useMemo(() => {
    return SIDEBAR_CONTROLS.map((item) => {
      return (
        <Button
          key={item.key}
          variant="ghost"
          className={clsx(
            "flex items-center gap-4 !p-4 !px-4 hover:bg-fill-100 rounded-none",
            {
              "bg-fill-300": page === item.key,
            }
          )}
          onClick={()=>{
            setPage(item.key);
          }}
        >
          {item.icon}
        </Button>
      );
    });
  }, [page]);

  const onSecondaryControlClick = useCallback((item:any)=>{
    if (item.key === 'expand') {
      setIsLeftSidebarOpen(!isLeftSidebarOpen);
    }
  },[isLeftSidebarOpen]);

  const renderSecondaryControls = useMemo(() => {
    return SIDEBAR_CONTROLS_SECONDARY.map((item) => {
      return (
        <Button
          key={item.title}
          variant="ghost"
          className={
            clsx(
              "flex items-center gap-4 !p-4 !px-4 hover:bg-fill-100 rounded-none",
            )
          }
          onClick={()=>onSecondaryControlClick(item)}
        >
          <div className={
            clsx({
              "rotate-180 transition-all": item.key === 'expand' && isLeftSidebarOpen,
              "rotate-0 transition-all": item.key === 'expand' && !isLeftSidebarOpen,
            })
          }>
            {item.icon}
          </div>
        </Button>
      );
    });
  }, [isLeftSidebarOpen]);

  return (
    <div className="flex flex-col justify-between bg-fill-500">
      <div className="flex flex-col">{renderControls}</div>
      <div className="flex flex-col">{renderSecondaryControls}</div>
    </div>
  );
}
