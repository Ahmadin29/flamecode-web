import {Element2,ArrowCircleLeft,ArrowCircleRight,HierarchySquare3} from 'iconsax-react'
import { useContext } from 'react';
import ComponentsContext from '../../contexts/componentContext';
import Dropdown from '../dropdown';

export default function Components(params) {

    const {componentContext,setComponentContext} =useContext(ComponentsContext);

    const componentsClass = ()=>{
        return componentContext ? "w-96" : "w-16"
    }

    return (
        <aside className={"h-screen dark:bg-gray-700 transition "+componentsClass()} aria-label="Sidebar">
            <div className='p-2 px-4 pr-3' >
                <div className='flex justify-between items-center' >
                    <div className='flex items-center' >
                        <Element2 className='mr-2' variant="Bold" size={30}/>
                        {componentContext && <p className='text-sm' >Components</p>}
                    </div>
                    {componentContext && <Dropdown
                        items={[
                            {
                                title:'New File',
                            },
                            {
                                title:'New Folder',
                            },
                            {
                                title:'Hide Dock',
                            },
                        ]}
                    />}
                </div>
            </div>

            <button onClick={()=>{
                setComponentContext(!componentContext)
            }} className="text-center bottom-4 absolute px-4">
                {componentContext && <ArrowCircleLeft className='mr-2' variant="Outline" size={30}/>}
                {!componentContext && <ArrowCircleRight className='mr-2' variant="Outline" size={30}/>}
            </button>
        </aside>
    )
}