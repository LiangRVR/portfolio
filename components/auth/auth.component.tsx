import React, { ReactNode, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import DevIcon from "../dev-icon/dev-icon.component";

type Props = {
  children: ReactNode;
};

const Auth = ({ children }: Props) => {
  const sessionResponse = useSession();
  const session = sessionResponse.data as (Session & { valid: boolean }) | null;
  const [show, toggleShow] = useState(false);

  if (session) {
    if (session.valid) {
      return <>{children}</>;
    }
    signOut();
    toggleShow(true);
  }

  const handleClick = () => {
    toggleShow(false);
    signIn("github");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="space-y-4 flex flex-col justify-center items-center">
        <DevIcon iconName="github-original" className="h-32 w-32" />
        <button
          className="px-6 mx-3 my-3 md:my-0 py-2 w-32 text-center border border-[#286fb4] bg-[#286fb4] text-white rounded-full uppercase  transition-all hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          Sign in
        </button>
        {show && <h2 className="text-red-500">Wrong User, Try again</h2>}
      </div>
    </div>
  );
};

export default Auth;
