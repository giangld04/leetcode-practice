// Test: 3720. Lexicographically Smallest Permutation Greater Than Target
// Run: node test.js

const { lexGreaterPermutation } = require("./solution");

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

console.log("\n3720. Lexicographically Smallest Permutation Greater Than Target\n");

test(lexGreaterPermutation("abc", "bba"), "bca", 'Example 1: lexGreaterPermutation("abc", "bba") → "bca"');
test(lexGreaterPermutation("leet", "code"), "eelt", 'Example 2: lexGreaterPermutation("leet", "code") → "eelt"');
test(lexGreaterPermutation("baba", "bbaa"), "", 'Example 3: lexGreaterPermutation("baba", "bbaa") → ""');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

