// Test: 3731. Find Missing Elements
// Run: node test.js

const { findMissingElements } = require("./solution");

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

console.log("\n3731. Find Missing Elements\n");

test(findMissingElements([1,4,2,5]), [3], 'Example 1: findMissingElements([1,4,2,5]) → [3]');
test(findMissingElements([7,8,6,9]), [], 'Example 2: findMissingElements([7,8,6,9]) → []');
test(findMissingElements([5,1]), [2,3,4], 'Example 3: findMissingElements([5,1]) → [2,3,4]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

