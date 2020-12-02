let score = 0
var maxTime = 15
let button

function reset() {
    frameCount = 0
    maxTime = 15
}

//todo
// function gameOverLogic() {
//     if(sec > maxTime) {
//     gameOver = true
//     textSize(150)
//     textAlign(CENTER)
//     text('GAME OVER', width/2, height/2)
//     }
// }

function noScroll() {
    window.scrollTo(0, 0);
  }

function setup() {
    createCanvas(windowWidth, windowHeight)
    button = createButton('reset')
    button.position(width/50, height/30)
}
function draw() {
    background(120, 2, 120)
    let sec = frameCount / 60
    //if (!gameOver) {
        let x = noise((frameCount+score)/100, 354) * width
        let y = noise((frameCount+score)/100, 350) * height
        const hover = dist(x, y, mouseX, mouseY)
        button.mousePressed(reset)

        window.addEventListener('scroll', noScroll);

        if(hover < 25) {
            fill(255, 255, 0)
            score += 1
        }
        else {
            fill(255, 255, 255)
        }
        //gameOverLogic()
        if(sec > maxTime) {
            noLoop()
            textSize(150)
            textAlign(CENTER)
            text('GAME OVER', width/2, height/2)
        }
        textSize(35)
        textAlign(CENTER)
        text(score, width/2, 50)
        text(abs(maxTime - sec).toFixed(1), width/2, height-50)
        ellipse(x, y, 50, 50)
    }
