// Test: 3529. Count Cells in Overlapping Horizontal and Vertical Substrings
// Run: node test.js

const { countCells } = require("./solution");

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

console.log("\n3529. Count Cells in Overlapping Horizontal and Vertical Substrings\n");

test(countCells([["a","a","c","c"],["b","b","b","c"],["a","a","b","a"],["c","a","a","c"],["a","a","b","a"]], "abaca"), 1, 'Example 1: countCells([["a","a","c","c"],["b","b","b","c"],["a","a","b","a"],["c","a","a","c"],["a","a","b","a"]], "abaca") → 1');
test(countCells([["c","a","a","a"],["a","a","b","a"],["b","b","a","a"],["a","a","b","a"]], "aba"), 4, 'Example 2: countCells([["c","a","a","a"],["a","a","b","a"],["b","b","a","a"],["a","a","b","a"]], "aba") → 4');
test(countCells([["a"]], "a"), 1, 'Example 3: countCells([["a"]], "a") → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

