// Test: 2648. Generate Fibonacci Sequence
// Run: node test.js

const { fibGenerator } = require("./solution");

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

console.log("\n2648. Generate Fibonacci Sequence\n");

test(fibGenerator(5), [0,1,1,2,3], 'Example 1: fibGenerator(5) → [0,1,1,2,3]');
test(fibGenerator(0), [], 'Example 2: fibGenerator(0) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

