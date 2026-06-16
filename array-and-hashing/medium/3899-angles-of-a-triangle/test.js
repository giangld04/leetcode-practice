// Test: 3899. Angles of a Triangle
// Run: node test.js

const { internalAngles } = require("./solution");

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

console.log("\n3899. Angles of a Triangle\n");

test(internalAngles([3,4,5]), [36.86990,53.13010,90.00000], 'Example 1: internalAngles([3,4,5]) → [36.86990,53.13010,90.00000]');
test(internalAngles([2,4,2]), [], 'Example 2: internalAngles([2,4,2]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

