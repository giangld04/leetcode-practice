// Test: 69. Sqrtx
// 67 test cases from LeetCodeDataset
// Run: node test.js

const { mySqrt } = require("./solution");

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

console.log("\n69. Sqrtx\n");

test(mySqrt(2147483647), 46340, 'Test 1');
test(mySqrt(26), 5, 'Test 2');
test(mySqrt(4), 2, 'Test 3');
test(mySqrt(1), 1, 'Test 4');
test(mySqrt(25), 5, 'Test 5');
test(mySqrt(0), 0, 'Test 6');
test(mySqrt(101), 10, 'Test 7');
test(mySqrt(100), 10, 'Test 8');
test(mySqrt(8), 2, 'Test 9');
test(mySqrt(1025), 32, 'Test 10');
test(mySqrt(10), 3, 'Test 11');
test(mySqrt(1234567890123456789), 1111111106, 'Test 12');
test(mySqrt(40000000000), 200000, 'Test 13');
test(mySqrt(18014398509481984), 134217728, 'Test 14');
test(mySqrt(16384), 128, 'Test 15');
test(mySqrt(1000), 31, 'Test 16');
test(mySqrt(1524157875), 39040, 'Test 17');
test(mySqrt(2147483646), 46340, 'Test 18');
test(mySqrt(99), 9, 'Test 19');
test(mySqrt(4294967296), 65536, 'Test 20');
test(mySqrt(225), 15, 'Test 21');
test(mySqrt(1522756), 1234, 'Test 22');
test(mySqrt(17), 4, 'Test 23');
test(mySqrt(2147395600), 46340, 'Test 24');
test(mySqrt(15), 3, 'Test 25');
test(mySqrt(18446744073709551615), 4294967295, 'Test 26');
test(mySqrt(16777215), 4095, 'Test 27');
test(mySqrt(1000000), 1000, 'Test 28');
test(mySqrt(18014398509481983), 134217727, 'Test 29');
test(mySqrt(1000000001), 31622, 'Test 30');
test(mySqrt(169), 13, 'Test 31');
test(mySqrt(150), 12, 'Test 32');
test(mySqrt(2), 1, 'Test 33');
test(mySqrt(141421356237), 376060, 'Test 34');
test(mySqrt(10000), 100, 'Test 35');
test(mySqrt(4294967295), 65535, 'Test 36');
test(mySqrt(361), 19, 'Test 37');
test(mySqrt(30), 5, 'Test 38');
test(mySqrt(987654321), 31426, 'Test 39');
test(mySqrt(999999999), 31622, 'Test 40');
test(mySqrt(499999999), 22360, 'Test 41');
test(mySqrt(2048), 45, 'Test 42');
test(mySqrt(1024), 32, 'Test 43');
test(mySqrt(1048575), 1023, 'Test 44');
test(mySqrt(16777216), 4096, 'Test 45');
test(mySqrt(256), 16, 'Test 46');
test(mySqrt(131072), 362, 'Test 47');
test(mySqrt(2097152), 1448, 'Test 48');
test(mySqrt(441), 21, 'Test 49');
test(mySqrt(1048576), 1024, 'Test 50');
test(mySqrt(65536), 256, 'Test 51');
test(mySqrt(10000000), 3162, 'Test 52');
test(mySqrt(49), 7, 'Test 53');
test(mySqrt(144), 12, 'Test 54');
test(mySqrt(121), 11, 'Test 55');
test(mySqrt(1234567890123456788), 1111111106, 'Test 56');
test(mySqrt(4096), 64, 'Test 57');
test(mySqrt(196), 14, 'Test 58');
test(mySqrt(9223372036854775807), 3037000499, 'Test 59');
test(mySqrt(123456789), 11111, 'Test 60');
test(mySqrt(289), 17, 'Test 61');
test(mySqrt(324), 18, 'Test 62');
test(mySqrt(24), 4, 'Test 63');
test(mySqrt(16), 4, 'Test 64');
test(mySqrt(1000000000), 31622, 'Test 65');
test(mySqrt(3), 1, 'Test 66');
test(mySqrt(36028797018963968), 189812531, 'Test 67');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

