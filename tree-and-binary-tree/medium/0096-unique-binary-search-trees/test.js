// Test: 96. Unique Binary Search Trees
// 14 test cases from LeetCodeDataset
// Run: node test.js

const { numTrees } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n96. Unique Binary Search Trees\n");

test(numTrees(3), 5, 'Test 1');
test(numTrees(4), 14, 'Test 2');
test(numTrees(19), 1767263190, 'Test 3');
test(numTrees(1), 1, 'Test 4');
test(numTrees(10), 16796, 'Test 5');
test(numTrees(5), 42, 'Test 6');
test(numTrees(8), 1430, 'Test 7');
test(numTrees(15), 9694845, 'Test 8');
test(numTrees(12), 208012, 'Test 9');
test(numTrees(18), 477638700, 'Test 10');
test(numTrees(9), 4862, 'Test 11');
test(numTrees(6), 132, 'Test 12');
test(numTrees(2), 2, 'Test 13');
test(numTrees(7), 429, 'Test 14');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

