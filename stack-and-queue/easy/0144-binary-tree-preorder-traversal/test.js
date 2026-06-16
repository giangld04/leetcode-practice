// Test: 144. Binary Tree Preorder Traversal
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { preorderTraversal } = require("./solution");

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

console.log("\n144. Binary Tree Preorder Traversal\n");

test(preorderTraversal([1,2,3,null,4,null,5]), [1, 2, 4, 3, 5], 'Test 1');
test(preorderTraversal([1,null,null]), [1], 'Test 2');
test(preorderTraversal([1,2,3,4,5,null,8,null,null,6,7,9]), [1, 2, 4, 5, 6, 7, 3, 8, 9], 'Test 3');
test(preorderTraversal([1,null,3,null,2]), [1, 3, 2], 'Test 4');
test(preorderTraversal([1,2]), [1, 2], 'Test 5');
test(preorderTraversal([1,null,2]), [1, 2], 'Test 6');
test(preorderTraversal([1,null,2,3]), [1, 2, 3], 'Test 7');
test(preorderTraversal([1]), [1], 'Test 8');
test(preorderTraversal([]), [], 'Test 9');
test(preorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 10');
test(preorderTraversal([10,5,15,null,null,6,20]), [10, 5, 15, 6, 20], 'Test 11');
test(preorderTraversal([10,5,15,3,7,null,18,1,null,6,9]), [10, 5, 3, 1, 7, 6, 9, 15, 18], 'Test 12');
test(preorderTraversal([10,5,15,3,7,null,18]), [10, 5, 3, 7, 15, 18], 'Test 13');
test(preorderTraversal([1,2,3,4,null,5,null,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), [1, 2, 4, 6, 8, 10, 12, 3, 5, 7, 9, 11], 'Test 14');
test(preorderTraversal([1,2,3,4,null,null,null,null,null,null,5,6]), [1, 2, 4, 3], 'Test 15');
test(preorderTraversal([100,-50,50,-100,0,49,99,-150,null,-75,-25,-1,null,5,null,null,25,75,98,100]), [100, -50, -100, -150, 25, 0, -75, 75, 98, -25, 100, 50, 49, -1, 99, 5], 'Test 16');
test(preorderTraversal([1,2,null,3,null,4,null,5,null,6]), [1, 2, 3, 4, 5, 6], 'Test 17');
test(preorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 18');
test(preorderTraversal([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), [8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15], 'Test 19');
test(preorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [1, 2, 3, 4, 5, 6, 7, 8], 'Test 20');
test(preorderTraversal([1,2,3,null,4,5,null,6,7,null,null,8,null,9]), [1, 2, 4, 6, 8, 7, 9, 3, 5], 'Test 21');
test(preorderTraversal([3,null,5,4,6,null,7]), [3, 5, 4, 7, 6], 'Test 22');
test(preorderTraversal([1,2,3,4,5,6,7,8,9,10,null,11,null,12,null,13,null,14,null,15]), [1, 2, 4, 8, 13, 9, 14, 5, 10, 15, 3, 6, 11, 7, 12], 'Test 23');
test(preorderTraversal([1,null,2,3,null,null,4,5,null,6,null,7,8,null,9,10,null,11]), [1, 2, 3, 4, 5, 6, 7, 9, 11, 8, 10], 'Test 24');
test(preorderTraversal([1,2,3,4,5,null,null,null,null,6,7,null,null,null,null,8,9]), [1, 2, 4, 5, 6, 7, 3], 'Test 25');
test(preorderTraversal([10,null,20,null,30,null,40,50,60]), [10, 20, 30, 40, 50, 60], 'Test 26');
test(preorderTraversal([10,5,15,3,7,null,18,1,4,6,9,11,20]), [10, 5, 3, 1, 4, 7, 6, 9, 15, 18, 11, 20], 'Test 27');
test(preorderTraversal([7,3,15,null,null,9,20]), [7, 3, 15, 9, 20], 'Test 28');
test(preorderTraversal([8,5,12,4,6,10,14,2,null,null,null,null,11,null,13]), [8, 5, 4, 2, 6, 12, 10, 11, 14, 13], 'Test 29');
test(preorderTraversal([1,2,3,null,4,5,null,null,null,6,null,7]), [1, 2, 4, 3, 5, 6, 7], 'Test 30');
test(preorderTraversal([1,null,2,null,null,null,null,3,null,4,null,5]), [1, 2], 'Test 31');
test(preorderTraversal([1,null,2,null,null,3,null,null,4]), [1, 2], 'Test 32');
test(preorderTraversal([10,5,15,3,7,null,18,1,null,6,9,null,null,12,null,null,null,null,null,20]), [10, 5, 3, 1, 12, 20, 7, 6, 9, 15, 18], 'Test 33');
test(preorderTraversal([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9]), [1, 2, 4, 6, 8, 3, 5, 7, 9], 'Test 34');
test(preorderTraversal([20,10,30,5,15,25,35,null,null,12,null,22,28]), [20, 10, 5, 15, 12, 30, 25, 22, 28, 35], 'Test 35');
test(preorderTraversal([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2, 4, 6, 8, 10, 3, 5, 7, 9], 'Test 36');
test(preorderTraversal([1,2,3,null,null,4,5,null,null,null,null,6,7]), [1, 2, 3, 4, 5], 'Test 37');
test(preorderTraversal([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 38');
test(preorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1, 2, 4, 8, 16, 17, 9, 18, 19, 5, 10, 20, 11, 3, 6, 12, 13, 7, 14, 15], 'Test 39');
test(preorderTraversal([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,12,null,null,13,null,null,14,null,null,15]), [1, 2, 4, 5, 8, 12, 15, 9, 13, 3, 6, 10, 11, 14, 7], 'Test 40');
test(preorderTraversal([3,1,4,null,2,null,null,null,null,5]), [3, 1, 2, 4], 'Test 41');
test(preorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15], 'Test 42');
test(preorderTraversal([100,-50,200,-200,-100,150,300,-300,-150,-75,-25,25,75,125,175,225,275]), [100, -50, -200, -300, 225, 275, -150, -100, -75, -25, 200, 150, 25, 75, 300, 125, 175], 'Test 43');
test(preorderTraversal([1,2,null,3,null,4,null,5]), [1, 2, 3, 4, 5], 'Test 44');
test(preorderTraversal([10,5,15,3,7,null,18,1,null,6]), [10, 5, 3, 1, 7, 6, 15, 18], 'Test 45');
test(preorderTraversal([1,2,3,null,4,5,null,null,6,null,7,null,8,null,9]), [1, 2, 4, 6, 8, 3, 5, 7, 9], 'Test 46');
test(preorderTraversal([1,null,2,null,3,null,4,null,5]), [1, 2, 3, 4, 5], 'Test 47');
test(preorderTraversal([5,4,7,3,8,6,9,2,11,12,13,14,15,16,17]), [5, 4, 3, 2, 11, 8, 12, 13, 7, 6, 14, 15, 9, 16, 17], 'Test 48');
test(preorderTraversal([3,1,2,null,null,null,4,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 49');
test(preorderTraversal([0,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8]), [0, -1, -2, -4, 5, 3, -5, 6, 2, -3, -6, 7, 4, -7, 8], 'Test 50');
test(preorderTraversal([1,2,null,3,4,null,null,5,6]), [1, 2, 3, 4, 5, 6], 'Test 51');
test(preorderTraversal([5,3,8,1,4,7,9,0,2,6,null,null,null,null,null,null,10]), [5, 3, 1, 0, 10, 2, 4, 6, 8, 7, 9], 'Test 52');
test(preorderTraversal([1,null,2,null,null,3,null,4,null,5,null,6,null,7]), [1, 2], 'Test 53');
test(preorderTraversal([-1,-2,null,-3,-4,-5]), [-1, -2, -3, -5, -4], 'Test 54');
test(preorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20,21,22,23,24,25]), [1, 2, 4, 8, 9, 16, 17, 5, 10, 18, 19, 11, 20, 21, 3, 6, 12, 22, 23, 13, 24, 25, 7, 14, 15], 'Test 55');
test(preorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 56');
test(preorderTraversal([50,30,70,20,40,60,80,15,25,35,45,55,65,75,85]), [50, 30, 20, 15, 25, 40, 35, 45, 70, 60, 55, 65, 80, 75, 85], 'Test 57');
test(preorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20,null,21,22,23,null,24,25,26]), [1, 2, 4, 8, 9, 16, 17, 5, 10, 18, 19, 11, 20, 3, 6, 12, 21, 22, 13, 23, 7, 14, 24, 25, 15, 26], 'Test 58');
test(preorderTraversal([0,-1,2,-2,null,3,null,null,null,null,null,null,4]), [0, -1, -2, 2, 3], 'Test 59');
test(preorderTraversal([5,1,4,null,null,3,6]), [5, 1, 4, 3, 6], 'Test 60');
test(preorderTraversal([1,null,2,3,null,4,5,null,6,7,null,8,9,null,10,null,11,12]), [1, 2, 3, 4, 6, 8, 11, 9, 12, 5, 7, 10], 'Test 61');
test(preorderTraversal([1,2,3,4,5,null,6,7,null,null,null,8,9]), [1, 2, 4, 7, 5, 3, 6, 8, 9], 'Test 62');
test(preorderTraversal([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [0, 1, 3, 7, 15, 16, 8, 17, 18, 4, 9, 19, 20, 10, 2, 5, 11, 12, 6, 13, 14], 'Test 63');
test(preorderTraversal([2,1,3,null,null,4,5]), [2, 1, 3, 4, 5], 'Test 64');
test(preorderTraversal([100,-50,150,-200,0,120,200,-300,-100,-60,90,110,160,180,220]), [100, -50, -200, -300, -100, 0, -60, 90, 150, 120, 110, 160, 200, 180, 220], 'Test 65');
test(preorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 66');
test(preorderTraversal([5,3,6,2,4,null,7,1]), [5, 3, 2, 1, 4, 6, 7], 'Test 67');
test(preorderTraversal([1,2,null,3,null,4,null,5,null,6,null,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 68');
test(preorderTraversal([10,5,15,3,7,13,18,1,null,6]), [10, 5, 3, 1, 7, 6, 15, 13, 18], 'Test 69');
test(preorderTraversal([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,10,11]), [1, 2, 4, 8, 10, 11, 9, 5, 3, 6, 7], 'Test 70');
test(preorderTraversal([3,1,4,null,2]), [3, 1, 2, 4], 'Test 71');
test(preorderTraversal([1,null,2,3,null,null,4,5,null,null,6]), [1, 2, 3, 4, 5, 6], 'Test 72');
test(preorderTraversal([1,null,2,null,3,null,4,null,5,null,6]), [1, 2, 3, 4, 5, 6], 'Test 73');
test(preorderTraversal([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2, 4, 6, 8, 10, 3, 5, 7, 9], 'Test 74');
test(preorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 75');
test(preorderTraversal([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 76');
test(preorderTraversal([1,null,2,null,null,3,null,4,null,5]), [1, 2], 'Test 77');
test(preorderTraversal([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 78');
test(preorderTraversal([1,2,3,4,5,null,null,null,null,6,7,8,9,10,11]), [1, 2, 4, 5, 6, 8, 9, 7, 10, 11, 3], 'Test 79');
test(preorderTraversal([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 80');
test(preorderTraversal([5,4,6,2,5,null,null,1,null,3]), [5, 4, 2, 1, 5, 3, 6], 'Test 81');
test(preorderTraversal([50,30,70,20,40,60,80,15,25,null,null,55,null,null,75,65,85]), [50, 30, 20, 15, 65, 85, 25, 40, 70, 60, 55, 80, 75], 'Test 82');
test(preorderTraversal([1,null,2,null,null,3,null,null,null,4,null,null,null,null,5]), [1, 2], 'Test 83');
test(preorderTraversal([1,null,2,null,null,null,3,null,4,null,5]), [1, 2], 'Test 84');
test(preorderTraversal([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,null,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [1, 2, 4, 8, 10, 13, 19, 20, 14, 21, 22, 9, 11, 15, 23, 24, 16, 25, 12, 17, 18, 5, 3, 6, 7], 'Test 85');
test(preorderTraversal([1,null,2,3,null,null,4,5,null,null,null,6,null,7]), [1, 2, 3, 4, 5], 'Test 86');
test(preorderTraversal([5,null,10,null,15,null,20,null,25]), [5, 10, 15, 20, 25], 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

