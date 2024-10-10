import { useState, useEffect } from "react"
import { DayComponent } from "./day/DayComponent"
import "./calendar.css"
import { DateTime } from "luxon"

export const Calendar = ({currentContent, setCurrentContent, initialView, initialDate, user}) => {     
    const [ currentCalendarView, setCurrentCalendarView ] = useState("")   

    useEffect(() => {        
        if ( initialDate && initialView == "day" ) {                      
            setCurrentCalendarView(<DayComponent setCurrentCalendarView={setCurrentCalendarView} initialDay={initialDate} user={user} setCurrentContent={setCurrentContent}/>)
        }
        else if ( currentCalendarView == "" || initialView == "today") {                        
            const today = DateTime.now()
            setCurrentCalendarView(<DayComponent setCurrentCalendarView={setCurrentCalendarView} initialDay={today} user={user} setCurrentContent={setCurrentContent} />)                        
        }              
    }, [])

    return (        
         <div>{currentCalendarView}</div>                
    )
}