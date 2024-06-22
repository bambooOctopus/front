import axios from "axios"
import { ipUrl } from "../URLs"

export async function signUpRequest(params) {
    const SIGN_UP_URL = ipUrl + "users/"     
    const response = await axios.post(SIGN_UP_URL, { user: {email: params.email, password: params.password, 
                            password_confirmation: params.password},
                            headers: {
                                "Content-type": "application/json"
                            }})       
    return response      
}

export async function signInRequest(params) {
    const SIGN_IN_URL = ipUrl + "users/sign_in"     
    const response = await axios.post(SIGN_IN_URL, { user: {email: params.email, password: params.password}})       
    return response      
}