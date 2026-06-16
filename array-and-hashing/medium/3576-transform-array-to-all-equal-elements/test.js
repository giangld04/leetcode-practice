// Test: 3576. Transform Array to All Equal Elements
// Run: node test.js

const { canMakeEqual } = require("./solution");

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

console.log("\n3576. Transform Array to All Equal Elements\n");

test(canMakeEqual([1,-1,1,-1,1], 3), true, 'Example 1: canMakeEqual([1,-1,1,-1,1], 3) → true');
test(canMakeEqual([-1,-1,-1,1,1,1], 5), false, 'Example 2: canMakeEqual([-1,-1,-1,1,1,1], 5) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

