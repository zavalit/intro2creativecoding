
const canvas = document.getElementById("color_sample")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


const debaunce = (cb) => {
    let timer;
    return () => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(cb, 100)
    }
}

window.addEventListener( 'resize', debaunce(() => {
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    render()

}), false );



const ctx = canvas.getContext('2d')


const render = () => {

    for(let x = 0; x<window.innerWidth; x = x+2){

        for(let y = 0; y<window.innerHeight; y = y+2){

            ctx.fillStyle = `rgb(
                ${Math.floor(255 - 255 * x / window.innerWidth)},
                ${Math.floor(255 - 255 * y / window.innerHeight)},
                255
            )`
            ctx.fillRect(x, y, 2, 2)

        }
    }
    
}

render()


