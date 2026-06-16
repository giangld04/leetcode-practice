// Test: 1037. Valid Boomerang
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { isBoomerang } = require("./solution");

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

console.log("\n1037. Valid Boomerang\n");

test(isBoomerang([[1,1],[2,2],[1,3]]), true, 'Test 1');
test(isBoomerang([[1,1],[2,5],[3,9]]), false, 'Test 2');
test(isBoomerang([[1,1],[2,3],[3,2]]), true, 'Test 3');
test(isBoomerang([[5,5],[6,6],[7,7]]), false, 'Test 4');
test(isBoomerang([[1,1],[2,1],[3,1]]), false, 'Test 5');
test(isBoomerang([[0,0],[1,1],[2,2]]), false, 'Test 6');
test(isBoomerang([[0,1],[1,1],[2,1]]), false, 'Test 7');
test(isBoomerang([[0,0],[1,1],[1,0]]), true, 'Test 8');
test(isBoomerang([[0,0],[1,1],[1,2]]), true, 'Test 9');
test(isBoomerang([[1,1],[2,2],[3,3]]), false, 'Test 10');
test(isBoomerang([[0,0],[0,1],[0,2]]), false, 'Test 11');
test(isBoomerang([[5,0],[0,0],[0,5]]), true, 'Test 12');
test(isBoomerang([[0,0],[1,2],[2,1]]), true, 'Test 13');
test(isBoomerang([[1,1],[2,2],[2,1]]), true, 'Test 14');
test(isBoomerang([[10,10],[20,20],[30,30]]), false, 'Test 15');
test(isBoomerang([[1,0],[0,0],[0,1]]), true, 'Test 16');
test(isBoomerang([[1,1],[1,2],[1,3]]), false, 'Test 17');
test(isBoomerang([[1,0],[2,1],[1,2]]), true, 'Test 18');
test(isBoomerang([[1,2],[2,3],[3,4]]), false, 'Test 19');
test(isBoomerang([[0,0],[0,1],[1,1]]), true, 'Test 20');
test(isBoomerang([[1,0],[2,0],[3,0]]), false, 'Test 21');
test(isBoomerang([[1,1],[2,1],[2,2]]), true, 'Test 22');
test(isBoomerang([[2,1],[1,2],[3,4]]), true, 'Test 23');
test(isBoomerang([[100,100],[50,50],[0,0]]), false, 'Test 24');
test(isBoomerang([[1,1],[2,2],[3,4]]), true, 'Test 25');
test(isBoomerang([[-1,-1],[0,0],[1,1]]), false, 'Test 26');
test(isBoomerang([[1,1],[3,3],[2,2]]), false, 'Test 27');
test(isBoomerang([[1, 1], [1, 2], [1, 3]]), false, 'Test 28');
test(isBoomerang([[-10,10],[0,0],[10,-10]]), false, 'Test 29');
test(isBoomerang([[1,2],[2,4],[3,6]]), false, 'Test 30');
test(isBoomerang([[1,2],[3,4],[5,6]]), false, 'Test 31');
test(isBoomerang([[1,1],[2,2],[2,3]]), true, 'Test 32');
test(isBoomerang([[0,1],[1,0],[0,0]]), true, 'Test 33');
test(isBoomerang([[100,100],[99,99],[98,98]]), false, 'Test 34');
test(isBoomerang([[100,0],[50,50],[0,100]]), false, 'Test 35');
test(isBoomerang([[50,50],[50,60],[60,50]]), true, 'Test 36');
test(isBoomerang([[33,33],[66,66],[99,99]]), false, 'Test 37');
test(isBoomerang([[10,10],[15,10],[10,15]]), true, 'Test 38');
test(isBoomerang([[1,2],[2,1],[3,4]]), true, 'Test 39');
test(isBoomerang([[1,1],[2,2],[4,4]]), false, 'Test 40');
test(isBoomerang([[1,1],[2,3],[1,5]]), true, 'Test 41');
test(isBoomerang([[50,0],[0,50],[25,25]]), false, 'Test 42');
test(isBoomerang([[0,0],[1,2],[3,6]]), false, 'Test 43');
test(isBoomerang([[1,1],[1,2],[2,2]]), true, 'Test 44');
test(isBoomerang([[0,100],[100,0],[50,50]]), false, 'Test 45');
test(isBoomerang([[1,2],[4,6],[5,3]]), true, 'Test 46');
test(isBoomerang([[1,1],[1,2],[2,1]]), true, 'Test 47');
test(isBoomerang([[1,1],[2,2],[1,2]]), true, 'Test 48');
test(isBoomerang([[0, 0], [1, 0], [2, 1]]), true, 'Test 49');
test(isBoomerang([[-1,0],[0,1],[1,0]]), true, 'Test 50');
test(isBoomerang([[0,0],[100,100],[50,50]]), false, 'Test 51');
test(isBoomerang([[50,50],[60,60],[70,70]]), false, 'Test 52');
test(isBoomerang([[10,20],[20,30],[30,40]]), false, 'Test 53');
test(isBoomerang([[100,100],[99,98],[98,97]]), true, 'Test 54');
test(isBoomerang([[50, 50], [50, 60], [50, 70]]), false, 'Test 55');
test(isBoomerang([[0,100],[50,50],[100,0]]), false, 'Test 56');
test(isBoomerang([[2,3],[5,6],[8,9]]), false, 'Test 57');
test(isBoomerang([[0,0],[0,1],[1,0]]), true, 'Test 58');
test(isBoomerang([[10, 0], [20, 0], [30, 0]]), false, 'Test 59');
test(isBoomerang([[0, 1], [1, 2], [2, 3]]), false, 'Test 60');
test(isBoomerang([[1,1],[2,2],[0,0]]), false, 'Test 61');
test(isBoomerang([[5,5],[10,5],[15,5]]), false, 'Test 62');
test(isBoomerang([[1,100],[100,1],[50,50]]), true, 'Test 63');
test(isBoomerang([[99,99],[98,98],[97,97]]), false, 'Test 64');
test(isBoomerang([[1,1],[3,1],[2,2]]), true, 'Test 65');
test(isBoomerang([[2,4],[4,6],[6,8]]), false, 'Test 66');
test(isBoomerang([[99,98],[98,97],[97,96]]), false, 'Test 67');
test(isBoomerang([[0, 100], [50, 50], [100, 0]]), false, 'Test 68');
test(isBoomerang([[10,20],[20,30],[30,30]]), true, 'Test 69');
test(isBoomerang([[1, 2], [2, 3], [4, 5]]), false, 'Test 70');
test(isBoomerang([[0,1],[1,0],[2,1]]), true, 'Test 71');
test(isBoomerang([[5,0],[0,5],[5,5]]), true, 'Test 72');
test(isBoomerang([[10,20],[30,40],[50,60]]), false, 'Test 73');
test(isBoomerang([[1,1],[2,3],[3,1]]), true, 'Test 74');
test(isBoomerang([[0,0],[1,0],[2,0]]), false, 'Test 75');
test(isBoomerang([[5,5],[10,10],[15,15]]), false, 'Test 76');
test(isBoomerang([[5, 5], [10, 15], [20, 25]]), true, 'Test 77');
test(isBoomerang([[2,3],[3,6],[5,10]]), true, 'Test 78');
test(isBoomerang([[3,6],[6,12],[9,18]]), false, 'Test 79');
test(isBoomerang([[10,20],[20,10],[30,0]]), false, 'Test 80');
test(isBoomerang([[1,1],[2,3],[3,6]]), true, 'Test 81');
test(isBoomerang([[1,1],[2,2],[3,5]]), true, 'Test 82');
test(isBoomerang([[33, 55], [66, 77], [99, 88]]), true, 'Test 83');
test(isBoomerang([[1,0],[0,1],[0,2]]), true, 'Test 84');
test(isBoomerang([[50,50],[51,51],[52,52]]), false, 'Test 85');
test(isBoomerang([[2,2],[1,1],[3,3]]), false, 'Test 86');
test(isBoomerang([[5,5],[5,6],[6,5]]), true, 'Test 87');
test(isBoomerang([[5,5],[15,10],[25,15]]), false, 'Test 88');
test(isBoomerang([[1, 1], [2, 3], [4, 6]]), true, 'Test 89');
test(isBoomerang([[0,50],[50,0],[25,25]]), false, 'Test 90');
test(isBoomerang([[0,0],[1,2],[2,4]]), false, 'Test 91');
test(isBoomerang([[0,0],[1,2],[3,4]]), true, 'Test 92');
test(isBoomerang([[1,2],[4,5],[7,8]]), false, 'Test 93');
test(isBoomerang([[10, 20], [30, 40], [50, 60]]), false, 'Test 94');
test(isBoomerang([[10, 10], [20, 30], [30, 50]]), false, 'Test 95');
test(isBoomerang([[1,5],[3,4],[4,5]]), true, 'Test 96');
test(isBoomerang([[50,50],[50,51],[51,50]]), true, 'Test 97');
test(isBoomerang([[1, 100], [100, 1], [50, 50]]), true, 'Test 98');
test(isBoomerang([[10,20],[20,10],[30,20]]), true, 'Test 99');
test(isBoomerang([[1,5],[2,3],[3,1]]), false, 'Test 100');
test(isBoomerang([[-5,-5],[-4,-4],[-3,-3]]), false, 'Test 101');
test(isBoomerang([[99, 99], [50, 50], [1, 1]]), false, 'Test 102');
test(isBoomerang([[5,3],[6,4],[7,5]]), false, 'Test 103');
test(isBoomerang([[5,5],[5,6],[6,6]]), true, 'Test 104');
test(isBoomerang([[1,1],[2,3],[4,5]]), true, 'Test 105');
test(isBoomerang([[2,4],[4,2],[0,0]]), true, 'Test 106');
test(isBoomerang([[1,2],[2,3],[3,5]]), true, 'Test 107');
test(isBoomerang([[1,1],[1,100],[100,1]]), true, 'Test 108');
test(isBoomerang([[1,0],[0,1],[-1,0]]), true, 'Test 109');
test(isBoomerang([[0,1],[1,0],[1,1]]), true, 'Test 110');
test(isBoomerang([[99,1],[100,1],[99,2]]), true, 'Test 111');
test(isBoomerang([[3,6],[6,12],[9,17]]), true, 'Test 112');
test(isBoomerang([[100,100],[0,0],[50,50]]), false, 'Test 113');
test(isBoomerang([[0, 0], [50, 50], [100, 100]]), false, 'Test 114');
test(isBoomerang([[0,0],[2,0],[1,1]]), true, 'Test 115');
test(isBoomerang([[7,7],[8,9],[9,7]]), true, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

