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