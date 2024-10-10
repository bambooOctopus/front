import { useState, useEffect } from "react"
import "./month-component.css"
import { DateTime } from "luxon"

import { MonthNav } from "../DateNavComponent"
import { MonthFooter } from "./MonthFooter"

import { MonthGrid } from "./MonthGrid"



export const MonthComponent = ({setCurrentCalendarView, initialMonth, user, setCurrentContent}) => {                   
    const [ monthInUse, setMonthInUse ] = useState("")           
    
    const DayNames = () => {
        return (
            <div className="day-names">
                <p className="day-name">mon</p>
                <p className="day-name">tue</p>
                <p className="day-name">wed</p>
                <p className="day-name">thu</p>
                <p className="day-name">fri</p>
                <p className="day-name">sat</p>
                <p className="day-name">sun</p>
            </div>
    )}      
   
    useEffect(() => { 
        if (initialMonth == "") {
            setMonthInUse(DateTime.now)         
        }               
        else {
            setMonthInUse(initialMonth)
        }
       
    }, [])   

    return (
        <>        
            <div className="month-component active">  
                <MonthNav setCurrentCalendarView={setCurrentCalendarView} monthInUse={monthInUse} setMonthInUse={setMonthInUse} setCurrentContent={setCurrentContent} user={user}/>             
                <DayNames />                
                <MonthGrid monthInUse={monthInUse} setCurrentCalendarView={setCurrentCalendarView} user={user} setCurrentContent={setCurrentContent} />                           
                {/* <Footer currentContent={"MonthComponent"} /> */}
                <MonthFooter />
            </div>

        </>
    )
}