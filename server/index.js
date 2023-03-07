import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

// For testing my API I saving one response in a .js file
import fakedata from "./fakedata.js";

const app = express();
const PORT = 6000; // changing server to 6000 

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello Techtonica Server for a Game");
});

// Make the GET request for the GAME Api for grabbing all the questions

//comments out for now
//   // //hardcode the game response for testing reasons to don't saturate my API call.
// app.get('/api/game', (req, res) =>{
//     res.json(fakedata);
// })

//on back-end we are
app.get("/api/game", async (req, res) => {
  try {
    const URL = "https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=boolean";
    const apiRequest = await fetch(URL); //awaiting data that will come back once our http request (get) goes to endpoint which is inside URL
    const questions = await apiRequest.json(); // takes data from json format and converts into object
    res.send({ questions }); //renders the questions onto my local host
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () =>
  console.log(`Sup! Server running on Port http://localhost:${PORT}`)
);
