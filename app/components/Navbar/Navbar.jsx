import Link from "next/link";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";

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
    <div className="h-20 w-full  flex  items-center justify-between px-12 text-white bg-[#20455A]">
      <ul className="flex items-center justify-evenly px-6">
        <li>
          <img className="h-14 w-14 text-black " src="/main.svg" alt="logo" />
        </li>
        <li className="mr-6 ml-3 cursor-pointer ">
          <Link href="/" className="font-bold text-4xl font-serif">
            NewsWave
          </Link>
        </li>
        <li className=" cursor-pointer pt-2">
          <Link href="/saved" className="font-sans">
            Favourites
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
          <span className="mr-4 font-sans">Welcome {user.displayName}!</span>
          <button
            onClick={handleLogOut}
            className="w-24 p-2 cursor-pointer bg-[#00B099] rounded-lg font-sans"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
