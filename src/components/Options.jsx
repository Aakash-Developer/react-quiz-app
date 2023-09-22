import React from "react";

export default function Options({ qusetions, dispatch, answer }) {
  const hasAnswer = answer !== null;
  console.log(qusetions);
  return (
    <div className="flex flex-col gap-3 ">
      {qusetions.options.map((option, index) => (
        <button
          key={option}
          className={`answerBtn ${index === answer ? "bg-teal-700 relative -left-4" : ""} ${hasAnswer ? (index === qusetions.correctAnswer ? "bg-green-700" : "bg-red-700") : ""}`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {option}
        </button>
      ))}
    </div>
  );
}
/* <button
          key={option}
          className={`p-2 rounded-full hover:bg-slate-800 active:bg-slate-900 hover:relative hover:scale-105 transition-all ease-in duration-200 ${
            index === answer ? "bg-teal-600" : "bg-slate-900 "
          } ${index === qusetions.correctAnswer ? "bg-blue-700" : ""} `}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {console.log(option)}
        </button> */
