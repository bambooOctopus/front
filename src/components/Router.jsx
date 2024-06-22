import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SignIn } from "./auth/SignIn.jsx";
import { SignUp } from "./auth/SignUp.jsx";
import { Dashboard } from "./dash/Dashboard.jsx";

const Router = ({siteData}) => {    
    return (           
            <Routes>   
              <Route path='/' element={siteData == undefined ? <Navigate replace to='/sign-in' /> : <Dashboard />} />                      
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />                
                <Route path="/dashboard" element={<Dashboard />} />               
            </Routes>     
    );
  };
export { Router }