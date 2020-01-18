import express from "express";

const port = 3000;
const server = express();

server.get("/", (_, res) => {
  res.send("Hello World!");
});

server.listen(port,()=>{
  console.log(`Server is listening on port ${port}!`);
});