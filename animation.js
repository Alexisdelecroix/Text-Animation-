const containerEl = document.querySelector(".container")


const careers = [ "Developer web", "Professeur", "Joueur de Lol", "Vivant"];

let careerIndex = 0;

let characterIndex = 0 ;

updateText()

function updateText() {
    characterIndex++;

containerEl.innerHTML = `
<h1>Je suis un bon  ${careers[careerIndex].slice(0,characterIndex)}</h1>`
;

if(characterIndex === careers
    [careerIndex].length) {
        careerIndex++
        characterIndex = 0
    }
    
setTimeout(updateText, 300) 
}