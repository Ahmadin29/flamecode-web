import Button from "@/components/button"
import { FLOW } from "@/consts/flow"
import { useMemo } from "react"

export default function HomePipeline() {

  const renderPipe = useMemo(()=>{
    return FLOW.map((item,index)=>{
      return(
        <div className="flex flex-col items-center text-center" key={index}>
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded text-4xl font-bold bg-primary">
            {index + 1}
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-2xl mb-0 font-bold">{item.title}</h1>
            <span className="text-sm">{item.description}</span>
          </div>
        </div>
      )
    })
  },[])

  return(
    <div className="z-10 flex justify-between items-center py-28 pb-12 bg-fill-300/40 bg-gradient-to-b from-fill-100 to-fill-300">
      <div className="flex flex-col w-full max-w-[1200px] mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-center font-bold text-2xl">Deploy with only 3 simple steps</h1>
          <span>Build, Sync, Deploy</span>
        </div>
        <div className="flex items-center justify-center gap-16 mb-16">
          {renderPipe}
        </div>
        <div className="flex items-center gap-4 justify-center">
          <Button
            label="See Tutorial"
            variant="outlined"
            labelClassName="text-base"
          />
          <Button
            label="Start Now"
            labelClassName="text-base"
          />
        </div>
      </div>
    </div>
  )
}