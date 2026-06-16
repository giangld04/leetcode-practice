// Test: 1911. Maximum Alternating Subsequence Sum
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { maxAlternatingSum } = require("./solution");

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

console.log("\n1911. Maximum Alternating Subsequence Sum\n");

test(maxAlternatingSum([100000, 99999, 99998, 99997, 99996]), 100000, 'Test 1');
test(maxAlternatingSum([4,2,5,3]), 7, 'Test 2');
test(maxAlternatingSum([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 3');
test(maxAlternatingSum([6,2,1,2,4,5]), 10, 'Test 4');
test(maxAlternatingSum([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 5');
test(maxAlternatingSum([1]), 1, 'Test 6');
test(maxAlternatingSum([100]), 100, 'Test 7');
test(maxAlternatingSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 8');
test(maxAlternatingSum([1, 1, 1, 1, 1]), 1, 'Test 9');
test(maxAlternatingSum([10,20,30,40,50]), 50, 'Test 10');
test(maxAlternatingSum([1, 100000, 1, 100000, 1]), 199999, 'Test 11');
test(maxAlternatingSum([5,6,7,8]), 8, 'Test 12');
test(maxAlternatingSum([1,2,3,4,5]), 5, 'Test 13');
test(maxAlternatingSum([100000, 1, 100000, 1, 100000]), 299998, 'Test 14');
test(maxAlternatingSum([10,20,30,40,50,1,2,3,4,5]), 54, 'Test 15');
test(maxAlternatingSum([1,3,5,7,9,2,4,6,8,10]), 17, 'Test 16');
test(maxAlternatingSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 17');
test(maxAlternatingSum([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 18');
test(maxAlternatingSum([5,4,3,2,1]), 5, 'Test 19');
test(maxAlternatingSum([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991]), 100000, 'Test 20');
test(maxAlternatingSum([100,0,100,0,100]), 300, 'Test 21');
test(maxAlternatingSum([100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000, 1]), 499996, 'Test 22');
test(maxAlternatingSum([1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 991, 'Test 23');
test(maxAlternatingSum([100, 50, 100, 50, 100, 50, 100]), 250, 'Test 24');
test(maxAlternatingSum([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 24, 'Test 25');
test(maxAlternatingSum([100, 10, 200, 20, 300, 30, 400, 40, 500, 50]), 1400, 'Test 26');
test(maxAlternatingSum([1, 100000, 2, 99999, 3, 99998, 4, 99997, 5, 99996]), 499976, 'Test 27');
test(maxAlternatingSum([1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10, 1, 11, 1, 12, 1, 13, 1, 14, 1, 15]), 106, 'Test 28');
test(maxAlternatingSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1]), 10, 'Test 29');
test(maxAlternatingSum([100000, 50000, 100000, 50000, 100000, 50000, 100000, 50000, 100000, 50000]), 300000, 'Test 30');
test(maxAlternatingSum([5, 3, 8, 1, 4, 7, 2, 6, 9]), 23, 'Test 31');
test(maxAlternatingSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 1000, 'Test 32');
test(maxAlternatingSum([10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40, 50, 60, 70]), 110, 'Test 33');
test(maxAlternatingSum([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 6, 'Test 34');
test(maxAlternatingSum([9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9]), 65, 'Test 35');
test(maxAlternatingSum([120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 120, 'Test 36');
test(maxAlternatingSum([100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000]), 499996, 'Test 37');
test(maxAlternatingSum([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]), 9, 'Test 38');
test(maxAlternatingSum([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 3, 'Test 39');
test(maxAlternatingSum([10, 5, 10, 5, 10, 5, 10, 5, 10, 5]), 30, 'Test 40');
test(maxAlternatingSum([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 20, 'Test 41');
test(maxAlternatingSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 10, 'Test 42');
test(maxAlternatingSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 43');
test(maxAlternatingSum([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 100000, 'Test 44');
test(maxAlternatingSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 19, 'Test 45');
test(maxAlternatingSum([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2]), 11, 'Test 46');
test(maxAlternatingSum([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8]), 15, 'Test 47');
test(maxAlternatingSum([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 7, 'Test 48');
test(maxAlternatingSum([5, 3, 8, 12, 4, 9, 2, 7, 6, 10]), 28, 'Test 49');
test(maxAlternatingSum([10, 15, 10, 5, 20, 25, 30, 35, 40, 45]), 55, 'Test 50');
test(maxAlternatingSum([100000, 99999, 100000, 99998, 100000, 99997, 100000, 99996, 100000, 99995]), 100010, 'Test 51');
test(maxAlternatingSum([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9]), 15, 'Test 52');
test(maxAlternatingSum([5, 3, 8, 6, 7, 2, 9, 4, 1, 10]), 27, 'Test 53');
test(maxAlternatingSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 15, 'Test 54');
test(maxAlternatingSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 55');
test(maxAlternatingSum([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 140, 'Test 56');
test(maxAlternatingSum([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 11, 'Test 57');
test(maxAlternatingSum([10, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50]), 100, 'Test 58');
test(maxAlternatingSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 29, 'Test 59');
test(maxAlternatingSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 28, 'Test 60');
test(maxAlternatingSum([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 14, 'Test 61');
test(maxAlternatingSum([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 17, 'Test 62');
test(maxAlternatingSum([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), 17, 'Test 63');
test(maxAlternatingSum([9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 0]), 50, 'Test 64');
test(maxAlternatingSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 65');
test(maxAlternatingSum([9, 7, 8, 5, 6, 3, 4, 1, 2, 10]), 21, 'Test 66');
test(maxAlternatingSum([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11]), 20, 'Test 67');
test(maxAlternatingSum([5, 3, 8, 6, 11, 9, 14, 12, 17, 15, 20, 18, 23, 21, 25]), 39, 'Test 68');
test(maxAlternatingSum([5, 3, 6, 7, 2, 9, 4, 10, 1, 11]), 32, 'Test 69');
test(maxAlternatingSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 11, 'Test 70');
test(maxAlternatingSum([5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 13, 'Test 71');
test(maxAlternatingSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 20, 'Test 72');
test(maxAlternatingSum([75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 75, 'Test 73');
test(maxAlternatingSum([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 21, 'Test 74');
test(maxAlternatingSum([5, 1, 4, 2, 7, 3, 6, 8]), 18, 'Test 75');
test(maxAlternatingSum([1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10]), 46, 'Test 76');
test(maxAlternatingSum([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 8, 'Test 77');
test(maxAlternatingSum([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 13, 'Test 78');
test(maxAlternatingSum([99999, 1, 99998, 2, 99997, 3, 99996, 4]), 399984, 'Test 79');
test(maxAlternatingSum([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 7, 'Test 80');
test(maxAlternatingSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 120, 'Test 81');
test(maxAlternatingSum([10, 5, 15, 10, 20, 15, 25, 20, 30, 25]), 50, 'Test 82');
test(maxAlternatingSum([5, 1, 4, 2, 3]), 9, 'Test 83');
test(maxAlternatingSum([8, 6, 7, 5, 3, 0, 9, 1, 4, 2, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 38, 'Test 84');
test(maxAlternatingSum([5, 1, 4, 2, 3, 1, 2, 1, 3, 2, 1]), 12, 'Test 85');
test(maxAlternatingSum([5, 3, 8, 12, 7, 10, 1, 15, 9, 20]), 42, 'Test 86');
test(maxAlternatingSum([100000, 1, 100000, 2, 100000, 3, 100000, 4, 100000, 5]), 499990, 'Test 87');
test(maxAlternatingSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 88');
test(maxAlternatingSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]), 110, 'Test 89');
test(maxAlternatingSum([100, 200, 150, 300, 250, 350, 400, 300, 450, 500]), 700, 'Test 90');
test(maxAlternatingSum([9, 1, 8, 2, 7, 3, 6, 4, 5, 5, 4, 6, 3, 7, 2, 8, 1, 9]), 45, 'Test 91');
test(maxAlternatingSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 150, 'Test 92');
test(maxAlternatingSum([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 476, 'Test 93');
test(maxAlternatingSum([1, 10, 100, 1000, 10000, 100000, 10000, 1000, 100, 10]), 100000, 'Test 94');
test(maxAlternatingSum([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 75, 'Test 95');
test(maxAlternatingSum([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 150, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

