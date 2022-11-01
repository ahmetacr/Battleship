import { Game } from "../src/modules/game.js";
import { displayMainPage } from "../src/modules/DOM.js";

const startBtn = document.querySelector('#startBtn')
startBtn.addEventListener('click',displayMainPage)

const myGame = Game()
myGame.addListeners()
