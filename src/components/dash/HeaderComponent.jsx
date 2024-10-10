import { HamburgerMenu } from "./HamburgerMenuComponent"
import { NotificationsBar } from "./NotificationsBarComponent"
import { MessageBar } from "./MessageBarComponent"

export const Header = ({currentContent, setCurrentContent, user}) => {
    return (
        <div className="header">            
            <div className="ham-notification-bar">                
                <HamburgerMenu currentContent={currentContent} setCurrentContent={setCurrentContent} user={user}/>               
                <NotificationsBar />
            </div>            
            <MessageBar />                       
        </div>
    )
}