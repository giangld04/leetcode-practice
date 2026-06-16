// Test: 998. Maximum Binary Tree Ii
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { insertIntoMaxTree } = require("./solution");

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

console.log("\n998. Maximum Binary Tree Ii\n");

test(insertIntoMaxTree([4,1,3,null,null,2], 5), [5, 4, null, 1, 3, null, null, 2], 'Test 1');
test(insertIntoMaxTree([5,2,4,null,1], 3), [5, 2, 4, null, 1, null, 3], 'Test 2');
test(insertIntoMaxTree([5,2,3,null,1], 4), [5, 2, 4, null, 1, 3], 'Test 3');
test(insertIntoMaxTree([50,20,40,null,10,30,null,null,null,5,15,25,35], 28), [50, 20, 40, null, 10, 30, 28, null, null, 5, 15, null, null, 25, 35], 'Test 4');
test(insertIntoMaxTree([8,3,11,1,6,null,12,0,5,null,9,null,13], 15), [15, 8, null, 3, 11, 1, 6, null, 12, 0, 5, null, 9, null, 13], 'Test 5');
test(insertIntoMaxTree([30,20,40,10,null,null,50,5,null,null,null,45], 35), [35, 30, null, 20, 40, 10, null, null, 50, 5, null, null, null, 45], 'Test 6');
test(insertIntoMaxTree([10,5,15,3,7,null,18], 6), [10, 5, 15, 3, 7, null, 18, null, null, null, null, null, 6], 'Test 7');
test(insertIntoMaxTree([20,10,15,5,null,null,null,3,7], 25), [25, 20, null, 10, 15, 5, null, null, null, 3, 7], 'Test 8');
test(insertIntoMaxTree([2,1], 3), [3, 2, null, 1], 'Test 9');
test(insertIntoMaxTree([3,2,4,null,null,null,5], 1), [3, 2, 4, null, null, null, 5, null, 1], 'Test 10');
test(insertIntoMaxTree([30,10,20,null,null,15,25], 22), [30, 10, 22, null, null, 20, null, 15, 25], 'Test 11');
test(insertIntoMaxTree([50,20,40,null,10,30,null,null,null,5,15,25,35], 22), [50, 20, 40, null, 10, 30, 22, null, null, 5, 15, null, null, 25, 35], 'Test 12');
test(insertIntoMaxTree([9,7,10,5,8,null,null,3,6], 11), [11, 9, null, 7, 10, 5, 8, null, null, 3, 6], 'Test 13');
test(insertIntoMaxTree([2,1,null,4,3], 5), [5, 2, null, 1, null, 4, 3], 'Test 14');
test(insertIntoMaxTree([75,50,80,30,60,78,90,10,null,55,null,null,77,null,null,null,95], 65), [75, 50, 80, 30, 60, 78, 90, 10, null, 55, null, null, 77, null, 65, null, 95], 'Test 15');
test(insertIntoMaxTree([20,10,25,5,15,22,30,2,7,13,17,18,27,29,31,1,3,6,8,12,14,16,19,21,23,26,24,28,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 32), [32, 20, null, 10, 25, 5, 15, 22, 30, 2, 7, 13, 17, 18, 27, 29, 31, 1, 3, 6, 8, 12, 14, 16, 19, 21, 23, 26, 24, 28], 'Test 16');
test(insertIntoMaxTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20), [20, 1, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 17');
test(insertIntoMaxTree([10,5,15,null,6,12,20,null,null,null,7,13,17,null,null,null,null,null,25], 14), [14, 10, null, 5, 15, null, 6, 12, 20, null, null, null, 7, 13, 17, null, null, null, null, null, 25], 'Test 18');
test(insertIntoMaxTree([7,3,8,1,4,6,9,null,null,null,5], 12), [12, 7, null, 3, 8, 1, 4, 6, 9, null, null, null, 5], 'Test 19');
test(insertIntoMaxTree([3,2,1], 4), [4, 3, null, 2, 1], 'Test 20');
test(insertIntoMaxTree([60,30,80,20,40,70,90,10,25,35,45,65,75,85,95], 88), [88, 60, null, 30, 80, 20, 40, 70, 90, 10, 25, 35, 45, 65, 75, 85, 95], 'Test 21');
test(insertIntoMaxTree([7,3,8,1,4,6,9,null,2,null,5], 1), [7, 3, 8, 1, 4, 6, 9, null, 2, null, 5, null, null, null, 1], 'Test 22');
test(insertIntoMaxTree([60,30,80,10,50,70,90,null,null,20,40,null,null,75,null], 100), [100, 60, null, 30, 80, 10, 50, 70, 90, null, null, 20, 40, null, null, 75], 'Test 23');
test(insertIntoMaxTree([6,3,8,1,5,7,9,0,2,4,6,8,10], 7), [7, 6, null, 3, 8, 1, 5, 7, 9, 0, 2, 4, 6, 8, 10], 'Test 24');
test(insertIntoMaxTree([1,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7], 8), [8, 1, null, 2, null, null, 3], 'Test 25');
test(insertIntoMaxTree([50,25,75,10,40,60,80,5,15,30,45,55,65,75,85], 90), [90, 50, null, 25, 75, 10, 40, 60, 80, 5, 15, 30, 45, 55, 65, 75, 85], 'Test 26');
test(insertIntoMaxTree([9,3,10,1,5,null,null,0,4,null,6], 11), [11, 9, null, 3, 10, 1, 5, null, null, 0, 4, null, 6], 'Test 27');
test(insertIntoMaxTree([5,2,4,null,1,null,3,null,null,null,null], 35), [35, 5, null, 2, 4, null, 1, null, 3], 'Test 28');
test(insertIntoMaxTree([6,3,9,2,5,8,10,null,null,1,4,7,null,null,null,null,null,null,null], 11), [11, 6, null, 3, 9, 2, 5, 8, 10, null, null, 1, 4, 7], 'Test 29');
test(insertIntoMaxTree([3,1,4,null,2,null,6,5,null,null,7], 8), [8, 3, null, 1, 4, null, 2, null, 6, 5, null, null, 7], 'Test 30');
test(insertIntoMaxTree([10,5,20,null,null,15,30,12,null,null,25,28,null,null,35], 33), [33, 10, null, 5, 20, null, null, 15, 30, 12, null, null, 25, 28, null, null, 35], 'Test 31');
test(insertIntoMaxTree([15,10,20,5,12,18,25,1,6,null,14,16,null,19,23,null,null,null,3,null,null,null,11,null,null,null,null,null,null,2,null,null,null,null], 17), [17, 15, null, 10, 20, 5, 12, 18, 25, 1, 6, null, 14, 16, null, 19, 23, null, null, null, 3, null, null, null, 11, null, null, null, null, null, null, 2], 'Test 32');
test(insertIntoMaxTree([15,5,16,2,7,null,null,1,3,null,6,4,null,null,null,null,null], 10), [15, 5, 16, 2, 7, null, 10, 1, 3, null, 6, null, null, 4], 'Test 33');
test(insertIntoMaxTree([8,3,10,1,5,9,11,null,2,4,7,null,null,6,null,null,null,null,null], 12), [12, 8, null, 3, 10, 1, 5, 9, 11, null, 2, 4, 7, null, null, 6], 'Test 34');
test(insertIntoMaxTree([5,3,7,2,4,6,8], 1), [5, 3, 7, 2, 4, 6, 8, null, null, null, null, null, null, null, 1], 'Test 35');
test(insertIntoMaxTree([9,5,11,3,7,10,13,1,4,6,8,9,12,14,15], 16), [16, 9, null, 5, 11, 3, 7, 10, 13, 1, 4, 6, 8, 9, 12, 14, 15], 'Test 36');
test(insertIntoMaxTree([25,15,35,10,20,30,40,null,null,null,null,null,null,37], 22), [25, 15, 35, 10, 20, 30, 40, null, null, null, null, null, null, 37, 22], 'Test 37');
test(insertIntoMaxTree([7,3,8,null,4,9,null,null,5,null,10,6,null,null,11], 12), [12, 7, null, 3, 8, null, 4, 9, null, null, 5, null, 10, 6, null, null, 11], 'Test 38');
test(insertIntoMaxTree([20,10,25,null,15,22,30,null,null,13,null,null,28], 18), [20, 10, 25, null, 15, 22, 30, null, null, 13, null, null, 28, null, null, null, 18], 'Test 39');
test(insertIntoMaxTree([7,5,10,4,6,9,12,null,null,2,null,8,null,11,null,null,null,13], 14), [14, 7, null, 5, 10, 4, 6, 9, 12, null, null, 2, null, 8, null, 11, null, null, null, 13], 'Test 40');
test(insertIntoMaxTree([7,3,8,1,4,6,9,null,2,null,5], 11), [11, 7, null, 3, 8, 1, 4, 6, 9, null, 2, null, 5], 'Test 41');
test(insertIntoMaxTree([6,2,8,0,4,7,9,null,null,3,5], 10), [10, 6, null, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 'Test 42');
test(insertIntoMaxTree([3,1,4,null,2], 0), [3, 1, 4, null, 2, null, 0], 'Test 43');
test(insertIntoMaxTree([20,10,30,5,15,25,35,1,7,null,13,22,28,null,null,null,null,null,6,null,null,null,null,null,27,null,null], 18), [20, 10, 30, 5, 15, 25, 35, 1, 7, null, 13, 22, 28, null, 18, null, null, null, 6, null, null, null, null, null, 27], 'Test 44');
test(insertIntoMaxTree([8,5,9,3,7,6,10,1,4,null,null,null,null,null,11], 12), [12, 8, null, 5, 9, 3, 7, 6, 10, 1, 4, null, null, null, null, null, 11], 'Test 45');
test(insertIntoMaxTree([15,10,20,5,12,18,25,3,7,11,14,16,19,23,27,1,4,6,8,9,13,15,17,21,22,24,26,28], 29), [29, 15, null, 10, 20, 5, 12, 18, 25, 3, 7, 11, 14, 16, 19, 23, 27, 1, 4, 6, 8, 9, 13, 15, 17, 21, 22, 24, 26, 28], 'Test 46');
test(insertIntoMaxTree([50,20,30,10,25,28,35,null,15,null,null,null,null,null,40], 45), [50, 20, 45, 10, 25, 30, null, null, 15, null, null, 28, 35, null, null, null, null, null, 40], 'Test 47');
test(insertIntoMaxTree([10,5,12,2,7,null,13,1,null,6,8], 14), [14, 10, null, 5, 12, 2, 7, null, 13, 1, null, 6, 8], 'Test 48');
test(insertIntoMaxTree([9,6,12,3,8,11,15,null,5,7,null,null,13,null,null,16,17], 14), [14, 9, null, 6, 12, 3, 8, 11, 15, null, 5, 7, null, null, 13, null, null, 16, 17], 'Test 49');
test(insertIntoMaxTree([50,20,40,null,10,30,null,null,null,5,15,25,35], 45), [50, 20, 45, null, 10, 40, null, null, null, 30, null, 5, 15, 25, 35], 'Test 50');
test(insertIntoMaxTree([7,3,8,1,4,6,9,null,2,null,5], 10), [10, 7, null, 3, 8, 1, 4, 6, 9, null, 2, null, 5], 'Test 51');
test(insertIntoMaxTree([100,50,150,25,75,null,200,10,30,60,90,180,220], 120), [120, 100, null, 50, 150, 25, 75, null, 200, 10, 30, 60, 90, 180, 220], 'Test 52');
test(insertIntoMaxTree([8,3,10,1,4,null,12,null,2,5,7,null,null,6,9,11], 1), [8, 3, 10, 1, 4, null, 12, null, 2, 5, 7, null, 1, 6, 9, 11], 'Test 53');
test(insertIntoMaxTree([50,20,40,null,10,30,null,null,null,5,15,25,35], 9), [50, 20, 40, null, 10, 30, 9, null, null, 5, 15, null, null, 25, 35], 'Test 54');
test(insertIntoMaxTree([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85], 42), [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45, 55, 65, 75, 85, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 42], 'Test 55');
test(insertIntoMaxTree([9,3,12,1,6,11,13,null,2,5,7,null,null,10,null,null,null,null,null], 8), [9, 3, 12, 1, 6, 11, 13, null, 2, 5, 7, null, null, 10, 8], 'Test 56');
test(insertIntoMaxTree([7,3,8,1,4,6,9,null,2,null,5], 6), [7, 3, 8, 1, 4, 6, 9, null, 2, null, 5, null, null, null, 6], 'Test 57');
test(insertIntoMaxTree([6,2,8,1,4,7,9,null,null,3,5], 10), [10, 6, null, 2, 8, 1, 4, 7, 9, null, null, 3, 5], 'Test 58');
test(insertIntoMaxTree([10,5,15,null,null,12,20,null,null,11,13], 8), [10, 5, 15, null, null, 12, 20, null, null, 11, 13, null, null, null, 8], 'Test 59');
test(insertIntoMaxTree([1], 2), [2, 1], 'Test 60');
test(insertIntoMaxTree([5,3,8,2,4,null,9,1,null,7,null,6], 13), [13, 5, null, 3, 8, 2, 4, null, 9, 1, null, 7, null, 6], 'Test 61');
test(insertIntoMaxTree([7,2,11,1,6,10,13,0,5,null,9,8,12,null,14], 16), [16, 7, null, 2, 11, 1, 6, 10, 13, 0, 5, null, 9, 8, 12, null, 14], 'Test 62');
test(insertIntoMaxTree([1,3,null,2], 4), [4, 1, null, 3, null, 2], 'Test 63');
test(insertIntoMaxTree([15,5,25,3,10,null,30,2,4,7,13,27,35,26,null,null,null,null,null,36,37], 38), [38, 15, null, 5, 25, 3, 10, null, 30, 2, 4, 7, 13, 27, 35, 26, null, null, null, null, null, 36, 37], 'Test 64');
test(insertIntoMaxTree([90,60,100,40,70,95,110,20,50,65,75,92,98,null,null,10,30,45,55,null,62,68,73,85,91,96,105,null,null,null,null,null,null,null,null,null,null,null,null,35], 88), [90, 60, 100, 40, 70, 95, 110, 20, 50, 65, 75, 92, 98, null, 88, 10, 30, 45, 55, null, 62, 68, 73, 85, 91, 96, 105, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 35], 'Test 65');
test(insertIntoMaxTree([10,4,12,2,7,11,14,1,3,5,8,9,13,15], 16), [16, 10, null, 4, 12, 2, 7, 11, 14, 1, 3, 5, 8, 9, 13, 15], 'Test 66');
test(insertIntoMaxTree([10,5,15,2,6,12,18,null,null,null,null,11,13,null,null,null,null,16,20], 9), [10, 5, 15, 2, 6, 12, 18, null, null, null, null, 11, 13, null, 9, null, null, 16, 20], 'Test 67');
test(insertIntoMaxTree([15,10,20,5,12,17,25,3,7,11,13,null,18,null,2,6,8,9,14,16,19,21,23,null,null,null,null,null,null,null,null,22,24,26], 27), [27, 15, null, 10, 20, 5, 12, 17, 25, 3, 7, 11, 13, null, 18, null, 2, 6, 8, 9, 14, 16, 19, 21, 23, null, null, null, null, null, null, null, null, 22, 24, 26], 'Test 68');
test(insertIntoMaxTree([8,5,10,2,6,null,15,null,null,null,null,12], 7), [8, 5, 10, 2, 6, null, 15, null, null, null, null, 12, 7], 'Test 69');
test(insertIntoMaxTree([75,50,80,25,60,78,85,10,30,55,65,null,79,null,20,40,53,null,null,58], 100), [100, 75, null, 50, 80, 25, 60, 78, 85, 10, 30, 55, 65, null, 79, null, 20, 40, 53, null, null, 58], 'Test 70');
test(insertIntoMaxTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 16), [16, 1, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 71');
test(insertIntoMaxTree([3,2,4,null,null,null,5], 6), [6, 3, null, 2, 4, null, null, null, 5], 'Test 72');
test(insertIntoMaxTree([50,20,40,null,10,30,null,null,null,5,15,25,35], 60), [60, 50, null, 20, 40, null, 10, 30, null, null, null, 5, 15, 25, 35], 'Test 73');
test(insertIntoMaxTree([7,3,8,null,null,5,9,null,4], 6), [7, 3, 8, null, null, 5, 9, null, 4, null, 6], 'Test 74');
test(insertIntoMaxTree([15,7,16,3,9,11,17,1,5,8,10,12,13,null,4,6,null,2,14], 18), [18, 15, null, 7, 16, 3, 9, 11, 17, 1, 5, 8, 10, 12, 13, null, 4, 6, null, 2, 14], 'Test 75');
test(insertIntoMaxTree([7,4,9,2,5,null,10,1,3,6,8,null,null,null,null,null,11], 7), [7, 4, 9, 2, 5, null, 10, 1, 3, 6, 8, null, 7, null, null, null, 11], 'Test 76');
test(insertIntoMaxTree([100,50,150,25,75,125,175,10,30,60,90,110,140,160,180], 130), [130, 100, null, 50, 150, 25, 75, 125, 175, 10, 30, 60, 90, 110, 140, 160, 180], 'Test 77');
test(insertIntoMaxTree([10,5,15,2,7,null,18,1,3,6,9,null,null,null,null,null,16,17], 20), [20, 10, null, 5, 15, 2, 7, null, 18, 1, 3, 6, 9, null, null, null, null, null, 16, 17], 'Test 78');
test(insertIntoMaxTree([9,3,7,null,6,4,8], 10), [10, 9, null, 3, 7, null, 6, 4, 8], 'Test 79');
test(insertIntoMaxTree([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 90), [100, 50, 150, 25, 75, 125, 175, 10, 30, 60, 80, 110, 140, 160, 180, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 90], 'Test 80');
test(insertIntoMaxTree([75,50,80,25,60,78,85,10,30,55,65,null,79,null,20,40,53,null,null,58], 27), [75, 50, 80, 25, 60, 78, 85, 10, 30, 55, 65, null, 79, null, 27, 40, 53, null, null, 58, null, null, null, null, null, 20], 'Test 81');
test(insertIntoMaxTree([75,50,80,25,60,78,85,10,30,55,65,null,79,null,20,40,53,null,null,58], 10), [75, 50, 80, 25, 60, 78, 85, 10, 30, 55, 65, null, 79, null, 20, 40, 53, null, null, 58, null, null, null, null, null, null, 10], 'Test 82');
test(insertIntoMaxTree([75,50,80,25,60,78,85,10,30,55,65,null,79,null,20,40,53,null,null,58], 62), [75, 50, 80, 25, 60, 78, 85, 10, 30, 55, 65, null, 79, null, 62, 40, 53, null, null, 58, null, null, null, null, null, 20], 'Test 83');
test(insertIntoMaxTree([20,10,30,5,15,25,35,2,7,12,18,23,28,33,38,1,4,6,8,9,11,13,14,16,17,19,21,22,24,26,27,29,31,32,34,36,37,39,40], 41), [41, 20, null, 10, 30, 5, 15, 25, 35, 2, 7, 12, 18, 23, 28, 33, 38, 1, 4, 6, 8, 9, 11, 13, 14, 16, 17, 19, 21, 22, 24, 26, 27, 29, 31, 32, 34, 36, 37, 39, 40], 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

