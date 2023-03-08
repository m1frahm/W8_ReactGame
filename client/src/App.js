import Header from "./components/header.js";
import Score from "./components/score.js";
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(""); // usestate hook
  const [message, setMessage] = useState(null); // create a new useState hook
  const handleUser = (text) => {
    setUser(text);
    //A function to do the get request and set the state from the hard code data
    useEffect(() => {
      fetch("http://localhost:6000/quizgame")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
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
