// Test: 504. Base 7
// 47 test cases from LeetCodeDataset
// Run: node test.js

const { convertToBase7 } = require("./solution");

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

console.log("\n504. Base 7\n");

test(convertToBase7(-1000000), -11333311, 'Test 1');
test(convertToBase7(49), 100, 'Test 2');
test(convertToBase7(165), 324, 'Test 3');
test(convertToBase7(-10000000), -150666343, 'Test 4');
test(convertToBase7(0), 0, 'Test 5');
test(convertToBase7(10000000), 150666343, 'Test 6');
test(convertToBase7(16807), 100000, 'Test 7');
test(convertToBase7(100), 202, 'Test 8');
test(convertToBase7(-7), -10, 'Test 9');
test(convertToBase7(16), 22, 'Test 10');
test(convertToBase7(500000), 4151504, 'Test 11');
test(convertToBase7(-40353607), -1000000000, 'Test 12');
test(convertToBase7(1234567), 13331215, 'Test 13');
test(convertToBase7(-9999999), -150666342, 'Test 14');
test(convertToBase7(-4826464), -56011216, 'Test 15');
test(convertToBase7(-9876543), -146643405, 'Test 16');
test(convertToBase7(823543), 10000000, 'Test 17');
test(convertToBase7(-5764801), -100000000, 'Test 18');
test(convertToBase7(-987654), -11252313, 'Test 19');
test(convertToBase7(-500000), -4151504, 'Test 20');
test(convertToBase7(-1), -1, 'Test 21');
test(convertToBase7(117649), 1000000, 'Test 22');
test(convertToBase7(40353607), 1000000000, 'Test 23');
test(convertToBase7(-2401), -10000, 'Test 24');
test(convertToBase7(5764801), 100000000, 'Test 25');
test(convertToBase7(-117649), -1000000, 'Test 26');
test(convertToBase7(-16807), -100000, 'Test 27');
test(convertToBase7(-1234567), -13331215, 'Test 28');
test(convertToBase7(-343), -1000, 'Test 29');
test(convertToBase7(2401), 10000, 'Test 30');
test(convertToBase7(1049600), 11631026, 'Test 31');
test(convertToBase7(7), 10, 'Test 32');
test(convertToBase7(-823543), -10000000, 'Test 33');
test(convertToBase7(9999999), 150666342, 'Test 34');
test(convertToBase7(1), 1, 'Test 35');
test(convertToBase7(6827346), 112013541, 'Test 36');
test(convertToBase7(343), 1000, 'Test 37');
test(convertToBase7(9876543), 146643405, 'Test 38');
test(convertToBase7(-282475249), -10000000000, 'Test 39');
test(convertToBase7(-49), -100, 'Test 40');
test(convertToBase7(1000000), 11333311, 'Test 41');
test(convertToBase7(4826464), 56011216, 'Test 42');
test(convertToBase7(282475249), 10000000000, 'Test 43');
test(convertToBase7(-64), -121, 'Test 44');
test(convertToBase7(64), 121, 'Test 45');
test(convertToBase7(117648), 666666, 'Test 46');
test(convertToBase7(-6827346), -112013541, 'Test 47');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

