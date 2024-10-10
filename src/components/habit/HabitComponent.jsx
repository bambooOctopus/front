import { getHabitRequest } from "../URLRequests"
import { formatRubyDate, formatDayStringForComponents } from "../helpers/calendar/dateFormats"
import { animateOnUnMount } from "../helpers/animation/animateOnUnMount"
import { deleteHabitRequest } from "../URLRequests"

import { Calendar } from "../calendar/Calendar"

import './habit-component.css'

export const HabitComponent = ({user, habit, setCurrentContent, dayInUse}) => {
    // is re-directed to from the HabitForm in the calendar for some reason
    // is rendered as currentContent in CurrentContentComponent
    console.log(habit)
    

    const habitDateObj = formatRubyDate(habit.date_for)    
    
    let date = formatDayStringForComponents(dayInUse)    
    let leftArrow = "< " + date

    const handleBackToDateClick = (event) => {                
        animateOnUnMount(setCurrentContent, <Calendar setCurrentContent={setCurrentContent} user={user} initialView={"day"} initialDate={dayInUse} />)        
    }

    const handleDeleteHabitClick = (event) => {
        // 1. delete the habit from the db
        deleteHabitRequest({userId: user.id, habitId: habit.id}).then(function (response) { 
            console.log(response)           
        }).catch(function (error) {
            console.log(error)
        })
        // 2. redirect back to the day calendar
        animateOnUnMount(setCurrentContent, <Calendar setCurrentContent={setCurrentContent} user={user} initialView={"day"} initialDate={dayInUse} />)        

    }

    
    return (
        <div className="habit-component">
            <div className="habit-nav">
                <button onClick={handleBackToDateClick} className="back-button">{leftArrow}</button>
                <button onClick={handleDeleteHabitClick} className="delete-btn">X</button>
            </div>
            {habit.title}
            <p>line items down here</p>
            <p>with button to hide/unhide line item form</p>
        </div>
    )
}