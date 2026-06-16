// Test: 517. Super Washing Machines
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { findMinMoves } = require("./solution");

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

console.log("\n517. Super Washing Machines\n");

test(findMinMoves([0,2,0]), -1, 'Test 1');
test(findMinMoves([9,1,8,8,9]), 4, 'Test 2');
test(findMinMoves([0,0,18]), 12, 'Test 3');
test(findMinMoves([1,0,0,3,0,2,0]), -1, 'Test 4');
test(findMinMoves([100000]), 0, 'Test 5');
test(findMinMoves([0,0,0,0,0]), 0, 'Test 6');
test(findMinMoves([4,0,0,4]), 2, 'Test 7');
test(findMinMoves([5,5,5,5,5]), 0, 'Test 8');
test(findMinMoves([1]), 0, 'Test 9');
test(findMinMoves([1,1,1,1]), 0, 'Test 10');
test(findMinMoves([1,0,5]), 3, 'Test 11');
test(findMinMoves([0,3,0]), 2, 'Test 12');
test(findMinMoves([10,10,10,10]), 0, 'Test 13');
test(findMinMoves([1,2,3,4,5]), 3, 'Test 14');
test(findMinMoves([1,0,0,3,0,0,2,0]), -1, 'Test 15');
test(findMinMoves([0,0,11,5]), 8, 'Test 16');
test(findMinMoves([1, 0, 5, 4, 0, 0, 2, 3]), -1, 'Test 17');
test(findMinMoves([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 0, 'Test 18');
test(findMinMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 19');
test(findMinMoves([10,9,8,7,6,5,4,3,2,1]), -1, 'Test 20');
test(findMinMoves([1,2,3,4,5,6,7,8,9,10]), -1, 'Test 21');
test(findMinMoves([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]), 12500, 'Test 22');
test(findMinMoves([100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 95, 'Test 23');
test(findMinMoves([2,2,2,2,1,2,2,2,2]), -1, 'Test 24');
test(findMinMoves([0,0,0,0,0,0,0,0,0,10]), 9, 'Test 25');
test(findMinMoves([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 26');
test(findMinMoves([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), -1, 'Test 27');
test(findMinMoves([10000,9000,8000,7000,6000,5000,4000,3000,2000,1000]), 12500, 'Test 28');
test(findMinMoves([5,10,15,20,25,30,35,40,45,50]), -1, 'Test 29');
test(findMinMoves([1,0,0,0,0,5]), 4, 'Test 30');
test(findMinMoves([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100]), -1, 'Test 31');
test(findMinMoves([20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 19, 'Test 32');
test(findMinMoves([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 33');
test(findMinMoves([4,5,6,7,8]), 3, 'Test 34');
test(findMinMoves([10, 15, 10, 15, 10, 15, 10]), -1, 'Test 35');
test(findMinMoves([0, 0, 0, 0, 0, 0, 21, 0]), -1, 'Test 36');
test(findMinMoves([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100]), 95, 'Test 37');
test(findMinMoves([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), -1, 'Test 38');
test(findMinMoves([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 28, 'Test 39');
test(findMinMoves([10,1,1,1,10]), -1, 'Test 40');
test(findMinMoves([3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 41');
test(findMinMoves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 28, 'Test 42');
test(findMinMoves([1,0,0,0,0,10,0,0,0,0,1]), -1, 'Test 43');
test(findMinMoves([0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100]), -1, 'Test 44');
test(findMinMoves([5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 45');
test(findMinMoves([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 46');
test(findMinMoves([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 47');
test(findMinMoves([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 48');
test(findMinMoves([10,10,10,10,10,10,10,10,10,10]), 0, 'Test 49');
test(findMinMoves([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 50');
test(findMinMoves([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100]), 95, 'Test 51');
test(findMinMoves([50,45,40,35,30,25,20,15,10,5]), -1, 'Test 52');
test(findMinMoves([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), -1, 'Test 53');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

