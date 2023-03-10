import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  

  //make sure to have the backend server be consistent
  const loadData = () => {
    fetch("http://localhost:5000/quizgame")
      .then((response) => response.json())
      .then((data) => {
        console.log("This is line 11", data.data);
        setQuestions(data.data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="Container">
      <div className="question-count">
        <span>Question 1</span>/{questions.length}
      </div>
      {questions.map((question, index) => {
        return <QuestionCard key={index} question={question} setScore={setScore} score={score}/>; //might need to pass
      })}
      <h1>
        In a game of 100 points, your current score is {score}/100{" "}
      </h1>
    </div>
  );
};

export default Game;
