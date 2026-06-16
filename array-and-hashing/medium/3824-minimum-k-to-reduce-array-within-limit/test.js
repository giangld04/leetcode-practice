// Test: 3824. Minimum K to Reduce Array Within Limit
// Run: node test.js

const { minimumK } = require("./solution");

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

console.log("\n3824. Minimum K to Reduce Array Within Limit\n");

test(minimumK([3,7,5]), 3, 'Example 1: minimumK([3,7,5]) → 3');
test(minimumK([1]), 1, 'Example 2: minimumK([1]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

