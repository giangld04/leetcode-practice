// Test: 2235. Add Two Integers
// 59 test cases from LeetCodeDataset
// Run: node test.js

const { sum } = require("./solution");

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

console.log("\n2235. Add Two Integers\n");

test(sum(100, -100), 0, 'Test 1');
test(sum(-10, 4), -6, 'Test 2');
test(sum(25, 25), 50, 'Test 3');
test(sum(-50, 50), 0, 'Test 4');
test(sum(99, 1), 100, 'Test 5');
test(sum(-50, 25), -25, 'Test 6');
test(sum(-30, -70), -100, 'Test 7');
test(sum(100, 100), 200, 'Test 8');
test(sum(12, 5), 17, 'Test 9');
test(sum(0, 0), 0, 'Test 10');
test(sum(-100, -100), -200, 'Test 11');
test(sum(-99, -1), -100, 'Test 12');
test(sum(50, -50), 0, 'Test 13');
test(sum(-45, -55), -100, 'Test 14');
test(sum(-73, -27), -100, 'Test 15');
test(sum(80, -30), 50, 'Test 16');
test(sum(23, -23), 0, 'Test 17');
test(sum(-75, 20), -55, 'Test 18');
test(sum(100, 0), 100, 'Test 19');
test(sum(0, -100), -100, 'Test 20');
test(sum(-1, -99), -100, 'Test 21');
test(sum(-45, 65), 20, 'Test 22');
test(sum(22, 78), 100, 'Test 23');
test(sum(98, 2), 100, 'Test 24');
test(sum(45, -55), -10, 'Test 25');
test(sum(-75, 25), -50, 'Test 26');
test(sum(-88, 12), -76, 'Test 27');
test(sum(-75, -25), -100, 'Test 28');
test(sum(1, 99), 100, 'Test 29');
test(sum(-100, 0), -100, 'Test 30');
test(sum(42, -42), 0, 'Test 31');
test(sum(-49, 51), 2, 'Test 32');
test(sum(-99, 1), -98, 'Test 33');
test(sum(0, 100), 100, 'Test 34');
test(sum(45, -45), 0, 'Test 35');
test(sum(50, -60), -10, 'Test 36');
test(sum(88, 12), 100, 'Test 37');
test(sum(-45, 55), 10, 'Test 38');
test(sum(67, -33), 34, 'Test 39');
test(sum(-33, -67), -100, 'Test 40');
test(sum(-30, 70), 40, 'Test 41');
test(sum(-67, 33), -34, 'Test 42');
test(sum(99, -1), 98, 'Test 43');
test(sum(73, 27), 100, 'Test 44');
test(sum(75, -25), 50, 'Test 45');
test(sum(-45, 45), 0, 'Test 46');
test(sum(-100, 100), 0, 'Test 47');
test(sum(-23, 23), 0, 'Test 48');
test(sum(67, 33), 100, 'Test 49');
test(sum(50, 50), 100, 'Test 50');
test(sum(-50, -50), -100, 'Test 51');
test(sum(28, -28), 0, 'Test 52');
test(sum(45, 55), 100, 'Test 53');
test(sum(33, 67), 100, 'Test 54');
test(sum(75, 25), 100, 'Test 55');
test(sum(49, 51), 100, 'Test 56');
test(sum(-23, 77), 54, 'Test 57');
test(sum(37, 63), 100, 'Test 58');
test(sum(29, 71), 100, 'Test 59');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

