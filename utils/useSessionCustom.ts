import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type fetchResponse = {
    email: string;
    valid: boolean;
  };

const useSessionCustom = ()=>{
  const { data: session } = useSession();
  const [isValidUser, setValidUser] = useState(false);
  const

  // Fetch content from protected route
  useEffect(() => {
    console.log("1",session)
    const fetchData = async () => {
      const res = await fetch("/api/session");
      const json = await res.json() as fetchResponse;
      if (json) {
        console.log("json",json)
        setValidUser(json.valid);
      }
    };
    fetchData();
  }, [session]);
}

export default useSessionCustom
