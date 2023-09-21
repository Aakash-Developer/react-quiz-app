import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage'";
import Welcome from "./pages/Welcome";
import Qusestions from "./components/Qusestions";

const initialState = {
  qusetions: [],
  // 'loading','error','ready','active','finish'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
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
      return { ...state, answer: action.payload };
    default:
      throw new Error("Unknown action.");
  }
}

export default function App() {
  const [{ qusetions, status, index, answer }, dispatch] = useReducer(reducer, initialState);
  const numOfQusestions = qusetions.React?.length;

  useEffect(() => {
    fetch("http://localhost:1735/subjects")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorMessage />}
        {status === "ready" && <Welcome numOfQusestions={numOfQusestions} dispatch={dispatch} />}
        {status === "active" && <Qusestions qusetions={qusetions.React[index]} dispatch={dispatch} answer={answer} />}
        {/* <div className="font-roboto">
          <p>1 / 15</p>
          <p>Qustions?</p>
        </div> */}
      </Main>
    </>
  );
}
