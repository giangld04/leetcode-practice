// Test: 3940. Limit Occurrences in Sorted Array
// Run: node test.js

const { limitOccurrences } = require("./solution");

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

console.log("\n3940. Limit Occurrences in Sorted Array\n");

test(limitOccurrences([1,1,1,2,2,3], 2), [1,1,2,2,3], 'Example 1: limitOccurrences([1,1,1,2,2,3], 2) → [1,1,2,2,3]');
test(limitOccurrences([1,2,3], 1), [1,2,3], 'Example 2: limitOccurrences([1,2,3], 1) → [1,2,3]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

