// Test: 3725. Count Ways to Choose Coprime Integers from Rows
// Run: node test.js

const { countCoprime } = require("./solution");

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

console.log("\n3725. Count Ways to Choose Coprime Integers from Rows\n");

test(countCoprime([[1,2],[3,4]]), 3, 'Example 1: countCoprime([[1,2],[3,4]]) → 3');
test(countCoprime([[2,2],[2,2]]), 0, 'Example 2: countCoprime([[2,2],[2,2]]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

