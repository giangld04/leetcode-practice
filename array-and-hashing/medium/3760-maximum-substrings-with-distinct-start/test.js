// Test: 3760. Maximum Substrings With Distinct Start
// Run: node test.js

const { maxDistinct } = require("./solution");

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

console.log("\n3760. Maximum Substrings With Distinct Start\n");

test(maxDistinct("abab"), 2, 'Example 1: maxDistinct("abab") → 2');
test(maxDistinct("abcd"), 4, 'Example 2: maxDistinct("abcd") → 4');
test(maxDistinct("aaaa"), 1, 'Example 3: maxDistinct("aaaa") → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

