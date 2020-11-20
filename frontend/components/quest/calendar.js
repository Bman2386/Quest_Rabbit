
import React from 'react'

    const date = new Date();
    const months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
   export const today = {
        month: months[date.getMonth()],
        date: date.toDateString()
   }

   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
   const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
   const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
   const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

   const nextDays = 7 - lastDayIndex - 1;
    
   
   const tally = () => {
       let days = [];
       if (firstDayIndex > 1) {
           for(let x = firstDayIndex; x > 0; x--){
       let num = `${prevLastDay - x + 1}`;
          days.push(num) 
       }
    }
        
       for(let i = 1; i <= lastDay; i++){
           days.push(i)
       }

       for(let j=1; j<=nextDays; j++){
           let num2 = `${j}`;
           days.push(num2)
       }
       
       return days
   }

   export const monthDays = () => {
       const days = tally();
       const today = date.getDate();
       const current = function(day) {
           if (day=== today){
               return 'today';
           } else if (typeof day === 'string'){
                return 'prev-month'
           } else {
               return "";
           }
       }
       const dayKey = function(day) {
           if (typeof day === 'string'){
               day *= 100
               return day
           } else {
               return day
           }
       }
       const month = days.map(day => 
            <div key={dayKey()} className={current(day)}>{day}</div>)
    
            return month;
   }

  

