import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignInBar from "../SignInBar/SignInBar";
import NavBar from "../Navigation/NavBar";

export default function Header() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInBar />
        </SignedOut>

        <SignedIn>
          <NavBar />
        </SignedIn>
      </header>
    </>
  );
}
