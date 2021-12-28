
let g_1_c_1 = document.getElementById("grid-1-cell-1");
let g_1_c_2 = document.getElementById("grid-1-cell-2");
let g_1_c_3 = document.getElementById("grid-1-cell-3");
let g_1_c_4 = document.getElementById("grid-1-cell-4");
let g_1_c_5 = document.getElementById("grid-1-cell-5");
let g_1_c_6 = document.getElementById("grid-1-cell-6");
let g_1_c_7 = document.getElementById("grid-1-cell-7");
let g_1_c_8 = document.getElementById("grid-1-cell-8");
let g_1_c_9 = document.getElementById("grid-1-cell-9");

let g_2_c_1 = document.getElementById("grid-2-cell-1");
let g_2_c_2 = document.getElementById("grid-2-cell-2");
let g_2_c_3 = document.getElementById("grid-2-cell-3");
let g_2_c_4 = document.getElementById("grid-2-cell-4");
let g_2_c_5 = document.getElementById("grid-2-cell-5");
let g_2_c_6 = document.getElementById("grid-2-cell-6");
let g_2_c_7 = document.getElementById("grid-2-cell-7");
let g_2_c_8 = document.getElementById("grid-2-cell-8");
let g_2_c_9 = document.getElementById("grid-2-cell-9");

let g_3_c_1 = document.getElementById("grid-3-cell-1");
let g_3_c_2 = document.getElementById("grid-3-cell-2");
let g_3_c_3 = document.getElementById("grid-3-cell-3");
let g_3_c_4 = document.getElementById("grid-3-cell-4");
let g_3_c_5 = document.getElementById("grid-3-cell-5");
let g_3_c_6 = document.getElementById("grid-3-cell-6");
let g_3_c_7 = document.getElementById("grid-3-cell-7");
let g_3_c_8 = document.getElementById("grid-3-cell-8");
let g_3_c_9 = document.getElementById("grid-3-cell-9");

let g_4_c_1 = document.getElementById("grid-4-cell-1");
let g_4_c_2 = document.getElementById("grid-4-cell-2");
let g_4_c_3 = document.getElementById("grid-4-cell-3");
let g_4_c_4 = document.getElementById("grid-4-cell-4");
let g_4_c_5 = document.getElementById("grid-4-cell-5");
let g_4_c_6 = document.getElementById("grid-4-cell-6");
let g_4_c_7 = document.getElementById("grid-4-cell-7");
let g_4_c_8 = document.getElementById("grid-4-cell-8");
let g_4_c_9 = document.getElementById("grid-4-cell-9");

let g_5_c_1 = document.getElementById("grid-5-cell-1");
let g_5_c_2 = document.getElementById("grid-5-cell-2");
let g_5_c_3 = document.getElementById("grid-5-cell-3");
let g_5_c_4 = document.getElementById("grid-5-cell-4");
let g_5_c_5 = document.getElementById("grid-5-cell-5");
let g_5_c_6 = document.getElementById("grid-5-cell-6");
let g_5_c_7 = document.getElementById("grid-5-cell-7");
let g_5_c_8 = document.getElementById("grid-5-cell-8");
let g_5_c_9 = document.getElementById("grid-5-cell-9");

let g_6_c_1 = document.getElementById("grid-6-cell-1");
let g_6_c_2 = document.getElementById("grid-6-cell-2");
let g_6_c_3 = document.getElementById("grid-6-cell-3");
let g_6_c_4 = document.getElementById("grid-6-cell-4");
let g_6_c_5 = document.getElementById("grid-6-cell-5");
let g_6_c_6 = document.getElementById("grid-6-cell-6");
let g_6_c_7 = document.getElementById("grid-6-cell-7");
let g_6_c_8 = document.getElementById("grid-6-cell-8");
let g_6_c_9 = document.getElementById("grid-6-cell-9");

let g_7_c_1 = document.getElementById("grid-7-cell-1");
let g_7_c_2 = document.getElementById("grid-7-cell-2");
let g_7_c_3 = document.getElementById("grid-7-cell-3");
let g_7_c_4 = document.getElementById("grid-7-cell-4");
let g_7_c_5 = document.getElementById("grid-7-cell-5");
let g_7_c_6 = document.getElementById("grid-7-cell-6");
let g_7_c_7 = document.getElementById("grid-7-cell-7");
let g_7_c_8 = document.getElementById("grid-7-cell-8");
let g_7_c_9 = document.getElementById("grid-7-cell-9");

let g_8_c_1 = document.getElementById("grid-8-cell-1");
let g_8_c_2 = document.getElementById("grid-8-cell-2");
let g_8_c_3 = document.getElementById("grid-8-cell-3");
let g_8_c_4 = document.getElementById("grid-8-cell-4");
let g_8_c_5 = document.getElementById("grid-8-cell-5");
let g_8_c_6 = document.getElementById("grid-8-cell-6");
let g_8_c_7 = document.getElementById("grid-8-cell-7");
let g_8_c_8 = document.getElementById("grid-8-cell-8");
let g_8_c_9 = document.getElementById("grid-8-cell-9");

