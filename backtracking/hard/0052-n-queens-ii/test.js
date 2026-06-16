// Test: 52. N Queens Ii
// 9 test cases from LeetCodeDataset
// Run: node test.js

const { totalNQueens } = require("./solution");

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

console.log("\n52. N Queens Ii\n");

test(totalNQueens(8), 92, 'Test 1');
test(totalNQueens(3), 0, 'Test 2');
test(totalNQueens(4), 2, 'Test 3');
test(totalNQueens(9), 352, 'Test 4');
test(totalNQueens(6), 4, 'Test 5');
test(totalNQueens(2), 0, 'Test 6');
test(totalNQueens(1), 1, 'Test 7');
test(totalNQueens(7), 40, 'Test 8');
test(totalNQueens(5), 10, 'Test 9');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

