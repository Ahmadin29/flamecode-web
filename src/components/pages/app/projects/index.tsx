import { ElementPlus } from "iconsax-react";
import AppPageProjectSnippet from "./ProjectSnippet";

export default function AppPageProjects() {
  return(
    <div className="w-full mt-12">
      <div className="flex justify-between py-4 w-full border-b border-b-fill-300">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Projects</h1>
        </div>
        <button className="flex items-center hover:bg-fill-300 p-2 px-8 rounded text-sm transition-all">
          <ElementPlus width={18} height={18}/>
          <span className="ml-3">New Project</span>
        </button>
      </div>

      <div className="flex gap-4 flex-wrap items-center mt-8">
        <AppPageProjectSnippet/>
        <AppPageProjectSnippet/>
        <AppPageProjectSnippet/>
        <AppPageProjectSnippet/>
        <AppPageProjectSnippet/>
      </div>
    </div>
  )
}