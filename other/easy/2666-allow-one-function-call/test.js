// Test: 2666. Allow One Function Call
// Run: node test.js

const { once } = require("./solution");

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

console.log("\n2666. Allow One Function Call\n");

test(once((a,b,c) => (a + b + c), [[1,2,3],[2,3,6]]), [{"calls":1,"value":6}], 'Example 1: once((a,b,c) => (a + b + c), [[1,2,3],[2,3,6]]) → [{"calls":1,"value":6}]');
test(once((a,b,c) => (a * b * c), [[5,7,4],[2,3,6],[4,6,8]]), [{"calls":1,"value":140}], 'Example 2: once((a,b,c) => (a * b * c), [[5,7,4],[2,3,6],[4,6,8]]) → [{"calls":1,"value":140}]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

