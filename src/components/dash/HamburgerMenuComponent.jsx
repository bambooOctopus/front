import { useState } from "react"

import { LogOutButton } from "./LogOut"

export const HamburgerMenu = () => { 

    const handleToggleBurgerClick = (event) => {
        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("active")
        
        const navMenu = document.querySelector(".burger-menu")
        navMenu.classList.toggle("active")               
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
            <li>lists</li>
            <li>invitations</li>
            <li>shareables</li>
            <li>profile</li>
            <li><LogOutButton /></li>            
        </ul>
        </>
    )
}