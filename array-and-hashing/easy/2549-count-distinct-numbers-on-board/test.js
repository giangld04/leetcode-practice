// Test: 2549. Count Distinct Numbers On Board
// 50 test cases from LeetCodeDataset
// Run: node test.js

const { distinctIntegers } = require("./solution");

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

console.log("\n2549. Count Distinct Numbers On Board\n");

test(distinctIntegers(3), 2, 'Test 1');
test(distinctIntegers(99), 98, 'Test 2');
test(distinctIntegers(20), 19, 'Test 3');
test(distinctIntegers(100), 99, 'Test 4');
test(distinctIntegers(1), 1, 'Test 5');
test(distinctIntegers(10), 9, 'Test 6');
test(distinctIntegers(5), 4, 'Test 7');
test(distinctIntegers(97), 96, 'Test 8');
test(distinctIntegers(88), 87, 'Test 9');
test(distinctIntegers(29), 28, 'Test 10');
test(distinctIntegers(45), 44, 'Test 11');
test(distinctIntegers(61), 60, 'Test 12');
test(distinctIntegers(49), 48, 'Test 13');
test(distinctIntegers(47), 46, 'Test 14');
test(distinctIntegers(82), 81, 'Test 15');
test(distinctIntegers(70), 69, 'Test 16');
test(distinctIntegers(50), 49, 'Test 17');
test(distinctIntegers(34), 33, 'Test 18');
test(distinctIntegers(28), 27, 'Test 19');
test(distinctIntegers(60), 59, 'Test 20');
test(distinctIntegers(87), 86, 'Test 21');
test(distinctIntegers(30), 29, 'Test 22');
test(distinctIntegers(95), 94, 'Test 23');
test(distinctIntegers(67), 66, 'Test 24');
test(distinctIntegers(40), 39, 'Test 25');
test(distinctIntegers(37), 36, 'Test 26');
test(distinctIntegers(64), 63, 'Test 27');
test(distinctIntegers(17), 16, 'Test 28');
test(distinctIntegers(98), 97, 'Test 29');
test(distinctIntegers(2), 1, 'Test 30');
test(distinctIntegers(23), 22, 'Test 31');
test(distinctIntegers(73), 72, 'Test 32');
test(distinctIntegers(80), 79, 'Test 33');
test(distinctIntegers(89), 88, 'Test 34');
test(distinctIntegers(75), 74, 'Test 35');
test(distinctIntegers(71), 70, 'Test 36');
test(distinctIntegers(91), 90, 'Test 37');
test(distinctIntegers(77), 76, 'Test 38');
test(distinctIntegers(81), 80, 'Test 39');
test(distinctIntegers(13), 12, 'Test 40');
test(distinctIntegers(11), 10, 'Test 41');
test(distinctIntegers(85), 84, 'Test 42');
test(distinctIntegers(41), 40, 'Test 43');
test(distinctIntegers(31), 30, 'Test 44');
test(distinctIntegers(83), 82, 'Test 45');
test(distinctIntegers(65), 64, 'Test 46');
test(distinctIntegers(55), 54, 'Test 47');
test(distinctIntegers(7), 6, 'Test 48');
test(distinctIntegers(90), 89, 'Test 49');
test(distinctIntegers(25), 24, 'Test 50');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

