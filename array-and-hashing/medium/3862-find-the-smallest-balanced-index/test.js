// Test: 3862. Find the Smallest Balanced Index
// Run: node test.js

const { smallestBalancedIndex } = require("./solution");

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

console.log("\n3862. Find the Smallest Balanced Index\n");

test(smallestBalancedIndex([2,1,2]), 1, 'Example 1: smallestBalancedIndex([2,1,2]) → 1');
test(smallestBalancedIndex([2,8,2,2,5]), 2, 'Example 2: smallestBalancedIndex([2,8,2,2,5]) → 2');
test(smallestBalancedIndex([1]), -1
For index i = 0:


	The left side is empty, so the left sum is 0.
	The right side is empty, so the right product is 1.
	Since the left sum does not equal the right product, index 0 is not balanced.

Therefore, no balanced index exists and the answer is -1., 'Example 3: smallestBalancedIndex([1]) → -1
For index i = 0:


	The left side is empty, so the left sum is 0.
	The right side is empty, so the right product is 1.
	Since the left sum does not equal the right product, index 0 is not balanced.

Therefore, no balanced index exists and the answer is -1.');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

