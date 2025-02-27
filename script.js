

let button =document.getElementById('button')
function getRandomColor() {
    const chiffreHexa = '0123456789ABCDEF'
    let color = '#'


    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random()*15)
        console.log(randomNum)
        color = color + chiffreHexa[randomNum]
    }
    return color
}


button.addEventListener ("click", function () {
 const colorBox = document.getElementById('colorBox')
 colorBox.style.backgroundColor = getRandomColor()
})