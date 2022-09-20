import { AddCircle, Folder2 } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Input from '../../components/input'

export default function NewProjects(params) {

    const [name,setName] = useState('');
    const [slug,setSlug] = useState('')

    useEffect(()=>{
        setSlug(name.replace(/\s/g,'-'),'-')
    },[name])
        
    return (
        <div className='p-24 w-full' >
            <Header
                title="New Project | BeGrid | Make an app with less code"
                description="BeGrid | Make an app with less code"
            />
            <div className='flex justify-between items-center border-b pb-4 border-b-gray-800' >
                <div>
                    <h1 className='font-bold text-2xl' >New Project</h1>
                    <span className="text-xs" >Create new project</span>
                </div>
                <div className="flex items-center" >
                    <button className="flex items-center bg-transparent border mr-3 border-red-700 p-2 px-8 rounded" >
                        Cancel
                    </button>
                    <Link href={"/projects/123"} >
                        <button className="flex items-center bg-blue-700 p-2 px-8 rounded hover:bg-blue-600" >
                            Let's Rock
                        </button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-3 p-4 px-0" >
                <div className="bg-gray-800 p-8" >
                    <h1 className="font-bold text-xl mb-3" >Projects Data</h1>
                    <Input
                        label="Name"
                        message="You can change projects name later"
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                    <Input
                        label="Slug"
                        value={slug}
                        disabled
                        containerClass="mb-3"
                    />
                </div>
                <div className="col-span-2 bg-gray-700 p-8" >
                    <h1 className="font-bold text-xl mb-3" >Template</h1>
                </div>
            </div>
        </div>
    )
}