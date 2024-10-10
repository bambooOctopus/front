import { useEffect } from "react"

export const ErrandsForm = () => {
    // set activeForm in Footer, renders in DayGrid
    
    const handleSubmitErrandName = (event) => {
        event.preventDefault()
    }

    const addFocus = () => {
        let input = document.getElementById("errand-input")
        input.focus()

    }

    useEffect(() => {
        // set addFocus after delay because it interrupts animation
        setTimeout(() => {addFocus()}, 200)
        
    })

    
    return (
        <div onSubmit={handleSubmitErrandName} className="habit-form">
            <p>create errand</p>
            <form className="habit-input-container">
                <input placeholder="errand location" id="errand-input"></input>
                <button className="habit-plus">+</button>
            </form>

            
        </div>
    )
}