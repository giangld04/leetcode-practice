// Test: 12. Integer To Roman
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { intToRoman } = require("./solution");

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

console.log("\n12. Integer To Roman\n");

test(intToRoman(44), XLIV, 'Test 1');
test(intToRoman(9), IX, 'Test 2');
test(intToRoman(4), IV, 'Test 3');
test(intToRoman(2023), MMXXIII, 'Test 4');
test(intToRoman(589), DLXXXIX, 'Test 5');
test(intToRoman(444), CDXLIV, 'Test 6');
test(intToRoman(1000), M, 'Test 7');
test(intToRoman(789), DCCLXXXIX, 'Test 8');
test(intToRoman(58), LVIII, 'Test 9');
test(intToRoman(3999), MMMCMXCIX, 'Test 10');
test(intToRoman(399), CCCXCIX, 'Test 11');
test(intToRoman(3749), MMMDCCXLIX, 'Test 12');
test(intToRoman(1994), MCMXCIV, 'Test 13');
test(intToRoman(1), I, 'Test 14');
test(intToRoman(3549), MMMDXLIX, 'Test 15');
test(intToRoman(944), CMXLIV, 'Test 16');
test(intToRoman(199), CXCIX, 'Test 17');
test(intToRoman(60), LX, 'Test 18');
test(intToRoman(621), DCXXI, 'Test 19');
test(intToRoman(3000), MMM, 'Test 20');
test(intToRoman(1499), MCDXCIX, 'Test 21');
test(intToRoman(1602), MDCII, 'Test 22');
test(intToRoman(999), CMXCIX, 'Test 23');
test(intToRoman(207), CCVII, 'Test 24');
test(intToRoman(2078), MMLXXVIII, 'Test 25');
test(intToRoman(894), DCCCXCIV, 'Test 26');
test(intToRoman(2421), MMCDXXI, 'Test 27');
test(intToRoman(2999), MMCMXCIX, 'Test 28');
test(intToRoman(149), CXLIX, 'Test 29');
test(intToRoman(3949), MMMCMXLIX, 'Test 30');
test(intToRoman(99), XCIX, 'Test 31');
test(intToRoman(1492), MCDXCII, 'Test 32');
test(intToRoman(1234), MCCXXXIV, 'Test 33');
test(intToRoman(647), DCXLVII, 'Test 34');
test(intToRoman(844), DCCCXLIV, 'Test 35');
test(intToRoman(798), DCCXCVIII, 'Test 36');
test(intToRoman(1043), MXLIII, 'Test 37');
test(intToRoman(3001), MMMI, 'Test 38');
test(intToRoman(2345), MMCCCXLV, 'Test 39');
test(intToRoman(500), D, 'Test 40');
test(intToRoman(746), DCCXLVI, 'Test 41');
test(intToRoman(2944), MMCMXLIV, 'Test 42');
test(intToRoman(1500), MD, 'Test 43');
test(intToRoman(3357), MMMCCCLVII, 'Test 44');
test(intToRoman(3388), MMMCCCLXXXVIII, 'Test 45');
test(intToRoman(1597), MDXCVII, 'Test 46');
test(intToRoman(2737), MMDCCXXXVII, 'Test 47');
test(intToRoman(40), XL, 'Test 48');
test(intToRoman(2708), MMDCCVIII, 'Test 49');
test(intToRoman(349), CCCXLIX, 'Test 50');
test(intToRoman(799), DCCXCIX, 'Test 51');
test(intToRoman(1001), MI, 'Test 52');
test(intToRoman(583), DLXXXIII, 'Test 53');
test(intToRoman(2422), MMCDXXII, 'Test 54');
test(intToRoman(891), DCCCXCI, 'Test 55');
test(intToRoman(39), XXXIX, 'Test 56');
test(intToRoman(1444), MCDXLIV, 'Test 57');
test(intToRoman(1094), MXCIV, 'Test 58');
test(intToRoman(2751), MMDCCLI, 'Test 59');
test(intToRoman(3888), MMMDCCCLXXXVIII, 'Test 60');
test(intToRoman(2994), MMCMXCIV, 'Test 61');
test(intToRoman(876), DCCCLXXVI, 'Test 62');
test(intToRoman(1009), MIX, 'Test 63');
test(intToRoman(1648), MDCXLVIII, 'Test 64');
test(intToRoman(1066), MLXVI, 'Test 65');
test(intToRoman(2349), MMCCCXLIX, 'Test 66');
test(intToRoman(2763), MMDCCLXIII, 'Test 67');
test(intToRoman(1646), MDCXLVI, 'Test 68');
test(intToRoman(3499), MMMCDXCIX, 'Test 69');
test(intToRoman(1529), MDXXIX, 'Test 70');
test(intToRoman(1453), MCDLIII, 'Test 71');
test(intToRoman(1099), MXCIX, 'Test 72');
test(intToRoman(299), CCXCIX, 'Test 73');
test(intToRoman(89), LXXXIX, 'Test 74');
test(intToRoman(2074), MMLXXIV, 'Test 75');
test(intToRoman(2549), MMDXLIX, 'Test 76');
test(intToRoman(1423), MCDXXIII, 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

