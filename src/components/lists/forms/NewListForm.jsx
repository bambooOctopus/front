export const NewListForm = ({user, setCurrentContent, dayInUse}) => {
    const leftArrow = "<< date/last screen?"

    // update: I'd actually rather a new list be a form in DayGridForms
    // which would be a much easier way to implement it as well
    // click the button, close the menu, bring up a form from DayGridForms,
    // redirect to ListComponent after a list is created
    // there is already a ListForm file in DayGridForms...it is a blank file

    // todo: 
    // 1) make list title form
    // 2) send list title to db, return list
    // 3) fade to list component using return list


    return (
        <div className="habit-component">
            <div className="habit-nav">
                {/* <button onClick={handleBackToDateClick} className="back-button">{leftArrow}</button>
                <button onClick={handleDeleteHabitClick} className="delete-btn">X</button> */}
                <button className="back-button">{leftArrow}</button>
            
            </div>

            
            
            
        </div>
    )
}