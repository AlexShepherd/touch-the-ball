let score = 0
const maxTime = 15


function setup() {
    createCanvas(windowWidth, windowHeight)
}
function draw() {
    background(120, 2, 120)
    let sec = frameCount / 60
    let x = noise((frameCount+score)/100, 354) * width
    let y = noise((frameCount+score)/100, 350) * height
    const hover = dist(x, y, mouseX, mouseY)

    function noScroll() {
        window.scrollTo(0, 0);
      }
    window.addEventListener('scroll', noScroll);

    if(hover < 25) {
        fill(255, 255, 0)
        score += 1
    }
    else {
        fill(255, 255, 255)
    }
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
