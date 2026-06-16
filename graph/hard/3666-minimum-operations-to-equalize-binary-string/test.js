// Test: 3666. Minimum Operations to Equalize Binary String
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3666. Minimum Operations to Equalize Binary String\n");

test(minOperations("110", 1), 1, 'Example 1: minOperations("110", 1) → 1');
test(minOperations("0101", 3), 2, 'Example 2: minOperations("0101", 3) → 2');
test(minOperations("101", 2), -1, 'Example 3: minOperations("101", 2) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

