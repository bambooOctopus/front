import { useEffect, useState } from "react"
import { getDayItemsRequest } from "../../URLRequests"
import { animateOnUnMount } from "../../helpers/animation/animateOnUnMount"
import { HabitComponent } from "../../habit/HabitComponent"

import exercise from '../../../assets/sport16.png'

export const HabitBar = ({user, dayInUse, setCurrentContent}) => {  

    const [ habits, setHabits ] = useState([])


    const mappedHabits = habits.map(habit => {
        let firstLetter = habit.title[0]        

        const handleHabitRedirectClick = (event) => {
            animateOnUnMount(setCurrentContent, <HabitComponent user={user} habit={habit} setCurrentContent={setCurrentContent} dayInUse={dayInUse} />)            
        }

        return (
            <div> 

                <button onClick={handleHabitRedirectClick} className="habit-icon-button">
                    <div><img src={habit.icon} className="habit-bar-icon"></img><p>{habit.title}</p></div>
                </button>                
                
            </div>
        )
    })
    
    useEffect(() => {
        if (dayInUse.isValid) {            
            getDayItemsRequest({userId: user.id, dayInUse: dayInUse}).then(function (response) {                
                setHabits(response.data.habits)
            }).catch(function (error) {
                console.log(error)
            })
        }
        

    }, [dayInUse])

    return (
        <>
            {mappedHabits.length > 0 ?
                <div className="habit-bar">                                           
                    {mappedHabits}                 
                </div>        
            :
                ""
            }
            
        </>                 
    )

}