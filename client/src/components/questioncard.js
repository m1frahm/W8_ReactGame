import { useState } from "react";

const QuestionCard = (props) => {
  const [answer, setAnswer] = useState(false);

  const handleClick = (event) => {
    setAnswer(true);

    let selectedAnswer = event.target.dataset.value; // data-value in line 15 is a custom attribute and better strategy to use than ID (since we can't have individual IDs in our example)
    if (props.question.correct_answer === selectedAnswer) {
      event.target.style.backgroundColor = "green";
    }
  };

  return (
    <div className={"question-section"}>
      <div className="question-text">{props.question.question}</div>
      <div className="answer-section">
        <button disabled={answer} data-value="True" onClick={handleClick}>
          True
        </button>
        <button disabled={answer} data-value="False" onClick={handleClick}>
          False
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;

//correct answer, what user picked (state) to store what they clicked
