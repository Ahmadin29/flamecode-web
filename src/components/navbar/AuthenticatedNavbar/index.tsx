import { Home, Home2, Home3, User, UserOctagon } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function AuthenticatedNavbar() {
  return(
    <div className="sticky top-0 w-full bg-fill-100 p-4 px-12 flex justify-between items-center border-b border-b-fill-300">
      <div className="flex">
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
      <div className="flex">
        <Link
          href='/'
          className="flex items-center gap-4"
        >
          Ahmad Saefudin
          <User className="text-2xl"/>
        </Link>
      </div>
    </div>
  )
}