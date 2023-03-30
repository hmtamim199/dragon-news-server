const express = require("express");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
app.use(cors());

const categories = require("./data/Categories.json");

app.get("/", (req, res) => {
  res.send("dragon news running 5000 port");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("news port running ", port);
});
