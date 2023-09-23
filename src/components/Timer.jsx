import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemainig }) {
  const minites = Math.floor(secondsRemainig / 60);
  const secs = secondsRemainig % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="p-2 px-5 border border-slate-800 rounded-full mt-4">
      {minites < 10 && "0"}
      {minites}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
