// Test: 1017. Convert To Base 2
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { baseNeg2 } = require("./solution");

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

console.log("\n1017. Convert To Base 2\n");

test(baseNeg2(3), 111, 'Test 1');
test(baseNeg2(104730), 1101110100101101110, 'Test 2');
test(baseNeg2(100), 110100100, 'Test 3');
test(baseNeg2(1000), 10000111000, 'Test 4');
test(baseNeg2(5), 101, 'Test 5');
test(baseNeg2(4), 100, 'Test 6');
test(baseNeg2(16), 10000, 'Test 7');
test(baseNeg2(10000), 111101100010000, 'Test 8');
test(baseNeg2(2), 110, 'Test 9');
test(baseNeg2(1024), 10000000000, 'Test 10');
test(baseNeg2(0), 0, 'Test 11');
test(baseNeg2(8), 11000, 'Test 12');
test(baseNeg2(1023), 10000000011, 'Test 13');
test(baseNeg2(1000000000), 1001100111011111101111000000000, 'Test 14');
test(baseNeg2(104729), 1101110100101101001, 'Test 15');
test(baseNeg2(15), 10011, 'Test 16');
test(baseNeg2(9), 11001, 'Test 17');
test(baseNeg2(6), 11010, 'Test 18');
test(baseNeg2(1), 1, 'Test 19');
test(baseNeg2(7), 11011, 'Test 20');
test(baseNeg2(10), 11110, 'Test 21');
test(baseNeg2(999999992), 1001100111011111101111000001000, 'Test 22');
test(baseNeg2(1099511627776), 10000000000000000000000000000000000000000, 'Test 23');
test(baseNeg2(999999999), 1001100111011111101111000000011, 'Test 24');
test(baseNeg2(999999996), 1001100111011111101111000001100, 'Test 25');
test(baseNeg2(2147483647), 110000000000000000000000000000011, 'Test 26');
test(baseNeg2(32767), 11000000000000011, 'Test 27');
test(baseNeg2(511), 11000000011, 'Test 28');
test(baseNeg2(536870912), 1100000000000000000000000000000, 'Test 29');
test(baseNeg2(4294967295), 100000000000000000000000000000011, 'Test 30');
test(baseNeg2(524288), 110000000000000000000, 'Test 31');
test(baseNeg2(2047), 1100000000011, 'Test 32');
test(baseNeg2(16383), 100000000000011, 'Test 33');
test(baseNeg2(999999998), 1001100111011111101111000000010, 'Test 34');
test(baseNeg2(134217728), 11000000000000000000000000000, 'Test 35');
test(baseNeg2(1073741823), 1000000000000000000000000000011, 'Test 36');
test(baseNeg2(800000000), 1110000111100110001100000000000, 'Test 37');
test(baseNeg2(1073741824), 1000000000000000000000000000000, 'Test 38');
test(baseNeg2(333333333), 10100001000100100011101010101, 'Test 39');
test(baseNeg2(4095), 1000000000011, 'Test 40');
test(baseNeg2(999999995), 1001100111011111101111000001111, 'Test 41');
test(baseNeg2(999999994), 1001100111011111101111000001110, 'Test 42');
test(baseNeg2(999999991), 1001100111011111101111000001011, 'Test 43');
test(baseNeg2(1048576), 100000000000000000000, 'Test 44');
test(baseNeg2(8192), 110000000000000, 'Test 45');
test(baseNeg2(255), 100000011, 'Test 46');
test(baseNeg2(8191), 110000000000011, 'Test 47');
test(baseNeg2(65536), 10000000000000000, 'Test 48');
test(baseNeg2(68719476736), 1000000000000000000000000000000000000, 'Test 49');
test(baseNeg2(1099511627775), 10000000000000000000000000000000000000011, 'Test 50');
test(baseNeg2(262144), 1000000000000000000, 'Test 51');
test(baseNeg2(65535), 10000000000000011, 'Test 52');
test(baseNeg2(131072), 1100000000000000000, 'Test 53');
test(baseNeg2(127), 110000011, 'Test 54');
test(baseNeg2(999999993), 1001100111011111101111000001001, 'Test 55');
test(baseNeg2(987654321), 1001111001000111011100111110001, 'Test 56');
test(baseNeg2(894752631), 1110101010101010010100010001011, 'Test 57');
test(baseNeg2(897410135), 1001010100000101010010110101011, 'Test 58');
test(baseNeg2(500000), 110001110000101100000, 'Test 59');
test(baseNeg2(32768), 11000000000000000, 'Test 60');
test(baseNeg2(999999997), 1001100111011111101111000001101, 'Test 61');
test(baseNeg2(1048575), 100000000000000000011, 'Test 62');
test(baseNeg2(500000000), 1100010110100101010010100000000, 'Test 63');
test(baseNeg2(31), 1100011, 'Test 64');
test(baseNeg2(1000000), 100110100011001000000, 'Test 65');
test(baseNeg2(123456789), 11000101011001101110100010101, 'Test 66');
test(baseNeg2(999999), 100110100011001000011, 'Test 67');
test(baseNeg2(1099511627777), 10000000000000000000000000000000000000001, 'Test 68');
test(baseNeg2(531441), 110000110110000110001, 'Test 69');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

