// Test: 3746. Minimum String Length After Balanced Removals
// Run: node test.js

const { minLengthAfterRemovals } = require("./solution");

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

console.log("\n3746. Minimum String Length After Balanced Removals\n");

test(minLengthAfterRemovals("aabbab"), 0, 'Example 1: minLengthAfterRemovals("aabbab") → 0');
test(minLengthAfterRemovals("aaaa"), 4, 'Example 2: minLengthAfterRemovals("aaaa") → 4');
test(minLengthAfterRemovals("aaabb"), 1, 'Example 3: minLengthAfterRemovals("aaabb") → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

