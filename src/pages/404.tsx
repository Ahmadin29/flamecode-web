import Button from "@/components/button";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex h-[calc(100vh-70px)] w-screen items-center justify-center bg-fill-100">
      <div className="flex flex-col items-center gap-4 text-center z-10">
        <Image
          src={require("@/assets/icon-white.svg")}
          width={150}
          height={150}
          alt="Logo"
        />
        <h1 className="text-4xl font-bold">You are lost</h1>
        <p className="">The page you are looking for does not exist</p>
        <Button
          className="flex items-center hover:bg-fill-100"
          label="Back to Home"
          href="/"
        />
      </div>
      <div className="w-[300px] h-[300px] bg-primary blur-[100px] absolute z-1 animate-[]"></div>
    </div>
  );
}
