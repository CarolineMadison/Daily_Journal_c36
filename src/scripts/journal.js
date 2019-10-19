// This function returns string for one journal entry.
const makeJournalEntryComponent = (date, concept, entry, mood) => {
    return `
        <div class="journalEntryHTML">
            <h1>${date}</h1><hr />
            <p>CONCEPT: <br><br> ${concept}</p><br>
            <p>ENTRY: <br><br> ${entry}</p><br>
            <p>MOOD: <br>${mood}</p>
        </div>
    `
}

fetch("http://localhost:8088/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            // takes each journal entry from the database, invokes the makeJournalEntryComponenet function and renders the entry to the dom.
            const entriesContainer = document.querySelector(".entryLog")
            entriesContainer.innerHTML += makeJournalEntryComponent(
                entry.date,
                entry.concept,
                entry.entry,
                entry.mood
            )
        })
    })
    
