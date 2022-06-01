const express = require("express");
const app = express();
app.use(express.json());
const data = require("./data.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("Welcome");
});

app.get("/getTimeStories", (req, res) => {
  const newData = [...data, req.body];
  res.send(newData);
});

app.listen(port, function () {
  try {
    console.log("listening to port 2345");
  } catch (e) {
    console.log(e.message);
  }
});
