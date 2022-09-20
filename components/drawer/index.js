import {Setting} from 'iconsax-react'
import Dropdown from '../dropdown';

export default function Drawer(params) {
    return (
        <aside className="w-64 h-screen right-0 shadow-md dark:bg-gray-700" aria-label="Sidebar">
            <div className='p-2 px-4 pr-3' >
                <div className='flex justify-between items-center' >
                    <div className='flex items-center' >
                        <Setting className='mr-2' variant="Bold" size={20}/>
                        <p className='text-sm' >Config</p>
                    </div>
                    <Dropdown
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
                    />
                </div>
            </div>
        </aside>
    )
}