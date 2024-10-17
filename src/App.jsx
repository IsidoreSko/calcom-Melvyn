// import React from "react";
import Calendar from "./layout/calendar";
import Header from "./layout/header";
import Time from "./layout/time";

function App() {
  return (
    <div className="p-3 border-2 border-gray-600 rounded-lg bg-gray-950 md:flex md:m-16 md:h-[90vh] overflow-auto">
      <Header />
      <Calendar />
      <Time />
    </div>
  );
}

export default App;
