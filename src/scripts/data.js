
import getAllJournalEntriesToDom from "./journal.js"

const url = "http://localhost:8088/entries"

const API = {
    getJournalEntries() {
        return fetch(`${url}`)
            .then(response => response.json())
    },
    saveJournalEntry(journalEntryObject) {
        fetch(`${url}`, { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntryObject)
        })
        .then(getAllJournalEntriesToDom)
    },
    deleteEntry(journalEntryid) {
        return fetch(`http://localhost:8088/entries/${journalEntryid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    getSingleJournalEntry(journalEntryId) {
        return fetch(`http://localhost:8088/entries/${journalEntryId}`)
        .then(response => response.json())
    }, 
    editEntry(journalEntryId, updatedObject) {
        return fetch(`http://localhost:8088/entries/${journalEntryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })

    }
}

export default API