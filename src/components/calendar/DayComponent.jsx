import "./day-component.css"
import { Footer } from "../dash/FooterComponent"
import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"

export const DayComponent = ({currentContent, setCurrentContent, dayInUse, setDayInUse, monthInUse, setMonthInUse}) => {  

    return (
            <>  
                <DateNav dayInUse={dayInUse} setDayInUse={setDayInUse} currentContent={currentContent} setCurrentContent={setCurrentContent}
                        monthInUse={monthInUse} setMonthInUse={setMonthInUse}/>                    
                <HabitBar />
           
                <div className="day-component active">
                    {/* <p>day component</p>
                    <p>day component</p>
                    <p>day component</p>
                    <p>day component</p>
                    <p>day component</p>
                    <p>day component</p>
                    <p>day component</p>
                    <p>day component</p>
                    <p>day component</p>
                    <p>day component</p> */}
                    <Footer currentContent={"DayComponent"}/>
                </div>

             </>
    )
}  
          