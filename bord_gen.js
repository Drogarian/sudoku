
// PROVIDES A GLOBAL ARRAY TO STORE THE ORIGINAL BOARD
var originalBoard = [];
var userBoard = [];
var activeCellForBoardAdd;

let htmlBoard = new Array(9).fill("").map(() => new Array(9).fill(""));

function makehtmlBoardAnArray() {

    htmlBoard[0][0] = document.getElementById("grid-1-cell-1");
    htmlBoard[0][1] = document.getElementById("grid-1-cell-2");
    htmlBoard[0][2] = document.getElementById("grid-1-cell-3");
    htmlBoard[0][3] = document.getElementById("grid-2-cell-1");
    htmlBoard[0][4] = document.getElementById("grid-2-cell-2");
    htmlBoard[0][5] = document.getElementById("grid-2-cell-3");
    htmlBoard[0][6] = document.getElementById("grid-3-cell-1");
    htmlBoard[0][7] = document.getElementById("grid-3-cell-2");
    htmlBoard[0][8] = document.getElementById("grid-3-cell-3");

    htmlBoard[1][0] = document.getElementById("grid-1-cell-4");
    htmlBoard[1][1] = document.getElementById("grid-1-cell-5");
    htmlBoard[1][2] = document.getElementById("grid-1-cell-6");
    htmlBoard[1][3] = document.getElementById("grid-2-cell-4");
    htmlBoard[1][4] = document.getElementById("grid-2-cell-5");
    htmlBoard[1][5] = document.getElementById("grid-2-cell-6");
    htmlBoard[1][6] = document.getElementById("grid-3-cell-4");
    htmlBoard[1][7] = document.getElementById("grid-3-cell-5");
    htmlBoard[1][8] = document.getElementById("grid-3-cell-6");

    htmlBoard[2][0] = document.getElementById("grid-1-cell-7");
    htmlBoard[2][1] = document.getElementById("grid-1-cell-8");
    htmlBoard[2][2] = document.getElementById("grid-1-cell-9");
    htmlBoard[2][3] = document.getElementById("grid-2-cell-7");
    htmlBoard[2][4] = document.getElementById("grid-2-cell-8");
    htmlBoard[2][5] = document.getElementById("grid-2-cell-9");
    htmlBoard[2][6] = document.getElementById("grid-3-cell-7");
    htmlBoard[2][7] = document.getElementById("grid-3-cell-8");
    htmlBoard[2][8] = document.getElementById("grid-3-cell-9");

    htmlBoard[3][0] = document.getElementById("grid-4-cell-1");
    htmlBoard[3][1] = document.getElementById("grid-4-cell-2");
    htmlBoard[3][2] = document.getElementById("grid-4-cell-3");
    htmlBoard[3][3] = document.getElementById("grid-5-cell-1");
    htmlBoard[3][4] = document.getElementById("grid-5-cell-2");
    htmlBoard[3][5] = document.getElementById("grid-5-cell-3");
    htmlBoard[3][6] = document.getElementById("grid-6-cell-1");
    htmlBoard[3][7] = document.getElementById("grid-6-cell-2");
    htmlBoard[3][8] = document.getElementById("grid-6-cell-3");

    htmlBoard[4][0] = document.getElementById("grid-4-cell-4");
    htmlBoard[4][1] = document.getElementById("grid-4-cell-5");
    htmlBoard[4][2] = document.getElementById("grid-4-cell-6");
    htmlBoard[4][3] = document.getElementById("grid-5-cell-4");
    htmlBoard[4][4] = document.getElementById("grid-5-cell-5");
    htmlBoard[4][5] = document.getElementById("grid-5-cell-6");
    htmlBoard[4][6] = document.getElementById("grid-6-cell-4");
    htmlBoard[4][7] = document.getElementById("grid-6-cell-5");
    htmlBoard[4][8] = document.getElementById("grid-6-cell-6");

    htmlBoard[5][0] = document.getElementById("grid-4-cell-7");
    htmlBoard[5][1] = document.getElementById("grid-4-cell-8");
    htmlBoard[5][2] = document.getElementById("grid-4-cell-9");
    htmlBoard[5][3] = document.getElementById("grid-5-cell-7");
    htmlBoard[5][4] = document.getElementById("grid-5-cell-8");
    htmlBoard[5][5] = document.getElementById("grid-5-cell-9");
    htmlBoard[5][6] = document.getElementById("grid-6-cell-7");
    htmlBoard[5][7] = document.getElementById("grid-6-cell-8");
    htmlBoard[5][8] = document.getElementById("grid-6-cell-9");

    htmlBoard[6][0] = document.getElementById("grid-7-cell-1");
    htmlBoard[6][1] = document.getElementById("grid-7-cell-2");
    htmlBoard[6][2] = document.getElementById("grid-7-cell-3");
    htmlBoard[6][3] = document.getElementById("grid-8-cell-1");
    htmlBoard[6][4] = document.getElementById("grid-8-cell-2");
    htmlBoard[6][5] = document.getElementById("grid-8-cell-3");
    htmlBoard[6][6] = document.getElementById("grid-9-cell-1");
    htmlBoard[6][7] = document.getElementById("grid-9-cell-2");
    htmlBoard[6][8] = document.getElementById("grid-9-cell-3");

    htmlBoard[7][0] = document.getElementById("grid-7-cell-4");
    htmlBoard[7][1] = document.getElementById("grid-7-cell-5");
    htmlBoard[7][2] = document.getElementById("grid-7-cell-6");
    htmlBoard[7][3] = document.getElementById("grid-8-cell-4");
    htmlBoard[7][4] = document.getElementById("grid-8-cell-5");
    htmlBoard[7][5] = document.getElementById("grid-8-cell-6");
    htmlBoard[7][6] = document.getElementById("grid-9-cell-4");
    htmlBoard[7][7] = document.getElementById("grid-9-cell-5");
    htmlBoard[7][8] = document.getElementById("grid-9-cell-6");

    htmlBoard[8][0] = document.getElementById("grid-7-cell-7");
    htmlBoard[8][1] = document.getElementById("grid-7-cell-8");
    htmlBoard[8][2] = document.getElementById("grid-7-cell-9");
    htmlBoard[8][3] = document.getElementById("grid-8-cell-7");
    htmlBoard[8][4] = document.getElementById("grid-8-cell-8");
    htmlBoard[8][5] = document.getElementById("grid-8-cell-9");
    htmlBoard[8][6] = document.getElementById("grid-9-cell-7");
    htmlBoard[8][7] = document.getElementById("grid-9-cell-8");
    htmlBoard[8][8] = document.getElementById("grid-9-cell-9");
    return htmlBoard
}


