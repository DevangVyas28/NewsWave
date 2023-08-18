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
    <div className="h-20 w-full border-b-2 flex  items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/" className="font-bold">
            The News
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
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
        <div>
          <span>Welcome {user.displayName}!</span>
          <span onClick={handleLogOut} className="p-2 cursor-pointer">
            Log Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
