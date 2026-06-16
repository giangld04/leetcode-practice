// Test: 3629. Minimum Jumps to Reach End via Prime Teleportation
// Run: node test.js

const { minJumps } = require("./solution");

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

console.log("\n3629. Minimum Jumps to Reach End via Prime Teleportation\n");

test(minJumps([1,2,4,6]), 2, 'Example 1: minJumps([1,2,4,6]) → 2');
test(minJumps([2,3,4,7,9]), 2, 'Example 2: minJumps([2,3,4,7,9]) → 2');
test(minJumps([4,6,5,8]), 3, 'Example 3: minJumps([4,6,5,8]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