var num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// LETS THE USER SELECT THE DIFFICULTY MAKES THE DIFFICULTY OPTIONS AVAILABLE

let firstGame = true;

function chooseDificulty() {
    if (firstGame){    
        firstGame = false;
    } else {
        closeInputBox()
    };
    makehtmlBoardAnArray();
    originalBoard = new Array(9).fill("").map(() => new Array(9).fill(""));
    userBoard = new Array(9).fill("").map(() => new Array(9).fill(""));
    let diffChoicePop = document.getElementById("difficulty-options");
    diffChoicePop.style.opacity = '1';
    diffChoicePop.style.pointerEvents = 'all';

    let veryEasyEl = document.getElementById("very-easy");
    let easyEl = document.getElementById("easy");
    let mediumEl = document.getElementById("medium");
    let hardEl = document.getElementById("hard");

    veryEasyEl.addEventListener("click", veryEasyGame);
    easyEl.addEventListener("click", easyGame);
    mediumEl.addEventListener("click", mediumGame);
    hardEl.addEventListener("click", hardGame);
}

// FUNCTIONS TO CREATE BOARDS DEPENDING ON USER SELECTION
function veryEasyGame() {
    let diffChoicePop = document.getElementById("difficulty-options");
    diffChoicePop.style.opacity = '0';
    diffChoicePop.style.pointerEvents = 'none';
    let veryEasyEl = document.getElementById("very-easy");
    veryEasyEl.removeEventListener("click", veryEasyGame)
    startNewGame(1);
}
function easyGame() {
    let diffChoicePop = document.getElementById("difficulty-options");
    diffChoicePop.style.opacity = '0';
    diffChoicePop.style.pointerEvents = 'none';
    let easyEl = document.getElementById("easy");
    easyEl.removeEventListener("click", easyGame);
    startNewGame(2);
}
function mediumGame() {
    let diffChoicePop = document.getElementById("difficulty-options");
    diffChoicePop.style.opacity = '0';
    diffChoicePop.style.pointerEvents = 'none';
    let mediumEl = document.getElementById("medium");
    mediumEl.removeEventListener("click", mediumGame);
    startNewGame(3);
}
function hardGame() {
    let diffChoicePop = document.getElementById("difficulty-options");
    diffChoicePop.style.opacity = '0';
    diffChoicePop.style.pointerEvents = 'none';
    let hardEl = document.getElementById("hard");
    hardEl.removeEventListener("click", hardGame);
    startNewGame(4);
}

