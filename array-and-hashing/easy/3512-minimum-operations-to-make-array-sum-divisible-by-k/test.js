// Test: 3512. Minimum Operations to Make Array Sum Divisible by K
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3512. Minimum Operations to Make Array Sum Divisible by K\n");

test(minOperations([3,9,7], 5), 4, 'Example 1: minOperations([3,9,7], 5) → 4');
test(minOperations([4,1,3], 4), 0, 'Example 2: minOperations([4,1,3], 4) → 0');
test(minOperations([3,2], 6), 5, 'Example 3: minOperations([3,2], 6) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

