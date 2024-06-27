import calendarLogo from '/home/schgot/ht_v2/front/src/assets/calendar.png'

export const HabitBar = ({currentContent, setCurrentContent}) => {
    // we should be rendering everything based on currentContent
    // if it's the MonthComponent, we need to render a single day logo
    // if it's the DayComponent, we need to render a month calendar logo
    // and clicking on either of them needs to swap it back and forth
    // actually maybe we can just change the src when you click it
    const handleMonthCalendarClick = () => {
        setCurrentContent("MonthComponent")
    }
    return (

        <>
            {currentContent == "DayComponent" ? 
                <div className="habit-bar">                                           
                    <p>habit bar</p>
                </div>
            :
                null
            }      
        </>
    )
}