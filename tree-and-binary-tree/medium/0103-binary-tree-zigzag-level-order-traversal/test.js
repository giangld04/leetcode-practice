// Test: 103. Binary Tree Zigzag Level Order Traversal
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { zigzagLevelOrder } = require("./solution");

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

console.log("\n103. Binary Tree Zigzag Level Order Traversal\n");

test(zigzagLevelOrder([1,2,3,4,5,6,7]), [[1], [3, 2], [4, 5, 6, 7]], 'Test 1');
test(zigzagLevelOrder([1,null,2,null,3,null,4,null,5]), [[1], [2], [3], [4], [5]], 'Test 2');
test(zigzagLevelOrder([3,5,1,6,2,0,8,null,null,7,4]), [[3], [1, 5], [6, 2, 0, 8], [4, 7]], 'Test 3');
test(zigzagLevelOrder([3,9,20,null,null,15,7]), [[3], [20, 9], [15, 7]], 'Test 4');
test(zigzagLevelOrder([1]), [[1]], 'Test 5');
test(zigzagLevelOrder([]), [], 'Test 6');
test(zigzagLevelOrder([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]], 'Test 7');
test(zigzagLevelOrder([1,null,2,null,null,null,null,3,null,null,null,null,null,4]), [[1], [2]], 'Test 8');
test(zigzagLevelOrder([10,9,8,7,6,5,4,3,2,1]), [[10], [8, 9], [7, 6, 5, 4], [1, 2, 3]], 'Test 9');
test(zigzagLevelOrder([1,2,2,3,null,null,3,4,null,null,4]), [[1], [2, 2], [3, 3], [4, 4]], 'Test 10');
test(zigzagLevelOrder([1,null,3,null,null,2,null]), [[1], [3]], 'Test 11');
test(zigzagLevelOrder([10,5,15,3,7,null,18,null,null,6,9]), [[10], [15, 5], [3, 7, 18], [9, 6]], 'Test 12');
test(zigzagLevelOrder([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [[1], [2], [3], [4], [5], [6], [7], [8], [9]], 'Test 13');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,null,null,10,11,12,13,null,null,14,15,16,17,18,19,20]), [[1], [3, 2], [4, 5, 6, 7], [13, 12, 11, 10, 9, 8], [14, 15, 16, 17, 18, 19, 20]], 'Test 14');
test(zigzagLevelOrder([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [[1], [2], [3], [4], [5], [6], [7], [8]], 'Test 15');
test(zigzagLevelOrder([1,2,3,4,5,null,6,7,null,null,8,null,9,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), [[1], [3, 2], [4, 5, 6], [9, 8, 7], [10, 11, 12], [15, 14, 13], [16, 17, 18], [20, 19]], 'Test 16');
test(zigzagLevelOrder([1,2,3,4,null,null,5,null,null,null,null,null,6,null,7,null,8,null,9]), [[1], [3, 2], [4, 5]], 'Test 17');
test(zigzagLevelOrder([1,null,2,3,4,null,null,5,6]), [[1], [2], [3, 4], [6, 5]], 'Test 18');
test(zigzagLevelOrder([1,2,3,4,null,null,7,8,9,null,11,null,null,14,15]), [[1], [3, 2], [4, 7], [11, 9, 8], [14, 15]], 'Test 19');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]], 'Test 20');
test(zigzagLevelOrder([10,5,15,3,7,null,18,1,null,null,6,8,14,16,19,null,null,null,null,null,null,null,null]), [[10], [15, 5], [3, 7, 18], [14, 8, 6, 1], [16, 19]], 'Test 21');
test(zigzagLevelOrder([1,2,3,4,null,null,5,null,null,6,null,7,null,8,null,9]), [[1], [3, 2], [4, 5], [6], [7], [8], [9]], 'Test 22');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,16,null,17,null,null,18,null,19]), [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8], [16, 17, 18, 19]], 'Test 23');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,9,null,null,10,11,null,null,12,null,13,null,14,null,null,15]), [[1], [3, 2], [4, 5, 6, 7], [8], [9], [10], [11], [12], [13], [14]], 'Test 24');
test(zigzagLevelOrder([3,1,4,3,null,1,5]), [[3], [4, 1], [3, 1, 5]], 'Test 25');
test(zigzagLevelOrder([8,15,10,7,null,12,3,2,null,11,13,null,null,4,null,5]), [[8], [10, 15], [7, 12, 3], [13, 11, 2], [4, 5]], 'Test 26');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,null,null,null,null,null,null,9]), [[1], [3, 2], [4, 5, 6, 7], [9, 8]], 'Test 27');
test(zigzagLevelOrder([1,2,3,4,5,null,null,6,7,8,9,null,null,10,11,12,13]), [[1], [3, 2], [4, 5], [9, 8, 7, 6], [10, 11, 12, 13]], 'Test 28');
test(zigzagLevelOrder([3,9,20,15,7,10,8,11,12,13,14,16,17,18,19]), [[3], [20, 9], [15, 7, 10, 8], [19, 18, 17, 16, 14, 13, 12, 11]], 'Test 29');
test(zigzagLevelOrder([2,1,3,4,null,5,7,null,null,null,6,null,8,9,10]), [[2], [3, 1], [4, 5, 7], [8, 6], [9, 10]], 'Test 30');
test(zigzagLevelOrder([3,9,20,15,7,8,12,null,null,null,null,null,null,14]), [[3], [20, 9], [15, 7, 8, 12], [14]], 'Test 31');
test(zigzagLevelOrder([3,9,20,null,null,15,7,12,null,13,14,null,18,19,20]), [[3], [20, 9], [15, 7], [14, 13, 12], [18, 19, 20]], 'Test 32');
test(zigzagLevelOrder([5,3,8,2,4,6,9,1,7,null,10,null,null,null,null,11,12]), [[5], [8, 3], [2, 4, 6, 9], [10, 7, 1], [11, 12]], 'Test 33');
test(zigzagLevelOrder([1,2,3,4,5,null,6,7,null,null,null,null,8,9,10]), [[1], [3, 2], [4, 5, 6], [8, 7], [9, 10]], 'Test 34');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]], 'Test 35');
test(zigzagLevelOrder([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13]), [[1], [3, 2], [4, 5], [7, 6], [8, 9], [11, 10], [12, 13]], 'Test 36');
test(zigzagLevelOrder([1,2,3,4,null,null,5,6,null,7,null,8,null,9]), [[1], [3, 2], [4, 5], [7, 6], [8, 9]], 'Test 37');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8], [16, 17, 18, 19, 20]], 'Test 38');
test(zigzagLevelOrder([1,2,3,4,null,null,5,null,null,null,6,null,null,7,null,null,8]), [[1], [3, 2], [4, 5], [6]], 'Test 39');
test(zigzagLevelOrder([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,null,null,180,190]), [[10], [30, 20], [40, 50, 60, 70], [150, 140, 130, 120, 110, 100, 90, 80], [180, 190]], 'Test 40');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8]], 'Test 41');
test(zigzagLevelOrder([1,2,3,4,5,6,7,null,null,null,null,null,null,8,null,null,9,10]), [[1], [3, 2], [4, 5, 6, 7], [8], [9], [10]], 'Test 42');
test(zigzagLevelOrder([1,null,2,null,null,3,null,null,null,4,null,null,null,5]), [[1], [2]], 'Test 43');
test(zigzagLevelOrder([1,2,2,3,4,4,3,null,null,null,null,null,null,5,5]), [[1], [2, 2], [3, 4, 4, 3], [5, 5]], 'Test 44');
test(zigzagLevelOrder([1,2,3,4,null,null,7,8,9,null,12,null,14,null,null,15]), [[1], [3, 2], [4, 7], [12, 9, 8], [14, 15]], 'Test 45');
test(zigzagLevelOrder([10,5,15,3,7,null,18,1,null,6]), [[10], [15, 5], [3, 7, 18], [6, 1]], 'Test 46');
test(zigzagLevelOrder([1,2,3,4,5,6,7,null,null,8,null,9,null,10,null,11]), [[1], [3, 2], [4, 5, 6, 7], [10, 9, 8], [11]], 'Test 47');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32]], 'Test 48');
test(zigzagLevelOrder([1,2,3,4,null,null,5,null,6,null,null,7,null,8]), [[1], [3, 2], [4, 5], [6], [7], [8]], 'Test 49');
test(zigzagLevelOrder([1,null,2,null,null,null,3,null,null,null,null,null,null,null,4]), [[1], [2]], 'Test 50');
test(zigzagLevelOrder([3,9,20,null,null,15,7,null,null,null,null,16,17,18,19]), [[3], [20, 9], [15, 7]], 'Test 51');
test(zigzagLevelOrder([1,2,3,4,5,null,null,null,6,null,null,7,8,null,null,null,null,9]), [[1], [3, 2], [4, 5], [6], [7, 8]], 'Test 52');
test(zigzagLevelOrder([5,1,4,null,null,3,6]), [[5], [4, 1], [3, 6]], 'Test 53');
test(zigzagLevelOrder([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15]], 'Test 54');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,14,15,null,null,16,17]), [[1], [3, 2], [4, 5, 6, 7], [13, 12, 11, 10, 9, 8], [14, 15, 16, 17]], 'Test 55');
test(zigzagLevelOrder([1,2,3,4,null,null,5,6,7,8,9,10,null,null,null,null,11,12,13,null,null,14,null,15]), [[1], [3, 2], [4, 5], [9, 8, 7, 6], [10, 11, 12, 13], [15, 14]], 'Test 56');
test(zigzagLevelOrder([7,3,15,null,null,9,20,null,null,8,null,13,19,null,null,null,null,18]), [[7], [15, 3], [9, 20], [8], [13, 19]], 'Test 57');
test(zigzagLevelOrder([3,1,null,null,2,null,3,null,null,4,null,5,null,6]), [[3], [1], [2], [3]], 'Test 58');
test(zigzagLevelOrder([1,2,3,4,5,6,7,null,8,9,null,null,10,null,null,11,12]), [[1], [3, 2], [4, 5, 6, 7], [10, 9, 8], [11, 12]], 'Test 59');
test(zigzagLevelOrder([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,12,13,14,15,null,null,16,17]), [[1], [3, 2], [4, 5, 6, 7], [11, 10, 9, 8], [12, 13, 14, 15, 16, 17]], 'Test 60');
test(zigzagLevelOrder([1,2,3,4,null,null,5,6,null,7,null,8,null,9,null,10]), [[1], [3, 2], [4, 5], [7, 6], [8, 9], [10]], 'Test 61');
test(zigzagLevelOrder([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), [[0], [-2, -1], [-3, -4, -5, -6], [-14, -13, -12, -11, -10, -9, -8, -7], [-15]], 'Test 62');
test(zigzagLevelOrder([1,2,null,3,null,4,null,5,null,6,null,7]), [[1], [2], [3], [4], [5], [6], [7]], 'Test 63');
test(zigzagLevelOrder([100,-50,-20,null,-10,null,null,-15]), [[100], [-20, -50], [-10], [-15]], 'Test 64');
test(zigzagLevelOrder([0,2,4,1,null,3,-1,5,1,null,6,null,8]), [[0], [4, 2], [1, 3, -1], [8, 6, 1, 5]], 'Test 65');
test(zigzagLevelOrder([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,null,null,10,11]), [[1], [3, 2], [4, 5], [7, 6], [8, 9]], 'Test 66');
test(zigzagLevelOrder([1,2,3,4,null,null,5,null,6,null,null,7,null,null,8,null,null,9]), [[1], [3, 2], [4, 5], [6], [7], [8]], 'Test 67');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,9,10,11,null,13,null,null,16,17]), [[1], [3, 2], [4, 5, 6, 7], [13, 11, 10, 9, 8], [16, 17]], 'Test 68');
test(zigzagLevelOrder([5,3,8,1,4,6,10,null,2,null,null,null,null,null,9,null,11]), [[5], [8, 3], [1, 4, 6, 10], [9, 2], [11]], 'Test 69');
test(zigzagLevelOrder([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [[1], [3, 2], [4, 5], [7, 6], [8, 9], [10]], 'Test 70');
test(zigzagLevelOrder([1,2,3,4,null,5,6,null,7,null,8,null,9,null,10,null,11,null,12]), [[1], [3, 2], [4, 5, 6], [9, 8, 7], [10, 11, 12]], 'Test 71');
test(zigzagLevelOrder([1,2,3,4,5,6,7,null,8,9,10,11,12,null,null,null,null,null,13]), [[1], [3, 2], [4, 5, 6, 7], [12, 11, 10, 9, 8], [13]], 'Test 72');
test(zigzagLevelOrder([1,2,3,4,5,null,null,6,7,8,null,9,10,null,null,11,12]), [[1], [3, 2], [4, 5], [8, 7, 6], [9, 10, 11, 12]], 'Test 73');
test(zigzagLevelOrder([1,null,2,3,null,4,null,5,6,null,7,null,8,null,9]), [[1], [2], [3], [4], [5, 6], [8, 7], [9]], 'Test 74');
test(zigzagLevelOrder([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]], 'Test 75');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,null,null,null,null,null,null,9,null,null,10,null,null,11,12,null,null,13,null,null,null,null,14]), [[1], [3, 2], [4, 5, 6, 7], [9, 8], [10], [11], [12], [13]], 'Test 76');
test(zigzagLevelOrder([1,2,3,null,5,null,7,8,null,11,null,14]), [[1], [3, 2], [5, 7], [11, 8], [14]], 'Test 77');
test(zigzagLevelOrder([5,4,1,null,1,2,null,2,3,null,4,null,5]), [[5], [1, 4], [1, 2], [4, 3, 2], [5]], 'Test 78');
test(zigzagLevelOrder([1,2,2,3,4,4,3]), [[1], [2, 2], [3, 4, 4, 3]], 'Test 79');
test(zigzagLevelOrder([0,-1,2,-2,null,-3,null,-4,null,-5,null,-6,null,-7,null]), [[0], [2, -1], [-2, -3], [-5, -4], [-6, -7]], 'Test 80');
test(zigzagLevelOrder([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,null,null,5,5,5,5,null,null,null,null,null,null,null,null,null,null]), [[1], [2, 2], [3, 3, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4], [5, 5, 5, 5]], 'Test 81');
test(zigzagLevelOrder([1,2,3,4,null,5,6,null,null,7,8,null,null,9,10]), [[1], [3, 2], [4, 5, 6], [8, 7], [9, 10]], 'Test 82');
test(zigzagLevelOrder([10,5,15,3,7,null,18,null,null,6,null,16,20,null,null,19]), [[10], [15, 5], [3, 7, 18], [20, 16, 6], [19]], 'Test 83');
test(zigzagLevelOrder([1,2,3,4,5,6,7,8,null,null,9,10,null,null,11,12]), [[1], [3, 2], [4, 5, 6, 7], [11, 10, 9, 8], [12]], 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