let g_9_c_1 = document.getElementById("grid-9-cell-1");
let g_9_c_2 = document.getElementById("grid-9-cell-2");
let g_9_c_3 = document.getElementById("grid-9-cell-3");
let g_9_c_4 = document.getElementById("grid-9-cell-4");
let g_9_c_5 = document.getElementById("grid-9-cell-5");
let g_9_c_6 = document.getElementById("grid-9-cell-6");
let g_9_c_7 = document.getElementById("grid-9-cell-7");
let g_9_c_8 = document.getElementById("grid-9-cell-8");
let g_9_c_9 = document.getElementById("grid-9-cell-9");

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

    // brd[0] = [null, 3, 9, null, null, null, 5, 4, null];
    // brd[1] = [null, 6, 5, 4, null, null, 9, null, null];
    // brd[2] = [7, 4, 2, 3, 5, 9, 8, 1, 6];
    // brd[3] = [null, null, 4, null, null, null, 2, null, null];
    // brd[4] = [null, 1, 6, 8, null, 5, 4, null, null];
    // brd[5] = [null, null, 7, null, 4, null, 6, null, null];
    // brd[6] = [4, 2, 8, null, null, null, 7, 9, 5];
    // brd[7] = [5, 7, 1, 9, 8, 4, 3, 6, 2];
    // brd[8] = [6, 9, 3, 5, 7, 2, 1, 8, 4];

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
    console.log(brd);
    // brd = [...originalBoard];
    let hintPos = findShortArr(brd);
    // console.log(originalBoard === bo);
    originalBoard[hintPos[0]][hintPos[1]] = [...brd[hintPos[0]][hintPos[1]]];
    populateBoard(originalBoard);
}


function populateBoard(board) {
    g_1_c_1.textContent = board[0][0];
    g_1_c_2.textContent = board[0][1];
    g_1_c_3.textContent = board[0][2];
    g_1_c_4.textContent = board[1][0];
    g_1_c_5.textContent = board[1][1];
    g_1_c_6.textContent = board[1][2];
    g_1_c_7.textContent = board[2][0];
    g_1_c_8.textContent = board[2][1];
    g_1_c_9.textContent = board[2][2];

    g_2_c_1.textContent = board[0][3];
    g_2_c_2.textContent = board[0][4];
    g_2_c_3.textContent = board[0][5];
    g_2_c_4.textContent = board[1][3];
    g_2_c_5.textContent = board[1][4];
    g_2_c_6.textContent = board[1][5];
    g_2_c_7.textContent = board[2][3];
    g_2_c_8.textContent = board[2][4];
    g_2_c_9.textContent = board[2][5];

    g_3_c_1.textContent = board[0][6];
    g_3_c_2.textContent = board[0][7];
    g_3_c_3.textContent = board[0][8];
    g_3_c_4.textContent = board[1][6];
    g_3_c_5.textContent = board[1][7];
    g_3_c_6.textContent = board[1][8];
    g_3_c_7.textContent = board[2][6];
    g_3_c_8.textContent = board[2][7];
    g_3_c_9.textContent = board[2][8];

    g_4_c_1.textContent = board[3][0];
    g_4_c_2.textContent = board[3][1];
    g_4_c_3.textContent = board[3][2];
    g_4_c_4.textContent = board[4][0];
    g_4_c_5.textContent = board[4][1];
    g_4_c_6.textContent = board[4][2];
    g_4_c_7.textContent = board[5][0];
    g_4_c_8.textContent = board[5][1];
    g_4_c_9.textContent = board[5][2];

    g_5_c_1.textContent = board[3][3];
    g_5_c_2.textContent = board[3][4];
    g_5_c_3.textContent = board[3][5];
    g_5_c_4.textContent = board[4][3];
    g_5_c_5.textContent = board[4][4];
    g_5_c_6.textContent = board[4][5];
    g_5_c_7.textContent = board[5][3];
    g_5_c_8.textContent = board[5][4];
    g_5_c_9.textContent = board[5][5];

    g_6_c_1.textContent = board[3][6];
    g_6_c_2.textContent = board[3][7];
    g_6_c_3.textContent = board[3][8];
    g_6_c_4.textContent = board[4][6];
    g_6_c_5.textContent = board[4][7];
    g_6_c_6.textContent = board[4][8];
    g_6_c_7.textContent = board[5][6];
    g_6_c_8.textContent = board[5][7];
    g_6_c_9.textContent = board[5][8];

    g_7_c_1.textContent = board[6][0];
    g_7_c_2.textContent = board[6][1];
    g_7_c_3.textContent = board[6][2];
    g_7_c_4.textContent = board[7][0];
    g_7_c_5.textContent = board[7][1];
    g_7_c_6.textContent = board[7][2];
    g_7_c_7.textContent = board[8][0];
    g_7_c_8.textContent = board[8][1];
    g_7_c_9.textContent = board[8][2];

    g_8_c_1.textContent = board[6][3];
    g_8_c_2.textContent = board[6][4];
    g_8_c_3.textContent = board[6][5];
    g_8_c_4.textContent = board[7][3];
    g_8_c_5.textContent = board[7][4];
    g_8_c_6.textContent = board[7][5];
    g_8_c_7.textContent = board[8][3];
    g_8_c_8.textContent = board[8][4];
    g_8_c_9.textContent = board[8][5];

    g_9_c_1.textContent = board[6][6];
    g_9_c_2.textContent = board[6][7];
    g_9_c_3.textContent = board[6][8];
    g_9_c_4.textContent = board[7][6];
    g_9_c_5.textContent = board[7][7];
    g_9_c_6.textContent = board[7][8];
    g_9_c_7.textContent = board[8][6];
    g_9_c_8.textContent = board[8][7];
    g_9_c_9.textContent = board[8][8];
}