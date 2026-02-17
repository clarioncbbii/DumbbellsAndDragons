import Link from "next/link";
import NavDropdownMenu from "./NavDropdownMenu";
import { UserButton } from "@clerk/nextjs";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <NavDropdownMenu />
        <Link href={"/"}>⚔️ Dumbbells & Dragons</Link>
        <UserButton />
      </nav>
    </>
  );
}
