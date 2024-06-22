import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { MainContext } from "../Provider"

import { ipUrl } from "../../URLs"

export const LogOutButton = () => {

    const [ siteData, setSiteData ] = useContext(MainContext)
    const navigate = useNavigate() 
    
    const handleLogOutClick = (event) => {
        const LOG_OUT_URL = ipUrl + "/users/sign_out"       
        event.preventDefault()       

        if (siteData === undefined) {            
            localStorage.removeItem("sessionKey")
            setSiteData({message: ["success", "successfully logged out"]})
            navigate("/")
        }
        else if (localStorage.sessionKey) {            
            axios.delete(LOG_OUT_URL, {
                headers: {
                    "Content-type": "application/json",
                    Authorization: localStorage.sessionKey
                }
            }).then(function (response) {                                                
                // siteData.message is deprecated
                setSiteData({message: ["success", "successfully logged out"]})
                localStorage.removeItem("sessionKey")                
                navigate("/")
            }).catch(function (error) {
                console.log(error)
            })
            }
            else {                
                setSiteData({message: ["success", "successfully logged out"]})
                localStorage.removeItem("sessionKey")
                navigate("/")
            }
    }

    return (
        <button onClick={handleLogOutClick} className="log-out-btn">log out</button>
    )
}