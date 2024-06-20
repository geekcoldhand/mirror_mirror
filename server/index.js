// const express = require("express");
// const app = express();
// const http = require("http").createServer(app);
// const path = require("path");
// const { join } = require("node:path");
// const io = require("socket.io")(http);

// io.on("connection", (socket) => {
//   console.log("a user connected");
// });

// io.on("message", (data) => {
//   console.log(`Received message: ${data}`);
//   // Process the message and send a response if needed
//   socket.emit("response", "Hello from the server!");
// });

// io.on("disconnect", () => {
//   console.log("A client disconnected");
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/index.html"));
// });
// // Start the server
// http.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "client/index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
