// Test: 3585. Find Weighted Median Node in Tree
// Run: node test.js

const { findMedian } = require("./solution");

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

console.log("\n3585. Find Weighted Median Node in Tree\n");

test(findMedian(2, [[0,1,7]], [[1,0],[0,1]]), [0,1], 'Example 1: findMedian(2, [[0,1,7]], [[1,0],[0,1]]) → [0,1]');
test(findMedian(3, [[0,1,2],[2,0,4]], [[0,1],[2,0],[1,2]]), [1,0,2], 'Example 2: findMedian(3, [[0,1,2],[2,0,4]], [[0,1],[2,0],[1,2]]) → [1,0,2]');
test(findMedian(5, [[0,1,2],[0,2,5],[1,3,1],[2,4,3]], [[3,4],[1,2]]), [2,2], 'Example 3: findMedian(5, [[0,1,2],[0,2,5],[1,3,1],[2,4,3]], [[3,4],[1,2]]) → [2,2]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

