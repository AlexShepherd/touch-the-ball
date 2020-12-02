let score = 0
const maxTime = 15

function setup() {
    createCanvas(512, 512)
}
function draw() {
    background(120, 2, 120)
    let sec = frameCount / 60
    let x = noise((frameCount+score)/100, 354) * 512
    let y = noise((frameCount+score)/100, 350) * 512
    const hover = dist(x, y, mouseX, mouseY)
    if(hover < 25) {
        fill(255, 255, 0)
        score += 1
    }
    else {
        fill(255, 255, 255)
    }
    if(sec > maxTime) {
        noLoop()
    }
    textSize(35)
    textAlign(CENTER)
    text(score, width/2, 50)
    text(abs(maxTime - sec).toFixed(1), width/2, 470)
    ellipse(x, y, 50, 50)
}
