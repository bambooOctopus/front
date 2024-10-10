import { unMountDayForm } from "./unMountDayForm"

export const dayFade = (stateChange, pendingContent) => {

    const dayContent = document.querySelector(".day-content")
    dayContent.classList.toggle("active")
    dayContent.classList.add("hide")
    

    const footerMenu = document.querySelector(".footer-menu")
    footerMenu.classList.remove("active")    
    
    
    const upDatePage = () => {
        dayContent.classList.toggle("active")
        dayContent.classList.remove("hide")
    
        stateChange(pendingContent)
    }

    setTimeout(() => {upDatePage()}, 300)

}