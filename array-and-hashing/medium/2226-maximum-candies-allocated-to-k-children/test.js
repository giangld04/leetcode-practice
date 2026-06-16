// Test: 2226. Maximum Candies Allocated To K Children
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { maximumCandies } = require("./solution");

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

console.log("\n2226. Maximum Candies Allocated To K Children\n");

test(maximumCandies([10000000, 10000000, 10000000], 10000000), 2, 'Test 1');
test(maximumCandies([7,14,10,7], 3), 7, 'Test 2');
test(maximumCandies([5,8,6], 3), 5, 'Test 3');
test(maximumCandies([3,9,7], 6), 3, 'Test 4');
test(maximumCandies([10,20,30,40,50], 15), 10, 'Test 5');
test(maximumCandies([1,1,1,1,1,1,1,1,1,1], 5), 1, 'Test 6');
test(maximumCandies([7,10,10,10], 4), 7, 'Test 7');
test(maximumCandies([10000000], 1), 10000000, 'Test 8');
test(maximumCandies([7,7,7,7,7,7,7,7,7,7], 5), 7, 'Test 9');
test(maximumCandies([1,2,3,4,5,6,7,8,9,10], 5), 6, 'Test 10');
test(maximumCandies([10,20,30,40,50], 3), 30, 'Test 11');
test(maximumCandies([10,20,30,40,50], 30), 5, 'Test 12');
test(maximumCandies([10000000, 10000000, 10000000], 3), 10000000, 'Test 13');
test(maximumCandies([1000000], 1), 1000000, 'Test 14');
test(maximumCandies([2,5], 11), 0, 'Test 15');
test(maximumCandies([7,7,7,7,7], 5), 7, 'Test 16');
test(maximumCandies([1,1,1,1,1,1,1,1,1,1], 10), 1, 'Test 17');
test(maximumCandies([1,2,3,4,5], 15), 1, 'Test 18');
test(maximumCandies([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000], 300000), 1, 'Test 19');
test(maximumCandies([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 500000), 40, 'Test 20');
test(maximumCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 60, 'Test 21');
test(maximumCandies([10000000, 5000000, 2500000, 1250000, 625000], 1000000), 19, 'Test 22');
test(maximumCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 1, 'Test 23');
test(maximumCandies([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 1, 'Test 24');
test(maximumCandies([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 5555555555), 0, 'Test 25');
test(maximumCandies([10000000], 10000001), 0, 'Test 26');
test(maximumCandies([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 1000000000), 0, 'Test 27');
test(maximumCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000000000), 0, 'Test 28');
test(maximumCandies([1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000], 45000000), 1, 'Test 29');
test(maximumCandies([10000000, 10000000, 10000000, 10000000, 10000000], 1000000), 50, 'Test 30');
test(maximumCandies([1000000, 999999, 888888, 777777, 666666, 555555, 444444, 333333, 222222, 111111], 1000000), 5, 'Test 31');
test(maximumCandies([10000000, 10000000, 10000000, 10000000, 10000000], 5000000), 10, 'Test 32');
test(maximumCandies([9999999, 9999999, 9999999, 9999999, 9999999], 1), 9999999, 'Test 33');
test(maximumCandies([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 10), 1000000, 'Test 34');
test(maximumCandies([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 100), 10, 'Test 35');
test(maximumCandies([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 5000000), 2, 'Test 36');
test(maximumCandies([5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000], 10), 5000000, 'Test 37');
test(maximumCandies([1234567, 8901234, 5678901, 2345678, 9012345], 10000000), 2, 'Test 38');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000), 0, 'Test 39');
test(maximumCandies([5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000], 5), 5000000, 'Test 40');
test(maximumCandies([10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000], 1000000000000), 0, 'Test 41');
test(maximumCandies([9999999, 9999999, 9999999, 9999999, 9999999], 49999995), 1, 'Test 42');
test(maximumCandies([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 10), 9, 'Test 43');
test(maximumCandies([2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 11000000], 10000000), 6, 'Test 44');
test(maximumCandies([5000000, 5000000, 5000000, 5000000, 5000000], 10000000), 2, 'Test 45');
test(maximumCandies([10000000, 10000000, 10000000], 1000000), 29, 'Test 46');
test(maximumCandies([10000000, 10000000, 10000000], 3000000), 10, 'Test 47');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 0, 'Test 48');
test(maximumCandies([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50), 100, 'Test 49');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 1, 'Test 50');
test(maximumCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 7, 'Test 51');
test(maximumCandies([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 100), 3, 'Test 52');
test(maximumCandies([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000], 15000), 1, 'Test 53');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1, 'Test 54');
test(maximumCandies([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 10), 400, 'Test 55');
test(maximumCandies([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 25), 10, 'Test 56');
test(maximumCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 3, 'Test 57');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19), 1, 'Test 58');
test(maximumCandies([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), 13, 'Test 59');
test(maximumCandies([10000000, 1000000, 100000, 10000, 1000, 100, 10, 1], 10000000), 1, 'Test 60');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30), 1, 'Test 61');
test(maximumCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 45), 1, 'Test 62');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000000), 0, 'Test 63');
test(maximumCandies([1000000, 1000000, 1000000, 1000000, 1000000], 4), 1000000, 'Test 64');
test(maximumCandies([10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000], 10000000), 10, 'Test 65');
test(maximumCandies([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 10, 'Test 66');
test(maximumCandies([10000000, 5000000, 2500000, 1250000, 625000, 312500, 156250], 1000000), 19, 'Test 67');
test(maximumCandies([10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000], 50000000), 2, 'Test 68');
test(maximumCandies([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 100), 4, 'Test 69');
test(maximumCandies([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000], 25), 600, 'Test 70');
test(maximumCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 1, 'Test 71');
test(maximumCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 35), 1, 'Test 72');
test(maximumCandies([9999999, 9999998, 9999997, 9999996, 9999995], 1000000000000), 0, 'Test 73');
test(maximumCandies([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), 5, 'Test 74');
test(maximumCandies([10000, 20000, 30000, 40000, 50000], 150000), 1, 'Test 75');
test(maximumCandies([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1024), 1, 'Test 76');
test(maximumCandies([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 500000000), 0, 'Test 77');
test(maximumCandies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1, 'Test 78');
test(maximumCandies([1000000, 1000000, 1000000, 1000000, 1000000], 250000), 20, 'Test 79');
test(maximumCandies([10000000, 10000000, 10000000, 10000000, 10000000], 5), 10000000, 'Test 80');
test(maximumCandies([5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000], 5000000), 10, 'Test 81');
test(maximumCandies([10000000, 5000000, 3000000, 2000000, 1000000], 1000000), 20, 'Test 82');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

