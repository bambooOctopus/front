import { useState } from "react"
import { useEffect } from "react"
import { DateTime } from "luxon"

import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"

export const ContentContainer = () => {
    const [ currentDate, setCurrentDate ] = useState("")

    useEffect(() => {
        const dt = DateTime.now()
        const dateString = dt.toLocaleString({month: 'long', day: 'numeric'})
        {currentDate == "" ? setCurrentDate(dateString) : null}        
        
    }, [])

    return (
        <div className="content-container">
            <DateNav currentDate={currentDate} setCurrentDate={setCurrentDate} />
            <HabitBar />
            <div className="content"></div>
        </div>
    )
}