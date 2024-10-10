import { useEffect } from "react"
import { createListRequest } from "../../../URLRequests"
import { unMountDayForm } from "../../../helpers/animation/unMountDayForm"
import { animateOnUnMount } from "../../../helpers/animation/animateOnUnMount"

import { ListComponent } from "../../../lists/ListComponent"

export const ListForm = ({setActiveForm, user, setCurrentContent, dayInUse}) => {   

    // setActiveForm is state in  DayFooter; ListForm rendered in DayGrid
    

    // after creating a list, animate redirect to list component

    const handleCreateListSubmit = (event) => {
        event.preventDefault()
        let listTitle = event.target[0].value
        createListRequest({userId: user.id, title: listTitle, dateFor: dayInUse}).then(function (response) {            
            let list = response.data.list            
            unMountDayForm(setActiveForm, "")
            animateOnUnMount(setCurrentContent, <ListComponent user={user} list={list} setCurrentContent={setCurrentContent} dayInUse={dayInUse} />)                        
        }).catch(function (error) {
            console.log(error)
        })

        
       
        
    }

    const addFocus = () => {
        let input = document.getElementById("list-input")
        input.focus()

    }

    useEffect(() => {
        // set addFocus after delay because it interrupts animation
        setTimeout(() => {addFocus()}, 200)
        
    })


    return (
        <div className="habit-form">
            <p>create list</p>
            <form onSubmit={handleCreateListSubmit} className="habit-input-container">
                <input placeholder="list title" id="list-input"></input>
                <button className="habit-plus">+</button>
            </form>
        </div>
    )
}