import { useState } from "react"
import { useEffect } from "react"
import { DateTime } from "luxon"

import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"
import { MonthComponent } from "../calendar/MonthComponent"
import { DayComponent } from "../calendar/DayComponent"

export const ContentContainer = () => {
    const [ currentDate, setCurrentDate ] = useState("")
    const [ currentMonth, setCurrentMonth ] = useState("")
    const [ currentContent, setCurrentContent ] = useState("DayComponent")

    useEffect(() => {
        const dt = DateTime.now()
        const dateString = dt.toLocaleString({month: 'short', day: 'numeric'})
        {currentDate == "" ? setCurrentDate(dateString) : null}        
        
    }, [])

    useEffect(() => {
        const dt = DateTime.now()
        const monthString = dt.toLocaleString({month: 'short', year: 'numeric'})        
        {currentMonth == "" ? setCurrentMonth(monthString) : null}        

    })

    

    return (
        <div className="content-container">
            <DateNav currentDate={currentDate} setCurrentDate={setCurrentDate} currentContent={currentContent} setCurrentContent={setCurrentContent}
                currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}
            />
            <HabitBar currentContent={currentContent} setCurrentContent={setCurrentContent} />
            <div className="content">
                {currentContent == "MonthComponent" ?
                    <MonthComponent />
                :
                currentContent == "DayComponent" ?
                    <DayComponent />
                :
                    null
                }
            </div>
        </div>
    )
}