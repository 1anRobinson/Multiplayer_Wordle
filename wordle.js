const tileDisplay = document.querySelector(".tile-container")
const keybord = document.querySelector(".key-container")

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
              'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
              'U', 'V', 'W', 'X', 'Y', 'Z', 'ENTER', '⌫']

keys.forEach(key => 
    {
        const buttElement = document.createElement('button')
        buttElement.textContent = key
        keybord.append(buttElement)
    })