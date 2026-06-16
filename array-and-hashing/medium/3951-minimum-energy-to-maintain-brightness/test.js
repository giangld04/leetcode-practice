// Test: 3951. Minimum Energy to Maintain Brightness
// Run: node test.js

const { minEnergy } = require("./solution");

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

console.log("\n3951. Minimum Energy to Maintain Brightness\n");

test(minEnergy(5, 5, [[6,12]]), 14, 'Example 1: minEnergy(5, 5, [[6,12]]) → 14');
test(minEnergy(2, 1, [[0,0],[2,2]]), 2, 'Example 2: minEnergy(2, 1, [[0,0],[2,2]]) → 2');
test(minEnergy(4, 2, [[1,3],[2,4]]), 4, 'Example 3: minEnergy(4, 2, [[1,3],[2,4]]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

