// Test: 3849. Maximum Bitwise XOR After Rearrangement
// Run: node test.js

const { maximumXor } = require("./solution");

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

console.log("\n3849. Maximum Bitwise XOR After Rearrangement\n");

test(maximumXor("101", "011"), "110", 'Example 1: maximumXor("101", "011") → "110"');
test(maximumXor("0110", "1110"), "1101", 'Example 2: maximumXor("0110", "1110") → "1101"');
test(maximumXor("0101", "1001"), "1111", 'Example 3: maximumXor("0101", "1001") → "1111"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

