// // File to save one response for the API so I can use it to hardcode if I need it
// // and don't saturate the API call

// //API url = https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=boolean
// //5 question, easy, true/false, sciece & nature, default encoding

// // const realdata = {
// //   response_code: 0,
// //   results: [
// //     {
// //       category: "Science & Nature",
// //       type: "boolean",
// //       difficulty: "easy",
// //       question: "Igneous rocks are formed by excessive heat and pressure.",
// //       correct_answer: "False",
// //       incorrect_answers: ["True"],
// //     },
// //     {
// //       category: "Science & Nature",
// //       type: "boolean",
// //       difficulty: "easy",
// //       question: "Salt is 100% composed of Sodium.",
// //       correct_answer: "False",
// //       incorrect_answers: ["True"],
// //     },
// //     {
// //       category: "Science & Nature",
// //       type: "boolean",
// //       difficulty: "easy",
// //       question: "An average human can go two weeks without water.",
// //       correct_answer: "False",
// //       incorrect_answers: ["True"],
// //     },
// //     {
// //       category: "Science & Nature",
// //       type: "boolean",
// //       difficulty: "easy",
// //       question:
// //         "Water always boils at 100&deg;C, 212&deg;F, 373.15K, no matter where you are.",
// //       correct_answer: "False",
// //       incorrect_answers: ["True"],
// //     },
// //     {
// //       category: "Science & Nature",
// //       type: "boolean",
// //       difficulty: "easy",
// //       question:
// //         "Not including false teeth; A human has two sets of teeth in their lifetime.",
// //       correct_answer: "True",
// //       incorrect_answers: ["False"],
// //     },
// //   ],
// // };

// //export default realdata;

//cristina's prior data
const fakedata = {
  response_code: 0,
  results: [
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "medium",
      question: "Furby was released in 1998.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "medium",
      question: "There are 86400 seconds in a day.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "medium",
      question:
        "Albert Einstein had trouble with mathematics when he was in school.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "medium",
      question:
        "Fast food restaurant chains Carl&#039;s Jr. and Hardee&#039;s are owned by the same company.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "medium",
      question:
        "The pickled gherkin was first added to hamburgers because a US health law required all fast-food to include a source of Vitamin C.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ],
};

export default fakedata;
