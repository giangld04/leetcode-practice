// Test: 114. Flatten Binary Tree To Linked List
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { flatten } = require("./solution");

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

console.log("\n114. Flatten Binary Tree To Linked List\n");

test(flatten([1,2,3,4,5,6,7]), null, 'Test 1');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7]), null, 'Test 2');
test(flatten([1,2,3,4]), null, 'Test 3');
test(flatten([1,null,2,null,3,null,4,null,5,null,6]), null, 'Test 4');
test(flatten([1,2,3,null,4,null,5,null,6]), null, 'Test 5');
test(flatten([1,2,3,4,5,null,7]), null, 'Test 6');
test(flatten([1,2]), null, 'Test 7');
test(flatten([1,null,null,2,null,3,null,4]), null, 'Test 8');
test(flatten([1,null,2]), null, 'Test 9');
test(flatten([1,2,null,3,null,4,null,5,null,6,null,7]), null, 'Test 10');
test(flatten([0]), null, 'Test 11');
test(flatten([1,2,5,3,4,null,6]), null, 'Test 12');
test(flatten([1,null,2,3,null,4,null,5,6]), null, 'Test 13');
test(flatten([]), null, 'Test 14');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), null, 'Test 15');
test(flatten([1,2,3,4,null,null,5,null,6,7,8,9,null,null,10,11,null,12,13,null,null,14]), null, 'Test 16');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,null,13,14,null,null,15,null,16,17,null,null,null,18,null,null,19,null,null,null,null,20]), null, 'Test 17');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), null, 'Test 18');
test(flatten([1,2,3,4,5,6,7,8,9,null,10,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), null, 'Test 19');
test(flatten([1,2,null,3,4,null,null,5,null,6,null,7,null,8,null,9,null,null,10,null,null,11,null,null,12]), null, 'Test 20');
test(flatten([1,2,3,4,5,6,null,7,8,9,10,11,12,null,13,null,14,null,15]), null, 'Test 21');
test(flatten([1,2,null,3,4,null,null,5,null,6,null,7,null,8,null,9,null,10]), null, 'Test 22');
test(flatten([1,2,3,4,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), null, 'Test 23');
test(flatten([1,2,3,null,4,5,null,6,7,8,9,null,10,null,null,11,12]), null, 'Test 24');
test(flatten([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15,null,null,16]), null, 'Test 25');
test(flatten([1,2,3,null,null,4,5,null,6,7,8,9,null,null,10,null,null,11,null,null,12]), null, 'Test 26');
test(flatten([1,2,3,null,4,5,6,7,null,null,null,8,null,null,9]), null, 'Test 27');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), null, 'Test 28');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), null, 'Test 29');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,null,null,17,null,null,18]), null, 'Test 30');
test(flatten([1,2,3,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15]), null, 'Test 31');
test(flatten([1,null,2,3,null,4,null,5]), null, 'Test 32');
test(flatten([1,2,null,3,4,null,5,null,null,6,7]), null, 'Test 33');
test(flatten([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), null, 'Test 34');
test(flatten([1,2,3,4,null,5,null,6,null,7,null,8,null,9]), null, 'Test 35');
test(flatten([1,2,3,null,null,4,5,null,null,6,null,7,null,null,null,null,8]), null, 'Test 36');
test(flatten([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), null, 'Test 37');
test(flatten([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), null, 'Test 38');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32,null,33,null,34,null,35]), null, 'Test 39');
test(flatten([1,2,null,null,3,null,null,4,null,null,5,null,null,6]), null, 'Test 40');
test(flatten([1,2,3,null,4,null,null,5,null,null,6,null,null,7,null,null,8]), null, 'Test 41');
test(flatten([1,2,3,4,5,null,null,6,7,8,9,null,10,null,null,11,null,null,12,13,14,null,null,15]), null, 'Test 42');
test(flatten([1,2,3,4,5,null,6,7,8,9,10,11,12,null,null,13,14]), null, 'Test 43');
test(flatten([1,2,3,4,5,null,null,6,null,7,null,8,null,9,null,10]), null, 'Test 44');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), null, 'Test 45');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25]), null, 'Test 46');
test(flatten([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), null, 'Test 47');
test(flatten([10,5,15,null,7,13,null,null,null,6,8,11,14,null,null,null,9]), null, 'Test 48');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), null, 'Test 49');
test(flatten([1,null,2,3,null,null,4,5,null,null,6,7,null,null,null,8,9,null,null,10,11]), null, 'Test 50');
test(flatten([1,2,3,null,null,4,5,null,null,6,7]), null, 'Test 51');
test(flatten([1,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7]), null, 'Test 52');
test(flatten([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), null, 'Test 53');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), null, 'Test 54');
test(flatten([3,9,20,null,null,15,7,null,null,18,19,21,22]), null, 'Test 55');
test(flatten([1,2,null,3,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), null, 'Test 56');
test(flatten([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), null, 'Test 57');
test(flatten([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), null, 'Test 58');
test(flatten([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9]), null, 'Test 59');
test(flatten([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), null, 'Test 60');
test(flatten([1,2,3,4,5,null,null,6,7,null,8,null,9,null,null,10,11,null,null,12,13]), null, 'Test 61');
test(flatten([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,9,10,11,12,null,null,null,null,13,null,14,null,15,null,16]), null, 'Test 62');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), null, 'Test 63');
test(flatten([1,2,3,4,5,6,null,7,8,9,10,null,null,11,12,13,14,null,null,15,16,17,null,null,18,19,20]), null, 'Test 64');
test(flatten([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), null, 'Test 65');
test(flatten([1,2,3,null,4,5,6,null,7,null,null,null,8,null,null,9,null,null,10,null,null,11,null,null,null,12,null,null,13,null,null,14,null,null,null,15]), null, 'Test 66');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), null, 'Test 67');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,16,17,18,19,20,null,null,null,null,21,22,23,24,25,26,27,28,29,30,null,31,null,32]), null, 'Test 68');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), null, 'Test 69');
test(flatten([1,2,3,null,4,null,5,6,7,null,null,null,null,8,null]), null, 'Test 70');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,17,18,19,20,null,21,22,23,24,null,25,26,27,28,29,30,null,31,32,33,34,35,36,37,38,39,40]), null, 'Test 71');
test(flatten([1,null,2,null,null,3,null,null,null,4,null,null,null,5]), null, 'Test 72');
test(flatten([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,null,17,null,18,null,19,null,20]), null, 'Test 73');
test(flatten([1,2,3,null,4,null,5,6,7,null,8,null,9,null,10]), null, 'Test 74');
test(flatten([5,3,8,1,4,null,9,null,2,null,null,null,6,7]), null, 'Test 75');
test(flatten([1,2,3,4,5,null,null,6,7,null,null,8,9]), null, 'Test 76');
test(flatten([1,2,3,4,5,null,null,6,7,null,null,null,null,8,9]), null, 'Test 77');
test(flatten([1,2,3,4,null,null,5,6,null,7,null,8,null,9,null,10,null,11,null,12]), null, 'Test 78');
test(flatten([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), null, 'Test 79');
test(flatten([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), null, 'Test 80');
test(flatten([1,2,null,null,3,4,null,null,5,null,6,7,null,null,8,9,null,null,10]), null, 'Test 81');
test(flatten([1,2,3,4,5,6,7,null,8,null,null,9,null,10,11,12,13,null,null,null,14,null,null,15]), null, 'Test 82');
test(flatten([1,2,3,4,null,null,5,null,null,6,7,null,null,null,null,null,8,9]), null, 'Test 83');
test(flatten([5,4,8,11,null,13,4,7,2,null,null,5,1]), null, 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

