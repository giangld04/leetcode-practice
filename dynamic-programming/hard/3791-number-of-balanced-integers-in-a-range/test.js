// Test: 3791. Number of Balanced Integers in a Range
// Run: node test.js

const { countBalanced } = require("./solution");

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

console.log("\n3791. Number of Balanced Integers in a Range\n");

test(countBalanced(1, 100), 9, 'Example 1: countBalanced(1, 100) → 9');
test(countBalanced(120, 129), 1, 'Example 2: countBalanced(120, 129) → 1');
test(countBalanced(1234, 1234), 0, 'Example 3: countBalanced(1234, 1234) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

