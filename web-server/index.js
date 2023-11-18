const express = require("express");
const path = require("path");
const app = express();

// req.body が使えるようになる
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   res.send("<h1>Top<h1>");
// });

// app.get("/about", function (req, res) {
//   res.send("About");
// });

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer === "2") {
    // res.send("正解！");
    res.redirect("/correct.html");
  } else {
    res.redirect("/wrong.html");
  }
});

app.listen(3000, function () {
  console.log("I am running");
});
