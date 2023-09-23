import React from "react";

export default function Progress({ index, numOfQuestions, points, maxPoints, answer }) {
  // Calculate the percentage completed
  const percentComplete = ((index + Number(answer !== null)) / numOfQuestions) * 100;
  return (
    <header className="w-full max-w-xl mb-2">
      <div className=" bg-slate-800 rounded-full  my-2">
        <div className="relative h-1 bg-yellow-300 " style={{ width: `${percentComplete}%` }}>
          <span className={`absolute  bottom-1 ${answer !== null ? "right-0" : "-right-5"} text-sm`}>{`${Math.floor(percentComplete)}%`}</span>
        </div>
      </div>
      <div className="flex justify-between items-start px-1 mb-2">
        <p>
          Questions <strong className="text-yellow-300">{index + 1}</strong> / {numOfQuestions}
        </p>
        <p>
          <strong className="text-yellow-300">{points}</strong> / {maxPoints}
        </p>
      </div>
    </header>
  );
}
