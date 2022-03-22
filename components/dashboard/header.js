import Image from "next/image";

export default function DashboardHeader(params) {
    return(
        <div className="w-full text-white bg-black-2 flex flex-row justify-between border-b border-b-black-3" >
            <div className="flex flex-row" >
                <button className="hover:bg-black-3 p-4 flex align-center justify-center" >
                    <Image src="/logo.svg" alt="Flamecode Logo" width={30} height={30} />
                </button>
                <button className="hover:bg-black-3 p-4 flex items-center" >
                    <div className="mr-3 flex items-center justify-center" >
                        <Image src="/image/icon/components.svg" alt="Component" width={30} height={30}/>
                    </div>
                    <span className="text-sm" >Components</span>
                </button>
                <button className="hover:bg-black-3 p-4 flex items-center" >
                    <div className="mr-3 flex items-center justify-center" >
                        <Image src="/image/icon/navigation.svg" alt="Component" width={30} height={30}/>
                    </div>
                    <span className="text-sm" >Navigation</span>
                </button>
                <button className="hover:bg-black-3 p-4 flex items-center" >
                    <div className="mr-3 flex items-center justify-center" >
                        <Image src="/image/icon/integration.svg" alt="Component" width={30} height={30}/>
                    </div>
                    <span className="text-sm" >Integration</span>
                </button>
            </div>
            <div className="flex flex-row" >
                <button className="hover:bg-black-3 p-4 flex align-center justify-center" >
                    <Image src="/logo.svg" alt="Flamecode Logo" width={30} height={30} />
                </button>
            </div>
        </div>
    )
}