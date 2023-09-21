import Options from "./Options";

export default function Qusestions({ qusetions, dispatch, answer }) {
  console.log(qusetions);
  return (
    <div className="text-center w-full max-w-xl">
      <div className="mb-4 text-xl p-4 border border-slate-800 rounded-full">
        <p>{qusetions.question}</p>
      </div>
      <Options qusetions={qusetions} dispatch={dispatch} answer={answer} />
    </div>
  );
}
