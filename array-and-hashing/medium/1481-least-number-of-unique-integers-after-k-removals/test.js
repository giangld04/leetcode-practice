// Test: 1481. Least Number Of Unique Integers After K Removals
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { findLeastNumOfUniqueInts } = require("./solution");

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

console.log("\n1481. Least Number Of Unique Integers After K Removals\n");

test(findLeastNumOfUniqueInts([1,1,1,1,1], 3), 1, 'Test 1');
test(findLeastNumOfUniqueInts([1,2,3,4,5], 2), 3, 'Test 2');
test(findLeastNumOfUniqueInts([10,20,20,10,10,30,50,10,20], 4), 2, 'Test 3');
test(findLeastNumOfUniqueInts([10,20,30,40,50,60], 0), 6, 'Test 4');
test(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3), 2, 'Test 5');
test(findLeastNumOfUniqueInts([1,2,3,4,5], 0), 5, 'Test 6');
test(findLeastNumOfUniqueInts([10,10,10,20,20,30], 3), 1, 'Test 7');
test(findLeastNumOfUniqueInts([1,1,1,1,1], 2), 1, 'Test 8');
test(findLeastNumOfUniqueInts([1,2,3,4,5], 5), 0, 'Test 9');
test(findLeastNumOfUniqueInts([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 9), 5, 'Test 10');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4], 4), 2, 'Test 11');
test(findLeastNumOfUniqueInts([1,1,1,1,1,1,1,1,1,1], 5), 1, 'Test 12');
test(findLeastNumOfUniqueInts([5,5,4], 1), 1, 'Test 13');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4], 2), 3, 'Test 14');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3], 2), 2, 'Test 15');
test(findLeastNumOfUniqueInts([1,1,2,2,3,3,4,4,5,5], 5), 3, 'Test 16');
test(findLeastNumOfUniqueInts([10,20,20,10,10,30,50,10,20], 5), 1, 'Test 17');
test(findLeastNumOfUniqueInts([10,20,20,30,30,30,40,40,40,40,50,50,50,50,50,50], 10), 1, 'Test 18');
test(findLeastNumOfUniqueInts([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 30), 2, 'Test 19');
test(findLeastNumOfUniqueInts([100,100,200,200,200,300,300,300,300,400,400,400,400,400,500,500,500,500,500,500,500,500,500,500], 15), 1, 'Test 20');
test(findLeastNumOfUniqueInts([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3], 15), 2, 'Test 21');
test(findLeastNumOfUniqueInts([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6], 20), 2, 'Test 22');
test(findLeastNumOfUniqueInts([1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9], 18), 4, 'Test 23');
test(findLeastNumOfUniqueInts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50), 8, 'Test 24');
test(findLeastNumOfUniqueInts([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), 5, 'Test 25');
test(findLeastNumOfUniqueInts([29,30,30,31,31,31,32,32,32,32,33,33,33,33,33,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35], 25), 1, 'Test 26');
test(findLeastNumOfUniqueInts([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,6,6,6,7,7,8,9], 20), 3, 'Test 27');
test(findLeastNumOfUniqueInts([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 30), 4, 'Test 28');
test(findLeastNumOfUniqueInts([6,6,6,6,6,7,7,7,7,8,8,8,9,9,10], 8), 2, 'Test 29');
test(findLeastNumOfUniqueInts([10, 20, 20, 30, 30, 30, 40, 40, 40, 40, 50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 60, 70, 70, 70, 70, 70, 70, 70, 80, 80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90, 90, 90, 90, 90, 100], 25), 3, 'Test 30');
test(findLeastNumOfUniqueInts([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 25), 5, 'Test 31');
test(findLeastNumOfUniqueInts([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6], 18), 2, 'Test 32');
test(findLeastNumOfUniqueInts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20), 5, 'Test 33');
test(findLeastNumOfUniqueInts([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 10, 'Test 34');
test(findLeastNumOfUniqueInts([1,2,3,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8], 20), 2, 'Test 35');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 15), 1, 'Test 36');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9], 25), 2, 'Test 37');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], 7), 2, 'Test 38');
test(findLeastNumOfUniqueInts([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5], 15), 1, 'Test 39');
test(findLeastNumOfUniqueInts([7,7,7,7,8,8,8,9,9,10,10,11,11,11,12,12,12,12,13,13,13,13,13], 10), 3, 'Test 40');
test(findLeastNumOfUniqueInts([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 20), 20, 'Test 41');
test(findLeastNumOfUniqueInts([11,12,12,13,13,13,14,14,14,14,15,15,15,15,15,16,16,16,16,16,16], 8), 3, 'Test 42');
test(findLeastNumOfUniqueInts([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4], 5), 2, 'Test 43');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10], 30), 2, 'Test 44');
test(findLeastNumOfUniqueInts([1,2,3,4,5,6,7,8,9,10,10,11,12,12,12,13,13,13,13,14,14,14,14,14], 15), 2, 'Test 45');
test(findLeastNumOfUniqueInts([10,20,20,30,30,30,40,40,40,40,50,50,50,50,50,60,60,60,60,60,60], 15), 1, 'Test 46');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], 5), 3, 'Test 47');
test(findLeastNumOfUniqueInts([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 1, 'Test 48');
test(findLeastNumOfUniqueInts([7,7,8,8,8,9,9,9,9,10,10,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12], 10), 3, 'Test 49');
test(findLeastNumOfUniqueInts([1,1,2,2,2,3,3,3,3,4,4,4,4,4], 5), 2, 'Test 50');
test(findLeastNumOfUniqueInts([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 40), 1, 'Test 51');
test(findLeastNumOfUniqueInts([1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 30), 1, 'Test 52');
test(findLeastNumOfUniqueInts([6,7,7,8,8,8,9,9,9,9,10,10,10,10,10,10], 10), 1, 'Test 53');
test(findLeastNumOfUniqueInts([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 20), 4, 'Test 54');
test(findLeastNumOfUniqueInts([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 30), 2, 'Test 55');
test(findLeastNumOfUniqueInts([1,1,1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6], 10), 3, 'Test 56');
test(findLeastNumOfUniqueInts([10,20,20,30,30,30,40,40,40,40,50,50,50,50,50,60,60,60,60,60,60], 12), 2, 'Test 57');
test(findLeastNumOfUniqueInts([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 25), 2, 'Test 58');
test(findLeastNumOfUniqueInts([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5], 15), 2, 'Test 59');
test(findLeastNumOfUniqueInts([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 15), 2, 'Test 60');
test(findLeastNumOfUniqueInts([22,23,23,24,24,24,25,25,25,25,26,26,26,26,26,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28], 20), 2, 'Test 61');
test(findLeastNumOfUniqueInts([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8], 15), 4, 'Test 62');
test(findLeastNumOfUniqueInts([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 1, 'Test 63');
test(findLeastNumOfUniqueInts([5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7], 20), 1, 'Test 64');
test(findLeastNumOfUniqueInts([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 10, 'Test 65');
test(findLeastNumOfUniqueInts([1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 20), 2, 'Test 66');
test(findLeastNumOfUniqueInts([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 25), 1, 'Test 67');
test(findLeastNumOfUniqueInts([36,37,37,38,38,38,39,39,39,39,40,40,40,40,40,41,41,41,41,41,41,41,41,41,42,42,42,42,42,42,42,42,42,42,42,42,42,42], 30), 1, 'Test 68');
test(findLeastNumOfUniqueInts([17,18,18,19,19,19,19,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21], 15), 1, 'Test 69');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

