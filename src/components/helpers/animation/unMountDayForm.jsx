export const unMountDayForm = (stateChange, pendingContent) => {        
    const habitForm = document.querySelector(".habit-form")
    const todoForm = document.querySelector(".todo-form")
    const errandForm = document.querySelector(".errand-form")

    const footerMenu = document.querySelector(".footer-menu")
    const plusButton = document.querySelector(".footer-plus")            
    footerMenu.classList.remove("active")
    plusButton.classList.remove("active")

    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".burger-menu")
    hamburger.classList.remove("active")   
    navMenu.classList.remove("active") 

    const habitBar = document.querySelector(".habit-bar")
    const lists = document.querySelector(".mapped-lists")
    
    if (habitBar != null) {
        habitBar.style.display = "none"        
    }

    if ( lists != null) {
        lists.style.display = "none"
    }
    
    

    if (habitForm != null ) {
        habitForm.classList.add("hide-form")        
        habitBar.style.display = "flex"
        
    }
    else if (todoForm != null) {
        todoForm.classList.add("hide-form")
    }
    else if (errandForm != null) {
        errandForm.classList.add("hide-form")
    }
    

    
    setTimeout(()=> {stateChange(pendingContent)}, 200)
}