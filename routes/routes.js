const express = require("express");
const userModel = require("../models");
const app = express();

app.post("/add_user", async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
  
});

app.get("/users", async (req, res) => {
  const users = await userModel.find({});
  
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;

app.get("/login", function (req, res) {
  res.render("/login");
});

app.post("/login", async function (req, res) {
  try {
    // check if the user exists
    const user = await User.findOne({ name: req.body.name });
    if (user) {
      //check if password matches
      const result = req.body.password === user.password;
      if (result) {
        res.render("./apps/clock/index.html");
      } else {
        res.status(400).json({ error: "Password doesn't match!" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exists!" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});




