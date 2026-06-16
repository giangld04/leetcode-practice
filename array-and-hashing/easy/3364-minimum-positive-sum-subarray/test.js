// Test: 3364. Minimum Positive Sum Subarray
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSumSubarray } = require("./solution");

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

console.log("\n3364. Minimum Positive Sum Subarray\n");

test(minimumSumSubarray([1, 2, 3, 4], 2, 4), 3, 'Test 1');
test(minimumSumSubarray([5, -1, 3, -2, 4], 1, 4), 1, 'Test 2');
test(minimumSumSubarray([1, -1, 1, -1, 1], 1, 5), 1, 'Test 3');
test(minimumSumSubarray([-1, -2, -3, -4], 2, 3), -1, 'Test 4');
test(minimumSumSubarray([-10, 10, -10, 10, -10], 2, 4), 10, 'Test 5');
test(minimumSumSubarray([-5, -1, -2, -3, -3, -4], 2, 5), -1, 'Test 6');
test(minimumSumSubarray([5, -1, 3, -2, 4], 1, 2), 1, 'Test 7');
test(minimumSumSubarray([10, -5, 20, -10, 30], 2, 4), 5, 'Test 8');
test(minimumSumSubarray([-5, -1, -3, -2, -4], 2, 3), -1, 'Test 9');
test(minimumSumSubarray([1000, -500, 250, -125, 62], 3, 5), 187, 'Test 10');
test(minimumSumSubarray([5, -1, -2, 3, 2], 1, 3), 1, 'Test 11');
test(minimumSumSubarray([-2, 2, -3, 1], 2, 3), -1, 'Test 12');
test(minimumSumSubarray([0, 0, 0, 0], 1, 4), -1, 'Test 13');
test(minimumSumSubarray([5, -1, -2, 3, -3, 4], 1, 4), 1, 'Test 14');
test(minimumSumSubarray([-10, -20, 30, -40, 50], 2, 4), 10, 'Test 15');
test(minimumSumSubarray([10, 20, 30, 40, 50], 3, 5), 60, 'Test 16');
test(minimumSumSubarray([0, 0, 0, 0], 1, 2), -1, 'Test 17');
test(minimumSumSubarray([5, -1, 3, -2, 2], 2, 3), 1, 'Test 18');
test(minimumSumSubarray([3, -2, 1, 4], 2, 3), 1, 'Test 19');
test(minimumSumSubarray([1, 2, 3, -6, 1, 2, 3], 2, 3), 3, 'Test 20');
test(minimumSumSubarray([-1, -2, -3, -4], 1, 4), -1, 'Test 21');
test(minimumSumSubarray([1, -1, 2, -2, 3, -3], 2, 5), 1, 'Test 22');
test(minimumSumSubarray([1, -1, 1, -1, 1, -1, 1, -1], 3, 6), 1, 'Test 23');
test(minimumSumSubarray([5, -1, 3, -2, 4, -3, 6, -4, 7, -5], 4, 7), 1, 'Test 24');
test(minimumSumSubarray([-1, 0, 1, 0, -1, 0, 1, 0, -1, 0], 3, 5), 1, 'Test 25');
test(minimumSumSubarray([-10, -20, -30, -40, -50], 1, 5), -1, 'Test 26');
test(minimumSumSubarray([-10, 20, -30, 40, -50, 60, -70, 80, -90], 4, 8), 20, 'Test 27');
test(minimumSumSubarray([1, 2, 3, -6, 4, 5, 6, -15, 7, 8, 9], 4, 7), 1, 'Test 28');
test(minimumSumSubarray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 2, 5), 10, 'Test 29');
test(minimumSumSubarray([1, 1, -1, 1, -1, 1, -1, 1, -1, 1], 4, 8), 1, 'Test 30');
test(minimumSumSubarray([100, -50, 200, -150, 300, -250, 400], 4, 6), 50, 'Test 31');
test(minimumSumSubarray([5, -1, -2, -3, 1, 2, 3, -4, 4], 3, 6), 1, 'Test 32');
test(minimumSumSubarray([10, 20, 30, -10, -20, -30, 40, 50, -40, -50], 3, 8), 10, 'Test 33');
test(minimumSumSubarray([5, -1, 3, -2, 1, 0, -4, 2, -3, 5], 4, 7), 1, 'Test 34');
test(minimumSumSubarray([100, -200, 300, -400, 500, -600, 700, -800, 900], 4, 9), 200, 'Test 35');
test(minimumSumSubarray([100, -200, 300, -400, 500, -600, 700], 4, 6), 200, 'Test 36');
test(minimumSumSubarray([0, 0, 0, 0, 0, 0, 0, 0], 1, 8), -1, 'Test 37');
test(minimumSumSubarray([100, -50, 25, -12, 60, -30, 45, -22], 4, 7), 16, 'Test 38');
test(minimumSumSubarray([10, -5, 20, -15, 30, -25, 40], 2, 6), 5, 'Test 39');
test(minimumSumSubarray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], 4, 6), 2, 'Test 40');
test(minimumSumSubarray([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], 5, 8), 30, 'Test 41');
test(minimumSumSubarray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 3, 5), 3, 'Test 42');
test(minimumSumSubarray([-5, 1, -2, 3, 6, -1, 4, -3, 2], 3, 5), 2, 'Test 43');
test(minimumSumSubarray([5, -1, 3, -2, 4, -6, 7, -8, 9], 2, 5), 1, 'Test 44');
test(minimumSumSubarray([0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0], 1, 5), 1, 'Test 45');
test(minimumSumSubarray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 2, 4), -1, 'Test 46');
test(minimumSumSubarray([2, 3, 4, -1, -2, 1, 5, 6, -3, -4], 3, 7), 1, 'Test 47');
test(minimumSumSubarray([10, -20, 30, -40, 50, -60, 70, -80, 90, -100], 3, 7), 20, 'Test 48');
test(minimumSumSubarray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 100], 5, 11), 45, 'Test 49');
test(minimumSumSubarray([1, 1, -1, -1, 1, 1, -1, -1], 2, 4), 1, 'Test 50');
test(minimumSumSubarray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2, 5), 1, 'Test 51');
test(minimumSumSubarray([0, 0, 0, 0, 0, 0, 0], 1, 7), -1, 'Test 52');
test(minimumSumSubarray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], 2, 8), 1, 'Test 53');
test(minimumSumSubarray([-5, -1, -8, 2, 6, -3, 4, 1], 3, 5), 1, 'Test 54');
test(minimumSumSubarray([5, 1, 5, 1, 5, 1, 5, 1, 5, 1], 4, 6), 12, 'Test 55');
test(minimumSumSubarray([-1, 0, 1, -1, 0, 1, -1, 0, 1], 2, 8), 1, 'Test 56');
test(minimumSumSubarray([5, -5, 5, -5, 5, -5, 5, -5, 5, -5], 2, 9), 5, 'Test 57');
test(minimumSumSubarray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3, 7), 15, 'Test 58');
test(minimumSumSubarray([10, 20, -30, 40, 50, -60, 70, 80, -90, 100], 3, 7), 20, 'Test 59');
test(minimumSumSubarray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7], 4, 10), 2, 'Test 60');
test(minimumSumSubarray([-1, 2, -3, 4, -5, 6, -7, 8], 3, 6), 2, 'Test 61');
test(minimumSumSubarray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 5, 8), 1, 'Test 62');
test(minimumSumSubarray([-10, 20, -30, 40, -50, 60, -70, 80, -90], 2, 5), 10, 'Test 63');
test(minimumSumSubarray([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0], 2, 4), -1, 'Test 64');
test(minimumSumSubarray([-999, 1, -1, 1, -1, 1, -1, 1, -1, 999], 1, 10), 1, 'Test 65');
test(minimumSumSubarray([9, -3, 7, -2, 8, -1, 6, -4, 5, -5], 2, 8), 1, 'Test 66');
test(minimumSumSubarray([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 3, 6), -1, 'Test 67');
test(minimumSumSubarray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 1, 10), -1, 'Test 68');
test(minimumSumSubarray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], 4, 9), 2, 'Test 69');
test(minimumSumSubarray([1, -1, 1, -1, 1, -1, 1, -1, 1], 1, 9), 1, 'Test 70');
test(minimumSumSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 10), 15, 'Test 71');
test(minimumSumSubarray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 2, 5), -1, 'Test 72');
test(minimumSumSubarray([100, -50, 200, -150, 300, -200, 400, -250, 500, -300], 4, 7), 100, 'Test 73');
test(minimumSumSubarray([-5, -1, -5, -1, -5, -1, -5, -1, -5, -1], 2, 10), -1, 'Test 74');
test(minimumSumSubarray([1, 2, -3, 4, -5, 6, -7, 8, -9, 10], 3, 6), 2, 'Test 75');
test(minimumSumSubarray([10, 20, 30, -60, 40, 50, 60, -180, 70, 80, 90], 5, 9), 10, 'Test 76');
test(minimumSumSubarray([-1, -2, -3, 4, -1, 2, 1, -5, 4], 3, 6), 1, 'Test 77');
test(minimumSumSubarray([-1, 2, -3, 4, -5, 6, -7, 8], 3, 5), 2, 'Test 78');
test(minimumSumSubarray([5, -4, 3, -2, 1, -6, 7], 2, 5), 1, 'Test 79');
test(minimumSumSubarray([0, -1, 1, -2, 2, -3, 3, -4, 4], 2, 9), 1, 'Test 80');
test(minimumSumSubarray([5, 4, -1, 7, 8, -10, 2, 1, -3, 4, 2, -5, 1, 6], 3, 7), 1, 'Test 81');
test(minimumSumSubarray([100, -50, 200, -150, 300, -200, 400, -250, 500], 5, 9), 100, 'Test 82');
test(minimumSumSubarray([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], 2, 5), 2, 'Test 83');
test(minimumSumSubarray([100, -150, 200, -250, 300, -350, 400], 2, 7), 50, 'Test 84');
test(minimumSumSubarray([5, -1, 3, -2, 1, -4, 2, -3, 1, 2], 2, 4), 1, 'Test 85');
test(minimumSumSubarray([1, -2, 3, -4, 5, -6, 7, -8, 9], 3, 6), 2, 'Test 86');
test(minimumSumSubarray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5, 9), 1500, 'Test 87');
test(minimumSumSubarray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5, 10), -1, 'Test 88');
test(minimumSumSubarray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1, 10), -1, 'Test 89');
test(minimumSumSubarray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13], 3, 10), 2, 'Test 90');
test(minimumSumSubarray([1, 2, 3, -6, 1, 2, 3, -6, 1, 2, 3], 2, 7), 1, 'Test 91');
test(minimumSumSubarray([-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1], 3, 15), -1, 'Test 92');
test(minimumSumSubarray([5, -1, 3, -4, 2, -6, 7], 3, 5), 1, 'Test 93');
test(minimumSumSubarray([10, 20, 30, 40, 50], 1, 5), 10, 'Test 94');
test(minimumSumSubarray([1, 2, -5, 2, 3, -4, 3, 2], 2, 3), 1, 'Test 95');
test(minimumSumSubarray([-1, 1, -1, 1, -1, 1], 3, 5), 1, 'Test 96');
test(minimumSumSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7, 10), 28, 'Test 97');
test(minimumSumSubarray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1, 5), -1, 'Test 98');
test(minimumSumSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 10), 1, 'Test 99');
test(minimumSumSubarray([-1, 1, -2, 2, -3, 3, -4, 4], 2, 4), 1, 'Test 100');
test(minimumSumSubarray([100, -50, 25, -10, 5, -1, 1, -1, 1, -1, 1], 5, 10), 1, 'Test 101');
test(minimumSumSubarray([-100, 100, -50, 50, -25, 25, -12, 12, -6, 6], 2, 8), 6, 'Test 102');
test(minimumSumSubarray([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100], 3, 8), 20, 'Test 103');
test(minimumSumSubarray([10, 20, 30, 40, 50, -100, 60, 70, 80, 90], 5, 10), 40, 'Test 104');
test(minimumSumSubarray([10, 20, 30, -100, 10, 20, 30, -100, 10, 20, 30], 4, 7), 10, 'Test 105');
test(minimumSumSubarray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2, 8), 1, 'Test 106');
test(minimumSumSubarray([100, -50, 200, -150, 300, -250, 400], 3, 6), 50, 'Test 107');
test(minimumSumSubarray([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 5, 10), -1, 'Test 108');
test(minimumSumSubarray([-10, 20, -30, 40, -50, 60, -70, 80], 2, 8), 10, 'Test 109');
test(minimumSumSubarray([5, -4, 6, -3, 8, -2, 7], 2, 6), 1, 'Test 110');
test(minimumSumSubarray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 8), 5, 'Test 111');
test(minimumSumSubarray([-1, -2, -3, -4, -5], 1, 5), -1, 'Test 112');
test(minimumSumSubarray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1], 3, 6), 1, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

