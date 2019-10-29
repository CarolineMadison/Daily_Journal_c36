// Reference to dom
// Event listener
// Get data
// Html Representation
// Render to dom

import API from "./data.js"
import entryToDom from "./entriesDOM.js"
import makeJournalEntryComponent from "./entryComponent.js"
// fetch call that gets entries array from database.json
API.getJournalEntries().then(parsedEntries => {
    // iterates over entries array and for each entry 
    parsedEntries.forEach(entry => {
        // invokes makeJournalEntryComponent function and stores the returned string in a variable
        const journalHtml = makeJournalEntryComponent(
            entry.date,
            entry.concept,
            entry.content,
            entry.mood
        )
        // invokes function that puts each entry on the dom. Takes innerHtmlObject string as an argument
        entryToDom(journalHtml)
    })
})

// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.

const date = document.querySelector("#journalDate")
const concept = document.querySelector("#concept")
const content = document.querySelector("#content")
const mood = document.querySelector("#mood")

const createJournalEntry = (date, concept, content, mood) => {
    return {
        "date": date.value,
        "concept": concept.value,
        "content": content.value,
        "mood": mood.value
    }
}

const saveEntryButton = document.querySelector("#BTN")
saveEntryButton.addEventListener("click", () => {
    const journalEntryObject = createJournalEntry(date, concept, content, mood)
        API.saveJournalEntry(journalEntryObject)
        .then(API.getJournalEntries)
        .then(entries => {
            const entriesContainer = document.querySelector(".entryLog")
            entriesContainer.innerHTML = ""
            entries.forEach(entry => {
                const journalHTML = createJournalEntryComponent(entry)
                entryToDom(journalHTML)
        })
    })
            .then(() => {
                date.value = ""
                concept.value = ""
                content.value = ""
                mood.value = ""
            })
})


