// Test: 2220. Minimum Bit Flips To Convert Number
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { minBitFlips } = require("./solution");

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

console.log("\n2220. Minimum Bit Flips To Convert Number\n");

test(minBitFlips(123456789, 987654321), 15, 'Test 1');
test(minBitFlips(5, 2), 3, 'Test 2');
test(minBitFlips(1000000000, 500000000), 14, 'Test 3');
test(minBitFlips(8, 15), 3, 'Test 4');
test(minBitFlips(15, 8), 3, 'Test 5');
test(minBitFlips(5, 8), 3, 'Test 6');
test(minBitFlips(1000000000, 999999999), 10, 'Test 7');
test(minBitFlips(1023, 0), 10, 'Test 8');
test(minBitFlips(3, 4), 3, 'Test 9');
test(minBitFlips(29, 15), 2, 'Test 10');
test(minBitFlips(10, 7), 3, 'Test 11');
test(minBitFlips(54321, 12345), 5, 'Test 12');
test(minBitFlips(1023, 512), 9, 'Test 13');
test(minBitFlips(512, 256), 2, 'Test 14');
test(minBitFlips(0, 0), 0, 'Test 15');
test(minBitFlips(255, 0), 8, 'Test 16');
test(minBitFlips(15, 0), 4, 'Test 17');
test(minBitFlips(1, 1), 0, 'Test 18');
test(minBitFlips(1, 1023), 9, 'Test 19');
test(minBitFlips(5, 10), 4, 'Test 20');
test(minBitFlips(111111111, 999999999), 13, 'Test 21');
test(minBitFlips(1234567890, 1098765432), 16, 'Test 22');
test(minBitFlips(8589934591, 536870912), 32, 'Test 23');
test(minBitFlips(4294967295, 268435456), 31, 'Test 24');
test(minBitFlips(1, 1073741824), 2, 'Test 25');
test(minBitFlips(101010101, 111111111), 10, 'Test 26');
test(minBitFlips(1001100110, 1110011001), 20, 'Test 27');
test(minBitFlips(987654321, 123456789), 15, 'Test 28');
test(minBitFlips(1000000000, 0), 13, 'Test 29');
test(minBitFlips(888888888, 111111111), 18, 'Test 30');
test(minBitFlips(67890, 54321), 9, 'Test 31');
test(minBitFlips(536870912, 858993459), 15, 'Test 32');
test(minBitFlips(1048575, 2097151), 1, 'Test 33');
test(minBitFlips(1001001001, 1100110011), 13, 'Test 34');
test(minBitFlips(858993459, 1717986918), 16, 'Test 35');
test(minBitFlips(987654321, 876543219), 11, 'Test 36');
test(minBitFlips(123, 321), 5, 'Test 37');
test(minBitFlips(3486784401, 2123366401), 12, 'Test 38');
test(minBitFlips(1000000000, 1), 14, 'Test 39');
test(minBitFlips(1, 2147483647), 30, 'Test 40');
test(minBitFlips(1073741823, 134217728), 29, 'Test 41');
test(minBitFlips(999999999, 111111111), 13, 'Test 42');
test(minBitFlips(1100110011, 1010101010), 19, 'Test 43');
test(minBitFlips(999999999, 999999998), 1, 'Test 44');
test(minBitFlips(293847, 987654), 11, 'Test 45');
test(minBitFlips(111111111, 222222222), 14, 'Test 46');
test(minBitFlips(1001001, 1100110), 15, 'Test 47');
test(minBitFlips(123456789, 123456788), 1, 'Test 48');
test(minBitFlips(500000000, 500000001), 1, 'Test 49');
test(minBitFlips(33554431, 67108864), 26, 'Test 50');
test(minBitFlips(8388607, 8388608), 24, 'Test 51');
test(minBitFlips(13579, 24680), 8, 'Test 52');
test(minBitFlips(134217727, 268435455), 1, 'Test 53');
test(minBitFlips(54321, 100000), 7, 'Test 54');
test(minBitFlips(2147483647, 2147483646), 1, 'Test 55');
test(minBitFlips(16777215, 8388608), 23, 'Test 56');
test(minBitFlips(86420, 13579), 10, 'Test 57');
test(minBitFlips(1111111111, 2222222222), 16, 'Test 58');
test(minBitFlips(1, 1000000000), 14, 'Test 59');
test(minBitFlips(0, 1000000000), 13, 'Test 60');
test(minBitFlips(789012345, 543210987), 16, 'Test 61');
test(minBitFlips(536870911, 2147483648), 30, 'Test 62');
test(minBitFlips(123456789, 987654322), 17, 'Test 63');
test(minBitFlips(134217728, 268435455), 27, 'Test 64');
test(minBitFlips(536870912, 268435456), 2, 'Test 65');
test(minBitFlips(536870911, 1073741823), 1, 'Test 66');
test(minBitFlips(0, 1073741823), 30, 'Test 67');
test(minBitFlips(54321, 65432), 8, 'Test 68');
test(minBitFlips(268435455, 67108863), 2, 'Test 69');
test(minBitFlips(999999999, 888888888), 17, 'Test 70');
test(minBitFlips(135792468, 246813579), 16, 'Test 71');
test(minBitFlips(8675309, 5309867), 12, 'Test 72');
test(minBitFlips(999999999, 1), 20, 'Test 73');
test(minBitFlips(1610612735, 1342177280), 28, 'Test 74');
test(minBitFlips(1048575, 1), 19, 'Test 75');
test(minBitFlips(100000000, 1), 13, 'Test 76');
test(minBitFlips(134217728, 134217729), 1, 'Test 77');
test(minBitFlips(67890, 98765), 10, 'Test 78');
test(minBitFlips(1234, 5678), 8, 'Test 79');
test(minBitFlips(67890, 12345), 8, 'Test 80');
test(minBitFlips(1073741824, 2147483647), 30, 'Test 81');
test(minBitFlips(123456, 654321), 8, 'Test 82');
test(minBitFlips(65535, 32768), 15, 'Test 83');
test(minBitFlips(555555555, 444444444), 20, 'Test 84');
test(minBitFlips(2147483647, 0), 31, 'Test 85');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

