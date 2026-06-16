// Test: 3624. Number of Integers With Popcount-Depth Equal to K II
// Run: node test.js

const { popcountDepth } = require("./solution");

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

console.log("\n3624. Number of Integers With Popcount-Depth Equal to K II\n");

test(popcountDepth([2,4], [[1,0,1,1],[2,1,1],[1,0,1,0]]), [2,1], 'Example 1: popcountDepth([2,4], [[1,0,1,1],[2,1,1],[1,0,1,0]]) → [2,1]');
test(popcountDepth([3,5,6], [[1,0,2,2],[2,1,4],[1,1,2,1],[1,0,1,0]]), [3,1,0], 'Example 2: popcountDepth([3,5,6], [[1,0,2,2],[2,1,4],[1,1,2,1],[1,0,1,0]]) → [3,1,0]');
test(popcountDepth([1,2], [[1,0,1,1],[2,0,3],[1,0,0,1],[1,0,0,2]]), [1,0,1], 'Example 3: popcountDepth([1,2], [[1,0,1,1],[2,0,3],[1,0,0,1],[1,0,0,2]]) → [1,0,1]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

