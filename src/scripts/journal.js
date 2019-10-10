/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalEntries = []

const journalEntryDataStructureExample = {
    id: "",
    date: "",
    concept: "",
    entry: "",
    mood: ""
}

const journalEntryOne = {
    id: 1,
    date: "September 30, 2019",
    concept: "First Day Back at NSS",
    entry: "Today I started Front-End over again with cohort 36. It was a little bit of a shock at first. Going through the initial set up and the same talks. Introducing everyone. Learning new faces. At first, I was disheartened, thinking I should've stayed with 34. That's a great cohort and I got used to my teammates! At the same time, moving to a new cohort simulates what it will be like to spend time with a team and then transition out and into a new one. I'm looking forward to the next three months to really solidify concepts from Front-End, but then I'm looking forward to doing Back-End. Python/Django is supposed to be a lot of fun. I'm ready to get back into React. This time I'll knock my capstone out of the park. NSS is a great adventure. I'm so grateful for this school."

}

const journalEntryTwo = {
    id: 2,
    date: "October 8, 2019",
    concept: "Group Project, Celebrity Tribute",
    entry: "I finished my page of our application, which was News and Events. Our group worked well together to coordinate on colors and the styling of our Nav Bar and Footer. I'm pleased with the outcome of my page. I learned how to import icons as images wrapped in anchor tags that hyperlink to other websites. I felt like I grew in my CSS abilities on this project, as well as learning to be the person who has answers instead of feeling like I'm behind always having to ask someone else for answers. It will be interesting to see how repeating Front-End progresses."
}
const journalEntryThree = {
    id: 3,
    date: "October 10, 2019",
    concept: "JavaScript Objects",
    entry: "I needed some extra practice with JavaScript Objects and Arrays and pulling data out of them to output the correct info in the console.",
    mood: "happy"
}

journalEntries.push(journalEntryOne);
journalEntries.push(journalEntryTwo);
journalEntries.push(journalEntryThree);

console.log(journalEntries);