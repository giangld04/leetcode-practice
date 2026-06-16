// Test: 3694. Distinct Points Reachable After Substring Removal
// Run: node test.js

const { distinctPoints } = require("./solution");

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

console.log("\n3694. Distinct Points Reachable After Substring Removal\n");

test(distinctPoints("LUL", 1), 2, 'Example 1: distinctPoints("LUL", 1) → 2');
test(distinctPoints("UDLR", 4), 1, 'Example 2: distinctPoints("UDLR", 4) → 1');
test(distinctPoints("UU", 1), 1, 'Example 3: distinctPoints("UU", 1) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

