const tileDisplay = document.querySelector(".tile-container")
const keybord = document.querySelector(".key-container")
const newGame = document.querySelector(".newGame button")
newGame.addEventListener('click', gameStyle)
const credits = document.querySelector(".credits button")
credits.addEventListener('click', credit)
const backButt = document.querySelector(".backButton")
backButt.addEventListener('click', back)

const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']

const onCLick = () =>
{
    console.log("pressed.")
}
const menuDiv = document.querySelector(".start-container")
const creditsDiv = document.querySelector(".credits-container")
const backDiv = document.querySelector(".backButton")
const typeDiv = document.querySelector(".type-container")


function gameStyle()
{
    backDiv.style.display = 'block'
    menuDiv.style.display = 'none'
    typeDiv.style.display = 'block'
    const atmps = document.querySelector(".type-container .atmps button")
    atmps.addEventListener('click', startAttempt)

    const tim = document.querySelector(".type-container .tim button")
    tim.addEventListener('click', startTimed)
}

function credit()
{
    backDiv.style.display = 'block'
    menuDiv.style.display = 'none'
    creditsDiv.style.display = 'block'
}

function back()
{
    creditsDiv.style.display = 'none'
    typeDiv.style.display = 'none'
    menuDiv.style.display = 'block'
    backDiv.style.display = 'none'
}

function startTimed()
{
    typeDiv.style.display = 'none'
    menuDiv.style.display = 'none'
    backDiv.style.display = 'none'

    for(let i = 0; i < 30; i++)
    {
        const buttElement = document.createElement('button')
        buttElement.addEventListener('click', onCLick)
        tileDisplay.append(buttElement) 
    }

    keys.forEach(key => 
        {
            const buttElement = document.createElement('button')
            buttElement.textContent = key
            buttElement.setAttribute('id', key)
            buttElement.addEventListener('click', onCLick)
            keybord.append(buttElement)  
        })  
}

function startAttempt()
{
    typeDiv.style.display = 'none'
    menuDiv.style.display = 'none'
    backDiv.style.display = 'none'

    for(let i = 0; i < 30; i++)
    {
        const buttElement = document.createElement('button')
        buttElement.addEventListener('click', onCLick)
        tileDisplay.append(buttElement) 
    }

    keys.forEach(key => 
        {
            const buttElement = document.createElement('button')
            buttElement.textContent = key
            buttElement.setAttribute('id', key)
            buttElement.addEventListener('click', onCLick)
            keybord.append(buttElement)  
        })  
}