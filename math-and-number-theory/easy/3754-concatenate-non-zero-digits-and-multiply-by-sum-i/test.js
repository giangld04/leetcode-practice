// Test: 3754. Concatenate Non-Zero Digits and Multiply by Sum I
// Run: node test.js

const { sumAndMultiply } = require("./solution");

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

console.log("\n3754. Concatenate Non-Zero Digits and Multiply by Sum I\n");

test(sumAndMultiply(10203004), 12340, 'Example 1: sumAndMultiply(10203004) → 12340');
test(sumAndMultiply(1000), 1, 'Example 2: sumAndMultiply(1000) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

