import BaseModal from "@/components/modal";
import { useMemo, useState } from "react";
import { atomOneDark, CodeBlock, dracula, github } from "react-code-blocks";
import CODE_SNIPPET from "@/consts/app/code-snippet";
import Button from "@/components/button";

interface Props {
  isOpen: boolean,
  setIsOpen: any,
  onOpenFolder: ()=>void
}

export default function LandingNewProjectModal({ isOpen,setIsOpen,onOpenFolder }: Props) {

  const [framework,setFramework] = useState('react');

  const stepOne = useMemo(()=>{
    return(
      <CodeBlock
        language="bash"
        text="npx create-react-app my-app"
        theme={dracula}
        customStyle={{
          borderLeft: '4px solid #1D4ED8',
          paddingLeft: '8px',
        }}
      />
    )
  },[])

  const stepTwo = useMemo(()=>{
    return(
      <div className="flex flex-col relative">
        <p className="mb-4 text-sm text-slate-400" >Update your component to be compitable with BeGRID Standard by adding<br/><span className="bg-fill-500 text-white" >//GRID_START</span> and <span className="bg-fill-500 text-white" >//GRID_END</span> to your component</p>
        <div className="relative">
          <div className="flex items-center absolute right-3 top-3">
            <span className="mr-2 text-xs">Framework: </span>
            <select className="bg-fill-500 max-w-[100px] text-xs rounded-md px-3 py-1" onChange={e=>setFramework(e.target.value)}>
              <option value="react">ReactJS / NextJS</option>
              <option value="reactNative">React Native</option>
              <option value="vue">VueJS</option>
            </select>
          </div>
          <CodeBlock
            language="javascript"
            text={CODE_SNIPPET[framework]}
            theme={atomOneDark}
            customStyle={{
              borderLeft: '4px solid #1D4ED8',
              paddingLeft: '8px',
              fontSize: '14px',
            }}
          />
        </div>
      </div>
    )
  },[framework])

  return (
    <BaseModal isOpen={isOpen} setIsOpen={setIsOpen} title="Getting Started">
      <div className="flex flex-col">
        <p className="text-xs" >BeGrid is a visual code editor designed to streamline your coding experience by providing a user-friendly interface for visualizing code.</p>

        {/* STEPS */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3 font-semibold">
            {/* <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-white">#1</span>
            </div> */}
            <span>Create a new project</span>
          </div>
          {stepOne}
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex items-center font-semibold justify-between">
            <span>Update Your Component</span>
          </div>
          {stepTwo}
        </div>

        <div className="flex items-center justify-between mt-4 mb-24">
          <div className="flex flex-col">
            <span className="font-semibold" >You are set! 🎉</span>
            <span className="text-slate-400 text-sm">You can now start building your project</span>
          </div>
          <Button
            label="Start Building"
            variant="primary"
            onClick={onOpenFolder}
          />
        </div>
      </div>
    </BaseModal>
  );
}
