// Test: 106. Construct Binary Tree From Inorder And Postorder Traversal
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { buildTree } = require("./solution");

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

console.log("\n106. Construct Binary Tree From Inorder And Postorder Traversal\n");

test(buildTree([-1], [-1]), [-1], 'Test 1');
test(buildTree([1,2], [2,1]), [1, null, 2], 'Test 2');
test(buildTree([3,2,1], [3,2,1]), [1, 2, null, 3], 'Test 3');
test(buildTree([1,2,3,4,5], [1,2,5,4,3]), [3, 2, 4, 1, null, null, 5], 'Test 4');
test(buildTree([1,2,3,4], [1,2,4,3]), [3, 2, 4, 1], 'Test 5');
test(buildTree([1,2,3,4,5,6,7], [1,3,2,5,7,6,4]), [4, 2, 6, 1, 3, 5, 7], 'Test 6');
test(buildTree([9,3,15,20,7], [9,15,7,20,3]), [3, 9, 20, null, null, 15, 7], 'Test 7');
test(buildTree([4,2,5,1,6,3,7], [4,5,2,6,7,3,1]), [1, 2, 3, 4, 5, 6, 7], 'Test 8');
test(buildTree([2,1,3,5,4,8,6,7,9,11,10,13,12,14,15], [2,5,3,1,11,10,13,9,8,15,14,7,6,4,1]), Error: maximum recursion depth exceeded, 'Test 9');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,4,3,6,8,10,9,7,5,12,14,16,17,15,13,11,18,20,19]), [19, 18, 20, 11, null, null, null, 5, 13, 3, 7, 12, 15, 2, 4, 6, 9, null, null, 14, 17, 1, null, null, null, null, null, 8, 10, null, null, 16], 'Test 10');
test(buildTree([7,10,4,3,1,2,8,11,5,9,6], [7,10,4,3,11,8,9,5,6,2,1]), [1, 3, 2, 4, null, null, 6, 10, null, 5, null, 7, null, 8, 9, null, null, null, 11], 'Test 11');
test(buildTree([5,4,8,7,10,9,1,3,6,2], [5,8,10,9,7,4,6,3,2,1]), [1, 4, 2, 5, 7, 3, null, null, null, 8, 9, null, 6, null, null, 10], 'Test 12');
test(buildTree([17,11,23,3,27,21,5,13,25,7,15,9,19,1,28,4,20,18,12,8,6,16,10,2,26,24,14,22], [17,23,11,27,21,5,25,13,15,19,9,28,20,18,12,8,16,10,26,24,14,22,4,1]), Error: list index out of range, 'Test 13');
test(buildTree([3,1,4,2,5,9,6,7,8], [3,4,1,9,7,8,6,5,2]), [2, 1, 5, 3, 4, null, 6, null, null, null, null, 9, 8, null, null, 7], 'Test 14');
test(buildTree([1,4,2,3,5,6,7,9,8,10,11,12,13,14,15], [4,3,2,7,6,5,14,15,13,12,10,11,9,8,1]), Error: maximum recursion depth exceeded, 'Test 15');
test(buildTree([2,4,5,7,11,13,15,17,19,21,23,25], [2,5,4,11,15,13,7,23,25,21,19,17]), [17, 7, 19, 4, 13, null, 21, 2, 5, 11, 15, null, 25, null, null, null, null, null, null, null, null, 23], 'Test 16');
test(buildTree([10,5,15,3,7,1,18,13,20,8,2,6,12,4,17,19,9,11,14,16], [10,15,5,7,18,20,13,8,6,12,2,17,19,4,16,14,11,9,3,1]), Error: maximum recursion depth exceeded, 'Test 17');
test(buildTree([1,2,5,3,4,6,8,7,9,11,10,12,13,14,15], [1,5,2,4,3,8,11,10,12,9,7,6,14,15,13]), [13, 6, 15, 3, 7, 14, null, 2, 4, 8, 9, null, null, 1, 5, null, null, null, null, null, 12, null, null, null, null, 10, null, 11], 'Test 18');
test(buildTree([1,3,2,5,4,8,7,6,9,11,10,13,12], [1,3,5,8,7,6,2,4,11,13,12,10,9]), Error: maximum recursion depth exceeded, 'Test 19');
test(buildTree([4,2,5,1,6,9,8,7,3,11,10], [4,5,2,6,9,7,8,1,11,10,3]), [3, 1, 10, 2, 8, 11, null, 4, 5, 9, 7, null, null, null, null, null, null, 6], 'Test 20');
test(buildTree([5,3,8,1,4,9,7,2,6,11,10,12], [5,8,3,9,4,1,11,12,10,6,2,7]), [7, 1, 2, 3, 4, null, 6, 5, 8, null, 9, null, 10, null, null, null, null, null, null, 11, 12], 'Test 21');
test(buildTree([7,3,10,8,1,9,2,14,12,6,13,15,4,11,5], [7,10,14,15,13,12,6,9,8,3,11,5,4,2,1]), Error: maximum recursion depth exceeded, 'Test 22');
test(buildTree([5,3,7,1,9,11,13,15,17,19,21,23,25,27,29], [5,7,3,9,11,13,15,17,19,21,23,25,27,29,1]), [1, 3, 29, 5, 7, 27, null, null, null, null, null, 25, null, 23, null, 21, null, 19, null, 17, null, 15, null, 13, null, 11, null, 9], 'Test 23');
test(buildTree([16,8,17,4,18,9,19,2,20,10,21,5,22,11,23,1,24,6,25,12,26,3,27,7,28,13,29,14,30,15], [16,17,8,18,19,9,4,20,21,10,22,23,5,11,2,24,25,12,26,27,6,28,29,13,30,14,15,7,3,1]), Error: maximum recursion depth exceeded, 'Test 24');
test(buildTree([2,3,1,6,5,10,8,9,7,12,11,14,13,15], [2,3,6,10,14,15,13,11,12,9,8,7,5,1]), Error: maximum recursion depth exceeded, 'Test 25');
test(buildTree([5,4,8,11,13,4,7,2,1], [5,11,13,8,4,7,2,1,4]), Error: maximum recursion depth exceeded, 'Test 26');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [20, 19, null, 18, null, 17, null, 16, null, 15, null, 14, null, 13, null, 12, null, 11, null, 10, null, 9, null, 8, null, 7, null, 6, null, 5, null, 4, null, 3, null, 2, null, 1], 'Test 27');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12], [1,3,2,5,7,6,4,9,11,12,10,8]), [8, 4, 10, 2, 6, 9, 12, 1, 3, 5, 7, null, null, 11], 'Test 28');
test(buildTree([3,6,5,2,9,12,10,11,8,4,14,15,13,7,1,16], [3,6,12,9,10,11,8,14,15,13,7,16,4,1]), Error: list index out of range, 'Test 29');
test(buildTree([2,3,4,1,7,5,8,6,11,9,10,12,13], [2,4,3,7,11,10,12,9,8,6,5,1,13]), Error: maximum recursion depth exceeded, 'Test 30');
test(buildTree([8,4,9,2,10,5,11,1,12,6,13,3,14,7,15], [8,9,10,11,5,4,12,13,14,15,7,6,3,2,1]), Error: maximum recursion depth exceeded, 'Test 31');
test(buildTree([7,3,11,1,13,4,15,2,17,5,19,6,21,8,23,9,25,10,27,20,29,12,31,30,33,22,35,14,37,16,39,18,41,32,43,40,45,24,5,1], [7,11,13,15,4,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,40,32,24,30,22,18,16,14,12,10,9,8,6,5,3,2,1]), Error: list index out of range, 'Test 32');
test(buildTree([8,5,1,7,10,12,6,3,4,2,9,11], [8,1,10,7,5,12,9,11,6,4,3,2]), Error: maximum recursion depth exceeded, 'Test 33');
test(buildTree([16,8,17,4,18,9,19,2,20,10,21,5,22,11,23,1,24,6,25,12,26,3,27,7,28], [16,17,8,18,19,9,4,20,21,10,22,11,5,23,2,24,25,12,26,6,27,28,7,3,1]), [1, 2, 3, 4, 23, 6, 7, 8, 9, 5, null, 24, 26, 27, 28, 16, 17, 18, 19, 10, 11, null, null, 12, null, null, null, null, null, null, null, null, null, null, null, null, null, 20, 21, 22, null, 25], 'Test 34');
test(buildTree([1,2,3,4,5,6,7,8,9], [1,3,2,5,4,7,9,8,6]), [6, 4, 8, 2, 5, 7, 9, 1, 3], 'Test 35');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,5,4,7,6,9,8,11,10,13,12,15,14]), [14, 12, 15, 10, 13, null, null, 8, 11, null, null, 6, 9, null, null, 4, 7, null, null, 2, 5, null, null, 1, 3], 'Test 36');
test(buildTree([1,2,3,4,5,6,7,8,9], [1,2,4,3,6,8,9,7,5]), [5, 3, 7, 2, 4, 6, 9, 1, null, null, null, null, null, 8], 'Test 37');
test(buildTree([3,1,2,4,6,5,7], [3,2,1,6,7,5,4]), [4, 1, 5, 3, 2, 6, 7], 'Test 38');
test(buildTree([3,9,20,15,7,10,25,30], [3,15,7,20,10,30,25,9]), [9, 3, 25, null, null, 10, 30, 20, null, null, null, null, 7, 15], 'Test 39');
test(buildTree([3,1,2,5,4,7,6], [3,2,1,7,6,5,4]), Error: maximum recursion depth exceeded, 'Test 40');
test(buildTree([29,4,33,12,35,3,39,5,42,14,46,7,2,26,50,17,48,11,44,23,52,9,30,37,32,18,31,40,1,51,38,36,43,27,24,21,22,47,49,53,8,13,6,28,25,15,10,16,19,34,20,41,19,45,41,30,20,7,3,9,5,1], [29,33,35,4,5,42,46,14,7,28,50,26,18,40,31,37,32,30,44,48,17,12,21,24,27,23,49,53,47,22,41,19,34,41,45,19,20,30,43,25,15,10,16,8,13,6,9,11,52,45,41,1,51,38,36,7,3,2,14,20,17,11,5,39,42,13,15,9,6,23,10,7,25,16,12,3,5,4,20,1]), Error: maximum recursion depth exceeded, 'Test 41');
test(buildTree([5,2,8,11,3,1,9,6,12,4,7,10], [5,11,8,2,12,9,10,7,6,4,3,1]), Error: maximum recursion depth exceeded, 'Test 42');
test(buildTree([10,5,15,3,20,7,25,2,30,8,35,9,40,1,45,11,50,12,55,6,60,13,65,14,70,15,75,3,80,4,85,5,90,6,95,7,100,8,105,9,110,10,115,11,120,12,125,13,130,14,135,15,140], [10,15,5,20,3,25,4,30,8,35,9,40,1,50,11,45,6,60,12,130,13,65,14,70,15,75,8,80,4,85,5,90,6,95,7,100,8,105,9,110,10,115,11,120,12,125,13,135,14,140]), Error: list index out of range, 'Test 43');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,5,4,7,6,9,11,13,15,14,12,10,8]), [8, 6, 10, 4, 7, 9, 12, 2, 5, null, null, null, null, 11, 14, 1, 3, null, null, null, null, 13, 15], 'Test 44');
test(buildTree([10,5,11,1,6,2,7,12,8,3,9], [10,11,5,12,7,6,2,9,8,3,1]), Error: maximum recursion depth exceeded, 'Test 45');
test(buildTree([6,2,8,0,4,3,7,9,1,5], [6,8,2,0,7,9,1,4,3,5]), Error: maximum recursion depth exceeded, 'Test 46');
test(buildTree([10,5,15,3,7,18,12,20,25], [10,15,5,7,3,18,25,20,12]), [12, 18, 20, 3, null, null, 25, 5, 7, null, null, 10, 15], 'Test 47');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,3,5,7,9,11,13,15,17,19,20,18,16,14,12,10,8,6,4,2]), [2, 1, 4, null, null, 3, 6, null, null, 5, 8, null, null, 7, 10, null, null, 9, 12, null, null, 11, 14, null, null, 13, 16, null, null, 15, 18, null, null, 17, 20, null, null, 19], 'Test 48');
test(buildTree([10,5,15,3,7,18,12], [10,3,7,5,18,12,15]), Error: maximum recursion depth exceeded, 'Test 49');
test(buildTree([7,14,15,9,16,19,20,17,10,22,23,21,11,26,27,28,13,18,12,5,6,3,8,24,25,4,29,30,2,1], [7,15,14,19,20,17,16,9,23,22,21,10,27,28,26,13,18,12,5,25,24,8,6,3,4,29,30,2,1]), Error: list index out of range, 'Test 50');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,5,7,9,11,13,15,14,12,10,8,6,4,2]), [2, 1, 4, null, null, 3, 6, null, null, 5, 8, null, null, 7, 10, null, null, 9, 12, null, null, 11, 14, null, null, 13, 15], 'Test 51');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), [16, 15, null, 14, null, 13, null, 12, null, 11, null, 10, null, 9, null, 8, null, 7, null, 6, null, 5, null, 4, null, 3, null, 2, null, 1], 'Test 52');
test(buildTree([1,2,3,4,5,6,7,8,9,10], [1,3,5,7,9,10,8,6,4,2]), [2, 1, 4, null, null, 3, 6, null, null, 5, 8, null, null, 7, 10, null, null, 9], 'Test 53');
test(buildTree([1,3,2,6,5,7,4,8,10,9], [1,3,6,7,5,2,10,9,8,4]), [4, 2, 8, 3, 5, null, 9, 1, null, 6, 7, 10], 'Test 54');
test(buildTree([8,5,11,1,2,6,9,3,13,7,10], [8,11,5,2,6,1,9,13,10,7,3]), [3, 9, 7, 1, null, 13, 10, 5, 6, null, null, null, null, 8, 11, 2], 'Test 55');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,5,7,6,4,9,11,13,14,12,10,8,15]), [15, 8, null, 4, 10, 2, 6, 9, 12, 1, 3, 5, 7, null, null, 11, 14, null, null, null, null, null, null, null, null, null, null, 13], 'Test 56');
test(buildTree([3,1,4,null,2], [3,2,4,1]), Error: list index out of range, 'Test 57');
test(buildTree([1,5,3,6,2,7,4,8], [1,5,6,3,7,8,4,2]), [2, 3, 4, 5, 6, 7, 8, 1], 'Test 58');
test(buildTree([1,3,2,4,7,5,8,6,9,11,10,12,14,13,15], [3,7,11,10,12,9,8,6,4,5,14,15,13,2,1]), Error: maximum recursion depth exceeded, 'Test 59');
test(buildTree([4,2,5,1,6,3,8,10,7,9], [4,5,2,6,8,10,9,7,3,1]), [1, 2, 3, 4, 5, 6, 7, null, null, null, null, null, null, 10, 9, 8], 'Test 60');
test(buildTree([4,2,6,5,3,1,7,8,9], [4,6,5,2,7,8,9,3,1]), Error: maximum recursion depth exceeded, 'Test 61');
test(buildTree([8,4,9,2,10,5,11,1,12,6,13,3,14,7,15], [8,9,4,10,11,5,2,12,13,6,14,15,7,3,1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 62');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [1,3,2,6,5,8,7,4,12,14,13,11,10,18,20,19,17,16,9,24,25,23,22,21,5]), Error: maximum recursion depth exceeded, 'Test 63');
test(buildTree([5,4,6,2,7,8,3,1,9], [5,6,4,8,7,3,9,1,2]), [2, 4, 1, 5, 6, 3, 9, null, null, null, null, 7, null, null, null, null, 8], 'Test 64');
test(buildTree([16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12, null, 13, null, 14, null, 15, null, 16], 'Test 65');
test(buildTree([14,10,16,2,21,4,13,7,11,1,19,3,24,8,20,5,18,15,6,9,12,17], [14,16,21,10,13,4,7,11,19,24,3,20,8,18,15,17,12,9,6,5,2,1]), Error: maximum recursion depth exceeded, 'Test 66');
test(buildTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], [1,3,2,5,4,7,6,9,11,13,15,17,16,14,12,10,8]), [8, 6, 10, 4, 7, 9, 12, 2, 5, null, null, null, null, 11, 14, 1, 3, null, null, null, null, 13, 16, null, null, null, null, null, null, 15, 17], 'Test 67');
test(buildTree([8,4,9,2,10,5,11,1,12,6,13,3,14,7,15], [8,9,4,10,11,5,12,13,6,14,15,7,3,2,1]), Error: maximum recursion depth exceeded, 'Test 68');
test(buildTree([20,15,10,5,1,30,25,2,35,3,40,4,50], [20,15,10,30,25,35,2,5,40,50,4,3,1]), Error: maximum recursion depth exceeded, 'Test 69');
test(buildTree([1,2,3,4,5,6,7,8,9], [1,3,5,7,9,8,6,4,2]), [2, 1, 4, null, null, 3, 6, null, null, 5, 8, null, null, 7, 9], 'Test 70');
test(buildTree([32,16,33,8,34,17,35,4,36,18,37,9,38,2,39,19,40,5,41,20,42,10,43,21,44,11,45,12,46,3,47,22,48,13,49,23,50,14,51,24,52,7,53,25,54,15,55,6,56,26,57,17,58,27,59,18,60,28,61,9,62,29,63,19,64,3,65,30,66,40,67,5,68,41,69,10,70,42,71,11,72,43,73,12,74,44,75,13,76,45,77,14,78,46,79,15,80,6,81,47,82,22,83,48,84,23,85,49,86,24,87,50,88,25,89,51,90,26,91,52,92,7,93,53,94,27,95,54,96,28,97,55,98,56,99,29,100,57,30,101,58,31,102,1,59,32,60,33,61,2,62,34,63,35,64,3,65,36,66,37,67,4,68,38,69,39,70,5,71,40,72,41,73,6,74,42,75,43,76,7,77,44,78,45,79,8,80,46,81,9,82,47,83,10,84,48,85,11,86,49,87,12,88,50,89,13,90,51,91,14,92,52,93,15,94,53,95,54,96,55,97,56,98,57,99,58,100,59,101,60,102]), Error: Solution.buildTree[] missing 1 required positional argument: 'postorder', 'Test 71');
test(buildTree([8,4,10,2,11,5,12,1,9,3,13,6,14,7,15], [8,10,4,11,12,5,2,9,13,14,15,7,3,1,6]), Error: maximum recursion depth exceeded, 'Test 72');
test(buildTree([5,3,7,2,8,9,4,10,1,6,11,12], [5,7,3,8,9,2,10,4,11,12,6,1]), [1, 4, 6, 2, 10, null, 12, 3, 9, null, null, 11, null, 5, 7, 8], 'Test 73');
test(buildTree([1,5,9,13,17,21,25,29,33,3,7,11,15,19,23,27,31,35,10,20,30,40], [1,9,13,17,21,25,29,33,5,11,15,19,23,27,31,35,7,30,40,20,10]), Error: list index out of range, 'Test 74');

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
