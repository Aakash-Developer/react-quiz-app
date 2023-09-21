import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-2 sm:p-5">
      <nav className="flex justify-between items-center flex-col">
        <div>
          <img src={logo} className="h-16 w-16 sm:h-20  h-16 w-16 sm:w-20 " alt="logo" />
        </div>
        <div>
          <h1 className="font-title text-4xl sm:text-6xl ">
            <span className="text-yellow-300">T</span>he <span className="text-blue-400">Q</span>uiz <span className="text-teal-400">A</span>pp
          </h1>
        </div>
      </nav>
    </header>
  );
}
