import { useContext } from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../Provider"

import { Header } from "./HeaderComponent"
import { ContentContainer } from "./ContentContainerComponent"
import { Calendar } from "../calendar/Calendar"



export const Dashboard = () => {
    // siteData = { user: {id, email, created_at, updated_at}}    
    const [ siteData, setSiteData ] = useContext(MainContext)       
    const [ currentContent, setCurrentContent ] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentContent(<Calendar currentContent={currentContent} setCurrentContent={setCurrentContent} user={siteData.user} />)
    }, [])

    useEffect(() => {
        !siteData.user ? navigate("/sign-in") : ""
    }, [siteData.user])
    
   

    return (
        <div className="dashboard">
                <Header currentContent={currentContent} setCurrentContent={setCurrentContent} user={siteData.user} />            
                <ContentContainer currentContent={currentContent} setCurrentContent={setCurrentContent} />                      
        </div>
    )
}