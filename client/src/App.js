import Header from "./components/header.js";
import Score from "./components/score.js";
import UserForm from "./components/userform.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(""); // usestate hook
  // const [message, setMessage] = useState(null); // create a new useState hook

  const handleUser = (text) => {
     setUser(text);
  //   //A function to do the get request and set the state from the hard code data
  //   fetch(`http://localhost:5000/quizgame`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result.data); // prints out in browser console and this tests how it would look like if the data key was removed

  //       setMessage(result);
   //    });
   };

  // we are passing user as a prop inside header
  //props is called user rn, which is how its being referenced in header.js

  return (
    <div className="App">
      <Header name={user} />
      <UserForm grabUser={handleUser} />
      {/* if there is a user, show Game component */}
      {user ? <Game /> : null}
      <Score />
    </div>
  );
}

export default App;
