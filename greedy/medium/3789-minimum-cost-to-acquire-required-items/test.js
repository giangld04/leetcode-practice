// Test: 3789. Minimum Cost to Acquire Required Items
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

console.log("\n3789. Minimum Cost to Acquire Required Items\n");

test(minimumCost(3, 2, 1, 3, 2), 3, 'Example 1: minimumCost(3, 2, 1, 3, 2) → 3');
test(minimumCost(5, 4, 15, 2, 3), 22, 'Example 2: minimumCost(5, 4, 15, 2, 3) → 22');
test(minimumCost(5, 4, 15, 0, 0), 0, 'Example 3: minimumCost(5, 4, 15, 0, 0) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

