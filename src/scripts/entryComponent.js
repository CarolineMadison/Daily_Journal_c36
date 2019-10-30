// Function that turns one entry object into an html string representation of that object
const makeJournalEntryComponent = (date, concept, content, mood, entryId) => {
    return `
        <section class="journalEntryHTML--${entryId}">
        <div class="journalEntryHTML">
            <h1>${date}</h1><hr />
            <p><u>CONCEPT</u>: <br><br> ${concept}</p><br>
            <p><u>CONTENT</u>: <br><br> ${content}</p><br>
            <p><u>MOOD</u>: <br><br>${mood}</p><hr /><br>
            <button id="deleteEntry--${entryId}">Delete Entry</button>
        </div>
        </section>
    `
}

export default makeJournalEntryComponent