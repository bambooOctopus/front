import { HamburgerMenu } from "./HamburgerMenuComponent"
import { NotificationsBar } from "./NotificationsBarComponent"
import { MessageBar } from "./MessageBarComponent"
import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"

export const Header = () => {
    return (
        <div className="header">            
            <div className="ham-notification-bar">                
                <HamburgerMenu />               
                <NotificationsBar />
            </div>            
            <MessageBar />            
            <DateNav />
            <HabitBar />
        </div>
    )
}