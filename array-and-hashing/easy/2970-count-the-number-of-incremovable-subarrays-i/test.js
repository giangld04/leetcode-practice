// Test: 2970. Count The Number Of Incremovable Subarrays I
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { incremovableSubarrayCount } = require("./solution");

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

console.log("\n2970. Count The Number Of Incremovable Subarrays I\n");

test(incremovableSubarrayCount([5,4,3,2,1]), 3, 'Test 1');
test(incremovableSubarrayCount([6,5,7,8]), 7, 'Test 2');
test(incremovableSubarrayCount([1,3,2,4,5]), 11, 'Test 3');
test(incremovableSubarrayCount([1]), 1, 'Test 4');
test(incremovableSubarrayCount([1,2,2,3,4]), 11, 'Test 5');
test(incremovableSubarrayCount([1,2,2,3]), 8, 'Test 6');
test(incremovableSubarrayCount([1,2,3,4]), 10, 'Test 7');
test(incremovableSubarrayCount([1,2]), 3, 'Test 8');
test(incremovableSubarrayCount([1,1,1,1,1]), 3, 'Test 9');
test(incremovableSubarrayCount([1,2,3,5,4,6,7]), 19, 'Test 10');
test(incremovableSubarrayCount([10,20,15,25,30]), 11, 'Test 11');
test(incremovableSubarrayCount([1,2,3,2,3,4]), 13, 'Test 12');
test(incremovableSubarrayCount([10,9,8,7,6,5,4,3,2,1]), 3, 'Test 13');
test(incremovableSubarrayCount([2,1]), 3, 'Test 14');
test(incremovableSubarrayCount([1,2,3,4,3]), 8, 'Test 15');
test(incremovableSubarrayCount([8,7,6,6]), 3, 'Test 16');
test(incremovableSubarrayCount([1,2,3,3,4]), 11, 'Test 17');
test(incremovableSubarrayCount([10,20,15,30,25,40]), 9, 'Test 18');
test(incremovableSubarrayCount([5,6,7,8,9,10,8,9,10]), 22, 'Test 19');
test(incremovableSubarrayCount([5,3,4,6,7,2,3,8,9,10,1,2,3,4,5,6,7,8,9,10]), 17, 'Test 20');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10]), 22, 'Test 21');
test(incremovableSubarrayCount([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5]), 7, 'Test 22');
test(incremovableSubarrayCount([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 25, 'Test 23');
test(incremovableSubarrayCount([3,5,2,8,7,10,9,11,13,12]), 6, 'Test 24');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 25');
test(incremovableSubarrayCount([1, 2, 2, 3, 4, 5, 6, 7, 8, 9]), 26, 'Test 26');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1]), 12, 'Test 27');
test(incremovableSubarrayCount([1,2,2,3,4,4,5,6,6,7]), 9, 'Test 28');
test(incremovableSubarrayCount([1, 2, 3, 5, 4, 6, 7, 8, 9]), 29, 'Test 29');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10]), 71, 'Test 30');
test(incremovableSubarrayCount([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 3, 'Test 31');
test(incremovableSubarrayCount([5,10,15,20,18,25,30,35,40]), 29, 'Test 32');
test(incremovableSubarrayCount([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 3, 'Test 33');
test(incremovableSubarrayCount([1,2,3,4,5,1,2,3,4,5]), 21, 'Test 34');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,1]), 13, 'Test 35');
test(incremovableSubarrayCount([10, 20, 30, 40, 50, 1, 2, 3, 4, 5]), 11, 'Test 36');
test(incremovableSubarrayCount([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 37');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 12, 'Test 38');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,14,16,18,20,19,21,23,25,24,26,28,30]), 45, 'Test 39');
test(incremovableSubarrayCount([1,3,2,5,4,7,6,9,8,11,10,13,12]), 6, 'Test 40');
test(incremovableSubarrayCount([3, 1, 2, 1, 3, 4, 5, 6, 7]), 12, 'Test 41');
test(incremovableSubarrayCount([9,1,2,3,4,5,6,7,8,10]), 12, 'Test 42');
test(incremovableSubarrayCount([5,6,7,8,9,10,1,2,3,4]), 11, 'Test 43');
test(incremovableSubarrayCount([1,2,3,2,1]), 5, 'Test 44');
test(incremovableSubarrayCount([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 9, 'Test 45');
test(incremovableSubarrayCount([1,5,3,7,9,2,11,13,12,14]), 9, 'Test 46');
test(incremovableSubarrayCount([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11]), 5, 'Test 47');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 4, 6, 7, 8, 9, 10, 11]), 46, 'Test 48');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,1,2,3,4,5]), 25, 'Test 49');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 26, 'Test 50');
test(incremovableSubarrayCount([1, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 15, 'Test 51');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 51, 'Test 52');
test(incremovableSubarrayCount([1,1,2,2,3,3,4,4,5,5]), 4, 'Test 53');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 12, 'Test 54');
test(incremovableSubarrayCount([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13]), 9, 'Test 55');
test(incremovableSubarrayCount([30,20,10,20,30,40,30,20,10]), 3, 'Test 56');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,17,19]), 55, 'Test 57');
test(incremovableSubarrayCount([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 4, 'Test 58');
test(incremovableSubarrayCount([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4, 'Test 59');
test(incremovableSubarrayCount([5,6,2,7,8,10]), 13, 'Test 60');
test(incremovableSubarrayCount([1,2,1,2,1,2,1,2,1,2]), 6, 'Test 61');
test(incremovableSubarrayCount([5, 1, 2, 3, 4, 5, 6]), 9, 'Test 62');
test(incremovableSubarrayCount([3,5,6,7,8,2,3,4,5,6]), 15, 'Test 63');
test(incremovableSubarrayCount([1, 2, 3, 6, 5, 4, 7, 8, 9, 10]), 29, 'Test 64');
test(incremovableSubarrayCount([10, 20, 15, 30, 25, 40, 10, 20, 30]), 9, 'Test 65');
test(incremovableSubarrayCount([3,4,3,5,6,7,8,9,10,11,12]), 28, 'Test 66');
test(incremovableSubarrayCount([1, 2, 3, 5, 4, 6, 7, 8, 10, 9, 11]), 15, 'Test 67');
test(incremovableSubarrayCount([1, 2, 3, 2, 1, 2, 3, 4, 5, 6]), 22, 'Test 68');
test(incremovableSubarrayCount([10, 20, 30, 25, 35, 40, 30, 45]), 11, 'Test 69');
test(incremovableSubarrayCount([5,5,5,5,5,5,5,5,5,5]), 3, 'Test 70');
test(incremovableSubarrayCount([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 4, 'Test 71');
test(incremovableSubarrayCount([2,2,2,2,2]), 3, 'Test 72');
test(incremovableSubarrayCount([10,20,30,25,40,50,15,25,35,45]), 17, 'Test 73');
test(incremovableSubarrayCount([10, 20, 30, 25, 35, 40, 38, 45]), 12, 'Test 74');
test(incremovableSubarrayCount([3,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 38, 'Test 75');
test(incremovableSubarrayCount([1,2,3,4,5,1,6,7,8,9,10,11]), 43, 'Test 76');
test(incremovableSubarrayCount([1, 5, 2, 6, 3, 7, 4, 8, 5, 9]), 8, 'Test 77');
test(incremovableSubarrayCount([1,1,2,2,3,3,4,4]), 4, 'Test 78');
test(incremovableSubarrayCount([1, 3, 5, 4, 6, 7, 8, 9]), 23, 'Test 79');
test(incremovableSubarrayCount([3, 2, 1, 4, 5, 6, 7, 8, 9, 10]), 17, 'Test 80');
test(incremovableSubarrayCount([5, 6, 7, 8, 9, 1, 2, 3, 4]), 10, 'Test 81');
test(incremovableSubarrayCount([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15]), 41, 'Test 82');
test(incremovableSubarrayCount([50, 49, 48, 47, 46, 45, 44, 43, 42, 41]), 3, 'Test 83');
test(incremovableSubarrayCount([20,25,15,30,35,28,40,45,50,55,60]), 21, 'Test 84');
test(incremovableSubarrayCount([1,2,3,4,3,5,6,7,8,9,10]), 38, 'Test 85');
test(incremovableSubarrayCount([1, 3, 2, 4, 3, 5, 6, 7, 8, 9]), 20, 'Test 86');
test(incremovableSubarrayCount([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 3, 'Test 87');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9]), 42, 'Test 88');
test(incremovableSubarrayCount([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 21]), 5, 'Test 89');
test(incremovableSubarrayCount([1,3,2,4,3,5,6,5,7,8,7,9]), 9, 'Test 90');
test(incremovableSubarrayCount([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 9, 'Test 91');
test(incremovableSubarrayCount([1,1,2,3,4,5,6,7,8,9,10]), 21, 'Test 92');
test(incremovableSubarrayCount([1,3,5,2,4,6,7,8,9,10]), 29, 'Test 93');
test(incremovableSubarrayCount([5, 4, 3, 2, 1]), 3, 'Test 94');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 95');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 96');
test(incremovableSubarrayCount([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 81, 'Test 97');
test(incremovableSubarrayCount([1,3,5,7,9,8,7,6,5,4,3,2,1]), 7, 'Test 98');
test(incremovableSubarrayCount([10, 20, 15, 30, 25, 40, 35, 50]), 9, 'Test 99');
test(incremovableSubarrayCount([5,6,7,8,9,10,8,9,10,11,12,13,14,15,16,17,18,19,20]), 92, 'Test 100');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 101');
test(incremovableSubarrayCount([1,2,3,10,9,8,7,6,5,4,3,2,1]), 6, 'Test 102');
test(incremovableSubarrayCount([5,4,3,2,1,6,7,8,9]), 11, 'Test 103');
test(incremovableSubarrayCount([5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10]), 28, 'Test 104');
test(incremovableSubarrayCount([1, 3, 2, 4, 5, 3, 6, 7, 5, 8, 9, 7, 10, 11, 8]), 6, 'Test 105');
test(incremovableSubarrayCount([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9]), 45, 'Test 106');
test(incremovableSubarrayCount([1,10,2,9,3,8,4,7,5,6,1,10,2,9,3,8,4,7,5,6]), 7, 'Test 107');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5]), 36, 'Test 108');
test(incremovableSubarrayCount([1,3,5,7,9,11,10,12,14,16]), 34, 'Test 109');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 110');
test(incremovableSubarrayCount([1,2,3,2,1,2,3,4,5]), 18, 'Test 111');
test(incremovableSubarrayCount([1, 2, 3, 2, 1, 2, 3, 4, 5]), 18, 'Test 112');
test(incremovableSubarrayCount([5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 26, 'Test 113');
test(incremovableSubarrayCount([1, 3, 5, 7, 9, 10, 8, 11, 12]), 26, 'Test 114');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 3, 4, 5, 6, 7]), 30, 'Test 115');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 4, 3, 2, 1, 2]), 9, 'Test 116');
test(incremovableSubarrayCount([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 3, 'Test 117');
test(incremovableSubarrayCount([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 29, 'Test 118');
test(incremovableSubarrayCount([1,2,3,2,1,2,3]), 10, 'Test 119');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 21, 'Test 120');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 3, 4, 5]), 18, 'Test 121');
test(incremovableSubarrayCount([1,3,5,7,9,8,7,6,5,4,3,2,1,9,7,5,3,1]), 7, 'Test 122');
test(incremovableSubarrayCount([8, 9, 7, 10, 11, 12, 13, 6]), 4, 'Test 123');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

