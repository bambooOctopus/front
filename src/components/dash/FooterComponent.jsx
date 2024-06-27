export const Footer = () => {

    const handlePlusButtonClick = (event) => {
        
        const plusButton = document.querySelector(".footer-plus")        
        const footerMenu = document.querySelector(".footer-menu")
        footerMenu.classList.toggle("active")
        plusButton.classList.toggle("active")
        
    }

    return (
        <div className="footer">
            <div className="recent-models">
                <button>todo</button>
                <button>grocery</button>
                <button>event</button>
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