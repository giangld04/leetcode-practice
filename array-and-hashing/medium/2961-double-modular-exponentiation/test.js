// Test: 2961. Double Modular Exponentiation
// Run: node test.js

const { getGoodIndices } = require("./solution");

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

console.log("\n2961. Double Modular Exponentiation\n");

test(getGoodIndices([[2,3,3,10],[3,3,3,1],[6,1,1,4]], 2), [0,2], 'Example 1: getGoodIndices([[2,3,3,10],[3,3,3,1],[6,1,1,4]], 2) → [0,2]');
test(getGoodIndices([[39,3,1000,1000]], 17), [], 'Example 2: getGoodIndices([[39,3,1000,1000]], 17) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

