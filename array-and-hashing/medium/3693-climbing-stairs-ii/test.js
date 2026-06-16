// Test: 3693. Climbing Stairs II
// Run: node test.js

const { climbStairs } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n3693. Climbing Stairs II\n");

test(climbStairs(4, [1,2,3,4]), 13, 'Example 1: climbStairs(4, [1,2,3,4]) → 13');
test(climbStairs(4, [5,1,6,2]), 11, 'Example 2: climbStairs(4, [5,1,6,2]) → 11');
test(climbStairs(3, [9,8,3]), 12, 'Example 3: climbStairs(3, [9,8,3]) → 12');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

