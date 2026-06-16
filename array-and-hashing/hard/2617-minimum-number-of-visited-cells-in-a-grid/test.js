// Test: 2617. Minimum Number Of Visited Cells In A Grid
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { minimumVisitedCells } = require("./solution");

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

console.log("\n2617. Minimum Number Of Visited Cells In A Grid\n");

test(minimumVisitedCells([[2,0,0],[1,3,1],[0,1,0]]), 5, 'Test 1');
test(minimumVisitedCells([[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]), -1, 'Test 2');
test(minimumVisitedCells([[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]]), 4, 'Test 3');
test(minimumVisitedCells([[3,4,2,1],[4,2,1,1],[2,1,1,0],[3,4,1,0]]), 3, 'Test 4');
test(minimumVisitedCells([[0,0],[0,0]]), -1, 'Test 5');
test(minimumVisitedCells([[1,1,1],[1,1,1],[1,1,0]]), 5, 'Test 6');
test(minimumVisitedCells([[2,1,0],[1,0,0]]), -1, 'Test 7');
test(minimumVisitedCells([[0]]), 1, 'Test 8');
test(minimumVisitedCells([[1,2,3],[4,5,6],[7,8,9]]), 4, 'Test 9');
test(minimumVisitedCells([[0,0,0],[0,0,0],[0,0,0]]), -1, 'Test 10');
test(minimumVisitedCells([[1,0],[0,0]]), -1, 'Test 11');
test(minimumVisitedCells([[1, 2, 3, 4, 5], [2, 3, 4, 5, 0], [3, 4, 5, 0, 0], [4, 5, 0, 0, 0], [5, 0, 0, 0, 0]]), 5, 'Test 12');
test(minimumVisitedCells([[3,2,1,4,0],[4,1,2,3,1],[2,3,0,1,0],[3,0,2,0,1],[0,0,0,0,0]]), 5, 'Test 13');
test(minimumVisitedCells([[2, 0, 0], [0, 2, 0], [0, 0, 0]]), -1, 'Test 14');
test(minimumVisitedCells([[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,0]]), -1, 'Test 15');
test(minimumVisitedCells([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0]]), -1, 'Test 16');
test(minimumVisitedCells([[2,1,0,0,0],[0,0,3,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 17');
test(minimumVisitedCells([[2,2,2,2,2],[2,1,1,1,2],[2,1,0,1,2],[2,1,1,1,2],[2,2,2,2,0]]), 5, 'Test 18');
test(minimumVisitedCells([[2, 2, 1, 1], [1, 2, 2, 1], [1, 1, 2, 2], [1, 1, 1, 0]]), 5, 'Test 19');
test(minimumVisitedCells([[2,2,0,0],[2,2,0,0],[0,0,3,0],[0,0,0,3],[0,0,0,0]]), -1, 'Test 20');
test(minimumVisitedCells([[1,2,3],[4,5,6],[7,8,0]]), 4, 'Test 21');
test(minimumVisitedCells([[3,0,0,0],[0,3,0,0],[0,0,3,0],[0,0,0,3]]), -1, 'Test 22');
test(minimumVisitedCells([[3, 3, 3, 3], [3, 3, 3, 3], [3, 3, 3, 3], [3, 3, 3, 0]]), 3, 'Test 23');
test(minimumVisitedCells([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9],[9,7,5,3,1],[0,0,0,0,0]]), 5, 'Test 24');
test(minimumVisitedCells([[2,3,0,0,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 25');
test(minimumVisitedCells([[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,0]]), -1, 'Test 26');
test(minimumVisitedCells([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,0]]), 9, 'Test 27');
test(minimumVisitedCells([[0,1,2,3,4],[1,0,1,2,3],[2,1,0,1,2],[3,2,1,0,1],[4,3,2,1,0]]), -1, 'Test 28');
test(minimumVisitedCells([[3,3,3,3,3,3],[3,3,3,3,3,3],[3,3,3,3,3,3],[3,3,3,3,3,3],[3,3,3,3,3,3],[3,3,3,3,3,0]]), 5, 'Test 29');
test(minimumVisitedCells([[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,0]]), 4, 'Test 30');
test(minimumVisitedCells([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]), -1, 'Test 31');
test(minimumVisitedCells([[3,3,0,2,1,1],[2,2,0,1,1,0],[1,1,0,0,0,0],[1,1,0,0,0,0],[0,0,0,0,0,0]]), -1, 'Test 32');
test(minimumVisitedCells([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[0,0,0,0,0,0]]), 11, 'Test 33');
test(minimumVisitedCells([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 0]]), 4, 'Test 34');
test(minimumVisitedCells([[1,2,3,4,5],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[5,4,3,2,0]]), 5, 'Test 35');
test(minimumVisitedCells([[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,0]]), 5, 'Test 36');
test(minimumVisitedCells([[3,0,0,1],[0,0,0,1],[1,0,0,1],[1,1,1,0]]), 5, 'Test 37');
test(minimumVisitedCells([[5,0,0,0,0],[4,0,0,0,0],[3,0,0,0,0],[2,0,0,0,0],[1,0,0,0,0]]), -1, 'Test 38');
test(minimumVisitedCells([[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,0]]), 13, 'Test 39');
test(minimumVisitedCells([[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]), -1, 'Test 40');
test(minimumVisitedCells([[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,0]]), -1, 'Test 41');
test(minimumVisitedCells([[1,2,3,4,5],[2,3,4,5,6],[3,4,5,6,7],[4,5,6,7,8],[5,6,7,8,0]]), 5, 'Test 42');
test(minimumVisitedCells([[1,2,3,4],[4,3,2,1],[2,1,4,3],[3,4,1,0]]), 4, 'Test 43');
test(minimumVisitedCells([[3,2,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,0]]), 7, 'Test 44');
test(minimumVisitedCells([[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0]]), 11, 'Test 45');
test(minimumVisitedCells([[2,1,0,0],[0,2,1,0],[1,0,2,0],[0,0,0,0]]), -1, 'Test 46');
test(minimumVisitedCells([[3,0,2,1,1],[0,0,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[1,1,1,1,0]]), -1, 'Test 47');
test(minimumVisitedCells([[0, 1, 2, 3], [1, 2, 3, 0], [2, 3, 0, 0], [3, 0, 0, 0]]), -1, 'Test 48');
test(minimumVisitedCells([[5,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]), -1, 'Test 49');
test(minimumVisitedCells([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,0]]), 7, 'Test 50');
test(minimumVisitedCells([[2,0,0,0,0],[0,2,0,0,0],[0,0,2,0,0],[0,0,0,2,0],[0,0,0,0,0]]), -1, 'Test 51');
test(minimumVisitedCells([[2,3,1,1,4],[2,2,2,2,2],[1,1,2,1,2],[2,2,2,2,2],[0,0,0,0,0]]), 4, 'Test 52');
test(minimumVisitedCells([[2,3,0,0,0],[1,1,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 53');
test(minimumVisitedCells([[4,3,2,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 54');
test(minimumVisitedCells([[3,1,0,2,0],[0,1,1,0,0],[0,0,0,1,1],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 55');
test(minimumVisitedCells([[0,1,2,3,4,5],[1,2,3,4,5,0],[2,3,4,5,0,5],[3,4,5,0,5,4],[4,5,0,5,4,3],[5,0,5,4,3,0]]), -1, 'Test 56');
test(minimumVisitedCells([[3, 2, 1, 0], [2, 2, 2, 2], [1, 2, 2, 2], [0, 2, 2, 0]]), 5, 'Test 57');
test(minimumVisitedCells([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]]), 7, 'Test 58');
test(minimumVisitedCells([[2,3,1,1,1],[1,2,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,0]]), 7, 'Test 59');
test(minimumVisitedCells([[5,4,3,2,1,0],[4,3,2,1,0,0],[3,2,1,0,0,0],[2,1,0,0,0,0],[1,0,0,0,0,0]]), -1, 'Test 60');
test(minimumVisitedCells([[1,3,1,3,1,3],[3,1,3,1,3,1],[1,3,1,3,1,0],[3,1,3,1,3,1],[1,3,1,3,1,1]]), 6, 'Test 61');
test(minimumVisitedCells([[1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0]]), 19, 'Test 62');
test(minimumVisitedCells([[5,3,2,1],[2,2,2,1],[1,1,1,1],[0,0,0,0]]), 5, 'Test 63');
test(minimumVisitedCells([[10,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 64');
test(minimumVisitedCells([[3,2,2,1],[1,2,3,4],[2,3,1,1],[1,1,1,0]]), 4, 'Test 65');
test(minimumVisitedCells([[3,1,2,1,1],[2,2,1,1,2],[1,1,2,1,1],[1,2,1,2,1],[0,0,0,0,0]]), 6, 'Test 66');
test(minimumVisitedCells([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0]]), 11, 'Test 67');
test(minimumVisitedCells([[2,0,2,0,1,0],[0,2,0,2,0,2],[2,0,2,0,2,0],[0,2,0,2,0,2],[1,0,1,0,1,0],[0,0,0,0,0,0]]), -1, 'Test 68');
test(minimumVisitedCells([[0, 2, 2], [2, 0, 2], [2, 2, 0]]), -1, 'Test 69');
test(minimumVisitedCells([[5,4,3,2,1],[4,3,2,1,0],[3,2,1,0,0],[2,1,0,0,0],[1,0,0,0,0]]), -1, 'Test 70');
test(minimumVisitedCells([[2,0,0,0,0,0],[0,2,0,0,0,0],[0,0,2,0,0,0],[0,0,0,2,0,0],[0,0,0,0,2,0],[0,0,0,0,0,0]]), -1, 'Test 71');
test(minimumVisitedCells([[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 0]]), 3, 'Test 72');
test(minimumVisitedCells([[4, 3, 2, 1, 0], [3, 3, 3, 3, 3], [2, 3, 2, 3, 2], [1, 3, 2, 3, 1], [0, 3, 2, 3, 0]]), 5, 'Test 73');
test(minimumVisitedCells([[4,4,4,4,4],[4,4,4,4,4],[4,4,4,4,4],[4,4,4,4,4],[4,4,4,4,0]]), 3, 'Test 74');
test(minimumVisitedCells([[2,2,2,2],[2,0,0,2],[2,0,0,2],[2,2,2,0]]), 5, 'Test 75');
test(minimumVisitedCells([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[0,0,0,0,0]]), 9, 'Test 76');
test(minimumVisitedCells([[3,1,2,3,2],[1,1,1,1,1],[2,1,2,1,2],[1,2,1,2,1],[2,1,1,1,0]]), 5, 'Test 77');
test(minimumVisitedCells([[1,1,1,1,1,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,1,1,1,1,0]]), 11, 'Test 78');
test(minimumVisitedCells([[4,4,4,4],[4,4,4,4],[4,4,4,4],[4,4,4,0]]), 3, 'Test 79');
test(minimumVisitedCells([[2,3,3,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]]), 12, 'Test 80');
test(minimumVisitedCells([[2,2,1,2],[2,2,2,1],[1,2,2,2],[2,1,1,0]]), 5, 'Test 81');
test(minimumVisitedCells([[3, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 3]]), -1, 'Test 82');
test(minimumVisitedCells([[3,2,1,1,2],[2,2,3,1,1],[1,3,2,1,1],[1,1,1,2,3],[1,1,1,1,0]]), 6, 'Test 83');
test(minimumVisitedCells([[3,2,1,0],[2,3,1,0],[1,1,0,0],[0,0,0,0]]), -1, 'Test 84');
test(minimumVisitedCells([[5,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 85');
test(minimumVisitedCells([[2, 1, 1, 1], [1, 1, 2, 1], [1, 2, 1, 1], [1, 1, 1, 2]]), 5, 'Test 86');
test(minimumVisitedCells([[2,1,2,1,2],[1,2,1,2,1],[2,1,2,1,2],[1,2,1,2,1],[0,0,0,0,0]]), 5, 'Test 87');
test(minimumVisitedCells([[1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]), -1, 'Test 88');
test(minimumVisitedCells([[2,3,4,5,6],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), 4, 'Test 89');
test(minimumVisitedCells([[2,0,3,0,0],[1,0,0,0,4],[0,0,0,0,0],[3,0,0,0,2],[0,0,0,0,0]]), -1, 'Test 90');
test(minimumVisitedCells([[4, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]), -1, 'Test 91');
test(minimumVisitedCells([[1, 2, 3, 4], [2, 3, 4, 3], [3, 4, 3, 2], [4, 3, 2, 1]]), 4, 'Test 92');
test(minimumVisitedCells([[2,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 93');
test(minimumVisitedCells([[3,3,3],[3,0,0],[3,0,0]]), 3, 'Test 94');
test(minimumVisitedCells([[5,5,5,5,5],[5,0,0,0,0],[5,0,0,0,0],[5,0,0,0,0],[5,0,0,0,0]]), 3, 'Test 95');
test(minimumVisitedCells([[3,2,1,4,0,0,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]), -1, 'Test 96');
test(minimumVisitedCells([[3,2,1,0,0],[2,2,0,1,0],[0,1,0,2,3],[1,0,0,0,4],[0,0,0,0,0]]), 7, 'Test 97');
test(minimumVisitedCells([[1, 1, 1], [1, 0, 0], [1, 0, 0]]), -1, 'Test 98');
test(minimumVisitedCells([[4,2,0,0,0],[2,2,2,0,0],[0,2,2,2,0],[0,0,2,2,2],[0,0,0,2,0]]), 6, 'Test 99');
test(minimumVisitedCells([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]), -1, 'Test 100');
test(minimumVisitedCells([[2, 1, 2], [1, 2, 1], [2, 1, 0]]), 3, 'Test 101');
test(minimumVisitedCells([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), -1, 'Test 102');
test(minimumVisitedCells([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0]]), 9, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

