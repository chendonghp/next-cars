import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
const logout = () => {
  const { setUser } = useAuth();
  const removeCookie = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };
  const router = useRouter();
  useEffect(() => {
    removeCookie();
    setUser(null);
    router.push("/");
  }, []);
  return <></>;
};
export default logout;
