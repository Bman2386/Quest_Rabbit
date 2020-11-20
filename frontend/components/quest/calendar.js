
import React from 'react'

    const date = new Date();
    const month = date.getMonth();
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

    
   
   const tally = () => {
       let days = [];
       if (firstDayIndex > 1) {
           for(let x = firstDayIndex; x > 0; x--){
       let num = prevLastDay - x + 1;
          days.push(num) 
       }
    }
        
       for(let i = 1; i <= lastDay; i++){
           days.push(i)
       }
       
       return days
   }

   export const monthDays = () => {
       const days = tally();
       const today = date.getDate();
       const current = function(day) {
           if (day=== today){
               return 'today';
           } else {
               return "";
           }
       }
       const month = days.map(day => 
            <div key={day} className={current(day)}>{day}</div>)
    
            return month;
   }


