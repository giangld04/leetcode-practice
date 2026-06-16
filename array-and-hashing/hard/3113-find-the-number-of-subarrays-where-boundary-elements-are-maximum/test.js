// Test: 3113. Find The Number Of Subarrays Where Boundary Elements Are Maximum
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSubarrays } = require("./solution");

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

console.log("\n3113. Find The Number Of Subarrays Where Boundary Elements Are Maximum\n");

test(numberOfSubarrays([5,4,5,4,5]), 8, 'Test 1');
test(numberOfSubarrays([2,1,2,1,2]), 8, 'Test 2');
test(numberOfSubarrays([1,3,2,3,1,3]), 9, 'Test 3');
test(numberOfSubarrays([1,2,2,1]), 5, 'Test 4');
test(numberOfSubarrays([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 5');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 6');
test(numberOfSubarrays([7,7,7,7,7,7,7,7,7,7]), 55, 'Test 7');
test(numberOfSubarrays([5,1,5,2,5,5]), 12, 'Test 8');
test(numberOfSubarrays([1]), 1, 'Test 9');
test(numberOfSubarrays([2,1,2]), 4, 'Test 10');
test(numberOfSubarrays([1,2,3,4,5]), 5, 'Test 11');
test(numberOfSubarrays([10,20,10,30,20,10]), 6, 'Test 12');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1]), 55, 'Test 13');
test(numberOfSubarrays([1,2,2,2,1]), 8, 'Test 14');
test(numberOfSubarrays([2,1,2,3,2,1,2]), 9, 'Test 15');
test(numberOfSubarrays([1,4,3,3,2]), 6, 'Test 16');
test(numberOfSubarrays([1,2,3,4,5,4,3,2,1]), 9, 'Test 17');
test(numberOfSubarrays([1,3,5,7,9,11,9,7,5,3,1]), 11, 'Test 18');
test(numberOfSubarrays([3,3,3]), 6, 'Test 19');
test(numberOfSubarrays([5,4,3,2,1]), 5, 'Test 20');
test(numberOfSubarrays([2,2,1,2,2]), 11, 'Test 21');
test(numberOfSubarrays([2,2,1,1,2,2,1,1,2,2]), 27, 'Test 22');
test(numberOfSubarrays([1,3,2,3,1,3,1]), 10, 'Test 23');
test(numberOfSubarrays([1,2,3,2,1]), 5, 'Test 24');
test(numberOfSubarrays([7,1,5,3,6,4,7]), 8, 'Test 25');
test(numberOfSubarrays([10,10,10,10,10]), 15, 'Test 26');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 496, 'Test 27');
test(numberOfSubarrays([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]), 84, 'Test 28');
test(numberOfSubarrays([15, 10, 15, 5, 15, 20, 15, 5, 15, 10, 15, 25, 15, 5, 15, 10, 15]), 26, 'Test 29');
test(numberOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 37, 'Test 30');
test(numberOfSubarrays([8,5,8,9,8,5,8,9,8]), 12, 'Test 31');
test(numberOfSubarrays([1,10,1,10,1,10,1,10,1,10,1]), 21, 'Test 32');
test(numberOfSubarrays([1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1]), 27, 'Test 33');
test(numberOfSubarrays([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 100, 'Test 34');
test(numberOfSubarrays([1,2,3,4,5,4,3,2,1,2,3,2,1]), 15, 'Test 35');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 36');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 21, 'Test 37');
test(numberOfSubarrays([2,4,6,8,10,8,6,4,2]), 9, 'Test 38');
test(numberOfSubarrays([1,1,1,1,2,1,1,1,1,3,1,1,1,1,2,1,1,1,1,1]), 48, 'Test 39');
test(numberOfSubarrays([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 135, 'Test 40');
test(numberOfSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 210, 'Test 41');
test(numberOfSubarrays([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 30, 'Test 42');
test(numberOfSubarrays([7,8,9,9,8,7,9,8,7]), 12, 'Test 43');
test(numberOfSubarrays([1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1]), 40, 'Test 44');
test(numberOfSubarrays([3,5,2,5,3,3,5,2,3,5,5,5,5,5,3,2,5,3,5,5,3,2,3,5,3,5,5,3,2,3]), 124, 'Test 45');
test(numberOfSubarrays([2,2,3,3,3,3,3,2,2,2]), 24, 'Test 46');
test(numberOfSubarrays([1,2,3,2,1,3,2,1,3,2,1,3,2,1]), 20, 'Test 47');
test(numberOfSubarrays([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80]), 21, 'Test 48');
test(numberOfSubarrays([2,1,4,4,4,1,4,2,4,1]), 20, 'Test 49');
test(numberOfSubarrays([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,1,1,1]), 60, 'Test 50');
test(numberOfSubarrays([9,10,11,10,10,9,11,10,9]), 11, 'Test 51');
test(numberOfSubarrays([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 26, 'Test 52');
test(numberOfSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 30, 'Test 53');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 39, 'Test 54');
test(numberOfSubarrays([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1]), 21, 'Test 55');
test(numberOfSubarrays([1,2,3,2,1,2,3,2,1,2]), 13, 'Test 56');
test(numberOfSubarrays([5,6,5,7,5,6,5,8,5,9,5,10,5,11,5,12,5,13,5,14,5]), 21, 'Test 57');
test(numberOfSubarrays([1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]), 97, 'Test 58');
test(numberOfSubarrays([7,2,7,3,7,7,7,3,7,2,7]), 32, 'Test 59');
test(numberOfSubarrays([100,90,80,70,60,70,80,90,100]), 13, 'Test 60');
test(numberOfSubarrays([5,5,1,5,5,2,5,5,3,5,5,4,5,5,5]), 70, 'Test 61');
test(numberOfSubarrays([5,5,5,5,5,5,5,5,5,5]), 55, 'Test 62');
test(numberOfSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 27, 'Test 63');
test(numberOfSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 57, 'Test 64');
test(numberOfSubarrays([100, 200, 100, 300, 200, 100, 400, 300, 200, 100, 500, 400, 300, 200, 100]), 15, 'Test 65');
test(numberOfSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 136, 'Test 66');
test(numberOfSubarrays([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10,100,90,80,70,60,50,40,30,20,10]), 30, 'Test 67');
test(numberOfSubarrays([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 33, 'Test 68');
test(numberOfSubarrays([1,2,3,4,3,2,1,4,3,2,1,4,3,2,1]), 18, 'Test 69');
test(numberOfSubarrays([7,5,7,8,7,5,7,8,7]), 12, 'Test 70');
test(numberOfSubarrays([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 210, 'Test 71');
test(numberOfSubarrays([5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 8, 5, 5, 5, 5, 5]), 63, 'Test 72');
test(numberOfSubarrays([2, 4, 6, 8, 10, 8, 6, 4, 2, 12, 2, 4, 6, 8, 10, 8, 6, 4, 2, 12]), 21, 'Test 73');
test(numberOfSubarrays([1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 74');
test(numberOfSubarrays([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), 58, 'Test 75');
test(numberOfSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 33, 'Test 76');
test(numberOfSubarrays([8, 1, 8, 9, 8, 9, 8, 10, 8, 9, 8, 1]), 14, 'Test 77');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 47, 'Test 78');
test(numberOfSubarrays([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 77, 'Test 79');
test(numberOfSubarrays([100,90,80,70,60,50,40,30,20,10,20,30,40,50,60,70,80,90,100]), 28, 'Test 80');
test(numberOfSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 58, 'Test 81');
test(numberOfSubarrays([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), 27, 'Test 82');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 33, 'Test 83');
test(numberOfSubarrays([1,2,2,3,3,3,4,4,4,4,3,3,3,2,2,1]), 30, 'Test 84');
test(numberOfSubarrays([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 21, 'Test 85');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 43, 'Test 86');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 42, 'Test 87');
test(numberOfSubarrays([6,1,6,6,6,1,6,1,6]), 24, 'Test 88');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 39, 'Test 89');
test(numberOfSubarrays([2,3,2,2,3,2,3,2,2,3,2,3,2,2,3,2,3,2,2,3,2,3,2,2,3,2,3,2,2,3,2]), 103, 'Test 90');
test(numberOfSubarrays([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 21, 'Test 91');
test(numberOfSubarrays([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), 27, 'Test 92');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 30, 'Test 93');
test(numberOfSubarrays([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 210, 'Test 94');
test(numberOfSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 528, 'Test 95');
test(numberOfSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 33, 'Test 96');
test(numberOfSubarrays([1,2,1,3,1,2,1,4,1,2,1,3,1,2,1]), 15, 'Test 97');
test(numberOfSubarrays([7,7,7,7,7,7,7,7]), 36, 'Test 98');
test(numberOfSubarrays([3,1,4,1,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9]), 44, 'Test 99');
test(numberOfSubarrays([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 25, 'Test 100');
test(numberOfSubarrays([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1]), 36, 'Test 101');
test(numberOfSubarrays([7,8,8,7,9,8,7,8,7]), 11, 'Test 102');
test(numberOfSubarrays([100,90,80,70,60,50,40,30,20,10,10,20,30,40,50,60,70,80,90,100]), 30, 'Test 103');
test(numberOfSubarrays([2,1,4,4,4,1,2]), 10, 'Test 104');
test(numberOfSubarrays([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 465, 'Test 105');
test(numberOfSubarrays([1,2,2,1,2,1,1,1,2,2,2,1,2,1,2,2,2,2,2,1]), 89, 'Test 106');
test(numberOfSubarrays([100,200,300,400,500,400,300,200,100,200,300,400,500,400,300,200,100]), 21, 'Test 107');
test(numberOfSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 120, 'Test 108');
test(numberOfSubarrays([1,9,2,8,3,7,4,6,5,5,6,4,7,3,8,2,9,1]), 23, 'Test 109');
test(numberOfSubarrays([3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 50, 'Test 110');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

