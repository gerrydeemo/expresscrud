const express = require("express");
const app = express();
require("dotenv/config");
const mongoose = require("mongoose");
var cors = require("cors");
app.use("/", cors(corsOptions));
const jwt = require("jsonwebtoken");
app.use(express.json());
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connection");
});

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const stupid = "move";

const personSchema = {
  name: String,
  age: Number,
  username: String,
  password: String,
};

const Person = mongoose.model("Person", personSchema, "People");

app.get("/api", (req, res) => {
  Person.find({}, (err, people) => {
    res.json(people);
  });
});

app.post("/register", async (req, res) => {
  const newPerson = {
    name: req.body.name,
    username: req.body.username,
    age: req.body.age,
    password: req.body.password,
  };
  Person.create(newPerson)
    .then((person) => {
      res.json(person);
      console.log("new person");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/login", async function (req, res) {
  const loginusername = req.body.loginusername;
  const loginpassword = req.body.loginpassword;
  Person.findOne({ username: loginusername }, function (err, person) {
    res.json(person);
    console.log(person);
    if (
      person.username === loginusername &&
      person.password === loginpassword
    ) {
      console.log("User logged in successfully");
    } else {
      console.log("Password incorrect");
    }
  });
});

app.listen(5000, () => {
  console.log("Started server on 5000");
});
