import { useEffect } from "react"
import "./month-component.css"

import { DateNav } from "./DateNavComponent"
import { Footer } from "../dash/FooterComponent"



export const MonthComponent = ({currentContent, setCurrentContent, dayInUse, setDayInUse, monthInUse, setMonthInUse}) => {     
    
    return (
        <>        
            <DateNav currentContent={currentContent} setCurrentContent={setCurrentContent} dayInUse={dayInUse}
              setDayInUse={setDayInUse} monthInUse={monthInUse} setMonthInUse={setMonthInUse}/>       
        
            <div className="month-component active">               
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <p>month component</p>
                <Footer currentContent={"MonthComponent"} />
            </div>

        </>
    )
}