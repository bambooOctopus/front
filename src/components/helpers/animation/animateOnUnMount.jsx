export const animateOnUnMount = (stateChange, pendingContent) => {     

    const contentContainer = document.querySelector(".content-container")    

    const updatePage = () => {
       contentContainer.classList.toggle("active")
        contentContainer.classList.remove("hide")        
        stateChange(pendingContent)        
    }   
    
    contentContainer.classList.toggle("active")
    contentContainer.classList.add("hide") 
    
    // const footerMenu = document.querySelector(".footer-menu")    
    // footerMenu.classList.remove("active")    
    
    
    
    setTimeout(()=> {updatePage()}, 300)   
}