// STARTS THE GAME
// let boolForEventListner = false;
let isBoxDisplayed = false;

function startNewGame(diff) {
    let brd = generateBoard();              // builds grid 1, 4, and 9 on board
    originalBoard = copyArray(brd);         // copies the board so the original board is stored
    userBoard = copyArray(brd);             // makes a copy of the board for all the user input
    solveBoard(brd);                        // solves the board to ensure the board will be solvable once displayed
    removeDiff(diff, brd);                  // removes cells depending on users dificulty choice
    originalBoard = copyArray(brd);         // makes a copy of the bord with selected diff
    userBoard = copyArray(brd);             // makes a copy of the bord with selected diff
    let temp = makehtmlBoardAnArray();      // looks at the current board displayed and creates hover effects and adds event listners
    for (let i = 0; i < 9; i++) {
        for ( let j = 0; j < 9; j++) {
            temp[i][j].style.backgroundColor = "lightgray";
            temp[i][j].addEventListener("mouseover", function(event) {
                if (!(event.target.id == "")){
                    if (userBoard[i][j] == originalBoard[i][j] && originalBoard[i][j] != "") {
                        event.target.style.backgroundColor = "lightslategray"
                    } else {
                        event.target.style.backgroundColor = "rgb(154, 187, 223)";
                    }
                    event.target.addEventListener("click", boardEventListnerFunction)
                }
            });
            temp[i][j].addEventListener("mouseout", function(event) {
                if (!(event.target.id == "")){
                    if (userBoard[i][j] == originalBoard[i][j] && originalBoard[i][j] != "") {
                        event.target.style.backgroundColor = "lightslategray"
                    } else if (!(validPlacement(userBoard, Number(userBoard[i][j]), getInputIndex(event.originalTarget))) && userBoard[i][j] != "") {
                        event.target.style.backgroundColor = "red";
                    } else if (userBoard[i][j] > 0) {
                        event.target.style.backgroundColor = "rgb(154, 187, 223)"
                    } else {
                        event.target.style.backgroundColor = "lightgray"
                    }
                    event.target.removeEventListener("click", boardEventListnerFunction)
                }
            })
        }
    }
    populateBoard(brd);
    penEl.style.background = "grey"
}

function boardEventListnerFunction() {
    let clickedCell = getInputIndex(this);
    if (originalBoard[clickedCell[0]][clickedCell[1]] > 0) {
        if (isBoxDisplayed) {
            closeInputBox();
        }
        return
    }
    openInputBox(this.id);
}

// Copys array without linking because js links everything for some reason that I still need to lean about
function copyArray(bo) {
    let newArr = [...bo];
    for (let i = 0; i < bo.length; i++) {
        newArr[i] = bo[i].slice();
    }
    return newArr
}

