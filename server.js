const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const Article = require("./models/Article");

const app = express();
var PORT = process.env.PORT || 3000;

//Run Morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("./public"));

//Mongoose config (Change URL to DB)
mongoose.connect("mongodb://localhost/nyt-react");
var db = mongoose.connection;

db.on("error", function(err){
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection is successful!");
});

app.get("/api/saved", function(req, res) {
  Article.find({}, function(error, doc) {
    if(error) {
      console.log(error)
    } else {
      res.json(doc)
    }
  });
});

app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);
  newArticle.save(function(error, doc) {
    if (error) {
      console.log(error)
    } else {
      res.send(doc)
    }
  });
});

app.delete("/api/saved/:id", function(req, res) {
  Article.find({_id: req.params.id}).remove(function(error, doc) {
    if (error) {
      console.log(error);
    } else {
      res.send({result: "success"})}
  });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
