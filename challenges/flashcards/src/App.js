import React, { useState } from "react";

import "./App.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
const App = () => {
  return (
    <div className="App">
      <FlashCards questions={questions} />
    </div>
  );
};

function FlashCards({ questions }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = (id) => {
    if (id === selected) {
      setSelected(null);
      return;
    }
    setSelected(id);
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <FlashCard
          question={question}
          key={question.id}
          select={question.id === selected}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
}

function FlashCard({ question, select, handleSelect }) {
  return (
    <div
      onClick={() => handleSelect(question.id)}
      className={select && "selected"}
    >
      {select ? question.answer : question.question}
    </div>
  );
}

export default App;
