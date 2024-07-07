import { Calendar } from "../calendar/Calendar"

export const ContentContainer = ({currentContent, setCurrentContent}) => {    
    
    return (
        <div className="content-container">
            <Calendar currentContent={currentContent} setCurrentContent={setCurrentContent}/>        
        </div>
    )
}