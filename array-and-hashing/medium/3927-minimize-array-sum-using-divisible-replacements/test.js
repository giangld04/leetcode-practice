// Test: 3927. Minimize Array Sum Using Divisible Replacements
// Run: node test.js

const { minArraySum } = require("./solution");

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

console.log("\n3927. Minimize Array Sum Using Divisible Replacements\n");

test(minArraySum([3,6,2]), 7, 'Example 1: minArraySum([3,6,2]) → 7');
test(minArraySum([4,2,8,3]), 9, 'Example 2: minArraySum([4,2,8,3]) → 9');
test(minArraySum([7,5,9]), 21, 'Example 3: minArraySum([7,5,9]) → 21');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

