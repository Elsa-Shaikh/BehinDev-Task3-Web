import React from "react";
import { auth } from "../firebase/firebase";

const style = {
  button: `bg-blue-800 px-4 py-2 hover:bg-red-500 text-white rounded-lg`,
};

const Logout = () => {
  // eslint-disable-next-line
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button className={style.button} onClick={() => auth.signOut()}>
      Logout
    </button>
  );
};

export default Logout;
