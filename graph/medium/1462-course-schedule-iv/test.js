// Test: 1462. Course Schedule Iv
// 181 test cases from LeetCodeDataset
// Run: node test.js

const { checkIfPrerequisite } = require("./solution");

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

console.log("\n1462. Course Schedule Iv\n");

test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,4],[4,0]]), [true, false], 'Test 1');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,3],[1,3],[0,2]]), [true, true, true], 'Test 2');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[1,4],[2,4]], [[0,3],[1,4],[2,3]]), [true, true, false], 'Test 3');
test(checkIfPrerequisite(4, [[0,1],[1,2]], [[0,2],[2,0]]), [true, false], 'Test 4');
test(checkIfPrerequisite(2, [], [[1,0],[0,1]]), [false, false], 'Test 5');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[1,4],[2,3],[2,4]], [[0,3],[0,4],[3,4]]), [true, true, false], 'Test 6');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[1,4],[2,3],[2,4]], [[0,3],[0,4],[1,4],[2,3]]), [true, true, true, true], 'Test 7');
test(checkIfPrerequisite(3, [[1,2],[1,0],[2,0]], [[1,0],[1,2]]), [true, true], 'Test 8');
test(checkIfPrerequisite(2, [[1,0]], [[0,1],[1,0]]), [false, true], 'Test 9');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,3],[1,2],[2,0],[3,0]]), [true, true, false, false], 'Test 10');
test(checkIfPrerequisite(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8]], [[0,8],[1,7],[2,6],[3,5],[4,5],[0,4],[1,2]]), [true, true, true, false, false, true, false], 'Test 11');
test(checkIfPrerequisite(15, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14]], [[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[1,11],[1,12],[2,7],[2,8]]), [true, true, true, true, true, true, true, true, false, false, false, false], 'Test 12');
test(checkIfPrerequisite(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8],[7,7]]), [true, true, true, true, true, true, true, true], 'Test 13');
test(checkIfPrerequisite(8, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,7],[5,7],[6,7]], [[0,7],[1,5],[2,4],[3,6],[5,7]]), [true, false, false, false, true], 'Test 14');
test(checkIfPrerequisite(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[1,8],[2,7],[3,6],[4,5],[5,4]]), [true, true, true, true, true, false], 'Test 15');
test(checkIfPrerequisite(10, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9]], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,3],[1,2]]), [true, true, false, false, false, true, false], 'Test 16');
test(checkIfPrerequisite(12, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,8],[4,9],[5,10],[5,11],[6,10],[6,11],[7,11],[8,11],[9,11]], [[0,7],[0,8],[0,9],[0,10],[0,11],[1,10],[1,11],[2,10],[2,11],[3,11],[4,11]]), [true, true, true, true, true, false, true, true, true, true, true], 'Test 17');
test(checkIfPrerequisite(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,7],[4,8]], [[0,7],[0,8],[1,7],[1,8],[2,7],[2,8],[0,3],[0,4]]), [true, true, true, true, false, false, true, true], 'Test 18');
test(checkIfPrerequisite(10, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[5,9],[6,9],[7,9],[8,9]], [[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9]]), [true, true, true, true, true, true, true, true, true], 'Test 19');
test(checkIfPrerequisite(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,7],[5,7],[6,8]], [[0,7],[0,8],[1,5],[1,6],[2,7],[2,8],[3,7],[3,8],[4,7],[5,7],[6,8]]), [true, true, false, false, true, true, true, true, true, true, true], 'Test 20');
test(checkIfPrerequisite(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9]]), [true, true, true, true, true, true, true, true, true], 'Test 21');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[1,4],[2,3],[0,2]]), [true, true, true, true], 'Test 22');
test(checkIfPrerequisite(12, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[5,10],[6,11]], [[0,11],[1,10],[2,9],[3,8],[4,7],[5,6],[0,5],[1,2]]), [true, false, false, true, false, false, true, false], 'Test 23');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[1,4],[2,5],[3,6],[4,6],[5,6]], [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[1,5],[0,4],[0,3]]), [true, true, true, true, true, true, false, true, true], 'Test 24');
test(checkIfPrerequisite(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8]], [[0,3],[0,7],[1,8],[2,6],[3,5]]), [true, true, true, true, false], 'Test 25');
test(checkIfPrerequisite(9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[0,4],[1,5],[2,6],[3,7],[4,8]], [[0,8],[1,7],[2,6],[3,5],[4,4],[5,3],[6,2],[7,1],[8,0]]), [true, true, true, true, true, false, false, false, false], 'Test 26');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[2,3],[3,4],[4,5],[5,6]], [[0,3],[1,5],[2,6],[3,6]]), [true, true, true, true], 'Test 27');
test(checkIfPrerequisite(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [true, true, true, true, true], 'Test 28');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[4,6],[5,6]], [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[1,5]]), [true, true, true, false, true, true, false], 'Test 29');
test(checkIfPrerequisite(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], [[0,7],[1,6],[2,5],[3,4],[0,3]]), [true, true, true, true, true], 'Test 30');
test(checkIfPrerequisite(6, [[0,1],[0,2],[1,3],[1,4],[2,3],[2,4],[3,5],[4,5]], [[0,5],[1,4],[2,4],[3,5],[1,3],[2,3]]), [true, true, true, true, true, true], 'Test 31');
test(checkIfPrerequisite(6, [[0,1],[0,2],[1,3],[1,4],[2,5]], [[0,3],[0,4],[0,5],[1,2],[1,5],[2,3],[2,4]]), [true, true, true, false, false, false, false], 'Test 32');
test(checkIfPrerequisite(8, [[0,1],[0,2],[1,3],[1,4],[2,3],[2,5],[3,6],[4,6],[5,6],[6,7]], [[0,3],[0,4],[0,5],[1,6],[1,7],[2,6],[2,7]]), [true, true, true, true, true, true, true], 'Test 33');
test(checkIfPrerequisite(8, [[0,2],[1,2],[2,3],[3,5],[3,6],[6,7],[7,5]], [[0,5],[0,7],[1,5],[1,7],[2,5],[2,7],[3,7]]), [true, true, true, true, true, true, true], 'Test 34');
test(checkIfPrerequisite(10, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,7],[5,8],[6,8],[7,9],[8,9]], [[0,9],[1,9],[2,9],[0,8],[0,7],[0,6],[0,5],[0,4],[0,3],[0,2],[0,1],[1,8],[1,7],[1,6],[1,5],[1,4],[2,7],[2,6],[2,5],[3,6],[3,5],[4,6],[4,5]]), [true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, true, false, true, true, false, false, false, false], 'Test 35');
test(checkIfPrerequisite(12, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[5,10],[6,11],[7,10],[8,11]], [[0,10],[0,11],[1,10],[1,11],[2,10],[2,11],[3,10],[3,11],[4,10],[4,11]]), [true, true, true, true, true, true, true, true, false, false], 'Test 36');
test(checkIfPrerequisite(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], [[0,7],[1,6],[2,5],[3,4],[4,3]]), [true, true, true, true, false], 'Test 37');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[1,4],[2,3],[0,2],[3,5]]), [true, true, true, true, true], 'Test 38');
test(checkIfPrerequisite(6, [[0,1],[0,2],[1,3],[2,3],[3,4],[4,5]], [[0,5],[1,5],[2,5],[0,4],[1,4],[2,4]]), [true, true, true, true, true, true], 'Test 39');
test(checkIfPrerequisite(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[0,7],[1,6],[2,5],[3,4]], [[0,3],[0,4],[0,5],[0,6],[0,7],[1,3],[1,4],[1,5],[1,6],[1,7],[2,3],[2,4],[2,5],[2,6],[2,7],[3,4],[3,5],[3,6],[3,7],[4,5],[4,6],[4,7],[5,6],[5,7],[6,7]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 40');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [[0,3],[0,4],[0,5],[0,6],[1,5],[1,6]]), [true, true, true, true, false, false], 'Test 41');
test(checkIfPrerequisite(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], [[0,7],[1,6],[2,5],[3,4],[0,2],[1,3]]), [true, true, true, true, true, true], 'Test 42');
test(checkIfPrerequisite(10, [[0,9],[1,8],[2,7],[3,6],[4,5],[0,1],[1,2],[2,3],[3,4]], [[0,8],[1,7],[2,6],[3,5],[4,6]]), [true, true, true, true, false], 'Test 43');
test(checkIfPrerequisite(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7]]), [true, true, true, true, true, true], 'Test 44');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[1,4],[2,3],[2,4],[3,5],[4,5],[5,6]], [[0,3],[0,4],[0,5],[0,6],[1,5],[1,6],[2,5],[2,6],[3,6],[4,6]]), [true, true, true, true, true, true, true, true, true, true], 'Test 45');
test(checkIfPrerequisite(11, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], [[0,10],[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]]), [true, true, true, true, true, true, false, false, false, false], 'Test 46');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[0,4],[1,4],[2,5]]), [true, true, true, true], 'Test 47');
test(checkIfPrerequisite(6, [[0,1],[1,2],[0,2],[2,4],[3,4],[4,5]], [[0,5],[2,5],[3,5],[0,3],[5,0]]), [true, true, true, false, false], 'Test 48');
test(checkIfPrerequisite(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8],[0,10],[10,0]]), [true, true, true, true, true, true, true, true, false], 'Test 49');
test(checkIfPrerequisite(10, [[0,1],[2,3],[4,5],[6,7],[8,9],[1,2],[3,4],[5,6],[7,8]], [[0,9],[2,8],[4,7],[6,5],[0,8]]), [true, true, true, false, true], 'Test 50');
test(checkIfPrerequisite(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[5,8],[6,8]], [[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,7],[2,8],[3,8],[4,8],[5,6],[6,7]]), [true, true, true, true, true, true, false, false, true, true, false, false, false, true, false, true, false, false], 'Test 51');
test(checkIfPrerequisite(8, [[0,2],[1,2],[2,3],[2,4],[3,5],[4,5],[5,6],[5,7]], [[0,5],[0,6],[0,7],[1,5],[1,6],[1,7],[2,6],[2,7],[3,6],[3,7],[4,6],[4,7]]), [true, true, true, true, true, true, true, true, true, true, true, true], 'Test 52');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[1,5],[2,5],[0,4]]), [true, true, true, true], 'Test 53');
test(checkIfPrerequisite(10, [[0,1],[0,2],[0,3],[0,4],[1,5],[1,6],[2,7],[2,8],[3,9],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[0,8],[1,7],[2,6],[3,5]]), [true, true, true, false, false], 'Test 54');
test(checkIfPrerequisite(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[0,5],[1,6],[2,7],[3,8],[4,9],[5,10],[6,11]], [[0,11],[1,10],[2,9],[3,8],[4,7],[5,6],[0,7],[1,8],[2,7],[3,6],[4,5],[5,4]]), [true, true, true, true, true, true, true, true, true, true, true, false], 'Test 55');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[1,4],[2,4],[3,5],[3,6],[4,5],[4,6],[5,6]], [[0,5],[0,6],[1,5],[1,6],[2,5],[2,6],[3,6]]), [true, true, true, true, true, true, true], 'Test 56');
test(checkIfPrerequisite(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[0,8],[1,6],[3,9],[5,4]]), [true, true, true, true, false], 'Test 57');
test(checkIfPrerequisite(7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,3],[1,4],[2,5]], [[0,6],[1,5],[2,4],[0,5],[3,4],[0,4],[4,6],[1,3]]), [true, true, true, true, true, true, true, true], 'Test 58');
test(checkIfPrerequisite(15, [[0,1],[0,2],[0,3],[0,4],[1,5],[1,6],[2,7],[2,8],[3,9],[3,10],[4,11],[4,12],[5,13],[5,14]], [[0,13],[0,14],[1,13],[1,14],[2,13],[2,14],[3,13],[3,14],[4,13],[4,14]]), [true, true, true, true, false, false, false, false, false, false], 'Test 59');
test(checkIfPrerequisite(5, [[0,1],[0,4],[1,2],[1,3],[2,4],[3,4]], [[0,2],[0,3],[1,4],[2,3],[3,2]]), [true, true, true, false, false], 'Test 60');
test(checkIfPrerequisite(10, [[0,1],[0,2],[0,3],[0,4],[1,5],[1,6],[2,7],[2,8],[3,9]], [[0,5],[0,6],[0,7],[0,8],[0,9],[1,9],[2,9],[3,5],[3,6],[4,7]]), [true, true, true, true, true, false, false, false, false, false], 'Test 61');
test(checkIfPrerequisite(12, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[6,11],[7,11],[8,11],[9,11],[10,11]], [[0,11],[1,11],[2,11],[3,11],[4,11],[5,11],[6,11],[7,11],[8,11],[9,11],[10,11]]), [true, true, true, true, true, true, true, true, true, true, true], 'Test 62');
test(checkIfPrerequisite(10, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[5,9],[6,9]], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [true, true, false, false, false], 'Test 63');
test(checkIfPrerequisite(8, [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[6,7],[2,6]], [[0,7],[1,6],[2,5],[3,4]]), [true, true, false, false], 'Test 64');
test(checkIfPrerequisite(15, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,8],[4,9],[5,10],[5,11],[6,11],[6,12],[7,13],[8,13],[9,13],[10,14],[11,14],[12,14]], [[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14]]), [true, true, true, true, true, true, true, true], 'Test 65');
test(checkIfPrerequisite(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]], [[0,11],[1,10],[2,9],[3,8],[4,7],[5,6]]), [true, true, true, true, true, true], 'Test 66');
test(checkIfPrerequisite(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,5],[1,6],[2,7],[3,8],[4,9]], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,8],[1,7],[2,6],[3,5],[0,7],[1,6],[2,5],[3,4]]), [true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 67');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,4],[5,6]], [[0,4],[0,5],[0,6],[1,3],[1,5],[1,6],[2,5],[2,6],[3,5],[4,6]]), [true, true, true, true, false, false, true, true, false, false], 'Test 68');
test(checkIfPrerequisite(10, [[0,2],[1,2],[2,3],[2,4],[3,5],[4,5],[5,6],[5,7],[6,8],[7,9]], [[0,5],[1,6],[2,8],[3,9],[4,7],[5,8]]), [true, true, true, true, true, true], 'Test 69');
test(checkIfPrerequisite(7, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [[0,3],[0,5],[1,6],[3,5],[4,6]]), [true, true, false, false, false], 'Test 70');
test(checkIfPrerequisite(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]], [[0,11],[1,10],[2,9],[3,8],[4,7],[5,6],[0,9],[1,8],[2,7],[3,6],[4,5],[0,8],[1,7],[2,6],[3,5],[0,7],[1,6],[2,5],[3,4]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 71');
test(checkIfPrerequisite(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9]]), [true, true, true, true, true, true, true, true], 'Test 72');
test(checkIfPrerequisite(8, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,7],[5,7],[6,7]], [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]]), [true, true, true, true, true, true, true], 'Test 73');
test(checkIfPrerequisite(3, [[1,2]], [[0,2],[1,0],[2,0]]), [false, false, false], 'Test 74');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,3],[3,0],[1,2]]), [true, false, true], 'Test 75');
test(checkIfPrerequisite(5, [[0, 1], [0, 2], [1, 3], [1, 4], [2, 3], [2, 4]], [[0, 3], [0, 4], [1, 2], [3, 4]]), [true, true, false, false], 'Test 76');
test(checkIfPrerequisite(5, [[0,1],[1,2],[0,3],[3,4],[1,4]], [[0,2],[2,0],[0,4],[4,0]]), [true, false, true, false], 'Test 77');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[5,0],[1,4],[4,1]]), [true, false, true, false], 'Test 78');
test(checkIfPrerequisite(3, [], [[0,1],[1,0],[0,2],[2,0]]), [false, false, false, false], 'Test 79');
test(checkIfPrerequisite(3, [[1,0],[2,0]], [[0,1],[2,1],[1,2]]), [false, false, false], 'Test 80');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,1],[3,2]], [[0,1],[0,2],[1,3],[2,3]]), [false, false, false, false], 'Test 81');
test(checkIfPrerequisite(5, [[1,0],[0,2],[2,3],[3,4]], [[1,4],[0,4],[0,3],[0,2]]), [true, true, true, true], 'Test 82');
test(checkIfPrerequisite(4, [[0,1],[1,2],[0,2]], [[0,1],[1,2],[0,2],[3,0]]), [true, true, true, false], 'Test 83');
test(checkIfPrerequisite(3, [[1,2]], [[0,1],[1,0],[0,2],[2,0]]), [false, false, false, false], 'Test 84');
test(checkIfPrerequisite(6, [[1,2],[1,3],[2,4],[3,4],[4,5]], [[1,5],[1,4],[2,5],[3,5],[4,5]]), [true, true, true, true, true], 'Test 85');
test(checkIfPrerequisite(4, [[0,1],[2,3]], [[0,3],[1,3],[0,2]]), [false, false, false], 'Test 86');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,1],[3,2]], [[0,1],[0,2],[0,3],[1,3],[2,3]]), [false, false, false, false, false], 'Test 87');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,3],[1,2]]), [true, true], 'Test 88');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,4],[4,0],[1,3],[3,1]]), [true, false, true, false], 'Test 89');
test(checkIfPrerequisite(4, [[0, 1], [1, 2], [2, 3]], [[0, 3], [1, 3], [2, 3], [3, 0]]), [true, true, true, false], 'Test 90');
test(checkIfPrerequisite(6, [[1,4],[2,4],[3,5],[4,5]], [[1,5],[2,5],[3,4]]), [true, true, false], 'Test 91');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,4],[4,0],[1,3]]), [true, false, true], 'Test 92');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[4,1],[5,2],[5,3]], [[5,0],[5,1],[4,2],[4,3],[2,1]]), [true, true, false, false, false], 'Test 93');
test(checkIfPrerequisite(3, [[0,1]], [[0,1],[1,0],[1,2]]), [true, false, false], 'Test 94');
test(checkIfPrerequisite(4, [[0,1],[0,2],[1,3],[2,3]], [[0,3],[3,0],[1,2],[2,1]]), [true, false, false, false], 'Test 95');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[1,4],[2,3],[2,4]], [[0,3],[0,4],[1,2]]), [true, true, false], 'Test 96');
test(checkIfPrerequisite(4, [], [[0,1],[1,2],[2,3],[3,0]]), [false, false, false, false], 'Test 97');
test(checkIfPrerequisite(4, [[0,1],[2,3]], [[0,2],[1,3],[0,3],[2,1]]), [false, false, false, false], 'Test 98');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,3],[0,2],[1,3],[2,0]]), [true, true, true, false], 'Test 99');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[4,1],[5,2],[5,3]], [[0,1],[0,3],[0,5],[1,2],[2,3],[3,4]]), [false, false, false, false, false, false], 'Test 100');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,1]], [[0,3],[1,3],[2,3]]), [false, false, false], 'Test 101');
test(checkIfPrerequisite(3, [[1,0]], [[0,1],[1,0],[1,2],[0,2]]), [false, true, false, false], 'Test 102');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,1],[3,2]], [[0,1],[1,3],[0,3]]), [false, false, false], 'Test 103');
test(checkIfPrerequisite(6, [[1,2],[2,3],[3,4],[4,5]], [[1,5],[2,4],[3,5],[0,5]]), [true, true, true, false], 'Test 104');
test(checkIfPrerequisite(3, [[1,2]], [[0,1],[1,0],[2,0]]), [false, false, false], 'Test 105');
test(checkIfPrerequisite(4, [], [[0,1],[1,0],[2,3],[3,2]]), [false, false, false, false], 'Test 106');
test(checkIfPrerequisite(4, [[0,1],[1,2],[0,2]], [[0,1],[1,2],[0,2],[2,0],[1,0],[2,1]]), [true, true, true, false, false, false], 'Test 107');
test(checkIfPrerequisite(5, [[1,2],[2,3],[3,4],[1,3],[1,4]], [[0,1],[1,0],[2,4]]), [false, false, true], 'Test 108');
test(checkIfPrerequisite(4, [[0,1],[2,3]], [[0,1],[1,2],[2,3],[3,0]]), [true, false, true, false], 'Test 109');
test(checkIfPrerequisite(3, [[1,0],[1,2]], [[0,1],[1,2],[0,2]]), [false, true, false], 'Test 110');
test(checkIfPrerequisite(6, [[1,0],[2,1],[3,2],[4,3],[5,4]], [[0,5],[1,5],[2,5],[3,5],[4,5]]), [false, false, false, false, false], 'Test 111');
test(checkIfPrerequisite(5, [[1,0],[2,0],[3,1],[3,2]], [[0,3],[1,3],[2,3]]), [false, false, false], 'Test 112');
test(checkIfPrerequisite(6, [[0,1],[1,2],[1,3],[2,4],[3,4],[4,5]], [[0,5],[1,5],[2,5]]), [true, true, true], 'Test 113');
test(checkIfPrerequisite(5, [[0,1],[1,4],[2,4],[3,4]], [[0,4],[1,4],[2,4],[3,4],[4,0]]), [true, true, true, true, false], 'Test 114');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,4],[4,0],[1,3],[3,0]]), [true, false, true, false], 'Test 115');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[5,0],[2,3],[3,2]]), [true, false, true, false], 'Test 116');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[4,2],[5,3],[5,4]], [[0,5],[1,5],[2,5],[3,5],[4,5]]), [false, false, false, false, false], 'Test 117');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,1],[0,4],[1,3],[2,4],[4,0]]), [true, true, true, true, false], 'Test 118');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[4,1],[5,2]], [[0,5],[1,4],[2,5],[0,3],[3,2]]), [false, false, false, false, false], 'Test 119');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,4],[1,4],[0,3],[1,3],[0,2],[1,2],[2,4],[0,1],[2,3],[4,0]]), [true, true, true, true, true, true, true, true, true, false], 'Test 120');
test(checkIfPrerequisite(3, [[0,1]], [[0,1],[1,0],[0,2],[2,0]]), [true, false, false, false], 'Test 121');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[4,1],[5,2]], [[0,1],[0,2],[1,2],[2,3],[3,4],[4,5]]), [false, false, false, false, false, false], 'Test 122');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,4],[4,0],[2,3]]), [true, false, true], 'Test 123');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,3],[3,0],[1,2],[0,2]]), [true, false, true, true], 'Test 124');
test(checkIfPrerequisite(4, [[0,1],[0,2],[1,3],[2,3]], [[0,3],[1,3],[2,3],[3,0]]), [true, true, true, false], 'Test 125');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[2,5]]), [true, true], 'Test 126');
test(checkIfPrerequisite(3, [], [[1,0],[0,1],[2,1]]), [false, false, false], 'Test 127');
test(checkIfPrerequisite(3, [[1,0]], [[0,1],[2,0],[1,2]]), [false, false, false], 'Test 128');
test(checkIfPrerequisite(3, [[1,0],[2,0]], [[0,1],[1,0],[1,2],[2,1],[2,0]]), [false, true, false, false, true], 'Test 129');
test(checkIfPrerequisite(3, [[1,0],[1,2]], [[0,1],[1,0],[0,2],[2,0]]), [false, true, false, false], 'Test 130');
test(checkIfPrerequisite(4, [[0,1],[1,2],[0,3],[3,2]], [[0,2],[1,3],[2,0],[0,1]]), [true, false, false, true], 'Test 131');
test(checkIfPrerequisite(6, [[1,2],[1,4],[1,5],[2,3],[3,4],[3,5]], [[1,3],[1,4],[2,5],[3,1]]), [true, true, true, false], 'Test 132');
test(checkIfPrerequisite(6, [[1,2],[1,3],[2,4],[3,5]], [[1,4],[2,5],[3,4],[0,5]]), [true, false, false, false], 'Test 133');
test(checkIfPrerequisite(3, [[1,0],[1,2]], [[0,1],[1,2],[2,0]]), [false, true, false], 'Test 134');
test(checkIfPrerequisite(5, [[0,1],[1,2],[3,4]], [[0,2],[3,4]]), [true, true], 'Test 135');
test(checkIfPrerequisite(3, [], [[0,1],[1,0],[1,2],[2,1]]), [false, false, false, false], 'Test 136');
test(checkIfPrerequisite(3, [[1,2],[0,2]], [[0,1],[1,0],[0,2],[2,0]]), [false, false, true, false], 'Test 137');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[4,2],[5,3]], [[0,5],[1,5],[2,5],[3,5],[4,5]]), [false, false, false, false, false], 'Test 138');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,4],[4,0],[1,3],[2,4]]), [true, false, true, true], 'Test 139');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[3,2],[4,3],[5,4]], [[0,5],[1,5],[2,5],[3,5]]), [false, false, false, false], 'Test 140');
test(checkIfPrerequisite(7, [[1,0],[2,0],[3,1],[4,2],[5,3],[6,4],[6,5]], [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6]]), [false, false, false, false, false, false], 'Test 141');
test(checkIfPrerequisite(3, [[1,0]], [[2,0],[2,1]]), [false, false], 'Test 142');
test(checkIfPrerequisite(3, [[1,0],[1,2]], [[0,1],[1,0],[0,2]]), [false, true, false], 'Test 143');
test(checkIfPrerequisite(6, [[0,1],[2,3],[1,3],[2,4],[3,5]], [[0,3],[2,5],[0,5],[1,2]]), [true, true, true, false], 'Test 144');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[2,3],[3,4]], [[0,4],[1,4],[2,4]]), [true, true, true], 'Test 145');
test(checkIfPrerequisite(6, [[0,1],[0,2],[1,3],[1,4],[2,5]], [[0,3],[0,4],[1,5],[2,3]]), [true, true, false, false], 'Test 146');
test(checkIfPrerequisite(5, [[1,2],[2,3],[3,4],[4,0]], [[1,4],[4,1],[0,3],[3,2]]), [true, false, false, false], 'Test 147');
test(checkIfPrerequisite(3, [[1,2],[2,0]], [[1,0],[2,0],[0,1]]), [true, true, false], 'Test 148');
test(checkIfPrerequisite(3, [[1,2]], [[0,1],[0,2],[1,0]]), [false, false, false], 'Test 149');
test(checkIfPrerequisite(3, [[1,0]], [[0,1],[1,0]]), [false, true], 'Test 150');
test(checkIfPrerequisite(3, [[0,1],[0,2]], [[0,1],[1,0],[1,2],[2,1],[2,0],[0,2]]), [true, false, false, false, false, true], 'Test 151');
test(checkIfPrerequisite(4, [], [[0,1],[1,0],[1,2],[2,1]]), [false, false, false, false], 'Test 152');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,1],[3,2]], [[0,1],[1,3],[0,3],[3,0]]), [false, false, false, true], 'Test 153');
test(checkIfPrerequisite(6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [[0,5],[1,4],[2,3],[0,2],[3,1]]), [true, true, true, true, false], 'Test 154');
test(checkIfPrerequisite(3, [[1, 2]], [[0, 2], [1, 0], [2, 1]]), [false, false, false], 'Test 155');
test(checkIfPrerequisite(4, [[0,1],[0,2],[1,3],[2,3]], [[1,3],[2,3],[3,0],[3,1]]), [true, true, false, false], 'Test 156');
test(checkIfPrerequisite(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]], [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]]), [true, true, true, true, true, true, true], 'Test 157');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,1],[3,2]], [[0,1],[0,2],[1,3],[2,3],[3,0]]), [false, false, false, false, true], 'Test 158');
test(checkIfPrerequisite(5, [[0, 1], [1, 4], [2, 4], [3, 4]], [[0, 4], [1, 2], [2, 0], [3, 1]]), [true, false, false, false], 'Test 159');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,1],[3,2]], [[0,1],[0,2],[1,2],[2,3],[3,0]]), [false, false, false, false, true], 'Test 160');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[1,4]], [[0,3],[0,4]]), [true, true], 'Test 161');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[1,4],[2,4]], [[0,4],[0,3],[1,4],[2,3],[3,4]]), [true, true, true, false, false], 'Test 162');
test(checkIfPrerequisite(3, [], [[0,1],[1,2],[2,0]]), [false, false, false], 'Test 163');
test(checkIfPrerequisite(3, [[1,2],[1,0]], [[0,1],[1,0],[2,0]]), [false, true, false], 'Test 164');
test(checkIfPrerequisite(3, [[1,0],[2,1]], [[0,1],[1,2],[0,2]]), [false, false, false], 'Test 165');
test(checkIfPrerequisite(3, [[1,0],[1,2]], [[0,1],[1,2]]), [false, true], 'Test 166');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[3,2]], [[0,1],[1,3],[2,3],[3,0]]), [false, false, false, true], 'Test 167');
test(checkIfPrerequisite(4, [[1,0],[2,0],[3,0]], [[0,1],[0,2],[0,3],[1,2]]), [false, false, false, false], 'Test 168');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[2,3],[2,4]], [[0,3],[0,4],[1,4],[2,0]]), [true, true, false, false], 'Test 169');
test(checkIfPrerequisite(6, [[1,2],[1,3],[2,4],[3,5]], [[1,4],[4,1],[1,5],[5,1]]), [true, false, true, false], 'Test 170');
test(checkIfPrerequisite(3, [[1,0],[1,2]], [[0,1],[1,0],[1,2]]), [false, true, true], 'Test 171');
test(checkIfPrerequisite(3, [], [[0,1],[1,0],[1,2]]), [false, false, false], 'Test 172');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,1],[1,3],[0,3]]), [true, true, true], 'Test 173');
test(checkIfPrerequisite(6, [[0,1],[2,3],[4,5]], [[0,1],[2,3],[4,5],[3,4]]), [true, true, true, false], 'Test 174');
test(checkIfPrerequisite(3, [], [[0,1],[1,0],[2,1]]), [false, false, false], 'Test 175');
test(checkIfPrerequisite(6, [[1,0],[2,0],[3,1],[4,2],[5,3],[5,4]], [[0,5],[1,5],[2,5],[3,5]]), [false, false, false, false], 'Test 176');
test(checkIfPrerequisite(6, [[1, 0], [2, 0], [3, 1], [4, 1], [5, 2]], [[3, 0], [5, 0], [4, 2], [1, 2]]), [true, true, false, false], 'Test 177');
test(checkIfPrerequisite(5, [[0,1],[0,2],[1,3],[2,3],[1,4],[2,4]], [[0,4],[1,4],[2,3],[3,4]]), [true, true, true, false], 'Test 178');
test(checkIfPrerequisite(4, [[2,0],[1,0],[3,1],[3,2]], [[0,1],[2,0],[0,3],[3,0],[2,3]]), [false, true, false, true, false], 'Test 179');
test(checkIfPrerequisite(4, [[0,1],[1,2],[2,3]], [[0,3],[1,3],[0,2],[3,0]]), [true, true, true, false], 'Test 180');
test(checkIfPrerequisite(5, [[0,1],[1,2],[2,3],[3,4]], [[0,1],[1,3],[0,4],[2,3],[4,2]]), [true, true, true, true, false], 'Test 181');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
