import AppPageProject from "@/components/pages/app";
import { LayoutContext } from "@/contexts/LayoutContext";
import ProjectContextProvider from "@/contexts/ProjectContext";
import Head from "next/head";
import { useContext, useEffect } from "react";

export default function AppProject() {
  const {setTitle,title,description,keywords} = useContext(LayoutContext);

  useEffect(()=>{
    setTitle('Workspace | BeGRID');
  },[])

  return (
    <ProjectContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/icon-white.svg" />
      </Head>
      <div className="w-full h-[100vh-60px] overflow-hidden no-scrollbar">
        <AppPageProject/>
      </div>
    </ProjectContextProvider>
  )
}