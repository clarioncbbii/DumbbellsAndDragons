import Link from "next/link";
import NavDropdownMenu from "./NavDropdownMenu";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-left">
        <NavDropdownMenu />
      </div>

        <Link className="title-logo" href={"/"}>
          ⚔️ <span className="title">Dumbbells & Dragons</span>
        </Link>
        
        <div className="nav-right">
        <UserButton />
      </div>
      </nav>
    </>
  );
}
