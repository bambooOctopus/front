import { animateOnUnMount } from "../helpers/animation/animateOnUnMount"
import { monthGridFade } from "../helpers/animation/monthGridFade"
import { dayFade } from "../helpers/animation/dayFade"
import { MonthComponent } from "./month/MonthComponent"



import { formatMonthString } from "../helpers/calendar/dateFormats"
import { formatDayString } from "../helpers/calendar/dateFormats"
import { DayComponent } from "./day/DayComponent"
import { unMountDayForm } from "../helpers/animation/unMountDayForm"

const leftButton = "<"
const rightButton = ">"

export const DayNav = ({setCurrentCalendarView, dayInUse, setDayInUse, activeForm, setActiveForm, user, setCurrentContent }) => {
    const dayString = formatDayString(dayInUse)

    
    

    const handleSwitchToMonthViewClick = (event) => {
        event.preventDefault()           
        animateOnUnMount(setCurrentCalendarView, <MonthComponent setCurrentCalendarView={setCurrentCalendarView} initialMonth={dayInUse} user={user} setCurrentContent={setCurrentContent}/>)
    }

    const handlePreviousDayClick = () => {
        const newDay = dayInUse.minus({day: 1})        
        unMountDayForm(setActiveForm, "")
        dayFade(setDayInUse, newDay)
        // setDayInUse(newDay)
    }

    const handleNextDayClick = () => {
        const newDay = dayInUse.plus({day: 1})
        unMountDayForm(setActiveForm, "")
        dayFade(setDayInUse, newDay)
        // setDayInUse(newDay)
    }    

    return (
        <div className="date-nav">
            <button onClick={handlePreviousDayClick} className="arrow-button">{leftButton}</button>
            <button onClick={handleSwitchToMonthViewClick} className="date-button">{dayString}</button>
            <button onClick={handleNextDayClick} className="arrow-button">{rightButton}</button>
        </div>
    )
}

export const MonthNav = ({setCurrentCalendarView, monthInUse, setMonthInUse, setCurrentContent, user}) => {  
    // monthInUse is a date obj; format it to render on screen
    const monthString = formatMonthString(monthInUse)    
    
    const handleChangeToDayView = (event) => {
        event.preventDefault()
        animateOnUnMount(setCurrentCalendarView, <DayComponent setCurrentCalendarView={setCurrentCalendarView} setCurrentContent={setCurrentContent} user={user}/>)        
    }

    const handlePreviousMonthClick = () => {       
        const newMonth = monthInUse.minus({month: 1})          
        monthGridFade(setMonthInUse, newMonth)       
    }

    const handleNextMonthClick = () => {          
        const newMonth = monthInUse.plus({month: 1})
        monthGridFade(setMonthInUse, newMonth)        
    }

    
    
    return (
        <div className="date-nav">
            <button onClick={handlePreviousMonthClick} className="arrow-button">{leftButton}</button>
            <button onClick={handleChangeToDayView} className="date-button">{monthString}</button>
            <button onClick={handleNextMonthClick} className="arrow-button">{rightButton}</button>
        </div>
    )
}