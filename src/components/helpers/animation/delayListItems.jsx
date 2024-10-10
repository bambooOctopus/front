export const delayListItems = () => {

    const listItems = document.getElementById("list-items")
    let items = Array.from(listItems.children)        

    function doSetTimeout(item, index) {
        setTimeout(() => {
            if (item) {
                item.classList.remove("hidden")
                item.classList.add("active")
            }
            
        }, 80 * index)
    }

    items.forEach((item, index) => {
        doSetTimeout(item, index)
    })    

}

export const delayListItem = () => {    
    const listItems = document.getElementById("list-items")
    let lastItem = Array.from(listItems.children)
    console.log(lastItem)
    // element.classList.remove("hidden")
    // element.classList.add("active")

}