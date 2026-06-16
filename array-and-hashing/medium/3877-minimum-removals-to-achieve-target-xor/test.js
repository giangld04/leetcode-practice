// Test: 3877. Minimum Removals to Achieve Target XOR
// Run: node test.js

const { minRemovals } = require("./solution");

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

console.log("\n3877. Minimum Removals to Achieve Target XOR\n");

test(minRemovals([1,2,3], 2), 1, 'Example 1: minRemovals([1,2,3], 2) → 1');
test(minRemovals([2,4], 1), -1, 'Example 2: minRemovals([2,4], 1) → -1');
test(minRemovals([7], 7), 0, 'Example 3: minRemovals([7], 7) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

