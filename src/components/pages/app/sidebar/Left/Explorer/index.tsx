import Button from "@/components/button";
import { openDirectory } from "@/utilities/client-file-directory";
import { FolderAdd } from "iconsax-react";
import { useCallback, useContext, useMemo } from "react";
import DirectorySnippet from "./DirectorySnippet";
import { ProjectContext } from "@/contexts/ProjectContext";

export default function LeftSideBarExplorer() {

  const {setDirectory, directory} = useContext(ProjectContext);

  const onOpenFolder = useCallback(async() => {
    try {
      // @ts-ignore
      const dirHandle = await window.showDirectoryPicker();
      const directories = await openDirectory(dirHandle);
      setDirectory(directories)
    } catch (error) {
      
    }
  },[]);

  const directories = useMemo(()=>{
    return directory.map((item:any)=>{
      return <DirectorySnippet key={item.path} item={item}/>
    })
  },[directory])

  return(
    <div className="flex-1 max-w-[360px] min-h-[320px] max-h-[40%] overflow-y-scroll border-b border-b-fill-500">
      <div className="flex font-medium sticky top-0 bg-fill-300 items-center justify-between p-2 border-b border-b-fill-500">
        Explorer
        <Button
          variant="ghost"
          rightIcon={<FolderAdd className="w-[18px]"/>}
          className="!p-0 !px-2 hover:!bg-fill-100"
          label="Open"
          labelClassName="text-xs !mr-1"
          onClick={onOpenFolder}
        ></Button>
      </div>

      <div className="text-sm">
        {directories}
      </div>
    </div>
  )
}