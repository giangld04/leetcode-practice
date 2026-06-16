// Test: 3593. Minimum Increments to Equalize Leaf Paths
// Run: node test.js

const { minIncrease } = require("./solution");

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

console.log("\n3593. Minimum Increments to Equalize Leaf Paths\n");

test(minIncrease(3, [[0,1],[0,2]], [2,1,3]), 1, 'Example 1: minIncrease(3, [[0,1],[0,2]], [2,1,3]) → 1');
test(minIncrease(3, [[0,1],[1,2]], [5,1,4]), 0, 'Example 2: minIncrease(3, [[0,1],[1,2]], [5,1,4]) → 0');
test(minIncrease(5, [[0,4],[0,1],[1,2],[1,3]], [3,4,1,1,7]), 1, 'Example 3: minIncrease(5, [[0,4],[0,1],[1,2],[1,3]], [3,4,1,1,7]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

