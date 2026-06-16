// Test: 819. Most Common Word
// Run: node test.js

const { mostCommonWord } = require("./solution");

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

console.log("\n819. Most Common Word\n");

test(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]), "ball", 'Example 1: mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]) → "ball"');
test(mostCommonWord("a.", []), "a", 'Example 2: mostCommonWord("a.", []) → "a"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

