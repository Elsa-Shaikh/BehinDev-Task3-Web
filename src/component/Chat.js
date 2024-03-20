import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase";
import SendMessage from "./SendMessage";
const style = {
  main: `pb-5 mb-5 flex flex-col p-[10px] relative overflow-y-auto`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const firebase_query = query(
      collection(db, "messages"),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(firebase_query, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
