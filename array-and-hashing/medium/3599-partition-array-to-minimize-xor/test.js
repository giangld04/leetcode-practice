// Test: 3599. Partition Array to Minimize XOR
// Run: node test.js

const { minXor } = require("./solution");

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

console.log("\n3599. Partition Array to Minimize XOR\n");

test(minXor([1,2,3], 2), 1, 'Example 1: minXor([1,2,3], 2) → 1');
test(minXor([2,3,3,2], 3), 2, 'Example 2: minXor([2,3,3,2], 3) → 2');
test(minXor([1,1,2,3,1], 2), 0, 'Example 3: minXor([1,1,2,3,1], 2) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

