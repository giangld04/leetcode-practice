// Test: 3722. Lexicographically Smallest String After Reverse
// Run: node test.js

const { lexSmallest } = require("./solution");

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

console.log("\n3722. Lexicographically Smallest String After Reverse\n");

test(lexSmallest("dcab"), "acdb", 'Example 1: lexSmallest("dcab") → "acdb"');
test(lexSmallest("abba"), "aabb", 'Example 2: lexSmallest("abba") → "aabb"');
test(lexSmallest("zxy"), "xzy", 'Example 3: lexSmallest("zxy") → "xzy"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

