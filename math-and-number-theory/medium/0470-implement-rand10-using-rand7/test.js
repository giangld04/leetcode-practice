// Test: 470. Implement Rand10() Using Rand7()
// Run: node test.js

const { rand7 } = require("./solution");

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

console.log("\n470. Implement Rand10() Using Rand7()\n");

test(rand7(1), [2], 'Example 1: rand7(1) → [2]');
test(rand7(2), [2,8], 'Example 2: rand7(2) → [2,8]');
test(rand7(3), [3,8,10], 'Example 3: rand7(3) → [3,8,10]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

