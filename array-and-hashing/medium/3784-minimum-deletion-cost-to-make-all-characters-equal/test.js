// Test: 3784. Minimum Deletion Cost to Make All Characters Equal
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

console.log("\n3784. Minimum Deletion Cost to Make All Characters Equal\n");

test(minCost("aabaac", [1,2,3,4,1,10]), 11, 'Example 1: minCost("aabaac", [1,2,3,4,1,10]) → 11');
test(minCost("abc", [10,5,8]), 13, 'Example 2: minCost("abc", [10,5,8]) → 13');
test(minCost("zzzzz", [67,67,67,67,67]), 0, 'Example 3: minCost("zzzzz", [67,67,67,67,67]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

