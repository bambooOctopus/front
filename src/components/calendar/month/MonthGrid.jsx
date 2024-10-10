import { useEffect, useState } from "react"
import { DateTime } from "luxon"
import "./month-component.css"
import { DayComponent } from "../day/DayComponent"

import { enlargeDay } from "../../helpers/animation/enlargeDay"
import { getMonthItemsRequest } from "../../URLRequests"
import { iconLookUp } from "../../helpers/calendar/iconLookUp"
import notesIcon from "../../../assets/notes16.png"
import habitIcon from "../../../assets/habit16.png"

import { setMonth } from "../../helpers/calendar/setMonth"


export const MonthGrid = ({monthInUse, setCurrentCalendarView, user, setCurrentContent}) => {     
    const [ monthItems, setMonthItems ] = useState({})    
    let daysArray = []          

    const numberOfDaysConversion = {
        "Mon": 0,
        "Tue": 1,
        "Wed": 2,
        "Thu": 3,
        "Fri": 4,
        "Sat": 5,
        "Sun": 6
    }   
    
    if (monthInUse  != "") {
        daysArray = setMonth(monthInUse)
    }
    

    // const setMonthArray = () => {

    //     let newDaysArray = []

    //     let dt = monthInUse
    //     let month = dt.month        
    //     let year = dt.year        
    //     let daysInMonth = dt.daysInMonth
    //     // how many days to pad array with
    //     // set a date time to the first day of the month you want, then find the name of the day
    //     // then convert it using the conversion array 
    //     // probably a terrible way of doing it but it appears to work 
    //     let emptyDaysNumber = numberOfDaysConversion[DateTime.now().set({month: month, day: 1, year: year}).weekdayShort]          
    //     let lastMonthNumberOfDays = DateTime.now().set({month: month - 1}).daysInMonth
    //     let loopStartDate = lastMonthNumberOfDays - emptyDaysNumber        
        
    //     // push empty days before first of month
    //     // this is where todo: make days from last month clickable and have id

    //     // 1. emptyDaysNumber is how many old dates you need        
    //     // 2. find out how many days were in previous month
    //     // 3. push those dates into newDaysArray; set start date for loop how far back you need to go
    //     // and end when you reach the last date

    //     for (let i = 1; i <= emptyDaysNumber; i++) {
    //         newDaysArray.push(["x"])
    //     }

    //     // push date arrays        
    //     for (let i = 1; i <= daysInMonth; i++) {            
    //         newDaysArray.push([i])
    //     }

    //     // empty days after days 
    //     // this is where todo: make days for next month clickable and have id
    //     for (let i = 0; newDaysArray.length < 35; i++) {
    //         newDaysArray.push(["x"])
    //     }
        
    //     daysArray = newDaysArray

    // }  
    
    // if (monthInUse != "") {
    //     setMonthArray()
    // }    

    const mappedDaysArray = daysArray.map(day => {
        
        let iconsArray = []
        // day => ['x], [21], [22], [23]
        const month = monthInUse.month
        const year = monthInUse.year
        const idString = day[0]
        // idString = 8-22-2024   

        let date = day[0].split("-")[1]
        



        if (monthItems.habits) {
            monthItems.habits.includes(day[0]) ? iconsArray.push(habitIcon) : ""
        }

        if (monthItems.lists) {            
            monthItems.lists.includes(day[0]) ? iconsArray.push(notesIcon) : ""
        }
        

        const handleDayClick = (event) => {            
            let target = event.target   
                  
            

            if (target.className == "active-day") {
                let noDashes = target.id.replaceAll("-", " ")
                let initialDay = DateTime.fromFormat(noDashes, "M d yyyy")                
                target.classList.add("enlarge-day")
                enlargeDay(target, setCurrentCalendarView, <DayComponent setCurrentCalendarView={setCurrentCalendarView} initialDay={initialDay} user={user} setCurrentContent={setCurrentContent} />)
            }

            if (target.className == "status-icon") {
                let statusBar = target.parentNode
                let activeDay = statusBar.parentNode
                let noDashes = activeDay.id.replaceAll("-", " ")
                let initialDay = DateTime.fromFormat(noDashes, "M d yyyy")                
                activeDay.classList.add("enlarge-day")
                enlargeDay(target, setCurrentCalendarView, <DayComponent setCurrentCalendarView={setCurrentCalendarView} initialDay={initialDay} user={user} setCurrentContent={setCurrentContent} />)
            }



            else {
                let parentId = target.parentNode.id   
                let parent = target.parentNode                            
                let noDashes = parentId.replaceAll("-", " ")                
                let initialDay = DateTime.fromFormat(noDashes, "M d yyyy")                             
                enlargeDay(target.parentNode, setCurrentCalendarView, <DayComponent setCurrentCalendarView={setCurrentCalendarView} initialDay={initialDay} user={user} setCurrentContent={setCurrentContent}/>)                
            }
        }        

        let mappedIconsArray = iconsArray.map(icon => {
            return (
                <img src={icon} className="status-icon"></img>
            )

        })
        // != "x"
        return (
            <>

                {day.length == 1  ? 
                    <div onClick={handleDayClick} className='active-day' id={idString} key={idString} >
                        <p className="date">{date}</p>

                        {/* {iconsArray.length > 0 ? <div className="icon-bar"><img src={habitIcon} className="status-icon"></img></div> : <div className="icon-bar"></div>} */}
                        <div className="icon-bar">
                            {mappedIconsArray}
                        </div>
                        

                        <div className="status-bar"></div>
                    </div>                                    
                :
                day[1] == "prev" ?
                    <div onClick={handleDayClick} className='active-day prev-day' id={idString} key={idString}>
                        <p className="date">{date}</p>
                        <div className="icon-bar"></div>
                    </div>
                :                
                day[1] == "next" ?
                    <div onClick={handleDayClick} className='active-day next-day' id={idString} key={idString}>
                        <p className="date">{date}</p>
                        <div className="icon-bar"></div>
                    </div>
                :
                ""
                }
            </>
            
        )       
    })

    useEffect(() => {
           
        if (monthInUse.isValid) {
            getMonthItemsRequest({userId: user.id, monthString: monthInUse}).then(function (response) {                                
                let habits  = response.data.habits                                
                // habits = ['9-24-2025', '9-27-2024']
                let lists = response.data.lists                
                setMonthItems({habits: habits, lists: lists})                
            }).catch(function (error) {
                console.log(error)
            })

        }}

    , [monthInUse])

    return (
        <div className="month-grid active">
            {mappedDaysArray}            
        </div>
    )
}