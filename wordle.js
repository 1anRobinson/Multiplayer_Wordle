const tileDisplay = document.querySelector(".tile-container")
const keybord = document.querySelector(".key-container")

const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']

const onCLick = () =>
{
    console.log("pressed.")
}

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
