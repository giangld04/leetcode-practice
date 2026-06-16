// Test: 507. Perfect Number
// 50 test cases from LeetCodeDataset
// Run: node test.js

const { checkPerfectNumber } = require("./solution");

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

console.log("\n507. Perfect Number\n");

test(checkPerfectNumber(8128), true, 'Test 1');
test(checkPerfectNumber(10), false, 'Test 2');
test(checkPerfectNumber(100000000), false, 'Test 3');
test(checkPerfectNumber(28), true, 'Test 4');
test(checkPerfectNumber(12), false, 'Test 5');
test(checkPerfectNumber(7), false, 'Test 6');
test(checkPerfectNumber(6), true, 'Test 7');
test(checkPerfectNumber(33550336), true, 'Test 8');
test(checkPerfectNumber(27), false, 'Test 9');
test(checkPerfectNumber(1), false, 'Test 10');
test(checkPerfectNumber(100), false, 'Test 11');
test(checkPerfectNumber(496), true, 'Test 12');
test(checkPerfectNumber(99999999), false, 'Test 13');
test(checkPerfectNumber(1046527), false, 'Test 14');
test(checkPerfectNumber(1234567), false, 'Test 15');
test(checkPerfectNumber(99999998), false, 'Test 16');
test(checkPerfectNumber(10000000), false, 'Test 17');
test(checkPerfectNumber(56949850), false, 'Test 18');
test(checkPerfectNumber(81284288), false, 'Test 19');
test(checkPerfectNumber(37), false, 'Test 20');
test(checkPerfectNumber(82589933), false, 'Test 21');
test(checkPerfectNumber(672280688), false, 'Test 22');
test(checkPerfectNumber(2096128), false, 'Test 23');
test(checkPerfectNumber(67891011), false, 'Test 24');
test(checkPerfectNumber(2305843008139952128), Execution timed out, 'Test 25');
test(checkPerfectNumber(32766), false, 'Test 26');
test(checkPerfectNumber(496000), false, 'Test 27');
test(checkPerfectNumber(96141120), false, 'Test 28');
test(checkPerfectNumber(11111111), false, 'Test 29');
test(checkPerfectNumber(497), false, 'Test 30');
test(checkPerfectNumber(987654321), false, 'Test 31');
test(checkPerfectNumber(33550337), false, 'Test 32');
test(checkPerfectNumber(1048576), false, 'Test 33');
test(checkPerfectNumber(2), false, 'Test 34');
test(checkPerfectNumber(495), false, 'Test 35');
test(checkPerfectNumber(2147483647), false, 'Test 36');
test(checkPerfectNumber(4690), false, 'Test 37');
test(checkPerfectNumber(8128000), false, 'Test 38');
test(checkPerfectNumber(100000), false, 'Test 39');
test(checkPerfectNumber(1073741823), false, 'Test 40');
test(checkPerfectNumber(600851475143), false, 'Test 41');
test(checkPerfectNumber(672), false, 'Test 42');
test(checkPerfectNumber(50000000), false, 'Test 43');
test(checkPerfectNumber(67229820), false, 'Test 44');
test(checkPerfectNumber(56456456), false, 'Test 45');
test(checkPerfectNumber(98304), false, 'Test 46');
test(checkPerfectNumber(1073741824), false, 'Test 47');
test(checkPerfectNumber(98765432), false, 'Test 48');
test(checkPerfectNumber(10000), false, 'Test 49');
test(checkPerfectNumber(119439360), false, 'Test 50');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

