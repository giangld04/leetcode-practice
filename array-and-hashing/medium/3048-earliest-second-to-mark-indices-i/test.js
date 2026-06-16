// Test: 3048. Earliest Second To Mark Indices I
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { earliestSecondToMarkIndices } = require("./solution");

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

console.log("\n3048. Earliest Second To Mark Indices I\n");

test(earliestSecondToMarkIndices([1,0,1,0], [1,2,3,4,1,2,3,4,1,2,3,4]), 6, 'Test 1');
test(earliestSecondToMarkIndices([10,0,10], [1,3,2,1,3,2,1,3,2,1]), -1, 'Test 2');
test(earliestSecondToMarkIndices([0,0,0,0], [1,2,3,4]), 4, 'Test 3');
test(earliestSecondToMarkIndices([1,3], [1,1,1,2,1,1,1]), 6, 'Test 4');
test(earliestSecondToMarkIndices([0,0,0], [1,2,3]), 3, 'Test 5');
test(earliestSecondToMarkIndices([5,4,3], [1,2,3,1,2,3,1,2,3]), -1, 'Test 6');
test(earliestSecondToMarkIndices([1,2,3,4], [4,3,2,1,4,3,2,1]), -1, 'Test 7');
test(earliestSecondToMarkIndices([10,20,30,40], [4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1]), -1, 'Test 8');
test(earliestSecondToMarkIndices([3,3,3,3], [4,3,2,1,4,3,2,1]), -1, 'Test 9');
test(earliestSecondToMarkIndices([1,1,1,1], [1,2,3,4,1,2,3,4]), 8, 'Test 10');
test(earliestSecondToMarkIndices([1,2,3,4,5], [5,4,3,2,1,5,4,3,2,1]), -1, 'Test 11');
test(earliestSecondToMarkIndices([10,10,10,10], [1,2,3,4,1,2,3,4,1,2,3,4]), -1, 'Test 12');
test(earliestSecondToMarkIndices([0,0,0,0], [1,2,3,4,1,2,3,4]), 4, 'Test 13');
test(earliestSecondToMarkIndices([100,200,300], [1,2,3,1,2,3,1,2,3]), -1, 'Test 14');
test(earliestSecondToMarkIndices([10,10,10], [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), -1, 'Test 15');
test(earliestSecondToMarkIndices([0,1], [2,2,2]), -1, 'Test 16');
test(earliestSecondToMarkIndices([1000000000,1000000000], [1,2,1,2,1,2]), -1, 'Test 17');
test(earliestSecondToMarkIndices([100,0,50], [1,1,1,3,3,3,2,2,2]), -1, 'Test 18');
test(earliestSecondToMarkIndices([2,2,0], [2,2,2,2,3,2,2,1]), 8, 'Test 19');
test(earliestSecondToMarkIndices([5,5,5], [1,2,3,1,2,3,1,2,3]), -1, 'Test 20');
test(earliestSecondToMarkIndices([1,0,3], [3,3,3,1,1,2,2,2]), -1, 'Test 21');
test(earliestSecondToMarkIndices([1,2,3,4], [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]), 14, 'Test 22');
test(earliestSecondToMarkIndices([3,2,1], [3,2,1,3,2,1]), -1, 'Test 23');
test(earliestSecondToMarkIndices([0,0,0,0,0], [1,2,3,4,5]), 5, 'Test 24');
test(earliestSecondToMarkIndices([10,20,30], [1,1,1,2,2,2,3,3,3]), -1, 'Test 25');
test(earliestSecondToMarkIndices([10,10,10], [1,1,1,2,2,2,3,3,3]), -1, 'Test 26');
test(earliestSecondToMarkIndices([1, 1, 1, 1, 1], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), 10, 'Test 27');
test(earliestSecondToMarkIndices([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 28');
test(earliestSecondToMarkIndices([1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]), 16, 'Test 29');
test(earliestSecondToMarkIndices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), -1, 'Test 30');
test(earliestSecondToMarkIndices([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), -1, 'Test 31');
test(earliestSecondToMarkIndices([100, 200, 300, 400], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), -1, 'Test 32');
test(earliestSecondToMarkIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), -1, 'Test 33');
test(earliestSecondToMarkIndices([10,20,30,40,50], [5,4,3,2,1,5,4,3,2,1]), -1, 'Test 34');
test(earliestSecondToMarkIndices([0, 0, 0, 0], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), 4, 'Test 35');
test(earliestSecondToMarkIndices([1, 3, 5, 7, 9, 11, 13], [1, 3, 5, 7, 9, 11, 13, 1, 3, 5, 7, 9, 11, 13]), Error: list index out of range, 'Test 36');
test(earliestSecondToMarkIndices([1, 0, 1, 0, 1, 0], [2, 4, 6, 1, 3, 5, 1, 3, 5, 2, 4, 6]), 9, 'Test 37');
test(earliestSecondToMarkIndices([0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 5, 'Test 38');
test(earliestSecondToMarkIndices([5, 5, 5, 5, 5], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), -1, 'Test 39');
test(earliestSecondToMarkIndices([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 40');
test(earliestSecondToMarkIndices([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), -1, 'Test 41');
test(earliestSecondToMarkIndices([10, 20, 30, 40, 50], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), -1, 'Test 42');
test(earliestSecondToMarkIndices([2, 3, 5, 7, 11, 13], [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]), -1, 'Test 43');
test(earliestSecondToMarkIndices([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 44');
test(earliestSecondToMarkIndices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 20, 'Test 45');
test(earliestSecondToMarkIndices([1,0,1,0,1,0,1,0,1,0], [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 15, 'Test 46');
test(earliestSecondToMarkIndices([9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 47');
test(earliestSecondToMarkIndices([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), -1, 'Test 48');
test(earliestSecondToMarkIndices([1000000, 1000000, 1000000, 1000000], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), -1, 'Test 49');
test(earliestSecondToMarkIndices([10, 20, 30, 40], [4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1]), -1, 'Test 50');
test(earliestSecondToMarkIndices([100, 200, 300], [3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1]), -1, 'Test 51');
test(earliestSecondToMarkIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]), -1, 'Test 52');
test(earliestSecondToMarkIndices([10, 20, 30, 40, 50], [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5]), -1, 'Test 53');
test(earliestSecondToMarkIndices([100, 100, 100, 100], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), -1, 'Test 54');
test(earliestSecondToMarkIndices([10, 0, 0, 10], [4, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1]), -1, 'Test 55');
test(earliestSecondToMarkIndices([5, 7, 9, 10], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), -1, 'Test 56');
test(earliestSecondToMarkIndices([5,5,5,5,5], [1,2,3,4,5,1,2,3,4,5]), -1, 'Test 57');
test(earliestSecondToMarkIndices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), -1, 'Test 58');
test(earliestSecondToMarkIndices([5, 5, 5, 5, 5, 5], [6, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1]), -1, 'Test 59');
test(earliestSecondToMarkIndices([100, 200, 300, 400], [4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1]), -1, 'Test 60');
test(earliestSecondToMarkIndices([0, 0, 0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7]), 7, 'Test 61');
test(earliestSecondToMarkIndices([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 7, 6, 5, 4, 3, 2, 1, 9]), -1, 'Test 62');
test(earliestSecondToMarkIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 63');
test(earliestSecondToMarkIndices([0, 10, 20, 30, 40], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), -1, 'Test 64');
test(earliestSecondToMarkIndices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 65');
test(earliestSecondToMarkIndices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 66');
test(earliestSecondToMarkIndices([1, 0, 2, 3, 4], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), -1, 'Test 67');
test(earliestSecondToMarkIndices([10, 20, 30, 40, 50, 60, 70], [7, 6, 5, 4, 3, 2, 1, 7, 6, 5, 4, 3, 2, 1, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 68');
test(earliestSecondToMarkIndices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 69');
test(earliestSecondToMarkIndices([100,200,300], [3,2,1,3,2,1,3,2,1,3,2,1]), -1, 'Test 70');
test(earliestSecondToMarkIndices([10,20,30,40,50,60,70,80,90,100], [10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), -1, 'Test 71');
test(earliestSecondToMarkIndices([10,9,8,7,6,5,4,3,2,1], [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10]), -1, 'Test 72');
test(earliestSecondToMarkIndices([5, 0, 2, 7, 3], [1, 5, 3, 4, 4, 2, 5, 3, 1, 2, 4, 3]), -1, 'Test 73');
test(earliestSecondToMarkIndices([10, 20, 30, 40], [4, 3, 2, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), -1, 'Test 74');
test(earliestSecondToMarkIndices([999999999,999999999,999999999], [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), -1, 'Test 75');
test(earliestSecondToMarkIndices([5, 10, 15, 20], [4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1]), -1, 'Test 76');
test(earliestSecondToMarkIndices([0,0,0,0,0,0,0,0,0,0], [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 77');
test(earliestSecondToMarkIndices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 78');
test(earliestSecondToMarkIndices([1000000000, 1000000000, 1000000000], [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), -1, 'Test 79');
test(earliestSecondToMarkIndices([0, 0, 0, 0], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), 4, 'Test 80');
test(earliestSecondToMarkIndices([1,0,2,0,3,0,4,0,5,0], [1,3,5,7,9,2,4,6,8,10,1,3,5,7,9,2,4,6,8,10]), -1, 'Test 81');
test(earliestSecondToMarkIndices([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 82');
test(earliestSecondToMarkIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 83');
test(earliestSecondToMarkIndices([1000000000, 1000000000, 1000000000], [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), -1, 'Test 84');
test(earliestSecondToMarkIndices([0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 5, 'Test 85');
test(earliestSecondToMarkIndices([5,0,8,3], [4,1,2,3,1,2,3,4,1,2,3,4]), -1, 'Test 86');
test(earliestSecondToMarkIndices([1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 20, 'Test 87');
test(earliestSecondToMarkIndices([9, 8, 7, 6, 5], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), -1, 'Test 88');
test(earliestSecondToMarkIndices([100, 200, 300, 400], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), -1, 'Test 89');
test(earliestSecondToMarkIndices([1, 0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 15, 'Test 90');
test(earliestSecondToMarkIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 91');
test(earliestSecondToMarkIndices([1000000000, 1000000000, 1000000000], [3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1]), -1, 'Test 92');
test(earliestSecondToMarkIndices([1000000000, 1000000000, 1000000000], [1, 1, 1, 2, 2, 2, 3, 3, 3]), -1, 'Test 93');
test(earliestSecondToMarkIndices([5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), -1, 'Test 94');
test(earliestSecondToMarkIndices([0,0,0,0,0,0,0,0,0,0], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 95');
test(earliestSecondToMarkIndices([100, 0, 50, 25, 75], [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]), -1, 'Test 96');
test(earliestSecondToMarkIndices([100, 200, 300, 400, 500], [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]), -1, 'Test 97');
test(earliestSecondToMarkIndices([10, 20, 30, 40, 50], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), -1, 'Test 98');
test(earliestSecondToMarkIndices([0,0,1,1,2,2], [3,3,4,4,5,5,1,1,2,2]), -1, 'Test 99');
test(earliestSecondToMarkIndices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 100');
test(earliestSecondToMarkIndices([0, 0, 0, 0], [1, 2, 3, 4, 1, 2, 3, 4]), 4, 'Test 101');
test(earliestSecondToMarkIndices([2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 102');
test(earliestSecondToMarkIndices([1000000000, 1000000000], [1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2]), -1, 'Test 103');
test(earliestSecondToMarkIndices([100,200,300,400], [4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1]), -1, 'Test 104');
test(earliestSecondToMarkIndices([1000, 1000, 1000, 1000], [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), -1, 'Test 105');
test(earliestSecondToMarkIndices([1, 0, 0, 1], [4, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1]), -1, 'Test 106');
test(earliestSecondToMarkIndices([10, 20, 30], [1, 2, 3, 3, 2, 1, 1, 2, 3, 3, 2, 1, 1, 2, 3]), -1, 'Test 107');
test(earliestSecondToMarkIndices([1, 0, 0, 0, 1], [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 7, 'Test 108');
test(earliestSecondToMarkIndices([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), -1, 'Test 109');
test(earliestSecondToMarkIndices([1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 110');
test(earliestSecondToMarkIndices([1, 0, 1, 0, 1, 0, 1], [1, 3, 5, 7, 2, 4, 6, 1, 3, 5, 7, 2, 4, 6]), 11, 'Test 111');
test(earliestSecondToMarkIndices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), -1, 'Test 112');
test(earliestSecondToMarkIndices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 113');
test(earliestSecondToMarkIndices([10, 20, 30, 40], [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), -1, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
