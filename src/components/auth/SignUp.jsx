import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { signUpRequest } from "../URLRequests"


export const SignUp = () => {

    const [ message, setMessage ] = useState("")

    const navigate = useNavigate()

    const [ emailString, setEmailString ] = useState("") 
    const [ passwordString, setPasswordString ] = useState("") 
    

    const SignUpForm = () => {
        const handleSignUpClick = (event) => {            
            event.preventDefault()
            if (event.target[0].value.length < 5) {
                setMessage("username must have 5 characters")                
                return
            }

            const email = event.target[0].value + "@e.com" 
            const password = event.target[1].value 
            const passwordConfirm = event.target[2].value 
            if (password == passwordConfirm) {
                signUpRequest({email, password}).then(function (response) {
                    navigate("/sign-in")
                    console.log(response)
                    
                }).catch(function (error) {                    
                    setMessage("please try again")
                    console.log(error)
                })      
                
            }
            else {                 
                setEmailString(event.target[0].value)               
                setPasswordString(event.target[1].value)
                setMessage("confirmation doesn't match password, please try again")          
                    
            }
                

            
        }        

        return (
            <form onSubmit={handleSignUpClick} className="auth-form">                
                <input type="text" autoCapitalize="none" placeholder="email" defaultValue={emailString}></input>
                <input type="password" autoCapitalize="none" placeholder="password" defaultValue={passwordString}></input>
                <input type="password" autoCapitalize="none" placeholder="confirm password"></input>
                <button className="submit-btn">submit</button>
                <br />
            </form>
        )
    }

    return (
        <div className="auth-div">        
            <h2>sign up</h2>
            {message.length > 0 ?
                <div className="message-container">{message}</div>
                :
                null
            }
            <SignUpForm />
            <Link to={"/sign-in"}>sign in</Link>
        </div>
    )
}