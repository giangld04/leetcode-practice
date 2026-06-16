// Test: 2811. Check If It Is Possible To Split Array
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { canSplitArray } = require("./solution");

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

console.log("\n2811. Check If It Is Possible To Split Array\n");

test(canSplitArray([10, 20, 30, 40], 50), true, 'Test 1');
test(canSplitArray([2, 3, 3, 2, 3], 6), true, 'Test 2');
test(canSplitArray([50, 50], 100), true, 'Test 3');
test(canSplitArray([1, 2, 3, 4, 5], 9), true, 'Test 4');
test(canSplitArray([1, 1, 1, 1, 1, 1], 2), true, 'Test 5');
test(canSplitArray([2, 1, 3], 5), false, 'Test 6');
test(canSplitArray([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), true, 'Test 7');
test(canSplitArray([1, 2, 3, 4, 5], 10), false, 'Test 8');
test(canSplitArray([1, 1, 1, 1], 2), true, 'Test 9');
test(canSplitArray([100, 100], 150), true, 'Test 10');
test(canSplitArray([10, 20, 30, 40, 50], 60), true, 'Test 11');
test(canSplitArray([1, 100, 1, 1, 1], 101), true, 'Test 12');
test(canSplitArray([2, 2, 1], 4), true, 'Test 13');
test(canSplitArray([50, 50, 50, 50], 100), true, 'Test 14');
test(canSplitArray([100, 100, 100], 200), true, 'Test 15');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), true, 'Test 16');
test(canSplitArray([100], 100), true, 'Test 17');
test(canSplitArray([5, 5, 5, 5, 5], 10), true, 'Test 18');
test(canSplitArray([50, 50, 50], 100), true, 'Test 19');
test(canSplitArray([1, 1, 1, 1, 1], 2), true, 'Test 20');
test(canSplitArray([5, 5, 5, 5, 5], 15), false, 'Test 21');
test(canSplitArray([10, 20, 30], 15), true, 'Test 22');
test(canSplitArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), true, 'Test 23');
test(canSplitArray([10, 20, 30, 40], 35), true, 'Test 24');
test(canSplitArray([100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 102), false, 'Test 25');
test(canSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 210), true, 'Test 26');
test(canSplitArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 10), true, 'Test 27');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 35), true, 'Test 28');
test(canSplitArray([90, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), true, 'Test 29');
test(canSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 30');
test(canSplitArray([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765], 1000), true, 'Test 31');
test(canSplitArray([100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 101), true, 'Test 32');
test(canSplitArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 25), true, 'Test 33');
test(canSplitArray([33, 33, 34, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33], 66), true, 'Test 34');
test(canSplitArray([50, 40, 30, 20, 10, 15, 25, 35, 45, 55], 75), true, 'Test 35');
test(canSplitArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), true, 'Test 36');
test(canSplitArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 30), true, 'Test 37');
test(canSplitArray([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), true, 'Test 38');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 25), true, 'Test 39');
test(canSplitArray([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 5), false, 'Test 40');
test(canSplitArray([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 5), true, 'Test 41');
test(canSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 42');
test(canSplitArray([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 99), true, 'Test 43');
test(canSplitArray([1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 101), true, 'Test 44');
test(canSplitArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 180), true, 'Test 45');
test(canSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 180), true, 'Test 46');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), true, 'Test 47');
test(canSplitArray([99, 1, 99, 1, 99, 1, 99, 1, 99], 198), false, 'Test 48');
test(canSplitArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 10), true, 'Test 49');
test(canSplitArray([5, 15, 10, 20, 25, 30, 35, 40, 45, 50], 60), true, 'Test 50');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 30), true, 'Test 51');
test(canSplitArray([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 190), true, 'Test 52');
test(canSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100), true, 'Test 53');
test(canSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 300), true, 'Test 54');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 30), true, 'Test 55');
test(canSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 56');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9), true, 'Test 57');
test(canSplitArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 100), true, 'Test 58');
test(canSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 59');
test(canSplitArray([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 99), true, 'Test 60');
test(canSplitArray([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 50), true, 'Test 61');
test(canSplitArray([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 6), true, 'Test 62');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 55), true, 'Test 63');
test(canSplitArray([99, 1, 99, 1, 99, 1, 99, 1, 99, 1], 198), false, 'Test 64');
test(canSplitArray([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 3), true, 'Test 65');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), true, 'Test 66');
test(canSplitArray([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 200), true, 'Test 67');
test(canSplitArray([30, 20, 10, 40, 50, 60, 70, 80, 90, 100], 140), true, 'Test 68');
test(canSplitArray([50, 45, 40, 35, 30, 25, 20, 15, 10, 5], 60), true, 'Test 69');
test(canSplitArray([2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 5), true, 'Test 70');
test(canSplitArray([10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 30), true, 'Test 71');
test(canSplitArray([99, 1, 98, 2, 97, 3, 96, 4, 95, 5], 100), true, 'Test 72');
test(canSplitArray([99, 1, 99, 1, 99, 1, 99, 1, 99, 1], 100), true, 'Test 73');
test(canSplitArray([100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 101), true, 'Test 74');
test(canSplitArray([99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99], 100), true, 'Test 75');
test(canSplitArray([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 3), true, 'Test 76');
test(canSplitArray([50, 50, 1, 50, 50, 1, 50, 50, 1, 50, 50, 1, 50, 50, 1, 50, 50, 1, 50, 50], 99), true, 'Test 77');
test(canSplitArray([10, 20, 10, 20, 10], 20), true, 'Test 78');
test(canSplitArray([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 4), true, 'Test 79');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 18), true, 'Test 80');
test(canSplitArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), true, 'Test 81');
test(canSplitArray([30, 30, 30, 30, 30, 30, 30, 30, 30, 30], 60), true, 'Test 82');
test(canSplitArray([2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711], 3000), true, 'Test 83');
test(canSplitArray([50, 25, 25, 50, 25, 25, 50], 75), true, 'Test 84');
test(canSplitArray([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 100), true, 'Test 85');
test(canSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 86');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 25), true, 'Test 87');
test(canSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 88');
test(canSplitArray([7, 6, 5, 4, 3, 2, 1], 10), true, 'Test 89');
test(canSplitArray([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 199), true, 'Test 90');
test(canSplitArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 10), true, 'Test 91');
test(canSplitArray([99, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 99], 199), false, 'Test 92');
test(canSplitArray([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 39), true, 'Test 93');
test(canSplitArray([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 5), true, 'Test 94');
test(canSplitArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70], 50), true, 'Test 95');
test(canSplitArray([20, 10, 10, 30, 20, 10, 10, 40, 30, 10], 35), true, 'Test 96');
test(canSplitArray([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 99), true, 'Test 97');
test(canSplitArray([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 100), true, 'Test 98');
test(canSplitArray([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), true, 'Test 99');
test(canSplitArray([100, 1, 1, 1, 100], 101), true, 'Test 100');
test(canSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), true, 'Test 101');
test(canSplitArray([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 199), true, 'Test 102');
test(canSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), true, 'Test 103');
test(canSplitArray([10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 30), true, 'Test 104');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20), true, 'Test 105');
test(canSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 200), false, 'Test 106');
test(canSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 150), true, 'Test 107');
test(canSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 190), true, 'Test 108');
test(canSplitArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 9), true, 'Test 109');
test(canSplitArray([9, 8, 7, 6, 5, 4, 3, 2, 1], 15), true, 'Test 110');
test(canSplitArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 30), true, 'Test 111');
test(canSplitArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 190), true, 'Test 112');
test(canSplitArray([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50], 115), true, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

