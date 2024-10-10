export const monthGridFade = (stateChange, pendingContent) => {

    const monthGrid = document.querySelector(".month-grid")
    monthGrid.classList.toggle("active")
    monthGrid.classList.add("hide")

    const footerMenu = document.querySelector(".footer-menu")
    footerMenu.classList.remove("active")    
    
    const upDatePage = () => {
        monthGrid.classList.toggle("active")
        monthGrid.classList.remove("hide")
        stateChange(pendingContent)
    }

    setTimeout(() => {upDatePage()}, 300)
}



