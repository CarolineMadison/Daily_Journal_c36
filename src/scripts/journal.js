// 1. Reference to dom
// 2. Event listener
// 3. Get data
// 4. Html Representation
// 5. Render to dom

import API from "./data.js"
import entryToDom from "./entriesDOM.js"
import makeJournalEntryComponent from "./entryComponent.js"

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
    API.saveJournalEntry(journalEntryObject)
        // THEN the fetch call is made to get all entries, including the new post, 
        .then(API.getJournalEntries())
        // THEN takes those entries...
        .then(entries => {
            // grabs the <article> html element, stores it in a variable,
            const entriesContainer = document.querySelector(".entryLog")
            // clears the <article> container, 
            entriesContainer.innerHTML = ""
            // and for each entry,
            entries.forEach(entry => {
                // invokes createJournalEntryComponent, which takes each entry as an argument, and puts it into a string, which is stored in a variable.
                const journalHTML = makeJournalEntryComponent(entry)
                // The function is invoked that puts each entry on the dom.
                entryToDom(journalHTML)
            })
        }) // END OF createJournalEntry().

        // Final, step of "click event" is to THEN clear the value of the input fields.
        .then(() => {
            date.value = ""
            concept.value = ""
            content.value = ""
            mood.value = ""
        })
})

// ||| *** FUNCTIONALITY FOR RADIO BUTTONS TO FILTER ENTRIES BY MOOD *** |||

// "They are called radio buttons because they look and operate in a similar manner to the push buttons on old-fashioned radios." - MDN Web Docs //


// <input> elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options. Only one radio button in a given group can be selected at the same time.

// The value attribute is a DOMString containing the radio button's value. The value is never shown to the user by their user agent. Instead, it's used to identify which radio button in a group is selected.


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
            // Filters through the entries array and for each entry checks to see if entry.mood matches event.target.value,
            const filteredArray = entries.filter(entry => entry.mood === eventTargetValue)
            // and returns the filtered array. 
            return filteredArray
        })
        console.log(filteredArray)
    })
})
// .then on the array (WHERE I LEFT OFF IN CODE ON RADIO BUTTONS GET ERROR AT filteredArray. Need help.)





// ||| *** FUNCTIONALITY FOR DELETING A SINGLE JOURNAL ENTRY *** ||| 

const entriesContainer = document.querySelector(".entryLog")
entriesContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("deleteEntry--")) {
        // Extract recipe id from the button's id attribute
        const entryToDelete = event.target.id.split("--")[1]
        console.log(entryToDelete)
        API.deleteEntry(entryToDelete)
            .then(API.getJournalEntries())
            // THEN takes those entries...
            .then(entries => {
                // GETTING ERROR API RETURNING EMPTY OBJECT thus GETTING FOR EACH ERROR THAT IT'S NOT A FUNCTION
                console.log(entries)
                // grabs the <article> html element, stores it in a variable,
                const entriesContainer = document.querySelector(".entryLog")
                // clears the <article> container, 
                entriesContainer.innerHTML = ""
                // and for each entry,
                entries.forEach(entry => {
                    // invokes createJournalEntryComponent, which takes each entry as an argument, and puts it into a string, which is stored in a variable.
                    const journalHTML = makeJournalEntryComponent(entry)
                    // The function is invoked that puts each entry on the dom.
                    entryToDom(journalHTML)
                })
            })
            
    }
})









