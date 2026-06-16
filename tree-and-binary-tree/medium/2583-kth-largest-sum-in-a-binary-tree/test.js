// Test: 2583. Kth Largest Sum In A Binary Tree
// 47 test cases from LeetCodeDataset
// Run: node test.js

const { kthLargestLevelSum } = require("./solution");

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

console.log("\n2583. Kth Largest Sum In A Binary Tree\n");

test(kthLargestLevelSum(root), Error: Solution.kthLargestLevelSum[] missing 2 required positional arguments: 'root' and 'k', 'Test 1');
test(kthLargestLevelSum(k), Error: Solution.kthLargestLevelSum[] missing 2 required positional arguments: 'root' and 'k', 'Test 2');
test(kthLargestLevelSum([5,6,7,8,9,10,11,12,13,14,15], 5), -1, 'Test 3');
test(kthLargestLevelSum([5,2,3,null,null,1,6,4,null,null,null,null,7], 3), 5, 'Test 4');
test(kthLargestLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4), 1, 'Test 5');
test(kthLargestLevelSum([3,9,20,null,null,15,7,8,null,null,null,null,11], 4), 8, 'Test 6');
test(kthLargestLevelSum([10,5,15,3,7,null,18], 3), 10, 'Test 7');
test(kthLargestLevelSum([10,5,15,3,7,null,18], 2), 20, 'Test 8');
test(kthLargestLevelSum([7,10,11,2,4,5,3,null,null,null,null,null,null,1], 4), 1, 'Test 9');
test(kthLargestLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), -1, 'Test 10');
test(kthLargestLevelSum([1,null,2,null,3,null,4,null,5], 3), 3, 'Test 11');
test(kthLargestLevelSum([10,5,15,3,7,12,18,1,4,6,8,11,13,17,19], 3), 20, 'Test 12');
test(kthLargestLevelSum([10,5,15,3,7,12,20,1,4,6,8,11,14,18,25], 4), 10, 'Test 13');
test(kthLargestLevelSum([5,3,8,1,4,7,9,2,6,null,null,null,null,null,null,null,10], 5), 5, 'Test 14');
test(kthLargestLevelSum([10,9,8,7,6,5,4,3,2,1], 4), 6, 'Test 15');
test(kthLargestLevelSum([1,3,2,5,6,3,9], 2), 5, 'Test 16');
test(kthLargestLevelSum([10,20,30,40,50,60,70], 4), -1, 'Test 17');
test(kthLargestLevelSum([1,3,2,5], 2), 5, 'Test 18');
test(kthLargestLevelSum([5,8,9,2,1,3,7,4,6], 2), 13, 'Test 19');
test(kthLargestLevelSum([10,20,30,40,50,60,70,80,90,100], 4), 10, 'Test 20');
test(kthLargestLevelSum([1,3,2,15,20,7], 2), 5, 'Test 21');
test(kthLargestLevelSum([1,2,2,3,3,3,3], 2), 4, 'Test 22');
test(kthLargestLevelSum([3,9,20,null,null,15,7], 2), 22, 'Test 23');
test(kthLargestLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 5), 5, 'Test 24');
test(kthLargestLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 3), 22, 'Test 25');
test(kthLargestLevelSum([1,3,2,5,6,7,8], 3), 1, 'Test 26');
test(kthLargestLevelSum([1,3,2,5,6,7,4], 4), -1, 'Test 27');
test(kthLargestLevelSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3), 5, 'Test 28');
test(kthLargestLevelSum([3,9,20,null,null,15,7], 1), 29, 'Test 29');
test(kthLargestLevelSum([1,2,null,3], 1), 3, 'Test 30');
test(kthLargestLevelSum([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 4), 7, 'Test 31');
test(kthLargestLevelSum([1,3,2,5,6,7], 3), 1, 'Test 32');
test(kthLargestLevelSum([7,3,15,null,null,9,20,null,null,11,17], 4), 7, 'Test 33');
test(kthLargestLevelSum([1,null,2,null,3,null,4,null,5], 2), 4, 'Test 34');
test(kthLargestLevelSum([5,3,6,2,4,null,null,1,null,null,null], 5), -1, 'Test 35');
test(kthLargestLevelSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), -1, 'Test 36');
test(kthLargestLevelSum([100,90,80,70,60,50,40,30,20,10], 5), -1, 'Test 37');
test(kthLargestLevelSum([5,2,6,null,4,null,8], 2), 8, 'Test 38');
test(kthLargestLevelSum([5,3,8,2,4,7,9], 6), -1, 'Test 39');
test(kthLargestLevelSum([7,3,15,null,null,9,20,null,null,8,16,18,25], 5), 7, 'Test 40');
test(kthLargestLevelSum([1,2,3,4,null,null,5], 3), 1, 'Test 41');
test(kthLargestLevelSum([1,2,3,4,5,6,7], 3), 1, 'Test 42');
test(kthLargestLevelSum([5,2,6,1,null,4,null,null,3,null,null,null,7], 2), 7, 'Test 43');
test(kthLargestLevelSum([1], 1), 1, 'Test 44');
test(kthLargestLevelSum([6,10,2,null,8,3,3,null,null,1,5,null,null,9,7,null,4,6,null,null,null,2], 3), 12, 'Test 45');
test(kthLargestLevelSum([5,2,13,null,8,null,null,null,9], 1), 15, 'Test 46');
test(kthLargestLevelSum([5,2,-3], 1), 5, 'Test 47');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

