import { DateTime } from "luxon"

import { DayComponent } from "./DayComponent"
import { MonthComponent } from "./MonthComponent"

import "./calendar.css"

import { useState, useEffect } from "react"



export const Calendar = ({currentContent, setCurrentContent}) => {     

    const [ dayInUse, setDayInUse ] = useState("")
    const [ monthInUse, setMonthInUse ] = useState("")   
    
    // so here we have a state that at first copies current state
    // then handles all the state switching for that app afterward
    // in that the date-nav switches calendars state first
    // then we animate what we need to animate
    // and then we update the main state


    useEffect(() => {        
        const dt = DateTime.now()
        const dateString = dt.toLocaleString({month: 'short', day: 'numeric'})
        {dayInUse == "" ? setDayInUse(dateString) : null}                
    }, [])

    useEffect(() => {
        const dt = DateTime.now()
        const monthString = dt.toLocaleString({month: 'short', year: 'numeric'})        
        {monthInUse == "" ? setMonthInUse(monthString) : null}     
    }, [])    

    return (
        <div>

            {currentContent == "DayComponent" ?
                <DayComponent currentContent={currentContent} setCurrentContent={setCurrentContent} 
                    dayInUse={dayInUse} setDayInUse={setDayInUse} monthInUse={monthInUse}  setMonthInUse={setMonthInUse} />
            :
            currentContent == "MonthComponent" ?
                <MonthComponent currentContent={currentContent} setCurrentContent={setCurrentContent} 
                dayInUse={dayInUse} setDayInUse={setDayInUse} monthInUse={monthInUse}  setMonthInUse={setMonthInUse}/>
            :
                ""          
            }



        </div>
    )
}