export default function HomeHero() {
  return(
    <div className=" max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-between items-center py-28 pb-12">
        <div className="relative flex items-center justify-center w-full h-[60vh] rounded-2xl">
          <div className="bg-primary w-[1000px] h-[500px] absolute blur-[900px] z-0 rounded-full animate-pulse"></div>
          <div className="w-full h-full bg-fill-300 rounded-2xl z-10"></div>
        </div>
        <div className="flex w-full flex-col text-center mt-12 z-10">
          <h1 className="text-8xl font-bold">BE <span className="bg-primary leading-none px-4">GRID</span></h1>
          <span className="text-xl mt-8">Make an App projects<br/>with less code</span>
        </div>
      </div>
    </div>
  )
}