// Test: 3910. Count Connected Subgraphs with Even Node Sum
// Run: node test.js

const { evenSumSubgraphs } = require("./solution");

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

console.log("\n3910. Count Connected Subgraphs with Even Node Sum\n");

test(evenSumSubgraphs([1,0,1], [[0,1],[1,2]]), 2, 'Example 1: evenSumSubgraphs([1,0,1], [[0,1],[1,2]]) → 2');
test(evenSumSubgraphs([1], []), 0, 'Example 2: evenSumSubgraphs([1], []) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

