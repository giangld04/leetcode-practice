// Test: 3757. Number of Effective Subsequences
// Run: node test.js

const { countEffective } = require("./solution");

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

console.log("\n3757. Number of Effective Subsequences\n");

test(countEffective([1,2,3]), 3, 'Example 1: countEffective([1,2,3]) → 3');
test(countEffective([7,4,6]), 4, 'Example 2: countEffective([7,4,6]) → 4');
test(countEffective([8,8]), 1, 'Example 3: countEffective([8,8]) → 1');
test(countEffective([2,2,1]), 5, 'Example 4: countEffective([2,2,1]) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

