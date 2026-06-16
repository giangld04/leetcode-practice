// Test: 2818. Apply Operations to Maximize Score
// Run: node test.js

const { maximumScore } = require("./solution");

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

console.log("\n2818. Apply Operations to Maximize Score\n");

test(maximumScore([8,3,9,3,8], 2), 81, 'Example 1: maximumScore([8,3,9,3,8], 2) → 81');
test(maximumScore([19,12,14,6,10,18], 3), 4788, 'Example 2: maximumScore([19,12,14,6,10,18], 3) → 4788');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

