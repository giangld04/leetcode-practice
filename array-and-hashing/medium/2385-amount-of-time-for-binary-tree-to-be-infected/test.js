// Test: 2385. Amount Of Time For Binary Tree To Be Infected
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { amountOfTime } = require("./solution");

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

console.log("\n2385. Amount Of Time For Binary Tree To Be Infected\n");

test(amountOfTime([1,2,3,null,null,4,5], 4), 3, 'Test 1');
test(amountOfTime([1,null,2,null,3,null,4,null,5], 3), 2, 'Test 2');
test(amountOfTime([2,1,3], 1), 2, 'Test 3');
test(amountOfTime([1], 1), 0, 'Test 4');
test(amountOfTime([1,2,null,3,null,4,null,5], 3), 2, 'Test 5');
test(amountOfTime([1,2,3,4,5,6,7], 3), 3, 'Test 6');
test(amountOfTime([1,2,3,4,5,6,7], 2), 3, 'Test 7');
test(amountOfTime([1,5,3,null,4,10,6,9,2], 3), 4, 'Test 8');
test(amountOfTime([3,1,4,null,2], 2), 3, 'Test 9');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null,31,null,null,null,null,null,null,null,null,null,null,null,null,null,32,null,null,null,33,null,null,null,34,null,null,null,35], 17), 9, 'Test 10');
test(amountOfTime([7,1,4,2,5,null,null,null,null,3,6,8,9,10], 4), 5, 'Test 11');
test(amountOfTime([1,2,3,null,null,4,5,null,null,null,null,6,7,null,null,null,null,8,9], 3), 2, 'Test 12');
test(amountOfTime([1,5,3,null,4,10,6,9,2,7,null,11,null,null,8,null,null,null,null,null,12], 3), 5, 'Test 13');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8), 6, 'Test 14');
test(amountOfTime([10,5,15,3,8,null,20,1,4,6,9,null,null,11,13,null,null,12,14,null,null,null,null], 13), 6, 'Test 15');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 12), 7, 'Test 16');
test(amountOfTime([3,1,4,null,2,null,null,null,null,null,5], 5), 0, 'Test 17');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 16), 8, 'Test 18');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32,null,33,null,34,null,35], 20), 19, 'Test 19');
test(amountOfTime([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 7), 6, 'Test 20');
test(amountOfTime([50,25,75,12,37,62,87,6,18,31,43,56,68,81,93,3,9,15,21,29,34,39,47,51,59,65,71,76,83,89,92,null,11,null,null,null,null,null,null,null,null,null,14,null,17,20,null,28,null,null,33,36,38,42,null,46,null,50,null,58,null,64,67,70,null,75,null,82,null,null,88,null,91,null,null,94], 50), Error: maximum recursion depth exceeded, 'Test 21');
test(amountOfTime([1,2,3,null,4,null,5,null,null,6,7,8,9,null,null,10,11], 4), 7, 'Test 22');
test(amountOfTime([10,5,15,3,7,null,18,1,null,null,6,null,null,14,null,null,null,8,null,null,null,9,11,null,12,null,null,13,null,16,null,17,19,null,20,21], 10), 5, 'Test 23');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 15), 7, 'Test 24');
test(amountOfTime([1,2,3,4,null,5,6,null,null,7,null,null,null,8,9,null,null,10,11], 1), 5, 'Test 25');
test(amountOfTime([1,2,3,4,5,6,7,null,null,null,8,9,10,11,12,null,null,13,14,15,16,17,18,19,20], 10), 6, 'Test 26');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 13), 7, 'Test 27');
test(amountOfTime([3,5,1,6,2,0,8,null,null,7,4], 5), 3, 'Test 28');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 5, 'Test 29');
test(amountOfTime([1,5,3,null,4,10,6,9,2,null,null,null,null,null,7,8], 3), 5, 'Test 30');
test(amountOfTime([3,1,4,null,2,null,null,5,6], 5), 4, 'Test 31');
test(amountOfTime([20,15,25,10,18,23,27,5,12,null,19,22,24,26,28], 23), 5, 'Test 32');
test(amountOfTime([10,5,15,3,7,null,18,1,4,6,9,null,null,19], 10), 4, 'Test 33');
test(amountOfTime([1,2,3,4,null,5,6,7,null,null,null,null,8,9,10,11,12,null,null,13,14,15,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 12, 'Test 34');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], 3), 6, 'Test 35');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20], 20), 19, 'Test 36');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 25), 9, 'Test 37');
test(amountOfTime([1,2,3,4,5,null,null,6,7,null,null,8,9,null,null,10,11], 6), 4, 'Test 38');
test(amountOfTime([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15], 10), 6, 'Test 39');
test(amountOfTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 7, 'Test 40');
test(amountOfTime([1,2,3,4,5,null,6,7,8,9,10,null,null,11,12,null,13,null,null,14], 6), 6, 'Test 41');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], 5), 4, 'Test 42');
test(amountOfTime([8,5,12,4,6,11,13,null,null,7,9,null,null,10,14], 8), 3, 'Test 43');
test(amountOfTime([5,4,6,null,3,null,7,null,2,null,null,null,null,8,null], 4), 3, 'Test 44');
test(amountOfTime([1,2,3,4,null,5,6,7,null,8,9,null,null,10,null], 5), 6, 'Test 45');
test(amountOfTime([1,5,3,null,4,10,6,9,2,7,null,8,null,11,12], 3), 5, 'Test 46');
test(amountOfTime([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], 4), 9, 'Test 47');
test(amountOfTime([2,1,4,3,null,null,5,null,6,null,7,null,null,null,null,null,8], 1), 4, 'Test 48');
test(amountOfTime([7,5,8,null,6,null,9,null,null,null,10,11,12,null,null,null,null,null,null,null,null,13,14,15], 6), 6, 'Test 49');
test(amountOfTime([3,1,2,null,null,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8], 2), 2, 'Test 50');
test(amountOfTime([5,4,1,null,1,null,4,2,null,2,null,3], 4), Error: maximum recursion depth exceeded, 'Test 51');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19], 10), 9, 'Test 52');
test(amountOfTime([10,5,15,3,7,null,18], 3), 4, 'Test 53');
test(amountOfTime([3,1,4,null,2,null,null,null,null,5,6,7,8], 2), 3, 'Test 54');
test(amountOfTime([3,null,4,null,null,2,null,null,5,null,1,null,6], 4), 1, 'Test 55');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 3), 7, 'Test 56');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12], 6), 6, 'Test 57');
test(amountOfTime([1,2,3,4,null,5,6,7,null,null,null,null,8,9,10], 1), 4, 'Test 58');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 5), 5, 'Test 59');
test(amountOfTime([1,2,3,4,5,null,6,null,7,null,null,null,null,8,9], 3), 5, 'Test 60');
test(amountOfTime([7,3,15,null,null,9,20,null,null,8,null,16,null,null,null], 7), 4, 'Test 61');
test(amountOfTime([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 5), 7, 'Test 62');
test(amountOfTime([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], 1), 7, 'Test 63');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], 1), 14, 'Test 64');
test(amountOfTime([10,7,15,4,8,null,16,null,null,6,9,12,18,null,null,null,null,null,11,13], 10), 4, 'Test 65');
test(amountOfTime([1,2,3,null,4,5,null,null,6,null,7,null,null,null,null,8,null,9], 2), 4, 'Test 66');
test(amountOfTime([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31], 31), 30, 'Test 67');
test(amountOfTime([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31], 17), 16, 'Test 68');
test(amountOfTime([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15], 1), 6, 'Test 69');
test(amountOfTime([5,4,6,1,null,3,null,2,null,9,null,null,null,null,10,null,8,11,null,null,12], 5), 7, 'Test 70');
test(amountOfTime([5,1,7,null,null,3,8,null,4,6,null,null,null,null,2,null,null,null,null,9], 7), 3, 'Test 71');
test(amountOfTime([1,2,3,4,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 15), 12, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

