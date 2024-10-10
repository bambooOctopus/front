import { useEffect, useState } from "react"

import { formatRubyDate, formatDayStringForComponents } from "../helpers/calendar/dateFormats"
import { animateOnUnMount } from "../helpers/animation/animateOnUnMount"
import { mountComponentForm } from "../helpers/animation/mountComponentForm"
import { delayListItems } from "../helpers/animation/delayListItems"
import { Calendar } from "../calendar/Calendar"
import { deleteListRequest } from "../URLRequests"
import { getListItemsRequest, createListItemRequest } from "../URLRequests"
import { destroyListItemsRequest, updateListItemRequest } from "../URLRequests"

import { ListItemForm } from "./forms/ListItemForm"
import { EditListForm } from "./forms/EditListForm"

import "./list-component.css"



export const ListComponent = ({user, setCurrentContent, dayInUse, list}) => {

    const [ listItems, setListItems ] = useState([])
    const [ editStatus, setEditStatus ] = useState(false)
    
    

    const date = formatRubyDate(dayInUse)    
    let dateString = formatDayStringForComponents(date)
    let leftArrow = "< " + dateString

    const mappedListItems = listItems.map(item => {
        

        const checkStatus = item.status        

        const handleDeleteListItem = (event) => {
            event.preventDefault()
            destroyListItemsRequest({listItemId: item.id}).then(function (response) {               
                let newListItems = listItems.filter(listItem => listItem !== item)
                setListItems(newListItems)
            }).catch(function (error) {
                console.log(error)
            })           
        }

        const handleListItemStatusUpdate = (event) => {            
            updateListItemRequest({listItem: item}).then(function (response) {            
                const updatedListItem = response.data.list_item
                let updatedListItems = listItems.map(i => {
                    
                    if (i.id == updatedListItem.id) {
                        i.status = updatedListItem.status
                        return i
                    } 
                    else {
                        return i
                    }                   
                })     

                setListItems(updatedListItems)
                
            }).catch(function (error) {
                console.log(error)
            })
        }

        const onChange = () => {
            // this stops an error from happening
        }

        return (
            <div className="list-item hidden" key={item.id}>
                <input type="checkbox" onClick={handleListItemStatusUpdate} onChange={onChange} checked={checkStatus}></input>
                {item.title}
                <button onClick={handleDeleteListItem} className="delete-btn">X</button>
            </div>
        )
    })


    const handleBackToDateClick = (event) => {        
        animateOnUnMount(setCurrentContent, <Calendar setCurrentContent={setCurrentContent} user={user} initialView={"day"} initialDate={dayInUse} />)        
    } 

    const handleDeleteListClick = (event) => {
         // 1. delete the list from the db
         deleteListRequest({userId: user.id, listId: list.id}).then(function (response) {            
        }).catch(function (error) {
            console.log(error)
        })
        // 2. redirect back to the day calendar
        animateOnUnMount(setCurrentContent, <Calendar setCurrentContent={setCurrentContent} user={user} initialView={"day"} initialDate={dayInUse} />)        
    }

    const handleEditStatusClick = (event) => {        
        editStatus ? setEditStatus(false) : setEditStatus(true)     
    }      

    useEffect(() => {        
           
        getListItemsRequest({listId: list.id}).then(function (response) {                             
            setListItems(response.data.list_items)              
        }).catch(function (error) {
            console.log(error)
        })       
    }, [])

    useEffect(() => {
        
        delayListItems()
    })

    

    return (
        <div className="habit-component">
            <div className="habit-nav">
                <button onClick={handleBackToDateClick} className="back-button">{leftArrow}</button>                            
                <button onClick={handleDeleteListClick} className="delete-list-button">delete</button>
                <button onClick={handleEditStatusClick} className="edit-list-button">edit</button>
            </div>

            {editStatus ? 
                <EditListForm user={user} list={list} setCurrentContent={setCurrentContent} dayInUse={dayInUse} />
            : 
                <ListItemForm user={user} list={list} listItems={listItems} setListItems={setListItems} />
            }          
            
            <ul className="list-items" id="list-items">
                    {mappedListItems}
            </ul>   
        
        </div>
    )
}