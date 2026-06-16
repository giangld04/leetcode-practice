// Test: 3347. Maximum Frequency Of An Element After Performing Operations Ii
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { maxFrequency } = require("./solution");

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

console.log("\n3347. Maximum Frequency Of An Element After Performing Operations Ii\n");

test(maxFrequency([1,4,5], 1, 2), 2, 'Test 1');
test(maxFrequency([1,1000000000], 1000000000, 1), 2, 'Test 2');
test(maxFrequency([10,10,10,10], 0, 4), 4, 'Test 3');
test(maxFrequency([1,2,3,4,5], 10, 5), 5, 'Test 4');
test(maxFrequency([1,1000000000], 500000000, 1), 1, 'Test 5');
test(maxFrequency([1,2,3,4,5], 2, 3), 4, 'Test 6');
test(maxFrequency([10,10,10,10], 0, 3), 4, 'Test 7');
test(maxFrequency([5,11,20,20], 5, 1), 2, 'Test 8');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 15, 15), 4, 'Test 9');
test(maxFrequency([1, 2, 2, 2, 3, 3, 4, 4, 5, 5], 1, 9), 7, 'Test 10');
test(maxFrequency([10, 10, 20, 20, 30, 30, 40, 40, 50, 50], 15, 20), 8, 'Test 11');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 5), 10, 'Test 12');
test(maxFrequency([5, 8, 10, 15, 20], 5, 10), 4, 'Test 13');
test(maxFrequency([1, 3, 5, 7, 9], 2, 5), 3, 'Test 14');
test(maxFrequency([500000000, 500000001, 500000002, 500000003, 500000004], 2, 5), 5, 'Test 15');
test(maxFrequency([3, 9, 12, 15, 20], 4, 5), 3, 'Test 16');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 30), 9, 'Test 17');
test(maxFrequency([1, 5, 9, 13, 17], 4, 5), 3, 'Test 18');
test(maxFrequency([1, 2, 3, 4, 5, 6], 2, 5), 5, 'Test 19');
test(maxFrequency([1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 1, 15), 11, 'Test 20');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 10), 10, 'Test 21');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 15), 9, 'Test 22');
test(maxFrequency([1, 2, 3, 4, 5], 10, 10), 5, 'Test 23');
test(maxFrequency([10, 10, 20, 20, 30, 30, 40, 40], 10, 12), 6, 'Test 24');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15, 20), 4, 'Test 25');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 20), 3, 'Test 26');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 15), 10, 'Test 27');
test(maxFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 1, 6), 9, 'Test 28');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 2, 25), 5, 'Test 29');
test(maxFrequency([1, 5, 9, 13, 17, 21], 4, 10), 3, 'Test 30');
test(maxFrequency([10, 20, 30, 40, 50], 0, 5), 1, 'Test 31');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 10), 5, 'Test 32');
test(maxFrequency([10, 20, 30, 40, 50], 10, 5), 3, 'Test 33');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 10), 3, 'Test 34');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2, 15), 5, 'Test 35');
test(maxFrequency([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 1, 40), 15, 'Test 36');
test(maxFrequency([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57], 5, 20), 3, 'Test 37');
test(maxFrequency([1, 1, 1, 1, 1, 2, 2, 2, 2, 2], 1, 10), 10, 'Test 38');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 10), 10, 'Test 39');
test(maxFrequency([100, 200, 300, 400, 500], 50, 7), 2, 'Test 40');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 10), 20, 'Test 41');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50, 10), 2, 'Test 42');
test(maxFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 1, 10), 9, 'Test 43');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 10), 3, 'Test 44');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15, 15), 4, 'Test 45');
test(maxFrequency([1, 5, 9, 13, 17, 21], 4, 6), 3, 'Test 46');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10, 10), 10, 'Test 47');
test(maxFrequency([1, 1, 1, 1, 100], 99, 5), 5, 'Test 48');
test(maxFrequency([1, 3, 5, 7, 9], 3, 5), 4, 'Test 49');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 20), 10, 'Test 50');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50, 15), 2, 'Test 51');
test(maxFrequency([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4], 1, 10), 11, 'Test 52');
test(maxFrequency([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], 5, 0), 1, 'Test 53');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 0), 15, 'Test 54');
test(maxFrequency([100, 200, 300, 400, 500], 150, 7), 4, 'Test 55');
test(maxFrequency([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2, 5), 10, 'Test 56');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4, 20), 9, 'Test 57');
test(maxFrequency([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1, 30), 21, 'Test 58');
test(maxFrequency([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5], 2, 25), 25, 'Test 59');
test(maxFrequency([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 1, 15), 9, 'Test 60');
test(maxFrequency([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 1, 15), 12, 'Test 61');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 1, 9), 6, 'Test 62');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 5), 3, 'Test 63');
test(maxFrequency([1, 2, 3, 3, 3, 3, 4, 5, 6, 7], 2, 8), 8, 'Test 64');
test(maxFrequency([1, 2, 2, 3, 3, 3, 4], 1, 5), 6, 'Test 65');
test(maxFrequency([1, 1, 2, 2, 2, 3, 3, 4], 1, 5), 7, 'Test 66');
test(maxFrequency([5, 10, 15, 20, 25, 30], 7, 15), 3, 'Test 67');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7, 100), 15, 'Test 68');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100, 10), 10, 'Test 69');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 25), 3, 'Test 70');
test(maxFrequency([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], 10, 5), 3, 'Test 71');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 10), 7, 'Test 72');
test(maxFrequency([1, 1, 2, 3, 5, 8, 13, 21, 34], 10, 20), 8, 'Test 73');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5, 20), 2, 'Test 74');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 0), 1, 'Test 75');
test(maxFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 1, 15), 9, 'Test 76');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 2, 20), 5, 'Test 77');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10, 9), 10, 'Test 78');
test(maxFrequency([1, 2, 3, 4, 5], 2, 3), 4, 'Test 79');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 10), 10, 'Test 80');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7, 20), 15, 'Test 81');
test(maxFrequency([10, 15, 20, 25, 30], 5, 4), 3, 'Test 82');
test(maxFrequency([1, 5, 8, 12, 16], 3, 4), 2, 'Test 83');
test(maxFrequency([1, 5, 9, 14, 20], 3, 5), 2, 'Test 84');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 15), 7, 'Test 85');
test(maxFrequency([1, 100, 200, 300, 400, 500], 50, 10), 2, 'Test 86');
test(maxFrequency([1, 2, 2, 3, 4, 4, 5], 3, 10), 7, 'Test 87');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1, 20), 3, 'Test 88');
test(maxFrequency([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10, 25), 5, 'Test 89');
test(maxFrequency([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 1, 15), 15, 'Test 90');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0, 10), 15, 'Test 91');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5, 50), 2, 'Test 92');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3, 15), 7, 'Test 93');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0, 10), 10, 'Test 94');
test(maxFrequency([1, 3, 5, 7, 9], 2, 3), 3, 'Test 95');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 1, 10), 6, 'Test 96');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2, 10), 3, 'Test 97');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, 30), 11, 'Test 98');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 50), 3, 'Test 99');
test(maxFrequency([10, 20, 30, 40, 50, 60], 15, 20), 4, 'Test 100');
test(maxFrequency([1000000000, 999999999, 999999998, 999999997], 500000000, 3), 4, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

