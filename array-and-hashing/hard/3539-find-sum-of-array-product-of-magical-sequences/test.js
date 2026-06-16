// Test: 3539. Find Sum of Array Product of Magical Sequences
// Run: node test.js

const { magicalSum } = require("./solution");

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

console.log("\n3539. Find Sum of Array Product of Magical Sequences\n");

test(magicalSum(5, 5, [1,10,100,10000,1000000]), 991600007, 'Example 1: magicalSum(5, 5, [1,10,100,10000,1000000]) → 991600007');
test(magicalSum(2, 2, [5,4,3,2,1]), 170, 'Example 2: magicalSum(2, 2, [5,4,3,2,1]) → 170');
test(magicalSum(1, 1, [28]), 28, 'Example 3: magicalSum(1, 1, [28]) → 28');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

