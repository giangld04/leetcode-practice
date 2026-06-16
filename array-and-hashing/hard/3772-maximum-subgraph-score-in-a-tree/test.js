// Test: 3772. Maximum Subgraph Score in a Tree
// Run: node test.js

const { maxSubgraphScore } = require("./solution");

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

console.log("\n3772. Maximum Subgraph Score in a Tree\n");

test(maxSubgraphScore(3, [[0,1],[1,2]], [1,0,1]), [1,1,1], 'Example 1: maxSubgraphScore(3, [[0,1],[1,2]], [1,0,1]) → [1,1,1]');
test(maxSubgraphScore(5, [[1,0],[1,2],[1,3],[3,4]], [0,1,0,1,1]), [2,3,2,3,3], 'Example 2: maxSubgraphScore(5, [[1,0],[1,2],[1,3],[3,4]], [0,1,0,1,1]) → [2,3,2,3,3]');
test(maxSubgraphScore(2, [[0,1]], [0,0]), [-1,-1], 'Example 3: maxSubgraphScore(2, [[0,1]], [0,0]) → [-1,-1]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

