import { AddCircle, Folder2 } from "iconsax-react";

export default function NewProjects(params) {
    return (
        <div className='p-24 w-full' >
            <div className='flex justify-between items-center border-b pb-4 border-b-gray-800' >
                <div>
                    <h1 className='font-bold text-2xl' >New Project</h1>
                    <span className="text-xs" >Create new project</span>
                </div>
                <div className="flex items-center" >
                    <button className="flex items-center bg-transparent border mr-3 border-red-700 p-2 px-8 rounded" >
                        Cancel
                    </button>
                    <button className="flex items-center bg-blue-700 p-2 px-8 rounded hover:bg-blue-600" >
                        Let's Rock
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 p-4 px-0" >
                <div className="bg-gray-800 p-8" >
                    <h1 className="font-bold text-xl mb-3" >Projects Data</h1>
                    <div className="mb-" >
                        <span className="text-xs" >Name</span>
                        <input
                            className="form-control bg-transparent border border-gray-700 p-2 px-3 rounded w-full"
                        />
                        <span className="text-xs text-gray-500" >You can change projects name later</span>
                    </div>
                    <div className="mb-3" >
                        <span className="text-xs" >Slug</span>
                        <input
                            className="form-control bg-gray-700 border border-gray-700 p-2 px-3 rounded w-full"
                            disabled
                            value='asd'
                        />
                    </div>
                    <div className="flex flex-col" >
                        <span className="text-xs" >Folder</span>
                        <button className="flex items-center p-2 px-3 rounded my-2 text-left border border-gray-700" >
                            <Folder2 className="mr-3 text-gray-500" variant="Bold" />
                            <span className="text-xs text-gray-500" >Select folder to save the projects</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-2 bg-gray-700 p-8" >
                    <h1 className="font-bold text-xl mb-3" >Template</h1>
                </div>
            </div>
        </div>
    )
}