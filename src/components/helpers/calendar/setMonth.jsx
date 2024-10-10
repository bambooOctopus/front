import { DateTime } from "luxon"

export const setMonth = (startMonth) => {
    // month is a DateTime obj 
    // run in MonthGrid

    // daysArray is all the dates that are returned to be built into MonthGrid view
    let daysArray = []

    let initialMonth = startMonth

    let month = initialMonth.month        
    let year = initialMonth.year        
    let daysInMonth = initialMonth.daysInMonth

    // what day the month starts on conversion
    const startOfMonthConversion = {
        "Mon": 0,
        "Tue": 1,
        "Wed": 2,
        "Thu": 3,
        "Fri": 4,
        "Sat": 5,
        "Sun": 6
    }     

    // find what day of the week the currentMonth month starts on
    let currentMonthStartDay = startOfMonthConversion[DateTime.now().set({month: month, day: 1, year: year}).weekdayShort]          
    // number of days from prev month
    let lastMonthNumberOfDays = DateTime.now().set({month: month - 1}).daysInMonth    
    // how many of last months days appear on currentMonth view
    let previousMonthStartDate = (lastMonthNumberOfDays - currentMonthStartDay ) + 1
    
    // loop that feeds last months dates into daysArray
    for (let i = previousMonthStartDate; i <= lastMonthNumberOfDays; i++) {
        let prevMonth
        if (month == 1) {
            prevMonth = 12
        }
        else {
            prevMonth = month - 1
        }
        
        
        let dayString = prevMonth + "-" + i + "-" + year
        daysArray.push([dayString, "prev"])
    }

    for (let i = 1; i <= daysInMonth; i++) {            
        let dayString = month + "-" + i + "-" + year
        daysArray.push([dayString])
    }

    for (let i = 1; daysArray.length < 35; i++) {
        let nextMonth
        if (month == 12 ) {
            nextMonth = 1
        }
        else { 
            nextMonth = month + 1
        }
            
        let dayString = nextMonth + "-" + i + "-" + year
        daysArray.push([dayString, "next"])
    }  
    
    return daysArray
}