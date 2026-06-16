// Test: 1718. Construct The Lexicographically Largest Valid Sequence
// 18 test cases from LeetCodeDataset
// Run: node test.js

const { constructDistancedSequence } = require("./solution");

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

console.log("\n1718. Construct The Lexicographically Largest Valid Sequence\n");

test(constructDistancedSequence(3), [3, 1, 2, 3, 2], 'Test 1');
test(constructDistancedSequence(15), [15, 13, 14, 10, 8, 12, 5, 3, 11, 9, 3, 5, 8, 10, 13, 15, 14, 12, 9, 11, 7, 4, 6, 1, 2, 4, 2, 7, 6], 'Test 2');
test(constructDistancedSequence(4), [4, 2, 3, 2, 4, 3, 1], 'Test 3');
test(constructDistancedSequence(20), [20, 18, 19, 15, 13, 17, 10, 16, 7, 5, 3, 14, 12, 3, 5, 7, 10, 13, 15, 18, 20, 19, 17, 16, 12, 14, 11, 9, 4, 6, 8, 2, 4, 2, 1, 6, 9, 11, 8], 'Test 4');
test(constructDistancedSequence(2), [2, 1, 2], 'Test 5');
test(constructDistancedSequence(1), [1], 'Test 6');
test(constructDistancedSequence(10), [10, 8, 6, 9, 3, 1, 7, 3, 6, 8, 10, 5, 9, 7, 4, 2, 5, 2, 4], 'Test 7');
test(constructDistancedSequence(5), [5, 3, 1, 4, 3, 5, 2, 4, 2], 'Test 8');
test(constructDistancedSequence(8), [8, 6, 4, 2, 7, 2, 4, 6, 8, 5, 3, 7, 1, 3, 5], 'Test 9');
test(constructDistancedSequence(11), [11, 9, 10, 6, 4, 1, 7, 8, 4, 6, 9, 11, 10, 7, 5, 8, 2, 3, 2, 5, 3], 'Test 10');
test(constructDistancedSequence(12), [12, 10, 11, 7, 5, 3, 8, 9, 3, 5, 7, 10, 12, 11, 8, 6, 9, 2, 4, 2, 1, 6, 4], 'Test 11');
test(constructDistancedSequence(16), [16, 14, 15, 11, 9, 13, 6, 4, 12, 10, 1, 4, 6, 9, 11, 14, 16, 15, 13, 10, 12, 8, 5, 7, 2, 3, 2, 5, 3, 8, 7], 'Test 12');
test(constructDistancedSequence(14), [14, 12, 13, 9, 7, 11, 4, 1, 10, 8, 4, 7, 9, 12, 14, 13, 11, 8, 10, 6, 3, 5, 2, 3, 2, 6, 5], 'Test 13');
test(constructDistancedSequence(17), [17, 15, 16, 12, 10, 14, 7, 5, 3, 13, 11, 3, 5, 7, 10, 12, 15, 17, 16, 14, 9, 11, 13, 8, 6, 2, 1, 2, 4, 9, 6, 8, 4], 'Test 14');
test(constructDistancedSequence(18), [18, 16, 17, 13, 11, 15, 8, 14, 4, 2, 12, 2, 4, 10, 8, 11, 13, 16, 18, 17, 15, 14, 12, 10, 9, 7, 5, 3, 6, 1, 3, 5, 7, 9, 6], 'Test 15');
test(constructDistancedSequence(13), [13, 11, 12, 8, 6, 4, 9, 10, 1, 4, 6, 8, 11, 13, 12, 9, 7, 10, 3, 5, 2, 3, 2, 7, 5], 'Test 16');
test(constructDistancedSequence(6), [6, 4, 2, 5, 2, 4, 6, 3, 5, 1, 3], 'Test 17');
test(constructDistancedSequence(7), [7, 5, 3, 6, 4, 3, 5, 7, 4, 6, 2, 1, 2], 'Test 18');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

