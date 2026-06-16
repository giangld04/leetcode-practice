// Test: 2749. Minimum Operations To Make The Integer Zero
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { makeTheIntegerZero } = require("./solution");

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

console.log("\n2749. Minimum Operations To Make The Integer Zero\n");

test(makeTheIntegerZero(8, 2), 2, 'Test 1');
test(makeTheIntegerZero(8, -1), 2, 'Test 2');
test(makeTheIntegerZero(7, -3), 3, 'Test 3');
test(makeTheIntegerZero(1, 0), 1, 'Test 4');
test(makeTheIntegerZero(15, -3), 3, 'Test 5');
test(makeTheIntegerZero(10, -3), 2, 'Test 6');
test(makeTheIntegerZero(1, 1), -1, 'Test 7');
test(makeTheIntegerZero(15, -5), 4, 'Test 8');
test(makeTheIntegerZero(31, -2), 3, 'Test 9');
test(makeTheIntegerZero(123456789, 987654321), -1, 'Test 10');
test(makeTheIntegerZero(100, -10), 3, 'Test 11');
test(makeTheIntegerZero(64, -1), 2, 'Test 12');
test(makeTheIntegerZero(1000000000, -1000000000), 12, 'Test 13');
test(makeTheIntegerZero(5, 7), -1, 'Test 14');
test(makeTheIntegerZero(3, -2), 3, 'Test 15');
test(makeTheIntegerZero(10, -1), 2, 'Test 16');
test(makeTheIntegerZero(8, -3), 3, 'Test 17');
test(makeTheIntegerZero(1048576, -512), 2, 'Test 18');
test(makeTheIntegerZero(1000000000, 1), 19, 'Test 19');
test(makeTheIntegerZero(1, 2), -1, 'Test 20');
test(makeTheIntegerZero(1073741824, -536870912), 2, 'Test 21');
test(makeTheIntegerZero(123456789, 10000000), -1, 'Test 22');
test(makeTheIntegerZero(1048576, -1024), 2, 'Test 23');
test(makeTheIntegerZero(1024, -255), 8, 'Test 24');
test(makeTheIntegerZero(127, -1), 1, 'Test 25');
test(makeTheIntegerZero(123456789, -987654321), 16, 'Test 26');
test(makeTheIntegerZero(1000000000, -500000000), 11, 'Test 27');
test(makeTheIntegerZero(511, -1), 1, 'Test 28');
test(makeTheIntegerZero(536870912, 268435456), 1, 'Test 29');
test(makeTheIntegerZero(999999999, -999999998), 17, 'Test 30');
test(makeTheIntegerZero(32767, -2), 3, 'Test 31');
test(makeTheIntegerZero(63, -1), 1, 'Test 32');
test(makeTheIntegerZero(2147483647, 1), 27, 'Test 33');
test(makeTheIntegerZero(262143, 1), 15, 'Test 34');
test(makeTheIntegerZero(1023, -10), 5, 'Test 35');
test(makeTheIntegerZero(1000000000, -999999999), 19, 'Test 36');
test(makeTheIntegerZero(999999999, 0), 21, 'Test 37');
test(makeTheIntegerZero(1023, 1), 7, 'Test 38');
test(makeTheIntegerZero(1048575, -1), 1, 'Test 39');
test(makeTheIntegerZero(2047, -2), 3, 'Test 40');
test(makeTheIntegerZero(513, 2), 7, 'Test 41');
test(makeTheIntegerZero(16383, 1), 11, 'Test 42');
test(makeTheIntegerZero(1000000000, 100000000), -1, 'Test 43');
test(makeTheIntegerZero(2, -2), 1, 'Test 44');
test(makeTheIntegerZero(682, -1), 6, 'Test 45');
test(makeTheIntegerZero(1023, -1), 1, 'Test 46');
test(makeTheIntegerZero(4095, 3), 9, 'Test 47');
test(makeTheIntegerZero(63, -31), 5, 'Test 48');
test(makeTheIntegerZero(4503599627370496, -1024), 2, 'Test 49');
test(makeTheIntegerZero(1073741824, 268435456), 2, 'Test 50');
test(makeTheIntegerZero(1073741823, 1), 27, 'Test 51');
test(makeTheIntegerZero(1048576, -65536), 2, 'Test 52');
test(makeTheIntegerZero(98765, -49382), 9, 'Test 53');
test(makeTheIntegerZero(2048, -1024), 2, 'Test 54');
test(makeTheIntegerZero(511, -255), 7, 'Test 55');
test(makeTheIntegerZero(4095, -10), 5, 'Test 56');
test(makeTheIntegerZero(2048, 512), 2, 'Test 57');
test(makeTheIntegerZero(100, 50), -1, 'Test 58');
test(makeTheIntegerZero(1073741824, 2147483648), -1, 'Test 59');
test(makeTheIntegerZero(1023, -3), 3, 'Test 60');
test(makeTheIntegerZero(2147483647, -2147483647), 31, 'Test 61');
test(makeTheIntegerZero(1024, 0), 1, 'Test 62');
test(makeTheIntegerZero(15, 1), 3, 'Test 63');
test(makeTheIntegerZero(524287, -2), 3, 'Test 64');
test(makeTheIntegerZero(15, 3), 2, 'Test 65');
test(makeTheIntegerZero(131071, -1), 1, 'Test 66');
test(makeTheIntegerZero(1048575, 3), 17, 'Test 67');
test(makeTheIntegerZero(1073741824, 1073741823), 1, 'Test 68');
test(makeTheIntegerZero(1073741823, 2), 27, 'Test 69');
test(makeTheIntegerZero(1024, -128), 2, 'Test 70');
test(makeTheIntegerZero(128, -32), 2, 'Test 71');
test(makeTheIntegerZero(2048, 1024), 1, 'Test 72');
test(makeTheIntegerZero(2048, -512), 2, 'Test 73');
test(makeTheIntegerZero(549755813888, 1000000), 22, 'Test 74');
test(makeTheIntegerZero(255, -1), 1, 'Test 75');
test(makeTheIntegerZero(1048576, 1048576), -1, 'Test 76');
test(makeTheIntegerZero(987654321, -98765432), 12, 'Test 77');
test(makeTheIntegerZero(65535, 3), 13, 'Test 78');
test(makeTheIntegerZero(999999999, 1), 19, 'Test 79');
test(makeTheIntegerZero(42, -21), 5, 'Test 80');
test(makeTheIntegerZero(1048576, 1048575), 1, 'Test 81');
test(makeTheIntegerZero(1024, -100), 4, 'Test 82');
test(makeTheIntegerZero(1000000000, -100000000), 12, 'Test 83');
test(makeTheIntegerZero(512, -512), 1, 'Test 84');
test(makeTheIntegerZero(127, -2), 3, 'Test 85');
test(makeTheIntegerZero(1000, 333), -1, 'Test 86');
test(makeTheIntegerZero(500000000, 250000000), -1, 'Test 87');
test(makeTheIntegerZero(1048576, -262144), 2, 'Test 88');
test(makeTheIntegerZero(1048576, -524288), 2, 'Test 89');
test(makeTheIntegerZero(31, -1), 1, 'Test 90');
test(makeTheIntegerZero(68719476736, 1), 32, 'Test 91');
test(makeTheIntegerZero(1048576, -1), 2, 'Test 92');
test(makeTheIntegerZero(2, 1), 1, 'Test 93');
test(makeTheIntegerZero(100000, 10000), 6, 'Test 94');
test(makeTheIntegerZero(15, -1), 1, 'Test 95');
test(makeTheIntegerZero(999999999, 1000000000), -1, 'Test 96');
test(makeTheIntegerZero(1048576, 1024), 8, 'Test 97');
test(makeTheIntegerZero(1023, -512), 11, 'Test 98');
test(makeTheIntegerZero(268435456, -33554432), 2, 'Test 99');
test(makeTheIntegerZero(1073741824, -1073741824), 1, 'Test 100');
test(makeTheIntegerZero(999999999, -999999999), 17, 'Test 101');
test(makeTheIntegerZero(2147483647, -1000000000), 21, 'Test 102');
test(makeTheIntegerZero(1048576, -1048576), 1, 'Test 103');
test(makeTheIntegerZero(1, -1000000000), 13, 'Test 104');
test(makeTheIntegerZero(4294967295, -1), 1, 'Test 105');
test(makeTheIntegerZero(512, -256), 2, 'Test 106');
test(makeTheIntegerZero(63, 1), 5, 'Test 107');
test(makeTheIntegerZero(1048576, 1), 16, 'Test 108');
test(makeTheIntegerZero(255, 3), 5, 'Test 109');
test(makeTheIntegerZero(1048576, -1000), 8, 'Test 110');
test(makeTheIntegerZero(1048576, 0), 1, 'Test 111');
test(makeTheIntegerZero(1024, 512), 1, 'Test 112');
test(makeTheIntegerZero(1000000000, 500000000), -1, 'Test 113');
test(makeTheIntegerZero(1, -1), 1, 'Test 114');
test(makeTheIntegerZero(1023, -511), 7, 'Test 115');
test(makeTheIntegerZero(123456789, 123456789), -1, 'Test 116');
test(makeTheIntegerZero(8191, -1), 1, 'Test 117');
test(makeTheIntegerZero(1048575, 1), 18, 'Test 118');
test(makeTheIntegerZero(134217727, -1), 1, 'Test 119');
test(makeTheIntegerZero(999999999, 100000000), -1, 'Test 120');
test(makeTheIntegerZero(500000000, 500000000), -1, 'Test 121');
test(makeTheIntegerZero(123456789, -98765432), 12, 'Test 122');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

