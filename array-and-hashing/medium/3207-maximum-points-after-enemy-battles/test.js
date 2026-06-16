// Test: 3207. Maximum Points After Enemy Battles
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { maximumPoints } = require("./solution");

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

console.log("\n3207. Maximum Points After Enemy Battles\n");

test(maximumPoints([1,1,1,1,1], 1), 5, 'Test 1');
test(maximumPoints([1,1000000000,1], 1000000001), 2000000002, 'Test 2');
test(maximumPoints([5,5,5,5,5], 15), 7, 'Test 3');
test(maximumPoints([2], 10), 5, 'Test 4');
test(maximumPoints([1], 0), 0, 'Test 5');
test(maximumPoints([5,5,5,5,5,5,5,5,5,5], 25), 14, 'Test 6');
test(maximumPoints([10,9,8,7,6,5,4,3,2,1], 55), 109, 'Test 7');
test(maximumPoints([1,2,3,4,5,6,7,8,9,10], 55), 109, 'Test 8');
test(maximumPoints([1,2,3,4,5], 15), 29, 'Test 9');
test(maximumPoints([3,2,2], 2), 3, 'Test 10');
test(maximumPoints([1,1,1,1,1,1,1,1,1,1], 5), 14, 'Test 11');
test(maximumPoints([10,20,30], 5), 0, 'Test 12');
test(maximumPoints([1000000000], 1000000000), 1, 'Test 13');
test(maximumPoints([10,10,10,10,10], 50), 9, 'Test 14');
test(maximumPoints([5,4,3,2,1], 15), 29, 'Test 15');
test(maximumPoints([1,1,1,1,1], 5), 9, 'Test 16');
test(maximumPoints([10,9,8,7,6,5,4,3,2,1], 5), 59, 'Test 17');
test(maximumPoints([1,2,3,4,5,6,7,8,9,10], 1), 55, 'Test 18');
test(maximumPoints([1,2,3,4,5], 10), 24, 'Test 19');
test(maximumPoints([10,20,30], 15), 6, 'Test 20');
test(maximumPoints([10, 20, 30, 40, 50], 100), 24, 'Test 21');
test(maximumPoints([100, 200, 300, 400, 500], 150), 15, 'Test 22');
test(maximumPoints([100, 200, 300, 400, 500], 100), 15, 'Test 23');
test(maximumPoints([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 10), 53, 'Test 24');
test(maximumPoints([100, 200, 300, 400, 500], 250), 16, 'Test 25');
test(maximumPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 219, 'Test 26');
test(maximumPoints([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 64, 'Test 27');
test(maximumPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 99), 18, 'Test 28');
test(maximumPoints([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 10), 39, 'Test 29');
test(maximumPoints([100, 200, 300, 400, 500], 1000), 24, 'Test 30');
test(maximumPoints([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 29, 'Test 31');
test(maximumPoints([30, 20, 10, 5, 2, 1], 20), 87, 'Test 32');
test(maximumPoints([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 59, 'Test 33');
test(maximumPoints([1, 10, 100, 1000, 10000], 5000), 16110, 'Test 34');
test(maximumPoints([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15), 29, 'Test 35');
test(maximumPoints([9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 59, 'Test 36');
test(maximumPoints([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 10), 17, 'Test 37');
test(maximumPoints([1, 10, 100, 1000, 10000], 10000), 21110, 'Test 38');
test(maximumPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 55, 'Test 39');
test(maximumPoints([2, 3, 5, 7, 11, 13, 17, 19], 50), 62, 'Test 40');
test(maximumPoints([1000000000, 500000000, 250000000], 1000000000), 10, 'Test 41');
test(maximumPoints([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 45), Error: integer division or modulo by zero, 'Test 42');
test(maximumPoints([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 15), 44, 'Test 43');
test(maximumPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100), 19, 'Test 44');
test(maximumPoints([5, 3, 1, 2, 4, 6], 3), 23, 'Test 45');
test(maximumPoints([9, 8, 7, 6, 5, 4, 3, 2, 1], 45), 89, 'Test 46');
test(maximumPoints([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 14, 'Test 47');
test(maximumPoints([5, 4, 3, 2, 1], 15), 29, 'Test 48');
test(maximumPoints([5, 3, 8, 2, 10], 7), 16, 'Test 49');
test(maximumPoints([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 0, 'Test 50');
test(maximumPoints([5, 3, 7, 2, 8, 1, 4], 10), 39, 'Test 51');
test(maximumPoints([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 27), 18, 'Test 52');
test(maximumPoints([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 15), 58, 'Test 53');
test(maximumPoints([5, 3, 8, 6, 2, 7], 10), 19, 'Test 54');
test(maximumPoints([1, 3, 5, 7, 9], 20), 44, 'Test 55');
test(maximumPoints([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 25), 66, 'Test 56');
test(maximumPoints([10, 5, 15, 20, 25, 30, 35, 40, 45, 50], 50), 64, 'Test 57');
test(maximumPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10), 10, 'Test 58');
test(maximumPoints([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 59, 'Test 59');
test(maximumPoints([5, 3, 6, 2, 8, 1], 10), 34, 'Test 60');
test(maximumPoints([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 109, 'Test 61');
test(maximumPoints([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 500000000), 1278, 'Test 62');
test(maximumPoints([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2500), 79, 'Test 63');
test(maximumPoints([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 55, 'Test 64');
test(maximumPoints([100, 200, 300, 400, 500], 500), 19, 'Test 65');
test(maximumPoints([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1024), 3070, 'Test 66');
test(maximumPoints([9, 7, 5, 3, 1], 15), 39, 'Test 67');
test(maximumPoints([1000000000, 500000000, 250000000, 125000000, 62500000], 1000000000), 46, 'Test 68');
test(maximumPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5), 0, 'Test 69');
test(maximumPoints([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 50), 109, 'Test 70');
test(maximumPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 69, 'Test 71');
test(maximumPoints([50, 25, 75, 100, 200, 300, 400], 100), 49, 'Test 72');
test(maximumPoints([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 21), 12, 'Test 73');
test(maximumPoints([50, 25, 75, 100, 200, 150], 125), 28, 'Test 74');
test(maximumPoints([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1), 0, 'Test 75');
test(maximumPoints([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 10), 14, 'Test 76');
test(maximumPoints([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 55, 'Test 77');
test(maximumPoints([5, 3, 8, 1, 9], 10), 35, 'Test 78');
test(maximumPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 309, 'Test 79');
test(maximumPoints([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 24, 'Test 80');
test(maximumPoints([1, 2, 3, 4, 5], 15), 29, 'Test 81');
test(maximumPoints([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 100), 113, 'Test 82');
test(maximumPoints([9, 8, 7, 6, 5, 4, 3, 2, 1], 20), 64, 'Test 83');
test(maximumPoints([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1], 1000), 2993, 'Test 84');
test(maximumPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 64, 'Test 85');
test(maximumPoints([20, 20, 20, 20, 20, 20, 20, 20, 20, 20], 100), 14, 'Test 86');
test(maximumPoints([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1023), 2045, 'Test 87');
test(maximumPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 109, 'Test 88');
test(maximumPoints([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1024), 2046, 'Test 89');
test(maximumPoints([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 119, 'Test 90');
test(maximumPoints([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 100), 368, 'Test 91');
test(maximumPoints([5, 5, 5, 5, 5], 15), 7, 'Test 92');
test(maximumPoints([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 50), 79, 'Test 93');
test(maximumPoints([10, 20, 30, 40, 50], 30), 17, 'Test 94');
test(maximumPoints([1, 2, 3, 4, 5], 10), 24, 'Test 95');
test(maximumPoints([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 20), 63, 'Test 96');
test(maximumPoints([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 100), 64, 'Test 97');
test(maximumPoints([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 19, 'Test 98');
test(maximumPoints([9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 49, 'Test 99');
test(maximumPoints([1000000000, 1000000000, 1000000000], 1500000000), 3, 'Test 100');
test(maximumPoints([100, 200, 300], 1000), 15, 'Test 101');
test(maximumPoints([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 500), 104, 'Test 102');
test(maximumPoints([3, 2, 2, 4, 1, 5], 6), 22, 'Test 103');
test(maximumPoints([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 100), 199, 'Test 104');
test(maximumPoints([10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 36, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

