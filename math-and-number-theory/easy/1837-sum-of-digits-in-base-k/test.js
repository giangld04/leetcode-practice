// Test: 1837. Sum Of Digits In Base K
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { sumBase } = require("./solution");

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

console.log("\n1837. Sum Of Digits In Base K\n");

test(sumBase(64, 2), 1, 'Test 1');
test(sumBase(7, 3), 3, 'Test 2');
test(sumBase(42, 5), 6, 'Test 3');
test(sumBase(50, 4), 5, 'Test 4');
test(sumBase(100, 3), 4, 'Test 5');
test(sumBase(10, 10), 1, 'Test 6');
test(sumBase(50, 7), 2, 'Test 7');
test(sumBase(99, 9), 3, 'Test 8');
test(sumBase(81, 9), 1, 'Test 9');
test(sumBase(34, 6), 9, 'Test 10');
test(sumBase(8, 2), 1, 'Test 11');
test(sumBase(45, 3), 3, 'Test 12');
test(sumBase(25, 2), 3, 'Test 13');
test(sumBase(81, 3), 1, 'Test 14');
test(sumBase(64, 10), 10, 'Test 15');
test(sumBase(27, 5), 3, 'Test 16');
test(sumBase(100, 2), 3, 'Test 17');
test(sumBase(1, 2), 1, 'Test 18');
test(sumBase(100, 4), 4, 'Test 19');
test(sumBase(72, 8), 2, 'Test 20');
test(sumBase(50, 5), 2, 'Test 21');
test(sumBase(17, 8), 3, 'Test 22');
test(sumBase(91, 8), 7, 'Test 23');
test(sumBase(73, 4), 4, 'Test 24');
test(sumBase(85, 7), 7, 'Test 25');
test(sumBase(63, 9), 7, 'Test 26');
test(sumBase(100, 7), 4, 'Test 27');
test(sumBase(63, 5), 7, 'Test 28');
test(sumBase(37, 5), 5, 'Test 29');
test(sumBase(95, 9), 7, 'Test 30');
test(sumBase(63, 7), 3, 'Test 31');
test(sumBase(55, 7), 7, 'Test 32');
test(sumBase(31, 5), 3, 'Test 33');
test(sumBase(32, 2), 1, 'Test 34');
test(sumBase(42, 4), 6, 'Test 35');
test(sumBase(19, 4), 4, 'Test 36');
test(sumBase(55, 6), 5, 'Test 37');
test(sumBase(100, 5), 4, 'Test 38');
test(sumBase(15, 6), 5, 'Test 39');
test(sumBase(45, 7), 9, 'Test 40');
test(sumBase(84, 4), 3, 'Test 41');
test(sumBase(31, 10), 4, 'Test 42');
test(sumBase(45, 6), 5, 'Test 43');
test(sumBase(97, 5), 9, 'Test 44');
test(sumBase(45, 10), 9, 'Test 45');
test(sumBase(50, 8), 8, 'Test 46');
test(sumBase(67, 5), 7, 'Test 47');
test(sumBase(37, 2), 3, 'Test 48');
test(sumBase(67, 7), 7, 'Test 49');
test(sumBase(29, 3), 3, 'Test 50');
test(sumBase(50, 6), 5, 'Test 51');
test(sumBase(72, 5), 8, 'Test 52');
test(sumBase(37, 6), 2, 'Test 53');
test(sumBase(85, 3), 3, 'Test 54');
test(sumBase(88, 3), 4, 'Test 55');
test(sumBase(64, 3), 4, 'Test 56');
test(sumBase(64, 4), 1, 'Test 57');
test(sumBase(95, 6), 10, 'Test 58');
test(sumBase(67, 3), 5, 'Test 59');
test(sumBase(100, 10), 1, 'Test 60');
test(sumBase(81, 5), 5, 'Test 61');
test(sumBase(55, 5), 3, 'Test 62');
test(sumBase(98, 2), 3, 'Test 63');
test(sumBase(58, 7), 4, 'Test 64');
test(sumBase(48, 4), 3, 'Test 65');
test(sumBase(31, 2), 5, 'Test 66');
test(sumBase(81, 8), 4, 'Test 67');
test(sumBase(42, 7), 6, 'Test 68');
test(sumBase(27, 9), 3, 'Test 69');
test(sumBase(77, 7), 5, 'Test 70');
test(sumBase(29, 8), 8, 'Test 71');
test(sumBase(97, 10), 16, 'Test 72');
test(sumBase(77, 4), 5, 'Test 73');
test(sumBase(13, 6), 3, 'Test 74');
test(sumBase(49, 9), 9, 'Test 75');
test(sumBase(55, 10), 10, 'Test 76');
test(sumBase(41, 4), 5, 'Test 77');
test(sumBase(98, 6), 8, 'Test 78');
test(sumBase(50, 3), 6, 'Test 79');
test(sumBase(85, 5), 5, 'Test 80');
test(sumBase(73, 8), 3, 'Test 81');
test(sumBase(100, 9), 4, 'Test 82');
test(sumBase(77, 8), 7, 'Test 83');
test(sumBase(85, 4), 4, 'Test 84');
test(sumBase(99, 3), 3, 'Test 85');
test(sumBase(29, 4), 5, 'Test 86');
test(sumBase(72, 6), 2, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

