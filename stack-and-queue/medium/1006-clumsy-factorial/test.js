// Test: 1006. Clumsy Factorial
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { clumsy } = require("./solution");

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

console.log("\n1006. Clumsy Factorial\n");

test(clumsy(8), 9, 'Test 1');
test(clumsy(3), 6, 'Test 2');
test(clumsy(100), 101, 'Test 3');
test(clumsy(4), 7, 'Test 4');
test(clumsy(10000), 10001, 'Test 5');
test(clumsy(9), 11, 'Test 6');
test(clumsy(5000), 5001, 'Test 7');
test(clumsy(6), 8, 'Test 8');
test(clumsy(2), 2, 'Test 9');
test(clumsy(9999), 9998, 'Test 10');
test(clumsy(1), 1, 'Test 11');
test(clumsy(1000), 1001, 'Test 12');
test(clumsy(7), 6, 'Test 13');
test(clumsy(10), 12, 'Test 14');
test(clumsy(5), 7, 'Test 15');
test(clumsy(12), 13, 'Test 16');
test(clumsy(21), 23, 'Test 17');
test(clumsy(2000), 2001, 'Test 18');
test(clumsy(7500), 7501, 'Test 19');
test(clumsy(104), 105, 'Test 20');
test(clumsy(50), 52, 'Test 21');
test(clumsy(300), 301, 'Test 22');
test(clumsy(28), 29, 'Test 23');
test(clumsy(30), 32, 'Test 24');
test(clumsy(99), 98, 'Test 25');
test(clumsy(6666), 6668, 'Test 26');
test(clumsy(17), 19, 'Test 27');
test(clumsy(999), 998, 'Test 28');
test(clumsy(18), 20, 'Test 29');
test(clumsy(20), 21, 'Test 30');
test(clumsy(24), 25, 'Test 31');
test(clumsy(7777), 7779, 'Test 32');
test(clumsy(11), 10, 'Test 33');
test(clumsy(15), 14, 'Test 34');
test(clumsy(14), 16, 'Test 35');
test(clumsy(31), 30, 'Test 36');
test(clumsy(500), 501, 'Test 37');
test(clumsy(25), 27, 'Test 38');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

