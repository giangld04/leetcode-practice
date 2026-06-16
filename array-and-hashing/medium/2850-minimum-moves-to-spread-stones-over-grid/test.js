// Test: 2850. Minimum Moves To Spread Stones Over Grid
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { minimumMoves } = require("./solution");

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

console.log("\n2850. Minimum Moves To Spread Stones Over Grid\n");

test(minimumMoves([[2,2,1],[1,1,1],[1,1,1]]), 0, 'Test 1');
test(minimumMoves([[0,0,9],[0,0,0],[0,0,0]]), 18, 'Test 2');
test(minimumMoves([[2,2,1],[1,1,1],[1,1,2]]), 0, 'Test 3');
test(minimumMoves([[1,3,0],[1,0,0],[1,0,3]]), 4, 'Test 4');
test(minimumMoves([[1,1,1],[1,1,1],[1,1,1]]), 0, 'Test 5');
test(minimumMoves([[2,0,0],[0,0,0],[0,0,1]]), Execution timed out, 'Test 6');
test(minimumMoves([[1,2,1],[2,1,2],[1,2,1]]), 0, 'Test 7');
test(minimumMoves([[1,1,1],[1,2,2],[2,2,1]]), 0, 'Test 8');
test(minimumMoves([[1,2,2],[2,1,1],[2,1,1]]), 0, 'Test 9');
test(minimumMoves([[0,0,2],[0,0,1],[1,1,1]]), Execution timed out, 'Test 10');
test(minimumMoves([[1,1,1],[1,0,1],[1,1,1]]), Execution timed out, 'Test 11');
test(minimumMoves([[2,0,1],[0,1,0],[1,0,2]]), Execution timed out, 'Test 12');
test(minimumMoves([[1,0,0],[0,0,0],[0,0,1]]), Execution timed out, 'Test 13');
test(minimumMoves([[3,0,0],[0,3,0],[0,0,3]]), 8, 'Test 14');
test(minimumMoves([[3,0,0],[0,0,0],[0,0,3]]), Execution timed out, 'Test 15');
test(minimumMoves([[1,1,0],[1,1,1],[1,2,1]]), 3, 'Test 16');
test(minimumMoves([[0,0,0],[0,0,0],[3,3,0]]), Execution timed out, 'Test 17');
test(minimumMoves([[0,0,0],[0,9,0],[0,0,0]]), 12, 'Test 18');
test(minimumMoves([[2,1,0],[0,1,1],[1,0,2]]), Execution timed out, 'Test 19');
test(minimumMoves([[1,1,1],[1,2,1],[1,1,1]]), 0, 'Test 20');
test(minimumMoves([[3,1,1],[0,0,0],[1,1,3]]), 4, 'Test 21');
test(minimumMoves([[0,1,1],[1,1,1],[1,1,0]]), Execution timed out, 'Test 22');
test(minimumMoves([[2,0,0],[0,1,0],[0,0,2]]), Execution timed out, 'Test 23');
test(minimumMoves([[1,2,1],[1,0,1],[1,1,0]]), Execution timed out, 'Test 24');
test(minimumMoves([[1,0,1],[0,1,0],[1,0,1]]), Execution timed out, 'Test 25');
test(minimumMoves([[0,2,0],[1,1,0],[0,0,2]]), Execution timed out, 'Test 26');
test(minimumMoves([[0,2,0],[2,0,2],[0,2,0]]), Execution timed out, 'Test 27');
test(minimumMoves([[0,2,1],[0,1,0],[2,0,0]]), Execution timed out, 'Test 28');
test(minimumMoves([[0,1,2],[0,0,0],[2,1,0]]), Execution timed out, 'Test 29');
test(minimumMoves([[1,0,2],[0,0,0],[2,0,1]]), Execution timed out, 'Test 30');
test(minimumMoves([[0,2,0],[1,1,0],[2,0,0]]), Execution timed out, 'Test 31');
test(minimumMoves([[0,2,0],[1,0,1],[0,2,0]]), Execution timed out, 'Test 32');
test(minimumMoves([[2,0,0],[0,0,2],[0,2,0]]), Execution timed out, 'Test 33');
test(minimumMoves([[2,2,0],[0,1,0],[0,0,2]]), Execution timed out, 'Test 34');
test(minimumMoves([[1,1,1],[1,1,0],[1,1,1]]), Execution timed out, 'Test 35');
test(minimumMoves([[0,0,0],[0,0,0],[0,0,9]]), 18, 'Test 36');
test(minimumMoves([[1,0,0],[0,0,0],[0,0,8]]), 14, 'Test 37');
test(minimumMoves([[2,2,0],[1,0,2],[0,1,1]]), 4, 'Test 38');
test(minimumMoves([[0,1,0],[1,0,1],[0,1,0]]), Execution timed out, 'Test 39');
test(minimumMoves([[0,1,1],[1,0,1],[1,1,0]]), Execution timed out, 'Test 40');
test(minimumMoves([[0,1,0],[1,0,0],[0,0,7]]), 12, 'Test 41');
test(minimumMoves([[0,1,2],[3,0,0],[0,0,3]]), 6, 'Test 42');
test(minimumMoves([[1,2,3],[0,0,0],[0,0,0]]), Execution timed out, 'Test 43');
test(minimumMoves([[1,1,1],[1,1,0],[0,1,1]]), Execution timed out, 'Test 44');
test(minimumMoves([[1,0,2],[1,0,1],[2,0,0]]), Execution timed out, 'Test 45');
test(minimumMoves([[1,0,0],[0,1,0],[0,0,1]]), Execution timed out, 'Test 46');
test(minimumMoves([[1,1,0],[1,1,0],[1,1,2]]), Execution timed out, 'Test 47');
test(minimumMoves([[0,0,0],[0,0,2],[0,0,7]]), 16, 'Test 48');
test(minimumMoves([[1,0,1],[0,0,0],[0,1,0]]), Execution timed out, 'Test 49');
test(minimumMoves([[0,0,2],[0,1,1],[2,0,0]]), Execution timed out, 'Test 50');
test(minimumMoves([[0,1,2],[2,0,1],[1,2,0]]), 4, 'Test 51');
test(minimumMoves([[2,0,0],[1,2,1],[0,1,0]]), Execution timed out, 'Test 52');
test(minimumMoves([[2,1,0],[1,1,1],[0,1,2]]), 4, 'Test 53');
test(minimumMoves([[1,0,0],[0,0,1],[0,0,1]]), Execution timed out, 'Test 54');
test(minimumMoves([[1,1,0],[0,1,0],[0,1,1]]), Execution timed out, 'Test 55');
test(minimumMoves([[0,3,0],[1,0,1],[0,1,0]]), Execution timed out, 'Test 56');
test(minimumMoves([[2,0,1],[1,0,3],[0,3,0]]), 4, 'Test 57');
test(minimumMoves([[2,0,1],[0,2,0],[0,1,2]]), Execution timed out, 'Test 58');
test(minimumMoves([[1,0,2],[0,2,0],[2,0,1]]), Execution timed out, 'Test 59');
test(minimumMoves([[1,0,1],[0,2,0],[1,0,1]]), Execution timed out, 'Test 60');
test(minimumMoves([[1,0,0],[0,0,1],[1,0,0]]), Execution timed out, 'Test 61');
test(minimumMoves([[0,3,0],[0,0,0],[0,0,3]]), Execution timed out, 'Test 62');
test(minimumMoves([[1,0,0],[2,0,1],[0,2,1]]), Execution timed out, 'Test 63');
test(minimumMoves([[1,0,2],[1,1,1],[1,0,1]]), Execution timed out, 'Test 64');
test(minimumMoves([[4,0,1],[0,0,0],[1,0,3]]), 6, 'Test 65');
test(minimumMoves([[1,1,0],[0,0,0],[0,0,1]]), Execution timed out, 'Test 66');
test(minimumMoves([[1,0,2],[2,0,0],[0,1,3]]), 5, 'Test 67');
test(minimumMoves([[3,0,0],[0,0,0],[0,3,0]]), Execution timed out, 'Test 68');
test(minimumMoves([[0,0,2],[1,1,1],[0,2,0]]), Execution timed out, 'Test 69');
test(minimumMoves([[0,0,1],[2,1,2],[1,0,0]]), Execution timed out, 'Test 70');
test(minimumMoves([[2,1,0],[1,2,1],[0,1,2]]), 4, 'Test 71');
test(minimumMoves([[2,0,1],[0,0,0],[1,0,2]]), Execution timed out, 'Test 72');
test(minimumMoves([[2,0,1],[0,2,0],[1,0,2]]), Execution timed out, 'Test 73');
test(minimumMoves([[0,2,0],[3,0,0],[0,1,3]]), 6, 'Test 74');
test(minimumMoves([[0,1,1],[1,2,1],[1,1,0]]), Execution timed out, 'Test 75');
test(minimumMoves([[0,0,0],[0,1,2],[3,0,0]]), Execution timed out, 'Test 76');
test(minimumMoves([[3,0,0],[0,0,3],[0,3,0]]), 6, 'Test 77');
test(minimumMoves([[0,0,0],[2,1,0],[0,0,2]]), Execution timed out, 'Test 78');
test(minimumMoves([[0,2,1],[0,1,0],[1,0,2]]), Execution timed out, 'Test 79');
test(minimumMoves([[2,0,1],[1,0,2],[0,1,0]]), Execution timed out, 'Test 80');
test(minimumMoves([[0,1,1],[2,0,0],[1,0,2]]), Execution timed out, 'Test 81');
test(minimumMoves([[0,0,1],[1,7,0],[0,0,1]]), 7, 'Test 82');
test(minimumMoves([[2,2,2],[1,1,1],[0,0,0]]), 6, 'Test 83');
test(minimumMoves([[0,0,0],[0,2,1],[1,2,0]]), Execution timed out, 'Test 84');
test(minimumMoves([[0,0,0],[0,3,0],[0,0,0]]), Execution timed out, 'Test 85');
test(minimumMoves([[0,3,0],[0,0,0],[0,3,0]]), Execution timed out, 'Test 86');
test(minimumMoves([[1,1,0],[0,0,0],[0,0,7]]), 11, 'Test 87');
test(minimumMoves([[1,0,2],[0,1,1],[2,0,0]]), Execution timed out, 'Test 88');
test(minimumMoves([[1,2,0],[0,1,2],[2,0,1]]), 4, 'Test 89');
test(minimumMoves([[3,0,0],[0,0,3],[0,0,0]]), Execution timed out, 'Test 90');
test(minimumMoves([[1,1,0],[2,1,1],[1,0,1]]), Execution timed out, 'Test 91');
test(minimumMoves([[1,0,1],[1,0,0],[0,1,2]]), Execution timed out, 'Test 92');
test(minimumMoves([[0,0,3],[0,0,0],[3,0,0]]), Execution timed out, 'Test 93');
test(minimumMoves([[0,3,1],[0,0,0],[2,0,0]]), Execution timed out, 'Test 94');
test(minimumMoves([[0,2,0],[1,0,3],[0,4,0]]), 5, 'Test 95');
test(minimumMoves([[0,0,3],[1,1,0],[2,0,0]]), Execution timed out, 'Test 96');
test(minimumMoves([[3,1,0],[0,0,0],[0,1,3]]), Execution timed out, 'Test 97');
test(minimumMoves([[0,0,2],[0,1,0],[2,0,0]]), Execution timed out, 'Test 98');
test(minimumMoves([[0,0,0],[1,1,1],[2,2,2]]), 6, 'Test 99');
test(minimumMoves([[0,0,0],[0,8,1],[0,0,0]]), 11, 'Test 100');
test(minimumMoves([[0,0,0],[0,0,3],[3,0,0]]), Execution timed out, 'Test 101');
test(minimumMoves([[0,1,0],[0,7,0],[0,1,0]]), 10, 'Test 102');
test(minimumMoves([[1,2,0],[2,0,1],[0,3,0]]), 4, 'Test 103');
test(minimumMoves([[0,0,2],[3,0,0],[0,1,0]]), Execution timed out, 'Test 104');
test(minimumMoves([[1,2,2],[2,1,1],[1,1,1]]), 0, 'Test 105');
test(minimumMoves([[2,2,0],[1,1,0],[0,0,3]]), 5, 'Test 106');
test(minimumMoves([[2,1,0],[0,2,0],[0,0,1]]), Execution timed out, 'Test 107');
test(minimumMoves([[1,0,1],[0,0,0],[1,2,1]]), Execution timed out, 'Test 108');
test(minimumMoves([[1,1,0],[0,0,1],[0,1,1]]), Execution timed out, 'Test 109');
test(minimumMoves([[2,2,1],[1,0,1],[1,1,2]]), 1, 'Test 110');
test(minimumMoves([[0,3,1],[2,0,1],[0,1,0]]), Execution timed out, 'Test 111');
test(minimumMoves([[0,2,0],[1,0,0],[0,0,2]]), Execution timed out, 'Test 112');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

