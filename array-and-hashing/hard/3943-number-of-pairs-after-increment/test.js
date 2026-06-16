// Test: 3943. Number of Pairs After Increment
// Run: node test.js

const { numberOfPairs } = require("./solution");

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

console.log("\n3943. Number of Pairs After Increment\n");

test(numberOfPairs([1,2], [3,4], [[2,5],[1,0,0,2],[2,5]]), [2,1], 'Example 1: numberOfPairs([1,2], [3,4], [[2,5],[1,0,0,2],[2,5]]) → [2,1]');
test(numberOfPairs([1,1], [2,2,3], [[2,4],[1,0,1,1],[2,4]]), [2,6], 'Example 2: numberOfPairs([1,1], [2,2,3], [[2,4],[1,0,1,1],[2,4]]) → [2,6]');
test(numberOfPairs([2,5,8,4], [1,3,8], [[2,9],[1,1,2,1],[2,10]]), [1,0], 'Example 3: numberOfPairs([2,5,8,4], [1,3,8], [[2,9],[1,1,2,1],[2,10]]) → [1,0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

