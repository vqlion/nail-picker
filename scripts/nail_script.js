const nbColor = document.getElementById("nb_color")
let colorPickers = document.getElementsByClassName("color_pick")
const submitButton = document.getElementById("sub_button")
const colors = document.getElementsByClassName("color")
const cbColors = document.getElementById("all_colors")
const allColorsInput = document.getElementById("all_colors")
let allColors
updateColorPickers(0)

nbColor.addEventListener('change', updateColorPickers)
submitButton.addEventListener('click', function() {
    if(allColors) updateNailAllColors(0)
    else updateNailColors(0)
})
allColorsInput.addEventListener('change', updateMod)

function updateColorPickers(e) {
    let nb = parseFloat(nbColor.value)
    for (let i = 0; i < colorPickers.length; i++) {
        colorPickers[i].style.display = "none"
        if (i < nb) {
            colorPickers[i].style.display = "inline"
        }
    }
}

function updateMod(e) {
    allColors = allColorsInput.checked ? true : false
}

function updateNailColors(e) {
    for (let i = 0; i < colors.length; i++) {
        let rand = getRandomInt(parseFloat(nbColor.value))
        setTimeout(() => {
            colors[i].style.background = colorPickers[rand].value
        }, (i + 1) * 50)
    }
}

function updateNailAllColors(e) {
    let colorOrder = []
    let possibleColors = []
    let nb = parseFloat(nbColor.value)
    for(let i = 0; i < nb; i++) {
        possibleColors[i] = colorPickers[i].value
    }
    shuffleArray(possibleColors)
    let i = 0
    while(i < colors.length) {
        let j = 0
        while(j < nb && i < colors.length) {
            colorOrder[i] = possibleColors[j]
            j++
            i++
        }
    }
    shuffleArray(colorOrder)
    for(let k = 0; k < colorOrder.length; k++) {
        setTimeout(() => {
            colors[k].style.background = colorOrder[k]

        }, (k + 1) * 5)
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var rnd = getRandomInt(i + 1);
        var temp = array[i];
        array[i] = array[rnd];
        array[rnd] = temp;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
