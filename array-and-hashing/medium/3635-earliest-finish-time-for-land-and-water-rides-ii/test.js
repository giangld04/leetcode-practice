// Test: 3635. Earliest Finish Time for Land and Water Rides II
// Run: node test.js

const { earliestFinishTime } = require("./solution");

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

console.log("\n3635. Earliest Finish Time for Land and Water Rides II\n");

test(earliestFinishTime([2,8], [4,1], [6], [3]), 9, 'Example 1: earliestFinishTime([2,8], [4,1], [6], [3]) → 9');
test(earliestFinishTime([5], [3], [1], [10]), 14, 'Example 2: earliestFinishTime([5], [3], [1], [10]) → 14');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

