// Test: 3829. Design Ride Sharing System
// Run: node test.js

const { RideSharingSystem } = require("./solution");

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

console.log("\n3829. Design Ride Sharing System\n");

test(RideSharingSystem(["RideSharingSystem", "addRider", "addDriver", "addRider", "matchDriverWithRider", "addDriver", "cancelRider", "matchDriverWithRider", "matchDriverWithRider"]
[[], [3], [2], [1], [], [5], [3], [], []]), [null, null, null, null, [2, 3], null, null, [5, 1], [-1, -1]], 'Example 1: RideSharingSystem(["RideSharingSystem", "addRider", "addDriver", "addRider", "matchDriverWithRider", "addDriver", "cancelRider", "matchDriverWithRider", "matchDriverWithRider"]
[[], [3], [2], [1], [], [5], [3], [], []]) → [null, null, null, null, [2, 3], null, null, [5, 1], [-1, -1]]');
test(RideSharingSystem(["RideSharingSystem", "addRider", "addDriver", "addDriver", "matchDriverWithRider", "addRider", "cancelRider", "matchDriverWithRider"]
[[], [8], [8], [6], [], [2], [2], []]), [null, null, null, null, [8, 8], null, null, [-1, -1]], 'Example 2: RideSharingSystem(["RideSharingSystem", "addRider", "addDriver", "addDriver", "matchDriverWithRider", "addRider", "cancelRider", "matchDriverWithRider"]
[[], [8], [8], [6], [], [2], [2], []]) → [null, null, null, null, [8, 8], null, null, [-1, -1]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

