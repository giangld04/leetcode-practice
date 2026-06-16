// Test: 1302. Deepest Leaves Sum
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { deepestLeavesSum } = require("./solution");

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

console.log("\n1302. Deepest Leaves Sum\n");

test(deepestLeavesSum([1,2,3]), 5, 'Test 1');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 92, 'Test 2');
test(deepestLeavesSum([1,2,null,3,null,4,null,5]), 5, 'Test 3');
test(deepestLeavesSum([1,2,3,4,5,null,6,7,null,null,null,null,8]), 15, 'Test 4');
test(deepestLeavesSum([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]), 19, 'Test 5');
test(deepestLeavesSum([1]), 1, 'Test 6');
test(deepestLeavesSum([1,2,3,4,null,null,5,null,null,null,null,6]), 9, 'Test 7');
test(deepestLeavesSum([3,9,20,null,null,15,7,1,null,null,2,null,null,3,null,null,4]), 4, 'Test 8');
test(deepestLeavesSum([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12,13,14,15]), 29, 'Test 9');
test(deepestLeavesSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 10');
test(deepestLeavesSum([2,4,6,8,10,12,14,null,null,null,null,null,null,16,18,null,null,null,null,null,null,20,22,24,null,null,null,null,26,28,30]), 34, 'Test 11');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,31]), 31, 'Test 12');
test(deepestLeavesSum([1,2,3,null,4,5,null,6,7,null,8,9,null,10,11,null,12,13,null,14,15,null,16,17,null,18,19,null,20,21]), 78, 'Test 13');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,null,null,null,null,null,21]), 111, 'Test 14');
test(deepestLeavesSum([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 184, 'Test 15');
test(deepestLeavesSum([5,4,5,4,7,null,null,null,null,7,7]), 14, 'Test 16');
test(deepestLeavesSum([5,10,null,15,20,null,25,30,35,null,null,40,45,null,null,null,null,null,null,50,55]), 85, 'Test 17');
test(deepestLeavesSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 15, 'Test 18');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,17,null,null,null,null,18,null,null,null,null,19,null,null,null,null,20,null,null,null,null,21,null,null,null,null,22,null,null,null,null,23,null,null,null,null,24,null,null,null,null,25]), 33, 'Test 19');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null,31,32,null,null,null,null,35,36,37,38]), 209, 'Test 20');
test(deepestLeavesSum([1,2,null,4,null,null,null,8,null,null,null,null,null,null,null,16]), 4, 'Test 21');
test(deepestLeavesSum([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,9,10]), 19, 'Test 22');
test(deepestLeavesSum([5,4,8,11,null,13,4,7,2,null,null,null,1,null,3]), 3, 'Test 23');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null,31,32]), 63, 'Test 24');
test(deepestLeavesSum([1,2,3,4,5,null,6,null,7,8,null,null,null,null,null,null,null,9,10,null,null,null,null,11]), 15, 'Test 25');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,17,null,null,null,null,18,null,null,null,null,19,null,null,null,null,20,null,null,null,null,21,null,null,null,null,22,null,null,null,null,23,null,null,null,null,24]), 33, 'Test 26');
test(deepestLeavesSum([4,2,7,1,3,6,9,null,null,null,null,5,8,null,null,13,14]), 27, 'Test 27');
test(deepestLeavesSum([5,3,8,1,4,null,10,null,null,null,9,7,11]), 27, 'Test 28');
test(deepestLeavesSum([3,9,20,null,null,15,7,11,null,12,null,13,null,14,null,15]), 15, 'Test 29');
test(deepestLeavesSum([31,15,47,7,23,39,55,3,11,19,27,35,43,51,59,1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,63]), 63, 'Test 30');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25]), 72, 'Test 31');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15,null,null,16,null,null,17,null,null,18,null,null,19,null,null,20,null,null,21,null,null,22,null,null,23,null,null,24,null,null,25]), 15, 'Test 32');
test(deepestLeavesSum([5,10,15,20,25,30,35,null,40,null,null,null,45,null,null,50,55]), 105, 'Test 33');
test(deepestLeavesSum([1,2,2,3,3,null,null,4,4,4,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 16, 'Test 34');
test(deepestLeavesSum([5,3,8,1,4,7,10,null,null,null,6,null,9,null,null,11,12]), 23, 'Test 35');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 234, 'Test 36');
test(deepestLeavesSum([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80]), 500, 'Test 37');
test(deepestLeavesSum([9,18,27,36,45,54,63,72,81,90,null,99,null,null,null,null,null,null,null,null,null,null,108,117,126,135,144,153,162,171,180]), 351, 'Test 38');
test(deepestLeavesSum([5,4,8,11,null,13,4,7,2,null,null,null,1]), 10, 'Test 39');
test(deepestLeavesSum([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,10,11,null,null,null,null,null,null,null,null,12,null,null,null,13]), 21, 'Test 40');
test(deepestLeavesSum([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15,null,null,16,17]), 33, 'Test 41');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 345, 'Test 42');
test(deepestLeavesSum([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32,null,33,null,34,null,35,null,36,null,37]), 37, 'Test 43');
test(deepestLeavesSum([1,2,3,null,5,6,null,7,null,null,8,null,null,9,null,null,10]), 10, 'Test 44');
test(deepestLeavesSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,null,6]), 6, 'Test 45');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 90, 'Test 46');
test(deepestLeavesSum([1,2,3,4,5,6,7,null,8,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), 20, 'Test 47');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,29,30]), 59, 'Test 48');
test(deepestLeavesSum([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 140, 'Test 49');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,17,null,null,null,null,18,null,null,null,null,19,null,null,null,null,20,null,null,null,null,21,null,null,null,null,22,null,null,null,null,23]), 33, 'Test 50');
test(deepestLeavesSum([3,9,20,null,null,15,7,25,30,40,50,60,70,80,90]), 300, 'Test 51');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 205, 'Test 52');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 779, 'Test 53');
test(deepestLeavesSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,null,9]), 9, 'Test 54');
test(deepestLeavesSum([1,2,3,null,null,null,4,null,null,null,null,5,null,null,null,null,6,null,null,null,null,7,null,null,null,null,8,null,null,null,null,9]), 4, 'Test 55');
test(deepestLeavesSum([3,9,20,null,null,15,7,1,null,null,null,null,2,null,null,16]), 2, 'Test 56');
test(deepestLeavesSum([10,9,20,null,null,15,7,null,null,1,2,null,null,3,4]), 7, 'Test 57');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null,31,32,null,null,33,34]), 130, 'Test 58');
test(deepestLeavesSum([1,2,3,null,4,5,6,null,null,7,8,9,10,11,12,null,null,null,null,null,13,14,15]), 29, 'Test 59');
test(deepestLeavesSum([1,2,3,4,null,null,5,6,7,8,9,null,null,null,null,null,null,10,11,12,13]), 25, 'Test 60');
test(deepestLeavesSum([1,null,2,null,3,null,4,null,5,null,6,null,7]), 7, 'Test 61');
test(deepestLeavesSum([20,15,25,10,18,23,30,5,12,16,19,22,24,29,32,3,7,11,13,14,17,21,26,28,31,33]), 204, 'Test 62');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,17,null,null,null,null,18,null,null,null,null,19,null,null,null,null,20,null,null,null,null,21,null,null,null,null,22,null,null,null,null,23,null,null,null,null,24,null,null,null,null,25,null,null,null,null,26]), 33, 'Test 63');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,null,null,null,null,null,null,21,22,23,24,25,26,27,28,29,30,null,null,null,null,31,32,33,34,35]), 165, 'Test 64');
test(deepestLeavesSum([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 15, 'Test 65');
test(deepestLeavesSum([1,2,3,4,null,6,null,7,null,null,null,8,null,9,null,null,null,null,10,null]), 9, 'Test 66');
test(deepestLeavesSum([1,2,3,4,null,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21]), 60, 'Test 67');
test(deepestLeavesSum([9,4,5,null,null,6,7,null,null,null,null,null,8]), 13, 'Test 68');
test(deepestLeavesSum([9,3,15,2,7,12,20,1,null,5,8,11,null,null,13,null,null,6,4,9,null,10]), 29, 'Test 69');
test(deepestLeavesSum([20,15,25,10,18,22,30,8,null,14,19,null,21,24,32]), 118, 'Test 70');
test(deepestLeavesSum([10,9,8,7,6,5,4,3,2,1,null,null,null,null,null,null,null,null,null,null,null,0]), 6, 'Test 71');
test(deepestLeavesSum([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), 20, 'Test 72');
test(deepestLeavesSum([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 17, 'Test 73');
test(deepestLeavesSum([10,5,15,3,7,null,18,1,null,6,8,16,20]), 51, 'Test 74');
test(deepestLeavesSum([10,5,15,3,7,13,18,1,null,6,null,null,null,null,14]), 21, 'Test 75');
test(deepestLeavesSum([1,2,3,null,5,null,6,null,7,8,9,null,null,null,null,null,null,10,11]), 24, 'Test 76');
test(deepestLeavesSum([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 77');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,null,null,36]), 341, 'Test 78');
test(deepestLeavesSum([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 12, 'Test 79');
test(deepestLeavesSum([10,5,15,3,7,null,18,1,null,6,8,null,null,14,null,17,19]), 50, 'Test 80');
test(deepestLeavesSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 12, 'Test 81');
test(deepestLeavesSum([7,14,21,28,35,null,42,49,56,63,null,70,77,null,null,null,null,null,null,null,null,84,91,98]), 98, 'Test 82');
test(deepestLeavesSum([1,2,3,4,null,null,5,null,null,6,7,null,null,8,9,null,null,10,11]), 21, 'Test 83');
test(deepestLeavesSum([1,2,3,null,4,null,5,null,6,null,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 306, 'Test 84');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,17,null,null,null,null,18,null,null,null,null,19,null,null,null,null,20,null,null,null,null,21]), 17, 'Test 85');
test(deepestLeavesSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 11, 'Test 86');
test(deepestLeavesSum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 31, 'Test 87');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25]), 205, 'Test 88');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25]), 115, 'Test 89');
test(deepestLeavesSum([1,2,3,4,5,null,6,7,null,null,null,null,8,null,null,null,null,null,9,null,null,null,null,10,null,null,null,null,11,null,null,null,null,12]), 15, 'Test 90');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]), 305, 'Test 91');
test(deepestLeavesSum([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,null,null,null,null,null,null,null,null,null,null,null,null,null,105,110,115,120,125,130,135,140,145,150]), 295, 'Test 92');
test(deepestLeavesSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,17,null,null,null,null,18,null,null,null,null,19,null,null,null,null,20]), 33, 'Test 93');
test(deepestLeavesSum([1,2,3,null,null,4,null,null,5,null,null,null,null,null,null,6,null,null,null,null,null,null,null,null,7]), 5, 'Test 94');
test(deepestLeavesSum([1,3,null,null,2]), 2, 'Test 95');
test(deepestLeavesSum([1,2,3,4,null,5,6,null,7,8,null,9,10,null,11,12,null,13,14,null,15,16,null,17,18,null,19,20,null,21,22,null,23,24,null,25,26,null,27,28,null,29,30]), 212, 'Test 96');
test(deepestLeavesSum([3,6,9,12,15,null,18,null,null,null,null,21,24,null,null,null,null,null,null,null,27,null,null,null,null,30]), 45, 'Test 97');
test(deepestLeavesSum([5,4,8,11,null,13,4,7,2,null,null,5,1]), 15, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