// builds board with grid 1, 4, and 9 filled
function generateBoard(){
    var grid_arr = [];


    let grid_0 = populateFirst3Grids();

    let grid_4 = populateFirst3Grids();

    let grid_8 = populateFirst3Grids();

    function populateFirst3Grids() {
        grid_arr = [];
        return randomArray()
    }
    function randomArray() {
        if (num_arr.length === 0) {
            num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            
        } else {
            let indx_len = num_arr.length;

            let ran_index = Math.floor(Math.random() * indx_len);

            grid_arr = grid_arr.concat(num_arr.splice(ran_index, 1));
            randomArray();
        }
        return grid_arr;
    };

    let brd = [];
    brd[0] = grid_0.slice(0, 3).concat(["", "", "", "", "", ""]);
    brd[1] = grid_0.slice(3, 6).concat(["", "", "", "", "", ""]);
    brd[2] = grid_0.slice(6).concat(["", "", "", "", "", ""]);
    brd[3] = [].concat(["", "", ""]).concat(grid_4.slice(0, 3)).concat(["", "", ""]);
    brd[4] = [].concat(["", "", ""]).concat(grid_4.slice(3, 6)).concat(["", "", ""]);
    brd[5] = [].concat(["", "", ""]).concat(grid_4.slice(6)).concat(["", "", ""]);
    brd[6] = [].concat(["", "", "", "", "", ""]).concat(grid_8.slice(0, 3));
    brd[7] = [].concat(["", "", "", "", "", ""]).concat(grid_8.slice(3, 6));
    brd[8] = [].concat(["", "", "", "", "", ""]).concat(grid_8.slice(6));

    return brd

}

//  function to solve the board
function solveBoard(bo) {
    let find = findEmtyCell(bo)
    if (!find) {
        return true;
    }
    let row = find[0];
    let col = find[1];
    
    for (let i = 1; i < 10; i++) {
        if (validPlacement(bo, i, [row, col])){
            bo[row][col] = i;
            if (solveBoard(bo)) {
                return true
            } else {
                bo[row][col] = "";
            }
        }
    }
    return false;
}

//  checks if the number entered is a valid placement on the board
function validPlacement(bo, num, pos) {

    let placeRow = pos[0];
    let placeCol = pos[1];
    for (let i = 0; i < bo[placeRow].length; i++){
        if (bo[placeRow][i] === num && pos[1] != i){
            return false;
        } 
    }
    for (let i = 0; i < bo.length; i++){
        if (bo[i][placeCol] === num && pos[0] != i){
            return false;
        }
    
    }
    let grid_start_row = placeRow - placeRow % 3;
    let grid_start_col = placeCol - placeCol % 3;
    
    for (let i = grid_start_row; i < (grid_start_row + 3); i++) {
        for (let j = grid_start_col; j < (grid_start_col + 3); j++) {
            if (bo[i][j] === num && i != pos[0] && j != pos[1]) {
                return false;
            }
        }
    }
    return true;
}



//  Finds the next empty cell with the least amount of options
function findEmtyCell(bo) {
    for (let i = 0; i < bo.length; i++){
        for (let j = 0; j < bo[i].length; j++) {
            if (bo[i][j] == "" || bo[i][j].constructor.name == 'Array') {
                return findShortArr(bo);   // use to solve from cells with least choices
                // return [i, j]  // Use to solve row for row
            }
        }
    }
    return false;
}

//  provides a list of possible values in a cell
function listPossibleValues(bo, row, col) {
    let temp_list = [];
    for (let i = 0; i < bo[row].length; i++){
        if (bo[row][i] != ""){
            temp_list.push(bo[row][i]);
        } 
    }
    for (let i = 0; i < bo.length; i++){
            if (bo[i][col] != ""){
                temp_list.push(bo[i][col]);
            }
        
    }

    let grid_start_row = row - row % 3;
    let grid_start_col = col - col % 3;
    
    for (let i = grid_start_row; i < grid_start_row + 3; i++) {
        for (let x = grid_start_col; x < grid_start_col + 3; x++) {
            if (bo[i][x] != "") {
                temp_list.push(bo[i][x]);
            }
        }
    }
    let pos_list = []
    for (i = 0; i < num_arr.length; i++) {
        if (!temp_list.includes(num_arr[i])) {
            pos_list.push(i + 1)
            
        }
    }
    
    return pos_list;
}

