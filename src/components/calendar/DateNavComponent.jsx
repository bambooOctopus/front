import { useState } from "react"
import { useEffect } from "react"
import { DateTime } from "luxon"

export const DateNav = ({dayInUse, setDayInUse, currentContent, setCurrentContent, monthInUse, setMonthInUse}) => {
    const leftButton = "<"
    const rightButton = ">"        

    const DayPicker = () => {

        const handleYesterdayClick = (event) => {
            event.preventDefault()        
            // format dayInUse into date obj
            // minus one day
            // set new dayInUse       
            const formattedDate = DateTime.fromFormat(dayInUse, "MMM d")
            const newDate = formattedDate.minus({days: 1})
            const newDateString = newDate.toLocaleString({month: 'short', day: 'numeric'})
            setDayInUse(newDateString)
        }
    
        const handleTomorrowClick = (event) => {
            event.preventDefault()
            // format dayInUse into date obj
            // add one day
            // set new dayInUse
            const formattedDate = DateTime.fromFormat(dayInUse, "MMM d")
            const newDate = formattedDate.plus({days: 1})
            const newDateString = newDate.toLocaleString({month: 'short', day: 'numeric'})
            setDayInUse(newDateString)
            
        }

        const handleMonthCalendarClick = (event) => {
            event.preventDefault()                                    
            setCurrentContent("MonthComponent")
        }
        
        return (
            <>
                <button onClick={handleYesterdayClick} className="date-button">{leftButton}</button>
                <p onClick={handleMonthCalendarClick}>{dayInUse}</p>
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
            const formattedMonth = DateTime.fromFormat(monthInUse, "MMM yyyy")
            const newMonth = formattedMonth.minus({month: 1})                       
            const newMonthString = newMonth.toLocaleString({month: 'short', year: 'numeric'})      
            setMonthInUse(newMonthString)
        }

        const handleNextMonthClick = (event) => {
            // format date to obj
            // add one month
            // set new current month
            event.preventDefault()
            const formattedDate = DateTime.fromFormat(monthInUse, "MMM yyyy")
            const newMonth = formattedDate.plus({month: 1})            
            const newMonthString = newMonth.toLocaleString({month: 'short', year: 'numeric'}) 
            setMonthInUse(newMonthString)
        }

        const handleDayCalendarClick = (event) => {
            event.preventDefault()                                     
            setCurrentContent("DayComponent")
        }

        return (
            <>
                <button onClick={handleLastMonthClick} className="date-button">{leftButton}</button>
                <p onClick={handleDayCalendarClick}>{monthInUse}</p>
                <button onClick={handleNextMonthClick} className="date-button">{rightButton}</button>
            </>
        )
    }  


    return (
        <div className="date-nav">
            {currentContent == "DayComponent" ? 
                <>
                    <DayPicker />                    
                </>
            :
            currentContent == "MonthComponent" ?
                <>
                    <MonthPicker />                   
                </>
            :
                ""
            }            
        </div>
    )
}