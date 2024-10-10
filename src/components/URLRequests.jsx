import axios from "axios"
import { ipUrl } from "../URLs"
import { toRubyDate } from "./helpers/calendar/dateFormats"

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

export async function createHabitRequest(params) {    
    const CREATE_HABIT_URL = ipUrl + "habit/create"    
    console.log(params)    
    const response = await axios.post(CREATE_HABIT_URL, { user_id: params.userId, title: params.title, day_for: params.dayInUse, icon: params.icon })
    
    return response
}

export async function getHabitRequest(params) {
    const GET_HABIT_REQUEST = ipUrl + "habit/show"
    const response = await axios.get(GET_HABIT_REQUEST, { user_id: params.userId, habit_id: params.habitId})
    return response
}

export async function getMonthItemsRequest(params) {
    
    const GET_MONTH_ITEMS_URL = ipUrl + "month_items"
    let formattedMonth = toRubyDate(params.monthString)
    const response = await axios.get(GET_MONTH_ITEMS_URL, { params: {user_id: params.userId, month: formattedMonth}})
    return response
}

export async function getDayItemsRequest(params) {
    const GET_DAY_ITEMS_URL = ipUrl + "day_items"
    let formattedDay = toRubyDate(params.dayInUse)    
    const response = await axios.get(GET_DAY_ITEMS_URL, { params: {user_id: params.userId, day: formattedDay}})
    return response
}

export async function deleteHabitRequest(params) {
    const DESTROY_HABIT_REQUEST_URL = ipUrl + "habit/delete"
    const response = await axios.delete(DESTROY_HABIT_REQUEST_URL, { params: {user_id: params.userId, habit_id: params.habitId}})
    return response
}

export async function createListRequest(params) {
    // get 'list/create', to: 'lists#create'
    const CREATE_LIST_REQUEST_URL = ipUrl + "list/create"
    const response = await axios.get(CREATE_LIST_REQUEST_URL, { params: {user_id: params.userId, date_for: params.dateFor, title: params.title}})
    return response
}



export async function createTodoListRequest(params) {
    // get 'todo/create', to: 'lists#todo_create'
    const CREATE_TODO_REQUEST_URL = ipUrl + "todo/create"
    const response = await axios.get(CREATE_TODO_REQUEST_URL, { params: {user_id: params.userId, date_for: params.dateFor, title: "Todo"}})
    return response
}



export async function deleteListRequest(params) {
    const DESTROY_LIST_REQUEST_URL = ipUrl + "list/delete"
    const response = await axios.delete(DESTROY_LIST_REQUEST_URL, { params: {user_id: params.userId, list_id: params.listId}})
    return response
}

export async function updateListTitleRequest(params) {
    const UPDATE_LIST_TITLE_REQUEST_URL = ipUrl + "list/update_title"
    const response = await axios.patch(UPDATE_LIST_TITLE_REQUEST_URL, {user_id: params.userId, list_id: params.listId, updated_title: params.updatedTitle})
    return response
}


export async function createListItemRequest(params) {
    // post 'list_items/create', to: 'list_items#create'
    const CREATE_LIST_ITEM_REQUEST_URL = ipUrl + "list_items/create"
    const response = await axios.post(CREATE_LIST_ITEM_REQUEST_URL, {user_id: params.userId, list_id: params.listId, list_item_title: params.listItemTitle})
    return response
}

export async function updateListItemRequest(params) {
    
    // patch 'list_item/update_status, to: 'list_items#update_status
    const UPDATE_LIST_ITEM_STATUS_REQUEST_URL = ipUrl + "list_item/update_status"
    const response = await axios.patch(UPDATE_LIST_ITEM_STATUS_REQUEST_URL, { list_item_id: params.listItem.id})
    return response
}

export async function getListItemsRequest(params) {
    const GET_LIST_ITEMS_REQUEST_URL = ipUrl + "list_items"
    const response = await axios.get(GET_LIST_ITEMS_REQUEST_URL, { params: {list_id: params.listId}})
    return response
}

export async function destroyListItemsRequest(params) {
    const DESTROY_LIST_ITEM_REQUEST_URL = ipUrl + "list_item/delete"
    const response = await axios.delete(DESTROY_LIST_ITEM_REQUEST_URL, { params: { list_item_id: params.listItemId}})
    return response
}