// Test: 3950. Exactly One Consecutive Set Bits Pair
// Run: node test.js

const { consecutiveSetBits } = require("./solution");

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

console.log("\n3950. Exactly One Consecutive Set Bits Pair\n");

test(consecutiveSetBits(6), true, 'Example 1: consecutiveSetBits(6) → true');
test(consecutiveSetBits(5), false, 'Example 2: consecutiveSetBits(5) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

