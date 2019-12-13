// Function that turns one entry object into an html string representation of that object
export const createJournalEntryHtml = ({id, date, concept, content, mood, id}) => 
  `
    <section class="journalEntryHTML--${id}">
      <div class="TML">
        <h1>${date}</h1><hr />
        <p><u>CONCEPT</u>: <br><br> ${concept}</p><br>
        <p><u>CONTENT</u>: <br><br> ${content}</p><br>
        <p><u>MOOD</u>: <br><br>${mood}</p><hr /><br>
        <button type="button" id="deleteEntry--${id}">Delete Entry</button>
        <button type="button" id="editEntry--${id}">Edit Entry</button>
      </div>
    </section>
  `
