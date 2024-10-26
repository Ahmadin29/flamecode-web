import Button from "@/components/button";
import { ProjectContext } from "@/contexts/ProjectContext";
import { openDirectory } from "@/utilities/client-file-directory";
import { ElementPlus, FolderOpen } from "iconsax-react";
import Image from "next/image";
import { useCallback, useContext } from "react";

export default function AppPageProjectLanding() {

  const {setDirectory} = useContext(ProjectContext);

  const onOpenFolder = useCallback(async() => {
    try {
      // @ts-ignore
      const dirHandle = await window.showDirectoryPicker();
      const directories = await openDirectory(dirHandle);
      setDirectory(directories)
    } catch (error) {

    }
  },[]);

  return(
    //GRID_START
    <div className="flex h-[calc(100vh-60px)] w-[100%] items-center justify-center bg-fill-100 no-scrollbar relative">
      <div className="z-10 flex flex-col items-center shadow-xl px-48 py-24 text-center rounded-xl backdrop-blur-[100px] border border-fill-500">
        <Image
          src={require("@/assets/icon-white.svg")}
          className="w-[150px] mb-12"
          alt="logo"
        />
        <h1 className="text-2xl font-semibold" >Welcome To BeGRID</h1>
        <p>Create a new project or open an existing one</p>

        <div className="flex gap-4 mt-12 w-full">
          <button className="flex-1 flex-col group" >
            <div className="flex flex-1 items-center justify-center h-16 bg-fill-100 rounded-md mb-2 group-hover:bg-fill-500">
              <ElementPlus className="text-white" />
            </div>
            <span>New Project</span>
          </button>
          <button className="flex-1 flex-col group" onClick={onOpenFolder} >
            <div className="flex flex-1 items-center justify-center h-16 bg-fill-100 rounded-md mb-2 group-hover:bg-fill-500">
              <FolderOpen className="text-white" />
            </div>
            <span>Open</span>
          </button>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-primary blur-[100px] absolute z-1"></div>
    </div>
    //GRID_END
  )
}