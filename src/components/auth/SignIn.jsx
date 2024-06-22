import { Link } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


import { MainContext } from "../Provider.jsx"
import { signInRequest } from "../URLRequests.jsx"


export const SignIn = () => {

    const [ siteData, setSiteData ] = useContext(MainContext)
    const [ message, setMessage ] = useState("")
    const navigate = useNavigate()

    const SignInForm = () => {

        const handleSignInClick = (event) => {
            event.preventDefault()          

            const email = event.target[0].value + "@e.com"
            // const password = "password"           
            const password = event.target[1].value

            signInRequest({email, password}).then(function (success) { 
                setSiteData({user: success.data.user})
                localStorage.setItem("sessionKey", success.headers.authorization)
                navigate("/dashboard")
            }).catch(function (error) {
                if (error.message == "Request failed with status code 422") {                      
                    setMessage("username or password incorrect")
                }                
            })                                             

        }

        return (
            <form onSubmit={handleSignInClick} className="auth-form">                
                <input type="text" autoCapitalize="none" placeholder="email"></input>
                <input type="password" autoCapitalize="none" placeholder="password"></input>
                <button className="submit-btn">submit</button>
               
                <br />                
                
            </form>
        )

    }

    window.document.addEventListener("visibilitychange", (event) => {
        console.log(event)
    })
    
    return (
        <div className="auth-div">
            <h2>sign in</h2>
            {message.length > 0 ?
                <div className="message-container">
                    <p>{message}</p>
                </div>
                :
                null
            }
            <SignInForm /> 
            <Link to={"/sign-up"}>sign up</Link>           
        </div>        
    )
}