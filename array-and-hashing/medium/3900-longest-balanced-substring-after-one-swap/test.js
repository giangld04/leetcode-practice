// Test: 3900. Longest Balanced Substring After One Swap
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

console.log("\n3900. Longest Balanced Substring After One Swap\n");

test(longestBalanced("100001"), 4, 'Example 1: longestBalanced("100001") → 4');
test(longestBalanced("111"), 0, 'Example 2: longestBalanced("111") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

