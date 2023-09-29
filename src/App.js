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
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import quzie from "./constants/quzies";

const SECS_PER_QUESTION = 30;

const initialState = {
  qusetions: [],
  // 'loading','error','ready','active','finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemainig: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "dataRecived":
      return { ...state, qusetions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", secondsRemainig: state.qusetions.length * SECS_PER_QUESTION };
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
    case "tick":
      return { ...state, secondsRemainig: state.secondsRemainig - 1, status: state.secondsRemainig === 0 ? "finished" : state.status };
    default:
      throw new Error("Unknown action.");
  }
}

export default function App() {
  const [{ qusetions, status, index, answer, points, highscore, secondsRemainig }, dispatch] = useReducer(reducer, initialState);
  const numOfQuestions = qusetions?.length;
  const maxPoints = qusetions.reduce((prev, cur) => prev + cur.points, 0);

  console.log(quzie);

  useEffect(() => {
    dispatch({ type: "loading" });

    setTimeout(() => {
      dispatch({ type: "dataRecived", payload: quzie.React });
    }, 5000);
    // fetch(quzie)
    //   .then((res) => res.json())
    //   .then((data) => dispatch({ type: "dataRecived", payload: data.React }))
    //   .catch((error) => dispatch({ type: "dataFailed" }));
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
            <Footer>
              <Timer dispatch={dispatch} secondsRemainig={secondsRemainig} />
              <div>
                <NextButton dispatch={dispatch} answer={answer} index={index} numOfQuestions={numOfQuestions} />
              </div>
            </Footer>
          </>
        )}
        {status === "finished" && <FinishQuiz numOfQuestions={numOfQuestions} index={index} points={points} maxPoints={maxPoints} answer={answer} dispatch={dispatch} highscore={highscore} />}
      </Main>
    </>
  );
}
