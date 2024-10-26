import React, { useEffect } from "react";
import io from "socket.io-client";


function MessageWindow() {
  const send_message = () => {
    const socket = io.connect("http://localhost:3000");
    socket.emit("received_message", { message: "hello world!!!" });
  };
  useEffect(() => {
    const socket = io.connect("http://localhost:3000");
    socket.on("sending_message", (data) => {
      alert(data.message);
      console.log(data.message);
    });
    return()=>{
      socket.disconnect();
    }
  }, []);
  return (
    <>
      <h1>hello</h1>
      <button onClick={send_message}>send</button>
    </>
  );
}

export default MessageWindow;
