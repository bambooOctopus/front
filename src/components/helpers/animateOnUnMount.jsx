export const animateOnUnMount = (setCurrentContent, pendingContent) => { 

    const updatePage = () => {
        contentContainer.classList.toggle("active")
        contentContainer.classList.remove("hide")        
        setCurrentContent(pendingContent)        
    }

    const contentContainer = document.querySelector(".content-container")
    contentContainer.classList.toggle("active")
    contentContainer.classList.add("hide")  
    setTimeout(()=> {updatePage()}, 300)   
}