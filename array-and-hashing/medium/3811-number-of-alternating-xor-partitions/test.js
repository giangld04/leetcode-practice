// Test: 3811. Number of Alternating XOR Partitions
// Run: node test.js

const { alternatingXOR } = require("./solution");

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

console.log("\n3811. Number of Alternating XOR Partitions\n");

test(alternatingXOR([2,3,1,4], 1, 5), 1, 'Example 1: alternatingXOR([2,3,1,4], 1, 5) → 1');
test(alternatingXOR([1,0,0], 1, 0), 3, 'Example 2: alternatingXOR([1,0,0], 1, 0) → 3');
test(alternatingXOR([7], 1, 7), 0, 'Example 3: alternatingXOR([7], 1, 7) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