//  finds the cell with the least amount of options
function findShortArr(bo){
    let short_pos_row;
    let short_pos_col;
    let short_len = 9;
    for (let i = 0; i < bo[0].length; i++) {
        for (let x = 0; x < bo[0].length; x++) {
            if (bo[i][x] == "" || bo[i][x].constructor.name == 'Array'){
                bo[i][x] = listPossibleValues(bo, i, x);
                if (bo[i][x].length < short_len) {
                    short_pos_row = i;
                    short_pos_col = x;
                    short_len = bo[i][x].length
                }
            }
        }
    }
    return [short_pos_row, short_pos_col] 
}

// Removes cells depending on user difficulty choices
function removeDiff(diff, bo) {
    if (diff == 1){
        diff = 30;
    } else if (diff == 2) {
        diff = 50;
    } else if (diff == 3) {
        diff = 55;
    } else if (diff == 4) {
        diff = 60;
    }

    for (let i = 0; i < (diff); i++) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (bo[row][col] == "") {
            i--
        }
        bo[row][col] = "";
        
    }

}

// Updates the HTML File with changes made
function populateBoard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            htmlBoard[i][j].textContent = board[i][j];
        }
    }
    countToEnd();
}

function countToEnd() {
    let completeCounter = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (htmlBoard[i][j].textContent > 0) {
                if (htmlBoard[i][j].textContent == originalBoard[i][j]) {
                    htmlBoard[i][j].style.background = "lightslategray";
                }
                completeCounter++
            }
        }
    }
    if (completeCounter == 81){
        console.log("done")
    }
}

const inputSelection = document.getElementById("select-input");


// Function to bring up the selection box
let insert_1 = document.getElementById("input-1")
let insert_2 = document.getElementById("input-2")
let insert_3 = document.getElementById("input-3")
let insert_4 = document.getElementById("input-4")
let insert_5 = document.getElementById("input-5")
let insert_6 = document.getElementById("input-6")
let insert_7 = document.getElementById("input-7")
let insert_8 = document.getElementById("input-8")
let insert_9 = document.getElementById("input-9")
let clearEl = document.getElementById("clear-el")

function openInputBox(cellToChange) {
    let cellPos = document.getElementById(`${cellToChange}`).getBoundingClientRect();
    if (!isBoxDisplayed){
        isBoxDisplayed = true;
        inputSelection.style.opacity = "1";
        inputSelection.style.left =  `${cellPos.left}px`;
        inputSelection.style.top = `${cellPos.bottom}px`;
        inputSelection.style.zIndex = "2";
        inputSelection.style.pointerEvents = "all";
        
        insertSelectedNumber(cellToChange);
    } else {
        closeInputBox();
    }
}

//  closes the input box
function closeInputBox() {
    isBoxDisplayed = false;
    inputSelection.style.opacity = "0";
    inputSelection.style.pointerEvents = "none";
    removeEventListenerAddToBoard();
}

// Inserts the selected number from the input selection box

function insertSelectedNumber(cell) {
    activeCellForBoardAdd = document.getElementById(`${cell}`);
    insert_1.addEventListener("click", addToBoard);
    insert_2.addEventListener("click", addToBoard);
    insert_3.addEventListener("click", addToBoard);
    insert_4.addEventListener("click", addToBoard);
    insert_5.addEventListener("click", addToBoard);
    insert_6.addEventListener("click", addToBoard);
    insert_7.addEventListener("click", addToBoard);
    insert_8.addEventListener("click", addToBoard);
    insert_9.addEventListener("click", addToBoard);
    clearEl.addEventListener("click", addToBoard);
    let cellCheck = activeCellForBoardAdd.getBoundingClientRect();
    let inputCheck = inputSelection.getBoundingClientRect();
}

