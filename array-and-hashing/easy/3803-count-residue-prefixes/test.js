// Test: 3803. Count Residue Prefixes
// Run: node test.js

const { residuePrefixes } = require("./solution");

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

console.log("\n3803. Count Residue Prefixes\n");

test(residuePrefixes("abc"), 2, 'Example 1: residuePrefixes("abc") → 2');
test(residuePrefixes("dd"), 1, 'Example 2: residuePrefixes("dd") → 1');
test(residuePrefixes("bob"), 2, 'Example 3: residuePrefixes("bob") → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

