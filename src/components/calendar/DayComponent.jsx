import "./day-component.css"
import { Footer } from "../dash/FooterComponent"
import { useSpring, useTransition, animated } from '@react-spring/web'
import { useState } from "react"

import { useEffect } from "react"

export const DayComponent = ({currentContent}) => {
    const [ isMounted, setIsMounted ] = useState(false)
    // const [ isVisible, setIsVisible ] = useState(true)
    const transitions = useTransition(isMounted, {
        from: {x: -100, y: 800},
        enter: {x: 0, y: 0},
        leave: {x: 100, y: -120},

    })

    // const [ props, api ] = useSpring(() => ({
    //     from: {y: 120},
    //     to: {y: 100}
    // }))
    

    // return (
        
           
    //         //  <div className="day-component">
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <p>day component</p>
    //         //     <Footer currentContent={"DayComponent"}/>
    //         //  </div>
            
    //         <div className="day-component">                 
    //             {transition((style, item) => {                    
    //                 <animated.div style={style} className="my-component">{item}</animated.div> 
    //             })}

    //         </div>

    useEffect(() => {
        currentContent == "DayComponent" ? setIsMounted(true) : setIsMounted(false)
        
        return () => console.log("this isn't after the components lifecycle")

    })

    return transitions((style, item) => (
        item ? <animated.div style={style} className="my-component">
            <p>hellow</p>
        </animated.div> : ''
    ))
}
        
    // )
// }