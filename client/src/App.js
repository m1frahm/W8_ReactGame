import Header from "./components/header.js";
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const handleUser = (text) => {
    setUser(text);
  };

  return (
    <div className="App">
      <Header user={user} />
      <UserForm grabUser={handleUser} />
      {/* if there is a user, show Game component */}
      {user ? <Game /> : null}
    </div>
  );
}

export default App;
