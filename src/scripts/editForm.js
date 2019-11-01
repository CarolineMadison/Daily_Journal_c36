const editForm = (entry) => {
    return `
        <form>
        <input type="hidden" id="hiddenId" value="" />
        <fieldset class="fieldset">
            <label for="journalDate">Date of Entry</label>
            <input class="date" type="date" name="journalDate" id="journalDate">
        </fieldset>

        <fieldset class="fieldset">
            <label for="journalDate">Concept</label>
            <textarea name="message" row="1" column="1" id="concept"></textarea>
        </fieldset>

        <fieldset class="fieldset">
            <label for="journalDate">Journal Entry</label>
            <textarea name="message" row="1" column="2" id="content"></textarea>
        </fieldset>

        <fieldset class="fieldset">
            <label for="journalDate">Mood for the Day</label>
            <select id="mood">
                <option value="Zen">Zen</option>
                <option value="Hopeful">Hopeful</option>
                <option value="Frustrated">Frustrated</option>
                <option value="Tanked">Tanked</option>
            </select>
        </fieldset>

        <fieldset class="fieldset">
            <button id="BTN">Record Journal Entry</button>
        </fieldset>
    </form>
    `
}

export default editForm