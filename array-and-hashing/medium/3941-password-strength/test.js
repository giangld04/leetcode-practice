// Test: 3941. Password Strength
// Run: node test.js

const { passwordStrength } = require("./solution");

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

console.log("\n3941. Password Strength\n");

test(passwordStrength("aA1!"), 11, 'Example 1: passwordStrength("aA1!") → 11');
test(passwordStrength("bbB11#"), 11, 'Example 2: passwordStrength("bbB11#") → 11');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

