// Test: 3634. Minimum Removals to Balance Array
// Run: node test.js

const { minRemoval } = require("./solution");

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

console.log("\n3634. Minimum Removals to Balance Array\n");

test(minRemoval([2,1,5], 2), 1, 'Example 1: minRemoval([2,1,5], 2) → 1');
test(minRemoval([1,6,2,9], 3), 2, 'Example 2: minRemoval([1,6,2,9], 3) → 2');
test(minRemoval([4,6], 2), 0, 'Example 3: minRemoval([4,6], 2) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

