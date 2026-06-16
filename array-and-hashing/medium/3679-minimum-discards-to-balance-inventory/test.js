// Test: 3679.  Minimum Discards to Balance Inventory
// Run: node test.js

const { minArrivalsToDiscard } = require("./solution");

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

console.log("\n3679.  Minimum Discards to Balance Inventory\n");

test(minArrivalsToDiscard([1,2,1,3,1], 4, 2), 0, 'Example 1: minArrivalsToDiscard([1,2,1,3,1], 4, 2) → 0');
test(minArrivalsToDiscard([1,2,3,3,3,4], 3, 2), 1, 'Example 2: minArrivalsToDiscard([1,2,3,3,3,4], 3, 2) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

