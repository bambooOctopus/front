import { useContext } from "react"
import { MainContext } from "../Provider"

import { Header } from "./HeaderComponent"
import { ContentContainer } from "./ContentContainerComponent"
import { Footer } from "./FooterComponent"

export const Dashboard = () => {
    // siteData = { user: {id, email, created_at, updated_at}}    
    const [ siteData, setSiteData ] = useContext(MainContext)
    
    

    return (
        <div className="dashboard">            
            <Header />            
            <ContentContainer />
            <Footer />
        </div>
    )
}