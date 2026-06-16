// Test: 104. Maximum Depth Of Binary Tree
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { maxDepth } = require("./solution");

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

console.log("\n104. Maximum Depth Of Binary Tree\n");

test(maxDepth([1,2,3,4,5,6,7]), 3, 'Test 1');
test(maxDepth([1,2,2,3,3,null,null,4,4,5,5]), 4, 'Test 2');
test(maxDepth([1,null,2,null,3,null,4,null,5]), 5, 'Test 3');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 4, 'Test 4');
test(maxDepth([1,null,3,2,null,4,5]), 4, 'Test 5');
test(maxDepth([1,2,3,4,null,null,5]), 3, 'Test 6');
test(maxDepth([3,9,20,null,null,15,7,null,null,null,8]), 4, 'Test 7');
test(maxDepth([1,2,2,3,3,null,null,4,4]), 4, 'Test 8');
test(maxDepth([1,null,2]), 2, 'Test 9');
test(maxDepth([1,null,null,2,null,null,3,null,null,4,null,null,5]), 1, 'Test 10');
test(maxDepth([0]), 1, 'Test 11');
test(maxDepth([3,9,20,null,null,15,7]), 3, 'Test 12');
test(maxDepth([1]), 1, 'Test 13');
test(maxDepth([]), 0, 'Test 14');
test(maxDepth([3,9,20,null,null,15,7,8,null,6,null,4,null,1,null]), 5, 'Test 15');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 16');
test(maxDepth([1,2,2,3,null,null,3,4,null,null,4]), 4, 'Test 17');
test(maxDepth([3,9,20,15,7,16,8,13,14,18,19,20,21,22,23]), 4, 'Test 18');
test(maxDepth([1,2,3,4,null,null,5,null,null,6,null,null,7]), 5, 'Test 19');
test(maxDepth([10,5,15,3,7,null,18]), 3, 'Test 20');
test(maxDepth([1,2,2,3,3,null,null,4,4,4,4]), 4, 'Test 21');
test(maxDepth([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9]), 4, 'Test 22');
test(maxDepth([1,-2,-3,4,5,-6,-7,8,9,-10,-11,-12,-13,-14,-15]), 4, 'Test 23');
test(maxDepth([3,9,20,null,null,15,7,null,16,null,17,null,null,null,null,18]), 4, 'Test 24');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 15, 'Test 25');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 26');
test(maxDepth([1,2,3,4,5,null,null,6,7,null,8,null,null,null,null,null,9]), 5, 'Test 27');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), 8, 'Test 28');
test(maxDepth([1,2,null,3,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), 8, 'Test 29');
test(maxDepth([3,9,20,null,null,15,7,10,11,null,12]), 4, 'Test 30');
test(maxDepth([1,2,3,null,null,4,5,null,null,6,null,null,7,8,9]), 6, 'Test 31');
test(maxDepth([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), 8, 'Test 32');
test(maxDepth([3,9,20,null,null,15,7,16,17,18,19,null,null,20,null]), 5, 'Test 33');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 5, 'Test 34');
test(maxDepth([3,9,20,null,null,15,7,8,null,6,null,4,null,1,null,2]), 6, 'Test 35');
test(maxDepth([0,-1,-2,-3,-4,-5,-6]), 3, 'Test 36');
test(maxDepth([1,2,2,3,4,4,3,5,6,null,null,6,5]), 4, 'Test 37');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,16]), 5, 'Test 38');
test(maxDepth([1,null,2,3,null,null,4,5,null,null,null,6,7,null,null,8,9]), 5, 'Test 39');
test(maxDepth([1,2,3,null,4,null,5,null,null,6,null,7]), 5, 'Test 40');
test(maxDepth([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12,13]), 5, 'Test 41');
test(maxDepth([10,5,15,3,7,null,18,null,null,null,null,17,20]), 4, 'Test 42');
test(maxDepth([1,2,2,3,null,null,3,4,5,null,null,4,5]), 5, 'Test 43');
test(maxDepth([3,9,20,null,null,15,7,8,null,9,null,null,10]), 5, 'Test 44');
test(maxDepth([1,2,3,4,null,null,5,6,null,8,9,10,null,null,11,12]), 5, 'Test 45');
test(maxDepth([2,-1,-2,null,-3,null,-4,null,-5]), 4, 'Test 46');
test(maxDepth([1,2,3,null,null,4,5,null,null,6,7]), 4, 'Test 47');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32]), 32, 'Test 48');
test(maxDepth([10,9,20,null,null,15,7,12,13,14,15]), 4, 'Test 49');
test(maxDepth([3,9,20,null,null,15,7,8,10,11,null,12]), 5, 'Test 50');
test(maxDepth([1,2,3,4,null,null,5,null,6,null,7,null,null,8,null,9]), 6, 'Test 51');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 5, 'Test 52');
test(maxDepth([1,2,3,4,null,null,5,6,null,7,null,8,null,9]), 5, 'Test 53');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 5, 'Test 54');
test(maxDepth([3,9,null,15,7,25,30,35,null,null,null,40,null,null,null,null,45]), 6, 'Test 55');
test(maxDepth([2,1,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 6, 'Test 56');
test(maxDepth([1,2,null,3,null,4,null,5]), 5, 'Test 57');
test(maxDepth([5,4,7,3,null,2,null,-1,null,9]), 4, 'Test 58');
test(maxDepth([1,2,3,4,5,null,null,null,null,6,7,8,9]), 5, 'Test 59');
test(maxDepth([1,null,2,null,null,null,3,null,null,null,null,4]), 2, 'Test 60');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 6, 'Test 61');
test(maxDepth([3,9,20,null,null,15,7,8,9]), 4, 'Test 62');
test(maxDepth([1,2,3,4,null,null,5,null,6,null,null,7,null,8]), 6, 'Test 63');
test(maxDepth([1,2,3,null,4,null,5,null,null,null,6,null,7,null,8,null,9,null,10,null,11]), 9, 'Test 64');
test(maxDepth([1,2,3,4,null,null,5,null,null,null,null,6,null,null,7,null,null,8,null,null,9]), 3, 'Test 65');
test(maxDepth([1,2,3,4,5,null,7,8,null,null,null,null,9]), 4, 'Test 66');
test(maxDepth([1,2,3,4,5,6,7,8,null,9,null,10,null,11,null,12]), 5, 'Test 67');
test(maxDepth([3,9,20,null,null,15,7,1,null,18,null,null,21]), 5, 'Test 68');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7]), 7, 'Test 69');
test(maxDepth([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,null,9,null,null,null,null,10]), 5, 'Test 70');
test(maxDepth([1,2,3,4,null,null,5,null,null,6,7,null,8,null,9]), 5, 'Test 71');
test(maxDepth([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,null,null,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 8, 'Test 72');
test(maxDepth([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 15, 'Test 73');
test(maxDepth([3,9,20,null,null,15,7,null,null,16,17,null,null,null,null,18]), 4, 'Test 74');
test(maxDepth([1,2,2,3,null,null,3,4,4,null,null,4,4]), 5, 'Test 75');
test(maxDepth([0,1,2,3,4,5,6,null,null,7,8,9,10,null,null,11,12]), 5, 'Test 76');
test(maxDepth([50,25,75,10,35,65,100,null,null,30,40,60,80,null,null,null,null,90,110]), 5, 'Test 77');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), 20, 'Test 78');
test(maxDepth([0,2,4,1,null,3,-1,5,1,null,6,null,8]), 4, 'Test 79');
test(maxDepth([3,9,20,8,10,15,7,6,null,null,null,null,18]), 4, 'Test 80');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), 6, 'Test 81');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6]), 6, 'Test 82');
test(maxDepth([3,9,20,null,null,15,7,null,null,16,17,null,null,18,19]), 5, 'Test 83');
test(maxDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), 7, 'Test 84');
test(maxDepth([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 6, 'Test 85');
test(maxDepth([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15]), 5, 'Test 86');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 12, 'Test 87');
test(maxDepth([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5]), 5, 'Test 88');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), 13, 'Test 89');
test(maxDepth([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 90');
test(maxDepth([3,9,20,15,7,null,null,8,null,null,null,null,10]), 5, 'Test 91');
test(maxDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 11, 'Test 92');
test(maxDepth([1,2,3,4,5,6,7,null,8,null,9,null,null,10]), 4, 'Test 93');
test(maxDepth([1,null,null,null,null,null,null]), 1, 'Test 94');
test(maxDepth([1,2,3,4,5,6,7,8,null,null,9,null,null,10,11,12,null,null,13,14,15,null,null,null,null,null,null,16]), 6, 'Test 95');
test(maxDepth([-10,9,20,null,null,15,7]), 3, 'Test 96');
test(maxDepth([1,2,3,4,null,null,5,6,7,null,null,null,null,null,null,8,9]), 4, 'Test 97');
test(maxDepth([1,2,2,3,4,4,3]), 3, 'Test 98');
test(maxDepth([1,2,3,4,5,null,null,6,7,8,9,null,null,null,10,null,11]), 5, 'Test 99');
test(maxDepth([5,4,8,11,null,13,4,7,2,null,null,5,1]), 4, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

