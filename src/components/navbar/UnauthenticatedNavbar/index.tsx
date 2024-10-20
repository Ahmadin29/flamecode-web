import Button from "@/components/button";
import { MENUS } from "@/consts/menus";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function UnauthenticatedNavbar() {

  const renderMenu = useMemo(()=>{
    return MENUS.map((item)=>{
      return(
        <Link
          href={item.href}
          key={item.key}
          className="group flex items-center justify-center flex-col"
        >
          <div className="bg-none h-[2px] w-8 rounded-full mb-2"></div>
          <span>{item.title}</span>
          <div className="bg-none h-[2px] w-8 rounded-full mt-2 group-hover:bg-white transition-all"></div>
        </Link>
      )
    })
  },[])

  return(
    <div className="sticky top-0 w-full bg-fill-300/10 p-4 pt-8 z-[999999] flex justify-between items-center">
      <div className="flex justify-between items-center w-[100%] max-w-[1200px] mx-auto">
        <div className="flex items-center">
          <Link
            href='/'
          >
            <Image
              src={require('@/assets/logo-white.svg')}
              alt="Logo"
              width={100}
            />
          </Link>
          <div className="flex items-center gap-4 ml-8">
            {renderMenu}
          </div>
        </div>
        <div className="">
          <Button
            label="Get Started"
          />
        </div>
      </div>
    </div>
  )
}