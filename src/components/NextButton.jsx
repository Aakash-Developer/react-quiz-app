export default function NextButton({ dispatch, answer, numOfQuestions, index }) {
  if (answer === null) return null;

  if (index < numOfQuestions - 1) {
    return (
      <div className="flex justify-end items-end w-full max-w-xl">
        <button className="mt-3 p-2 px-6 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-slate-900" onClick={() => dispatch({ type: "nextQuestion" })}>
          Next
        </button>
      </div>
    );
  }

  if (index === numOfQuestions - 1) {
    return (
      <div className="flex justify-end items-end w-full max-w-xl">
        <button className="mt-3 w-full p-2 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-900" onClick={() => dispatch({ type: "finished" })}>
          Finish
        </button>
      </div>
    );
  }
}
