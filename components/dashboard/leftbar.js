import Image from "next/image";
import {useState} from 'react';

export default function Leftbar(params) {

    const [pages,setPages] = useState([
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },
        {
            name:'HomeScreen',
            label:'Home Screen',
        },  
    ])

    const [components,setComponents] = useState([
        {
            name:'Basic Component',
            components:[
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
            ]
        },
        {
            name:'Basic Component',
            components:[
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
            ]
        },
        {
            name:'Basic Component',
            components:[
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
                {
                    name:'HomeScreen',
                    label:'Home Screen',
                },
            ]
        },
    ])

    return(
        <div className="text-white h-full" >
            <div className="bg-black flex flex-row justify-between items-center p-3" >
                <h1 className="font-semibold" >Pages</h1>
                <button className="hover:bg-black-3 p-2 flex items-center rounded" >
                    <div className="flex items-center justify-center" >
                        <Image src="/image/icon/add.svg" alt="Component" width={20} height={20}/>
                    </div>
                </button>
            </div>
            <div className="max-h-32 flex flex-col items-start overflow-scroll" >
                {
                    pages.map(v=>{
                        return(
                            <button className="p-3 py-2 w-full text-left hover:bg-black-3">
                                <span className="text-sm" >{v.name}</span>
                            </button>
                        )
                    })
                }
            </div>
            <div className="bg-black flex flex-row justify-between items-center p-3" >
                <h1 className="font-semibold" >Components</h1>
            </div>
            <div className="h-1/2 overflow-scroll" >
                {
                    components.map(v=>{
                        return(
                            <div>
                                <h2 className="p-3 font-semibold" >{v.name}</h2>
                                <div className="grid grid-cols-4" >
                                    {
                                        v.components.map(v=>{
                                            return(
                                                <button className="p-3 w-full text-left hover:bg-black-3 text-center">
                                                    <Image src="/image/icon/add.svg" alt="Component" width={30} height={30}/>
                                                    <span style={{fontSize:10}} >{v.name}</span>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}