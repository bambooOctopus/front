export const HabitBar = ({currentContent, setCurrentContent}) => {
   
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