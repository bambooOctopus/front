import { useEffect, useState } from "react"
import { HabitForm } from "./DayGridForms/HabitForm"
import { ErrandsForm } from "./DayGridForms/ErrandsForm"
import { ListForm } from "./DayGridForms/ListForm"

import { ListComponent } from "../../lists/ListComponent"
import { getDayItemsRequest } from "../../URLRequests"
import { animateOnUnMount } from "../../helpers/animation/animateOnUnMount"
import { unMountDayForm } from "../../helpers/animation/unMountDayForm"
import './day-grid.css'

import checklistIcon from "../../../assets/checklist-icon64.png"

import { randomKeyGen } from "../../helpers/randomKeyGen"

export const DayGrid = ({activeForm, setActiveForm, user, setCurrentContent, dayInUse}) => {    

    const [ lists, setLists ] = useState([])
    
    
    const mappedLists = lists.map(list => {

        const handleListClick = () => {
            unMountDayForm(setActiveForm, "")
            let randomKey = randomKeyGen()
            animateOnUnMount(setCurrentContent, <ListComponent key={randomKey} user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse} list={list} />)
        }

        return (

            <div onClick={handleListClick} className="checklist-card">                
                <img src={checklistIcon}></img>                
                <div className="checklist-footer">
                    <p>{list.title}</p>
                </div>
            </div>
            
        )
    })

   useEffect(() => {
    if (dayInUse.isValid) {            
        getDayItemsRequest({userId: user.id, dayInUse: dayInUse}).then(function (response) {                            
            setLists(response.data.lists)
        }).catch(function (error) {
            console.log(error)
        })
    } 

}, [dayInUse])


    return (
        <div className="day-grid">            
            {activeForm == "habit" ? 
                <HabitForm setActiveForm={setActiveForm} user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse}/>
             :
             activeForm == "errand" ?
                <ErrandsForm />
             :
             activeForm == "list" ?
                <ListForm setActiveForm={setActiveForm} user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse}/>
             :

            <ul className="mapped-lists">
                {mappedLists}
            </ul>
             }
            
        </div>
    )
}