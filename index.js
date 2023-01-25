import express from "express";
import bodyParser from "body-parser";
//this allows to take in incoming post request bodies

import usersRoutes from "./routes/users.js";
// const express = require("express");
// const bodyParser = require("body-parser");
// const usersRoutes = require("./routes/users");

const app = express();
const PORT = 5000;

//initializing the body parser middleware
app.use(bodyParser.json());
//this is just saying we are going to use json data in our whole application
//common format to send and req data to a rest api

app.use("/users", usersRoutes);

//node and express primarily are all about routing
//so we need to create some routes which we can then visit with our browser or we can send request to

// we create different routes of different types
app.get("/", (req, res) => {
  //code inside this callback function will run when we visit the / (home page), visited means we made a get request to the /
  //browser can only make a get request
  console.log("[TEST]!");
  res.send("Hello from home page!!");
}); //we are expecting a get request to the home page

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
