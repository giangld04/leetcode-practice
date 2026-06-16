// Test: 3630. Partition Array for Maximum XOR and AND
// Run: node test.js

const { maximizeXorAndXor } = require("./solution");

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

console.log("\n3630. Partition Array for Maximum XOR and AND\n");

test(maximizeXorAndXor([2,3]), 5, 'Example 1: maximizeXorAndXor([2,3]) → 5');
test(maximizeXorAndXor([1,3,2]), 6, 'Example 2: maximizeXorAndXor([1,3,2]) → 6');
test(maximizeXorAndXor([2,3,6,7]), 15, 'Example 3: maximizeXorAndXor([2,3,6,7]) → 15');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

