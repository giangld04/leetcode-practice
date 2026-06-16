// Test: 3761. Minimum Absolute Distance Between Mirror Pairs
// Run: node test.js

const { minMirrorPairDistance } = require("./solution");

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

console.log("\n3761. Minimum Absolute Distance Between Mirror Pairs\n");

test(minMirrorPairDistance([12,21,45,33,54]), 1, 'Example 1: minMirrorPairDistance([12,21,45,33,54]) → 1');
test(minMirrorPairDistance([120,21]), 1, 'Example 2: minMirrorPairDistance([120,21]) → 1');
test(minMirrorPairDistance([21,120]), -1, 'Example 3: minMirrorPairDistance([21,120]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

