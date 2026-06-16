// Test: 172. Factorial Trailing Zeroes
// 71 test cases from LeetCodeDataset
// Run: node test.js

const { trailingZeroes } = require("./solution");

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

console.log("\n172. Factorial Trailing Zeroes\n");

test(trailingZeroes(0), 0, 'Test 1');
test(trailingZeroes(3), 0, 'Test 2');
test(trailingZeroes(10000), 2499, 'Test 3');
test(trailingZeroes(25), 6, 'Test 4');
test(trailingZeroes(100), 24, 'Test 5');
test(trailingZeroes(1000), 249, 'Test 6');
test(trailingZeroes(10), 2, 'Test 7');
test(trailingZeroes(5), 1, 'Test 8');
test(trailingZeroes(625), 156, 'Test 9');
test(trailingZeroes(15000), 3748, 'Test 10');
test(trailingZeroes(1875), 468, 'Test 11');
test(trailingZeroes(4000), 999, 'Test 12');
test(trailingZeroes(29), 6, 'Test 13');
test(trailingZeroes(2345), 583, 'Test 14');
test(trailingZeroes(99999), 24994, 'Test 15');
test(trailingZeroes(49), 10, 'Test 16');
test(trailingZeroes(125), 31, 'Test 17');
test(trailingZeroes(62499), 15618, 'Test 18');
test(trailingZeroes(4096), 1021, 'Test 19');
test(trailingZeroes(2000), 499, 'Test 20');
test(trailingZeroes(7500), 1874, 'Test 21');
test(trailingZeroes(50000), 12499, 'Test 22');
test(trailingZeroes(50), 12, 'Test 23');
test(trailingZeroes(2304), 573, 'Test 24');
test(trailingZeroes(30), 7, 'Test 25');
test(trailingZeroes(4), 0, 'Test 26');
test(trailingZeroes(99), 22, 'Test 27');
test(trailingZeroes(31249), 7806, 'Test 28');
test(trailingZeroes(15625), 3906, 'Test 29');
test(trailingZeroes(31250), 7812, 'Test 30');
test(trailingZeroes(2050), 511, 'Test 31');
test(trailingZeroes(1024), 253, 'Test 32');
test(trailingZeroes(250), 62, 'Test 33');
test(trailingZeroes(100000), 24999, 'Test 34');
test(trailingZeroes(15624), 3900, 'Test 35');
test(trailingZeroes(20000), 4999, 'Test 36');
test(trailingZeroes(2048), 509, 'Test 37');
test(trailingZeroes(8192), 2045, 'Test 38');
test(trailingZeroes(375), 93, 'Test 39');
test(trailingZeroes(999), 246, 'Test 40');
test(trailingZeroes(8000), 1998, 'Test 41');
test(trailingZeroes(62500), 15624, 'Test 42');
test(trailingZeroes(18), 3, 'Test 43');
test(trailingZeroes(5000), 1249, 'Test 44');
test(trailingZeroes(9999), 2495, 'Test 45');
test(trailingZeroes(20), 4, 'Test 46');
test(trailingZeroes(149), 35, 'Test 47');
test(trailingZeroes(19), 3, 'Test 48');
test(trailingZeroes(249), 59, 'Test 49');
test(trailingZeroes(1250), 312, 'Test 50');
test(trailingZeroes(24), 4, 'Test 51');
test(trailingZeroes(7654), 1911, 'Test 52');
test(trailingZeroes(150), 37, 'Test 53');
test(trailingZeroes(8750), 2186, 'Test 54');
test(trailingZeroes(15), 3, 'Test 55');
test(trailingZeroes(2500), 624, 'Test 56');
test(trailingZeroes(4999), 1245, 'Test 57');
test(trailingZeroes(200), 49, 'Test 58');
test(trailingZeroes(14), 2, 'Test 59');
test(trailingZeroes(1234), 305, 'Test 60');
test(trailingZeroes(9), 1, 'Test 61');
test(trailingZeroes(3125), 781, 'Test 62');
test(trailingZeroes(9876), 2467, 'Test 63');
test(trailingZeroes(7812), 1950, 'Test 64');
test(trailingZeroes(124), 28, 'Test 65');
test(trailingZeroes(1249), 308, 'Test 66');
test(trailingZeroes(499), 121, 'Test 67');
test(trailingZeroes(199), 47, 'Test 68');
test(trailingZeroes(1), 0, 'Test 69');
test(trailingZeroes(500), 124, 'Test 70');
test(trailingZeroes(180), 44, 'Test 71');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

