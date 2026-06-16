// Test: 3648. Minimum Sensors to Cover Grid
// Run: node test.js

const { minSensors } = require("./solution");

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

console.log("\n3648. Minimum Sensors to Cover Grid\n");

test(minSensors(5, 5, 1), 4, 'Example 1: minSensors(5, 5, 1) → 4');
test(minSensors(2, 2, 2), 1, 'Example 2: minSensors(2, 2, 2) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

