import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineEmojiSad } from "react-icons/hi";

export default function Options({ qusetions, dispatch, answer }) {
  const hasAnswer = answer !== null;

  const getClassName = (index, answer, hasAnswer, correctAnswer) => {
    let className = "";

    if (!hasAnswer && index === answer) {
      className += "bg-teal-700 relative -left-4";
    }

    if (hasAnswer) {
      if (index !== correctAnswer) {
        className += "bg-red-700 ";
      } else {
        className += "bg-green-700";
      }
    }

    return className;
  };
  // Now, the className variable contains the desired class names.

  return (
    <div className="flex flex-col gap-3 ">
      {qusetions.options.map((option, index) => (
        <button
          key={option}
          className={`answerBtn ${getClassName(index, answer, hasAnswer, qusetions.correctAnswer)}`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswer}>
          <p className="flex items-center">
            {hasAnswer && index === answer && answer === qusetions.correctAnswer && <BsEmojiSmile className="text-2xl" />}
            {index === answer && answer !== qusetions.correctAnswer && <HiOutlineEmojiSad className="text-3xl" />} <span className="text-center w-full">{option}</span>
          </p>
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
