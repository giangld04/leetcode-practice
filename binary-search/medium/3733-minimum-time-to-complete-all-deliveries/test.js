// Test: 3733. Minimum Time to Complete All Deliveries
// Run: node test.js

const { minimumTime } = require("./solution");

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

console.log("\n3733. Minimum Time to Complete All Deliveries\n");

test(minimumTime([3,1], [2,3]), 5, 'Example 1: minimumTime([3,1], [2,3]) → 5');
test(minimumTime([1,3], [2,2]), 7, 'Example 2: minimumTime([1,3], [2,2]) → 7');
test(minimumTime([2,1], [3,4]), 3, 'Example 3: minimumTime([2,1], [3,4]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

