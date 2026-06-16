// Test: 3528. Unit Conversion I
// Run: node test.js

const { baseUnitConversions } = require("./solution");

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

console.log("\n3528. Unit Conversion I\n");

test(baseUnitConversions([[0,1,2],[1,2,3]]), [1,2,6], 'Example 1: baseUnitConversions([[0,1,2],[1,2,3]]) → [1,2,6]');
test(baseUnitConversions([[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,5,2],[4,6,3],[5,7,4]]), [1,2,3,8,10,6,30,24], 'Example 2: baseUnitConversions([[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,5,2],[4,6,3],[5,7,4]]) → [1,2,3,8,10,6,30,24]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

