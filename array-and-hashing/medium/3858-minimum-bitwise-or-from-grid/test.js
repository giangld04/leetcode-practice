// Test: 3858. Minimum Bitwise OR From Grid
// Run: node test.js

const { minimumOR } = require("./solution");

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

console.log("\n3858. Minimum Bitwise OR From Grid\n");

test(minimumOR([[1,5],[2,4]]), 3, 'Example 1: minimumOR([[1,5],[2,4]]) → 3');
test(minimumOR([[3,5],[6,4]]), 5, 'Example 2: minimumOR([[3,5],[6,4]]) → 5');
test(minimumOR([[7,9,8]]), 7, 'Example 3: minimumOR([[7,9,8]]) → 7');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

