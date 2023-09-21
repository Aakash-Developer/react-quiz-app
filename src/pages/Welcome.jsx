export default function Welcome({ numOfQusestions, dispatch }) {
  return (
    <div className="text-center">
      <h1 className="font-roboto text-xl sm:text-4xl  font-bold capitalize">Welcome to the react Quiz!</h1>
      <p className="text-xl text-gray-400 mb-4">{numOfQusestions} Qusetions to test your react mastery</p>
      <button className="bg-slate-800 p-2 px-6 rounded-full hover:bg-slate-700 active:bg-slate-900  hover:relative hover:scale-110 transition-all ease-linear" onClick={()=>dispatch({type:"start"})}>Let's Start</button>
    </div>
  );
}
