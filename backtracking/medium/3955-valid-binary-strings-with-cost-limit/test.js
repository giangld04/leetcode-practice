// Test: 3955. Valid Binary Strings With Cost Limit
// Run: node test.js

const { generateValidStrings } = require("./solution");

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

console.log("\n3955. Valid Binary Strings With Cost Limit\n");

test(generateValidStrings(3, 1), ["000","010","100"], 'Example 1: generateValidStrings(3, 1) → ["000","010","100"]');
test(generateValidStrings(1, 0), ["0","1"], 'Example 2: generateValidStrings(1, 0) → ["0","1"]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

