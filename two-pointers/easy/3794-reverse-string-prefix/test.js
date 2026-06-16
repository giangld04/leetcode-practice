// Test: 3794. Reverse String Prefix
// Run: node test.js

const { reversePrefix } = require("./solution");

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

console.log("\n3794. Reverse String Prefix\n");

test(reversePrefix("abcd", 2), "bacd", 'Example 1: reversePrefix("abcd", 2) → "bacd"');
test(reversePrefix("xyz", 3), "zyx", 'Example 2: reversePrefix("xyz", 3) → "zyx"');
test(reversePrefix("hey", 1), "hey", 'Example 3: reversePrefix("hey", 1) → "hey"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

