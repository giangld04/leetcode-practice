// Test: 3683. Earliest Time to Finish One Task
// Run: node test.js

const { earliestTime } = require("./solution");

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

console.log("\n3683. Earliest Time to Finish One Task\n");

test(earliestTime([[1,6],[2,3]]), 5, 'Example 1: earliestTime([[1,6],[2,3]]) → 5');
test(earliestTime([[100,100],[100,100],[100,100]]), 200, 'Example 2: earliestTime([[100,100],[100,100],[100,100]]) → 200');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

