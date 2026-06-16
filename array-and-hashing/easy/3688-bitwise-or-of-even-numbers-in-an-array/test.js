// Test: 3688. Bitwise OR of Even Numbers in an Array
// Run: node test.js

const { evenNumberBitwiseORs } = require("./solution");

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

console.log("\n3688. Bitwise OR of Even Numbers in an Array\n");

test(evenNumberBitwiseORs([1,2,3,4,5,6]), 6, 'Example 1: evenNumberBitwiseORs([1,2,3,4,5,6]) → 6');
test(evenNumberBitwiseORs([7,9,11]), 0, 'Example 2: evenNumberBitwiseORs([7,9,11]) → 0');
test(evenNumberBitwiseORs([1,8,16]), 24, 'Example 3: evenNumberBitwiseORs([1,8,16]) → 24');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

