// Test: 23. Merge K Sorted Lists
// 3 test cases from LeetCodeDataset
// Run: node test.js

const { mergeKLists } = require("./solution");

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

console.log("\n23. Merge K Sorted Lists\n");

test(mergeKLists([]), null, 'Test 1');
test(mergeKLists([[],[],[],[]]), null, 'Test 2');
test(mergeKLists([[]]), null, 'Test 3');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

