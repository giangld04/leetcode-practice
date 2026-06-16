// Test: 3827. Count Monobit Integers
// Run: node test.js

const { countMonobit } = require("./solution");

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

console.log("\n3827. Count Monobit Integers\n");

test(countMonobit(1), 2, 'Example 1: countMonobit(1) → 2');
test(countMonobit(4), 3, 'Example 2: countMonobit(4) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

