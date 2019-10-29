// grabs div container from index.html 
// function that takes a single entry as an argument and puts it on the dom in div container
const entryToDom = (entry) => {   
    const entriesContainer = document.querySelector(".entryLog")
        entriesContainer.innerHTML += entry

    }

export default entryToDom
