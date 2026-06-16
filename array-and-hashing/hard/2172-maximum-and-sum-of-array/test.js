// Test: 2172. Maximum And Sum Of Array
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { maximumANDSum } = require("./solution");

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

console.log("\n2172. Maximum And Sum Of Array\n");

test(maximumANDSum([1,1,1], 2), 2, 'Test 1');
test(maximumANDSum([1,2,3], 2), 5, 'Test 2');
test(maximumANDSum([15,15,15,15,15,15,15,15], 8), 52, 'Test 3');
test(maximumANDSum([15,15,15], 2), 5, 'Test 4');
test(maximumANDSum([1,2,3,4,5,6], 3), 9, 'Test 5');
test(maximumANDSum([7,11,4,1,3,10,4,9], 5), 23, 'Test 6');
test(maximumANDSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 8), 8, 'Test 7');
test(maximumANDSum([1,2], 1), 1, 'Test 8');
test(maximumANDSum([4,10,7,6,9,8,3,9,8,1,2,6,8,7,8], 9), 72, 'Test 9');
test(maximumANDSum([1,1,1,1,1,1], 3), 4, 'Test 10');
test(maximumANDSum([15,15,15,15,15,15,15,15,15,15,15,15], 6), 42, 'Test 11');
test(maximumANDSum([1,3,10,4,7,1], 9), 24, 'Test 12');
test(maximumANDSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 8), 8, 'Test 13');
test(maximumANDSum([7,11,4,1], 3), 7, 'Test 14');
test(maximumANDSum([1,2,3], 3), 6, 'Test 15');
test(maximumANDSum([1], 1), 1, 'Test 16');
test(maximumANDSum([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15], 10), 110, 'Test 17');
test(maximumANDSum([15,10,5,1,14,9,4,2,13,8,3,6,12,7,11], 8), 71, 'Test 18');
test(maximumANDSum([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 9), 84, 'Test 19');
test(maximumANDSum([2,4,6,8,10,12,14,1,3,5,7,9,11,13,15], 9), 84, 'Test 20');
test(maximumANDSum([15, 10, 5, 3, 8, 2, 7, 1, 14, 12, 9, 13, 4, 6, 11], 8), 71, 'Test 21');
test(maximumANDSum([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7), 56, 'Test 22');
test(maximumANDSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 23');
test(maximumANDSum([15, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 15, 1, 2], 9), 90, 'Test 24');
test(maximumANDSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 49, 'Test 25');
test(maximumANDSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 9), 84, 'Test 26');
test(maximumANDSum([8, 5, 6, 7, 1, 2, 3, 4, 9, 10, 11, 12, 13, 14, 15], 8), 71, 'Test 27');
test(maximumANDSum([11, 5, 7, 3, 14, 10, 9, 8], 4), 19, 'Test 28');
test(maximumANDSum([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3], 9), 90, 'Test 29');
test(maximumANDSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1], 9), 85, 'Test 30');
test(maximumANDSum([12, 6, 7, 10, 5, 11, 4, 8, 15, 14, 2, 13, 3, 9, 1], 8), 71, 'Test 31');
test(maximumANDSum([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], 9), 86, 'Test 32');
test(maximumANDSum([5, 4, 3, 2, 1, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6], 9), 84, 'Test 33');
test(maximumANDSum([8, 3, 15, 2, 12, 6, 1, 7, 4, 14, 10, 13, 9, 5, 11], 7), 53, 'Test 34');
test(maximumANDSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 9), 84, 'Test 35');
test(maximumANDSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 8), 71, 'Test 36');
test(maximumANDSum([14, 3, 5, 7, 10, 2, 8, 13], 4), 19, 'Test 37');
test(maximumANDSum([1, 2, 2, 3, 4, 5, 5, 6, 7, 8], 5), 29, 'Test 38');
test(maximumANDSum([7, 5, 2, 9, 1, 12, 3, 8, 6, 11, 14, 15], 6), 40, 'Test 39');
test(maximumANDSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 9), 87, 'Test 40');
test(maximumANDSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3], 8), 72, 'Test 41');
test(maximumANDSum([14,13,12,11,10,9,8,7,6,5,4,3,2,1], 7), 49, 'Test 42');
test(maximumANDSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 7), 7, 'Test 43');
test(maximumANDSum([14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 8), 64, 'Test 44');
test(maximumANDSum([14, 7, 9, 12, 11, 8, 5, 10, 3, 2, 15, 6, 1, 4, 13], 8), 71, 'Test 45');
test(maximumANDSum([13, 9, 7, 5, 3, 1], 4), 16, 'Test 46');
test(maximumANDSum([15, 13, 11, 9, 7, 5, 3, 1], 4), 20, 'Test 47');
test(maximumANDSum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 9), 90, 'Test 48');
test(maximumANDSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 71, 'Test 49');
test(maximumANDSum([8,7,6,5,4,3,2,1,15,14,13,12,11,10,9], 8), 71, 'Test 50');
test(maximumANDSum([14, 14, 14, 14, 14, 14, 14, 14, 14, 14], 5), 24, 'Test 51');
test(maximumANDSum([2, 5, 7, 9, 1, 3, 6, 8, 10, 12, 14, 15, 11, 4, 13], 7), 51, 'Test 52');
test(maximumANDSum([8, 6, 4, 2, 10, 14, 12, 1], 5), 21, 'Test 53');
test(maximumANDSum([15,8,7,1,2,3,14,9,10,11,12,13,4,5,6], 8), 71, 'Test 54');
test(maximumANDSum([3, 5, 15, 7, 9, 11, 13, 14, 12, 10], 6), 39, 'Test 55');
test(maximumANDSum([10, 14, 7, 11, 8, 12, 13, 9, 6, 4, 5, 2, 3, 15, 1], 8), 71, 'Test 56');
test(maximumANDSum([8, 9, 10, 11, 12, 13, 14], 7), 21, 'Test 57');
test(maximumANDSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9], 9), 90, 'Test 58');
test(maximumANDSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 8), 40, 'Test 59');
test(maximumANDSum([1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14], 8), 71, 'Test 60');
test(maximumANDSum([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 6), 39, 'Test 61');
test(maximumANDSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 15], 8), 72, 'Test 62');
test(maximumANDSum([1, 13, 5, 9, 11, 15, 3, 7, 14, 12, 2, 6, 10, 4, 8], 8), 71, 'Test 63');
test(maximumANDSum([14, 7, 13, 5, 11, 6, 2, 9], 4), 20, 'Test 64');
test(maximumANDSum([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 5), 29, 'Test 65');
test(maximumANDSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], 8), 72, 'Test 66');
test(maximumANDSum([9, 6, 11, 12, 14, 15, 7, 8, 10], 5), 26, 'Test 67');
test(maximumANDSum([6, 12, 10, 14, 1, 5, 11, 13, 7, 9, 3, 8, 2, 4, 15], 7), 49, 'Test 68');
test(maximumANDSum([1, 3, 2, 5, 4, 6, 8, 7, 15, 14, 13, 12, 11, 10, 9], 9), 84, 'Test 69');
test(maximumANDSum([7, 13, 11, 1, 15, 5, 9, 3, 14, 12, 8, 10, 6, 2, 4], 8), 71, 'Test 70');
test(maximumANDSum([8, 7, 6, 5, 4, 3, 2, 1], 4), 19, 'Test 71');
test(maximumANDSum([2, 4, 6, 8, 10, 12, 14, 16], 4), 16, 'Test 72');
test(maximumANDSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 15, 14, 13, 12, 11], 10), 110, 'Test 73');
test(maximumANDSum([7, 14, 21, 28, 35, 42, 49, 56], 4), 19, 'Test 74');
test(maximumANDSum([7, 11, 13, 17, 19, 23, 29, 31, 37, 41], 5), 30, 'Test 75');
test(maximumANDSum([2, 4, 6, 8, 10, 12, 14, 16, 18], 9), 46, 'Test 76');
test(maximumANDSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 8), 40, 'Test 77');
test(maximumANDSum([14, 12, 10, 8, 6, 4, 2, 15, 13, 11, 9, 7, 5, 3, 1], 8), 71, 'Test 78');
test(maximumANDSum([8, 7, 6, 5, 4, 3, 2, 1, 15, 14, 13, 12, 11, 10, 9], 8), 71, 'Test 79');
test(maximumANDSum([3, 5, 7, 11, 13, 17], 3), 10, 'Test 80');
test(maximumANDSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 9), 84, 'Test 81');
test(maximumANDSum([15, 1, 7, 15, 9, 7, 3, 10, 2, 14, 11, 13, 5, 4, 6, 8], 9), 87, 'Test 82');
test(maximumANDSum([1,3,5,7,9,11,13,15,1,3,5,7,9,11,13,15], 9), 86, 'Test 83');
test(maximumANDSum([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7], 10), 62, 'Test 84');
test(maximumANDSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 22, 'Test 85');
test(maximumANDSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18], 10), 102, 'Test 86');
test(maximumANDSum([15, 9, 6, 11, 13, 7, 12, 1, 5, 3, 2, 4, 8, 14, 10], 8), 71, 'Test 87');
test(maximumANDSum([10, 15, 9, 4, 14, 8, 13, 7, 12, 2, 3, 11, 6, 5, 1], 8), 71, 'Test 88');
test(maximumANDSum([5, 14, 12, 3, 7, 9, 1, 13, 11, 8, 6, 4, 2, 15, 10], 8), 71, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

