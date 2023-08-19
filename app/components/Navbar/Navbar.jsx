import Link from "next/link";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { Logo } from "./main.svg";

const Navbar = () => {
  const [loading, setLoading] = useState(true);

  const { user, googleSignIn, logOut } = UserAuth();

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      setLoading(false);
    };
    checkAuth();
  }, [user]);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className="h-20 w-full border-b-2 flex  items-center justify-between p-2 text-white bg-[#20455A]">
      <ul className="flex items-center justify-evenly px-6">
        <li>
          <img src={Logo} alt="logo" />
        </li>
        <li className="mr-4 cursor-pointer">
          <Link href="/" className="font-bold text-3xl font-serif">
            The News
          </Link>
        </li>
        <li className=" cursor-pointer pt-2">
          <Link href="/saved" className="font-sans">
            Saved News
          </Link>
        </li>
      </ul>
      {loading ? (
        <p>Authenticating...</p>
      ) : !user ? (
        <ul className="flex justify-between">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign Up
          </li>
        </ul>
      ) : (
        <div className="px-4">
          <span className="mr-4">Welcome {user.displayName}!</span>
          <button
            onClick={handleLogOut}
            className="w-24 p-2 cursor-pointer bg-[#00B099] rounded-lg"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
