import React from "react";
import { Poppins } from 'next/font/google'
import LayoutContextProvider from "@/contexts/LayoutContext";
import ProjectContextProvider from "@/contexts/ProjectContext";

interface Props {
  children: React.ReactNode;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

export default function Layout({ children }: Props) {
  return (
    <LayoutContextProvider>
      <ProjectContextProvider>
        <div className={poppins.className}>
          <div className="">
            {children}
          </div>
        </div>
      </ProjectContextProvider>
    </LayoutContextProvider>
  );
}
