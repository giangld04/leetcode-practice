// Test: 3871. Count Commas in Range II
// Run: node test.js

const { countCommas } = require("./solution");

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

console.log("\n3871. Count Commas in Range II\n");

test(countCommas(1002), 3, 'Example 1: countCommas(1002) → 3');
test(countCommas(998), 0, 'Example 2: countCommas(998) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

