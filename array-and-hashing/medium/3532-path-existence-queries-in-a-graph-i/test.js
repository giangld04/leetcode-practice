// Test: 3532. Path Existence Queries in a Graph I
// Run: node test.js

const { pathExistenceQueries } = require("./solution");

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

console.log("\n3532. Path Existence Queries in a Graph I\n");

test(pathExistenceQueries(2, [1,3], 1, [[0,0],[0,1]]), [true,false], 'Example 1: pathExistenceQueries(2, [1,3], 1, [[0,0],[0,1]]) → [true,false]');
test(pathExistenceQueries(4, [2,5,6,8], 2, [[0,1],[0,2],[1,3],[2,3]]), [false,false,true,true], 'Example 2: pathExistenceQueries(4, [2,5,6,8], 2, [[0,1],[0,2],[1,3],[2,3]]) → [false,false,true,true]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

