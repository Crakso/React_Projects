import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.json("This is home page!");
});
server.get("/about", (req, res) => res.json("This is about page!"));

server.listen(3000, () => console.log("server is live on port:3000"));
