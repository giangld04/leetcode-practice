// Test: 2703. Return Length of Arguments Passed
// Run: node test.js

const { argumentsLength } = require("./solution");

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

console.log("\n2703. Return Length of Arguments Passed\n");

test(argumentsLength([5]), 1, 'Example 1: argumentsLength([5]) → 1');
test(argumentsLength([{}, null, "3"]), 3, 'Example 2: argumentsLength([{}, null, "3"]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

