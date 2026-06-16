// Test: 3894. Traffic Signal Color
// Run: node test.js

const { trafficSignal } = require("./solution");

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

console.log("\n3894. Traffic Signal Color\n");

test(trafficSignal(60), "Red", 'Example 1: trafficSignal(60) → "Red"');
test(trafficSignal(5), "Invalid", 'Example 2: trafficSignal(5) → "Invalid"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

