// function that takes a single entry as an argument
const entryToDom = (entry) => {  
    // grabs the <article> html element, stores it in a variable 
    const entriesContainer = document.querySelector(".entryLog")
        // and puts it on the dom.
        entriesContainer.innerHTML += entry

    }

export default entryToDom
