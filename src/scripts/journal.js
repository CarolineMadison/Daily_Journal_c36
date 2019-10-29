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
        console.log(parsedEntries)
        // iterates over entries array and for each entry 
        parsedEntries.forEach(entry => {
            // invokes makeJournalEntryComponent function and stores the returned string in a variable
            const innerHtmlObject = makeJournalEntryComponent(
                entry.date,
                entry.concept,
                entry.entry,
                entry.mood
            )
            console.log(makeJournalEntryComponent)
            // invokes function that puts each entry on the dom. Takes innerHtmlObject string as an argument
            entryToDom(innerHtmlObject)

        })
    })


