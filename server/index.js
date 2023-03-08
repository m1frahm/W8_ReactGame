import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

// For testing my API I saving one response in a .js file
import fakedata from "./fakedata.js";

const app = express();
const PORT = 5000; // changing server to 6000 

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
    const URL =
      "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=boolean";
    const apiRequest = await fetch(URL);
    const questions = await apiRequest.json();
    res.send({ questions });
  } catch (err) {
    console.log(err);
  }
});

// creates an endpoint for the route /api/weather // endpoint is the weather endpoint (this is the invoice)
app.get("/quizgame", (req, res) => {
  const quiz = req.query.quizGame; // quizGame could be changed and is simply "q" key in postman
  //console.log(quiz);
  //const apiKey = process.env.API_KEY;
  const params = new URLSearchParams({ 
      amount: 5,
      category: 22,
      difficulty: "easy",
      type: boolean
  //   q: city, not relevant
  //   appid: apiKey, not relevant
  //   units: "Metric", not relevant
   });
  //const url = `https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=boolean`
  const url = `https://opentdb.com/api.php${params}`;

  //const url = `https://api.openweathermap.org/data/2.5/weather?${params}`; // we only need to use line 27 or 28 - both are same way of showing url
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  //console.log(url);

  fetch(url) // this line fetches data from triviaGame API (url we made above)
    .then((res) => res.json()) //comes back as a response in my server and then converts it to json
    .then((data) => {
      // this line returns the data back
      console.log(data);
      res.send({ data }); //use data and send back to react (client)
    })
    .catch((err) => {
      // .catch is a way to catch error (on a promise)
      console.log(err);
    });
});

app.listen(PORT, () =>
  console.log(`Sup! Server running on Port http://localhost:${PORT}`)
);
