// Test: 3579. Minimum Steps to Convert String with Operations
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

console.log("\n3579. Minimum Steps to Convert String with Operations\n");

test(minOperations("abcdf", "dacbe"), 4, 'Example 1: minOperations("abcdf", "dacbe") → 4');
test(minOperations("abceded", "baecfef"), 4, 'Example 2: minOperations("abceded", "baecfef") → 4');
test(minOperations("abcdef", "fedabc"), 2, 'Example 3: minOperations("abcdef", "fedabc") → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

