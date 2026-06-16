// Test: 2481. Minimum Cuts To Divide A Circle
// 44 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfCuts } = require("./solution");

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

console.log("\n2481. Minimum Cuts To Divide A Circle\n");

test(numberOfCuts(3), 3, 'Test 1');
test(numberOfCuts(100), 50, 'Test 2');
test(numberOfCuts(4), 2, 'Test 3');
test(numberOfCuts(99), 99, 'Test 4');
test(numberOfCuts(17), 17, 'Test 5');
test(numberOfCuts(2), 1, 'Test 6');
test(numberOfCuts(1), 0, 'Test 7');
test(numberOfCuts(50), 25, 'Test 8');
test(numberOfCuts(7), 7, 'Test 9');
test(numberOfCuts(10), 5, 'Test 10');
test(numberOfCuts(5), 5, 'Test 11');
test(numberOfCuts(97), 97, 'Test 12');
test(numberOfCuts(61), 61, 'Test 13');
test(numberOfCuts(49), 49, 'Test 14');
test(numberOfCuts(12), 6, 'Test 15');
test(numberOfCuts(21), 21, 'Test 16');
test(numberOfCuts(60), 30, 'Test 17');
test(numberOfCuts(30), 15, 'Test 18');
test(numberOfCuts(40), 20, 'Test 19');
test(numberOfCuts(64), 32, 'Test 20');
test(numberOfCuts(33), 33, 'Test 21');
test(numberOfCuts(37), 37, 'Test 22');
test(numberOfCuts(16), 8, 'Test 23');
test(numberOfCuts(23), 23, 'Test 24');
test(numberOfCuts(73), 73, 'Test 25');
test(numberOfCuts(42), 21, 'Test 26');
test(numberOfCuts(90), 45, 'Test 27');
test(numberOfCuts(8), 4, 'Test 28');
test(numberOfCuts(79), 79, 'Test 29');
test(numberOfCuts(89), 89, 'Test 30');
test(numberOfCuts(75), 75, 'Test 31');
test(numberOfCuts(32), 16, 'Test 32');
test(numberOfCuts(20), 10, 'Test 33');
test(numberOfCuts(19), 19, 'Test 34');
test(numberOfCuts(91), 91, 'Test 35');
test(numberOfCuts(81), 81, 'Test 36');
test(numberOfCuts(11), 11, 'Test 37');
test(numberOfCuts(15), 15, 'Test 38');
test(numberOfCuts(85), 85, 'Test 39');
test(numberOfCuts(41), 41, 'Test 40');
test(numberOfCuts(9), 9, 'Test 41');
test(numberOfCuts(6), 3, 'Test 42');
test(numberOfCuts(13), 13, 'Test 43');
test(numberOfCuts(25), 25, 'Test 44');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

