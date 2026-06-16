// Test: 3890. Integers With Multiple Sum of Two Cubes
// Run: node test.js

const { findGoodIntegers } = require("./solution");

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

console.log("\n3890. Integers With Multiple Sum of Two Cubes\n");

test(findGoodIntegers(4104), [1729,4104], 'Example 1: findGoodIntegers(4104) → [1729,4104]');
test(findGoodIntegers(578), [], 'Example 2: findGoodIntegers(578) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

