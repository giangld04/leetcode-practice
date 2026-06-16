// Test: 3010. Divide An Array Into Subarrays With Minimum Cost I
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n3010. Divide An Array Into Subarrays With Minimum Cost I\n");

test(minimumCost([30,20,10,40,50]), 60, 'Test 1');
test(minimumCost([50,49,48,47,46,45]), 141, 'Test 2');
test(minimumCost([5,4,3]), 12, 'Test 3');
test(minimumCost([40,30,20,10,5]), 55, 'Test 4');
test(minimumCost([50,1,50,1,50]), 52, 'Test 5');
test(minimumCost([4,5,2,3,1,6]), 7, 'Test 6');
test(minimumCost([3,1,2,4,5]), 6, 'Test 7');
test(minimumCost([1,5,2,4,3]), 6, 'Test 8');
test(minimumCost([10,3,1,1]), 12, 'Test 9');
test(minimumCost([10,20,30,40,50]), 60, 'Test 10');
test(minimumCost([5,1,4,2,3]), 8, 'Test 11');
test(minimumCost([2,1,4,3,5]), 6, 'Test 12');
test(minimumCost([40,30,20,10,50]), 70, 'Test 13');
test(minimumCost([30,20,10,50,40]), 60, 'Test 14');
test(minimumCost([1,2,3,12]), 6, 'Test 15');
test(minimumCost([1,3,2,5,4]), 6, 'Test 16');
test(minimumCost([15,20,10,25,30]), 45, 'Test 17');
test(minimumCost([3,1,2,2,5]), 6, 'Test 18');
test(minimumCost([20,10,30,5,45]), 35, 'Test 19');
test(minimumCost([3,3,3,3,3]), 9, 'Test 20');
test(minimumCost([1,50,2,49,3]), 6, 'Test 21');
test(minimumCost([15,25,35,5,10]), 30, 'Test 22');
test(minimumCost([30, 10, 20, 5, 25, 40, 15]), 45, 'Test 23');
test(minimumCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 6, 'Test 24');
test(minimumCost([50, 25, 10, 5, 1, 2, 3, 4]), 53, 'Test 25');
test(minimumCost([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 600, 'Test 26');
test(minimumCost([5, 1, 9, 2, 8, 3, 7, 4, 6]), 8, 'Test 27');
test(minimumCost([30, 20, 10, 5, 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29]), 33, 'Test 28');
test(minimumCost([1,2,3,4,5,6,7,8,9,10]), 6, 'Test 29');
test(minimumCost([50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 53, 'Test 30');
test(minimumCost([4, 3, 2, 1, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40]), 7, 'Test 31');
test(minimumCost([20, 15, 10, 5, 1, 2, 3, 4]), 23, 'Test 32');
test(minimumCost([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 18, 'Test 33');
test(minimumCost([5, 1, 4, 2, 8, 3]), 8, 'Test 34');
test(minimumCost([30, 20, 10, 5, 15, 25, 35, 40, 45, 50]), 45, 'Test 35');
test(minimumCost([10, 20, 30, 40, 50, 1, 2, 3, 4, 5]), 13, 'Test 36');
test(minimumCost([45, 40, 35, 30, 25, 20, 15, 10, 5]), 60, 'Test 37');
test(minimumCost([15, 10, 5, 3, 8, 2, 7]), 20, 'Test 38');
test(minimumCost([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0]), 3, 'Test 39');
test(minimumCost([15, 3, 18, 6, 7, 9, 2]), 20, 'Test 40');
test(minimumCost([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 13, 14]), 13, 'Test 41');
test(minimumCost([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 30, 'Test 42');
test(minimumCost([4, 2, 9, 1, 7, 3, 5]), 7, 'Test 43');
test(minimumCost([30, 25, 20, 15, 10, 5, 4, 3, 2, 1, 100, 200, 300]), 33, 'Test 44');
test(minimumCost([2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 6, 'Test 45');
test(minimumCost([1, 49, 2, 48, 3, 47, 4, 46, 5, 45, 6, 44, 7, 43, 8, 42, 9, 41, 10, 40, 11, 39, 12, 38, 13, 37, 14, 36, 15, 35]), 6, 'Test 46');
test(minimumCost([45, 30, 15, 5, 1, 50, 40, 35, 25, 20]), 51, 'Test 47');
test(minimumCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 3, 'Test 48');
test(minimumCost([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40]), 131, 'Test 49');
test(minimumCost([50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 53, 'Test 50');
test(minimumCost([3, 2, 1, 50, 49, 48, 47, 46, 45]), 6, 'Test 51');
test(minimumCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 3, 'Test 52');
test(minimumCost([30, 10, 20, 5, 25, 40, 15, 50, 2, 1]), 33, 'Test 53');
test(minimumCost([23, 12, 7, 3, 1, 8, 4, 9, 5, 10, 6, 11]), 27, 'Test 54');
test(minimumCost([7, 14, 21, 28, 35, 42, 49, 43, 36, 29, 22]), 42, 'Test 55');
test(minimumCost([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 53, 'Test 56');
test(minimumCost([40, 30, 20, 10, 5, 15, 25, 35, 45, 50, 60, 70, 80]), 55, 'Test 57');
test(minimumCost([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), 6, 'Test 58');
test(minimumCost([5, 1, 3, 2, 4, 6, 8, 7, 9, 11]), 8, 'Test 59');
test(minimumCost([45, 21, 32, 18, 9, 40, 35]), 72, 'Test 60');
test(minimumCost([45, 20, 10, 5, 15, 25, 35, 40]), 60, 'Test 61');
test(minimumCost([1, 50, 2, 49, 3, 48, 4, 47, 5, 46, 6, 45, 7, 44, 8]), 6, 'Test 62');
test(minimumCost([5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 15, 14, 13, 12, 11]), 8, 'Test 63');
test(minimumCost([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 3, 'Test 64');
test(minimumCost([5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 45, 'Test 65');
test(minimumCost([49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 52, 'Test 66');
test(minimumCost([42, 28, 36, 12, 45, 50, 10, 20, 30]), 64, 'Test 67');
test(minimumCost([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 50]), 13, 'Test 68');
test(minimumCost([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15]), 61, 'Test 69');
test(minimumCost([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 15, 'Test 70');
test(minimumCost([5,2,1,3,8,7,6]), 8, 'Test 71');
test(minimumCost([30, 10, 20, 30, 10, 20, 30]), 50, 'Test 72');
test(minimumCost([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 28, 'Test 73');
test(minimumCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 6, 'Test 74');
test(minimumCost([30,20,10,40,50,60,70]), 60, 'Test 75');
test(minimumCost([10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50]), 30, 'Test 76');
test(minimumCost([1, 3, 5, 2, 4, 6, 8, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 6, 'Test 77');
test(minimumCost([34, 12, 45, 37, 26, 48, 22, 39, 14, 47]), 60, 'Test 78');
test(minimumCost([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 13, 'Test 79');
test(minimumCost([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 9, 'Test 80');
test(minimumCost([20, 30, 10, 40, 50, 15, 25, 35, 45, 5]), 35, 'Test 81');
test(minimumCost([42, 15, 22, 7, 31, 19, 9]), 58, 'Test 82');
test(minimumCost([20, 15, 10, 5, 1, 6, 11, 16, 21]), 26, 'Test 83');
test(minimumCost([50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 53, 'Test 84');
test(minimumCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 6, 'Test 85');
test(minimumCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 6, 'Test 86');
test(minimumCost([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 60, 'Test 87');
test(minimumCost([50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), 53, 'Test 88');
test(minimumCost([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 5, 'Test 89');
test(minimumCost([7, 3, 1, 6, 2, 5, 4, 8, 9, 10]), 10, 'Test 90');
test(minimumCost([25, 10, 5, 20, 15, 30, 25, 10, 5, 20, 15]), 35, 'Test 91');
test(minimumCost([42,31,23,17,8,4,5,13,29,38,11]), 51, 'Test 92');
test(minimumCost([25, 50, 15, 40, 10, 30, 20, 25, 35]), 50, 'Test 93');
test(minimumCost([23, 19, 17, 29, 25, 31, 13, 11, 15, 21]), 47, 'Test 94');
test(minimumCost([15, 10, 20, 5, 30, 25]), 30, 'Test 95');
test(minimumCost([9,8,7,6,5,4,3,2,1]), 12, 'Test 96');
test(minimumCost([1, 10, 3, 8, 2, 5, 4]), 6, 'Test 97');
test(minimumCost([47, 42, 37, 32, 27, 22, 17, 12, 7, 2, 49, 44, 39, 34, 29, 24, 19, 14, 9, 4, 1, 3, 8, 13, 18, 23, 28, 33, 38, 43, 48]), 50, 'Test 98');
test(minimumCost([8, 2, 6, 4, 7, 1, 3, 5]), 11, 'Test 99');
test(minimumCost([10,9,8,7,6,5,4,3,2,1,1]), 12, 'Test 100');
test(minimumCost([15, 25, 35, 10, 5, 45, 40, 30, 20]), 30, 'Test 101');
test(minimumCost([45, 1, 42, 2, 44, 3, 43]), 48, 'Test 102');
test(minimumCost([25, 10, 5, 1, 9, 3, 8, 12]), 29, 'Test 103');
test(minimumCost([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 50, 49, 48]), 18, 'Test 104');
test(minimumCost([45,15,25,35,5,10,55]), 60, 'Test 105');
test(minimumCost([25,5,15,10,30,20,40,50,35]), 40, 'Test 106');
test(minimumCost([10,20,30,40,50,1,2,3,4,5]), 13, 'Test 107');
test(minimumCost([49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20]), 90, 'Test 108');
test(minimumCost([23, 15, 34, 10, 5, 40, 30, 20, 1, 2, 3]), 26, 'Test 109');
test(minimumCost([49, 1, 48, 2, 47, 3, 46, 4, 45, 5]), 52, 'Test 110');
test(minimumCost([5, 9, 12, 1, 6, 3, 7, 8, 4, 10, 2, 11]), 8, 'Test 111');
test(minimumCost([1,5,9,13,17,21,25,29,33,37,41,45,49]), 15, 'Test 112');
test(minimumCost([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 50]), 10, 'Test 113');
test(minimumCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 6, 'Test 114');
test(minimumCost([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), 24, 'Test 115');
test(minimumCost([5, 4, 3, 2, 1, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31]), 8, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

