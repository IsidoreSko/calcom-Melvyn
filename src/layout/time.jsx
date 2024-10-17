import { useState } from "react";

const hours = [
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
];

function Time() {
  const today = new Date();
  const day = today.getDate();
  const monthName = today.toLocaleString("fr-FR", { month: "long" });
  const [isGray, setIsGray] = useState(true);

  const toggleFormat = (format) => {
    if (format === "12H") {
      setIsGray(true);
    } else {
      setIsGray(false);
    }
  };

  return (
    <div className="flex flex-col md:basis-1/4">
      <div className="flex">
        <div className="flex gap-3 ml-3 mr-auto uppercase md:gap-2">
          <span className="font-medium text-white">{monthName}</span>
          <span>{day}</span>
        </div>
        <div className="flex gap-3 px-3 py-1 mr-3 text-white border border-gray-500 rounded-md">
          <span
            className={`rounded-md px-1.5 cursor-pointer ${
              isGray ? "bg-slate-500 text-white" : ""
            }`}
            onClick={() => toggleFormat("12H")}
          >
            12H
          </span>
          <span
            className={`rounded-md px-1.5 cursor-pointer ${
              !isGray ? "bg-slate-500 text-white" : ""
            }`}
            onClick={() => toggleFormat("24H")}
          >
            24H
          </span>
        </div>
        <button className="absolute items-center justify-center hidden h-8 p-5 font-medium text-black bg-white md:flex rounded-xl w-fit md:top-8">
          Need help?
        </button>
      </div>
      <div className="flex flex-col gap-3 m-3 text-white md:overflow-y-scroll">
        {hours.map((hour, index) => (
          <div
            className="flex items-center justify-center h-10 bg-black border border-gray-500 rounded-md md:text-sm md:p-2"
            key={index}
          >
            {hour + " am"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Time;
