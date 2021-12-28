
let htmlBoard = new Array(9).fill("").map(() => new Array(9).fill(""));

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

var num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    brd[0] = grid_0.slice(0, 3).concat([null, null, null, null, null, null]);
    brd[1] = grid_0.slice(3, 6).concat([null, null, null, null, null, null]);
    brd[2] = grid_0.slice(6).concat([null, null, null, null, null, null]);
    brd[3] = [].concat([null, null, null]).concat(grid_4.slice(0, 3)).concat([null, null, null]);
    brd[4] = [].concat([null, null, null]).concat(grid_4.slice(3, 6)).concat([null, null, null]);
    brd[5] = [].concat([null, null, null]).concat(grid_4.slice(6)).concat([null, null, null]);
    brd[6] = [].concat([null, null, null, null, null, null]).concat(grid_8.slice(0, 3));
    brd[7] = [].concat([null, null, null, null, null, null]).concat(grid_8.slice(3, 6));
    brd[8] = [].concat([null, null, null, null, null, null]).concat(grid_8.slice(6));

    return brd

}


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
                bo[row][col] = null;
            }
        }
    }
    return false;
}

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
    
    for (let i = grid_start_row; i < grid_start_row + 3; i++) {
        for (let j = grid_start_col; j < grid_start_col + 3; j++) {
            if (bo[i][j] === num && [i, j] != pos) {
                return false;
            }
        }
    }
    return true;
}




function findEmtyCell(bo) {
    for (let i = 0; i < bo.length; i++){
        for (let j = 0; j < bo[i].length; j++) {
            if (bo[i][j] == null || bo[i][j].constructor.name == 'Array') {
                return findShortArr(bo);   // use to solve from cells with least choices
                // return [i, j]  // Use to solve row for row
            }
        }
    }
    return false;
}


function listPossibleValues(bo, row, col) {
    let temp_list = [];
    for (let i = 0; i < bo[row].length; i++){
        if (bo[row][i] != null){
            temp_list.push(bo[row][i]);
        } 
    }
    for (let i = 0; i < bo.length; i++){
            if (bo[i][col] != null){
                temp_list.push(bo[i][col]);
            }
        
    }

    let grid_start_row = row - row % 3;
    let grid_start_col = col - col % 3;
    
    for (let i = grid_start_row; i < grid_start_row + 3; i++) {
        for (let x = grid_start_col; x < grid_start_col + 3; x++) {
            if (bo[i][x] != null) {
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


function findShortArr(bo){
    
    let short_pos_row;
    let short_pos_col;
    let short_len = 9;
    for (let i = 0; i < bo[0].length; i++) {
        for (let x = 0; x < bo[0].length; x++) {
            if (bo[i][x] == null || bo[i][x].constructor.name == 'Array'){
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



// PROVIDES A GLOBAL ARRAY TO STORE THE ORIGINAL BOARD
var originalBoard = [];

// STARTS THE GAME
function startNewGame(diff) {
    let brd = generateBoard();
    solveBoard(brd);
    removeDiff(diff, brd);
    originalBoard = [...brd];
    populateBoard(brd);
    const boardEventListner = document.querySelectorAll(".brd-el");

    boardEventListner.forEach(element => {
        element.addEventListener("click", (e)=>{
            console.log(element.id);
        });
    });
}

// LETS THE USER SELECT THE DIFFICULTY MAKES THE DIFFICULTY OPTIONS AVAILABLE
function chooseDificulty() {
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
function removeDiff(diff, bo) {
    if (diff == 1){
        diff = 45;
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
        if (bo[row][col] == null) {
            i--
        }
        bo[row][col] = null;
        
    }
    populateBoard(bo);

}
// FOR THE SOLVE BUTTON
function solveCurrentGame() {
    solveBoard(originalBoard);
    populateBoard(originalBoard);
}

// FOR THE HINT BUTTON
function giveHint() {
    let brd = originalBoard.slice();
    for (let i = 0; i < 9; i++) {
        brd[i] = originalBoard[i].slice();
    }
    let hintPos = findShortArr(brd);
    originalBoard[hintPos[0]][hintPos[1]] = [...brd[hintPos[0]][hintPos[1]]];
    if (originalBoard[hintPos[0]][hintPos[1]].length == 1) {
        originalBoard[hintPos[0]][hintPos[1]] = originalBoard[hintPos[0]][hintPos[1]][0]
    }
    populateBoard(originalBoard);
}

// Updates the HTML File with changes made
function populateBoard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            htmlBoard[i][j].style.background = "lightgray";
            htmlBoard[i][j].textContent = board[i][j];
        }
    }
    let completeCounter = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (htmlBoard[i][j].textContent > 0) {
                htmlBoard[i][j].style.background = "lightslategray";
                completeCounter++
            }
        }
    }
    if (completeCounter == 81){
        console.log("done")
    }
}

