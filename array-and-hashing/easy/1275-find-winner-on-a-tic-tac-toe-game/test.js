// Test: 1275. Find Winner On A Tic Tac Toe Game
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { tictactoe } = require("./solution");

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

console.log("\n1275. Find Winner On A Tic Tac Toe Game\n");

test(tictactoe([[0,0],[1,1],[2,2],[1,0],[1,2],[2,0],[2,1]]), Pending, 'Test 1');
test(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]), A, 'Test 2');
test(tictactoe([[0,2],[1,1],[2,0]]), Pending, 'Test 3');
test(tictactoe([[0,0],[1,1],[2,2],[0,2],[0,1],[1,0],[2,0],[2,1],[1,2]]), Draw, 'Test 4');
test(tictactoe([[0,0],[1,1],[2,2]]), Pending, 'Test 5');
test(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1]]), Pending, 'Test 6');
test(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]), B, 'Test 7');
test(tictactoe([[0,0],[0,1],[0,2]]), Pending, 'Test 8');
test(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2]]), Pending, 'Test 9');
test(tictactoe([[0,0],[1,1],[2,2],[0,2],[1,0],[2,0]]), B, 'Test 10');
test(tictactoe([[0,0],[1,1],[2,2],[0,1],[1,2],[2,0],[1,0]]), Pending, 'Test 11');
test(tictactoe([[0,0],[2,2],[1,1],[2,0],[2,1],[0,2],[1,0],[1,2],[0,1]]), A, 'Test 12');
test(tictactoe([[0,0],[2,0],[0,1],[1,1],[0,2],[2,1],[2,2]]), A, 'Test 13');
test(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,2]]), Pending, 'Test 14');
test(tictactoe([[0,0],[1,1],[2,2],[0,1],[1,2],[2,0],[0,2]]), A, 'Test 15');
test(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]), Draw, 'Test 16');
test(tictactoe([[0,0],[2,0],[1,1],[2,1],[1,2],[0,1],[0,2],[1,0],[2,2]]), A, 'Test 17');
test(tictactoe([[0,0],[1,1],[2,0],[0,1],[1,0],[2,1],[0,2],[1,2],[2,2]]), A, 'Test 18');
test(tictactoe([[0,0],[1,1],[0,1],[0,2]]), Pending, 'Test 19');
test(tictactoe([[0,2],[2,0],[1,1],[2,1],[0,1],[0,0],[1,0]]), Pending, 'Test 20');
test(tictactoe([[0,0],[2,2],[1,1],[0,1],[2,1],[0,2],[2,0]]), Pending, 'Test 21');
test(tictactoe([[0,0],[2,2],[1,1]]), Pending, 'Test 22');
test(tictactoe([[0,2],[1,1],[0,1],[0,0],[1,2],[2,0],[2,2],[2,1]]), Pending, 'Test 23');
test(tictactoe([[1,0],[0,0],[1,1],[0,1],[2,0],[0,2],[2,2]]), Pending, 'Test 24');
test(tictactoe([[0,2],[2,0],[1,1],[1,0],[0,0],[2,2],[2,1],[0,1],[1,2]]), Draw, 'Test 25');
test(tictactoe([[2,0],[1,1],[0,2],[0,0],[1,0],[1,2],[2,2],[2,1],[0,1]]), Draw, 'Test 26');
test(tictactoe([[0,0],[2,2],[1,1],[0,2],[1,2],[2,1],[0,1]]), Pending, 'Test 27');
test(tictactoe([[0,0],[1,1],[0,2],[1,0],[1,2],[2,0]]), Pending, 'Test 28');
test(tictactoe([[2,1],[0,0],[1,1],[1,0],[2,0],[1,2],[2,2],[0,1],[0,2]]), A, 'Test 29');
test(tictactoe([[1,0],[2,0],[0,0],[0,1],[1,1],[2,1],[0,2],[1,2]]), Pending, 'Test 30');
test(tictactoe([[2,0],[1,1],[0,0],[1,0],[2,1],[2,2],[1,2]]), Pending, 'Test 31');
test(tictactoe([[0,0],[1,1],[1,0],[0,2],[2,0],[2,1],[1,2]]), A, 'Test 32');
test(tictactoe([[0,0],[1,1],[2,1],[0,2],[2,0],[1,0]]), Pending, 'Test 33');
test(tictactoe([[0,0],[2,2],[0,1],[1,1],[2,0],[0,2]]), Pending, 'Test 34');
test(tictactoe([[0,2],[1,1],[2,0],[0,0],[2,2],[1,0],[2,1]]), A, 'Test 35');
test(tictactoe([[0,1],[2,0],[1,1],[0,0],[2,2],[1,2],[0,2]]), Pending, 'Test 36');
test(tictactoe([[0,0],[1,0],[0,1],[1,1],[0,2],[2,0],[2,1],[2,2]]), Pending, 'Test 37');
test(tictactoe([[0,0],[0,1],[1,1],[0,2],[2,2]]), A, 'Test 38');
test(tictactoe([[0,0],[1,0],[2,0],[1,1],[1,2],[2,2],[2,1]]), Pending, 'Test 39');
test(tictactoe([[0,2],[1,1],[0,1],[0,0],[1,0],[2,2],[1,2]]), Pending, 'Test 40');
test(tictactoe([[2,1],[1,1],[0,0],[0,1],[0,2],[2,0],[2,2],[1,0],[1,2]]), A, 'Test 41');
test(tictactoe([[0,0],[1,0],[2,0],[1,1],[0,1],[2,1],[1,2]]), Pending, 'Test 42');
test(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0],[2,1]]), Pending, 'Test 43');
test(tictactoe([[2,0],[1,1],[0,0],[2,1],[0,1],[2,2]]), Pending, 'Test 44');
test(tictactoe([[2,2],[0,0],[0,2],[2,0],[1,1],[1,0],[2,1]]), Pending, 'Test 45');
test(tictactoe([[2,0],[1,1],[0,0],[1,0],[2,2],[0,2],[2,1]]), A, 'Test 46');
test(tictactoe([[0,0],[2,0],[1,1],[1,0],[0,2],[2,1],[1,2]]), Pending, 'Test 47');
test(tictactoe([[2,2],[0,0],[1,0],[0,1],[1,1],[0,2]]), B, 'Test 48');
test(tictactoe([[0,0],[2,0],[1,0],[0,1],[2,1],[0,2],[1,1]]), Pending, 'Test 49');
test(tictactoe([[0,2],[1,1],[2,2],[1,0],[0,1],[0,0],[2,0]]), Pending, 'Test 50');
test(tictactoe([[1,1],[2,0],[0,2],[1,0],[0,0],[1,2],[2,1],[2,2]]), Pending, 'Test 51');
test(tictactoe([[1,1],[2,0],[1,0],[0,0],[1,2],[2,1],[0,1]]), A, 'Test 52');
test(tictactoe([[2,0],[1,1],[0,0],[0,2],[2,2],[1,2],[1,0]]), A, 'Test 53');
test(tictactoe([[0,1],[1,1],[2,1],[0,0],[1,0]]), Pending, 'Test 54');
test(tictactoe([[0,0],[1,1],[1,0],[0,1],[1,2],[0,2],[2,0],[2,1],[2,2]]), A, 'Test 55');
test(tictactoe([[2,0],[1,1],[0,2],[0,0],[2,2],[1,2],[1,0]]), Pending, 'Test 56');
test(tictactoe([[2,0],[1,0],[0,0],[2,1],[1,1],[0,1],[2,2]]), A, 'Test 57');
test(tictactoe([[0,0],[2,2],[1,1],[1,0],[2,1],[0,2],[2,0],[1,2],[0,1]]), A, 'Test 58');
test(tictactoe([[0,0],[1,0],[2,0],[0,1],[0,2],[1,1],[2,2]]), Pending, 'Test 59');
test(tictactoe([[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]), A, 'Test 60');
test(tictactoe([[0,1],[2,0],[1,0],[2,1],[1,1],[0,2],[2,2],[0,0]]), Pending, 'Test 61');
test(tictactoe([[1,1],[2,2],[0,0],[1,0],[2,0],[0,2],[1,2]]), Pending, 'Test 62');
test(tictactoe([[2,2],[0,2],[1,1],[2,0],[2,1]]), Pending, 'Test 63');
test(tictactoe([[1,0],[0,1],[2,0],[1,2],[0,2],[2,1],[1,1]]), A, 'Test 64');
test(tictactoe([[0,1],[1,1],[2,1],[0,0],[0,2],[2,0],[2,2]]), Pending, 'Test 65');
test(tictactoe([[0,0],[1,1],[2,2],[0,1],[0,2],[1,2],[2,1]]), Pending, 'Test 66');
test(tictactoe([[0,1],[0,0],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]), A, 'Test 67');
test(tictactoe([[0,0],[2,2],[0,1],[1,1],[2,0],[1,0],[0,2],[2,1],[1,2]]), A, 'Test 68');
test(tictactoe([[2,1],[1,1],[0,0],[0,1],[2,0],[0,2],[1,0],[2,2],[1,2]]), A, 'Test 69');
test(tictactoe([[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]), A, 'Test 70');
test(tictactoe([[0,0],[1,0],[0,1],[1,1],[0,2],[2,1],[1,2]]), A, 'Test 71');
test(tictactoe([[0,0],[1,0],[0,1],[1,1],[0,2],[2,2],[2,0],[2,1]]), Pending, 'Test 72');
test(tictactoe([[0,0],[1,0],[1,1],[2,0],[2,2],[1,2]]), Pending, 'Test 73');
test(tictactoe([[2,2],[0,0],[1,1],[2,1],[2,0],[0,1],[1,0],[1,2],[0,2]]), A, 'Test 74');
test(tictactoe([[1,0],[0,0],[2,0],[1,1],[2,2],[1,2]]), Pending, 'Test 75');
test(tictactoe([[0,2],[2,0],[1,1],[1,0],[2,1],[0,1],[2,2]]), Pending, 'Test 76');
test(tictactoe([[0,0],[0,2],[2,2],[1,0],[1,2],[2,0],[2,1],[0,1],[1,1]]), A, 'Test 77');
test(tictactoe([[0,0],[0,1],[1,1],[1,0],[2,2]]), A, 'Test 78');
test(tictactoe([[1,1],[0,0],[0,1],[0,2],[1,2],[2,0],[1,0]]), A, 'Test 79');
test(tictactoe([[1,1],[0,0],[2,0],[1,0],[2,2],[0,1],[0,2]]), A, 'Test 80');
test(tictactoe([[0,0],[1,1],[2,2],[0,1],[1,0],[0,2],[1,2],[2,1]]), B, 'Test 81');
test(tictactoe([[0,0],[1,1],[1,0],[0,1],[0,2],[2,0],[2,2],[1,2],[2,1]]), Draw, 'Test 82');
test(tictactoe([[2,0],[0,1],[1,1],[0,0],[2,2],[1,2],[2,1]]), A, 'Test 83');
test(tictactoe([[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]]), B, 'Test 84');
test(tictactoe([[0,0],[0,1],[0,2],[1,1],[1,2],[2,0],[2,2]]), A, 'Test 85');
test(tictactoe([[2,2],[0,2],[2,1],[0,1],[2,0],[0,0],[1,0],[1,1]]), B, 'Test 86');
test(tictactoe([[0,0],[1,1],[2,0],[1,0],[2,1],[0,1]]), Pending, 'Test 87');
test(tictactoe([[1,0],[0,0],[1,1],[1,2],[0,1],[2,1],[0,2]]), Pending, 'Test 88');
test(tictactoe([[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1]]), Pending, 'Test 89');
test(tictactoe([[2,2],[0,0],[1,1],[0,1],[0,2],[2,1],[2,0]]), A, 'Test 90');
test(tictactoe([[2,2],[1,1],[0,0],[1,2],[0,1],[2,1],[0,2]]), A, 'Test 91');
test(tictactoe([[2,0],[1,1],[0,2],[1,0],[0,0],[2,2],[2,1],[1,2]]), B, 'Test 92');
test(tictactoe([[0,0],[2,2],[1,1],[0,1],[0,2],[2,0],[2,1]]), Pending, 'Test 93');
test(tictactoe([[0,1],[2,2],[1,1],[0,2],[1,2],[2,0],[1,0]]), A, 'Test 94');
test(tictactoe([[0,0],[1,1],[2,2],[0,1],[2,1],[1,2]]), Pending, 'Test 95');
test(tictactoe([[0,0],[1,1],[2,2],[0,1],[1,2],[2,0],[1,0],[0,2]]), B, 'Test 96');
test(tictactoe([[0,2],[1,1],[0,1],[0,0],[2,0],[2,1],[2,2]]), Pending, 'Test 97');
test(tictactoe([[0,0],[1,1],[0,1],[1,2],[0,2],[1,0],[2,0],[2,2],[2,1]]), A, 'Test 98');
test(tictactoe([[1,1],[0,0],[2,0],[1,0],[2,2],[0,1],[2,1]]), A, 'Test 99');
test(tictactoe([[0,1],[1,1],[2,1],[0,0],[0,2]]), Pending, 'Test 100');
test(tictactoe([[0,2],[1,1],[2,0],[0,1],[1,2],[2,1]]), B, 'Test 101');
test(tictactoe([[2,0],[1,0],[1,1],[0,2],[1,2],[2,1],[0,1]]), Pending, 'Test 102');
test(tictactoe([[0,0],[0,2],[1,1],[2,2],[1,0],[2,0]]), Pending, 'Test 103');
test(tictactoe([[2,0],[0,0],[1,1],[0,1],[2,1],[0,2]]), B, 'Test 104');
test(tictactoe([[1,1],[0,0],[2,2],[1,0],[2,1],[0,2],[1,2]]), Pending, 'Test 105');
test(tictactoe([[0,0],[2,0],[0,1],[2,1],[0,2],[1,1],[2,2],[1,0],[1,2]]), A, 'Test 106');
test(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[0,2],[2,1],[2,2]]), Pending, 'Test 107');
test(tictactoe([[2,2],[1,1],[1,0],[0,0],[0,2],[2,0],[1,2]]), A, 'Test 108');
test(tictactoe([[0,0],[2,2],[1,0],[1,1],[0,1],[2,0],[1,2]]), Pending, 'Test 109');
test(tictactoe([[1,1],[0,0],[0,1],[2,2],[2,0],[2,1],[1,0]]), Pending, 'Test 110');
test(tictactoe([[0,2],[1,1],[0,1],[0,0],[2,0],[1,0],[2,2],[1,2],[2,1]]), A, 'Test 111');
test(tictactoe([[0,0],[2,0],[1,1],[0,1],[2,2],[1,0],[2,1]]), A, 'Test 112');
test(tictactoe([[0,0],[1,1],[2,2],[0,2],[1,0],[2,0],[0,1]]), Pending, 'Test 113');
test(tictactoe([[0,2],[1,1],[0,1],[1,0],[2,0],[0,0]]), Pending, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

