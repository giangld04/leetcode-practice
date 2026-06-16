// Test: 2580. Count Ways to Group Overlapping Ranges
// Run: node test.js

const { countWays } = require("./solution");

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

console.log("\n2580. Count Ways to Group Overlapping Ranges\n");

test(countWays([[6,10],[5,15]]), 2, 'Example 1: countWays([[6,10],[5,15]]) → 2');
test(countWays([[1,3],[10,20],[2,5],[4,8]]), 4, 'Example 2: countWays([[1,3],[10,20],[2,5],[4,8]]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

