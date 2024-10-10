import { unMountDayForm } from "../../helpers/animation/unMountDayForm"
import { animateOnUnMount } from "../../helpers/animation/animateOnUnMount"

import { createTodoListRequest } from "../../URLRequests"


import { ListComponent } from "../../lists/ListComponent"
// import { NewListForm } from "../../lists/forms/NewListForm"

export const DayFooter = ({user, setCurrentContent, setActiveForm, activeForm, dayInUse }) => {   

    const handleTodoClick = () => {
        unMountDayForm(setActiveForm, "")
        createTodoListRequest({userId: user.id, dateFor: dayInUse}).then(function (response) {                        
            animateOnUnMount(setCurrentContent, <ListComponent user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse} list={response.data.todo}/>)
        }).catch(function (error) {
            console.log(error)
        })        
    }

    const handleErrandFormClick = (event) => {
        event.preventDefault()
        activeForm == "errand" ? unMountDayForm(setActiveForm, "") : unMountDayForm(setActiveForm, "errand")                
    }

    const handleHabitFormClick = (event) => {
        event.preventDefault()        
        activeForm == "habit" ? unMountDayForm(setActiveForm, "") : unMountDayForm(setActiveForm, "habit")                        
    }

    const handlePlusButtonClick = (event) => {           
        
        const plusButton = document.querySelector(".footer-plus")        
        const footerMenu = document.querySelector(".footer-menu")        
        footerMenu.classList.toggle("active")
        plusButton.classList.toggle("active")        

        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.remove("active")
        
        const navMenu = document.querySelector(".burger-menu")
        navMenu.classList.remove("active")               
    }

    const handleNewListClick = (event) => {
        event.preventDefault()
        // animateOnUnMount(setCurrentContent, <NewListForm user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse}/>)
        activeForm == "list" ? unMountDayForm(setActiveForm, "") : unMountDayForm(setActiveForm, "list")                        

    }

    return (
        <div className="footer">
            <div className="recent-models">
                <>
                    <button onClick={handleTodoClick} className="recent-button">todo</button>
                    <button onClick={handleErrandFormClick} className="recent-button">errand</button>
                    <button onClick={handleHabitFormClick} className="recent-button">habit</button>
                </>         
            </div>
            
            <div className="footer-plus" onClick={handlePlusButtonClick}>+</div>
            
            <ul className="footer-menu">
                <li onClick={handleNewListClick}>list</li>
                <li>event</li>
                <li>schedule</li>
                <li>reminder</li>
                <li>log</li>
                <li>journal</li>
            </ul>
        </div>
    )
        
    
}