// Test: 3922. Minimum Flips to Make Binary String Coherent
// Run: node test.js

const { minFlips } = require("./solution");

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

console.log("\n3922. Minimum Flips to Make Binary String Coherent\n");

test(minFlips("1010"), 1, 'Example 1: minFlips("1010") → 1');
test(minFlips("0110"), 1, 'Example 2: minFlips("0110") → 1');
test(minFlips("1000"), 0, 'Example 3: minFlips("1000") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

