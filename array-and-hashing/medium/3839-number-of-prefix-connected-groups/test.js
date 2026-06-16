// Test: 3839. Number of Prefix Connected Groups
// Run: node test.js

const { prefixConnected } = require("./solution");

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

console.log("\n3839. Number of Prefix Connected Groups\n");

test(prefixConnected(["apple","apply","banana","bandit"], 2), 2, 'Example 1: prefixConnected(["apple","apply","banana","bandit"], 2) → 2');
test(prefixConnected(["car","cat","cartoon"], 3), 1, 'Example 2: prefixConnected(["car","cat","cartoon"], 3) → 1');
test(prefixConnected(["bat","dog","dog","doggy","bat"], 3), 2, 'Example 3: prefixConnected(["bat","dog","dog","doggy","bat"], 3) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

