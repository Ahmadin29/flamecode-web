export default function HomeExport() {
  return(
    <div className="z-10 flex justify-between items-center py-28 pb-48 bg-fill-300">
      <div className="flex items-center w-full max-w-[1200px] mx-auto">
        <div className="flex flex-wrap gap-4 basis-1/2 h-[50vh] rounded-md">
          <div className="flex w-[calc(50%-8px)] gap-4 h-full flex-col">
            <div className="w-full h-full bg-fill-500 shadow-lg rounded-md z-10"></div>
            <div className="w-full h-full bg-fill-500 shadow-lg rounded-md z-10"></div>
          </div>
          <div className="flex w-[calc(50%-8px)] gap-4 h-full flex-col mt-24">
            <div className="w-full h-full bg-fill-500 shadow-lg rounded-md z-10"></div>
            <div className="w-full h-full bg-fill-500 shadow-lg rounded-md z-10"></div>
          </div>
        </div>
        <div className="basis-1/2 p-8">
          <h1 className="text-8xl font-bold">BE FLEXIBLE</h1>
          <p>
            Build and export your project into many format language without worrying about the code,
            just focus on the project with drag and droping your desire component, React for web? React Native for mobile? You can do both with us
          </p>
        </div>
      </div>
    </div>
  )
}