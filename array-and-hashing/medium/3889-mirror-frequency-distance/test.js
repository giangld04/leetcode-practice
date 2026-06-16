// Test: 3889. Mirror Frequency Distance
// Run: node test.js

const { mirrorFrequency } = require("./solution");

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

console.log("\n3889. Mirror Frequency Distance\n");

test(mirrorFrequency("ab1z9"), 3, 'Example 1: mirrorFrequency("ab1z9") → 3');
test(mirrorFrequency("4m7n"), 2, 'Example 2: mirrorFrequency("4m7n") → 2');
test(mirrorFrequency("byby"), 0, 'Example 3: mirrorFrequency("byby") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

