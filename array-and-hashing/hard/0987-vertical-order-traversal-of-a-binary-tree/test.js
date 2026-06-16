// Test: 987. Vertical Order Traversal Of A Binary Tree
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { verticalTraversal } = require("./solution");

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

console.log("\n987. Vertical Order Traversal Of A Binary Tree\n");

test(verticalTraversal([1,2,3,4,5,6,7]), [[4], [2], [1, 5, 6], [3], [7]], 'Test 1');
test(verticalTraversal([1,3,2,5,3,null,9,6,7]), [[6], [5], [3, 7], [1, 3], [2], [9]], 'Test 2');
test(verticalTraversal([0,2,1,3,null,null,null,4,5,null,7,6,null,10,8,11,9]), [[4, 10, 11], [3, 6, 7], [2, 5, 8, 9], [0], [1]], 'Test 3');
test(verticalTraversal([1,2,3,4,6,5,7]), [[4], [2], [1, 5, 6], [3], [7]], 'Test 4');
test(verticalTraversal([3,9,20,null,null,15,7]), [[9], [3, 15], [20], [7]], 'Test 5');
test(verticalTraversal([1,3,2,5,3,null,9,2,null,4,8,6,null,10,7]), [[10], [2], [5, 7], [3, 4], [1, 3], [2, 6, 8], [9]], 'Test 6');
test(verticalTraversal([0,2,1,3,null,null,null,4,5]), [[4], [3], [2, 5], [0], [1]], 'Test 7');
test(verticalTraversal([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12,13,14,15]), [[4], [2, 14], [1, 5, 6, 10], [3, 8, 15], [7, 11, 12], [9], [13]], 'Test 8');
test(verticalTraversal([1,2,3,4,5,6,7,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15]), [[4, 11], [2, 8, 9], [1, 5, 6], [3], [7], [10, 13], [12, 14]], 'Test 9');
test(verticalTraversal([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37,2,4,6,8,12,14,16,18,22,24,26,28,32,34,36,38]), [[2], [3], [5, 4, 6, 12, 22], [10, 7, 13, 23], [20, 15, 25, 8, 14, 16, 24, 26, 32], [30, 17, 27, 33], [35, 18, 28, 34, 36], [37], [38]], 'Test 10');
test(verticalTraversal([6,2,8,0,4,7,9,null,null,3,5,null,null,null,null,10]), [[0, 10], [2, 3], [6, 4, 7], [8, 5], [9]], 'Test 11');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,null,null,10,null,null,null,11,null,null,null,null,12,null,null,13,null,null,14,null,null,15]), [[11], [8], [4], [2, 9, 10, 13], [1, 5, 6, 12, 14], [3], [7]], 'Test 12');
test(verticalTraversal([5,3,6,2,4,null,7,1,null,null,8]), [[1], [2], [3], [5, 4], [6, 8], [7]], 'Test 13');
test(verticalTraversal([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [[7], [3], [1, 8, 9, 11], [0, 4, 5], [2, 10, 12, 13], [6], [14]], 'Test 14');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [[32], [16], [8, 33, 34, 36, 40], [4, 17, 18, 20, 24], [2, 9, 10, 12, 35, 37, 38], [1, 5, 6, 19, 21, 22, 25, 26, 28], [3, 11, 13, 14, 39], [7, 23, 27, 29, 30], [15], [31]], 'Test 15');
test(verticalTraversal([10,5,15,3,7,null,18,1,6,4,8,11,17]), [[1], [3], [5, 4, 6], [10, 7], [15, 8, 11], [18], [17]], 'Test 16');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,null,null,null,null,10,11,12,13,null,null,14,15,null,16,17]), [[17], [12], [8], [4, 13], [2, 9], [1, 5, 6, 14], [3, 10], [7, 15], [11], [16]], 'Test 17');
test(verticalTraversal([0,null,1,null,2,null,3,null,4,null,5,null,6]), [[0], [1], [2], [3], [4], [5], [6]], 'Test 18');
test(verticalTraversal([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,null,null,null,null,null,null,null,21]), [[2], [1, 4], [3, 6], [5, 8], [7, 10], [9, 12], [11, 14], [13, 16], [15, 18], [17, 20], [19]], 'Test 19');
test(verticalTraversal([10,5,15,3,7,null,18,1,null,6,9]), [[1], [3], [5, 6], [10, 7], [15, 9], [18]], 'Test 20');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,null,null,null,null,null,21]), [[16], [8], [4, 17, 18, 20], [2, 9, 10, 12], [1, 5, 6, 19], [3, 11, 13, 14], [7, 21], [15]], 'Test 21');
test(verticalTraversal([3,1,4,2,null,null,null,null,5]), [[2], [1, 5], [3], [4]], 'Test 22');
test(verticalTraversal([10,5,15,3,7,null,18,1,null,6,8,16,20,14,19]), [[14], [1], [3, 19], [5, 6], [10, 7], [15, 8, 16], [18], [20]], 'Test 23');
test(verticalTraversal([6,2,8,0,4,7,9,null,null,3,5]), [[0], [2, 3], [6, 4, 7], [8, 5], [9]], 'Test 24');
test(verticalTraversal([5,2,7,1,4,6,9,0,3,8,null,null,null,null,null,10,11]), [[10], [0], [1, 11], [2, 3, 8], [5, 4, 6], [7], [9]], 'Test 25');
test(verticalTraversal([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), [[1], [2], [4, 3, 5, 9], [8, 6, 10], [12, 7, 11, 13], [14], [15]], 'Test 26');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,14,null,15,16]), [[8], [4], [2, 9, 10, 12], [1, 5, 6, 14, 15, 16], [3, 11, 13], [7]], 'Test 27');
test(verticalTraversal([3,1,4,0,2,2,null,-1]), [[-1], [0], [1], [3, 2, 2], [4]], 'Test 28');
test(verticalTraversal([20,10,30,5,15,25,35,3,7,13,17,23,27,32,37,2,4,6,8,12,14,16,18,22,24,26,28,31,33,36,38]), [[2], [3], [5, 4, 6, 12, 22], [10, 7, 13, 23], [20, 15, 25, 8, 14, 16, 24, 26, 31], [30, 17, 27, 32], [35, 18, 28, 33, 36], [37], [38]], 'Test 29');
test(verticalTraversal([3,9,20,null,null,15,7,12,null,13,null,null,16]), [[9, 12], [3, 15, 16], [20, 13], [7]], 'Test 30');
test(verticalTraversal([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13,null,null,null,null,14,15,null,null,null,null,16,17,18,19,20,21,22,23,24,25]), [[18], [4, 14], [2, 8, 10, 19, 20], [1, 5, 6, 15], [3, 9, 11, 12, 21, 22], [7, 16], [13, 23, 24], [17], [25]], 'Test 31');
test(verticalTraversal([1,2,3,4,5,6,7,null,8,9,10,11,null,null,null,12,null,null,null,null,null,13,14,15]), [[15], [4, 12, 13], [2, 8, 9, 11], [1, 5, 6, 14], [3, 10], [7]], 'Test 32');
test(verticalTraversal([0,2,1,3,null,null,null,4,5,null,7,6,null,10,8,null,11,9]), [[9], [4, 10], [3, 6, 7], [2, 5, 8, 11], [0], [1]], 'Test 33');
test(verticalTraversal([1,2,3,4,null,null,7,8,9,null,11,null,null,14,15]), [[8], [4, 14], [2, 9], [1, 15], [3], [7], [11]], 'Test 34');
test(verticalTraversal([3,1,4,0,2,2,null]), [[0], [1], [3, 2, 2], [4]], 'Test 35');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [[16], [8], [4, 17, 18, 20, 24], [2, 9, 10, 12], [1, 5, 6, 19, 21, 22, 25, 26, 28], [3, 11, 13, 14], [7, 23, 27, 29, 30], [15], [31]], 'Test 36');
test(verticalTraversal([10,5,15,3,7,12,18,1,4,6,8,11,13,17,19]), [[1], [3], [5, 4, 6, 11], [10, 7, 12], [15, 8, 13, 17], [18], [19]], 'Test 37');
test(verticalTraversal([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), [[11], [10], [9], [8], [7], [6], [5], [4], [3], [2], [1]], 'Test 38');
test(verticalTraversal([1,2,3,null,null,4,5,6,7,null,null,8,9,10,11,12,13,null,null,14,15,null,null,16,17]), [[16], [12], [8, 17], [2, 6, 13, 14], [1, 4, 9, 10], [3, 7, 15], [5, 11]], 'Test 39');
test(verticalTraversal([1,2,3,null,4,null,5,null,null,6,null,7]), [[2], [1, 4, 7], [3, 6], [5]], 'Test 40');
test(verticalTraversal([1,2,3,4,5,6,7,null,8,null,null,9,10,11,12,null,null,null,null,13,14,15,null,null,null,null,16,17]), [[4], [2, 8, 9], [1, 5, 6, 13, 15], [3, 10, 11, 16, 17], [7, 14], [12]], 'Test 41');
test(verticalTraversal([5,3,6,2,4,null,7,1,null,null,8,9,10]), [[1], [2], [3], [5, 4], [6, 8, 9], [7], [10]], 'Test 42');
test(verticalTraversal([10,5,15,3,7,13,18,1,null,6,8,11,14,null,12,17,19]), [[17], [1], [3, 19], [5, 6, 11], [10, 7, 13], [15, 8, 14], [18], [12]], 'Test 43');
test(verticalTraversal([2,1,3,null,4,null,5,null,6,null,7,null,8,null,9]), [[1], [2, 4], [3, 6], [5, 8], [7], [9]], 'Test 44');
test(verticalTraversal([1,2,3,null,4,5,6,null,7,null,null,8,9,null,null,10,11]), [[2], [1, 4, 5, 10], [3, 7, 8], [6, 11], [9]], 'Test 45');
test(verticalTraversal([1,null,3,2,4,null,null,5,6]), [[1, 2], [3, 5], [4], [6]], 'Test 46');
test(verticalTraversal([1,2,3,null,null,4,5,6,7,8,9,null,null,10,11,null,null,12,13,null,null,null,null,14,15]), [[2, 6], [1, 4, 10], [3, 7, 8, 14], [5, 11, 12], [9, 15], [13]], 'Test 47');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [[16], [8], [4, 17, 18, 20, 24], [2, 9, 10, 12], [1, 5, 6, 19, 21, 22, 25, 26, 28], [3, 11, 13, 14], [7, 23, 27, 29, 30], [15]], 'Test 48');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [[16], [8], [4, 17, 18, 20], [2, 9, 10, 12], [1, 5, 6, 19], [3, 11, 13, 14], [7], [15]], 'Test 49');
test(verticalTraversal([1,2,3,4,5,null,null,6,7,null,null,null,null,null,null,8,9]), [[6], [4], [2, 7], [1, 5], [3]], 'Test 50');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [[8], [4], [2, 9, 10, 12], [1, 5, 6], [3, 11, 13, 14], [7], [15]], 'Test 51');
test(verticalTraversal([10,5,15,3,7,null,18,1,null,6]), [[1], [3], [5, 6], [10, 7], [15], [18]], 'Test 52');
test(verticalTraversal([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13,null,null,14,15,16,17,18,19,20]), [[4, 16], [2, 8, 10], [1, 5, 6, 14, 17, 18, 20], [3, 9, 11, 12], [7, 15, 19], [13]], 'Test 53');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [[16], [8], [4, 17, 18, 20, 24], [2, 9, 10, 12], [1, 5, 6, 19, 21, 22, 25], [3, 11, 13, 14], [7, 23], [15]], 'Test 54');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), [[32], [16], [8, 33, 34, 36, 40, 48], [4, 17, 18, 20, 24], [2, 9, 10, 12, 35, 37, 38, 41, 42, 44, 49, 50], [1, 5, 6, 19, 21, 22, 25, 26, 28], [3, 11, 13, 14, 39, 43, 45, 46], [7, 23, 27, 29, 30], [15, 47], [31]], 'Test 55');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,18,19,20,21,22,23,24,25,26,27,28,29,30]), [[8], [4, 16], [2, 9, 10, 12], [1, 5, 6, 17], [3, 11, 13, 14], [7], [15]], 'Test 56');
test(verticalTraversal([1,2,3,4,null,null,5,null,6,null,null,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15]), [[4, 7], [2, 6, 8], [1], [3], [5]], 'Test 57');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [[8], [4, 16], [2, 9, 10, 12], [1, 5, 6, 17], [3, 11, 13, 14], [7], [15]], 'Test 58');
test(verticalTraversal([5,2,6,1,3,null,null,null,4,8,7,null,null,null,null,null,null,null,9]), [[1], [2, 4, 8], [5, 3], [6, 7]], 'Test 59');
test(verticalTraversal([5,3,6,2,4,null,8,1,null,null,null,null,9,7,10]), [[7], [1], [2, 10], [3], [5, 4], [6], [8], [9]], 'Test 60');
test(verticalTraversal([1,2,3,4,5,6,7,null,null,null,null,8,9,10,11]), [[4], [2, 8], [1, 5, 6], [3, 9, 10], [7], [11]], 'Test 61');
test(verticalTraversal([3,1,4,0,2,2,null,null,null,null,null,5]), [[0], [1, 5], [3, 2, 2], [4]], 'Test 62');
test(verticalTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7]), [[1], [2], [3], [4], [5], [6], [7]], 'Test 63');
test(verticalTraversal([3,1,4,0,2,2,null,5,null,null,3,null,null,null,6]), [[5], [0, 6], [1], [3, 2, 2], [4, 3]], 'Test 64');
test(verticalTraversal([5,1,4,null,null,3,6]), [[1], [5, 3], [4], [6]], 'Test 65');
test(verticalTraversal([1,2,3,4,null,5,6,7,null,null,8,9,null,10,11,null,null,12,null,null,13]), [[10], [7, 13], [4, 11], [2], [1, 5, 12], [3, 8, 9], [6]], 'Test 66');
test(verticalTraversal([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [[15], [7], [3, 16, 17, 19], [1, 8, 9, 11], [0, 4, 5, 18, 20], [2, 10, 12, 13], [6], [14]], 'Test 67');
test(verticalTraversal([5,3,6,2,4,null,7,1,null,null,8,9,10,11,12,13,14,15,16,17]), [[11], [1], [2, 12], [3], [5, 4, 13, 15], [6, 8, 9], [7, 14, 16, 17], [10]], 'Test 68');
test(verticalTraversal([1,2,null,4,5,6,7,null,8,null,9,10,11,null,null,null,null,null,12,13,null,null,null,null,14,15]), [[6], [4, 9, 10], [2, 7, 12, 13, 15], [1, 5, 11, 14], [8]], 'Test 69');
test(verticalTraversal([5,3,6,2,4,null,null,1,null,null,null,7,8]), [[7], [1], [2, 8], [3], [5, 4], [6]], 'Test 70');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,null,10,null,null,11,null,12,null,13]), [[12], [8], [4, 13], [2, 9], [1, 5, 6], [3, 10, 11], [7]], 'Test 71');
test(verticalTraversal([10,5,15,3,7,13,18,1,null,6]), [[1], [3], [5, 6], [10, 7, 13], [15], [18]], 'Test 72');
test(verticalTraversal([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), [[2], [1, 4], [3, 6], [5, 8], [7], [9]], 'Test 73');
test(verticalTraversal([10,5,15,3,7,null,18,1,null,6,9,14]), [[1], [3], [5, 6], [10, 7], [15, 9, 14], [18]], 'Test 74');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), [[32], [16], [8], [4, 17, 18, 20, 24], [2, 9, 10, 12], [1, 5, 6, 19, 21, 22, 25, 26, 28], [3, 11, 13, 14], [7, 23, 27, 29, 30], [15], [31]], 'Test 75');
test(verticalTraversal([3,1,4,null,2,null,5,null,null,6,7,8,9]), [[1], [3, 2, 8], [4, 6], [5, 9], [7]], 'Test 76');
test(verticalTraversal([314,6,8,3,5,7,9,2,4,null,null,6,8,10,12,null,null,null,null,null,7]), [[2], [3], [6, 4, 6], [314, 5, 7, 7], [8, 8, 10], [9], [12]], 'Test 77');
test(verticalTraversal([8,3,10,1,6,null,14,null,null,4,7,13,null]), [[1], [3, 4], [8, 6], [10, 7, 13], [14]], 'Test 78');
test(verticalTraversal([1,2,3,null,null,null,4,null,5,null,null,null,null,null,6,null,null,null,null,null,7]), [[2], [1], [3], [4], [5]], 'Test 79');
test(verticalTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]], 'Test 80');
test(verticalTraversal([1,2,3,4,5,6,7,null,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), [[14], [4, 11, 12], [2, 8, 9], [1, 5, 6, 13], [3, 10], [7]], 'Test 81');
test(verticalTraversal([1,2,3,4,5,6,7,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13]), [[4, 11], [2, 8, 9], [1, 5, 6], [3], [7], [10, 13], [12]], 'Test 82');
test(verticalTraversal([5,2,6,1,3,null,null,0,null,null,null,null,7,8,9]), [[0, 8], [1, 7], [2, 9], [5, 3], [6]], 'Test 83');
test(verticalTraversal([5,3,6,2,4,null,7,1,null,null,8,9,null,null,10,null,null,11]), [[1], [2, 10], [3], [5, 4, 11], [6, 8, 9], [7]], 'Test 84');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,18]), [[8], [4, 16], [2, 9, 10, 12], [1, 5, 6, 17], [3, 11, 13, 14], [7], [15]], 'Test 85');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,14]), [[8], [4], [2, 9, 10, 12], [1, 5, 6, 14], [3, 11, 13], [7]], 'Test 86');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,14,15]), [[8], [4, 15], [2, 9, 10, 12], [1, 5, 6, 14], [3, 11, 13], [7]], 'Test 87');
test(verticalTraversal([10,5,15,3,7,12,20,1,4,6,8,11,13,18,25]), [[1], [3], [5, 4, 6, 11], [10, 7, 12], [15, 8, 13, 18], [20], [25]], 'Test 88');
test(verticalTraversal([1,2,3,4,5,6,7,8,9,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15]), [[8], [4, 12], [2, 9, 15], [1, 5, 6, 13], [3, 10, 11], [7, 14]], 'Test 89');

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
