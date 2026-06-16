// Test: 3557. Find Maximum Number of Non Intersecting Substrings
// Run: node test.js

const { maxSubstrings } = require("./solution");

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

console.log("\n3557. Find Maximum Number of Non Intersecting Substrings\n");

test(maxSubstrings("abcdeafdef"), 2, 'Example 1: maxSubstrings("abcdeafdef") → 2');
test(maxSubstrings("bcdaaaab"), 1, 'Example 2: maxSubstrings("bcdaaaab") → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

