import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage'";
import Welcome from "./pages/Welcome";
import Qusestions from "./components/Qusestions";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishQuiz from "./components/FinishQuiz";

const initialState = {
  qusetions: [],
  // 'loading','error','ready','active','finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, qusetions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.qusetions[state.index];
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctAnswer ? state.points + question.points : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return { ...state, status: "finished", highscore: state.points > state.highscore ? state.points : state.highscore };
    case "restart":
      return { ...initialState, qusetions: state.qusetions, status: "ready" };
    default:
      throw new Error("Unknown action.");
  }
}

export default function App() {
  const [{ qusetions, status, index, answer, points, highscore }, dispatch] = useReducer(reducer, initialState);
  const numOfQuestions = qusetions?.length;
  const maxPoints = qusetions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:1735/subjects")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data.React }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorMessage />}
        {status === "ready" && <Welcome numOfQuestions={numOfQuestions} dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress numOfQuestions={numOfQuestions} index={index} points={points} maxPoints={maxPoints} answer={answer} />
            <Qusestions qusetions={qusetions[index]} dispatch={dispatch} answer={answer} />
            <NextButton dispatch={dispatch} answer={answer} index={index} numOfQuestions={numOfQuestions} />
          </>
        )}
        {status === "finished" && <FinishQuiz numOfQuestions={numOfQuestions} index={index} points={points} maxPoints={maxPoints} answer={answer} dispatch={dispatch} highscore={highscore} />}
      </Main>
    </>
  );
}
