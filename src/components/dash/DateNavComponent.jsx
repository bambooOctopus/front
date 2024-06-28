import { useState } from "react"
import { useEffect } from "react"
import { DateTime } from "luxon"

export const DateNav = ({currentDate, setCurrentDate, currentContent, setCurrentContent, currentMonth, setCurrentMonth}) => {
    const leftButton = "<"
    const rightButton = ">"    

    const DayPicker = () => {

        const handleYesterdayClick = (event) => {
            event.preventDefault()        
            // format currentDate into date obj
            // minus one day
            // set new currentDate        
            const formattedDate = DateTime.fromFormat(currentDate, "MMM d")
            const newDate = formattedDate.minus({days: 1})
            const newDateString = newDate.toLocaleString({month: 'short', day: 'numeric'})
            setCurrentDate(newDateString)
        }
    
        const handleTomorrowClick = (event) => {
            event.preventDefault()
            // format currentDate into date obj
            // add one day
            // set new currentDate
            const formattedDate = DateTime.fromFormat(currentDate, "MMM d")
            const newDate = formattedDate.plus({days: 1})
            const newDateString = newDate.toLocaleString({month: 'short', day: 'numeric'})
            setCurrentDate(newDateString)
            
        }

        const handleMonthCalendarClick = (event) => {
            event.preventDefault()                                    
            setCurrentContent("MonthComponent")
        }
        
        return (
            <>
                <button onClick={handleYesterdayClick} className="date-button">{leftButton}</button>
                <p onClick={handleMonthCalendarClick}>{currentDate}</p>
                <button onClick={handleTomorrowClick} className="date-button">{rightButton}</button>
            </>
        )
    }

    const MonthPicker = () => {                   

        const handleLastMonthClick = (event) => {
            // format date to obj
            // subtract one month
            // set new current month
            event.preventDefault()
            const formattedMonth = DateTime.fromFormat(currentMonth, "MMM yyyy")
            const newMonth = formattedMonth.minus({month: 1})                       
            const newMonthString = newMonth.toLocaleString({month: 'short', year: 'numeric'})      
            setCurrentMonth(newMonthString)
        }

        const handleNextMonthClick = (event) => {
            // format date to obj
            // add one month
            // set new current month
            event.preventDefault()
            const formattedDate = DateTime.fromFormat(currentMonth, "MMM yyyy")
            const newMonth = formattedDate.plus({month: 1})            
            const newMonthString = newMonth.toLocaleString({month: 'short', year: 'numeric'}) 
            setCurrentMonth(newMonthString)
        }

        const handleDayCalendarClick = (event) => {
            event.preventDefault()  
            
            const monthComponent = document.querySelector(".month-component")
            monthComponent.classList.remove("active")
            
            setCurrentContent("DayComponent")
        }

        return (
            <>
                <button onClick={handleLastMonthClick} className="date-button">{leftButton}</button>
                <p onClick={handleDayCalendarClick}>{currentMonth}</p>
                <button onClick={handleNextMonthClick} className="date-button">{rightButton}</button>
            </>
        )
    }  


    return (
        <div className="date-nav">
            {currentContent == "DayComponent" ? 
                <DayPicker />
            :
                <MonthPicker />   
        }
            
        </div>
    )
}