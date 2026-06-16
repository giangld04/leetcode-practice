// Test: 3285. Find Indices Of Stable Mountains
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { stableMountains } = require("./solution");

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

console.log("\n3285. Find Indices Of Stable Mountains\n");

test(stableMountains([50,50,50,50,50], 49), [1, 2, 3, 4], 'Test 1');
test(stableMountains([2,3,2,3,2], 2), [2, 4], 'Test 2');
test(stableMountains([5,4,3,2,1], 3), [1, 2], 'Test 3');
test(stableMountains([10,1,10,1,10], 3), [1, 3], 'Test 4');
test(stableMountains([1,3,5,7,9], 0), [1, 2, 3, 4], 'Test 5');
test(stableMountains([9,8,7,6,5], 5), [1, 2, 3, 4], 'Test 6');
test(stableMountains([5,4,3,2,1], 1), [1, 2, 3, 4], 'Test 7');
test(stableMountains([1,2,3,4,5], 2), [3, 4], 'Test 8');
test(stableMountains([5,6,7,8,9], 5), [2, 3, 4], 'Test 9');
test(stableMountains([1,2,3,2,1], 1), [2, 3, 4], 'Test 10');
test(stableMountains([2,3,4,5,6], 1), [1, 2, 3, 4], 'Test 11');
test(stableMountains([10,1,10,1,10], 10), [], 'Test 12');
test(stableMountains([1,1,1,1,1], 0), [1, 2, 3, 4], 'Test 13');
test(stableMountains([5,6,7,8,9], 4), [1, 2, 3, 4], 'Test 14');
test(stableMountains([2,3,4,5,6], 5), [], 'Test 15');
test(stableMountains([1,1,1,1,1], 1), [], 'Test 16');
test(stableMountains([3,2,1,2,3], 2), [1], 'Test 17');
test(stableMountains([1,100,1,100,1], 1), [2, 4], 'Test 18');
test(stableMountains([1,2,3,2,1], 2), [3], 'Test 19');
test(stableMountains([100,99,98,97,96], 95), [1, 2, 3, 4], 'Test 20');
test(stableMountains([1,2,3,4,5,6,7,8,9,10], 5), [6, 7, 8, 9], 'Test 21');
test(stableMountains([20, 19, 18, 17, 16, 15, 14, 13, 12, 11], 14), [1, 2, 3, 4, 5, 6], 'Test 22');
test(stableMountains([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 50), [2, 4, 6, 8], 'Test 23');
test(stableMountains([10,1,10,1,10,1,10,1,10,1], 5), [1, 3, 5, 7, 9], 'Test 24');
test(stableMountains([2, 3, 2, 5, 4, 7, 6, 9, 8, 10], 4), [4, 6, 7, 8, 9], 'Test 25');
test(stableMountains([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 26');
test(stableMountains([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), [7, 8, 9, 10], 'Test 27');
test(stableMountains([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), [8, 9, 10, 11, 12, 13, 14], 'Test 28');
test(stableMountains([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35], 45), [1, 2, 3, 4, 5], 'Test 29');
test(stableMountains([1, 3, 2, 4, 3, 5, 4, 6, 5, 7], 2), [2, 4, 5, 6, 7, 8, 9], 'Test 30');
test(stableMountains([10, 10, 10, 10, 10, 10], 9), [1, 2, 3, 4, 5], 'Test 31');
test(stableMountains([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9], 3), [4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 32');
test(stableMountains([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 95), [1, 2, 3, 4, 5], 'Test 33');
test(stableMountains([2, 3, 3, 4, 4, 5, 5, 6, 6, 7], 3), [4, 5, 6, 7, 8, 9], 'Test 34');
test(stableMountains([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100], 1), [], 'Test 35');
test(stableMountains([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40], 45), [1, 2, 3, 4, 5], 'Test 36');
test(stableMountains([50,50,50,50,50,50,50,50,50,50], 49), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 37');
test(stableMountains([1,1,1,1,1,1,1,1,1,1], 1), [], 'Test 38');
test(stableMountains([100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 50), [1], 'Test 39');
test(stableMountains([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 50), [1, 2, 3, 4, 5], 'Test 40');
test(stableMountains([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2], 1), [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 41');
test(stableMountains([10, 20, 15, 25, 10, 30, 5, 35], 15), [2, 4, 6], 'Test 42');
test(stableMountains([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), [], 'Test 43');
test(stableMountains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), [11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 44');
test(stableMountains([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100], 50), [], 'Test 45');
test(stableMountains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), [6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 46');
test(stableMountains([50, 40, 30, 20, 10, 5, 15, 25, 35, 45, 55], 25), [1, 2, 3, 9, 10], 'Test 47');
test(stableMountains([100,99,98,97,96,95,94,93,92,91], 95), [1, 2, 3, 4, 5], 'Test 48');
test(stableMountains([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 49');
test(stableMountains([100, 1, 100, 1, 100, 1, 100], 50), [1, 3, 5], 'Test 50');
test(stableMountains([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), [2, 3, 4, 5, 6, 7, 8, 9], 'Test 51');
test(stableMountains([10, 20, 10, 30, 10, 40, 10, 50, 10, 60], 15), [2, 4, 6, 8], 'Test 52');
test(stableMountains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), [8, 9, 10, 11, 12, 13, 14], 'Test 53');
test(stableMountains([50, 51, 49, 52, 50, 53, 50], 50), [2, 4, 6], 'Test 54');
test(stableMountains([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 40), [13, 14, 15, 16, 17, 18, 19], 'Test 55');
test(stableMountains([5, 15, 5, 25, 5, 35, 5, 45, 5, 55], 10), [2, 4, 6, 8], 'Test 56');
test(stableMountains([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53], 30), [11, 12, 13, 14, 15], 'Test 57');
test(stableMountains([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], 55), [7, 8, 9, 10], 'Test 58');
test(stableMountains([1, 2, 3, 100, 2, 3, 100, 4, 5], 50), [4, 7], 'Test 59');
test(stableMountains([50, 40, 30, 20, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 45), [1, 9, 10, 11, 12, 13], 'Test 60');
test(stableMountains([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16], 20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 61');
test(stableMountains([100,1,100,1,100,1,100,1,100,1,100,1,100,1,100], 99), [1, 3, 5, 7, 9, 11, 13], 'Test 62');
test(stableMountains([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36], 40), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 63');
test(stableMountains([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 95), [1, 2, 3, 4, 5], 'Test 64');
test(stableMountains([1, 10, 2, 20, 3, 30, 4, 40, 5, 50], 1), [2, 3, 4, 5, 6, 7, 8, 9], 'Test 65');
test(stableMountains([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), [], 'Test 66');
test(stableMountains([100, 50, 99, 49, 98, 48, 97, 47], 50), [1, 3, 5, 7], 'Test 67');
test(stableMountains([3, 7, 5, 11, 9, 13, 12, 14, 15, 10], 8), [4, 5, 6, 7, 8, 9], 'Test 68');
test(stableMountains([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 60), [7, 8, 9, 10, 11, 12, 13], 'Test 69');
test(stableMountains([50, 20, 30, 40, 60, 50, 70, 80], 25), [1, 3, 4, 5, 6, 7], 'Test 70');
test(stableMountains([99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], 100), [], 'Test 71');
test(stableMountains([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 5), [2, 4, 6, 8], 'Test 72');
test(stableMountains([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 73');
test(stableMountains([20, 25, 20, 25, 20, 25, 20, 25, 20, 25], 20), [2, 4, 6, 8], 'Test 74');
test(stableMountains([100, 50, 60, 70, 80, 90, 100, 1, 2, 3], 50), [1, 3, 4, 5, 6, 7], 'Test 75');
test(stableMountains([1, 2, 3, 4, 5, 4, 3, 2, 1], 3), [4, 5, 6], 'Test 76');
test(stableMountains([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 4), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 77');
test(stableMountains([50,40,60,50,70,60,80,70,90,80,100], 40), [1, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 78');
test(stableMountains([2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 79');
test(stableMountains([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 24), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 80');
test(stableMountains([10,20,30,25,35,40,45,50], 25), [3, 5, 6, 7], 'Test 81');
test(stableMountains([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 5), [2, 4, 6, 8, 10, 12, 14, 16, 18], 'Test 82');
test(stableMountains([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 8), [5, 6, 7, 8, 9], 'Test 83');
test(stableMountains([10,20,30,40,50,45,40,35,30,25,20,15,10], 30), [4, 5, 6, 7, 8], 'Test 84');
test(stableMountains([70, 60, 50, 40, 30, 20, 10, 5, 1], 50), [1, 2], 'Test 85');
test(stableMountains([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15), [1, 2, 3, 4, 5], 'Test 86');
test(stableMountains([5,15,25,35,45,55,65,75,85,95,105], 50), [6, 7, 8, 9, 10], 'Test 87');
test(stableMountains([10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40, 50, 60], 30), [4, 5, 6, 12, 13], 'Test 88');
test(stableMountains([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), [6, 7, 8, 9], 'Test 89');
test(stableMountains([5,20,10,30,15,40,25,50,35,60], 10), [2, 4, 5, 6, 7, 8, 9], 'Test 90');
test(stableMountains([1, 100, 2, 99, 3, 98, 4, 97, 5, 96], 50), [2, 4, 6, 8], 'Test 91');
test(stableMountains([3, 7, 2, 8, 5, 10, 12], 6), [2, 4, 6], 'Test 92');
test(stableMountains([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8], 2), [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 93');
test(stableMountains([10,20,30,20,30,20,30,20,30], 15), [2, 3, 4, 5, 6, 7, 8], 'Test 94');
test(stableMountains([90, 80, 70, 60, 50, 40, 30, 20, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 40), [1, 2, 3, 4, 5], 'Test 95');
test(stableMountains([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10], 5), [1, 2, 3, 4, 5], 'Test 96');
test(stableMountains([10, 20, 30, 20, 10, 20, 30, 20, 10, 20], 15), [2, 3, 4, 6, 7, 8], 'Test 97');
test(stableMountains([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 2), [2, 4, 6, 8, 10], 'Test 98');
test(stableMountains([3,6,9,12,15,18,21,24,27,30], 12), [5, 6, 7, 8, 9], 'Test 99');
test(stableMountains([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 1), [1, 3, 5, 7, 9, 11, 13], 'Test 100');
test(stableMountains([1, 2, 3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3), [4, 5, 6, 7, 8, 9, 10], 'Test 101');
test(stableMountains([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 30), [7, 8, 9, 10, 11, 12, 13, 14], 'Test 102');
test(stableMountains([3, 5, 2, 7, 8, 6, 4, 9, 10, 1], 4), [2, 4, 5, 6, 8, 9], 'Test 103');
test(stableMountains([75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5], 35), [1, 2, 3, 4, 5, 6, 7, 8], 'Test 104');
test(stableMountains([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), [1, 2, 3, 4, 5], 'Test 105');
test(stableMountains([20, 30, 20, 30, 20, 30, 20, 30, 20, 30], 25), [2, 4, 6, 8], 'Test 106');
test(stableMountains([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 15), [8, 9, 10, 11, 12, 13, 14], 'Test 107');
test(stableMountains([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10], 2), [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 108');
test(stableMountains([50, 60, 70, 80, 90, 100], 40), [1, 2, 3, 4, 5], 'Test 109');
test(stableMountains([50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 25), [1, 2, 3], 'Test 110');
test(stableMountains([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11], 18), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 111');
test(stableMountains([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31], 35), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 112');
test(stableMountains([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 100), [], 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

