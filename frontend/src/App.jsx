import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
function App() {
  const socket = io("http://localhost:3000");
  const [receivingData, setReceivingData] = useState([]);
  const [sendingData, setSendingData] = useState("");

  const connectSocket = () => {
    console.log("object");
    socket.on("message", (data) => {
      console.log("object");
      setReceivingData(data);
    });
    socket.on("connection", (socket) => {
      console.log(socket);
    });
  };
  console.log("hello");
  socket.on("message", (data) => {
    setReceivingData(data);
  });

  const sendMessage = () => {
    console.log(sendingData);
    socket.emit("message", sendingData);
    setSendingData("");
  };

  useEffect(() => {
    connectSocket();
  }, [receivingData]);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={sendingData}
          onChange={(e) => setSendingData(e.target.value)}
        />
        <button onClick={sendMessage}>send</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {receivingData.map((data, index) => {
          return <h3 key={index}>{data}</h3>;
        })}
      </div>
    </div>
  );
}

export default App;
