// Test: 3913. Sort Vowels by Frequency
// Run: node test.js

const { sortVowels } = require("./solution");

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

console.log("\n3913. Sort Vowels by Frequency\n");

test(sortVowels("leetcode"), "leetcedo", 'Example 1: sortVowels("leetcode") → "leetcedo"');
test(sortVowels("aeiaaioooa"), "aaaaoooiie", 'Example 2: sortVowels("aeiaaioooa") → "aaaaoooiie"');
test(sortVowels("baeiou"), "baeiou", 'Example 3: sortVowels("baeiou") → "baeiou"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

