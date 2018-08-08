const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const port = 3000;
const db = require("./db");

app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.get("/", function(req, res) {
  var query = "select 42, 'hello world'";

  db(query, (err, response) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log(JSON.stringify(response));
      res.render("index", { title: "Hey", message: "Hello there!" });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
