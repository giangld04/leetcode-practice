// Test: 1146. Snapshot Array
// Run: node test.js

const { SnapshotArray } = require("./solution");

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

console.log("\n1146. Snapshot Array\n");

test(SnapshotArray(["SnapshotArray","set","snap","set","get"]
[[3],[0,5],[],[0,6],[0,0]]), [null,null,0,null,5], 'Example 1: SnapshotArray(["SnapshotArray","set","snap","set","get"]
[[3],[0,5],[],[0,6],[0,0]]) → [null,null,0,null,5]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

