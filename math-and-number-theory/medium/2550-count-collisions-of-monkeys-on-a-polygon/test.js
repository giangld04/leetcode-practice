// Test: 2550. Count Collisions of Monkeys on a Polygon
// Run: node test.js

const { monkeyMove } = require("./solution");

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

console.log("\n2550. Count Collisions of Monkeys on a Polygon\n");

test(monkeyMove(3), 6, 'Example 1: monkeyMove(3) → 6');
test(monkeyMove(4), 14, 'Example 2: monkeyMove(4) → 14');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

