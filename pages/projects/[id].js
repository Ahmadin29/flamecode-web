import { useContext } from "react";
import Components from "../../components/components";
import Drawer from "../../components/drawer";
import LeftDrawer from "../../components/drawer/left";
import Emulator from "../../components/emulator";
import Folders from "../../components/explores";
import Header from "../../components/header";
import ComponentsContext from "../../contexts/componentContext";
import ExploreContext from "../../contexts/exploreContext";

export default function NewProjects(params) {

    const {explore} = useContext(ExploreContext);
    const {componentContext} = useContext(ComponentsContext);

    return(
        <div>
            <Header
                title="Project Name"
            />
            <div className="flex" >
                <LeftDrawer/>
                <Emulator/>
                <Drawer/>
            </div>
        </div>
    )
}