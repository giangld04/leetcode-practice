// Test: 3931. Check Adjacent Digit Differences
// Run: node test.js

const { isAdjacentDiffAtMostTwo } = require("./solution");

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

console.log("\n3931. Check Adjacent Digit Differences\n");

test(isAdjacentDiffAtMostTwo("132"), true, 'Example 1: isAdjacentDiffAtMostTwo("132") → true');
test(isAdjacentDiffAtMostTwo("129"), false, 'Example 2: isAdjacentDiffAtMostTwo("129") → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

