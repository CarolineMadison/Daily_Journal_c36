// Function that turns one entry object into an html string representation of that object
const makeJournalEntryComponent = (entry) => {
    return `
        <section class="journalEntryHTML--${entry.id}">
        <div class="journalEntryHTML">
            <h1>${entry.date}</h1><hr />
            <p><u>CONCEPT</u>: <br><br> ${entry.concept}</p><br>
            <p><u>CONTENT</u>: <br><br> ${entry.content}</p><br>
            <p><u>MOOD</u>: <br><br>${entry.mood}</p><hr /><br>
            <button id="deleteEntry--${entry.id}">Delete Entry</button>
        </div>
        </section>
    `
}

export default makeJournalEntryComponent