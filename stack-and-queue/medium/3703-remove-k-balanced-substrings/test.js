// Test: 3703. Remove K-Balanced Substrings
// Run: node test.js

const { removeSubstring } = require("./solution");

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

console.log("\n3703. Remove K-Balanced Substrings\n");

test(removeSubstring("(())", 1), "", 'Example 1: removeSubstring("(())", 1) → ""');
test(removeSubstring("(()(", 1), "((", 'Example 2: removeSubstring("(()(", 1) → "(("');
test(removeSubstring("((()))()()()", 3), "()()()", 'Example 3: removeSubstring("((()))()()()", 3) → "()()()"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

