// Test: 3939. Count Non Adjacent Subsets in a Rooted Tree
// Run: node test.js

const { countValidSubsets } = require("./solution");

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

console.log("\n3939. Count Non Adjacent Subsets in a Rooted Tree\n");

test(countValidSubsets([-1,0,1], [1,2,3], 3), 1, 'Example 1: countValidSubsets([-1,0,1], [1,2,3], 3) → 1');
test(countValidSubsets([-1,0,0,0], [2,1,2,1], 3), 2, 'Example 2: countValidSubsets([-1,0,0,0], [2,1,2,1], 3) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

