const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  console.log("main page 2");

  res.send("hello on 4000");
});

app.listen(port, () => {
  console.log(`I am working on ${port}`);
});
