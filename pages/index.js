import {AddCircle } from 'iconsax-react'
import Link from 'next/link'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Header
        title="BeGrid | Make an app with less code"
        description="BeGrid | Make an app with less code"
      />
      <div className='p-24 w-full' >
        <div className='flex items-center justify-between border-b pb-4 border-b-gray-800' >
          <h1 className='font-bold text-2xl' >Your Projects</h1>
        </div>
        <div className='flex items-center flex-wrap border-b py-4 border-b-gray-800' >
          <Link href='/projects/new'>
            <button className='p-16 px-32 flex flex-col items-center text-sm rounded-lg bg-gray-800 border border-gray-800 hover:border-gray-500 hover:bg-gray-700' >
              <AddCircle variant="Bold" className='mb-4' size={50} />
              New Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
