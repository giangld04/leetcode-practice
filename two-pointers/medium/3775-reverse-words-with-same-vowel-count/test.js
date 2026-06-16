// Test: 3775. Reverse Words With Same Vowel Count
// Run: node test.js

const { reverseWords } = require("./solution");

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

console.log("\n3775. Reverse Words With Same Vowel Count\n");

test(reverseWords("cat and mice"), "cat dna mice", 'Example 1: reverseWords("cat and mice") → "cat dna mice"');
test(reverseWords("book is nice"), "book is ecin", 'Example 2: reverseWords("book is nice") → "book is ecin"');
test(reverseWords("banana healthy"), "banana healthy", 'Example 3: reverseWords("banana healthy") → "banana healthy"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

