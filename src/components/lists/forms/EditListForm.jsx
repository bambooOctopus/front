import { useEffect } from "react"

import { updateListTitleRequest } from "../../URLRequests"
import { ListComponent } from "../ListComponent"

export const EditListForm = ({user, list, setCurrentContent, dayInUse}) => {

    const handleSubmitEditListTitle = (event) => {
        event.preventDefault()          
        let updatedTitle = event.target[0].value
        
        updateListTitleRequest({userId: user.id, listId: list.id, updatedTitle: updatedTitle}).then(function (response) {            
            let updatedList = response.data.updated_list          
            setCurrentContent(<ListComponent user={user} setCurrentContent={setCurrentContent} dayInUse={dayInUse} list={updatedList} />)            
        }).catch(function (error) {
            console.log(error)
        })
    }

    const addFocus = () => {
        let input = document.getElementById("list-input")
        input.focus()

    }

    useEffect(() => {

        setTimeout(() => {addFocus()}, 200)
        
    })

    return (
        <div className="form-container">
            <p>Edit List</p>
            


                        
            <form onSubmit={handleSubmitEditListTitle} className="list-form">                        
                <input placeholder="list item" defaultValue={list.title} id="list-input"></input>
                <button className="habit-plus">+</button>
            </form>   
            
        </div>
    )
}