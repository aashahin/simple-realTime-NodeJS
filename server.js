const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set("public", "./public");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("./index.html");
});

io.on("connection", (socket) => {
  socket.on("send-message", (data) => {
    io.sockets.emit("send-message", data);
  });
});
server.listen(5000);
