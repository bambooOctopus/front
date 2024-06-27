import { HamburgerMenu } from "./HamburgerMenuComponent"
import { NotificationsBar } from "./NotificationsBarComponent"
import { MessageBar } from "./MessageBarComponent"

export const Header = () => {
    return (
        <div className="header">            
            <div className="ham-notification-bar">                
                <HamburgerMenu />               
                <NotificationsBar />
            </div>            
            <MessageBar />                       
        </div>
    )
}