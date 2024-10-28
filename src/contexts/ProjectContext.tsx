import { createContext, useEffect, useState } from "react";

interface ProjectContextProps {
  directory: any;
  setDirectory: any;
  selectedFile: any;
  setSelectedFile: any;
  content: any;
  setContent: any;
  selectedLayer: any;
  setSelectedLayer: any;
  activeLayer: any;
  setActiveLayer: any;
  page: any;
  setPage: any;
  isLeftSidebarOpen: boolean;
  setIsLeftSidebarOpen: any;
}

export const ProjectContext = createContext<ProjectContextProps>({
  directory: [],
  setDirectory: () => {},
  selectedFile: {},
  setSelectedFile: () => {},
  content: {},
  setContent: () => {},
  activeLayer: "",
  setActiveLayer: () => {},
  selectedLayer: "",
  setSelectedLayer: () => {},
  page: "",
  setPage: () => {},
  isLeftSidebarOpen: true,
  setIsLeftSidebarOpen: () => {},
});

const ProjectContextProvider = ({ children }: any) => {
  const [directory, setDirectory] = useState([]);
  const [selectedFile, setSelectedFile] = useState({});
  const [content, setContent] = useState({});
  const [activeLayer, setActiveLayer] = useState("");
  const [selectedLayer, setSelectedLayer] = useState("");
  const [page, setPage] = useState("explorer");
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);

  useEffect(()=>{
    setIsLeftSidebarOpen(true);
  },[page])

  return (
    <ProjectContext.Provider
      value={{
        directory,
        setDirectory,
        selectedFile,
        setSelectedFile,
        content,
        setContent,
        activeLayer,
        setActiveLayer,
        selectedLayer,
        setSelectedLayer,
        page,
        setPage,
        isLeftSidebarOpen,
        setIsLeftSidebarOpen,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
