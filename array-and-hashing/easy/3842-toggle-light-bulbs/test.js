// Test: 3842. Toggle Light Bulbs
// Run: node test.js

const { toggleLightBulbs } = require("./solution");

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

console.log("\n3842. Toggle Light Bulbs\n");

test(toggleLightBulbs([10,30,20,10]), [20,30], 'Example 1: toggleLightBulbs([10,30,20,10]) → [20,30]');
test(toggleLightBulbs([100,100]), [], 'Example 2: toggleLightBulbs([100,100]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

