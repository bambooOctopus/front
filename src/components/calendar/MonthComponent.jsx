import { useEffect } from "react"
import "./month-component.css"

import { Footer } from "../dash/FooterComponent"

export const MonthComponent = ({currentDate}) => {     
    
    return (

        <div className="month-component">
            
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
    )
}