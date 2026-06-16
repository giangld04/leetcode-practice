// Test: 3821. Find Nth Smallest Integer With K One Bits
// Run: node test.js

const { nthSmallest } = require("./solution");

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

console.log("\n3821. Find Nth Smallest Integer With K One Bits\n");

test(nthSmallest(4, 2), 9, 'Example 1: nthSmallest(4, 2) → 9');
test(nthSmallest(3, 1), 4, 'Example 2: nthSmallest(3, 1) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

