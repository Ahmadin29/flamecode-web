import {Element4 as HomeIcon,Folder2,PlayCircle} from 'iconsax-react'
import Link from 'next/link';

export default function Sidebar(params) {

    const isActive = (url)=>{
        const current = '';

        return 'bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
    }

    return (
        <aside className="w-20 h-full shadow-md dark:bg-gray-800 absolute" aria-label="Sidebar">
            <div className="p-4 mt-8">
                <Link href="#">
                    <div className="flex justify-center">
                        <div className="shrink-0">
                            <img src="/assets/logo.svg" className="w-10" alt="Avatar"/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="overflow-y-auto py-4 px-3 pt-2 rounded">
                <ul className="space-y-1 my-2">
                    <li>
                        <Link href="/">
                            <button className='flex justify-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700' >
                                <HomeIcon variant='Bold' />
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <button className='flex justify-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700' >
                                <Folder2 variant='Bold' />
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tutorials">
                            <button className='flex justify-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700' >
                                <PlayCircle variant='Bold' />
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-center bottom-8 w-full absolute flex justify-center">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar"/>
            </div>
        </aside>
    )
}