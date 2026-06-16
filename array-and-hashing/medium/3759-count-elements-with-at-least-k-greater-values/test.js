// Test: 3759. Count Elements With at Least K Greater Values
// Run: node test.js

const { countElements } = require("./solution");

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

console.log("\n3759. Count Elements With at Least K Greater Values\n");

test(countElements([3,1,2], 1), 2, 'Example 1: countElements([3,1,2], 1) → 2');
test(countElements([5,5,5], 2), 0, 'Example 2: countElements([5,5,5], 2) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

