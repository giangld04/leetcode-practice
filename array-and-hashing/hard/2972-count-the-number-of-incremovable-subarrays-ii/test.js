// Test: 2972. Count The Number Of Incremovable Subarrays Ii
// 153 test cases from LeetCodeDataset
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

console.log("\n2972. Count The Number Of Incremovable Subarrays Ii\n");

test(incremovableSubarrayCount([1,3,2,4,5]), 11, 'Test 1');
test(incremovableSubarrayCount([6,5,7,8]), 7, 'Test 2');
test(incremovableSubarrayCount([1,3,5,4,6,7,8]), 19, 'Test 3');
test(incremovableSubarrayCount([5,6,7,8,9,10,8,9,10]), 22, 'Test 4');
test(incremovableSubarrayCount([1,2,2,3]), 8, 'Test 5');
test(incremovableSubarrayCount([1,1,1,1]), 3, 'Test 6');
test(incremovableSubarrayCount([2,1]), 3, 'Test 7');
test(incremovableSubarrayCount([10,9,8,7,6,5,4,3,2,1]), 3, 'Test 8');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 9');
test(incremovableSubarrayCount([1]), 1, 'Test 10');
test(incremovableSubarrayCount([1,2,3,4]), 10, 'Test 11');
test(incremovableSubarrayCount([10,9,8,7,6,5]), 3, 'Test 12');
test(incremovableSubarrayCount([1,2,3,5,4,6,7,8,9,10]), 34, 'Test 13');
test(incremovableSubarrayCount([5,4,3,2,1,2,3,4,5]), 7, 'Test 14');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,17,19]), 55, 'Test 15');
test(incremovableSubarrayCount([1,3,2]), 5, 'Test 16');
test(incremovableSubarrayCount([1,2,3,5,4,6,7,8,9]), 29, 'Test 17');
test(incremovableSubarrayCount([1,1,1,1,1]), 3, 'Test 18');
test(incremovableSubarrayCount([10,20,15,25,30]), 11, 'Test 19');
test(incremovableSubarrayCount([8,7,6,6]), 3, 'Test 20');
test(incremovableSubarrayCount([1,2]), 3, 'Test 21');
test(incremovableSubarrayCount([1,2,3,2,1]), 5, 'Test 22');
test(incremovableSubarrayCount([10,20,30,40,50,15,25,35,45,55,60,65,70]), 44, 'Test 23');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99]), 1275, 'Test 24');
test(incremovableSubarrayCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10]), 12, 'Test 25');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1]), 22, 'Test 26');
test(incremovableSubarrayCount([1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 11, 'Test 27');
test(incremovableSubarrayCount([1,2,3,4,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 88, 'Test 28');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12]), 27, 'Test 29');
test(incremovableSubarrayCount([10,20,30,40,35,50,60,70,80,90,100]), 39, 'Test 30');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1]), 12, 'Test 31');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 176, 'Test 32');
test(incremovableSubarrayCount([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 33');
test(incremovableSubarrayCount([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 21, 'Test 34');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,17,19,21,12,13,14,15,16,17,18,19,20]), 91, 'Test 35');
test(incremovableSubarrayCount([5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 32, 'Test 36');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10]), 71, 'Test 37');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 38');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,9,10,11,12,13,14,15,16,17,18,19,20]), 140, 'Test 39');
test(incremovableSubarrayCount([1,2,3,4,5,3,6,7,8,9,10]), 39, 'Test 40');
test(incremovableSubarrayCount([1000000000, 999999999, 1000000001, 1000000002, 1000000003, 999999998, 1000000004, 1000000005, 1000000006, 1000000007]), 11, 'Test 41');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1]), 14, 'Test 42');
test(incremovableSubarrayCount([1,2,3,4,5,1,2,3,4,5]), 21, 'Test 43');
test(incremovableSubarrayCount([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 44');
test(incremovableSubarrayCount([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 3, 'Test 45');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 210, 'Test 46');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4]), 41, 'Test 47');
test(incremovableSubarrayCount([1,10,2,9,3,8,4,7,5,6,7,8,9,10,1,2,3,4,5,6]), 14, 'Test 48');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,20,11,12,13,14,15,16,17,18,19]), 111, 'Test 49');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,25]), 56, 'Test 50');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 12, 'Test 51');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2]), 23, 'Test 52');
test(incremovableSubarrayCount([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 53');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 12, 'Test 54');
test(incremovableSubarrayCount([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,2,3,4,5]), 7, 'Test 55');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 465, 'Test 56');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20]), 76, 'Test 57');
test(incremovableSubarrayCount([1,2,3,4,5,100,3,4,5,6,7,8,9,10]), 49, 'Test 58');
test(incremovableSubarrayCount([10,9,8,7,6,5,4,3,2,1,11,12,13,14,15]), 13, 'Test 59');
test(incremovableSubarrayCount([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 9, 'Test 60');
test(incremovableSubarrayCount([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12]), 63, 'Test 61');
test(incremovableSubarrayCount([1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 37, 'Test 62');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 63');
test(incremovableSubarrayCount([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 12, 'Test 64');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 820, 'Test 65');
test(incremovableSubarrayCount([1,3,2,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 4, 'Test 66');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,2,4,6,8,10,12,14]), 44, 'Test 67');
test(incremovableSubarrayCount([5,6,7,8,9,10,11,12,13,1,2,3,4]), 14, 'Test 68');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,19]), 39, 'Test 69');
test(incremovableSubarrayCount([1,2,3,4,5,4,5,6,7,8,9,10,11,12,13,14]), 69, 'Test 70');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5]), 35, 'Test 71');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,5]), 16, 'Test 72');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10]), 21, 'Test 73');
test(incremovableSubarrayCount([10,20,10,30,20,40,30,50,40,60,50,70,60,80,70,90,80,100,90,110]), 9, 'Test 74');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 12, 'Test 75');
test(incremovableSubarrayCount([1,3,5,2,4,6,7,8,10,9]), 8, 'Test 76');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7]), 38, 'Test 77');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 12, 'Test 78');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 12, 'Test 79');
test(incremovableSubarrayCount([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4, 'Test 80');
test(incremovableSubarrayCount([1,10,2,9,3,8,4,7,5,6,11,12,13,14,15]), 22, 'Test 81');
test(incremovableSubarrayCount([5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4]), 11, 'Test 82');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1]), 16, 'Test 83');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,11,12,13,14,15,16,17,18,19,20]), 122, 'Test 84');
test(incremovableSubarrayCount([10,1,20,2,30,3,40,4,50,5,60,6,70,7,80,8,90,9,100,10]), 3, 'Test 85');
test(incremovableSubarrayCount([5,6,7,8,9,10,1,2,3,4,11,12,13,14,15,16,17,18,19,20,1,2,3,4]), 11, 'Test 86');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 1]), 42, 'Test 87');
test(incremovableSubarrayCount([1,3,2,4,5,3,6,7,8,9,10]), 20, 'Test 88');
test(incremovableSubarrayCount([1,3,2,4,5,6,7,8,9,10]), 26, 'Test 89');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11]), 23, 'Test 90');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1]), 12, 'Test 91');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,10,20,30,40,50]), 115, 'Test 92');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,3,5,7,9,11]), 47, 'Test 93');
test(incremovableSubarrayCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10]), 12, 'Test 94');
test(incremovableSubarrayCount([5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 17, 'Test 95');
test(incremovableSubarrayCount([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 4, 'Test 96');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 97');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,5,4,3,2,1,11,12,13,14,15]), 67, 'Test 98');
test(incremovableSubarrayCount([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 3, 'Test 99');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 76, 'Test 100');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10]), 56, 'Test 101');
test(incremovableSubarrayCount([1,2,3,4,3,2,1,2,3,4,5,6,7,8,9,10]), 45, 'Test 102');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,2,4,6,8,10,1,3,5,7,9]), 36, 'Test 103');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,10,9]), 19, 'Test 104');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 496, 'Test 105');
test(incremovableSubarrayCount([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14]), 41, 'Test 106');
test(incremovableSubarrayCount([1,3,5,7,9,2,4,6,8,10,11,12,13,14,15,16,17,18,19,20]), 86, 'Test 107');
test(incremovableSubarrayCount([1,2,3,4,5,1,6,7,8,9,10,11,12]), 49, 'Test 108');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 325, 'Test 109');
test(incremovableSubarrayCount([1,3,5,7,9,8,10,12,14,16,18,17]), 12, 'Test 110');
test(incremovableSubarrayCount([20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58]), 210, 'Test 111');
test(incremovableSubarrayCount([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,2,4,6,8,10,12,14,16,18,20]), 82, 'Test 112');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12]), 88, 'Test 113');
test(incremovableSubarrayCount([1,3,2,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 29, 'Test 114');
test(incremovableSubarrayCount([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 86, 'Test 115');
test(incremovableSubarrayCount([1,3,5,7,9,2,4,6,8,10]), 26, 'Test 116');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 66, 'Test 117');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 12, 'Test 118');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4]), 31, 'Test 119');
test(incremovableSubarrayCount([1,10,20,30,40,50,5,6,7,8,9,10]), 19, 'Test 120');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 121');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,5,4,3,2,1,2,3,4,5,6]), 32, 'Test 122');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 123');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 66, 'Test 124');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 125');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 175, 'Test 126');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3]), 27, 'Test 127');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 32, 'Test 128');
test(incremovableSubarrayCount([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10]), 12, 'Test 129');
test(incremovableSubarrayCount([10,20,30,40,50,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 11, 'Test 130');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5]), 36, 'Test 131');
test(incremovableSubarrayCount([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 12, 'Test 132');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 66, 'Test 133');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 1275, 'Test 134');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 121, 'Test 135');
test(incremovableSubarrayCount([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6]), 8, 'Test 136');
test(incremovableSubarrayCount([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 56, 'Test 137');
test(incremovableSubarrayCount([5, 7, 9, 10, 6, 8, 11, 12, 13, 14]), 30, 'Test 138');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,9,11]), 31, 'Test 139');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 12, 'Test 140');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,2,4,6,8,10,1,3,5,7,9,11,13,15,17,19,21]), 102, 'Test 141');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1]), 17, 'Test 142');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,20,30,25,35,45,55,65,75,85,95]), 116, 'Test 143');
test(incremovableSubarrayCount([1,3,2,4,5,7,6,8,9,11,10,12,13,15,14,16,17,19,18,20]), 9, 'Test 144');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1]), 32, 'Test 145');
test(incremovableSubarrayCount([1,2,3,4,5,10,9,8,7,6,11,12,13,14,15,16,17,18,19,20]), 83, 'Test 146');
test(incremovableSubarrayCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 12, 'Test 147');
test(incremovableSubarrayCount([1,2,3,4,5,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4]), 27, 'Test 148');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 26, 'Test 149');
test(incremovableSubarrayCount([5,6,7,8,9,10,1,2,3,4,5]), 12, 'Test 150');
test(incremovableSubarrayCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1]), 22, 'Test 151');
test(incremovableSubarrayCount([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 21, 'Test 152');
test(incremovableSubarrayCount([1, 3, 2, 4, 5, 6, 7, 8, 9]), 23, 'Test 153');

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
