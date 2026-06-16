// Test: 3911. K-th Smallest Remaining Even Integer in Subarray Queries
// Run: node test.js

const { kthRemainingInteger } = require("./solution");

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

console.log("\n3911. K-th Smallest Remaining Even Integer in Subarray Queries\n");

test(kthRemainingInteger([1,4,7], [[0,2,1],[1,1,2],[0,0,3]]), [2,6,6], 'Example 1: kthRemainingInteger([1,4,7], [[0,2,1],[1,1,2],[0,0,3]]) → [2,6,6]');
test(kthRemainingInteger([2,5,8], [[0,1,2],[1,2,1],[0,2,4]]), [6,2,12], 'Example 2: kthRemainingInteger([2,5,8], [[0,1,2],[1,2,1],[0,2,4]]) → [6,2,12]');
test(kthRemainingInteger([3,6], [[0,1,1],[1,1,3]]), [2,8], 'Example 3: kthRemainingInteger([3,6], [[0,1,1],[1,1,3]]) → [2,8]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

