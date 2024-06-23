import { HamburgerMenu } from "./HamburgerMenuComponent"
import { NotificationsBar } from "./NotificationsBarComponent"
import { MessageBar } from "./MessageBarComponent"
import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"
import { LogOutButton } from "./LogOut"

export const Header = () => {
    return (
        <div className="header">            
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                <HamburgerMenu />
                <LogOutButton />            
                <NotificationsBar />
            </div>            
            <MessageBar />            
            <DateNav />
            <HabitBar />
        </div>
    )
}