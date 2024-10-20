import { useRouter } from "next/router";
import UnauthenticatedNavbar from "./UnauthenticatedNavbar";
import AuthenticatedNavbar from "./AuthenticatedNavbar";

export default function NavBar() {

  const router = useRouter();

  if (router.asPath === '/') {
    return <UnauthenticatedNavbar/>
  }

  return <AuthenticatedNavbar/>
}