// 1. Reference to dom
// 2. Event listener
// 3. Get data
// 4. Html Representation
// 5. Render to dom

import API from "./data.js"
import entryToDom from "./entriesDOM.js"
import makeJournalEntryComponent from "./entryComponent.js"
import editForm from "./editForm.js"

// ||| *** FUNCTIONALITY TO GET ENTRIES FROM DATABASE ON THE DOM *** |||

// Fetch call that gets the data for all entries,
API.getJournalEntries().then(parsedEntries => {
    // iterates over the array in the database, and for each entry, 
    parsedEntries.forEach(entry => {
        // invokes makeJournalEntryComponent, taking each key and its value as an argument, and stores the returned string in a variable.
        const journalHtml = makeJournalEntryComponent(entry)
        // Finally, the function is invoked that takes the above variable as an argument and puts each entry on the dom.
        entryToDom(journalHtml)
    })
})

// ||| *** FUNCTIONALITY TO POST A NEW JOURNAL ENTRY *** |||

// Grabs the id's on the inputs in the <fieldset> html elements and stores them each in a variable.
const date = document.querySelector("#journalDate")
const concept = document.querySelector("#concept")
const content = document.querySelector("#content")
const mood = document.querySelector("#mood")

// Factory function that creates a new journal entry by taking each input above as an argument, and returns the value of those inputs when invoked.
const createJournalEntry = (date, concept, content, mood) => {
    return {
        "date": date.value,
        "concept": concept.value,
        "content": content.value,
        "mood": mood.value
    }
}

// Stores the "Record Journal Entry" button in a variable.
const saveEntryButton = document.querySelector("#BTN")
// Attaches an event listener to that button and when clicked,...
saveEntryButton.addEventListener("click", () => {
    // invokes createJournalEntry and stores the returned object and key values in a variable.
    const journalEntryObject = createJournalEntry(date, concept, content, mood)
    // Fetch call to post new journal entry to the database, taking the above
    const hiddenId = document.querySelector("#hiddenId").value
    console.log(hiddenId)
    if (hiddenId === "") {
        API.saveJournalEntry(journalEntryObject)
        // THEN the fetch call is made to get all entries, including the new post, 
    } else {
        API.editEntry(hiddenId, journalEntryObject)// edit functionality
        console.log(journalEntryObject)
    }

    // entriesContainer.innerHTML = ""
    // API.getJournalEntries()
    //     .then(entries => {
    //         console.log(entries)
    //         // clears the <article> container, 
    //         // and for each entry,
    //         entries.forEach(entry => {
    //             // invokes createJournalEntryComponent, which takes each entry as an argument, and puts it into a string, which is stored in a variable.
    //             const journalHTML = makeJournalEntryComponent(entry)
    //             // The function is invoked that puts each entry on the dom.
    //             entryToDom(journalHTML)
    //         })
    //     }) // END OF createJournalEntry().

        // Final, step of "click event" is to THEN clear the value of the input fields.
        // .then(() => {
        //     date.value = ""
        //     concept.value = ""
        //     content.value = ""
        //     mood.value = ""
        // })
})


// ||| *** FUNCTIONALITY FOR RADIO BUTTONS TO FILTER ENTRIES BY MOOD *** |||
// "They are called radio buttons because they look and operate in a similar manner to the push buttons on old-fashioned radios." - MDN Web Docs //

// Grabs the shared name="mood" on each of the inputs and puts them into an array, or group, which is stored in a variable.
const radioButtonGroup = document.getElementsByName("moods")
// For each button in the array, 
radioButtonGroup.forEach(button => {
    // when a button is clicked, 
    button.addEventListener("click", event => {
        // the value of that button is read and stored into a variable.
        const eventTargetValue = event.target.value
        // Fetch call to get all entries.
        API.getJournalEntries().then(entries => {
            console.log(entries)
            // Filters through the entries array and for each entry checks to see if entry.mood matches event.target.value, stores it in a variable,
            const filteredArray = entries.filter(entry => entry.mood === eventTargetValue)
            // and for each entry in the array, invokes makeJournalEntryComponent,
            for (const entry of filteredArray) {
                const journalHtml = makeJournalEntryComponent(entry)
                // clears the container, 
                entriesContainer.innerHTML = ""
                // and invokes function that puts entries on the dom.
                entryToDom(journalHtml)
            }
        })
    })
})

// ||| *** FUNCTIONALITY FOR DELETING AND EDITING A SINGLE JOURNAL ENTRY *** ||| 

const entriesContainer = document.querySelector(".entryLog")
entriesContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("deleteEntry--")) {
        // Extract id from the button's id attribute
        const entryToDelete = event.target.id.split("--")[1]
        // Fetch to delete entry which takes entry to delete as argument,
        API.deleteEntry(entryToDelete)
        // THEN gets all journal entries,
        // COMMENTED OUT THIS CODE AND MOVED IT DOWN TO TEST.
    } else {
        if (event.target.id.startsWith("editEntry--")) {
            // If so, split the id from the button's id attribute,
            const entryToEdit = event.target.id.split("--")[1]
            // and fetch the single entry of that id from the database.
            API.getSingleJournalEntry(entryToEdit)
                // THEN take that entry, 
                .then(entry => {
                    // invoke editForm,
                    editForm(entry)

                    // grab references to the input fields in the form, 
                    // and assign their values to the entry being edited.
                    document.querySelector("#hiddenId").value = entry.id,
                        document.querySelector("#journalDate").value = entry.date,
                        document.querySelector("#concept").value = entry.date,
                        document.querySelector("#content").value = entry.content,
                        document.querySelector("#mood").value = entry.mood
                })
        }
    }
})

// API.getJournalEntries().then(parsedEntries => {
//     // iterates over the array in the database, and for each entry, 
//     entriesContainer.innerHTML = ""
//     parsedEntries.forEach(entry => {
//         // invokes makeJournalEntryComponent, taking each entry as an argument
//         const journalHtml = makeJournalEntryComponent(entry)
//         // and clears the container.
//         // Finally, the function is invoked that puts each entry on the dom.
//         entryToDom(journalHtml)
//     })
// })


// ||| *** FUNCTIONALITY FOR EDITING A SINGLE JOURNAL ENTRY *** ||| 

// 1. Create Edit Button on Form +++
// 2. Put event listener on edit button +++
// 3. Get API Object of thing to Edit +++
// 4. Show form for editing +++
// 5. Populate form +++
// 6. Save Button (click handler)
// 7. Save Changes
// 8. Get thing
// 9. Show edited thing on Dom











