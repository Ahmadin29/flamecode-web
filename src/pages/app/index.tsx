import AppPageProject from "@/components/pages/app";
import ProjectContextProvider from "@/contexts/ProjectContext";

export default function AppProject() {
  return (
    <ProjectContextProvider>
      <div className="w-full h-[100vh-60px] overflow-hidden no-scrollbar">
        <AppPageProject/>
      </div>
    </ProjectContextProvider>
  )
}