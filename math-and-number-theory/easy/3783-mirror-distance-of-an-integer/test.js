// Test: 3783. Mirror Distance of an Integer
// Run: node test.js

const { mirrorDistance } = require("./solution");

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

console.log("\n3783. Mirror Distance of an Integer\n");

test(mirrorDistance(25), 27, 'Example 1: mirrorDistance(25) → 27');
test(mirrorDistance(10), 9, 'Example 2: mirrorDistance(10) → 9');
test(mirrorDistance(7), 0, 'Example 3: mirrorDistance(7) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

