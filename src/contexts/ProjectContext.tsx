import { createContext, useState } from "react";

interface ProjectContextProps {
  directory:any;
  setDirectory:any;
  selectedFile:any;
  setSelectedFile:any;
  content:any;
  setContent:any;
  selectedLayer:any;
  setSelectedLayer:any;
  activeLayer:any;
  setActiveLayer:any;
}

export const ProjectContext = createContext<ProjectContextProps>({
  directory: [],
  setDirectory: () => {},
  selectedFile: {},
  setSelectedFile: () => {},
  content: {},
  setContent: () => {},
  activeLayer: '',
  setActiveLayer: () => {},
  selectedLayer: '',
  setSelectedLayer: () => {},
});

const ProjectContextProvider = ({ children }:any) => {
  const [directory, setDirectory] = useState([]);
  const [selectedFile, setSelectedFile] = useState({});
  const [content, setContent] = useState({});
  const [activeLayer, setActiveLayer] = useState('');
  const [selectedLayer, setSelectedLayer] = useState('');

  return (
    <ProjectContext.Provider value={{ directory, setDirectory, selectedFile, setSelectedFile, content, setContent, activeLayer, setActiveLayer, selectedLayer, setSelectedLayer }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;