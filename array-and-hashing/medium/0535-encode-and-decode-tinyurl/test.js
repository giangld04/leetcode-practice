// Test: 535. Encode and Decode TinyURL
// Run: node test.js

const { encode } = require("./solution");

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

console.log("\n535. Encode and Decode TinyURL\n");

test(encode("https://leetcode.com/problems/design-tinyurl"), "https://leetcode.com/problems/design-tinyurl", 'Example 1: encode("https://leetcode.com/problems/design-tinyurl") → "https://leetcode.com/problems/design-tinyurl"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

