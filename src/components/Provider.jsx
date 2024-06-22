import { useState, createContext } from "react";

export const MainContext = createContext([])

export const Provider = (props) => {
    const [ siteData, setSiteData ] = useState({user: props.siteData[0], sessionKey: props.siteData[1]})  
    return (
        <MainContext.Provider value={[siteData, setSiteData]}>
            {props.children}
        </MainContext.Provider>
    )
}