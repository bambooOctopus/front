import { useContext } from "react"
import { MainContext } from "../Provider"

import { LogOutButton } from "./LogOut"
import { HamburgerMenu } from "./HamburgerMenuComponent"
import { NotificationsBar } from "./NotificationsBarComponent"
import { MessageBar } from "./MessageBarComponent"
import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"
import { ContentContainer } from "./ContentContainerComponent"
import { Footer } from "./FooterComponent"

export const Dashboard = () => {
    // siteData = { user: {id, email, created_at, updated_at}}    
    const [ siteData, setSiteData ] = useContext(MainContext)
    console.log(siteData)
    

    return (
        <div className="dashboard">
            <p>dash</p>
            <HamburgerMenu />
            <LogOutButton />
            <NotificationsBar />
            <MessageBar />
            <DateNav />
            <HabitBar />
            <ContentContainer />
            <Footer />
        </div>
    )
}