// Test: 3519. Count Numbers with Non-Decreasing Digits 
// Run: node test.js

const { countNumbers } = require("./solution");

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

console.log("\n3519. Count Numbers with Non-Decreasing Digits \n");

test(countNumbers("23", "28", 8), 3, 'Example 1: countNumbers("23", "28", 8) → 3');
test(countNumbers("2", "7", 2), 2, 'Example 2: countNumbers("2", "7", 2) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

