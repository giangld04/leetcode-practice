// Test: 3637. Trionic Array I
// Run: node test.js

const { isTrionic } = require("./solution");

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

console.log("\n3637. Trionic Array I\n");

test(isTrionic([1,3,5,4,2,6]), true, 'Example 1: isTrionic([1,3,5,4,2,6]) → true');
test(isTrionic([2,1,3]), false, 'Example 2: isTrionic([2,1,3]) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

