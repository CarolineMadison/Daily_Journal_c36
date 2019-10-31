// Function that turns one entry object into an html string representation of that object
const makeJournalEntryComponent = (journalEntry) => {
    return `
        <section class="journalEntryHTML--${journalEntry.id}">
        <div class="journalEntryHTML">
            <h1>${journalEntry.date}</h1><hr />
            <p><u>CONCEPT</u>: <br><br> ${journalEntry.concept}</p><br>
            <p><u>CONTENT</u>: <br><br> ${journalEntry.content}</p><br>
            <p><u>MOOD</u>: <br><br>${journalEntry.mood}</p><hr /><br>
            <button type="button" id="deleteEntry--${journalEntry.id}">Delete Entry</button>
        </div>
        </section>
    `
}

export default makeJournalEntryComponent