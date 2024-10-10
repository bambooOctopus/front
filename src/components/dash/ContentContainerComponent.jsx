import { useEffect } from "react"
import { Calendar } from "../calendar/Calendar"


export const ContentContainer = ({currentContent, setCurrentContent}) => {    
             
    useEffect(() => {
        currentContent == "" ? 
            setCurrentContent(
                <Calendar currentContent={currentContent} setCurrentContent={setCurrentContent}
                 initialView={"day"}/>)

            : ""
    })
    
    return (
            <div className="content-container active">
                {currentContent}
            </div>     
    )
}