// Test: 2177. Find Three Consecutive Integers That Sum To A Given Number
// 52 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfThree } = require("./solution");

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

console.log("\n2177. Find Three Consecutive Integers That Sum To A Given Number\n");

test(sumOfThree(9), [2, 3, 4], 'Test 1');
test(sumOfThree(1000000000001), [], 'Test 2');
test(sumOfThree(0), [-1, 0, 1], 'Test 3');
test(sumOfThree(4), [], 'Test 4');
test(sumOfThree(33), [10, 11, 12], 'Test 5');
test(sumOfThree(1000000000000), [], 'Test 6');
test(sumOfThree(3), [0, 1, 2], 'Test 7');
test(sumOfThree(15), [4, 5, 6], 'Test 8');
test(sumOfThree(100000000000000), [], 'Test 9');
test(sumOfThree(300000000000003), [100000000000000, 100000000000001, 100000000000002], 'Test 10');
test(sumOfThree(3000000000), [999999999, 1000000000, 1000000001], 'Test 11');
test(sumOfThree(3000000000000), [999999999999, 1000000000000, 1000000000001], 'Test 12');
test(sumOfThree(999), [332, 333, 334], 'Test 13');
test(sumOfThree(1000000000003), [], 'Test 14');
test(sumOfThree(27), [8, 9, 10], 'Test 15');
test(sumOfThree(45), [14, 15, 16], 'Test 16');
test(sumOfThree(999999999999), [333333333332, 333333333333, 333333333334], 'Test 17');
test(sumOfThree(300000000000000), [99999999999999, 100000000000000, 100000000000001], 'Test 18');
test(sumOfThree(99), [32, 33, 34], 'Test 19');
test(sumOfThree(1234567890125), [], 'Test 20');
test(sumOfThree(3000000000001), [], 'Test 21');
test(sumOfThree(123456789), [41152262, 41152263, 41152264], 'Test 22');
test(sumOfThree(777777777777777), [259259259259258, 259259259259259, 259259259259260], 'Test 23');
test(sumOfThree(2999999999997), [999999999998, 999999999999, 1000000000000], 'Test 24');
test(sumOfThree(299999999999997), [99999999999998, 99999999999999, 100000000000000], 'Test 25');
test(sumOfThree(105), [34, 35, 36], 'Test 26');
test(sumOfThree(999999999999999), [333333333333332, 333333333333333, 333333333333334], 'Test 27');
test(sumOfThree(1000), [], 'Test 28');
test(sumOfThree(81), [26, 27, 28], 'Test 29');
test(sumOfThree(1000000000000002), [333333333333333, 333333333333334, 333333333333335], 'Test 30');
test(sumOfThree(1000000000002), [333333333333, 333333333334, 333333333335], 'Test 31');
test(sumOfThree(987654321), [329218106, 329218107, 329218108], 'Test 32');
test(sumOfThree(7500000000000), [2499999999999, 2500000000000, 2500000000001], 'Test 33');
test(sumOfThree(1001), [], 'Test 34');
test(sumOfThree(21), [6, 7, 8], 'Test 35');
test(sumOfThree(123456789012345), [41152263004114, 41152263004115, 41152263004116], 'Test 36');
test(sumOfThree(6), [1, 2, 3], 'Test 37');
test(sumOfThree(299792458), [], 'Test 38');
test(sumOfThree(2), [], 'Test 39');
test(sumOfThree(1), [], 'Test 40');
test(sumOfThree(100), [], 'Test 41');
test(sumOfThree(1500000000000), [499999999999, 500000000000, 500000000001], 'Test 42');
test(sumOfThree(999999999), [333333332, 333333333, 333333334], 'Test 43');
test(sumOfThree(500000000000001), [166666666666666, 166666666666667, 166666666666668], 'Test 44');
test(sumOfThree(1000000), [], 'Test 45');
test(sumOfThree(1234567890123), [411522630040, 411522630041, 411522630042], 'Test 46');
test(sumOfThree(1234567890124), [], 'Test 47');
test(sumOfThree(1000000000000000), [], 'Test 48');
test(sumOfThree(180), [59, 60, 61], 'Test 49');
test(sumOfThree(101), [], 'Test 50');
test(sumOfThree(8999999999997), [2999999999998, 2999999999999, 3000000000000], 'Test 51');
test(sumOfThree(1000000000000001), [], 'Test 52');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

