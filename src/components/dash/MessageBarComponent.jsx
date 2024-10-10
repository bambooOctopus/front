import { useState } from "react"

export const MessageBar = () => {
    // this messages state should probably be in the dashboard
    const [ messages, setMessages ] = useState("")
    return (
        <>
            {messages.length > 0 ? 
                <div className="message-bar">            
                    <p>messages</p>
                </div>
            :
            null
            }
            
        </>
    )
}