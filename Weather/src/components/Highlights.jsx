import React from "react";
import { LuWind } from "react-icons/lu";

function Highlights({ stats }) {
  return (
    <div className="bg-slate-600 text-slate-200 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
      <h2 className="text-sm mt-2 font-bold">{stats.title}</h2>
      <div className="mt-2">
        <span className="text-4xl font-bold">{stats.value}</span>
        <span className="text-2xl">{stats.unit}</span>
      </div>
      {stats.direction ? (
        <div className="mt-2 text-xl flex">
          <LuWind className="mt-1" />
          <div className="ms-2">{stats.direction}</div>
        </div>
      ) : null}

      {stats.title === "Humidity" ? (
        <div className="w-40 mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}

export default Highlights;
