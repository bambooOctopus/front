import { useEffect } from "react"

import { createListItemRequest } from "../../URLRequests"

export const ListItemForm = ({user, list, listItems, setListItems}) => {
    
    const handleSubmitListItem = (event) => {       

        event.preventDefault()        
        let listItemTitle = event.target[0].value
        event.target[0].value = ""

        createListItemRequest({userId: user.id, listId: list.id, listItemTitle: listItemTitle}).then(function (response) {
            setListItems([...listItems, response.data.list_item])                           
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
        <div className="form-container">
            <p>{list.title}</p>                       
            <form onSubmit={handleSubmitListItem} className="list-form">                            
                <input placeholder="list item" defaultValue={""} id="list-input"></input>
                <button className="habit-plus">+</button>
            </form>       
        </div>
    )
}