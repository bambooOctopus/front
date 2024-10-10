import './habitForm.css'
import './day-form-animations.css'

import { useEffect, useState } from 'react'
import { HabitComponent } from '../../../habit/HabitComponent'

import { unMountDayForm } from '../../../helpers/animation/unMountDayForm'
import { animateOnUnMount } from '../../../helpers/animation/animateOnUnMount'
import { createHabitRequest } from '../../../URLRequests'
import { toRubyDate } from '../../../helpers/calendar/dateFormats'

import gymIcon from '../../../../assets/sport36.png'
import boozeIcon from '../../../../assets/alcoholic-drink32.png'
import weedIcon from '../../../../assets/joint32.png'
import dietIcon from '../../../../assets/diet32.png'
import budgetIcon from '../../../../assets/cost-saving32.png'
import studyIcon from '../../../../assets/study32.png'
import workIcon from '../../../../assets/work32.png'
import entertainmentIcon from '../../../../assets/entertainment32.png'


export const HabitForm = ({setActiveForm, user, setCurrentContent, dayInUse}) => {   

    // setActiveForm in footer to render in DayGrid
    

    // after creating a habit, animate redirect to habit#show

    const [ selectedIcon, setSelectedIcon ] = useState("")
    console.log(selectedIcon)
    
    const iconLogos = [gymIcon, boozeIcon, weedIcon, dietIcon, budgetIcon, studyIcon, workIcon, entertainmentIcon]

    const mappedIconLogos = iconLogos.map(icon => {

        const handleIconClick = (event) => {
            setSelectedIcon(icon)
        }

        return (
            <>
                {selectedIcon == icon ?
                    <div className='habit-icon selected' onClick={handleIconClick} ><img src={icon}></img></div>    
                :
                    <div className='habit-icon' onClick={handleIconClick} ><img src={icon}></img></div>    
                }
                
            </>          
           
        )
    })
    
    const handleCreateHabitSubmit = (event) => {
        event.preventDefault()        
        let habitTitle = event.target[0].value
             

        createHabitRequest({userId: user.id, title: habitTitle, dayInUse: dayInUse, icon: selectedIcon}).then(function (response) {            
            let habit = response.data.habit
            unMountDayForm(setActiveForm, "")
            animateOnUnMount(setCurrentContent, <HabitComponent user={user} habit={habit} setCurrentContent={setCurrentContent} dayInUse={dayInUse} />)                        
        }).catch(function (error) {
            console.log(error)
        })
        
    }    

    const addFocus = () => {
        let input = document.getElementById("habit-input")
        input.focus()

    }

    useEffect(() => {
        // set addFocus after delay because it interrupts animation
        setTimeout(() => {addFocus()}, 200)
        
    })


    return (
        <div className="habit-form">
            <p>create habit</p>
            <form onSubmit={handleCreateHabitSubmit} className="habit-input-container">
                <input placeholder="habit title" id="habit-input"></input>
                <button className="habit-plus">+</button>
            </form>

            <div className="habit-icon-container">            
                {mappedIconLogos}
            </div>

            
        </div>
    )
}