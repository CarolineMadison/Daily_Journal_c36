// Function that turns one entry object into an html string representation of that object
const makeJournalEntryComponent = (date, concept, entry, mood) => {
    return `
        <section class="journalEntryHTML--${entry.id}">
        <div class="journalEntryHTML">
            <h1>${date}</h1><hr />
            <p><u>CONCEPT</u>: <br><br> ${concept}</p><br>
            <p><u>ENTRY</u>: <br><br> ${entry}</p><br>
            <p><u>MOOD</u>: <br><br>${mood}</p><hr /><br>
            <button id="deleteEntry--${entry.id}">Delete Entry</button>
        </div>
        </section>
    `
}

export default makeJournalEntryComponent