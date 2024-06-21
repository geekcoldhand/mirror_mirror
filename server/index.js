const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const { join } = require("node:path");
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("message", (data) => {
  console.log(`Received message: ${data}`);
  // Process the message and send a response if needed
  socket.emit("response", data);
});

io.on("disconnect", () => {
  console.log("A client disconnected");
});

app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "../client/index.html"));
  res.send("connected!");
});
// Start the server
http.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
