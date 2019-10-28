const entriesContainer = document.querySelector(".entryLog")
API.getJournalEntries().then(parsedEntries => {
    parsedEntries.forEach(entry => {
        entriesContainer.innerHTML += makeJournalEntryComponent(
            entry.date,
            entry.concept,
            entry.entry,
            entry.mood
        )

    })
})
