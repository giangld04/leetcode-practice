// Test: 2670. Find The Distinct Difference Array
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { distinctDifferenceArray } = require("./solution");

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

console.log("\n2670. Find The Distinct Difference Array\n");

test(distinctDifferenceArray([1,3,2,4,5]), [-3, -1, 1, 3, 5], 'Test 1');
test(distinctDifferenceArray([10,20,10,20,10]), [-1, 0, 0, 1, 2], 'Test 2');
test(distinctDifferenceArray([1,1,2,2,3]), [-2, -1, 0, 1, 3], 'Test 3');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10]), [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10], 'Test 4');
test(distinctDifferenceArray([1]), [1], 'Test 5');
test(distinctDifferenceArray([50,49,48,47,46]), [-3, -1, 1, 3, 5], 'Test 6');
test(distinctDifferenceArray([1,1,2,2,3,3,4,4,5,5]), [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 'Test 7');
test(distinctDifferenceArray([10,20,30,40,50]), [-3, -1, 1, 3, 5], 'Test 8');
test(distinctDifferenceArray([5,5,5,5,5]), [0, 0, 0, 0, 1], 'Test 9');
test(distinctDifferenceArray([42,42,42,42,42]), [0, 0, 0, 0, 1], 'Test 10');
test(distinctDifferenceArray([1,2,3,4,5]), [-3, -1, 1, 3, 5], 'Test 11');
test(distinctDifferenceArray([1,2,2,3,3]), [-1, 0, 1, 2, 3], 'Test 12');
test(distinctDifferenceArray([1,1,1,1,1]), [0, 0, 0, 0, 1], 'Test 13');
test(distinctDifferenceArray([1,3,2,4,5,6,7,8,9,10]), [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10], 'Test 14');
test(distinctDifferenceArray([1,10,2,9,3,8,4,7,5,6]), [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10], 'Test 15');
test(distinctDifferenceArray([1,2,2,3,3,3,4,4,4,4]), [-2, -1, 0, 1, 1, 2, 3, 3, 3, 4], 'Test 16');
test(distinctDifferenceArray([3,2,3,4,2]), [-2, -1, 0, 2, 3], 'Test 17');
test(distinctDifferenceArray([50,49,48,47,46,45,44,43,42,41]), [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10], 'Test 18');
test(distinctDifferenceArray([1,2,3,2,1]), [-2, -1, 1, 2, 3], 'Test 19');
test(distinctDifferenceArray([5,5,5,5,5,5,5,5,5,5]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 20');
test(distinctDifferenceArray([1,2,1,2,1]), [-1, 0, 0, 1, 2], 'Test 21');
test(distinctDifferenceArray([50,40,30,20,10]), [-3, -1, 1, 3, 5], 'Test 22');
test(distinctDifferenceArray([34,23,12,34,56,78,90,12,34,56]), [-5, -3, -2, -2, -1, 1, 3, 4, 5, 6], 'Test 23');
test(distinctDifferenceArray([29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), [-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15], 'Test 24');
test(distinctDifferenceArray([42,13,24,35,42,13,24,35]), [-3, -2, -1, 0, 1, 2, 3, 4], 'Test 25');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 'Test 26');
test(distinctDifferenceArray([10,20,30,20,10,30,20,10]), [-2, -1, 0, 0, 0, 1, 2, 3], 'Test 27');
test(distinctDifferenceArray([34, 23, 12, 45, 56, 78, 89, 90, 12, 23]), [-6, -5, -4, -2, 0, 2, 4, 6, 7, 8], 'Test 28');
test(distinctDifferenceArray([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), [-2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3], 'Test 29');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 30');
test(distinctDifferenceArray([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]), [-3, -3, -3, -2, -1, -1, -1, 0, 1, 1, 1, 2, 3, 3, 3, 4], 'Test 31');
test(distinctDifferenceArray([30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 32');
test(distinctDifferenceArray([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), [-2, -1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3], 'Test 33');
test(distinctDifferenceArray([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]), [-2, -2, -2, -2, -1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 3], 'Test 34');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 35');
test(distinctDifferenceArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 36');
test(distinctDifferenceArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), [-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15], 'Test 37');
test(distinctDifferenceArray([1,2,3,4,5,4,3,2,1]), [-4, -3, -2, -1, 1, 2, 3, 4, 5], 'Test 38');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 39');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [-28, -26, -24, -22, -20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 'Test 40');
test(distinctDifferenceArray([1, 2, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3]), [-2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3], 'Test 41');
test(distinctDifferenceArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), [-4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5], 'Test 42');
test(distinctDifferenceArray([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5]), [-4, -4, -4, -4, -3, -2, -2, -2, -2, -1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5], 'Test 43');
test(distinctDifferenceArray([1,3,2,4,5,6,7,8,9,10,1,3,2,4,5]), [-9, -8, -7, -6, -5, -3, -1, 1, 3, 5, 6, 7, 8, 9, 10], 'Test 44');
test(distinctDifferenceArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), [-9, -9, -8, -7, -7, -6, -5, -5, -4, -3, -3, -2, -1, -1, 0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10], 'Test 45');
test(distinctDifferenceArray([10,20,10,20,10,20,10,20,10,20]), [-1, 0, 0, 0, 0, 0, 0, 0, 1, 2], 'Test 46');
test(distinctDifferenceArray([1,2,3,4,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 5], 'Test 47');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15], 'Test 48');
test(distinctDifferenceArray([5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 'Test 49');
test(distinctDifferenceArray([10,20,10,30,20,40,30,50,40,60]), [-5, -4, -3, -2, -1, 0, 1, 3, 4, 6], 'Test 50');
test(distinctDifferenceArray([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), [-3, -2, -1, 0, 0, 0, 0, 0, 1, 2, 3, 4], 'Test 51');
test(distinctDifferenceArray([1, 2, 3, 1, 2, 3, 1, 2, 3, 1]), [-2, -1, 0, 0, 0, 0, 0, 1, 2, 3], 'Test 52');
test(distinctDifferenceArray([10, 20, 10, 30, 20, 40, 30, 50, 40, 60]), [-5, -4, -3, -2, -1, 0, 1, 3, 4, 6], 'Test 53');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), [-9, -8, -7, -6, -5, -3, -1, 1, 3, 5, 6, 7, 8, 9, 10], 'Test 54');
test(distinctDifferenceArray([1,2,3,2,1,3,2,1,3,2,1]), [-2, -1, 0, 0, 0, 0, 0, 0, 1, 2, 3], 'Test 55');
test(distinctDifferenceArray([1,1,2,2,1,1,3,3,2,2,1,1,4,4,3,3,2,2,1,1,5,5,4,4,3,3,2,2,1,1]), [-4, -4, -3, -3, -3, -3, -2, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5], 'Test 56');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 57');
test(distinctDifferenceArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 58');
test(distinctDifferenceArray([42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 59');
test(distinctDifferenceArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 60');
test(distinctDifferenceArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 'Test 61');
test(distinctDifferenceArray([1, 3, 2, 3, 4, 3, 5, 6, 7, 8, 9]), [-7, -6, -4, -4, -2, -1, 1, 3, 5, 7, 9], 'Test 62');
test(distinctDifferenceArray([1,3,2,3,1,4,1,3,2,3,4,2,1,3,4,2,1,3,2,4,1]), [-3, -2, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4], 'Test 63');
test(distinctDifferenceArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 64');
test(distinctDifferenceArray([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6]), [-8, -7, -6, -5, -4, -3, -2, -1, -1, -1, 0, 0, 2, 3, 3, 4, 5, 7, 8, 9], 'Test 65');
test(distinctDifferenceArray([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14,16,15,17,16,18,17,19,18,20,19]), [-19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20], 'Test 66');
test(distinctDifferenceArray([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]), [-3, -3, -3, -3, -2, -1, -1, -1, -1, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4], 'Test 67');
test(distinctDifferenceArray([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2]), [-2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3], 'Test 68');
test(distinctDifferenceArray([2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10]), [-10, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11], 'Test 69');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [-18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 'Test 70');
test(distinctDifferenceArray([50,49,48,47,46,45,44,43,42,41,40]), [-9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11], 'Test 71');
test(distinctDifferenceArray([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 72');
test(distinctDifferenceArray([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11]), [-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15], 'Test 73');
test(distinctDifferenceArray([42, 21, 42, 21, 42, 21, 42, 21, 42, 21, 42, 21, 42, 21, 42, 21, 42, 21]), [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2], 'Test 74');
test(distinctDifferenceArray([1,2,3,4,5,4,3,2,1,1,2,3,4,5,4,3,2,1,2,3]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 4, 5], 'Test 75');
test(distinctDifferenceArray([1, 2, 1, 3, 2, 4, 3, 5, 4, 6]), [-5, -4, -3, -2, -1, 0, 1, 3, 4, 6], 'Test 76');
test(distinctDifferenceArray([10,9,8,7,6,5,4,3,2,1]), [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10], 'Test 77');
test(distinctDifferenceArray([1,1,1,2,2,2,3,3,3,4,4,4]), [-3, -3, -2, -1, -1, 0, 1, 1, 2, 3, 3, 4], 'Test 78');
test(distinctDifferenceArray([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), [-28, -26, -24, -22, -20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 'Test 79');
test(distinctDifferenceArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10], 'Test 80');
test(distinctDifferenceArray([50,40,30,20,10,10,20,30,40,50]), [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 'Test 81');
test(distinctDifferenceArray([10, 20, 20, 10, 30, 30, 40, 40, 50, 50]), [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 'Test 82');
test(distinctDifferenceArray([50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]), [-48, -46, -44, -42, -40, -38, -36, -34, -32, -30, -28, -26, -24, -22, -20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50], 'Test 83');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10], 'Test 84');
test(distinctDifferenceArray([5,1,5,2,5,3,5,4,5,5,5,5,5,5,5,5,5,5,5,5]), [-4, -2, -2, 0, 0, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5], 'Test 85');
test(distinctDifferenceArray([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 86');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 87');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 2, 3, 4, 5]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 88');
test(distinctDifferenceArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), [-4, -4, -3, -2, -2, -1, 0, 0, 1, 2, 2, 3, 4, 4, 5], 'Test 89');
test(distinctDifferenceArray([10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 90');
test(distinctDifferenceArray([5, 5, 5, 5, 5, 5, 5]), [0, 0, 0, 0, 0, 0, 1], 'Test 91');
test(distinctDifferenceArray([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 92');
test(distinctDifferenceArray([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), [-3, -3, -2, -1, -1, 0, 1, 1, 2, 3, 3, 4], 'Test 93');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 94');
test(distinctDifferenceArray([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 95');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 96');
test(distinctDifferenceArray([15, 15, 10, 10, 5, 5, 1, 1, 20, 20, 25, 25, 30, 30, 35, 35]), [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 97');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 98');
test(distinctDifferenceArray([3,5,7,3,5,7,3,5,7,3,5,7,3,5,7]), [-2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3], 'Test 99');
test(distinctDifferenceArray([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 100');
test(distinctDifferenceArray([1,2,3,1,2,3,1,2,3]), [-2, -1, 0, 0, 0, 0, 1, 2, 3], 'Test 101');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 102');
test(distinctDifferenceArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 103');
test(distinctDifferenceArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), [-4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 104');
test(distinctDifferenceArray([7,7,7,8,8,8,9,9,9,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), [-7, -7, -6, -5, -5, -4, -3, -3, -2, -1, -1, 0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8], 'Test 105');
test(distinctDifferenceArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), [-9, -8, -7, -6, -5, -3, -1, 1, 3, 5, 6, 7, 8, 9, 10], 'Test 106');
test(distinctDifferenceArray([1, 2, 3, 2, 1, 4, 5, 4, 3, 2, 1]), [-4, -3, -2, -2, -2, -1, 1, 2, 3, 4, 5], 'Test 107');

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
