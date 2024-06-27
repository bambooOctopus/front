
import { DateTime } from "luxon"

export const DateNav = ({currentDate, setCurrentDate}) => {
    const leftButton = "<"
    const rightButton = ">"

    const handleYesterdayClick = (event) => {
        event.preventDefault()        
        // format currentDate into date obj
        // minus one day
        // set new currentDate
        const formattedDate = DateTime.fromFormat(currentDate, "MMMM dd")
        const newDate = formattedDate.minus({days: 1})
        const newDateString = newDate.toLocaleString({month: 'long', day: 'numeric'})
        setCurrentDate(newDateString)
    }

    const handleTomorrowClick = (event) => {
        event.preventDefault()
        // format currentDate into date obj
        // add one day
        // set new currentDate
        const formattedDate = DateTime.fromFormat(currentDate, "MMMM dd")
        const newDate = formattedDate.plus({days: 1})
        const newDateString = newDate.toLocaleString({month: 'long', day: 'numeric'})
        setCurrentDate(newDateString)
        
    }
    
    


    return (
        <div className="date-nav">
            <button onClick={handleYesterdayClick} className="date-button">{leftButton}</button>
            <p>{currentDate}</p>
            <button onClick={handleTomorrowClick} className="date-button">{rightButton}</button>
        </div>
    )
}