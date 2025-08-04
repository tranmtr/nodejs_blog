const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//midware
app.use(
  express.urlencoded({
    extended: true,
  })
); // form
app.use(express.json()); // XMLHttpRequest,  ...

// HTTP logger
//app.use(morgan("combined"));

//Template engine
app.engine(
  ".hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  //console.log(req.query.q);
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body.q);
  res.send("HEHE");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
