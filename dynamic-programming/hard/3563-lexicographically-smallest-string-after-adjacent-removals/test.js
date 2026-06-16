// Test: 3563. Lexicographically Smallest String After Adjacent Removals
// Run: node test.js

const { lexicographicallySmallestString } = require("./solution");

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

console.log("\n3563. Lexicographically Smallest String After Adjacent Removals\n");

test(lexicographicallySmallestString("abc"), "a", 'Example 1: lexicographicallySmallestString("abc") → "a"');
test(lexicographicallySmallestString("bcda"), "", 'Example 2: lexicographicallySmallestString("bcda") → ""');
test(lexicographicallySmallestString("zdce"), "zdce", 'Example 3: lexicographicallySmallestString("zdce") → "zdce"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

