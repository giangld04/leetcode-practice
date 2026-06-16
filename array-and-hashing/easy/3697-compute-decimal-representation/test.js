// Test: 3697. Compute Decimal Representation
// Run: node test.js

const { decimalRepresentation } = require("./solution");

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

console.log("\n3697. Compute Decimal Representation\n");

test(decimalRepresentation(537), [500,30,7], 'Example 1: decimalRepresentation(537) → [500,30,7]');
test(decimalRepresentation(102), [100,2], 'Example 2: decimalRepresentation(102) → [100,2]');
test(decimalRepresentation(6), [6], 'Example 3: decimalRepresentation(6) → [6]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

