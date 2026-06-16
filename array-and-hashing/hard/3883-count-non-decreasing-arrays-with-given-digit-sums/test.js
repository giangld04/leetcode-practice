// Test: 3883. Count Non Decreasing Arrays With Given Digit Sums
// Run: node test.js

const { countArrays } = require("./solution");

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

console.log("\n3883. Count Non Decreasing Arrays With Given Digit Sums\n");

test(countArrays([25,1]), 6, 'Example 1: countArrays([25,1]) → 6');
test(countArrays([1]), 4, 'Example 2: countArrays([1]) → 4');
test(countArrays([2,49,23]), 0, 'Example 3: countArrays([2,49,23]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

