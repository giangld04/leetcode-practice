// Test: 3816. Lexicographically Smallest String After Deleting Duplicate Characters
// Run: node test.js

const { lexSmallestAfterDeletion } = require("./solution");

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

console.log("\n3816. Lexicographically Smallest String After Deleting Duplicate Characters\n");

test(lexSmallestAfterDeletion("aaccb"), "aacb", 'Example 1: lexSmallestAfterDeletion("aaccb") → "aacb"');
test(lexSmallestAfterDeletion("z"), "z", 'Example 2: lexSmallestAfterDeletion("z") → "z"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

