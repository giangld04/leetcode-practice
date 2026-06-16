// Test: 2727. Is Object Empty
// Run: node test.js

const { isEmpty } = require("./solution");

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

console.log("\n2727. Is Object Empty\n");

test(isEmpty({"x": 5, "y": 42}), false, 'Example 1: isEmpty({"x": 5, "y": 42}) → false');
test(isEmpty({}), true, 'Example 2: isEmpty({}) → true');
test(isEmpty([null, false, 0]), false, 'Example 3: isEmpty([null, false, 0]) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

