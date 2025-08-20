   "use client";

   import { useState } from "react";
   import { IconButton } from "@mui/material";
   import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
   import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
   import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
   import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

   interface CalendarProps {
      onClose: () => void;
   }
   
   const CalendarPage: React.FC<CalendarProps> = ({onClose}) => {
   const today = new Date();
   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
   const [currentYear, setCurrentYear] = useState(today.getFullYear());
   const [selectedDate, setSelectedDate] = useState<number | null>(today.getDate());
   const [editingYear, setEditingYear] = useState(false);
   const [yearInput, setYearInput] = useState(currentYear.toString());

   const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
   ];

   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

   const handlePrevMonth = () => {
      if (currentMonth === 0) {
         setCurrentMonth(11);
         setCurrentYear(currentYear - 1);
      } else {
         setCurrentMonth(currentMonth - 1);
      }
   };

   const handleNextMonth = () => {
      if (currentMonth === 11) {
         setCurrentMonth(0);
         setCurrentYear(currentYear + 1);
      } else {
         setCurrentMonth(currentMonth + 1);
      }
   };

   const handleYearSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newYear = parseInt(yearInput, 10);
      if (!isNaN(newYear)) {
         setCurrentYear(newYear);
      }
      setEditingYear(false);
   };

   return (
      <div className="bg-black h-full text-gray-300 flex flex-col p-6 overflow-hidden">
         <div className="flex items-center justify-between ">
            <div className="text-left flex items-center gap-2 mb-3">
               <WestOutlinedIcon fontSize="medium"/>
               <p className="text-xl font-semibold">Calendar</p>
            </div>
            
            <div className="cursor-pointer" onClick={onClose}>
               <CloseOutlinedIcon />
            </div>

         </div>
         {/* Header */}
         <div className="flex items-center justify-center gap-4 mb-6">
            <IconButton onClick={handlePrevMonth} className="!text-white">
               <ArrowBackIosNewIcon />
            </IconButton>

            <div
               onDoubleClick={() => setEditingYear(true)}
               className="px-6 py-2 bg-gray-800 rounded-full cursor-pointer select-none"
            >
               {editingYear ? (
                  <form onSubmit={handleYearSubmit}>
                  <input
                     type="text"
                     value={yearInput}
                     onChange={(e) => setYearInput(e.target.value)}
                     className="bg-transparent border-b border-green-400 text-center w-16 focus:outline-none"
                     autoFocus
                     onBlur={handleYearSubmit}
                  />
                  </form>
               ) : (
                  <h2 className="text-lg font-semibold">
                  {monthNames[currentMonth]} {currentYear}
                  </h2>
               )}
            </div>

               <IconButton onClick={handleNextMonth} className="!text-white">
                  <ArrowForwardIosIcon />
               </IconButton>
            </div>

            {/* Calendar Table */}
            <table className="w-full max-w-3xl border-collapse text-center">
               <thead>
                  <tr>
                     {days.map((day) => (
                     <th key={day} className=" text-gray-400 font-medium">
                        {day}
                     </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
               {Array.from({ length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) }).map(
                  (_, weekIndex) => (
                  <tr key={weekIndex}>
                     {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const date = weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
                        const isToday =
                        date === today.getDate() &&
                        currentMonth === today.getMonth() &&
                        currentYear === today.getFullYear();

                        const isSelected = selectedDate === date;

                        return (
                        <td
                           key={dayIndex}
                           className="py-3"
                        >
                           {date > 0 && date <= daysInMonth ? (
                              <button
                              onClick={() => setSelectedDate(date)}
                              className={`w-10 h-10 rounded-full transition 
                                 ${isSelected ? "bg-green-500 text-black font-bold" : ""}
                                 ${isToday && !isSelected ? "border border-green-400 text-green-400" : ""}
                                 ${!isSelected && !isToday ? "hover:bg-gray-800" : ""}
                              `}
                              >
                              {date}
                              </button>
                           ) : (
                              ""
                           )}
                        </td>
                        );
                     })}
                  </tr>
                  )
               )}
            </tbody>
         </table>
      </div>
   );
   };

   export default CalendarPage;
