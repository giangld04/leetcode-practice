// Test: 2485. Find The Pivot Integer
// 52 test cases from LeetCodeDataset
// Run: node test.js

const { pivotInteger } = require("./solution");

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

console.log("\n2485. Find The Pivot Integer\n");

test(pivotInteger(8), 6, 'Test 1');
test(pivotInteger(3), -1, 'Test 2');
test(pivotInteger(4), -1, 'Test 3');
test(pivotInteger(1), 1, 'Test 4');
test(pivotInteger(1000), -1, 'Test 5');
test(pivotInteger(10), -1, 'Test 6');
test(pivotInteger(625), -1, 'Test 7');
test(pivotInteger(576), -1, 'Test 8');
test(pivotInteger(729), -1, 'Test 9');
test(pivotInteger(144), -1, 'Test 10');
test(pivotInteger(49), 35, 'Test 11');
test(pivotInteger(12), -1, 'Test 12');
test(pivotInteger(900), -1, 'Test 13');
test(pivotInteger(324), -1, 'Test 14');
test(pivotInteger(100), -1, 'Test 15');
test(pivotInteger(50), -1, 'Test 16');
test(pivotInteger(5), -1, 'Test 17');
test(pivotInteger(841), -1, 'Test 18');
test(pivotInteger(289), -1, 'Test 19');
test(pivotInteger(550), -1, 'Test 20');
test(pivotInteger(99), -1, 'Test 21');
test(pivotInteger(64), -1, 'Test 22');
test(pivotInteger(17), -1, 'Test 23');
test(pivotInteger(484), -1, 'Test 24');
test(pivotInteger(2), -1, 'Test 25');
test(pivotInteger(225), -1, 'Test 26');
test(pivotInteger(784), -1, 'Test 27');
test(pivotInteger(250), -1, 'Test 28');
test(pivotInteger(999), -1, 'Test 29');
test(pivotInteger(35), -1, 'Test 30');
test(pivotInteger(169), -1, 'Test 31');
test(pivotInteger(75), -1, 'Test 32');
test(pivotInteger(256), -1, 'Test 33');
test(pivotInteger(36), -1, 'Test 34');
test(pivotInteger(529), -1, 'Test 35');
test(pivotInteger(20), -1, 'Test 36');
test(pivotInteger(676), -1, 'Test 37');
test(pivotInteger(81), -1, 'Test 38');
test(pivotInteger(48), -1, 'Test 39');
test(pivotInteger(325), -1, 'Test 40');
test(pivotInteger(15), -1, 'Test 41');
test(pivotInteger(441), -1, 'Test 42');
test(pivotInteger(961), -1, 'Test 43');
test(pivotInteger(400), -1, 'Test 44');
test(pivotInteger(196), -1, 'Test 45');
test(pivotInteger(9), -1, 'Test 46');
test(pivotInteger(121), -1, 'Test 47');
test(pivotInteger(361), -1, 'Test 48');
test(pivotInteger(700), -1, 'Test 49');
test(pivotInteger(500), -1, 'Test 50');
test(pivotInteger(7), -1, 'Test 51');
test(pivotInteger(25), -1, 'Test 52');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

