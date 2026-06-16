// Test: 3953. Maximum Score with Co-Prime Element
// Run: node test.js

const { maxScore } = require("./solution");

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

console.log("\n3953. Maximum Score with Co-Prime Element\n");

test(maxScore([3,4,6], 5), 4, 'Example 1: maxScore([3,4,6], 5) → 4');
test(maxScore([1,2,3], 4), 3, 'Example 2: maxScore([1,2,3], 4) → 3');
test(maxScore([2,2], 1), 1, 'Example 3: maxScore([2,2], 1) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

