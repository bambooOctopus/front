export const mountComponentForm = (form) => {
    
    const contentContainer = document.querySelector(".content-container")
    const listForm = document.querySelector(".edit-list-form")
    
    

    if (form == "edit-list-form" && listForm != null) {       
        listForm.classList.remove("hidden")
        listForm.classList.add("active")

    }

    

}