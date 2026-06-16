// Test: 1191. K Concatenation Maximum Sum
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { kConcatenationMaxSum } = require("./solution");

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

console.log("\n1191. K Concatenation Maximum Sum\n");

test(kConcatenationMaxSum([1], 1), 1, 'Test 1');
test(kConcatenationMaxSum([-1,0,1], 3), 1, 'Test 2');
test(kConcatenationMaxSum([1,-2,1], 5), 2, 'Test 3');
test(kConcatenationMaxSum([3,-2,2,-3], 3), 3, 'Test 4');
test(kConcatenationMaxSum([10000,-10000], 2), 10000, 'Test 5');
test(kConcatenationMaxSum([10000, -10000], 100000), 10000, 'Test 6');
test(kConcatenationMaxSum([-10000,10000], 100000), 10000, 'Test 7');
test(kConcatenationMaxSum([5, -1, 5], 3), 27, 'Test 8');
test(kConcatenationMaxSum([-1], 1), 0, 'Test 9');
test(kConcatenationMaxSum([0,0,0], 100000), 0, 'Test 10');
test(kConcatenationMaxSum([-1,-2,-3,-4,-5], 1), 0, 'Test 11');
test(kConcatenationMaxSum([3, -2, 2, -3], 5), 3, 'Test 12');
test(kConcatenationMaxSum([5], 1), 5, 'Test 13');
test(kConcatenationMaxSum([1,2], 3), 9, 'Test 14');
test(kConcatenationMaxSum([1,2,3,4,5], 1), 15, 'Test 15');
test(kConcatenationMaxSum([0,0,0], 1), 0, 'Test 16');
test(kConcatenationMaxSum([1,-1,1,-1,1,-1], 100000), 1, 'Test 17');
test(kConcatenationMaxSum([1, -10, 1], 1), 1, 'Test 18');
test(kConcatenationMaxSum([5], 10), 50, 'Test 19');
test(kConcatenationMaxSum([-1,-2], 7), 0, 'Test 20');
test(kConcatenationMaxSum([1,-1], 200000), 1, 'Test 21');
test(kConcatenationMaxSum([1,1,1], 100000), 300000, 'Test 22');
test(kConcatenationMaxSum([-5], 1), 0, 'Test 23');
test(kConcatenationMaxSum([10000, -9999], 2), 10001, 'Test 24');
test(kConcatenationMaxSum([10000, -10000, 20000, -20000, 30000], 20), 600000, 'Test 25');
test(kConcatenationMaxSum([5, -1, 3, -2, 5], 10), 100, 'Test 26');
test(kConcatenationMaxSum([1, 2, 3, 4, 5], 1), 15, 'Test 27');
test(kConcatenationMaxSum([2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 540, 'Test 28');
test(kConcatenationMaxSum([-5, -1, -8, -9], 4), 0, 'Test 29');
test(kConcatenationMaxSum([-1, -2, -3, -4, -5], 50000), 0, 'Test 30');
test(kConcatenationMaxSum([-10, 5, -5, 10, -10, 5], 7), 10, 'Test 31');
test(kConcatenationMaxSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 275, 'Test 32');
test(kConcatenationMaxSum([100, -50, 200, -150, 300, -250, 400, -350, 500, -450], 7), 2200, 'Test 33');
test(kConcatenationMaxSum([0, 0, 0, 0, 0], 100000), 0, 'Test 34');
test(kConcatenationMaxSum([-10, -20, -30, -40, -50], 2), 0, 'Test 35');
test(kConcatenationMaxSum([10, -9, 10, -9, 10, -9, 10, -9, 10, -9], 50000), 250009, 'Test 36');
test(kConcatenationMaxSum([7, -2, 5, -1, 3, -3, 2, 1], 100), 1200, 'Test 37');
test(kConcatenationMaxSum([5, -1, 5], 100000), 900000, 'Test 38');
test(kConcatenationMaxSum([3, -4, 2, -3, -1, 7, -5], 10), 7, 'Test 39');
test(kConcatenationMaxSum([-10, 100, -1, 100, -100], 2), 288, 'Test 40');
test(kConcatenationMaxSum([-5, -3, -1, 2, 4, 6], 2), 15, 'Test 41');
test(kConcatenationMaxSum([1, 2, -3, 4, -5, 6], 100000), 500001, 'Test 42');
test(kConcatenationMaxSum([100, -200, 300, -400, 500], 1000), 300200, 'Test 43');
test(kConcatenationMaxSum([2, -1, 2, -1, 2], 200000), 800000, 'Test 44');
test(kConcatenationMaxSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100000), 0, 'Test 45');
test(kConcatenationMaxSum([5, -1, 5], 10), 90, 'Test 46');
test(kConcatenationMaxSum([-10, 9, -20, 10, -30, 20, -40, 30, -50, 40], 5), 40, 'Test 47');
test(kConcatenationMaxSum([1000, -1000, 2000, -2000, 3000, -3000], 50000), 3000, 'Test 48');
test(kConcatenationMaxSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 100000), 1, 'Test 49');
test(kConcatenationMaxSum([5, -1, 2, 3, -2], 10), 72, 'Test 50');
test(kConcatenationMaxSum([5, -1, 3, -4, 2], 10), 52, 'Test 51');
test(kConcatenationMaxSum([5, -1, 3, -4, 2, 6, -5], 10), 65, 'Test 52');
test(kConcatenationMaxSum([10, -3, 4, -2, -1, 10], 7), 126, 'Test 53');
test(kConcatenationMaxSum([-5, -1, -2, -3, -2], 4), 0, 'Test 54');
test(kConcatenationMaxSum([-5, -1, -8, -2, -4], 50000), 0, 'Test 55');
test(kConcatenationMaxSum([10000, -9999, 10000, -9999], 50000), 109999, 'Test 56');
test(kConcatenationMaxSum([-10000, 10000, -9999, 9999, -9998, 9998], 50000), 10000, 'Test 57');
test(kConcatenationMaxSum([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 100000), 0, 'Test 58');
test(kConcatenationMaxSum([0, 0, 0, 0, 0, 0, 0], 100000), 0, 'Test 59');
test(kConcatenationMaxSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 550, 'Test 60');
test(kConcatenationMaxSum([-5, 5, -10, 10, -15, 15], 3), 15, 'Test 61');
test(kConcatenationMaxSum([-1, 0, 1], 100000), 1, 'Test 62');
test(kConcatenationMaxSum([10000, -5000, 2000, -3000, 1000], 50000), 250005000, 'Test 63');
test(kConcatenationMaxSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 50000), 1, 'Test 64');
test(kConcatenationMaxSum([10000, -9999, 10000, -9999, 10000], 50000), 500100000, 'Test 65');
test(kConcatenationMaxSum([1, -3, 2, 1, -1], 1), 3, 'Test 66');
test(kConcatenationMaxSum([10, 20, 30, 40, 50], 100000), 15000000, 'Test 67');
test(kConcatenationMaxSum([10000, -9999], 10), 10009, 'Test 68');
test(kConcatenationMaxSum([5, -3, 5, -2, 4, -1], 10), 81, 'Test 69');
test(kConcatenationMaxSum([0, 0, 0, 0, 0], 50000), 0, 'Test 70');
test(kConcatenationMaxSum([-1, -2, -3, -4], 3), 0, 'Test 71');
test(kConcatenationMaxSum([100, -1, 1, -1, 1, -1, 100], 5), 995, 'Test 72');
test(kConcatenationMaxSum([10, -20, 10, -20, 10], 4), 20, 'Test 73');
test(kConcatenationMaxSum([-1, -2, -3, -4, -5], 100000), 0, 'Test 74');
test(kConcatenationMaxSum([-10, 1, -2, 3, -4, 5, -6, 7, -8, 9], 3), 9, 'Test 75');
test(kConcatenationMaxSum([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 100000), 999999937, 'Test 76');
test(kConcatenationMaxSum([1, -1, 1, -1, 1], 5), 5, 'Test 77');
test(kConcatenationMaxSum([0, 0, 0, 0], 100000), 0, 'Test 78');
test(kConcatenationMaxSum([1, -1, 1, -1, 1], 100000), 100000, 'Test 79');
test(kConcatenationMaxSum([1, -1, 1, -1, 1], 99999), 99999, 'Test 80');
test(kConcatenationMaxSum([-5, -4, -3, -2, -1], 50000), 0, 'Test 81');
test(kConcatenationMaxSum([-1, 0, -2], 3), 0, 'Test 82');
test(kConcatenationMaxSum([10, -3, 4, -1, -2, 1, 5, -3], 50), 553, 'Test 83');
test(kConcatenationMaxSum([-10, -20, -30, -40], 100000), 0, 'Test 84');
test(kConcatenationMaxSum([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 10), 15, 'Test 85');
test(kConcatenationMaxSum([-5, -1, -8, -9], 2), 0, 'Test 86');
test(kConcatenationMaxSum([7, 1, 5, -3, 6, 7], 7), 161, 'Test 87');
test(kConcatenationMaxSum([-1, -2, -3, -4, -5], 7), 0, 'Test 88');
test(kConcatenationMaxSum([10000, -10000, 10000, -10000], 10000), 10000, 'Test 89');
test(kConcatenationMaxSum([-1, -2, -3, -4, -5], 2), 0, 'Test 90');
test(kConcatenationMaxSum([-10000, 10000, -10000, 10000, -10000, 10000, -10000, 10000, -10000, 10000], 50000), 10000, 'Test 91');
test(kConcatenationMaxSum([10, -9, 1, 2, 3], 50000), 350003, 'Test 92');
test(kConcatenationMaxSum([10000, -9999, 10000, -9999, 10000], 100000), 199993, 'Test 93');
test(kConcatenationMaxSum([100, -50, 25, -25, 10], 6), 400, 'Test 94');
test(kConcatenationMaxSum([5, -3, 5, -2, 1, 3], 10), 90, 'Test 95');
test(kConcatenationMaxSum([5, -3, 5, -2, 7, -1], 4), 45, 'Test 96');
test(kConcatenationMaxSum([-1, 4, -2, 3, -2], 100000), 200003, 'Test 97');
test(kConcatenationMaxSum([5, -4, 6, -3, 4], 10), 80, 'Test 98');
test(kConcatenationMaxSum([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], 5), 0, 'Test 99');
test(kConcatenationMaxSum([10000, -9999], 10000), 19999, 'Test 100');
test(kConcatenationMaxSum([10000, -9999, 9998, -9997, 9996, -9995, 9994, -9993, 9992, -9991], 5000), 34995, 'Test 101');
test(kConcatenationMaxSum([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], 100), 50, 'Test 102');
test(kConcatenationMaxSum([1, -1, 1, -1, 1, -1, 1], 100000), 100000, 'Test 103');
test(kConcatenationMaxSum([9, -4, 5, 1, -2, -3, 7], 100), 1300, 'Test 104');
test(kConcatenationMaxSum([-1, -2, -3, -4, -5], 3), 0, 'Test 105');
test(kConcatenationMaxSum([-5, -2, -3, -1], 3), 0, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

