// Test: 3704. Count No-Zero Pairs That Sum to N
// Run: node test.js

const { countNoZeroPairs } = require("./solution");

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

console.log("\n3704. Count No-Zero Pairs That Sum to N\n");

test(countNoZeroPairs(2), 1, 'Example 1: countNoZeroPairs(2) → 1');
test(countNoZeroPairs(3), 2, 'Example 2: countNoZeroPairs(3) → 2');
test(countNoZeroPairs(11), 8, 'Example 3: countNoZeroPairs(11) → 8');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

