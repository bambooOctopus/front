import { useState } from "react"
import { useEffect } from "react"
import { DateTime } from "luxon"

import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"
import { MonthComponent } from "../calendar/MonthComponent"
import { DayComponent } from "../calendar/DayComponent"

export const ContentContainer = ({currentContent, setCurrentContent}) => {
    const [ dayInUse, setDayInUse ] = useState("")
    const [ monthInUse, setMonthInUse ] = useState("")

    
    
    

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
        <div className="content-container">
          {/* this first element should be the
                content-header, and it should render what it needs
                based on what component is being rendered  
                
                and instead of combining the content-header and content-body for animation
                have them be sepearate and go one after the other
                add a border to each, shrink padding and font-size
                move up

          */}
            {currentContent == "DayComponent" ? 
                <>
                    <DateNav dayInUse={dayInUse} setDayInUse={setDayInUse} currentContent={currentContent} setCurrentContent={setCurrentContent}
                        monthInUse={monthInUse} setMonthInUse={setMonthInUse}/>           
                    <HabitBar currentContent={currentContent} setCurrentContent={setCurrentContent} />
                </>
            :
            currentContent == "MonthComponent" ? 
                <>
                    <DateNav dayInUse={dayInUse} setDayInUse={setDayInUse} currentContent={currentContent} setCurrentContent={setCurrentContent}
                        monthInUse={monthInUse} setMonthInUse={setMonthInUse}/>                           
                </>
            :
            null
            }
            
            <div className="content">
                {currentContent == "MonthComponent" ?
                    <>                    
                        <MonthComponent />                                              
                    </>
                :
                currentContent == "DayComponent" ?
                    <>                                                
                        <DayComponent currentContent={currentContent} />                       
                    </>                    
                :
                    null
                }
                                 
            </div>
        </div>
    )
}