const express = require("express");
const app = express();
const loginAndRegistration = require("./routes/loginAndRegistration");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const connectToMongo = require("./config/mongoDbConfig");
require("dotenv").config();

app.use(cors());
app.use(express.json());
connectToMongo();
const server = http.createServer(app);

app.use("/api/loginregister", loginAndRegistration);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("received_message", (data) => {
    console.log(data.message);
    socket.broadcast.emit("sending_message", data);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server Started on ${process.env.PORT}....`);
});
