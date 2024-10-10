import { DateTime } from "luxon"

export const formatMonthString = (date) => {
    // make month string for MonthNav
    const formattedMonthString = date.toLocaleString({month: 'long', year: 'numeric'})  
    return formattedMonthString
}

export const formatDayString = (date) => {    
    // return long date string for DayNav        
    const formattedDayString = date.toLocaleString({month: 'long', day: 'numeric'})
    return formattedDayString
}

export const formatDayStringForComponents = (date) => {
    // return shorter date for components
    const formattedDayString = date.toLocaleString({month: 'short', day: 'numeric'})
    return formattedDayString
    
}

export const formatRubyDate = (date) => {
    // make a luxon DateTime obj from a rails DateTime obj
    let dt = DateTime.fromISO(date)
    return dt
    
}

export const toRubyDate = (dateTime) => {
    let formattedDate = dateTime.toISO()
    return formattedDate
}