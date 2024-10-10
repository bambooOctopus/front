export const enlargeDay = (target, stateChange, pendingContent) => {           
    target.classList.add("active")      

    const changeContent = () => {        
        stateChange(pendingContent)
    }  
 
   setTimeout(() => {changeContent()}, 150)
}