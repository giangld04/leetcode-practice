// Test: 3887. Incremental Even-Weighted Cycle Queries
// Run: node test.js

const { numberOfEdgesAdded } = require("./solution");

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

console.log("\n3887. Incremental Even-Weighted Cycle Queries\n");

test(numberOfEdgesAdded(3, [[0,1,1],[1,2,1],[0,2,1]]), 2, 'Example 1: numberOfEdgesAdded(3, [[0,1,1],[1,2,1],[0,2,1]]) → 2');
test(numberOfEdgesAdded(3, [[0,1,1],[1,2,1],[0,2,0]]), 3, 'Example 2: numberOfEdgesAdded(3, [[0,1,1],[1,2,1],[0,2,0]]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

