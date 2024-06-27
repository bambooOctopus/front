import { DateNav } from "./DateNavComponent"
import { HabitBar } from "./HabitBarComponent"

export const ContentContainer = () => {
    return (
        <div className="content-container">
            <DateNav />
            <HabitBar />
            <div className="content"></div>
        </div>
    )
}