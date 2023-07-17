const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes.js");
const app = express();

app.use(express.json());

const URI =
  "mongodb+srv://akashkundu:gaganakash@cluster0.2yu7ak6.mongodb.net/users?retryWrites=true&w=majority";
const User = require("./models");

var colors = require("colors");
  (session = require("express-session")),
  (passport = require("passport")),
  (bodyParser = require("body-parser")),
  (LocalStrategy = require("passport-local")),
  (passportLocalMongoose = require("passport-local-mongoose"));

colors.setTheme({
  success: "green",
  warn: "yellow",
  error: "red",
});

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "[mongodb] Connection Error: ".error)
);
db.once("open", function () {
  console.log("[mongodb] Connected Successfully!".success);
});

app.use(Router);

app.listen(3000, () => {
  console.log("[mongodb] Server is running at port 3000".success);
});

// Default session handling. Won't explain it as there are a lot of resources out there
app.use(
  session({
    secret: "mylittlesecret",
    cookie: { maxAge: new Date(Date.now() + 3600000) }, // 1 hour
    maxAge: new Date(Date.now() + 3600000), // 1 hour
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);