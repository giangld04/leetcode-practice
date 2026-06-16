// Test: 3136. Valid Word
// 49 test cases from LeetCodeDataset
// Run: node test.js

const { isValid } = require("./solution");

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

console.log("\n3136. Valid Word\n");

test(isValid("234Adas"), true, 'Test 1');
test(isValid("b3"), false, 'Test 2');
test(isValid("a3$e"), false, 'Test 3');
test(isValid("N0C0ns0n4nts"), false, 'Test 4');
test(isValid("Zebra123"), true, 'Test 5');
test(isValid("1234567890"), false, 'Test 6');
test(isValid("Aeiou9"), false, 'Test 7');
test(isValid("123Aeiou"), false, 'Test 8');
test(isValid("Abcdefghij123"), true, 'Test 9');
test(isValid("ConsonantsAEIOU"), true, 'Test 10');
test(isValid("BCDFG"), false, 'Test 11');
test(isValid("qwerty"), true, 'Test 12');
test(isValid("AeiouBcdfg"), true, 'Test 13');
test(isValid("x9Y2oA"), true, 'Test 14');
test(isValid("Mix3dC4seAndNumb3rs"), true, 'Test 15');
test(isValid("Z1xY2v3"), false, 'Test 16');
test(isValid("Valid123"), true, 'Test 17');
test(isValid("bcd123"), false, 'Test 18');
test(isValid("bcdfg"), false, 'Test 19');
test(isValid("987Bcdfg"), false, 'Test 20');
test(isValid("aeiou123bcd"), true, 'Test 21');
test(isValid("AbC123dEf456gHi789"), true, 'Test 22');
test(isValid("5tr1n9w1thl3tt3rs"), false, 'Test 23');
test(isValid("123456"), false, 'Test 24');
test(isValid("mN4mN4mN4"), false, 'Test 25');
test(isValid("V0w3ls4ndC0ns0n4nts"), false, 'Test 26');
test(isValid("1a2b3c4d5e"), true, 'Test 27');
test(isValid("xyzXYZ0987"), false, 'Test 28');
test(isValid("123AEIOU"), false, 'Test 29');
test(isValid("123abcDEF"), true, 'Test 30');
test(isValid("N0Vow3ls"), true, 'Test 31');
test(isValid("7U8i9p"), true, 'Test 32');
test(isValid("000aA0"), false, 'Test 33');
test(isValid("0123456789"), false, 'Test 34');
test(isValid("A1b2C3d4E5"), true, 'Test 35');
test(isValid("12345Bcdfg"), false, 'Test 36');
test(isValid("AeIoUbCdfg"), true, 'Test 37');
test(isValid("Aeiou1234567890bcd"), true, 'Test 38');
test(isValid("abc123XYZ"), true, 'Test 39');
test(isValid("Th1s1s4V4l1d"), false, 'Test 40');
test(isValid("AEIOUxyz"), true, 'Test 41');
test(isValid("V1a2b3c4d5"), true, 'Test 42');
test(isValid("bcdfgh"), false, 'Test 43');
test(isValid("aeiouBCDFG"), true, 'Test 44');
test(isValid("BCDFGAEIOU123"), true, 'Test 45');
test(isValid("Vowels123"), true, 'Test 46');
test(isValid("987O"), false, 'Test 47');
test(isValid("AEIOU123"), false, 'Test 48');
test(isValid("aeiou"), false, 'Test 49');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

