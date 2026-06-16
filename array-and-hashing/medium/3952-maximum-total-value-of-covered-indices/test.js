// Test: 3952. Maximum Total Value of Covered Indices
// Run: node test.js

const { maxTotal } = require("./solution");

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

console.log("\n3952. Maximum Total Value of Covered Indices\n");

test(maxTotal([9,2,6,1], "0101"), 15, 'Example 1: maxTotal([9,2,6,1], "0101") → 15');
test(maxTotal([5,1,4], "001"), 4, 'Example 2: maxTotal([5,1,4], "001") → 4');
test(maxTotal([9,3,5], "011"), 14, 'Example 3: maxTotal([9,3,5], "011") → 14');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

