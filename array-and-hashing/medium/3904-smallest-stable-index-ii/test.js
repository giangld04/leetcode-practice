// Test: 3904. Smallest Stable Index II
// Run: node test.js

const { firstStableIndex } = require("./solution");

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

console.log("\n3904. Smallest Stable Index II\n");

test(firstStableIndex([5,0,1,4], 3), 3, 'Example 1: firstStableIndex([5,0,1,4], 3) → 3');
test(firstStableIndex([3,2,1], 1), -1, 'Example 2: firstStableIndex([3,2,1], 1) → -1');
test(firstStableIndex([0], 0), 0, 'Example 3: firstStableIndex([0], 0) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

