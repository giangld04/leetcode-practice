// Test: 3841. Palindromic Path Queries in a Tree
// Run: node test.js

const { palindromePath } = require("./solution");

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

console.log("\n3841. Palindromic Path Queries in a Tree\n");

test(palindromePath(3, [[0,1],[1,2]], "aac", ["query 0 2","update 1 b","query 0 2"]), [true,false], 'Example 1: palindromePath(3, [[0,1],[1,2]], "aac", ["query 0 2","update 1 b","query 0 2"]) → [true,false]');
test(palindromePath(4, [[0,1],[0,2],[0,3]], "abca", ["query 1 2","update 0 b","query 2 3","update 3 a","query 1 3"]), [false,false,true], 'Example 2: palindromePath(4, [[0,1],[0,2],[0,3]], "abca", ["query 1 2","update 0 b","query 2 3","update 3 a","query 1 3"]) → [false,false,true]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

