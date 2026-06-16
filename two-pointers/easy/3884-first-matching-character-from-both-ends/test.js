// Test: 3884. First Matching Character From Both Ends
// Run: node test.js

const { firstMatchingIndex } = require("./solution");

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

console.log("\n3884. First Matching Character From Both Ends\n");

test(firstMatchingIndex("abcacbd"), 1, 'Example 1: firstMatchingIndex("abcacbd") → 1');
test(firstMatchingIndex("abc"), 1, 'Example 2: firstMatchingIndex("abc") → 1');
test(firstMatchingIndex("abcdab"), -1, 'Example 3: firstMatchingIndex("abcdab") → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

