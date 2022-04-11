// Add the CSS to the page
import "./style.css"

// Add helpers to make building the game easier
import { Keyboard, Player, Game } from "./engine"

// Create keyboard interactions and our player entity
const keyboard = new Keyboard()
const player = new Player()

// Create a new game that loops over and over
new Game(function () {

    // If moving left/right
    if (keyboard.a) {
        player.x -= 1
    } else if (keyboard.d) {
        player.x += 1
    }

    // If moving up/down
    if (keyboard.w) {
        player.y -= 1
    } else if (keyboard.s) {
        player.y += 1
    }

    // Every loop update the player position
    player.update()
})
