import { useState } from "react"

export default function Emulator(params) {

    const [size,setSize] = useState("504x252")

    return(
        <div className="p-8 bg-gray-500 h-screen overflow-y-scroll grow flex flex-col items-center" >
            <div style={{width:size.split("x")[1]+"px"}}>
                <span className="text-sm" >Screen Size</span>
                <select className="w-full p-2 mt-2 rounded bg-gray-600" onChange={(e)=>{
                    setSize(e.target.value)
                }}>
                    <option value="448x252" >Android Small (16:9)</option>
                    <option value="504x252" selected >Android Medium (18:9)</option>
                    <option value="560x252" >Android Large (20:9)</option>
                </select>
            </div>
            <div className="flex items-center justify-center mt-6" >
                <div className={`bg-white overflow-y-scroll border-4 border-gray-900`} style={{width:size.split("x")[1]+"px",height:size.split("x")[0]+"px",borderRadius:"20px"}} >
                    <div className="w-full h-7 bg-gray-300 flex items-center" >
                    </div>
                </div>
            </div>
        </div>
    )
}