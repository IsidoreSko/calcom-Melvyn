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

  return (
    <>
      <div className="flex">
        <div className="uppercase flex gap-3 ml-3 mr-auto">
          <span className="text-white font-medium">{monthName}</span>
          <span>{day}</span>
        </div>
        <div className="flex mr-3 gap-3 text-white border border-gray-500 py-1 px-3 rounded-md">
          <span className="bg-slate-500 rounded-md px-1.5">12H</span>
          <span>24H</span>
        </div>
      </div>
      <div className="m-3 flex flex-col gap-3 text-white">
        {hours.map((hour, index) => (
          <div
            className="flex items-center justify-center h-10 border border-gray-500 rounded-md bg-black"
            key={index}
          >
            {hour}
          </div>
        ))}
      </div>
    </>
  );
}

export default Time;
