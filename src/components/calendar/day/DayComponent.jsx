import { useEffect, useState } from "react"
import { DateTime } from "luxon"

import "./day-component.css"
import { DayNav } from "../DateNavComponent"
import { HabitBar } from "./HabitBarComponent"
import { DayGrid } from "./DayGrid"
import { DayFooter } from "./DayFooter"




export const DayComponent = ({setCurrentCalendarView, initialDay, user, setCurrentContent}) => {     
    const [ dayInUse, setDayInUse ] = useState("")
    const [ activeForm, setActiveForm ] = useState("")
    // activeForm && setActiveForm are being set in Footer
    // then being rendered in DayGrid

    useEffect(() => {        
        initialDay ? setDayInUse(initialDay) : setDayInUse(DateTime.now)    
    }, [])

    return (
            <>                           
                <div className="day-component active">
                    <DayNav setCurrentCalendarView={setCurrentCalendarView} dayInUse={dayInUse} setDayInUse={setDayInUse} activeForm={activeForm} setActiveForm={setActiveForm} user={user} setCurrentContent={setCurrentContent}/>                  
                    
                    <div className="day-content">
                        <HabitBar user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse} />
                        <DayGrid activeForm={activeForm} setActiveForm={setActiveForm} user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse} />
                    </div>
                    <DayFooter user={user} setCurrentContent={setCurrentContent} activeForm={activeForm} setActiveForm={setActiveForm} dayInUse={dayInUse} />
                    {/* <Footer currentContent={"DayComponent"} activeForm={activeForm} setActiveForm={setActiveForm} setCurrentContent={setCurrentContent} user={user} dayInUse={dayInUse} /> */}
                </div>
             </>
    )
}  
          