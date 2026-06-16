// Test: 1372. Longest Zigzag Path In A Binary Tree
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { longestZigZag } = require("./solution");

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

console.log("\n1372. Longest Zigzag Path In A Binary Tree\n");

test(longestZigZag([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]), 3, 'Test 1');
test(longestZigZag([1,2,3,4,5,6,7]), 2, 'Test 2');
test(longestZigZag([1,null,2,null,3,null,4,null,5]), 1, 'Test 3');
test(longestZigZag([1,1,1,null,1,null,null,1,1,null,1]), 4, 'Test 4');
test(longestZigZag([1]), 0, 'Test 5');
test(longestZigZag([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12,13,14,15]), 3, 'Test 6');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 1, 'Test 7');
test(longestZigZag([1,null,2,3,null,null,4,5,null,null,6,null,null,7,8,null,null,9,null,null,10]), 5, 'Test 8');
test(longestZigZag([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,null,null,null,null,null,10]), 2, 'Test 9');
test(longestZigZag([1,2,3,null,4,5,null,6,null,7,8,9,null,10,null,null,11,null,null,12]), 3, 'Test 10');
test(longestZigZag([1,2,3,4,5,6,7,8,null,null,null,null,null,9,10]), 2, 'Test 11');
test(longestZigZag([1,2,null,3,4,null,null,5,6,null,7,null,8]), 4, 'Test 12');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6]), 1, 'Test 13');
test(longestZigZag([1,2,3,4,5,null,null,6,7,null,8,null,null,9,10,null,null,11,12,null,null,13,14,null,null,15,16]), 4, 'Test 14');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 1, 'Test 15');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 1, 'Test 16');
test(longestZigZag([1,null,3,2,null,null,4,5,null,null,6,7,null,null,8,9]), 8, 'Test 17');
test(longestZigZag([1,null,2,3,null,null,4,null,5,null,6,7,8,null,null,null,null,9,10,11,12,13,14,15]), 3, 'Test 18');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), 1, 'Test 19');
test(longestZigZag([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,null,null,null,null,18,19,20,null,null,21,22,null,null,23,24]), 4, 'Test 20');
test(longestZigZag([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 2, 'Test 21');
test(longestZigZag([1,null,2,3,null,null,4,5,null,null,6,7,8,null,null,9,null,10]), 6, 'Test 22');
test(longestZigZag([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), 2, 'Test 23');
test(longestZigZag([1,2,3,4,null,null,5,null,6,null,null,7,null,8,null,null,null,9]), 3, 'Test 24');
test(longestZigZag([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,16]), 3, 'Test 25');
test(longestZigZag([1,2,3,4,null,null,5,null,null,6,7,8,null,null,9,null,10,null,11]), 2, 'Test 26');
test(longestZigZag([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 4, 'Test 27');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 1, 'Test 28');
test(longestZigZag([1,2,3,null,null,4,5,6,7,8,9,10,11,12,13,null,null,null,14,15,16,17,18,19,20]), 5, 'Test 29');
test(longestZigZag([1,2,3,4,5,6,7,8,9,null,null,10,11,null,null,12,13,null,null,14,15]), 3, 'Test 30');
test(longestZigZag([1,2,3,4,5,6,7,null,null,null,8,null,9,null,10]), 3, 'Test 31');
test(longestZigZag([1,2,3,null,4,null,5,6,null,null,7,null,null,8,null,9]), 3, 'Test 32');
test(longestZigZag([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 2, 'Test 33');
test(longestZigZag([1,2,null,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 2, 'Test 34');
test(longestZigZag([1,null,2,null,null,null,3,null,null,null,null,4,null,null,null,null,5]), 1, 'Test 35');
test(longestZigZag([1,2,3,4,null,null,5,null,null,6,null,null,7,8,9]), 4, 'Test 36');
test(longestZigZag([1,2,3,4,null,5,null,6,null,7,null,8,null,9]), 2, 'Test 37');
test(longestZigZag([1,2,3,4,5,null,6,null,7,null,8,9,null,10]), 3, 'Test 38');
test(longestZigZag([1,null,2,3,null,null,4,null,null,5]), 3, 'Test 39');
test(longestZigZag([1,2,3,4,null,null,5,null,null,null,null,null,null,null,6,7,8,9,10,11]), 1, 'Test 40');
test(longestZigZag([1,2,3,null,4,null,null,5,6,null,7,null,8,null,null,null,9]), 4, 'Test 41');
test(longestZigZag([1,2,3,4,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 2, 'Test 42');
test(longestZigZag([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10]), 2, 'Test 43');
test(longestZigZag([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 3, 'Test 44');
test(longestZigZag([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 3, 'Test 45');
test(longestZigZag([1,2,3,null,4,null,5,null,null,6,7,null,null,8,9,10,11,12,13,14,15,null,null,null,null,null,16,null,17]), 3, 'Test 46');
test(longestZigZag([1,null,2,3,null,null,4,null,5,null,null,6,null,null,7]), 3, 'Test 47');
test(longestZigZag([1,null,2,3,null,null,4,null,5,null,6]), 3, 'Test 48');
test(longestZigZag([1,2,3,4,5,6,7,null,null,null,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 2, 'Test 49');
test(longestZigZag([1,2,3,null,4,5,6,null,7,null,8,9,10,null,null,null,null,11,12,13,14]), 3, 'Test 50');
test(longestZigZag([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 4, 'Test 51');
test(longestZigZag([1,2,3,null,4,null,5,null,null,6,7,null,8,9,null,null,null,10]), 3, 'Test 52');
test(longestZigZag([1,2,3,4,null,null,5,null,6,null,null,7,null,8]), 3, 'Test 53');
test(longestZigZag([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 2, 'Test 54');
test(longestZigZag([1,null,2,3,null,4,null,5,6,7,8,9,10,11,12]), 3, 'Test 55');
test(longestZigZag([1,null,2,3,null,null,4,5,null,null,6,null,null,7,8,null,null,9,10,null,null,11]), 5, 'Test 56');
test(longestZigZag([1,null,2,null,3,4,null,null,5,null,null,6,7]), 3, 'Test 57');
test(longestZigZag([1,null,2,null,null,null,3,null,null,null,4]), 1, 'Test 58');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), 1, 'Test 59');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17]), 1, 'Test 60');
test(longestZigZag([1,2,3,4,5,6,7,8,null,null,9,null,null,10,null,11,null,12]), 2, 'Test 61');
test(longestZigZag([1,null,2,3,null,4,5,null,6,null,null,null,7,null,8]), 3, 'Test 62');
test(longestZigZag([1,2,3,4,null,null,5,6,null,null,7,null,null,8,null,null,9]), 3, 'Test 63');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 1, 'Test 64');
test(longestZigZag([1,null,2,3,4,null,5,6,null,null,null,null,7,8,null,null,9,10]), 6, 'Test 65');
test(longestZigZag([1,2,null,3,4,5,6,7,8,9,10,11,12,13,14]), 4, 'Test 66');
test(longestZigZag([1,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), 2, 'Test 67');
test(longestZigZag([1,2,3,null,4,5,null,6,7,null,null,null,null,8,9,null,null,10,11]), 3, 'Test 68');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), 1, 'Test 69');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6,null,7]), 1, 'Test 70');
test(longestZigZag([1,null,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15]), 14, 'Test 71');
test(longestZigZag([1,2,null,null,3,4,null,null,5,null,null,6,7,null,null,8,null,null,9,10,null,null,11,12]), 4, 'Test 72');
test(longestZigZag([1,2,3,4,5,null,6,7,null,null,null,null,8,9,null,null,null,10,null,null,11,null,null,12]), 2, 'Test 73');
test(longestZigZag([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 2, 'Test 74');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 1, 'Test 75');
test(longestZigZag([1,2,null,3,null,null,4,null,5,null,null,6,null,null,7,null,null,8,null,9]), 2, 'Test 76');
test(longestZigZag([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11]), 2, 'Test 77');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), 1, 'Test 78');
test(longestZigZag([1,2,3,4,5,null,null,6,null,null,7,null,null,8,null,null,9]), 3, 'Test 79');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), 1, 'Test 80');
test(longestZigZag([1,2,3,4,null,null,5,6,7,null,null,null,null,null,8,9,null,null,10]), 3, 'Test 81');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25]), 1, 'Test 82');
test(longestZigZag([1,null,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11]), 10, 'Test 83');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 1, 'Test 84');
test(longestZigZag([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 1, 'Test 85');
test(longestZigZag([1,2,null,3,4,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), 3, 'Test 86');
test(longestZigZag([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,null,null,11]), 3, 'Test 87');
test(longestZigZag([1,2,3,null,4,5,null,6,7,null,8,9,null,10,11,null,12,13,null,14,15]), 3, 'Test 88');
test(longestZigZag([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 1, 'Test 89');
test(longestZigZag([1,2,3,null,null,4,5,null,6,null,null,7,8,null,9,10,null,null,null,11,12,13,null,14,null,15,null,16,null,17]), 5, 'Test 90');
test(longestZigZag([1,null,2,3,null,null,4,null,5,6,null,7]), 3, 'Test 91');
test(longestZigZag([1,2,3,4,5,6,7,8,9,null,null,null,null,null,10]), 2, 'Test 92');
test(longestZigZag([1,2,3,4,5,6,7,null,null,null,8,9,null,null,null,null,10,11,12,null,null,13,null,null,14]), 2, 'Test 93');
test(longestZigZag([1,null,2,3,4,null,null,null,5,null,6,null,null,7,null,8,null,9,null,10]), 2, 'Test 94');
test(longestZigZag([1,null,2,3,null,null,4,5,null,6,null,7]), 4, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

