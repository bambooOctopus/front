import { Calendar } from "../calendar/Calendar"

export const ContentContainer = ({currentContent, setCurrentContent}) => {        
    // this should actually be what card is being animated
    // when the state is about to change, grab this div instead
    
    return (
        <div className="content-container active">
            <Calendar currentContent={currentContent} setCurrentContent={setCurrentContent}/>        
        </div>
    )
}