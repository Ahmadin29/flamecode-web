import { Head } from "next/document";
import Footer from "./footer";
import Header from "./header";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
      )
}