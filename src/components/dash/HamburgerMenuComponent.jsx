import { Calendar } from "../calendar/Calendar"
import { LogOutButton } from "./LogOut"

import { animateOnUnMount } from "../helpers/animation/animateOnUnMount"
import { randomKeyGen } from "../helpers/randomKeyGen"
import { HabitsComponent } from "../habit/HabitsComponent"

export const HamburgerMenu = ({currentContent, setCurrentContent, user}) => { 
    const handleToggleBurgerClick = (event) => {      

        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("active")
        
        const navMenu = document.querySelector(".burger-menu")
        navMenu.classList.toggle("active") 
        
        const plusButton = document.querySelector(".footer-plus")        
        const footerMenu = document.querySelector(".footer-menu")

        if (plusButton != null && footerMenu != null) {
            footerMenu.classList.remove("active")
            plusButton.classList.remove("active") 
        }      
        
    }

    const handleTodayClick = (event) => {
        // make helper for this
        let randomKey = randomKeyGen()

        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.remove("active")
        
        const navMenu = document.querySelector(".burger-menu")
        navMenu.classList.remove("active")           
        
        animateOnUnMount(setCurrentContent, <Calendar key={randomKey} currentContent={currentContent} setCurrentContent={setCurrentContent} initialView={"today"} user={user} />)                  
    }

    const handleHabitsClick = (event) => {
        let randomKey = randomKeyGen()

        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.remove("active")
        
        const navMenu = document.querySelector(".burger-menu")
        navMenu.classList.remove("active")       

        animateOnUnMount(setCurrentContent, <HabitsComponent key={randomKey} setCurrentContent={setCurrentContent} user={user} />)                  

        
        
    }

    return (
        <>
        <div className="hamburger" onClick={handleToggleBurgerClick}>
            <div className="patty"></div>
            <div className="patty"></div>
            <div className="patty"></div>
            <div className="patty"></div>
            <div className="patty"></div>
        </div>

        <ul className="burger-menu">
            <li onClick={handleTodayClick}>today</li>
            <li onClick={handleHabitsClick}>habits</li>
            <li>invitations</li>
            <li>shareables</li>
            <li>profile</li>
            <li><LogOutButton /></li>            
        </ul>
        </>
    )
}