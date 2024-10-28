import { createContext, useState } from "react";

interface LayoutContextProps {
  title: string;
  description: string;
  keywords: string;
  setTitle: any;
  setDescription: any;
  setKeywords: any;
}
export const LayoutContext = createContext<LayoutContextProps>({
  title: '',
  description: '',
  keywords: '',
  setTitle: () => {},
  setDescription: () => {},
  setKeywords: () => {},
});

const LayoutContextProvider = ({ children }: any) => {

  const [title, setTitle] = useState('BeGRID | Make an App project with less code');
  const [description, setDescription] = useState('Make an App project with less code');
  const [keywords, setKeywords] = useState('BeGRID, BeGrid, GRID, Grid, App, Project, Create, Build, Less, Code');

  return (
    <LayoutContext.Provider
      value={{
        title,
        description,
        keywords,
        setTitle,
        setDescription,
        setKeywords,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
