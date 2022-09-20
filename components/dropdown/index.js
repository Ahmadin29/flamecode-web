import { More } from "iconsax-react";
import { useState } from "react";

export default function Dropdown(props) {

    const [isShow,setShow] = useState()

    const renderList = ()=>{

        const isLast = (i)=>{
            return i+1 != props.items?.length ? "border-b border-gray-700" : ""
        }

        return(
            props.items?.map((v,i)=>{
                return(
                    <li>
                        <button onClick={()=>{
                            v.onClick && v.onClick()
                        }} className={'p-2 w-full text-left px-4 hover:bg-gray-900 '+isLast(i)} >
                            <span>{v.title}</span>
                        </button>
                    </li>
                )
            })
        )
    }

    const toggleDropdown = ()=>{
        setShow(!isShow);
    }

    const show = ()=>{
        return isShow ? 'block' : 'hidden'
    }

    return (
        <div className='relative text-xs' >
            <button onClick={()=>toggleDropdown()} className='dropdown p-1 rounded-full hover:bg-gray-800' >
                <More size={20} />
            </button>
            <ul className={'absolute z-10 bg-gray-800 text-white rounded overflow-hidden right-0 '+show()} style={{minWidth:150}} >
                {renderList()}
            </ul>
        </div>
    )
}