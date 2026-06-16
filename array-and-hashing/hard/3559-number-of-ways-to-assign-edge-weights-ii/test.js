// Test: 3559. Number of Ways to Assign Edge Weights II
// Run: node test.js

const { assignEdgeWeights } = require("./solution");

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

console.log("\n3559. Number of Ways to Assign Edge Weights II\n");

test(assignEdgeWeights([[1,2]], [[1,1],[1,2]]), [0,1], 'Example 1: assignEdgeWeights([[1,2]], [[1,1],[1,2]]) → [0,1]');
test(assignEdgeWeights([[1,2],[1,3],[3,4],[3,5]], [[1,4],[3,4],[2,5]]), [2,1,4], 'Example 2: assignEdgeWeights([[1,2],[1,3],[3,4],[3,5]], [[1,4],[3,4],[2,5]]) → [2,1,4]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

