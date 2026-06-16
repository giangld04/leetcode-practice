// Test: 3561. Resulting String After Adjacent Removals
// Run: node test.js

const { resultingString } = require("./solution");

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

console.log("\n3561. Resulting String After Adjacent Removals\n");

test(resultingString("abc"), "c", 'Example 1: resultingString("abc") → "c"');
test(resultingString("adcb"), "", 'Example 2: resultingString("adcb") → ""');
test(resultingString("zadb"), "db", 'Example 3: resultingString("zadb") → "db"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

