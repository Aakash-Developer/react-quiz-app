export default function FinishQuiz({ points, maxPoints, dispatch, highscore }) {
  const percentage = (Number(points) / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇🥇🥇";
  else if (percentage >= 80) emoji = "🥈🥈";
  else if (percentage >= 60) emoji = "🥉";
  else if (percentage >= 40) emoji = "😖";
  else if (percentage >= 10) emoji = "🤔";
  else emoji = "☹️";

  return (
    <div className="min-h-[200px] w-full max-w-xl flex justify-center items-center flex-col rounded-2xl bg-slate-800 overflow-hidden p-2">
      <span className="text-4xl  md:text-7xl mb-4 drop-shadow-lg">{emoji}</span>
      {/* <p>
        <span className="text-yellow-300">({Math.ceil(percentage) + "%"})</span>
      </p> */}
      <p className="text-xl  sm:text-3xl uppercase mb-4 text-center">
        Your score is <strong className="text-yellow-300">{points}</strong> out of <strong className="text-blue-500">{maxPoints} </strong>
      </p>
      <p className="uppercase text-xl mb-2">( highscore : {highscore} )</p>
      <button className="p-2 w-full  bg-slate-900 hover:bg-slate-950 active:bg-slate-900 rounded-2xl " onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </div>
  );
}
