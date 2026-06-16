// Test: 3636. Threshold Majority Queries
// Run: node test.js

const { subarrayMajority } = require("./solution");

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

console.log("\n3636. Threshold Majority Queries\n");

test(subarrayMajority([1,1,2,2,1,1], [[0,5,4],[0,3,3],[2,3,2]]), [1,-1,2], 'Example 1: subarrayMajority([1,1,2,2,1,1], [[0,5,4],[0,3,3],[2,3,2]]) → [1,-1,2]');
test(subarrayMajority([3,2,3,2,3,2,3], [[0,6,4],[1,5,2],[2,4,1],[3,3,1]]), [3,2,3,2], 'Example 2: subarrayMajority([3,2,3,2,3,2,3], [[0,6,4],[1,5,2],[2,4,1],[3,3,1]]) → [3,2,3,2]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

