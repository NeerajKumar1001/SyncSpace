import {SignedIn,SignedOut,SignInButton,UserButton,} from "@clerk/nextjs";
import Image from "next/image";
// import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <button>
          login
        </button>
      </SignInButton>
    </div>
  );  
}
