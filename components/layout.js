import Context from "../contexts";
import Sidebar from "./sidebar";

export default function Layout({children}) {
    return(
        <Context>
            <div>
                <Sidebar/>
                <main className="ml-20" >
                    {children}
                </main>
            </div>
        </Context>
    )
}