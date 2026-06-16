// Test: 70. Climbing Stairs
// 16 test cases from LeetCodeDataset
// Run: node test.js

const { climbStairs } = require("./solution");

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

console.log("\n70. Climbing Stairs\n");

test(climbStairs(3), 3, 'Test 1');
test(climbStairs(45), 1836311903, 'Test 2');
test(climbStairs(4), 5, 'Test 3');
test(climbStairs(20), 10946, 'Test 4');
test(climbStairs(2), 2, 'Test 5');
test(climbStairs(1), 1, 'Test 6');
test(climbStairs(10), 89, 'Test 7');
test(climbStairs(5), 8, 'Test 8');
test(climbStairs(30), 1346269, 'Test 9');
test(climbStairs(15), 987, 'Test 10');
test(climbStairs(40), 165580141, 'Test 11');
test(climbStairs(12), 233, 'Test 12');
test(climbStairs(35), 14930352, 'Test 13');
test(climbStairs(18), 4181, 'Test 14');
test(climbStairs(7), 21, 'Test 15');
test(climbStairs(25), 121393, 'Test 16');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

