// Test: 2665. Counter II
// Run: node test.js

const { createCounter } = require("./solution");

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

console.log("\n2665. Counter II\n");

test(createCounter(5, ["increment","reset","decrement"]), [6,5,4], 'Example 1: createCounter(5, ["increment","reset","decrement"]) → [6,5,4]');
test(createCounter(0, ["increment","increment","decrement","reset","reset"]), [1,2,1,0,0], 'Example 2: createCounter(0, ["increment","increment","decrement","reset","reset"]) → [1,2,1,0,0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

