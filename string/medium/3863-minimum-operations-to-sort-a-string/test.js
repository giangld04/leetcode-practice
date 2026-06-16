// Test: 3863. Minimum Operations to Sort a String
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

console.log("\n3863. Minimum Operations to Sort a String\n");

test(minOperations("dog"), 1, 'Example 1: minOperations("dog") → 1');
test(minOperations("card"), 2, 'Example 2: minOperations("card") → 2');
test(minOperations("gf"), -1, 'Example 3: minOperations("gf") → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

