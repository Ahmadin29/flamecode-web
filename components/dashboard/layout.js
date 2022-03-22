import Footer from "./footer";
import Header from "./header";
import Leftbar from "./leftbar";

export default function DashboardLayout({children}) {
    return (
        <>
          <Header/>
          <main className="grid grid-cols-4 h-full" >
              <div className="bg-black-2 border-r border-r-black-3" >
                <Leftbar/>
              </div>
              <div className="col-span-2 h-screen p-4" >
                {children}
              </div>
              <div className="bg-black-2 border-l border-l-black-3">
                <Leftbar/>
              </div>
          </main>
        </>
      )
}