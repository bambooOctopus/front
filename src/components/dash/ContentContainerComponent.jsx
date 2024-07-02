import { useState } from "react"
import { useEffect } from "react"
import { DateTime } from "luxon"

import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"
import { MonthComponent } from "../calendar/MonthComponent"
import { DayComponent } from "../calendar/DayComponent"
import { Footer } from "./FooterComponent"

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
            {/*  perhaps the DateNav should be rendered inside Month && Day Component
                that way when you render those components, it could box itself up 
                in the card animation and move around as well
                it would help with the re-rendering
                plus it only needs to be in the calendar components
                all the other components that need to be rendered don't need it at all
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
                        <DayComponent />                        
                    </>
                :
                    null
                }
                <Footer currentContent={currentContent}/>                    
            </div>
        </div>
    )
}