// Tracks when a key is down and up then sets that key
// to true or false on whether its held down
export class Keyboard {
    constructor() {
        document.addEventListener("keydown", (e) => {
            this[e.key] = true
        }, false)
        document.addEventListener("keyup", (e) => {
            this[e.key] = false
        }, false)
    }
}

// Give it a function to run over and over when it can
export class Game {
    constructor(loop) {
        function gameLoop() {
            loop()
            requestAnimationFrame(gameLoop)
        }
        requestAnimationFrame(gameLoop)
    }
}

// Holds all the information about our main player
export class Player {
    x = 0
    y = 0
    element = null

    constructor() {
        this.element = document.getElementById("player")
    }

    update() {
        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"
    }
}