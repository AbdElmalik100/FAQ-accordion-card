let allParagraphs = document.querySelectorAll("p")
let allQuestions = document.querySelectorAll("h3")
let arrow = document.querySelector("h3 img")
let questionContainer = document.querySelectorAll(".info")

console.log(arrow)
// arrow.style.transform = "rotate(180deg)"

allQuestions.forEach(quest => {
    quest.onclick = (e) => {
        
        document.querySelector(`.${e.target.dataset.quest}`).classList.toggle("open")
        e.target.childNodes[1].classList.toggle("rot")
        e.target.parentElement.classList.toggle("height")
        console.log(e.target.parentElement)
    }
})