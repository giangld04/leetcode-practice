// Test: 2954. Count the Number of Infection Sequences
// Run: node test.js

const { numberOfSequence } = require("./solution");

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

console.log("\n2954. Count the Number of Infection Sequences\n");

test(numberOfSequence(5, [0,4]), 4, 'Example 1: numberOfSequence(5, [0,4]) → 4');
test(numberOfSequence(4, [1]), 3, 'Example 2: numberOfSequence(4, [1]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

