import React from "react";
import Navbar from "./component/Navbar";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./component/Chat";
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          <Navbar />
          {user ? <Chat /> : null}
        </section>
      </div>
    </>
  );
}

export default App;
