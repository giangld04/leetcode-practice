// Test: 3751. Total Waviness of Numbers in Range I
// Run: node test.js

const { totalWaviness } = require("./solution");

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

console.log("\n3751. Total Waviness of Numbers in Range I\n");

test(totalWaviness(120, 130), 3, 'Example 1: totalWaviness(120, 130) → 3');
test(totalWaviness(198, 202), 3, 'Example 2: totalWaviness(198, 202) → 3');
test(totalWaviness(4848, 4848), 2, 'Example 3: totalWaviness(4848, 4848) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

