import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(10); // Novembre (les mois en JS commencent à 0)
  const [currentYear, setCurrentYear] = useState(2024);

  // Fonction pour obtenir le nombre de jours dans un mois
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  // Fonction pour obtenir le jour de départ du mois (0 = dimanche, 1 = lundi, etc.)
  const startDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  // Gestion du changement de mois
  function handlePrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function handleNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  // Génération des jours du calendrier
  function renderDays() {
    const days = [];
    const today = new Date(); // Définit la date actuelle
    const totalDays = daysInMonth(currentMonth, currentYear);
    const startDay = startDayOfMonth(currentMonth, currentYear);

    // Jours avant le début du mois (pour aligner correctement)
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-white"></div>);
    }

    // Jours du mois courant
    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <div
          key={day}
          className={`p-2 ${
            day === today.getDate() ? "bg-white text-black" : "bg-gray-900"
          } aspect-square aspect-ratio: 1 / 1 rounded-lg  flex items-center justify-center `}
        >
          {day}
        </div>
      );
    }

    return days;
  }

  return (
    <div className="max-w-md mx-auto p-4  font-medium">
      {/* En-tête avec le mois et les boutons de navigation */}
      <div className="flex mb-3">
        <h2 className="mr-auto text-white">
          <span className=" text-white mr-3 uppercase">
            {new Date(currentYear, currentMonth).toLocaleString("fr-FR", {
              month: "long",
            })}
          </span>
          <span className="text-gray-500">
            {new Date(currentYear, currentMonth).getFullYear()}
          </span>
        </h2>

        <ChevronLeft onClick={handlePrevMonth} className="size-5" />
        <ChevronRight onClick={handleNextMonth} className="size-5" />
      </div>

      {/* Noms des jours de la semaine */}
      <div className="grid grid-cols-7 gap-4 text-center mb-2">
        <div>LUN.</div>
        <div>MAR.</div>
        <div>MER.</div>
        <div>JEU.</div>
        <div>VEN.</div>
        <div>SAM.</div>
        <div>DIM.</div>
      </div>

      {/* Jours du mois */}
      <div className="grid grid-cols-7 gap-4">{renderDays()}</div>
    </div>
  );
}

export default Calendar;
