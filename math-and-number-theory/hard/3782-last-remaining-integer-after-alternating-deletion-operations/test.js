// Test: 3782. Last Remaining Integer After Alternating Deletion Operations
// Run: node test.js

const { lastInteger } = require("./solution");

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

console.log("\n3782. Last Remaining Integer After Alternating Deletion Operations\n");

test(lastInteger(8), 3, 'Example 1: lastInteger(8) → 3');
test(lastInteger(5), 1, 'Example 2: lastInteger(5) → 1');
test(lastInteger(1), 1, 'Example 3: lastInteger(1) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

