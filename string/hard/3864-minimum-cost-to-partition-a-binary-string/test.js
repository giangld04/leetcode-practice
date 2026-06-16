// Test: 3864. Minimum Cost to Partition a Binary String
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n3864. Minimum Cost to Partition a Binary String\n");

test(minCost("1010", 2, 1), 6, 'Example 1: minCost("1010", 2, 1) → 6');
test(minCost("1010", 3, 10), 12, 'Example 2: minCost("1010", 3, 10) → 12');
test(minCost("00", 1, 2), 2, 'Example 3: minCost("00", 1, 2) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

