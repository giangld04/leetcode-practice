// Test: 690. Employee Importance
// Run: node test.js

const { GetImportance } = require("./solution");

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

console.log("\n690. Employee Importance\n");

test(GetImportance([[1,5,[2,3]],[2,3,[]],[3,3,[]]], 1), 11, 'Example 1: GetImportance([[1,5,[2,3]],[2,3,[]],[3,3,[]]], 1) → 11');
test(GetImportance([[1,2,[5]],[5,-3,[]]], 5), -3, 'Example 2: GetImportance([[1,2,[5]],[5,-3,[]]], 5) → -3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