function addToBoard() {
    cellCheck = activeCellForBoardAdd.getBoundingClientRect();
    inputCheck = inputSelection.getBoundingClientRect();
    if (cellCheck.left == inputCheck.left && Math.round(cellCheck.bottom) == Math.round(inputCheck.top)) {
        let currentIndex = getInputIndex(activeCellForBoardAdd)
        if (usePen){
            let isValid =  validPlacement(userBoard, Number(this.textContent), currentIndex);
            activeCellForBoardAdd.textContent = this.textContent;
            if (!(this.textContent == "Clear")) {
                userBoard[currentIndex[0]][currentIndex[1]] = Number(this.textContent);
                if (isValid) {
                    activeCellForBoardAdd.style.background = "rgb(154, 187, 223)";
                } else {
                    activeCellForBoardAdd.style.background = "red";
                }
                countToEnd();
            } else {
                userBoard[currentIndex[0]][currentIndex[1]] = "";
                activeCellForBoardAdd.textContent = "";
                activeCellForBoardAdd.style.background = "lightgrey";
                countToEnd();
            }
            
        }else if (usePencil) {
            let pIsInCell = false;
            let activeNodeList = activeCellForBoardAdd.childNodes;
            if (!(this.textContent == "Clear")) {
                if (activeCellForBoardAdd.hasChildNodes()) {

                    activeNodeList.forEach(kid => { //using kid instead of child so I do not get confused with built in functions
                        if (kid.className == "pencil_p_element") {
                            pIsInCell = true;
                            const pencilArr = (kid.textContent).split(",");
                            let pencilArrNumbers = pencilArr.map((i) => Number(i));
                            if (pencilArrNumbers.includes(Number(this.textContent))) {
                                if (pencilArrNumbers.length == 1) {
                                    removePencilNode()
                                } else {
                                let remIndex = pencilArrNumbers.indexOf(Number(this.textContent));
                                pencilArrNumbers.splice(remIndex, 1);
                                kid.textContent = `${pencilArrNumbers}`;
                                if (kid.textContent == "") {
                                    kid.textContent = "";
                                    activeCellForBoardAdd.removeChild(activeCellForBoardAdd.firstChild);
                                }
                            }
                            } else {
                                pencilArrNumbers.push(Number(this.textContent));
                                pencilArrNumbers.sort();
                                kid.textContent = `${pencilArrNumbers}`;
                            }
                        }});
                }
                if (pIsInCell == false){
                    let pencilP = document.createElement("p");
                    pencilP.className = "pencil_p_element";
                    pencilP.textContent = this.textContent;
                    activeCellForBoardAdd.appendChild(pencilP);
                    pencilP.style.pointerEvents = "none";
                } 
            } else {
                removePencilNode()                
            }
            function removePencilNode() {
                activeNodeList.forEach(kid => {
                    if (kid.className == "pencil_p_element") {
                        kid.textContent = "";
                        activeCellForBoardAdd.removeChild(kid);
                    }
                })
            }
        } else if (useTemp) {
            let tIsInCell = false;
            let activeNodeList = activeCellForBoardAdd.childNodes;
            if (!(this.textContent == "Clear")) {
                if (activeCellForBoardAdd.hasChildNodes()) {
                    activeNodeList.forEach(kid => { //using kid instead of child so I do not get confused with built in functions
                        if (kid.className == "temp_p_element") {
                            tIsInCell = true;
                            const tempArr = (kid.textContent).split(",");
                            let tempArrNumbers = tempArr.map((i) => Number(i));
                            if (tempArrNumbers.includes(Number(this.textContent))) {
                                if (tempArrNumbers.length == 1) {
                                    removeTempNode()
                                } else {
                                let remIndex = tempArrNumbers.indexOf(Number(this.textContent));
                                tempArrNumbers.splice(remIndex, 1);
                                kid.textContent = `${tempArrNumbers}`;
                                if (kid.textContent == "") {
                                    kid.textContent = "";
                                    activeCellForBoardAdd.removeChild(activeCellForBoardAdd.firstChild);
                                }
                            }
                            } else {
                                tempArrNumbers.push(Number(this.textContent));
                                tempArrNumbers.sort();
                                kid.textContent = `${tempArrNumbers}`;
                            }
                        }});
                }
                if (tIsInCell == false){
                    let tempP = document.createElement("p");
                    tempP.className = "temp_p_element";
                    tempP.textContent = this.textContent;
                    activeCellForBoardAdd.appendChild(tempP);
                    tempP.style.pointerEvents = "none";
                } 
            } else {
                removeTempNode()                
            }
            function removeTempNode() {
                activeNodeList.forEach(kid => {
                    if (kid.className == "temp_p_element") {
                        kid.textContent = "";
                        activeCellForBoardAdd.removeChild(kid);
                    }
                })
            }
        }
            
            
        removeEventListenerAddToBoard();
    }
    closeInputBox();
}
function removeEventListenerAddToBoard() {
    insert_1.removeEventListener("click", addToBoard);
    insert_2.removeEventListener("click", addToBoard);
    insert_3.removeEventListener("click", addToBoard);
    insert_4.removeEventListener("click", addToBoard);
    insert_5.removeEventListener("click", addToBoard);
    insert_6.removeEventListener("click", addToBoard);
    insert_7.removeEventListener("click", addToBoard);
    insert_8.removeEventListener("click", addToBoard);
    insert_9.removeEventListener("click", addToBoard);
}



