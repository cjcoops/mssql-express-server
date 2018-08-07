const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const port = 3000;

app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
