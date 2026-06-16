// Test: 3685. Subsequence Sum After Capping Elements
// Run: node test.js

const { subsequenceSumAfterCapping } = require("./solution");

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

console.log("\n3685. Subsequence Sum After Capping Elements\n");

test(subsequenceSumAfterCapping([4,3,2,4], 5), [false,false,true,true], 'Example 1: subsequenceSumAfterCapping([4,3,2,4], 5) → [false,false,true,true]');
test(subsequenceSumAfterCapping([1,2,3,4,5], 3), [true,true,true,true,true], 'Example 2: subsequenceSumAfterCapping([1,2,3,4,5], 3) → [true,true,true,true,true]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

