import { useState } from "react";
import ExploreContext from "./exploreContext";
import ComponentsContext from "./componentContext";

export default function Context({children}) {

    const [explore,setExplore] = useState(true);
    const [componentContext,setComponentContext] = useState(true);

    return(
        <ExploreContext.Provider value={{ explore , setExplore }} >
            <ComponentsContext.Provider value={{ componentContext , setComponentContext }} >
                {children}
            </ComponentsContext.Provider>
        </ExploreContext.Provider>
    )
}