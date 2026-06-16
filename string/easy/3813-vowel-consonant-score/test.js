// Test: 3813. Vowel-Consonant Score
// Run: node test.js

const { vowelConsonantScore } = require("./solution");

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

console.log("\n3813. Vowel-Consonant Score\n");

test(vowelConsonantScore("cooear"), 2, 'Example 1: vowelConsonantScore("cooear") → 2');
test(vowelConsonantScore("axeyizou"), 1, 'Example 2: vowelConsonantScore("axeyizou") → 1');
test(vowelConsonantScore("au 123"), 0, 'Example 3: vowelConsonantScore("au 123") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

