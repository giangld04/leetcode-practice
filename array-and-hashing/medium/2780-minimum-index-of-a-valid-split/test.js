// Test: 2780. Minimum Index Of A Valid Split
// 12 test cases from LeetCodeDataset
// Run: node test.js

const { minimumIndex } = require("./solution");

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

console.log("\n2780. Minimum Index Of A Valid Split\n");

test(minimumIndex([7,7,7,7,7,7,7,7,7,1]), 0, 'Test 1');
test(minimumIndex([3,3,3,3,7,2,2]), -1, 'Test 2');
test(minimumIndex([7,7,7,7,7,7,7]), 0, 'Test 3');
test(minimumIndex([1,1,2,2,1,1,1]), 0, 'Test 4');
test(minimumIndex([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 5');
test(minimumIndex([1,2,2,2]), 2, 'Test 6');
test(minimumIndex([1,1,1,1,1,1,1,2,2,2,2,2,2,2]), -1, 'Test 7');
test(minimumIndex([1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 8');
test(minimumIndex([2,1,3,1,1,1,7,1,2,1]), 4, 'Test 9');
test(minimumIndex([1,1,1,1,2,2,2,3]), -1, 'Test 10');
test(minimumIndex([1,1,1,1,1,2,2,2,2,2]), -1, 'Test 11');
test(minimumIndex([7,7,7,7,7,1,1,1,1,1]), -1, 'Test 12');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

