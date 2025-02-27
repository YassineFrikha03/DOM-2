let button = document.getElementById("change-color-btn")
function getRandomColor() {
    const chiffreHexa = '0123456789ABCEF'
    let color = "#"

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random()*15)
        color = color + chiffreHexa[randomNum]
    }
    return color
}

button.addEventListener("click", function () {
    const colorBox = document.getElementById('color-box')
    colorBox.style.backgroundColor = getRandomColor()
})