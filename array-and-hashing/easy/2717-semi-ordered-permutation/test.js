// Test: 2717. Semi Ordered Permutation
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { semiOrderedPermutation } = require("./solution");

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

console.log("\n2717. Semi Ordered Permutation\n");

test(semiOrderedPermutation([5,4,3,2,1]), 7, 'Test 1');
test(semiOrderedPermutation([2,4,1,3]), 3, 'Test 2');
test(semiOrderedPermutation([3,5,4,1,2]), 5, 'Test 3');
test(semiOrderedPermutation([3,1,2,5,4]), 2, 'Test 4');
test(semiOrderedPermutation([1,5,4,3,2]), 3, 'Test 5');
test(semiOrderedPermutation([3,2,5,4,1]), 5, 'Test 6');
test(semiOrderedPermutation([4,1,2,5,3]), 2, 'Test 7');
test(semiOrderedPermutation([1,2,3,4,5]), 0, 'Test 8');
test(semiOrderedPermutation([2,3,4,5,1]), 4, 'Test 9');
test(semiOrderedPermutation([4,5,3,1,2]), 5, 'Test 10');
test(semiOrderedPermutation([1,3,4,2,5]), 0, 'Test 11');
test(semiOrderedPermutation([2,1,4,3]), 2, 'Test 12');
test(semiOrderedPermutation([3,2,1,5,4]), 3, 'Test 13');
test(semiOrderedPermutation([10,1,9,8,7,6,5,4,3,2]), 9, 'Test 14');
test(semiOrderedPermutation([16,15,14,13,12,11,10,9,8,7,6,5,4,3,1,20,19,18,17,2]), 18, 'Test 15');
test(semiOrderedPermutation([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,20,19,18,17,16]), 18, 'Test 16');
test(semiOrderedPermutation([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 14, 'Test 17');
test(semiOrderedPermutation([4,2,5,1,3]), 4, 'Test 18');
test(semiOrderedPermutation([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 19');
test(semiOrderedPermutation([3,4,5,6,7,8,9,10,2,1]), 10, 'Test 20');
test(semiOrderedPermutation([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 37, 'Test 21');
test(semiOrderedPermutation([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,1]), Error: 51 is not in list, 'Test 22');
test(semiOrderedPermutation([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 37, 'Test 23');
test(semiOrderedPermutation([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 27, 'Test 24');
test(semiOrderedPermutation([4,5,6,7,8,9,10,1,2,3]), 9, 'Test 25');
test(semiOrderedPermutation([5, 1, 2, 3, 4, 6, 7, 8, 9, 10]), 1, 'Test 26');
test(semiOrderedPermutation([4, 3, 5, 1, 2]), 4, 'Test 27');
test(semiOrderedPermutation([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 97, 'Test 28');
test(semiOrderedPermutation([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 47, 'Test 29');
test(semiOrderedPermutation([3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,1,2]), 49, 'Test 30');
test(semiOrderedPermutation([48,29,10,34,32,15,19,2,25,47,35,13,44,12,8,41,17,40,21,4,42,18,33,36,22,39,26,7,5,43,6,37,31,27,30,24,20,1,23,38,9,28,16,3,11,14,45,46,49,50]), 37, 'Test 31');
test(semiOrderedPermutation([1, 10, 9, 8, 7, 6, 5, 4, 3, 2]), 8, 'Test 32');
test(semiOrderedPermutation([1,10,9,8,7,6,5,4,3,2]), 8, 'Test 33');
test(semiOrderedPermutation([1,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2]), 18, 'Test 34');
test(semiOrderedPermutation([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 57, 'Test 35');
test(semiOrderedPermutation([15,1,14,13,12,11,10,9,8,7,6,5,4,3,2]), 14, 'Test 36');
test(semiOrderedPermutation([4,5,1,3,2]), 4, 'Test 37');
test(semiOrderedPermutation([5,3,2,1,4]), 6, 'Test 38');
test(semiOrderedPermutation([23,15,32,1,10,45,2,11,50,8,13,19,6,9,17,27,20,21,22,3,24,25,26,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49]), 8, 'Test 39');
test(semiOrderedPermutation([1,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2]), 23, 'Test 40');
test(semiOrderedPermutation([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,31]), 29, 'Test 41');
test(semiOrderedPermutation([49,1,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2]), 48, 'Test 42');
test(semiOrderedPermutation([49,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,1,50]), 48, 'Test 43');
test(semiOrderedPermutation([48,49,50,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,1,2,3]), 93, 'Test 44');
test(semiOrderedPermutation([4, 5, 2, 3, 1]), 6, 'Test 45');
test(semiOrderedPermutation([7,5,6,4,1,3,2]), 9, 'Test 46');
test(semiOrderedPermutation([5,1,4,2,3]), 4, 'Test 47');
test(semiOrderedPermutation([5,2,3,4,1]), 7, 'Test 48');
test(semiOrderedPermutation([4,5,3,2,1]), 6, 'Test 49');
test(semiOrderedPermutation([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 97, 'Test 50');
test(semiOrderedPermutation([2,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,1]), 46, 'Test 51');
test(semiOrderedPermutation([2,3,4,5,6,7,8,9,10,1]), 9, 'Test 52');
test(semiOrderedPermutation([4,1,3,5,2]), 2, 'Test 53');
test(semiOrderedPermutation([3,4,5,6,7,8,9,10,1,2]), 9, 'Test 54');
test(semiOrderedPermutation([2,10,9,8,7,6,5,4,3,1]), 16, 'Test 55');
test(semiOrderedPermutation([10, 2, 3, 4, 5, 6, 7, 8, 9, 1]), 17, 'Test 56');
test(semiOrderedPermutation([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 1, 'Test 57');
test(semiOrderedPermutation([40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 77, 'Test 58');
test(semiOrderedPermutation([2,5,4,1,3]), 5, 'Test 59');
test(semiOrderedPermutation([49,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,1]), 95, 'Test 60');
test(semiOrderedPermutation([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,1]), 48, 'Test 61');
test(semiOrderedPermutation([45,1,2,3,46,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]), 1, 'Test 62');
test(semiOrderedPermutation([2,3,4,5,6,7,8,9,10,1,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 9, 'Test 63');
test(semiOrderedPermutation([2,19,20,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,1]), 35, 'Test 64');
test(semiOrderedPermutation([10,9,8,7,6,5,4,3,2,1]), 17, 'Test 65');
test(semiOrderedPermutation([3,5,2,4,1]), 6, 'Test 66');
test(semiOrderedPermutation([47,48,49,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]), 48, 'Test 67');
test(semiOrderedPermutation([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 17, 'Test 68');
test(semiOrderedPermutation([2, 5, 4, 1, 3]), 5, 'Test 69');
test(semiOrderedPermutation([2,3,5,4,1]), 5, 'Test 70');
test(semiOrderedPermutation([5,2,3,1,4]), 6, 'Test 71');
test(semiOrderedPermutation([45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,46]), 44, 'Test 72');
test(semiOrderedPermutation([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]), 1, 'Test 73');
test(semiOrderedPermutation([5, 4, 3, 2, 1]), 7, 'Test 74');
test(semiOrderedPermutation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 75');
test(semiOrderedPermutation([2,5,4,3,1]), 6, 'Test 76');
test(semiOrderedPermutation([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,26,27,28,29,30,1]), 29, 'Test 77');
test(semiOrderedPermutation([5,3,4,1,2]), 6, 'Test 78');
test(semiOrderedPermutation([48,49,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]), 48, 'Test 79');
test(semiOrderedPermutation([3, 5, 1, 4, 2]), 4, 'Test 80');
test(semiOrderedPermutation([1,50,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]), 48, 'Test 81');
test(semiOrderedPermutation([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,26]), 24, 'Test 82');
test(semiOrderedPermutation([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 83');
test(semiOrderedPermutation([5,1,2,3,4]), 4, 'Test 84');
test(semiOrderedPermutation([45,1,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2]), 44, 'Test 85');
test(semiOrderedPermutation([4, 5, 6, 7, 8, 9, 10, 1, 2, 3]), 9, 'Test 86');
test(semiOrderedPermutation([3, 2, 5, 4, 1, 6, 7, 8, 9, 10]), 4, 'Test 87');
test(semiOrderedPermutation([2, 3, 1, 5, 4]), 3, 'Test 88');
test(semiOrderedPermutation([4,3,2,1,5]), 3, 'Test 89');
test(semiOrderedPermutation([47,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,48,49,50,1]), 49, 'Test 90');
test(semiOrderedPermutation([3,5,1,4,2]), 4, 'Test 91');
test(semiOrderedPermutation([1,5,3,4,2]), 3, 'Test 92');
test(semiOrderedPermutation([4,2,3,1,5]), 3, 'Test 93');
test(semiOrderedPermutation([10,2,3,4,5,6,7,8,9,1]), 17, 'Test 94');
test(semiOrderedPermutation([2, 1, 3, 5, 4, 6, 7, 8, 9, 10]), 1, 'Test 95');
test(semiOrderedPermutation([34,23,12,5,4,3,2,1,33,32,31,30,29,28,27,26,25,24,22,21,20,19,18,17,16,15,14,13,11,10,9,8,7,6,5,4,3,2,1]), Error: 39 is not in list, 'Test 96');
test(semiOrderedPermutation([47,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,1]), 91, 'Test 97');
test(semiOrderedPermutation([4,3,5,1,2]), 4, 'Test 98');
test(semiOrderedPermutation([4,5,1,2,3]), 4, 'Test 99');
test(semiOrderedPermutation([6,5,4,3,2,1,7,8,9,10]), 5, 'Test 100');
test(semiOrderedPermutation([5,1,4,3,2]), 4, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

