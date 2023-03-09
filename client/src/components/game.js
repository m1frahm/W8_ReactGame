import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {
  const [questions, setQuestions] = useState([]);

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
        return <QuestionCard key={index} question={question} />; //might need to pass
      })}
    </div>
  );
};

export default Game;
