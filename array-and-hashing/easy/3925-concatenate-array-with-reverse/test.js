// Test: 3925. Concatenate Array With Reverse
// Run: node test.js

const { concatWithReverse } = require("./solution");

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

console.log("\n3925. Concatenate Array With Reverse\n");

test(concatWithReverse([1,2,3]), [1,2,3,3,2,1], 'Example 1: concatWithReverse([1,2,3]) → [1,2,3,3,2,1]');
test(concatWithReverse([1]), [1,1], 'Example 2: concatWithReverse([1]) → [1,1]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

