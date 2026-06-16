// Test: 13. Roman To Integer
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { romanToInt } = require("./solution");

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

console.log("\n13. Roman To Integer\n");

test(romanToInt("XCIX"), 99, 'Test 1');
test(romanToInt("MMCMXCIX"), 2999, 'Test 2');
test(romanToInt("MMMCMXCIX"), 3999, 'Test 3');
test(romanToInt("DCXXI"), 621, 'Test 4');
test(romanToInt("XC"), 90, 'Test 5');
test(romanToInt("VIII"), 8, 'Test 6');
test(romanToInt("XV"), 15, 'Test 7');
test(romanToInt("XXVII"), 27, 'Test 8');
test(romanToInt("IX"), 9, 'Test 9');
test(romanToInt("DCCLXXIX"), 779, 'Test 10');
test(romanToInt("XX"), 20, 'Test 11');
test(romanToInt("CDXLIV"), 444, 'Test 12');
test(romanToInt("LVIII"), 58, 'Test 13');
test(romanToInt("CM"), 900, 'Test 14');
test(romanToInt("D"), 500, 'Test 15');
test(romanToInt("X"), 10, 'Test 16');
test(romanToInt("IV"), 4, 'Test 17');
test(romanToInt("XXV"), 25, 'Test 18');
test(romanToInt("XXX"), 30, 'Test 19');
test(romanToInt("XL"), 40, 'Test 20');
test(romanToInt("MMMDCCCLXXXVIII"), 3888, 'Test 21');
test(romanToInt("XXXIX"), 39, 'Test 22');
test(romanToInt("XLIV"), 44, 'Test 23');
test(romanToInt("CCCXCIX"), 399, 'Test 24');
test(romanToInt("CD"), 400, 'Test 25');
test(romanToInt("LXX"), 70, 'Test 26');
test(romanToInt("CCC"), 300, 'Test 27');
test(romanToInt("MMM"), 3000, 'Test 28');
test(romanToInt("MCMXCIV"), 1994, 'Test 29');
test(romanToInt("III"), 3, 'Test 30');
test(romanToInt("MDCCCLXXIV"), 1874, 'Test 31');
test(romanToInt("CMXCIX"), 999, 'Test 32');
test(romanToInt("MMCDXCIX"), 2499, 'Test 33');
test(romanToInt("M"), 1000, 'Test 34');
test(romanToInt("CCXLVI"), 246, 'Test 35');
test(romanToInt("CC"), 200, 'Test 36');
test(romanToInt("DCCLXXIV"), 774, 'Test 37');
test(romanToInt("MCCCLXXXIX"), 1389, 'Test 38');
test(romanToInt("CMLXXXVII"), 987, 'Test 39');
test(romanToInt("XCIV"), 94, 'Test 40');
test(romanToInt("MDCCLXXVI"), 1776, 'Test 41');
test(romanToInt("DCCLXXVI"), 776, 'Test 42');
test(romanToInt("CMXLVII"), 947, 'Test 43');
test(romanToInt("MMMCMLXXIV"), 3974, 'Test 44');
test(romanToInt("MDCCCLXXI"), 1871, 'Test 45');
test(romanToInt("MMMDCCCLXXVII"), 3877, 'Test 46');
test(romanToInt("MMMCMXCXCIX"), 4089, 'Test 47');
test(romanToInt("MMMLXXVIII"), 3078, 'Test 48');
test(romanToInt("CCCLXXIV"), 374, 'Test 49');
test(romanToInt("MCMXLIV"), 1944, 'Test 50');
test(romanToInt("MMCDLXXI"), 2471, 'Test 51');
test(romanToInt("DCCCLXXXVIII"), 888, 'Test 52');
test(romanToInt("MMDCCCLXXIV"), 2874, 'Test 53');
test(romanToInt("MMCDXLIV"), 2444, 'Test 54');
test(romanToInt("MMDCCCLXXVII"), 2877, 'Test 55');
test(romanToInt("MMMDCCCXCIX"), 3899, 'Test 56');
test(romanToInt("LXXXIX"), 89, 'Test 57');
test(romanToInt("DCCCLXXVIII"), 878, 'Test 58');
test(romanToInt("MMXXIII"), 2023, 'Test 59');
test(romanToInt("LXXXVII"), 87, 'Test 60');
test(romanToInt("MMMCMXCXC"), 4080, 'Test 61');
test(romanToInt("DCCCXC"), 890, 'Test 62');
test(romanToInt("MMCMCCXCIX"), 3199, 'Test 63');
test(romanToInt("MMMDCCCLXXX"), 3880, 'Test 64');
test(romanToInt("MDCCCCLXXV"), 1975, 'Test 65');
test(romanToInt("MCMXCMLXXIX"), 2869, 'Test 66');
test(romanToInt("MMMDCCCLXXIX"), 3879, 'Test 67');
test(romanToInt("CDXC"), 490, 'Test 68');
test(romanToInt("MCMLXXI"), 1971, 'Test 69');
test(romanToInt("MCMLIV"), 1954, 'Test 70');
test(romanToInt("MMDCCCXCIX"), 2899, 'Test 71');
test(romanToInt("CCXCIX"), 299, 'Test 72');
test(romanToInt("MMMCMXCCLXXVIII"), 4168, 'Test 73');
test(romanToInt("CDXCIX"), 499, 'Test 74');
test(romanToInt("MMMCMLXXIX"), 3979, 'Test 75');
test(romanToInt("DCCLXXVIII"), 778, 'Test 76');
test(romanToInt("MDCCCLXXVIII"), 1878, 'Test 77');
test(romanToInt("MMDCCCLXXXVIII"), 2888, 'Test 78');
test(romanToInt("MCMXLVII"), 1947, 'Test 79');
test(romanToInt("DCXXVIII"), 628, 'Test 80');
test(romanToInt("CCXLVIII"), 248, 'Test 81');
test(romanToInt("MMMCDXLIV"), 3444, 'Test 82');
test(romanToInt("DCCCXCIX"), 899, 'Test 83');
test(romanToInt("DCCCXCIV"), 894, 'Test 84');
test(romanToInt("DCCCLXXIV"), 874, 'Test 85');
test(romanToInt("MCMLXXIII"), 1973, 'Test 86');
test(romanToInt("MMMCDXCIX"), 3499, 'Test 87');
test(romanToInt("MMCDLXXVIII"), 2478, 'Test 88');
test(romanToInt("LVIV"), 59, 'Test 89');
test(romanToInt("MMCDXXI"), 2421, 'Test 90');
test(romanToInt("MDCCCLXXVII"), 1877, 'Test 91');
test(romanToInt("LXXXIV"), 84, 'Test 92');
test(romanToInt("CMXLIV"), 944, 'Test 93');
test(romanToInt("MCMLXXXIV"), 1984, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

