// Test: 2514. Count Anagrams
// Run: node test.js

const { countAnagrams } = require("./solution");

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

console.log("\n2514. Count Anagrams\n");

test(countAnagrams("too hot"), 18, 'Example 1: countAnagrams("too hot") → 18');
test(countAnagrams("aa"), 1, 'Example 2: countAnagrams("aa") → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

