// Test: 3360. Stone Removal Game
// 29 test cases from LeetCodeDataset
// Run: node test.js

const { canAliceWin } = require("./solution");

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

console.log("\n3360. Stone Removal Game\n");

test(canAliceWin(8), false, 'Test 1');
test(canAliceWin(30), true, 'Test 2');
test(canAliceWin(15), true, 'Test 3');
test(canAliceWin(40), true, 'Test 4');
test(canAliceWin(12), true, 'Test 5');
test(canAliceWin(35), false, 'Test 6');
test(canAliceWin(20), false, 'Test 7');
test(canAliceWin(1), false, 'Test 8');
test(canAliceWin(50), true, 'Test 9');
test(canAliceWin(10), true, 'Test 10');
test(canAliceWin(25), false, 'Test 11');
test(canAliceWin(29), true, 'Test 12');
test(canAliceWin(45), false, 'Test 13');
test(canAliceWin(49), true, 'Test 14');
test(canAliceWin(47), false, 'Test 15');
test(canAliceWin(28), true, 'Test 16');
test(canAliceWin(37), false, 'Test 17');
test(canAliceWin(33), true, 'Test 18');
test(canAliceWin(17), true, 'Test 19');
test(canAliceWin(42), true, 'Test 20');
test(canAliceWin(22), false, 'Test 21');
test(canAliceWin(27), true, 'Test 22');
test(canAliceWin(46), false, 'Test 23');
test(canAliceWin(18), true, 'Test 24');
test(canAliceWin(19), false, 'Test 25');
test(canAliceWin(39), false, 'Test 26');
test(canAliceWin(48), false, 'Test 27');
test(canAliceWin(11), true, 'Test 28');
test(canAliceWin(38), false, 'Test 29');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

