import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../button";
import { useMemo } from "react";
import { MENUS } from "@/consts/menus";
import Link from "next/link";

export default function NavBar() {

  const router = useRouter();

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

  if (router.asPath === '/') {
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

  return (
    <div className="sticky top-0 w-full bg-fill-300 p-4 px-12 flex justify-between items-center">
      <Link
        href='/'
      >
        <Image
          src={require('@/assets/logo-white.svg')}
          alt="Logo"
          width={100}
        />
      </Link>
    </div>
  )
}