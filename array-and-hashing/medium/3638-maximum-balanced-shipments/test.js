// Test: 3638. Maximum Balanced Shipments
// Run: node test.js

const { maxBalancedShipments } = require("./solution");

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

console.log("\n3638. Maximum Balanced Shipments\n");

test(maxBalancedShipments([2,5,1,4,3]), 2, 'Example 1: maxBalancedShipments([2,5,1,4,3]) → 2');
test(maxBalancedShipments([4,4]), 0, 'Example 2: maxBalancedShipments([4,4]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

