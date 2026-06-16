// Test: 843. Guess the Word
// Run: node test.js

const { findSecretWord } = require("./solution");

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

console.log("\n843. Guess the Word\n");

test(findSecretWord("acckzz", ["acckzz","ccbazz","eiowzz","abcczz"], 10), You guessed the secret word correctly., 'Example 1: findSecretWord("acckzz", ["acckzz","ccbazz","eiowzz","abcczz"], 10) → You guessed the secret word correctly.');
test(findSecretWord("hamada", ["hamada","khaled"], 10), You guessed the secret word correctly., 'Example 2: findSecretWord("hamada", ["hamada","khaled"], 10) → You guessed the secret word correctly.');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

