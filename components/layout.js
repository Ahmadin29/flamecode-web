import Sidebar from "./sidebar";

export default function Layout({children}) {
    return(
        <div>
            <Sidebar/>
            <main className="ml-20" >
                {children}
            </main>
        </div>
    )
}