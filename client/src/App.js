import Header from "./components/header.js"; 
import Score from "./components/score.js"; 
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(""); // usestate hook
  const handleUser = (text) => {
    setUser(text);
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
