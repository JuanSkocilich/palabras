import { animalsArray } from "../../wordList.js";

var height = 6; //number of guesses

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
// var word = "SQUID";


var guessList = []

guessList = guessList.concat(animalsArray);

var word = animalsArray[Math.floor(Math.random() * animalsArray.length)].toUpperCase();
console.log(word);

var width = word.length; //length of the word
//var width = 6; //length of the word

/* window.onload = function () {
    intialize();
} */

let jugar = document.querySelector('#jugar');

jugar.addEventListener('click', function () {
    jugar.style.display = 'none'
    intialize();
})

let reset = document.querySelector('#reset');

/* let time = document.querySelector('#time');
var times = 80 */


function resetPlay() {
    reset.style.display = 'block'
    reset.style.margin = '10px auto'

    reset.addEventListener('click', function () {
        location.reload();
    })
}

/* function inte() {


    const intervalID = setInterval(() => {
        time.innerHTML = ''
        if (times != 0) {
            times--;
        } else {
            clearInterval(intervalID)
            resetPlay()

        }
        time.innerHTML += `${times}`
        if (times == 0) {
            times = 0;
            console.log('perdio')
            gameOver = true;
        }
    }, 1000)
} */
console.log(width)
function intialize() {
    /* inte()
    time.style.display = 'block' */
    let board = document.querySelector('.board')

    switch (width) {
        case 3:
            board.classList.toggle('w3')
            break;
        case 4:
            board.classList.toggle('w4')
            break;
        case 5:
            board.classList.toggle('w5')
            break;
        case 6:
            board.classList.toggle('w6')
            break;
        case 7:
            board.classList.toggle('w7')
            break;
        case 8:
            board.classList.toggle('w8')
            break;
    }
    

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>

            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.querySelector(".board").appendChild(tile);
        }
    }

    // Create the key board
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.querySelector(".keyboard-row");
        //keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            }

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }


    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey(e) {
    e = { "code": this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return;

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -= 1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        /* times = 0; */
        document.getElementById("answer").innerText = `La palabra correcta era "${word}"`;
        resetPlay()
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    //string up the guesses into the word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
    console.log(guess);


    if (!guessList.includes(guess)) {
        document.getElementById("answer").innerText = "La palabra no esta en la lista";
        return;
    }

    //start processing guess
    let correct = 0;

    let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
            letterCount[letter] += 1;
        }
        else {
            letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    //first iteration, check all the correct ones first
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1; //deduct the letter count
        }

        if (correct == width) {
            gameOver = true;
            /* times = 0
            
            resetPlay() */
            resetPlay()
            document.getElementById("answer").innerText = "Felicidades!";
            // Pass in the id of an element
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti({
                /* emojis: [""] */
            })
        }
    }

    console.log(letterCount);
    //go again and mark which ones are present but in wrong position
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // skip the letter if it has been marked correct
        if (!currTile.classList.contains("correct")) {
            //Is it in the word?         //make sure we don't double count
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");

                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } // Not in the word or (was in word but letters all used up to avoid overcount)
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent")
            }
        }
    }

    row += 1; //start new row
    col = 0; //start at 0 for new row
}