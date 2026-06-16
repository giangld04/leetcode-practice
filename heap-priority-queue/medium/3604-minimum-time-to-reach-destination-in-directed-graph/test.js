// Test: 3604. Minimum Time to Reach Destination in Directed Graph
// Run: node test.js

const { minTime } = require("./solution");

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

console.log("\n3604. Minimum Time to Reach Destination in Directed Graph\n");

test(minTime(3, [[0,1,0,1],[1,2,2,5]]), 3, 'Example 1: minTime(3, [[0,1,0,1],[1,2,2,5]]) → 3');
test(minTime(4, [[0,1,0,3],[1,3,7,8],[0,2,1,5],[2,3,4,7]]), 5, 'Example 2: minTime(4, [[0,1,0,3],[1,3,7,8],[0,2,1,5],[2,3,4,7]]) → 5');
test(minTime(3, [[1,0,1,3],[1,2,3,5]]), -1, 'Example 3: minTime(3, [[1,0,1,3],[1,2,3,5]]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

