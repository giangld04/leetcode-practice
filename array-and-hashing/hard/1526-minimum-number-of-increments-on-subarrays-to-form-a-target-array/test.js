// Test: 1526. Minimum Number Of Increments On Subarrays To Form A Target Array
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minNumberOperations } = require("./solution");

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

console.log("\n1526. Minimum Number Of Increments On Subarrays To Form A Target Array\n");

test(minNumberOperations([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 1');
test(minNumberOperations([1,2,3,4,5]), 5, 'Test 2');
test(minNumberOperations([5,4,3,2,1]), 5, 'Test 3');
test(minNumberOperations([100000]), 100000, 'Test 4');
test(minNumberOperations([1,1,1,1,1]), 1, 'Test 5');
test(minNumberOperations([1,3,2,4,5]), 6, 'Test 6');
test(minNumberOperations([10,10,10,10,10]), 10, 'Test 7');
test(minNumberOperations([3,1,5,4,2]), 7, 'Test 8');
test(minNumberOperations([1,100000,1]), 100000, 'Test 9');
test(minNumberOperations([1,1,2,2,3,3,4,4,5,5]), 5, 'Test 10');
test(minNumberOperations([3,1,1,2]), 4, 'Test 11');
test(minNumberOperations([1,3,5,7,9]), 9, 'Test 12');
test(minNumberOperations([100000, 100000, 100000, 100000, 100000]), 100000, 'Test 13');
test(minNumberOperations([1,2,3,2,1]), 3, 'Test 14');
test(minNumberOperations([1,2,3,4,5,4,3,2,1]), 5, 'Test 15');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 16');
test(minNumberOperations([9,7,5,3,1]), 9, 'Test 17');
test(minNumberOperations([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1]), 13, 'Test 18');
test(minNumberOperations([1,3,5,7,9,7,5,3,1]), 9, 'Test 19');
test(minNumberOperations([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 100, 'Test 20');
test(minNumberOperations([1,1,2,2,1,1,2,2,1,1]), 3, 'Test 21');
test(minNumberOperations([10,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,10]), 19, 'Test 22');
test(minNumberOperations([1,2,3,4,3,2,1,2,3,4,3,2,1]), 7, 'Test 23');
test(minNumberOperations([3,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28]), 41, 'Test 24');
test(minNumberOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 19, 'Test 25');
test(minNumberOperations([1,1,1,2,2,2,3,3,3,4,4,4,3,3,3,2,2,2,1,1,1]), 4, 'Test 26');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 27');
test(minNumberOperations([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1]), 10, 'Test 28');
test(minNumberOperations([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 29');
test(minNumberOperations([3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 13, 'Test 30');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 31');
test(minNumberOperations([1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,3,3,3,3,2,2,2,1,1]), 5, 'Test 32');
test(minNumberOperations([1,1,1,1,1,1,1,1,1,1,10,10,10,10,10,10,10,10,10,10,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 33');
test(minNumberOperations([5,4,3,2,1,0,1,2,3,4,5]), 10, 'Test 34');
test(minNumberOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 35');
test(minNumberOperations([5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 14, 'Test 36');
test(minNumberOperations([5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5]), 9, 'Test 37');
test(minNumberOperations([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 6, 'Test 38');
test(minNumberOperations([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]), 5, 'Test 39');
test(minNumberOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 15, 'Test 40');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 41');
test(minNumberOperations([100,50,100,50,100,50,100,50,100,50]), 300, 'Test 42');
test(minNumberOperations([1,2,3,2,1,1,2,3,2,1,1,2,3,2,1]), 7, 'Test 43');
test(minNumberOperations([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1]), 5, 'Test 44');
test(minNumberOperations([1, 1, 2, 2, 3, 3, 4, 4, 3, 3, 2, 2, 1, 1]), 4, 'Test 45');
test(minNumberOperations([10,20,30,40,50,60,70,80,90,100,50,100,50,100,50]), 200, 'Test 46');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 30, 'Test 47');
test(minNumberOperations([5,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 48');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 10, 'Test 49');
test(minNumberOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 50');
test(minNumberOperations([5,10,15,20,25,30,35,40,45,50,45,40,35,30,25,20,15,10,5]), 50, 'Test 51');
test(minNumberOperations([5,10,15,20,25,20,15,10,5]), 25, 'Test 52');
test(minNumberOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 53');
test(minNumberOperations([10,20,30,20,10,5,0,5,10,20,30,20,10]), 60, 'Test 54');
test(minNumberOperations([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]), 15, 'Test 55');
test(minNumberOperations([1,1,1,1,2,2,2,2,3,3,3,3,2,2,2,2,1,1,1,1]), 3, 'Test 56');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 30, 'Test 57');
test(minNumberOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 19, 'Test 58');
test(minNumberOperations([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10]), 100, 'Test 59');
test(minNumberOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 60');
test(minNumberOperations([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5]), 13, 'Test 61');
test(minNumberOperations([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 62');
test(minNumberOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 63');
test(minNumberOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 10, 'Test 64');
test(minNumberOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 20, 'Test 65');
test(minNumberOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 66');
test(minNumberOperations([1,2,3,4,3,2,3,4,5,4,3,2,1,2,3,4,3,2,3,4,5,4,3,2,1]), 13, 'Test 67');
test(minNumberOperations([1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 9, 'Test 68');
test(minNumberOperations([5,4,5,6,7,8,9,8,7,6,5]), 10, 'Test 69');
test(minNumberOperations([2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2]), 4, 'Test 70');
test(minNumberOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 11, 'Test 71');
test(minNumberOperations([1, 3, 5, 7, 9, 11, 13, 11, 9, 7, 5, 3, 1]), 13, 'Test 72');
test(minNumberOperations([3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 9, 'Test 73');
test(minNumberOperations([5,5,5,5,5,10,10,10,10,10,15,15,15,15,15]), 15, 'Test 74');
test(minNumberOperations([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10]), 19, 'Test 75');
test(minNumberOperations([1,2,3,2,1,2,3,2,1,2,3,2,1]), 7, 'Test 76');
test(minNumberOperations([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 77');
test(minNumberOperations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 11, 'Test 78');
test(minNumberOperations([10,1,20,30,40,50,40,30,20,10]), 59, 'Test 79');
test(minNumberOperations([1,10,2,9,3,8,4,7,5,6,5,6,4,7,3,8,2,9,1,10]), 51, 'Test 80');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 20, 'Test 81');
test(minNumberOperations([10,20,10,20,10,20,10,20,10,20,10,20,10,20,10,20]), 90, 'Test 82');
test(minNumberOperations([1,2,3,2,3,4,5,4,3,2,1]), 6, 'Test 83');
test(minNumberOperations([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1]), 4, 'Test 84');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 85');
test(minNumberOperations([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,9,9,9,8,8,8,7,7,7,6,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1]), 10, 'Test 86');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 87');
test(minNumberOperations([1,5,2,5,1,5,2,5,1,5,2,5,1,5,2,5,1]), 29, 'Test 88');
test(minNumberOperations([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1]), 5, 'Test 89');
test(minNumberOperations([10,1,10,1,10,1,10,1,10,1]), 46, 'Test 90');
test(minNumberOperations([1,10,1,10,1,10,1,10,1,10]), 46, 'Test 91');
test(minNumberOperations([1,1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1,1]), 6, 'Test 92');
test(minNumberOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 93');
test(minNumberOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 94');
test(minNumberOperations([1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1]), 5, 'Test 95');
test(minNumberOperations([100,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50]), 100, 'Test 96');
test(minNumberOperations([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 97');
test(minNumberOperations([10,20,30,40,50,40,30,20,10,20,30,40,50,40,30,20,10]), 90, 'Test 98');
test(minNumberOperations([1,2,3,4,5,4,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 11, 'Test 99');
test(minNumberOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 100');
test(minNumberOperations([5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5]), 7, 'Test 101');
test(minNumberOperations([1,3,5,7,9,11,13,15,17,19,17,15,13,11,9,7,5,3,1]), 19, 'Test 102');
test(minNumberOperations([1,3,5,7,9,7,5,3,1,3,5,7,9,7,5,3,1,3,5,7,9,7,5,3,1]), 25, 'Test 103');
test(minNumberOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 104');
test(minNumberOperations([1,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,1,2,2,3,3,4,4,5,5]), 14, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

