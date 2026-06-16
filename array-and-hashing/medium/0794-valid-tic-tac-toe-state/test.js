// Test: 794. Valid Tic Tac Toe State
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { validTicTacToe } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n794. Valid Tic Tac Toe State\n");

test(validTicTacToe(['XOX', 'O O', 'XOX']), true, 'Test 1');
test(validTicTacToe(["X  ", "X  ", "X  "]), false, 'Test 2');
test(validTicTacToe(["XOX","O O","XOX"]), true, 'Test 3');
test(validTicTacToe(["XXX","   ","O O"]), true, 'Test 4');
test(validTicTacToe(["X  "," O ","    "]), true, 'Test 5');
test(validTicTacToe(["XOX","XOX","XOX"]), false, 'Test 6');
test(validTicTacToe(["OXX", "XOX", "OXO"]), false, 'Test 7');
test(validTicTacToe(['OOO', '   ', '   ']), false, 'Test 8');
test(validTicTacToe(["XOX","OXO","   "]), true, 'Test 9');
test(validTicTacToe(["XOX", "OXO", "XOX"]), true, 'Test 10');
test(validTicTacToe(["XXO","OXO","XOX"]), true, 'Test 11');
test(validTicTacToe(["XXO","XOX","OXO"]), false, 'Test 12');
test(validTicTacToe(["XXX", "   ", "   "]), false, 'Test 13');
test(validTicTacToe(["X  "," X ","  X"]), false, 'Test 14');
test(validTicTacToe(["XXO","OOX","OXO"]), false, 'Test 15');
test(validTicTacToe(["X  ","XO "," X "]), false, 'Test 16');
test(validTicTacToe(["XXX","   ","OOO"]), false, 'Test 17');
test(validTicTacToe(["XOX", "O O", "XOX"]), true, 'Test 18');
test(validTicTacToe(["XOX","OOO","XOX"]), false, 'Test 19');
test(validTicTacToe(["XO ","OX ","OXO"]), false, 'Test 20');
test(validTicTacToe(["X  "," O ","XOX"]), true, 'Test 21');
test(validTicTacToe(["XX ","OO ","   "]), true, 'Test 22');
test(validTicTacToe(["XOO","XOX","OOX"]), false, 'Test 23');
test(validTicTacToe(["XX ","OOX","XOX"]), false, 'Test 24');
test(validTicTacToe(["XXO","XOX","OOX"]), false, 'Test 25');
test(validTicTacToe(["OOO","XOX","XXO"]), false, 'Test 26');
test(validTicTacToe(["XOX", "O O", "   "]), false, 'Test 27');
test(validTicTacToe(['XOX', ' X ', '   ']), false, 'Test 28');
test(validTicTacToe(["XOX","OOX","XOX"]), false, 'Test 29');
test(validTicTacToe(["OOO","OOO","OOO"]), false, 'Test 30');
test(validTicTacToe(["OXO","XOX","OXO"]), false, 'Test 31');
test(validTicTacToe(["XOO", "XOX", "OXO"]), false, 'Test 32');
test(validTicTacToe(["   ", "XOX", "   "]), true, 'Test 33');
test(validTicTacToe(["X  "," O ","  O"]), false, 'Test 34');
test(validTicTacToe(["XOO", "OXO", "XOX"]), false, 'Test 35');
test(validTicTacToe(["XOX","XOX","OOO"]), false, 'Test 36');
test(validTicTacToe(["XXO","OXO","OXO"]), false, 'Test 37');
test(validTicTacToe(["XOO","XOX","XOX"]), false, 'Test 38');
test(validTicTacToe(["XXX", "OOO", "   "]), false, 'Test 39');
test(validTicTacToe(["XXX","OOO","   "]), false, 'Test 40');
test(validTicTacToe(["XOX","OXO","XO "]), false, 'Test 41');
test(validTicTacToe(["OOO","X X","XOX"]), true, 'Test 42');
test(validTicTacToe(['XOX', 'OXO', 'XOX']), true, 'Test 43');
test(validTicTacToe(["   ","XXX","   "]), false, 'Test 44');
test(validTicTacToe(["O  ", "   ", "   "]), false, 'Test 45');
test(validTicTacToe(["XXO", "OXO", "XOX"]), true, 'Test 46');
test(validTicTacToe(["OOO","   ","   "]), false, 'Test 47');
test(validTicTacToe(["X  ", " X ", "  X"]), false, 'Test 48');
test(validTicTacToe(["XOO","XOO","XOO"]), false, 'Test 49');
test(validTicTacToe(["X  ", " O ", "  X"]), true, 'Test 50');
test(validTicTacToe(["O  ","   ","   "]), false, 'Test 51');
test(validTicTacToe(["XXX","   ","   "]), false, 'Test 52');
test(validTicTacToe(["OXX", "OXO", "XOX"]), true, 'Test 53');
test(validTicTacToe(["XXO", "OXO", "OXO"]), false, 'Test 54');
test(validTicTacToe(["XXX","OOO","XXX"]), false, 'Test 55');
test(validTicTacToe(["   ","   ","   "]), true, 'Test 56');
test(validTicTacToe(["XOX", " X ", "   "]), false, 'Test 57');
test(validTicTacToe(["XXO","OOX","XOX"]), true, 'Test 58');
test(validTicTacToe(['XXO', 'OXO', 'XOX']), true, 'Test 59');
test(validTicTacToe(["X  ", " O ", "  O"]), false, 'Test 60');
test(validTicTacToe(["X  "," O "," X "]), true, 'Test 61');
test(validTicTacToe(["X  ","OOO","X  "]), false, 'Test 62');
test(validTicTacToe(["XOX","OXX","OXO"]), true, 'Test 63');
test(validTicTacToe(["X  "," O ","X  "]), true, 'Test 64');
test(validTicTacToe(["XOO","XOX","OXO"]), false, 'Test 65');
test(validTicTacToe(["X O","X O","X O"]), false, 'Test 66');
test(validTicTacToe(['XXX', '   ', '   ']), false, 'Test 67');
test(validTicTacToe(["XXO","XOX","OOO"]), false, 'Test 68');
test(validTicTacToe(["XXO", "XOX", "OXO"]), false, 'Test 69');
test(validTicTacToe(["XOX", "OXO", "OOX"]), false, 'Test 70');
test(validTicTacToe(["O  ", "O  ", "O  "]), false, 'Test 71');
test(validTicTacToe(["XXO", "OXO", "OOX"]), false, 'Test 72');
test(validTicTacToe(["   ", "   ", "   "]), true, 'Test 73');
test(validTicTacToe(["XX ","OOX","X  "]), false, 'Test 74');
test(validTicTacToe(["   ","   ","XXX"]), false, 'Test 75');
test(validTicTacToe(["OOO", "   ", "   "]), false, 'Test 76');
test(validTicTacToe(["X  "," O ","  X"]), true, 'Test 77');
test(validTicTacToe(["   ", "   ", "XXX"]), false, 'Test 78');
test(validTicTacToe(["O  "," O ","  O"]), false, 'Test 79');
test(validTicTacToe(["XO ","OX ","   "]), true, 'Test 80');
test(validTicTacToe(["XOX","OXO","XOX"]), true, 'Test 81');
test(validTicTacToe(["XO ","OXO","OXO"]), false, 'Test 82');
test(validTicTacToe(["X  ", "   ", "  O"]), true, 'Test 83');
test(validTicTacToe(['O  ', '   ', '   ']), false, 'Test 84');
test(validTicTacToe(["XOX"," X ","   "]), false, 'Test 85');
test(validTicTacToe(["XXX","XXX","XXX"]), false, 'Test 86');
test(validTicTacToe(['X  ', 'X  ', 'X  ']), false, 'Test 87');
test(validTicTacToe(["OOO","   ","XXX"]), false, 'Test 88');
test(validTicTacToe(['O  ', ' O ', '  O']), false, 'Test 89');
test(validTicTacToe(["XOX", "XOX", "XOX"]), false, 'Test 90');
test(validTicTacToe(['   ', '   ', '   ']), true, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

