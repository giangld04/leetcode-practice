// Test: 3714. Longest Balanced Substring II
// Run: node test.js

const { longestBalanced } = require("./solution");

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

console.log("\n3714. Longest Balanced Substring II\n");

test(longestBalanced("abbac"), 4, 'Example 1: longestBalanced("abbac") → 4');
test(longestBalanced("aabcc"), 3, 'Example 2: longestBalanced("aabcc") → 3');
test(longestBalanced("aba"), 2, 'Example 3: longestBalanced("aba") → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