// Gets index of inserted cell
function getInputIndex(htmlElement) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (htmlBoard[i][j].id == htmlElement.id) {
                return [i, j]
            }
        }
    }
}


// FOR THE SOLVE BUTTON
function solveCurrentGame() {
    solveBoard(originalBoard);
    populateBoard(originalBoard);
}

// FOR THE HINT BUTTON
function giveHint() {
    let brd = new Array(9).fill("").map(() => new Array(9).fill(""));
    brd = copyArray(userBoard);
    
    let hintPos = findShortArr(brd);
    userBoard[hintPos[0]][hintPos[1]] = [...brd[hintPos[0]][hintPos[1]]];
    htmlBoard[hintPos[0]][hintPos[1]].textContent = [...brd[hintPos[0]][hintPos[1]]];
    if (userBoard[hintPos[0]][hintPos[1]].length == 1) {
        userBoard[hintPos[0]][hintPos[1]] = userBoard[hintPos[0]][hintPos[1]][0];
        htmlBoard[hintPos[0]][hintPos[1]].textContent = `${userBoard[hintPos[0]][hintPos[1]]}`;
    }
}

// function placeUserInput() {
//     let tempBoard = makehtmlBoardAnArray();
//     for (let i =0; i < 9; i++) {
//         for (let j = 0; j < 9; j++){
//             if (tempBoard[i][j].textContent != userBoard[i][j]){
//                 // if (tempBoard[i][j].textContent != "") {
//                     if (usePen){
//                         userBoard[i][j] = Number(tempBoard[i][j].textContent);
//                         populateBoard(userBoard)
//                     }else if (usePencil) {
//                         console.log(htmlBoard[i][j])
//                         console.log("Pencil Used")
//                     } else if (useTemp) {
//                         console.log("Temp Used")
//                     }
//                 // }
//             }
//         }
//     }
// }

const penEl = document.getElementById("pen-permanent");
let usePen = true;
penEl.addEventListener("click", penFunction);

const pencilEl = document.getElementById("pencil-arr");
let usePencil = false;
pencilEl.addEventListener("click", pencilFunction);

const tempEl = document.getElementById("temp-arr");
let useTemp = false;
tempEl.addEventListener("click", tempFunction);

function penFunction() {
    usePen = true;
    usePencil = false;
    useTemp = false;
    highlightToolInUse()
}

function pencilFunction() {
    usePen = false;
    usePencil = true;
    useTemp = false;
    highlightToolInUse()
}

function tempFunction() {
    usePen = false;
    usePencil = false;
    useTemp = true;
    highlightToolInUse()
}

function highlightToolInUse() {
    if (usePen) {
        penEl.style.background = "grey";
        pencilEl.style.background = "darkkhaki";
        tempEl.style.background = "darkkhaki";
    } else if (usePencil) {
        penEl.style.background = "darkkhaki";
        pencilEl.style.background = "grey";
        tempEl.style.background = "darkkhaki";
    } else {
        penEl.style.background = "darkkhaki";
        pencilEl.style.background = "darkkhaki";
        tempEl.style.background = "grey";
    }
}

function clearPuzz() {
    userBoard = copyArray(originalBoard);
    populateBoard(originalBoard)
}