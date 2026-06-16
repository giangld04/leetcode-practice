// Test: 3650. Minimum Cost Path with Edge Reversals
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n3650. Minimum Cost Path with Edge Reversals\n");

test(minCost(4, [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]), 5, 'Example 1: minCost(4, [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]) → 5');
test(minCost(4, [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]), 3, 'Example 2: minCost(4, [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

