// Test: 3533. Concatenated Divisibility
// Run: node test.js

const { concatenatedDivisibility } = require("./solution");

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

console.log("\n3533. Concatenated Divisibility\n");

test(concatenatedDivisibility([3,12,45], 5), [3,12,45], 'Example 1: concatenatedDivisibility([3,12,45], 5) → [3,12,45]');
test(concatenatedDivisibility([10,5], 10), [5,10], 'Example 2: concatenatedDivisibility([10,5], 10) → [5,10]');
test(concatenatedDivisibility([1,2,3], 5), [], 'Example 3: concatenatedDivisibility([1,2,3], 5) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

