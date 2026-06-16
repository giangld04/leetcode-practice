// Test: 3790. Smallest All-Ones Multiple
// Run: node test.js

const { minAllOneMultiple } = require("./solution");

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

console.log("\n3790. Smallest All-Ones Multiple\n");

test(minAllOneMultiple(3), 3, 'Example 1: minAllOneMultiple(3) → 3');
test(minAllOneMultiple(7), 6, 'Example 2: minAllOneMultiple(7) → 6');
test(minAllOneMultiple(2), -1, 'Example 3: minAllOneMultiple(2) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

