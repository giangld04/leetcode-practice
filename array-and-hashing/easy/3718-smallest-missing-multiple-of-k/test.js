// Test: 3718. Smallest Missing Multiple of K
// Run: node test.js

const { missingMultiple } = require("./solution");

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

console.log("\n3718. Smallest Missing Multiple of K\n");

test(missingMultiple([8,2,3,4,6], 2), 10, 'Example 1: missingMultiple([8,2,3,4,6], 2) → 10');
test(missingMultiple([1,4,7,10,15], 5), 5, 'Example 2: missingMultiple([1,4,7,10,15], 5) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

