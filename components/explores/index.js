import { ArrowCircleLeft, ArrowCircleRight,HierarchySquare2, Grid1 } from 'iconsax-react'
import { useContext } from 'react';
import ExploreContext from '../../contexts/exploreContext';
import Dropdown from '../dropdown';

export default function Folders(params) {

    const { explore, setExplore } = useContext(ExploreContext);

    const exploreClass = () => {
        return explore ? "w-64" : "w-16"
    }

    return (
        <aside className={"border-r border-gray-600 dark:bg-gray-700 " + exploreClass()} aria-label="Sidebar">
            <div className='p-2 px-4 pr-3' >
                <div className='flex justify-between items-center' >
                    <div className='flex items-center' >
                        <Grid1 className='mr-2' variant="Bold" size={explore ? 20 : 30} />
                        {explore && <p className='text-sm' >Screens</p>}
                    </div>
                    {
                        explore && <Dropdown
                            items={[
                                {
                                    title: 'New Screen',
                                },
                            ]}
                        />
                    }
                </div>
            </div>

            <div className='p-2 px-4 pr-3' >
                <div className='flex justify-between items-center' >
                    <div className='flex items-center' >
                        <HierarchySquare2 className='mr-2' variant="Bold" size={explore ? 20 : 30} />
                        {explore && <p className='text-sm' >Navigation</p>}
                    </div>
                    {
                        explore && <Dropdown
                            items={[
                                {
                                    title: 'New Navigation',
                                },
                            ]}
                        />
                    }
                </div>
            </div>

            <button onClick={() => {
                setExplore(!explore)
            }} className="text-center bottom-4 absolute px-4">
                {explore && <ArrowCircleLeft className='mr-2' variant="Outline" size={30} />}
                {!explore && <ArrowCircleRight className='mr-2' variant="Outline" size={30} />}
            </button>
        </aside>
    )
}