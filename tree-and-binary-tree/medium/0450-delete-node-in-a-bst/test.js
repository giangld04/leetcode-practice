// Test: 450. Delete Node In A Bst
// 138 test cases from LeetCodeDataset
// Run: node test.js

const { deleteNode } = require("./solution");

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

console.log("\n450. Delete Node In A Bst\n");

test(deleteNode([1,null,2], 1), [2], 'Test 1');
test(deleteNode([5,3,6,2,4,null,7], 7), [5, 3, 6, 2, 4], 'Test 2');
test(deleteNode([5,3,6,2,4,null,7], 3), [5, 4, 6, 2, null, null, 7], 'Test 3');
test(deleteNode([], 0), null, 'Test 4');
test(deleteNode([5,3,6,2,4,null,7], 0), [5, 3, 6, 2, 4, null, 7], 'Test 5');
test(deleteNode([5,3,6,2,4,null,7], 2), [5, 3, 6, null, 4, null, 7], 'Test 6');
test(deleteNode([2,1,3], 2), [3, 1], 'Test 7');
test(deleteNode([50,30,70,null,40,60,80], 50), [70, 60, 80, 30, null, null, null, null, 40], 'Test 8');
test(deleteNode([5,3,6,2,4,null,7], 4), [5, 3, 6, 2, null, null, 7], 'Test 9');
test(deleteNode([1], 1), null, 'Test 10');
test(deleteNode([1,2,null], 2), [1, 2], 'Test 11');
test(deleteNode([20,15,25,10,18,22,30,8,12,16,19,21,24,27,32], 20), [25, 22, 30, 21, 24, 27, 32, 15, null, null, null, null, null, null, null, 10, 18, 8, 12, 16, 19], 'Test 12');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 9), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 13');
test(deleteNode([10,5,15,3,7,12,18], 3), [10, 5, 15, null, 7, 12, 18], 'Test 14');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 55), [50, 30, 70, 20, 40, 60, 80, 10, null, null, 55, 65, null, null, 85, null, null, null, 90], 'Test 15');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3), [1, 2, 7, 4, 5, 14, 15, 8, 9, 10, 11, 6, null, null, null, null, null, null, null, null, null, null, null, 12, 13], 'Test 16');
test(deleteNode([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85,5,15,null,null,null,null,32,42,47,null,52,62,67,72,78,82,87,90,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 40), [50, 30, 70, 20, 45, 60, 80, 10, 25, 32, 42, 55, 65, 75, 85, 5, 15, null, null, 35, null, null, null, 47, null, 52, 62, 67, 72, 78, 82, 87, 90], 'Test 17');
test(deleteNode([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75], 50), [40, 20, 60, 10, 30, 55, 70, 5, 15, 25, 35, 45, null, 65, 75], 'Test 18');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 19');
test(deleteNode([4,2,7,1,3,5,8,9,10], 4), [7, 5, 8, 2, null, null, null, 1, 3, 9, 10], 'Test 20');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 21');
test(deleteNode([25,15,35,10,20,30,40,5,12,null,null,27,null,null,null,null,null,8], 15), [25, 20, 35, 10, null, 30, 40, 5, 12, 27, null, null, null, null, null, 8], 'Test 22');
test(deleteNode([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15,17,19], 12), [8, 4, 14, 2, 6, 13, 15, 1, 3, 5, 7, 10, null, null, null, 17, 19, null, null, null, null, null, null, 9, 11], 'Test 23');
test(deleteNode([70,30,100,20,50,80,110,10,25,40,60,75,85,105,120,5,15,22,27,35,45,55,72,78,82,87,102,108,115,125], 70), [100, 80, 110, 75, 85, 105, 120, 78, 82, 87, 102, 108, 115, 125, null, 30, null, null, null, null, null, null, null, null, null, null, null, null, null, 20, 50, 10, 25, 40, 60, 5, 15, 22, 27, 35, 45, 55, 72], 'Test 24');
test(deleteNode([10,5,15,3,7,12,18,1,null,6,8,11,13,16,19], 10), [15, 12, 18, 11, 13, 16, 19, 5, null, null, null, null, null, null, null, 3, 7, 1, null, 6, 8], 'Test 25');
test(deleteNode([4,2,7,1,3,5,8,9,10], 7), [4, 2, 8, 1, 3, 5, null, 9, 10], 'Test 26');
test(deleteNode([4,2,7,1,3,5,8,9,10], 1), [4, 2, 7, 10, 3, 5, 8, 9], 'Test 27');
test(deleteNode([10,5,15,3,7,null,18], 15), [10, 5, 18, 3, 7], 'Test 28');
test(deleteNode([10,5,15,2,7,null,20,null,null,6,8,null,null,null,null,16,25], 7), [10, 5, 15, 2, 8, null, 20, null, null, 16, 25, null, null, 6], 'Test 29');
test(deleteNode([20,15,25,10,17,22,30,5,12,16,18,21,23,27,35,3,8,null,null,null,null,null,19,null,null,null,24,26,32,34,null,null,null,null,9,11,null,null,14,null,null,null,null,28,31,33,36], 25), [20, 15, 30, 10, 17, 27, 35, 5, 12, 16, 18, 26, 32, 34, null, 3, 8, null, null, null, null, null, 19, 22, null, null, null, 28, 31, null, null, null, 9, 11, null, 21, 23, null, null, null, null, 33, 36, null, null, null, null, null, 24, null, null, null, null, null, 14], 'Test 30');
test(deleteNode([10,5,15,3,7,null,18,1,null,6,8], 5), [10, 7, 15, 6, 8, null, 18, 3, null, null, null, null, null, 1], 'Test 31');
test(deleteNode([7,3,15,null,null,9,20], 15), [7, 3, 20, null, null, 9], 'Test 32');
test(deleteNode([1,0,2,0,1], 0), [1, 1, 2, 0], 'Test 33');
test(deleteNode([4,2,7,1,3,5,8,9,10], 9), [4, 2, 7, 1, 3, 5, 8, 9, 10], 'Test 34');
test(deleteNode([8,5,12,3,7,10,15,2,4,6,9,11,13,14,17,1,null,null,null,null,null,null,null,null,null,null,16,18], 10), [8, 5, 12, 3, 7, 13, 15, 2, 4, 6, 9, 11, 16, 14, 17, 1, null, null, null, null, null, null, null, null, null, null, null, 18], 'Test 35');
test(deleteNode([3,2,4,1,null,null,5], 4), [3, 2, 5, 1], 'Test 36');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 37');
test(deleteNode([5,3,7,2,4,6,8], 4), [5, 3, 7, 2, null, 6, 8], 'Test 38');
test(deleteNode([30,15,45,10,20,40,50,5,12,18,25,35,48,null,null,null,null,null,null,null,null,null,null,null,33,42], 15), [30, 20, 45, 18, 25, 40, 50, 10, null, null, null, 35, 48, null, null, 5, 12, null, 33, 42], 'Test 39');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 12), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 40');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 85), [50, 30, 70, 20, 40, 60, 80, 10, null, null, 55, 65, null, null, null, null, null, null, 90], 'Test 41');
test(deleteNode([4,2,7,1,3,5,8,9,10], 3), [4, 2, 7, 1, null, 5, 8, 9, 10], 'Test 42');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 43');
test(deleteNode([20,15,25,10,17,22,30,5,12,16,18,21,23,27,35,3,8,null,null,null,null,null,19,null,null,null,24,26,32,34,null,null,null,null,9,11,null,null,14,null,null,null,null,28,31,33,36], 5), [20, 15, 25, 10, 17, 22, 30, 8, 12, 16, 18, 21, 23, 27, 35, 3, 9, null, null, null, null, null, 19, null, null, null, 24, 26, 32, 34, null, null, null, 33, 36, 11, null, null, 14, null, null, null, null, 28, 31], 'Test 44');
test(deleteNode([30,10,40,5,15,35,50,1,7,null,18,32,45,55,60,null,null,null,null,8,null,null,23,27,null,null,null,42,48,null,null,null,53,null,57,null,62], 30), [40, 35, 50, 32, 45, 55, 60, 10, 23, 27, null, null, null, 42, 48, 5, 15, null, 53, null, 57, null, 62, null, null, 1, 7, null, 18, null, null, null, null, null, null, null, null, null, null, 8], 'Test 45');
test(deleteNode([20,10,30,5,15,25,35,3,7,12,17,22,27,32,37,1,4,6,8,11,13,16,18,21,23,26,28,31,33,36,38,39], 20), [30, 25, 35, 22, 27, 32, 37, 21, 23, 26, 28, 31, 33, 36, 38, 10, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 15, 3, 7, 12, 17, 1, 4, 6, 8, 11, 13, 16, 18, 39], 'Test 46');
test(deleteNode([1,null,2,null,3,null,4,null,5], 3), [1, null, 2, null, 4, null, 5], 'Test 47');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 65), [50, 30, 70, 20, 40, 60, 80, 10, null, null, 55, 65, null, null, 85, null, null, null, 90], 'Test 48');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 50), [70, 60, 80, 65, null, null, 85, 30, null, null, null, 20, 40, 10, null, null, 55, null, null, null, 90], 'Test 49');
test(deleteNode([4,2,7,1,3,5,8,9,10], 8), [4, 2, 7, 1, 3, 5, null, 9, 10], 'Test 50');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 13), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 51');
test(deleteNode([8,3,10,null,5,9,12,null,7,null,null,null,11,13], 8), [10, 9, 12, 3, null, null, 11, null, 5, null, null, null, 7, 13], 'Test 52');
test(deleteNode([10,5,15,3,7,null,18], 5), [10, 7, 15, 3, null, null, 18], 'Test 53');
test(deleteNode([5,3,7,2,4,6,8], 5), [7, 6, 8, 3, null, null, null, 2, 4], 'Test 54');
test(deleteNode([4,2,7,1,3,5,8,9,10], 2), [4, 3, 7, 1, null, 5, 8, 9, 10], 'Test 55');
test(deleteNode([5,3,7,2,4,6,8], 2), [5, 3, 7, null, 4, 6, 8], 'Test 56');
test(deleteNode([10,5,15,3,7,13,18,1,null,6], 5), [10, 7, 15, 6, null, 13, 18, 3, null, null, null, null, null, 1], 'Test 57');
test(deleteNode([100,50,150,null,75,null,200,null,125,175,250], 150), [100, 50, 200, null, 75, 175, 250, null, 125], 'Test 58');
test(deleteNode([30,15,45,10,20,40,50,5,null,18,25,35,48,null,null,null,null,19], 20), [30, 15, 45, 10, 25, 40, 50, 5, null, 18, null, 35, 48, null, null, null, null, 19], 'Test 59');
test(deleteNode([30,20,40,15,25,35,45,10,null,null,22,32,37,42,47,5,null,null,null,null,18,null,24,27,null,null,null,null,null,null,null,null,null,null,null], 20), [30, 25, 40, 15, 22, 35, 45, 10, null, null, null, 32, 37, 42, 47, 5, null, null, 18, null, 24, 27], 'Test 60');
test(deleteNode([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85], 30), [50, 40, 70, 35, 45, 60, 80, 20, null, null, null, 55, 65, 75, 85, 10, 25], 'Test 61');
test(deleteNode([10,5,15,3,7,12,18,1,null,6,8,11,13,null,14,null,null,2], 100), [10, 5, 15, 3, 7, 12, 18, 1, null, 6, 8, 11, 13, null, 14, null, null, 2], 'Test 62');
test(deleteNode([5,3,6,2,4,null,7,null,null,3.5,4.5], 3), [5, 4, 6, 3.5, 4.5, null, 7, 2], 'Test 63');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 64');
test(deleteNode([1,2,3,4,5,6,7,8,9,10], 5), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 65');
test(deleteNode([1,2,null,3,null,4,null,5], 4), [1, 2, null, 3, null, 4, null, 5], 'Test 66');
test(deleteNode([4,2,7,1,3,5,8,9,10], 5), [4, 2, 7, 1, 3, null, 8, 9, 10], 'Test 67');
test(deleteNode([20,15,25,10,17,22,30,5,12,16,18,21,23,27,35,3,8,null,null,null,null,null,19,null,null,null,24,26,32,34,null,null,null,null,9,11,null,null,14,null,null,null,null,28,31,33,36], 20), [25, 22, 30, 21, 23, 27, 35, 15, null, null, 24, 26, 32, 34, null, 10, 17, null, 14, null, null, null, null, 28, 31, 5, 12, 16, 18, null, null, null, null, null, null, 3, 8, null, null, null, null, null, 19, null, null, null, 9, 11, null, 33, 36], 'Test 68');
test(deleteNode([15,10,20,8,12,17,25,5,9,11,13,16,18,22,27,3,7,null,null,null,null,14,null,19,21,23,26,28,null,null,null,null,null,null,null,null], 15), [20, 17, 25, 16, 18, 22, 27, 19, 21, 23, 26, 28, null, null, null, 10, null, null, null, null, null, null, null, null, null, 8, 12, 5, 9, 11, 13, 3, 7, null, null, null, null, 14], 'Test 69');
test(deleteNode([15,10,20,8,12,17,25,6,9,11,13,16,18,22,28], 15), [20, 17, 25, 16, 18, 22, 28, 10, null, null, null, null, null, null, null, 8, 12, 6, 9, 11, 13], 'Test 70');
test(deleteNode([4,2,7,1,3,5,8,9,10], 10), [4, 2, 7, 1, 3, 5, 8, 9, 10], 'Test 71');
test(deleteNode([20,15,25,10,18,22,30,5,12,null,17,null,null,null,null,1,null], 15), [20, 18, 25, 10, 17, 22, 30, 5, 12, null, null, null, null, null, null, 1], 'Test 72');
test(deleteNode([5,3,8,2,4,7,9,null,10,null,null,null,null,6], 3), [5, 4, 8, 2, null, 7, 9, null, 10, null, null, 6], 'Test 73');
test(deleteNode([20,15,25,10,17,22,30,5,12,16,18,21,23,27,35,3,8,null,null,null,null,null,19,null,null,null,24,26,32,34,null,null,null,null,9,11,null,null,14,null,null,null,null,28,31,33,36], 30), [20, 15, 25, 10, 17, 22, 35, 5, 12, 16, 18, 21, 23, 34, null, 3, 8, null, null, null, null, null, 19, null, null, null, 24, 28, 31, null, null, null, 9, 11, null, null, 14, 27, null, null, null, 33, 36, null, null, null, null, 26, 32], 'Test 74');
test(deleteNode([10,5,15,3,7,12,18], 7), [10, 5, 15, 3, null, 12, 18], 'Test 75');
test(deleteNode([10,5,15,3,7,12,18,1,null,6,8,11,13,17,19], 10), [15, 12, 18, 11, 13, 17, 19, 5, null, null, null, null, null, null, null, 3, 7, 1, null, 6, 8], 'Test 76');
test(deleteNode([5,3,7,2,4,6,8], 6), [5, 3, 7, 2, 4, null, 8], 'Test 77');
test(deleteNode([10,5,15,3,7,12,18], 12), [10, 5, 15, 3, 7, null, 18], 'Test 78');
test(deleteNode([100,50,150,25,75,125,175,10,30,60,80,110,130,160,180], 100), [150, 125, 175, 110, 130, 160, 180, 50, null, null, null, null, null, null, null, 25, 75, 10, 30, 60, 80], 'Test 79');
test(deleteNode([10,5,15,3,7,12,18,1,4,6,8,11,13,16,19], 5), [10, 7, 15, 6, 8, 12, 18, 3, null, null, null, 11, 13, 16, 19, 1, 4], 'Test 80');
test(deleteNode([10,5,15,3,7,12,18,1,null,6,8,11,13,17,19], 7), [10, 5, 15, 3, 8, 12, 18, 1, null, 6, null, 11, 13, 17, 19], 'Test 81');
test(deleteNode([4,2,6,1,3,5,7], 4), [6, 5, 7, 2, null, null, null, 1, 3], 'Test 82');
test(deleteNode([5,4,null,3,null,2,null,1], 5), [4, 3, null, 2, null, 1], 'Test 83');
test(deleteNode([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], 1), [2, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9], 'Test 84');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), [3, 6, 7, 12, 13, 14, 15, 2, null, null, null, null, null, null, null, 4, 5, 8, 9, 10, 11], 'Test 85');
test(deleteNode([10,5,15,2,7,null,18,null,null,6,8], 5), [10, 7, 15, 6, 8, null, 18, 2], 'Test 86');
test(deleteNode([100,50,150,25,75,125,175,10,35,60,85,115,140,160,185,null,null,null,null,28,null,55,90,null,105,110,130,135,null,null,null,null,null,null,null,null,190,null,195], 100), [150, 125, 175, 115, 140, 160, 185, 50, 105, 110, 130, 135, null, null, null, 25, 75, null, 195, null, null, null, null, null, null, 10, 35, 60, 85, null, null, null, null, null, null, 28, null, 55, 90, null, null, null, null, null, 190], 'Test 87');
test(deleteNode([10,5,15,3,7,12,18,1,null,6,8,11,13,17,19], 15), [10, 5, 18, 3, 7, 17, 19, 1, null, 6, 8, 12, null, null, null, null, null, null, null, null, null, 11, 13], 'Test 88');
test(deleteNode([10,5,15,3,7,12,18], 15), [10, 5, 18, 3, 7, 12], 'Test 89');
test(deleteNode([50,30,70,20,40,60,80,15,25,35,45,55,65,75,85], 60), [50, 30, 70, 20, 40, 65, 80, 15, 25, 35, 45, 55, null, 75, 85], 'Test 90');
test(deleteNode([8,3,10,1,6,null,14,null,null,4,7,13,null,null], 10), [8, 3, 14, 1, 6, 13, null, null, null, 4, 7], 'Test 91');
test(deleteNode([20,15,25,10,17,22,30,5,12,16,18,21,23,27,35,3,8,null,null,null,null,null,19,null,null,null,24,26,32,34,null,null,null,null,9,11,null,null,14,null,null,null,null,28,31,33,36], 11), [20, 15, 25, 10, 17, 22, 30, 5, 12, 16, 18, 21, 23, 27, 35, 3, 8, null, null, null, null, null, 19, null, null, null, 24, 26, 32, 34, null, null, null, null, 9, 11, null, null, 14, null, null, null, null, 28, 31, 33, 36], 'Test 92');
test(deleteNode([4,2,7,1,3,6,9,null,null,null,null,null,8], 6), [4, 2, 7, 1, 3, 8, 9], 'Test 93');
test(deleteNode([30,15,45,10,20,40,50,5,12,18,25,35,48,3,7,null,13,17,null,23,null,33,43,47,null,52], 30), [45, 40, 50, 35, 48, 3, 7, 47, null, 52, null, null, null, null, null, 15, null, null, null, 10, 20, 5, 12, 18, 25, null, 13, 17, null, 23, null, 33, 43], 'Test 94');
test(deleteNode([20,15,25,10,18,22,30,5,12,17,19,21,24,28,35], 20), [25, 22, 30, 21, 24, 28, 35, 15, null, null, null, null, null, null, null, 10, 18, 5, 12, 17, 19], 'Test 95');
test(deleteNode([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75], 20), [40, 30, 60, 25, 35, 50, 70, 10, null, null, null, 45, 55, 65, 75, 5, 15], 'Test 96');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 10), [50, 30, 70, 20, 40, 60, 80, null, null, null, 55, 65, null, null, 85, null, 90], 'Test 97');
test(deleteNode([25,10,30,5,15,28,35,3,7,12,18,null,29,32,34,36], 30), [25, 10, 35, 5, 15, 32, 34, 3, 7, 12, 18, 28, null, null, null, 36, null, null, null, null, null, null, null, null, 29], 'Test 98');
test(deleteNode([7,3,15,null,null,9,20,null,null,8,13,18,23,17,22,21,24,null,null,null,16,null,null,null,null,null,null,null,19], 15), [7, 3, 20, null, null, 8, 13, 18, 23, 17, 22, 21, 24, null, null, null, 16, null, null, 9, null, null, null, null, 19], 'Test 99');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 80), [50, 30, 70, 20, 40, 60, 85, 10, null, null, 55, 65, null, null, null, null, null, null, 90], 'Test 100');
test(deleteNode([10,5,15,3,7,12,18], 18), [10, 5, 15, 3, 7, 12], 'Test 101');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 70), [50, 30, 80, 20, 40, 60, 85, 10, null, null, 55, 65, null, null, null, null, null, null, 90], 'Test 102');
test(deleteNode([10,5,15,3,7,12,18], 10), [15, 12, 18, 5, null, null, null, 3, 7], 'Test 103');
test(deleteNode([10,5,15,null,7,12,20,null,null,6,8], 10), [15, 12, 20, 6, 8, null, null, 5, null, null, null, null, 7], 'Test 104');
test(deleteNode([10,5,15,3,7,12,18,1,null,6,8,11,13,null,14,null,null,2], 10), [15, 12, 18, 11, 13, null, 14, 5, null, null, null, null, null, 3, 7, 1, null, 6, 8, null, null, 2], 'Test 105');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 90), [50, 30, 70, 20, 40, 60, 80, 10, null, null, 55, 65, null, null, 85, null, null, null, 90], 'Test 106');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 6), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 107');
test(deleteNode([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 100), [150, 125, 175, 110, 140, 160, 180, 50, null, null, null, null, null, null, null, 25, 75, 10, 30, 60, 80], 'Test 108');
test(deleteNode([5,3,6,2,4,null,7,1], 3), [5, 4, 6, 2, null, null, 7, 1], 'Test 109');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 12), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 110');
test(deleteNode([10,5,15,3,7,13,18,1,null,6], 15), [10, 5, 18, 3, 7, 13, null, 1, null, 6], 'Test 111');
test(deleteNode([7,3,15,null,null,9,20,null,null,8,10], 15), [7, 3, 20, null, null, 8, 10, 9], 'Test 112');
test(deleteNode([5,3,7,2,4,6,8], 8), [5, 3, 7, 2, 4, 6], 'Test 113');
test(deleteNode([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85], 50), [70, 60, 80, 55, 65, 75, 85, 30, null, null, null, null, null, null, null, 20, 40, 10, 25, 35, 45], 'Test 114');
test(deleteNode([20,10,30,5,15,25,35,3,7,12,18,23,28,33,37], 10), [20, 15, 30, 12, 18, 25, 35, 5, null, null, null, 23, 28, 33, 37, 3, 7], 'Test 115');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), [1, 2, 3, 4, 5, 6, 15, 8, 9, 10, 11, 12, 13, 14], 'Test 116');
test(deleteNode([8,5,10,2,6,9,12,null,null,3,7,null,null,null,null,null,null], 6), [8, 5, 10, 2, 7, 9, 12, null, null, 3], 'Test 117');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 20), [50, 30, 70, 10, 40, 60, 80, null, null, null, 55, 65, null, null, 85, null, 90], 'Test 118');
test(deleteNode([20,10,30,5,15,25,35,null,null,12,17,null,null,null,null,null,null], 10), [20, 15, 30, 12, 17, 25, 35, 5], 'Test 119');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 120');
test(deleteNode([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 40), [50, 30, 70, 20, 45, 60, 80, 10, 25, 35, null, 55, 65, 75, 85], 'Test 121');
test(deleteNode([10,5,15,3,7,12,18,1,null,6,8,11,13,17,19], 20), [10, 5, 15, 3, 7, 12, 18, 1, null, 6, 8, 11, 13, 17, 19], 'Test 122');
test(deleteNode([20,15,25,10,17,22,30,5,12,16,18,21,23,27,35,3,8,null,null,null,null,null,19,null,null,null,24,26,32,34,null,null,null,null,9,11,null,null,14,null,null,null,null,28,31,33,36], 15), [20, 17, 25, 16, 18, 22, 30, 10, null, null, 19, 21, 23, 27, 35, 5, 12, 11, null, null, null, null, 24, 26, 32, 34, null, 3, 8, null, null, null, null, null, 14, null, null, null, null, 28, 31, null, null, null, 9, null, null, null, null, null, null, 33, 36], 'Test 123');
test(deleteNode([50,20,80,15,30,70,90,10,18,25,35,60,75,85,95], 50), [80, 70, 90, 60, 75, 85, 95, 20, null, null, null, null, null, null, null, 15, 30, 10, 18, 25, 35], 'Test 124');
test(deleteNode([5,3,7,2,4,6,8], 3), [5, 4, 7, 2, null, 6, 8], 'Test 125');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 14), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 126');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 127');
test(deleteNode([100,50,150,25,75,125,175,10,35,60,85,110,140,160,180], 100), [150, 125, 175, 110, 140, 160, 180, 50, null, null, null, null, null, null, null, 25, 75, 10, 35, 60, 85], 'Test 128');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 30), [50, 40, 70, 20, 55, 60, 80, 10, null, null, 90, 65, null, null, 85], 'Test 129');
test(deleteNode([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75], 30), [40, 20, 60, 10, 35, 50, 70, 5, 15, 25, null, 45, 55, 65, 75], 'Test 130');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 40), [50, 30, 70, 20, 55, 60, 80, 10, null, null, 90, 65, null, null, 85], 'Test 131');
test(deleteNode([50,30,70,20,40,60,80,10,25,35,45,55,65,75,90], 50), [70, 60, 80, 55, 65, 75, 90, 30, null, null, null, null, null, null, null, 20, 40, 10, 25, 35, 45], 'Test 132');
test(deleteNode([5,3,6,2,4,null,7,null,null,3.5,null,null,6.5], 3), [5, 4, 6, 3.5, null, null, 7, 2, null, null, 6.5], 'Test 133');
test(deleteNode([5,3,7,2,4,6,8], 7), [5, 3, 8, 2, 4, 6], 'Test 134');
test(deleteNode([50,30,70,20,40,60,80,10,null,null,55,65,null,null,85,null,null,null,90], 60), [50, 30, 70, 20, 40, 65, 80, 10, null, null, 55, null, null, null, 85, null, null, null, 90], 'Test 135');
test(deleteNode([1,2,3,null,null,4,5], 2), [1, 2, 3, null, null, 4, 5], 'Test 136');
test(deleteNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 137');
test(deleteNode([20,10,30,5,15,25,35,2,7,12,18,23,28,33,38,1,null,6,null,11,13,null,17,19,null,22,24,27,29,null,32,34,null,37,39], 20), [30, 25, 35, 23, 28, 33, 38, 19, null, 22, 24, 27, 29, null, 32, 10, null, null, null, null, null, null, null, null, null, null, null, 5, 15, 2, 7, 12, 18, 1, null, 6, null, 11, 13, null, 17, 34, null, 37, 39], 'Test 138');

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
