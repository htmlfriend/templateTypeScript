const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  console.log("main page 1");
  res.send("hello on 3000");
});

app.listen(port, () => {
  console.log(`I am working on ${port}`);
});
