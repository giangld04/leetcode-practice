// Test: 697. Degree Of An Array
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { findShortestSubArray } = require("./solution");

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

console.log("\n697. Degree Of An Array\n");

test(findShortestSubArray([1,1,2,2,2,3]), 3, 'Test 1');
test(findShortestSubArray([0,0,0,0,0,0,0,0,0,0]), 10, 'Test 2');
test(findShortestSubArray([1,2,2,3,1]), 2, 'Test 3');
test(findShortestSubArray([0,0,1,1,2,2,3,3,4,4]), 2, 'Test 4');
test(findShortestSubArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0,0]), 2, 'Test 5');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,10]), 2, 'Test 6');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 11, 'Test 7');
test(findShortestSubArray([0,1,0,1,0,1]), 5, 'Test 8');
test(findShortestSubArray([0,0,1,1,1,2,2,3,3,3]), 3, 'Test 9');
test(findShortestSubArray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 5, 'Test 10');
test(findShortestSubArray([4,4,4,4,4]), 5, 'Test 11');
test(findShortestSubArray([9,9,9,10,10,11,11,11,11,11]), 5, 'Test 12');
test(findShortestSubArray([4,4,3,3,2,2,1,1,0,0]), 2, 'Test 13');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10]), 1, 'Test 14');
test(findShortestSubArray([4,5,6,7,8,9,0,0,0,0]), 4, 'Test 15');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1]), 11, 'Test 16');
test(findShortestSubArray([1]), 1, 'Test 17');
test(findShortestSubArray([1,1,1,2,2,3]), 3, 'Test 18');
test(findShortestSubArray([5,5,5,5,6,6,7,8,8,8,8]), 4, 'Test 19');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1]), 21, 'Test 20');
test(findShortestSubArray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 21');
test(findShortestSubArray([5,5,5,5,5]), 5, 'Test 22');
test(findShortestSubArray([1,2,2,3,1,4,2]), 6, 'Test 23');
test(findShortestSubArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 2, 'Test 24');
test(findShortestSubArray([5,5,4,4,3,3,2,2,1,1]), 2, 'Test 25');
test(findShortestSubArray([1,2,3,4,5]), 1, 'Test 26');
test(findShortestSubArray([16,17,18,18,19,19,19,20,20,20,20]), 4, 'Test 27');
test(findShortestSubArray([12,12,13,13,14,14,15,15,15,15]), 4, 'Test 28');
test(findShortestSubArray([1,1,1,1,1]), 5, 'Test 29');
test(findShortestSubArray([5,5,1,1,1,2,2,3,3]), 3, 'Test 30');
test(findShortestSubArray([49999,49999,49998,49998,49997]), 2, 'Test 31');
test(findShortestSubArray([4,1,1,2,2,1,3]), 5, 'Test 32');
test(findShortestSubArray([1,2,2,3,3,3,4,4,4,4]), 4, 'Test 33');
test(findShortestSubArray([0,1,2,3,4,5,6,7,8,9,0,0]), 12, 'Test 34');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,0,1,1,1]), 13, 'Test 35');
test(findShortestSubArray([1,1,1,2,2,2,3,3,3]), 3, 'Test 36');
test(findShortestSubArray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 6, 'Test 37');
test(findShortestSubArray([10,20,30,40,50,60,70,80,90,100,10,10,10,10,10,10,10,10,10,10]), 20, 'Test 38');
test(findShortestSubArray([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 45, 'Test 39');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1]), 42, 'Test 40');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,10,10,10,10]), 25, 'Test 41');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5]), 21, 'Test 42');
test(findShortestSubArray([47,47,47,23,23,38,38,38,38,59,59,59,59,59,10,10,10,10,10,10]), 6, 'Test 43');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 1, 'Test 44');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]), 21, 'Test 45');
test(findShortestSubArray([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,2,2]), 22, 'Test 46');
test(findShortestSubArray([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3]), 10, 'Test 47');
test(findShortestSubArray([1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,5,6,7,8,9,10,1,1,1,1,1]), 26, 'Test 48');
test(findShortestSubArray([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3]), 10, 'Test 49');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 24, 'Test 50');
test(findShortestSubArray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 11, 'Test 51');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1]), 26, 'Test 52');
test(findShortestSubArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 53');
test(findShortestSubArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,1,2,3,4,5,1,2,3,4,5]), 13, 'Test 54');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1,1,1]), 44, 'Test 55');
test(findShortestSubArray([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3,4,4]), 22, 'Test 56');
test(findShortestSubArray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6]), 21, 'Test 57');
test(findShortestSubArray([1,2,2,3,1,4,2,5,5,5,1,2,3,4,5,6,7,8,9,10]), 8, 'Test 58');
test(findShortestSubArray([10000, 20000, 30000, 40000, 50000, 10000, 20000, 30000, 40000, 50000, 10000, 10000]), 12, 'Test 59');
test(findShortestSubArray([4,3,3,4,2,1,2,3,1,4,4,4,4,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 37, 'Test 60');
test(findShortestSubArray([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 10, 'Test 61');
test(findShortestSubArray([1,1,2,3,4,5,6,7,8,9,10,2,2,2,3,3,4,4,5,5,5,5]), 17, 'Test 62');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1]), 56, 'Test 63');
test(findShortestSubArray([1,2,2,3,1,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 6, 'Test 64');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 22, 'Test 65');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,1,2,2,3,3]), 32, 'Test 66');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 41, 'Test 67');
test(findShortestSubArray([1,2,3,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 19, 'Test 68');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,1]), 26, 'Test 69');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 23, 'Test 70');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,20,20,20,20,20,20,20,20]), 10, 'Test 71');
test(findShortestSubArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 22, 'Test 72');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,2,2,2,2,2]), 25, 'Test 73');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,1,1]), 43, 'Test 74');
test(findShortestSubArray([2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 21, 'Test 75');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 20, 'Test 76');
test(findShortestSubArray([9,9,9,9,9,1,2,3,4,5,6,7,8,9,10,9,9,9,9,9]), 20, 'Test 77');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,1,1,2,2,3,3,4,4,5,5]), 52, 'Test 78');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 21, 'Test 79');
test(findShortestSubArray([3,1,4,4,5,5,5,2,2,2,2,3,3,1,1,1,1,1,1,1]), 19, 'Test 80');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,2,2,3,3,4,4,5,5]), 42, 'Test 81');
test(findShortestSubArray([1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), 8, 'Test 82');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,10,10,10,10,10]), 16, 'Test 83');
test(findShortestSubArray([1,1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 22, 'Test 84');
test(findShortestSubArray([9,8,7,6,5,4,3,2,1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 5, 'Test 85');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1]), 22, 'Test 86');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), 22, 'Test 87');
test(findShortestSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,1,1]), 33, 'Test 88');
test(findShortestSubArray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 89');
test(findShortestSubArray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7]), 7, 'Test 90');
test(findShortestSubArray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 31, 'Test 91');
test(findShortestSubArray([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 6, 'Test 92');
test(findShortestSubArray([1,2,2,2,3,4,5,5,5,6,7,8,9,9,9,10,10,10,1,2,3,4,5,6,7]), 17, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

