// Test: 3959. Check Good Integer
// Run: node test.js

const { checkGoodInteger } = require("./solution");

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

console.log("\n3959. Check Good Integer\n");

test(checkGoodInteger(1000), false, 'Example 1: checkGoodInteger(1000) → false');
test(checkGoodInteger(19), true, 'Example 2: checkGoodInteger(19) → true');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

