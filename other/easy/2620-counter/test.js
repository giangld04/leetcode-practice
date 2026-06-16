// Test: 2620. Counter
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

console.log("\n2620. Counter\n");

test(createCounter(10 
["call","call","call"]), [10,11,12], 'Example 1: createCounter(10 
["call","call","call"]) → [10,11,12]');
test(createCounter(-2
["call","call","call","call","call"]), [-2,-1,0,1,2], 'Example 2: createCounter(-2
["call","call","call","call","call"]) → [-2,-1,0,1,2]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

