const CODE_SNIPPET:any = {
  react:
`import Image from "next/image";

export default function YourComponentPage() {
    return(
        //GRID_START
        <div className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center overflow-hidden bg-fill-100 py-6 sm:py-12">
            <div className="bg-fill-500 p-4 min-w-[400px] rounded-md flex flex-row items-center">
                <Image src={require("@/assets/icon-white.svg")} className="w-[200px] h-[200px] mr-4" alt="logo"/>
                <div className="flex flex-col">
                    <h1 className="text-[50px] font-bold mb-0 leading-none" >BEGRID</h1>
                    <p className="mb-4">Make an App projects with less code</p>
                    <button className="bg-primary text-white px-4 py-2 rounded-md">Get Started</button>
                </div>
            </div>
        </div>
        //GRID_END
    )
}`
}

export default CODE_SNIPPET;