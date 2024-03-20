import React from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Logout from "./Logout";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between align-center p-4`,
  heading: `text-white text-3xl`,
  wrapper: `flex justify-center`,
};
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}> My Chat App</h1>
      <div className={style.wrapper}>
        {user ? <Logout /> : <GoogleButton onClick={googleSignIn} />}
      </div>
    </div>
  );
};

export default Navbar;
