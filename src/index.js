const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan"); // HTTP Logger
const app = express();
const port = 3000;

app.use(morgan("combined")); // HTTP Logger

// Template Engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs", // Config extname
  })
);
app.set("view engine", "hbs");

// Path
app.set("views", path.join(__dirname, "resources/views"));
// console.log('Path: ', path.join(__dirname, 'resources/views'));

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
