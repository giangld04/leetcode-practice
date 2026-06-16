// Test: 3545. Minimum Deletions for At Most K Distinct Characters
// Run: node test.js

const { minDeletion } = require("./solution");

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

console.log("\n3545. Minimum Deletions for At Most K Distinct Characters\n");

test(minDeletion("abc", 2), 1, 'Example 1: minDeletion("abc", 2) → 1');
test(minDeletion("aabb", 2), 0, 'Example 2: minDeletion("aabb", 2) → 0');
test(minDeletion("yyyzz", 1), 2, 'Example 3: minDeletion("yyyzz", 1) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

