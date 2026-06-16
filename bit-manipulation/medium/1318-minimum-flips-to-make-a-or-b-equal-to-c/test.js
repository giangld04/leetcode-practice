// Test: 1318. Minimum Flips To Make A Or B Equal To C
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { minFlips } = require("./solution");

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

console.log("\n1318. Minimum Flips To Make A Or B Equal To C\n");

test(minFlips(10, 15, 25), 4, 'Test 1');
test(minFlips(2, 6, 5), 3, 'Test 2');
test(minFlips(1, 2, 3), 0, 'Test 3');
test(minFlips(8, 3, 11), 0, 'Test 4');
test(minFlips(4, 2, 7), 1, 'Test 5');
test(minFlips(1000000000, 1000000000, 1), 27, 'Test 6');
test(minFlips(123, 456, 789), 9, 'Test 7');
test(minFlips(1000000007, 1000000009, 1000000011), 1, 'Test 8');
test(minFlips(8388607, 16777215, 16777215), 0, 'Test 9');
test(minFlips(65535, 65535, 65535), 0, 'Test 10');
test(minFlips(987654321, 123456789, 864197532), 20, 'Test 11');
test(minFlips(123456789, 987654321, 135792468), 25, 'Test 12');
test(minFlips(1048575, 2097151, 3145727), 2, 'Test 13');
test(minFlips(123456789, 987654321, 1234567890), 26, 'Test 14');
test(minFlips(255, 128, 254), 1, 'Test 15');
test(minFlips(894967295, 1073741823, 2147483647), 1, 'Test 16');
test(minFlips(255, 255, 0), 16, 'Test 17');
test(minFlips(16777215, 33554431, 67108863), 1, 'Test 18');
test(minFlips(1023, 511, 1535), 2, 'Test 19');
test(minFlips(1023, 2047, 3071), 2, 'Test 20');
test(minFlips(1073741824, 536870912, 1610612736), 0, 'Test 21');
test(minFlips(255, 128, 383), 3, 'Test 22');
test(minFlips(987654, 321456, 654321), 9, 'Test 23');
test(minFlips(987654321, 348712387, 1), 30, 'Test 24');
test(minFlips(2147483647, 0, 2147483647), 0, 'Test 25');
test(minFlips(777, 888, 999), 6, 'Test 26');
test(minFlips(123456789, 987654321, 999999999), 10, 'Test 27');
test(minFlips(134217728, 67108864, 201326592), 0, 'Test 28');
test(minFlips(15, 30, 45), 4, 'Test 29');
test(minFlips(1023, 512, 1024), 12, 'Test 30');
test(minFlips(123456789, 987654321, 1000000000), 16, 'Test 31');
test(minFlips(123456789, 987654321, 987654321), 7, 'Test 32');
test(minFlips(134217727, 67108863, 201326592), 53, 'Test 33');
test(minFlips(1000000000, 1, 1000000001), 0, 'Test 34');
test(minFlips(32, 16, 48), 0, 'Test 35');
test(minFlips(14, 28, 42), 4, 'Test 36');
test(minFlips(8, 3, 15), 1, 'Test 37');
test(minFlips(999, 888, 777), 8, 'Test 38');
test(minFlips(2147483647, 2147483647, 0), 62, 'Test 39');
test(minFlips(1000000, 999999, 1000001), 5, 'Test 40');
test(minFlips(1073741823, 536870912, 805306368), 28, 'Test 41');
test(minFlips(8, 16, 24), 0, 'Test 42');
test(minFlips(1048575, 524287, 1572863), 2, 'Test 43');
test(minFlips(1000000000, 999999999, 1000000000), 9, 'Test 44');
test(minFlips(2147483647, 2147483647, 1), 60, 'Test 45');
test(minFlips(1000000000, 500000000, 1000000001), 8, 'Test 46');
test(minFlips(1023, 512, 768), 8, 'Test 47');
test(minFlips(134217727, 268435455, 335544319), 4, 'Test 48');
test(minFlips(897, 564, 231), 6, 'Test 49');
test(minFlips(511, 255, 127), 3, 'Test 50');
test(minFlips(134217727, 268435455, 536870911), 1, 'Test 51');
test(minFlips(1023, 511, 255), 3, 'Test 52');
test(minFlips(536870911, 268435455, 805306367), 2, 'Test 53');
test(minFlips(255, 511, 1023), 1, 'Test 54');
test(minFlips(255, 128, 191), 1, 'Test 55');
test(minFlips(1000000000, 1000000000, 500000000), 21, 'Test 56');
test(minFlips(1000000000, 500000000, 1500000000), 14, 'Test 57');
test(minFlips(65535, 131071, 262143), 1, 'Test 58');
test(minFlips(500, 600, 700), 3, 'Test 59');
test(minFlips(2147483647, 2147483647, 4294967295), 1, 'Test 60');
test(minFlips(65535, 32768, 98304), 16, 'Test 61');
test(minFlips(255, 128, 64), 8, 'Test 62');
test(minFlips(16777215, 255, 16777470), 19, 'Test 63');
test(minFlips(100000000, 200000000, 300000000), 10, 'Test 64');
test(minFlips(5349, 7281, 12630), 11, 'Test 65');
test(minFlips(123456789, 987654321, 101110101), 20, 'Test 66');
test(minFlips(29, 15, 31), 0, 'Test 67');
test(minFlips(7, 14, 21), 4, 'Test 68');
test(minFlips(3, 12, 15), 0, 'Test 69');
test(minFlips(1048576, 2097152, 3145727), 21, 'Test 70');
test(minFlips(25, 50, 75), 4, 'Test 71');
test(minFlips(500000000, 500000000, 1000000000), 21, 'Test 72');
test(minFlips(31, 15, 7), 3, 'Test 73');
test(minFlips(1, 1, 0), 2, 'Test 74');
test(minFlips(1048575, 1048576, 2097151), 0, 'Test 75');
test(minFlips(536870911, 268435455, 703687440), 32, 'Test 76');
test(minFlips(348712387, 987654321, 1000000000), 18, 'Test 77');
test(minFlips(170, 85, 255), 0, 'Test 78');
test(minFlips(987654, 321456, 1309110), 8, 'Test 79');
test(minFlips(1023, 512, 1535), 3, 'Test 80');
test(minFlips(999999, 888888, 777777), 8, 'Test 81');
test(minFlips(1048575, 524287, 262143), 3, 'Test 82');
test(minFlips(65535, 65535, 131071), 1, 'Test 83');
test(minFlips(89, 67, 45), 6, 'Test 84');
test(minFlips(1, 1023, 1023), 0, 'Test 85');
test(minFlips(858993459, 2576980377, 1717986918), 32, 'Test 86');
test(minFlips(65535, 32767, 98303), 2, 'Test 87');
test(minFlips(536870911, 1073741823, 2147483647), 1, 'Test 88');
test(minFlips(1, 1000000000, 1000000000), 1, 'Test 89');
test(minFlips(8, 3, 10), 1, 'Test 90');
test(minFlips(789, 456, 1245), 4, 'Test 91');
test(minFlips(4294967295, 2147483647, 4294967294), 2, 'Test 92');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

