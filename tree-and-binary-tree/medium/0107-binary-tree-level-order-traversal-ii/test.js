// Test: 107. Binary Tree Level Order Traversal Ii
// 64 test cases from LeetCodeDataset
// Run: node test.js

const { levelOrderBottom } = require("./solution");

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

console.log("\n107. Binary Tree Level Order Traversal Ii\n");

test(levelOrderBottom([3,9,20,null,null,15,7]), [[15, 7], [9, 20], [3]], 'Test 1');
test(levelOrderBottom([1]), [[1]], 'Test 2');
test(levelOrderBottom([]), [], 'Test 3');
test(levelOrderBottom([1,2,3,4,5,6,7]), [[4, 5, 6, 7], [2, 3], [1]], 'Test 4');
test(levelOrderBottom([0,2,4,1,null,3,-1,5,1,null,6,null,8]), [[5, 1, 6, 8], [1, 3, -1], [2, 4], [0]], 'Test 5');
test(levelOrderBottom([1,null,2,null,3,null,4,null,5]), [[5], [4], [3], [2], [1]], 'Test 6');
test(levelOrderBottom([3,1,4,null,2]), [[2], [1, 4], [3]], 'Test 7');
test(levelOrderBottom([3,9,20,8,null,15,7,4,5,null,null,6]), [[4, 5, 6], [8, 15, 7], [9, 20], [3]], 'Test 8');
test(levelOrderBottom([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [[10], [9], [8], [7], [6], [5], [4], [3], [2], [1]], 'Test 9');
test(levelOrderBottom([1,2,3,4,5,null,6,7,null,null,null,null,8]), [[7, 8], [4, 5, 6], [2, 3], [1]], 'Test 10');
test(levelOrderBottom([1,null,2,null,3,null,4,null,5,null,6]), [[6], [5], [4], [3], [2], [1]], 'Test 11');
test(levelOrderBottom([1,2,3,4,null,null,5]), [[4, 5], [2, 3], [1]], 'Test 12');
test(levelOrderBottom([1,2,3,4,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [[12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [2, 3], [1]], 'Test 13');
test(levelOrderBottom([3,9,20,15,7,2,25,8,6,1,12,9,4,18,10]), [[8, 6, 1, 12, 9, 4, 18, 10], [15, 7, 2, 25], [9, 20], [3]], 'Test 14');
test(levelOrderBottom([1,null,2,null,null,null,3,null,null,null,null,null,null,4,null]), [[2], [1]], 'Test 15');
test(levelOrderBottom([3,9,20,null,null,15,7,12,17,18,20,null,null,null,null,null,null,1]), [[1], [12, 17, 18, 20], [15, 7], [9, 20], [3]], 'Test 16');
test(levelOrderBottom([3,1,4,null,2,null,null]), [[2], [1, 4], [3]], 'Test 17');
test(levelOrderBottom([5,null,4,null,3,null,2,null,1]), [[1], [2], [3], [4], [5]], 'Test 18');
test(levelOrderBottom([3,9,20,null,null,15,7,12,null,null,18,25,27]), [[25, 27], [12, 18], [15, 7], [9, 20], [3]], 'Test 19');
test(levelOrderBottom([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), [[16], [15], [14], [13], [12], [11], [10], [9], [8], [7], [6], [5], [4], [3], [2], [1]], 'Test 20');
test(levelOrderBottom([10,5,15,null,null,6,20]), [[6, 20], [5, 15], [10]], 'Test 21');
test(levelOrderBottom([1,null,2,3,null,4,null,5]), [[5], [4], [3], [2], [1]], 'Test 22');
test(levelOrderBottom([3,9,20,10,null,15,7,5,11,18]), [[5, 11, 18], [10, 15, 7], [9, 20], [3]], 'Test 23');
test(levelOrderBottom([3,9,20,null,null,15,7,null,null,25,null,null,22]), [[22], [25], [15, 7], [9, 20], [3]], 'Test 24');
test(levelOrderBottom([10,5,15,3,7,null,18]), [[3, 7, 18], [5, 15], [10]], 'Test 25');
test(levelOrderBottom([1,2,2,3,3,null,null,4,4,4,4]), [[4, 4, 4, 4], [3, 3], [2, 2], [1]], 'Test 26');
test(levelOrderBottom([0,-1,-2,-3,-4,-5,-6,-7,-8,-9]), [[-7, -8, -9], [-3, -4, -5, -6], [-1, -2], [0]], 'Test 27');
test(levelOrderBottom([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,null,17,18,19,20,21,22,23]), [[16, 17, 18, 19, 20, 21, 22, 23], [8, 9, 10, 11, 12, 13, 14, 15], [4, 5, 6, 7], [2, 3], [1]], 'Test 28');
test(levelOrderBottom([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [[9], [8], [7], [6], [5], [4], [3], [2], [1]], 'Test 29');
test(levelOrderBottom([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,15,20,35,65,70,85,105,115,135,145,155,175,185]), [[5, 15, 20, 35, 65, 70, 85, 105, 115, 135, 145, 155, 175, 185], [10, 30, 60, 80, 110, 140, 160, 180], [25, 75, 125, 175], [50, 150], [100]], 'Test 30');
test(levelOrderBottom([6,2,8,0,4,7,9,null,null,3,5]), [[3, 5], [0, 4, 7, 9], [2, 8], [6]], 'Test 31');
test(levelOrderBottom([5,4,8,11,null,13,4,7,2,null,null,5,1]), [[7, 2, 5, 1], [11, 13, 4], [4, 8], [5]], 'Test 32');
test(levelOrderBottom([5,4,8,11,null,13,4,7,2,null,null,null,1]), [[7, 2, 1], [11, 13, 4], [4, 8], [5]], 'Test 33');
test(levelOrderBottom([0,null,1,null,2,null,3,null,4]), [[4], [3], [2], [1], [0]], 'Test 34');
test(levelOrderBottom([1,2,3,4,5,null,7,8,9,10,11,null,13,null,null,14,15]), [[14, 15], [8, 9, 10, 11, 13], [4, 5, 7], [2, 3], [1]], 'Test 35');
test(levelOrderBottom([3,9,20,8,10,15,7,null,null,null,13,null,null,null,17]), [[13, 17], [8, 10, 15, 7], [9, 20], [3]], 'Test 36');
test(levelOrderBottom([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), [[-7, -8, -9, -10], [-3, -4, -5, -6], [-1, -2], [0]], 'Test 37');
test(levelOrderBottom([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [[9], [8], [7], [6], [5], [4], [3], [2], [1]], 'Test 38');
test(levelOrderBottom([3,9,20,null,null,15,7,16,17]), [[16, 17], [15, 7], [9, 20], [3]], 'Test 39');
test(levelOrderBottom([5,1,4,null,null,3,6]), [[3, 6], [1, 4], [5]], 'Test 40');
test(levelOrderBottom([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,14,15]), [[14, 15], [8, 9, 10, 11, 12, 13], [4, 5, 6, 7], [2, 3], [1]], 'Test 41');
test(levelOrderBottom([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [[8], [7], [6], [5], [4], [3], [2], [1]], 'Test 42');
test(levelOrderBottom([1,2,3,4,5,null,6,7,null,null,null,null,8,9]), [[9], [7, 8], [4, 5, 6], [2, 3], [1]], 'Test 43');
test(levelOrderBottom([10,-5,15,null,-8,null,20,-12,null,null,18]), [[-12, 18], [-8, 20], [-5, 15], [10]], 'Test 44');
test(levelOrderBottom([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), [[10, 30, 60, 80, 110, 140, 160, 180], [25, 75, 125, 175], [50, 150], [100]], 'Test 45');
test(levelOrderBottom([10,null,20,30,40,null,50,null,null,60,70]), [[60, 70], [50], [30, 40], [20], [10]], 'Test 46');
test(levelOrderBottom([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,6,null,null,3,null,null,null,9]), [[9], [6, 3], [7, 2, 5, 1], [11, 13, 4], [4, 8], [5]], 'Test 47');
test(levelOrderBottom([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [8, 9, 10, 11, 12, 13, 14, 15], [4, 5, 6, 7], [2, 3], [1]], 'Test 48');
test(levelOrderBottom([3,5,1,6,2,0,8,null,null,7,4]), [[7, 4], [6, 2, 0, 8], [5, 1], [3]], 'Test 49');
test(levelOrderBottom([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [[16, 17, 18, 19, 20], [8, 9, 10, 11, 12, 13, 14, 15], [4, 5, 6, 7], [2, 3], [1]], 'Test 50');
test(levelOrderBottom([5,1,4,null,null,3,6,2,null,null,null,null,7]), [[7], [2], [3, 6], [1, 4], [5]], 'Test 51');
test(levelOrderBottom([5,3,8,1,4,7,9,null,2,null,null,null,6,null,null,11,12]), [[11, 12], [2, 6], [1, 4, 7, 9], [3, 8], [5]], 'Test 52');
test(levelOrderBottom([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [[8, 9, 10, 11, 12, 13, 14, 15], [4, 5, 6, 7], [2, 3], [1]], 'Test 53');
test(levelOrderBottom([5,4,8,11,null,13,4,7,2,null,null,null,1,null,3,null,null]), [[3], [7, 2, 1], [11, 13, 4], [4, 8], [5]], 'Test 54');
test(levelOrderBottom([1,2,3,null,4,null,5,null,6,null,7]), [[6, 7], [4, 5], [2, 3], [1]], 'Test 55');
test(levelOrderBottom([1,2,2,3,4,4,3]), [[3, 4, 4, 3], [2, 2], [1]], 'Test 56');
test(levelOrderBottom([5,1,4,3,null,6,7]), [[3, 6, 7], [1, 4], [5]], 'Test 57');
test(levelOrderBottom([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6]), [[2], [1]], 'Test 58');
test(levelOrderBottom([1,2,3,4,null,null,5,null,null,6,null,null,7,null,8]), [[8], [7], [6], [4, 5], [2, 3], [1]], 'Test 59');
test(levelOrderBottom([1,2,2,3,3,null,null,4,4]), [[4, 4], [3, 3], [2, 2], [1]], 'Test 60');
test(levelOrderBottom([1,2,null,3,null,4,null,5,null,6,null,7]), [[7], [6], [5], [4], [3], [2], [1]], 'Test 61');
test(levelOrderBottom([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), [[-15], [-7, -8, -9, -10, -11, -12, -13, -14], [-3, -4, -5, -6], [-1, -2], [0]], 'Test 62');
test(levelOrderBottom([3,9,20,10,null,15,7,11,null,13,14]), [[11, 13, 14], [10, 15, 7], [9, 20], [3]], 'Test 63');
test(levelOrderBottom([3,9,20,10,11,15,7,null,null,12,null,16,13,null,null,null,14,17,18]), [[14, 17, 18], [12, 16, 13], [10, 11, 15, 7], [9, 20], [3]], 'Test 64');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

