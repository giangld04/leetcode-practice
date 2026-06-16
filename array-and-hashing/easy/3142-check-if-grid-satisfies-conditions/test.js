// Test: 3142. Check If Grid Satisfies Conditions
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { satisfiesConditions } = require("./solution");

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

console.log("\n3142. Check If Grid Satisfies Conditions\n");

test(satisfiesConditions([[1],[2],[3]]), false, 'Test 1');
test(satisfiesConditions([[5,4,3],[5,4,3],[5,4,3]]), true, 'Test 2');
test(satisfiesConditions([[5,4,3,2,1],[5,4,3,2,1]]), true, 'Test 3');
test(satisfiesConditions([[5,4],[5,3]]), false, 'Test 4');
test(satisfiesConditions([[1,1,1],[0,0,0]]), false, 'Test 5');
test(satisfiesConditions([[9,8],[9,8],[9,8],[9,8]]), true, 'Test 6');
test(satisfiesConditions([[0,1,2,3],[0,1,2,3],[0,1,2,3]]), true, 'Test 7');
test(satisfiesConditions([[6]]), true, 'Test 8');
test(satisfiesConditions([[8,8],[8,8]]), false, 'Test 9');
test(satisfiesConditions([[7]]), true, 'Test 10');
test(satisfiesConditions([[7,8,9],[7,8,9],[7,8,9]]), true, 'Test 11');
test(satisfiesConditions([[9,8,7],[9,8,7],[9,8,7],[9,8,7]]), true, 'Test 12');
test(satisfiesConditions([[1,2],[1,2],[1,2]]), true, 'Test 13');
test(satisfiesConditions([[0,0],[1,1],[2,2]]), false, 'Test 14');
test(satisfiesConditions([[0,1,0],[0,1,0]]), true, 'Test 15');
test(satisfiesConditions([[6],[6]]), true, 'Test 16');
test(satisfiesConditions([[1,1],[1,1],[1,1]]), false, 'Test 17');
test(satisfiesConditions([[4,4],[5,5],[4,4]]), false, 'Test 18');
test(satisfiesConditions([[9,8],[9,8],[9,7]]), false, 'Test 19');
test(satisfiesConditions([[1,2],[3,4],[1,2]]), false, 'Test 20');
test(satisfiesConditions([[0,1,2,3],[0,1,2,3]]), true, 'Test 21');
test(satisfiesConditions([[1,0,2],[1,0,2]]), true, 'Test 22');
test(satisfiesConditions([[6,5],[6,4],[6,3]]), false, 'Test 23');
test(satisfiesConditions([[1,2],[1,3]]), false, 'Test 24');
test(satisfiesConditions([[0,1,2],[0,1,2],[0,1,3]]), false, 'Test 25');
test(satisfiesConditions([[1,1],[2,2],[3,3],[4,4],[5,5]]), false, 'Test 26');
test(satisfiesConditions([[7,8,9,0],[7,8,9,0],[7,8,9,0],[7,8,9,0]]), true, 'Test 27');
test(satisfiesConditions([[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]), false, 'Test 28');
test(satisfiesConditions([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]), true, 'Test 29');
test(satisfiesConditions([[1,0,1],[0,1,0],[1,0,1]]), false, 'Test 30');
test(satisfiesConditions([[4,5,6,7,8],[4,5,6,7,9]]), false, 'Test 31');
test(satisfiesConditions([[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]), true, 'Test 32');
test(satisfiesConditions([[2, 3, 2], [2, 3, 2], [2, 3, 2]]), true, 'Test 33');
test(satisfiesConditions([[0,0,0,0,0],[1,1,1,1,1]]), false, 'Test 34');
test(satisfiesConditions([[1,0,1,0,1],[1,0,1,0,1]]), true, 'Test 35');
test(satisfiesConditions([[5,6,7],[6,7,8],[7,8,9]]), false, 'Test 36');
test(satisfiesConditions([[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1]]), true, 'Test 37');
test(satisfiesConditions([[9,9,9,9],[8,8,8,8],[7,7,7,7],[6,6,6,6]]), false, 'Test 38');
test(satisfiesConditions([[4, 5, 6, 7], [4, 5, 6, 7], [4, 5, 6, 7], [4, 5, 6, 7]]), true, 'Test 39');
test(satisfiesConditions([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]), false, 'Test 40');
test(satisfiesConditions([[1,2],[2,3],[3,4],[4,5],[5,6]]), false, 'Test 41');
test(satisfiesConditions([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]), true, 'Test 42');
test(satisfiesConditions([[1,2,3,4],[1,2,3,4],[1,2,3,4]]), true, 'Test 43');
test(satisfiesConditions([[1,2,1,2],[1,2,1,2],[1,2,1,2]]), true, 'Test 44');
test(satisfiesConditions([[9,0,1,2],[9,0,1,2],[9,0,1,2]]), true, 'Test 45');
test(satisfiesConditions([[7,6,5,4,3,2,1],[7,6,5,4,3,2,1]]), true, 'Test 46');
test(satisfiesConditions([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]), true, 'Test 47');
test(satisfiesConditions([[1,0],[0,1],[1,0],[0,1]]), false, 'Test 48');
test(satisfiesConditions([[1, 0, 1], [1, 0, 1], [1, 0, 1]]), true, 'Test 49');
test(satisfiesConditions([[1,0,2,3],[1,0,2,3],[1,0,2,3],[1,0,2,3]]), true, 'Test 50');
test(satisfiesConditions([[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4]]), true, 'Test 51');
test(satisfiesConditions([[0,1,0,1,0,1],[0,1,0,1,0,1]]), true, 'Test 52');
test(satisfiesConditions([[4,5],[4,5],[4,5],[4,5],[4,5],[4,5]]), true, 'Test 53');
test(satisfiesConditions([[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0]]), false, 'Test 54');
test(satisfiesConditions([[1,2,1,2],[3,4,3,4],[1,2,1,2],[3,4,3,4]]), false, 'Test 55');
test(satisfiesConditions([[1,0,1],[1,0,1],[1,0,1]]), true, 'Test 56');
test(satisfiesConditions([[3,2,3,2,3,2,3,2,3,2],[3,2,3,2,3,2,3,2,3,2],[3,2,3,2,3,2,3,2,3,2],[3,2,3,2,3,2,3,2,3,2]]), true, 'Test 57');
test(satisfiesConditions([[5,6,7],[5,6,8],[5,9,7]]), false, 'Test 58');
test(satisfiesConditions([[4,5,6],[4,5,6],[7,8,9]]), false, 'Test 59');
test(satisfiesConditions([[1,0,1,0,1,0],[1,0,1,0,1,0]]), true, 'Test 60');
test(satisfiesConditions([[9, 0, 9, 0], [9, 0, 9, 0], [9, 0, 9, 0]]), true, 'Test 61');
test(satisfiesConditions([[1,0,1,0,1,0,1,0,1,0],[1,0,1,0,1,0,1,0,1,0]]), true, 'Test 62');
test(satisfiesConditions([[1,2,1,2,1,2],[1,2,1,2,1,2]]), true, 'Test 63');
test(satisfiesConditions([[1,1],[2,2],[3,3],[4,4]]), false, 'Test 64');
test(satisfiesConditions([[7,8,9],[7,8,9],[7,8,9],[7,8,9]]), true, 'Test 65');
test(satisfiesConditions([[1,0,1,0],[1,0,1,0],[0,1,0,1]]), false, 'Test 66');
test(satisfiesConditions([[3,2,1],[2,1,0],[1,0,9],[0,9,8]]), false, 'Test 67');
test(satisfiesConditions([[9,8,7],[6,5,4],[3,2,1]]), false, 'Test 68');
test(satisfiesConditions([[0,0,0],[1,1,1],[0,0,0],[1,1,1]]), false, 'Test 69');
test(satisfiesConditions([[1],[1],[1],[1],[1]]), true, 'Test 70');
test(satisfiesConditions([[0,1,0,1],[0,1,0,1],[0,1,0,1]]), true, 'Test 71');
test(satisfiesConditions([[1,1,2,2],[1,1,2,2],[3,3,4,4]]), false, 'Test 72');
test(satisfiesConditions([[5,6,5,6],[5,6,5,6],[5,6,5,6]]), true, 'Test 73');
test(satisfiesConditions([[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0],[0,1,0,1,0]]), false, 'Test 74');
test(satisfiesConditions([[7,6,5],[7,8,9],[7,6,5]]), false, 'Test 75');
test(satisfiesConditions([[1,2,3],[1,0,2],[1,1,1]]), false, 'Test 76');
test(satisfiesConditions([[9,8,7,6,5],[9,8,7,6,5],[9,8,7,6,5],[9,8,7,6,5]]), true, 'Test 77');
test(satisfiesConditions([[0,1,0,1],[0,1,0,1],[1,0,1,0]]), false, 'Test 78');
test(satisfiesConditions([[3,2,1],[3,2,1],[3,2,1],[3,2,1],[3,2,1]]), true, 'Test 79');
test(satisfiesConditions([[4,5,6],[7,8,9],[4,5,6]]), false, 'Test 80');
test(satisfiesConditions([[1,0,1,0,1,0,1,0,1,0],[1,0,1,0,1,0,1,0,1,0],[1,0,1,0,1,0,1,0,1,0]]), true, 'Test 81');
test(satisfiesConditions([[9,9,9,9],[8,8,8,8],[7,7,7,7]]), false, 'Test 82');
test(satisfiesConditions([[3,4,5,6,7],[3,4,5,6,7],[3,4,5,6,7]]), true, 'Test 83');
test(satisfiesConditions([[0,1,0,1,0],[0,1,0,1,0]]), true, 'Test 84');
test(satisfiesConditions([[1,2,3],[1,2,3],[1,2,3]]), true, 'Test 85');
test(satisfiesConditions([[1,1,2,2,3,3],[1,1,2,2,3,3]]), false, 'Test 86');
test(satisfiesConditions([[9,8,7,6],[9,8,7,6],[9,8,7,6]]), true, 'Test 87');
test(satisfiesConditions([[3,2,1],[2,1,0],[1,0,3]]), false, 'Test 88');
test(satisfiesConditions([[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]), false, 'Test 89');
test(satisfiesConditions([[3, 2], [3, 2], [3, 2], [3, 2], [3, 2], [3, 2]]), true, 'Test 90');
test(satisfiesConditions([[5,5,5,5,5],[5,4,4,4,4],[5,4,3,3,3],[5,4,3,2,2],[5,4,3,2,1]]), false, 'Test 91');
test(satisfiesConditions([[1,1,0],[2,2,0],[3,3,0]]), false, 'Test 92');
test(satisfiesConditions([[4,5,6],[4,5,6],[4,5,6],[4,5,6]]), true, 'Test 93');
test(satisfiesConditions([[5, 3, 4, 4], [5, 6, 7, 8], [5, 9, 10, 11]]), false, 'Test 94');
test(satisfiesConditions([[1,0,1,0],[2,1,2,1],[1,0,1,0],[2,1,2,1]]), false, 'Test 95');
test(satisfiesConditions([[7, 8, 9], [7, 8, 9], [7, 8, 9], [7, 8, 9]]), true, 'Test 96');
test(satisfiesConditions([[1,2,3,4],[1,2,3,4]]), true, 'Test 97');
test(satisfiesConditions([[1,2,3,4,5],[1,2,3,4,5]]), true, 'Test 98');
test(satisfiesConditions([[9,0,9,0],[9,0,9,0],[9,0,9,0]]), true, 'Test 99');
test(satisfiesConditions([[0,0,0,0],[1,1,1,1],[2,2,2,2]]), false, 'Test 100');
test(satisfiesConditions([[5,5,5],[5,5,5],[5,5,5],[5,5,5]]), false, 'Test 101');
test(satisfiesConditions([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3]]), false, 'Test 102');
test(satisfiesConditions([[3,3,3],[2,2,2],[1,1,1],[0,0,0]]), false, 'Test 103');
test(satisfiesConditions([[5,5,5],[5,5,5],[5,5,5],[5,5,5],[5,5,5]]), false, 'Test 104');
test(satisfiesConditions([[1,2],[2,1],[1,2],[2,1]]), false, 'Test 105');
test(satisfiesConditions([[1, 2, 3], [1, 4, 5], [1, 6, 7], [1, 8, 9]]), false, 'Test 106');
test(satisfiesConditions([[5,5,5,5,5],[4,4,4,4,4]]), false, 'Test 107');
test(satisfiesConditions([[5,6,7],[5,6,7],[5,6,8]]), false, 'Test 108');
test(satisfiesConditions([[1,1,2],[1,2,1],[2,1,2]]), false, 'Test 109');
test(satisfiesConditions([[1,2,3,4],[1,5,6,7],[1,8,9,0]]), false, 'Test 110');
test(satisfiesConditions([[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0]]), true, 'Test 111');
test(satisfiesConditions([[9,8,7,6,5,4,3,2,1,0],[9,8,7,6,5,4,3,2,1,0]]), true, 'Test 112');
test(satisfiesConditions([[1,2,1,2,1,2,1,2,1,2],[1,2,1,2,1,2,1,2,1,2],[1,2,1,2,1,2,1,2,1,2]]), true, 'Test 113');
test(satisfiesConditions([[5,5,5,5],[6,6,6,6],[7,7,7,7]]), false, 'Test 114');
test(satisfiesConditions([[1,2,3],[4,5,6],[7,8,9]]), false, 'Test 115');
test(satisfiesConditions([[1,2,3],[1,2,3],[4,5,6]]), false, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

