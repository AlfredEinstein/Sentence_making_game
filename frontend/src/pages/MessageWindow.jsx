import React from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

function MessageWindow() {
  const send_message = () => {
    socket.emit("received_message", { message: "hello world!!!" });
  };
  useEffect(() => {
    socket.on("sending_message", (data) => {
      alert(data.message);
      console.log(data.message);
    });
  }, [socket]);
  return (
    <>
      <h1>hello</h1>
      <button onClick={send_message}>send</button>
    </>
  );
}

export default MessageWindow;
