// Test: 385. Mini Parser
// Run: node test.js

const { deserialize } = require("./solution");

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

console.log("\n385. Mini Parser\n");

test(deserialize("324"), 324, 'Example 1: deserialize("324") → 324');
test(deserialize("[123,[456,[789]]]"), [123,[456,[789]]], 'Example 2: deserialize("[123,[456,[789]]]") → [123,[456,[789]]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

