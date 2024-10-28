import React, { useContext } from "react";
import NavBar from "./navbar";
import { Poppins } from 'next/font/google'
import LayoutContextProvider, { LayoutContext } from "@/contexts/LayoutContext";
import Head from "next/head";

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
      <div className={poppins.className}>
        <NavBar/>
        <div className="">
          {children}
        </div>
      </div>
    </LayoutContextProvider>
  );
}
