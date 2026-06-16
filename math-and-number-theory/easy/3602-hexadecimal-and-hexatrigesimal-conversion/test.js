// Test: 3602. Hexadecimal and Hexatrigesimal Conversion
// Run: node test.js

const { concatHex36 } = require("./solution");

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

console.log("\n3602. Hexadecimal and Hexatrigesimal Conversion\n");

test(concatHex36(13), "A91P1", 'Example 1: concatHex36(13) → "A91P1"');
test(concatHex36(36), "5101000", 'Example 2: concatHex36(36) → "5101000"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

