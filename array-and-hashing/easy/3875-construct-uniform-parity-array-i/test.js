// Test: 3875. Construct Uniform Parity Array I
// Run: node test.js

const { uniformArray } = require("./solution");

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

console.log("\n3875. Construct Uniform Parity Array I\n");

test(uniformArray([2,3]), true, 'Example 1: uniformArray([2,3]) → true');
test(uniformArray([4,6]), true, 'Example 2: uniformArray([4,6]) → true');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

