// Test: 3122. Minimum Number Of Operations To Satisfy Conditions
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n3122. Minimum Number Of Operations To Satisfy Conditions\n");

test(minimumOperations([[1],[2],[3]]), 2, 'Test 1');
test(minimumOperations([[1,1,1],[0,0,0]]), 3, 'Test 2');
test(minimumOperations([[0,1,2],[2,1,0],[0,1,2]]), 2, 'Test 3');
test(minimumOperations([[9,9],[9,9],[9,9]]), 3, 'Test 4');
test(minimumOperations([[0,1,2,3],[0,1,2,3],[0,1,2,3]]), 0, 'Test 5');
test(minimumOperations([[1,1],[2,2],[3,3]]), 4, 'Test 6');
test(minimumOperations([[9,9,9],[9,9,9],[9,9,9]]), 3, 'Test 7');
test(minimumOperations([[7,8,9],[7,8,9],[7,8,9],[7,8,9]]), 0, 'Test 8');
test(minimumOperations([[1,1,2,2],[2,2,1,1],[1,1,2,2]]), 6, 'Test 9');
test(minimumOperations([[5,5,5,5],[5,5,5,5],[5,5,5,5]]), 6, 'Test 10');
test(minimumOperations([[1,2,3],[3,4,5],[5,6,7]]), 6, 'Test 11');
test(minimumOperations([[1,2,3,4],[4,3,2,1],[1,2,3,4]]), 4, 'Test 12');
test(minimumOperations([[0]]), 0, 'Test 13');
test(minimumOperations([[1,2],[2,1]]), 2, 'Test 14');
test(minimumOperations([[0,1,2],[3,4,5],[6,7,8]]), 6, 'Test 15');
test(minimumOperations([[1,2],[3,4]]), 2, 'Test 16');
test(minimumOperations([[1,0,2],[1,0,2]]), 0, 'Test 17');
test(minimumOperations([[0,0,0,0],[1,1,1,1],[2,2,2,2]]), 8, 'Test 18');
test(minimumOperations([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), Error: list index out of range, 'Test 19');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0],[9,8,7,6,5,4,3,2,1,0],[0,1,0,1,0,1,0,1,0,1]]), 18, 'Test 20');
test(minimumOperations([[1,1,1],[1,1,1],[1,1,1],[1,1,1]]), 4, 'Test 21');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3,3,3]]), 24, 'Test 22');
test(minimumOperations([[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]), 12, 'Test 23');
test(minimumOperations([[9,9,9,9,9],[8,8,8,8,8],[7,7,7,7,7]]), 10, 'Test 24');
test(minimumOperations([[1,1,2,2,3,3],[1,1,2,2,3,3],[4,4,5,5,6,6],[4,4,5,5,6,6]]), 12, 'Test 25');
test(minimumOperations([[1,1,2,2,3,3],[1,1,2,2,3,3],[1,1,2,2,3,3]]), 9, 'Test 26');
test(minimumOperations([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]]), 9, 'Test 27');
test(minimumOperations([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), 6, 'Test 28');
test(minimumOperations([[0,1,2,3,4,5,6,7,8,9],[1,0,1,0,1,0,1,0,1,0],[2,1,2,1,2,1,2,1,2,1]]), 18, 'Test 29');
test(minimumOperations([[1,2,2,3],[1,2,2,3],[1,2,2,3]]), 3, 'Test 30');
test(minimumOperations([[9,9,9,9],[8,8,8,8],[7,7,7,7],[6,6,6,6]]), 12, 'Test 31');
test(minimumOperations([[1,2,1,2,1,2],[2,1,2,1,2,1],[1,2,1,2,1,2],[2,1,2,1,2,1]]), 12, 'Test 32');
test(minimumOperations([[1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0]]), 10, 'Test 33');
test(minimumOperations([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]), 0, 'Test 34');
test(minimumOperations([[1,2,3],[2,3,4],[3,4,5],[4,5,6]]), 9, 'Test 35');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0]]), 10, 'Test 36');
test(minimumOperations([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]), Error: list index out of range, 'Test 37');
test(minimumOperations([[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5]]), 12, 'Test 38');
test(minimumOperations([[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0]]), 12, 'Test 39');
test(minimumOperations([[0,0,0,0,0],[1,1,1,1,1],[2,2,2,2,2]]), 10, 'Test 40');
test(minimumOperations([[0,0,0,0,0],[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3]]), 15, 'Test 41');
test(minimumOperations([[1,0,1,0,1,0,1,0,1,0],[1,0,1,0,1,0,1,0,1,0]]), 0, 'Test 42');
test(minimumOperations([[1,2,1,2,1],[2,1,2,1,2],[1,2,1,2,1]]), 5, 'Test 43');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0],[9,8,7,6,5,4,3,2,1,0],[1,2,3,4,5,6,7,8,9,0],[0,9,8,7,6,5,4,3,2,1]]), 18, 'Test 44');
test(minimumOperations([[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0]]), 16, 'Test 45');
test(minimumOperations([[0,1,0,1,0,1,0,1,0,1],[0,1,0,1,0,1,0,1,0,1]]), 0, 'Test 46');
test(minimumOperations([[0,1,2,3,4],[5,6,7,8,9],[0,1,2,3,4]]), 5, 'Test 47');
test(minimumOperations([[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]]), 5, 'Test 48');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]]), Error: list index out of range, 'Test 49');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4,4]]), 30, 'Test 50');
test(minimumOperations([[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0]]), 6, 'Test 51');
test(minimumOperations([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]]), 10, 'Test 52');
test(minimumOperations([[1,0,1,0,1,0,1],[0,1,0,1,0,1,0],[1,0,1,0,1,0,1],[0,1,0,1,0,1,0]]), 14, 'Test 53');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]]), 15, 'Test 54');
test(minimumOperations([[1,1,2,2,3],[1,1,2,2,3],[1,1,2,2,3],[1,1,2,2,3]]), 8, 'Test 55');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0],[0,1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1,0]]), 18, 'Test 56');
test(minimumOperations([[1,1,2,3,4,5,6,7,8,9],[1,1,2,3,4,5,6,7,8,9],[1,1,2,3,4,5,6,7,8,9]]), 3, 'Test 57');
test(minimumOperations([[1,1,2,2,3,3,4,4,5,5],[1,1,2,2,3,3,4,4,5,5],[1,1,2,2,3,3,4,4,5,5]]), 15, 'Test 58');
test(minimumOperations([[9,8,7],[6,5,4],[3,2,1],[0,9,8],[7,6,5]]), 12, 'Test 59');
test(minimumOperations([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]), 0, 'Test 60');
test(minimumOperations([[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]), 0, 'Test 61');
test(minimumOperations([[9,9,9,9],[8,8,8,8],[7,7,7,7]]), 8, 'Test 62');
test(minimumOperations([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3]]), 10, 'Test 63');
test(minimumOperations([[9,8,7,6],[9,8,7,6],[9,8,7,6]]), 0, 'Test 64');
test(minimumOperations([[1,1,1,2,2,2],[3,3,3,4,4,4],[5,5,5,6,6,6]]), 12, 'Test 65');
test(minimumOperations([[1,1,1,1],[2,2,2,2],[3,3,3,3],[1,1,1,1]]), 10, 'Test 66');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0],[0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1]]), 20, 'Test 67');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0]]), 0, 'Test 68');
test(minimumOperations([[1,2,3,4,5],[5,4,3,2,1],[1,2,3,4,5],[5,4,3,2,1]]), 8, 'Test 69');
test(minimumOperations([[1,2,1,2,1,2,1,2,1,2],[2,1,2,1,2,1,2,1,2,1],[1,2,1,2,1,2,1,2,1,2]]), 10, 'Test 70');
test(minimumOperations([[9,8,7,6,5],[4,3,2,1,0],[9,8,7,6,5]]), 5, 'Test 71');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0],[9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]]), 16, 'Test 72');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[1,2,1,2,1,2,1,2,1,2]]), 5, 'Test 73');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]]), 20, 'Test 74');
test(minimumOperations([[4,3,2,1],[4,3,2,1],[4,3,2,1],[4,3,2,1]]), 0, 'Test 75');
test(minimumOperations([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]), 10, 'Test 76');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]]), 32, 'Test 77');
test(minimumOperations([[1,1,2,2,1,1],[2,2,1,1,2,2],[1,1,2,2,1,1]]), 9, 'Test 78');
test(minimumOperations([[1,1,1,2,2,2],[1,1,1,2,2,2],[1,1,1,2,2,2]]), 6, 'Test 79');
test(minimumOperations([[1,1,1,1,1,1],[1,2,1,2,1,2],[2,2,2,2,2,2],[2,1,2,1,2,1],[1,1,1,1,1,1]]), 15, 'Test 80');
test(minimumOperations([[0,1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1,0],[0,1,2,3,4,5,6,7,8,9]]), 10, 'Test 81');
test(minimumOperations([[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]]), 12, 'Test 82');
test(minimumOperations([[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0]]), 10, 'Test 83');
test(minimumOperations([[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]), 15, 'Test 84');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0],[0,9,8,7,6,5,4,3,2,1],[1,0,1,0,1,0,1,0,1,0]]), 18, 'Test 85');
test(minimumOperations([[0,0,0,0,0],[0,1,0,1,0],[0,0,0,0,0],[0,1,0,1,0]]), 4, 'Test 86');
test(minimumOperations([[1,1,1,1],[2,2,2,2],[3,3,3,3]]), 8, 'Test 87');
test(minimumOperations([[1,2,3,4,5],[5,4,3,2,1],[1,3,2,4,5]]), 6, 'Test 88');
test(minimumOperations([[1,1,1,1,1,1,1],[2,2,2,2,2,2,2],[3,3,3,3,3,3,3],[4,4,4,4,4,4,4]]), 21, 'Test 89');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3]]), 20, 'Test 90');
test(minimumOperations([[5,5,5],[5,5,5],[5,5,5],[5,5,5],[5,5,5]]), 5, 'Test 91');
test(minimumOperations([[1,0,0,0,1],[0,1,1,1,0],[0,1,1,1,0],[1,0,0,0,1]]), 10, 'Test 92');
test(minimumOperations([[1,2,2,3,3,4,4,5,5,6],[1,2,2,3,3,4,4,5,5,6],[1,2,2,3,3,4,4,5,5,6]]), 12, 'Test 93');
test(minimumOperations([[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1]]), 10, 'Test 94');
test(minimumOperations([[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]), 0, 'Test 95');
test(minimumOperations([[3,3,3,3,3,3,3],[2,2,2,2,2,2,2],[1,1,1,1,1,1,1]]), 14, 'Test 96');
test(minimumOperations([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9]]), 8, 'Test 97');
test(minimumOperations([[1,2,1,2,1],[2,1,2,1,2],[1,2,1,2,1],[2,1,2,1,2]]), 10, 'Test 98');
test(minimumOperations([[5,4,3,2,1],[5,4,3,2,1],[5,4,3,2,1],[5,4,3,2,1],[5,4,3,2,1]]), 0, 'Test 99');
test(minimumOperations([[1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9]]), 8, 'Test 100');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0],[0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]]), 20, 'Test 101');
test(minimumOperations([[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0]]), 10, 'Test 102');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]]), 32, 'Test 103');
test(minimumOperations([[1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,1]]), 20, 'Test 104');
test(minimumOperations([[0,0,0,0],[0,0,0,0],[0,0,0,0]]), 6, 'Test 105');
test(minimumOperations([[0,0,1,1,2,2,3,3],[0,0,1,1,2,2,3,3],[0,0,1,1,2,2,3,3]]), 12, 'Test 106');
test(minimumOperations([[9,8,7,6,5],[5,4,3,2,1],[1,2,3,4,5]]), 8, 'Test 107');
test(minimumOperations([[1,2,3],[2,3,4],[3,4,5],[4,5,6],[5,6,7],[6,7,8],[7,8,9]]), 18, 'Test 108');
test(minimumOperations([[9,8,7,6,5,4,3,2,1,0],[9,8,7,6,5,4,3,2,1,0]]), 0, 'Test 109');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,0],[0,9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9,0],[0,9,8,7,6,5,4,3,2,1]]), 20, 'Test 110');
test(minimumOperations([[9,8,7,6,5,4,3,2,1,0],[9,8,7,6,5,4,3,2,1,0],[9,8,7,6,5,4,3,2,1,0]]), 0, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

