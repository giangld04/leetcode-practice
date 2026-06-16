// Test: 3800. Minimum Cost to Make Two Binary Strings Equal
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n3800. Minimum Cost to Make Two Binary Strings Equal\n");

test(minimumCost("01000", "10111", 10, 2, 2), 16, 'Example 1: minimumCost("01000", "10111", 10, 2, 2) → 16');
test(minimumCost("001", "110", 2, 100, 100), 6, 'Example 2: minimumCost("001", "110", 2, 100, 100) → 6');
test(minimumCost("1010", "1010", 5, 5, 5), 0, 'Example 3: minimumCost("1010", "1010", 5, 5, 5) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

