// Test: 3598. Longest Common Prefix Between Adjacent Strings After Removals
// Run: node test.js

const { longestCommonPrefix } = require("./solution");

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

console.log("\n3598. Longest Common Prefix Between Adjacent Strings After Removals\n");

test(longestCommonPrefix(["jump","run","run","jump","run"]), [3,0,0,3,3], 'Example 1: longestCommonPrefix(["jump","run","run","jump","run"]) → [3,0,0,3,3]');
test(longestCommonPrefix(["dog","racer","car"]), [0,0,0], 'Example 2: longestCommonPrefix(["dog","racer","car"]) → [0,0,0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

