// Test: 3853. Merge Close Characters
// Run: node test.js

const { mergeCharacters } = require("./solution");

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

console.log("\n3853. Merge Close Characters\n");

test(mergeCharacters("abca", 3), "abc", 'Example 1: mergeCharacters("abca", 3) → "abc"');
test(mergeCharacters("aabca", 2), "abca", 'Example 2: mergeCharacters("aabca", 2) → "abca"');
test(mergeCharacters("yybyzybz", 2), "ybzybz", 'Example 3: mergeCharacters("yybyzybz", 2) → "ybzybz"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

