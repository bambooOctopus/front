export const Footer = () => {

    const handlePlusButtonClick = (event) => {
        
        const plusButton = document.querySelector(".footer-plus")        
        const footerMenu = document.querySelector(".footer-menu")
        footerMenu.classList.toggle("active")
        plusButton.classList.toggle("active")

        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.remove("active")
        
        const navMenu = document.querySelector(".burger-menu")
        navMenu.classList.remove("active") 
        
    }

    return (
        <div className="footer">
            <div className="recent-models">
                <button className="recent-button">todo</button>
                <button className="recent-button">grocery</button>
                <button className="recent-button">event</button>
            </div>
            <div className="footer-plus" onClick={handlePlusButtonClick}>+</div>

            <ul className="footer-menu">
                <li>list</li>
                <li>event</li>
                <li>schedule</li>
                <li>reminder</li>
                <li>log</li>
                <li>journal</li>
            </ul>
        </div>
    )
}