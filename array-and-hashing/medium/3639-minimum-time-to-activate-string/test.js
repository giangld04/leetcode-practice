// Test: 3639. Minimum Time to Activate String
// Run: node test.js

const { minTime } = require("./solution");

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

console.log("\n3639. Minimum Time to Activate String\n");

test(minTime("abc", [1,0,2], 2), 0, 'Example 1: minTime("abc", [1,0,2], 2) → 0');
test(minTime("cat", [0,2,1], 6), 2, 'Example 2: minTime("cat", [0,2,1], 6) → 2');
test(minTime("xy", [0,1], 4), -1, 'Example 3: minTime("xy", [0,1], 4) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

