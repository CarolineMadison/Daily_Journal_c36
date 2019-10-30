// Function that turns one entry object into an html string representation of that object
const makeJournalEntryComponent = (date, concept, entry, mood) => {
    return `
        <section class="journalEntryHTML--${entry.id}">
        <div class="journalEntryHTML">
            <h1>${date}</h1><hr />
            <p>CONCEPT: <br><br> ${concept}</p><br>
            <p>ENTRY: <br><br> ${entry}</p><br>
            <p>MOOD: <br>${mood}</p>
            <button id="deleteEntry--${entry.id}">Delete Entry</button>
        </div>
        </section>
    `
}

export default makeJournalEntryComponent