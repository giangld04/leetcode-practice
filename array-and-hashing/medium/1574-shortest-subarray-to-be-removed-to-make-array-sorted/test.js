// Test: 1574. Shortest Subarray To Be Removed To Make Array Sorted
// 189 test cases from LeetCodeDataset
// Run: node test.js

const { findLengthOfShortestSubarray } = require("./solution");

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

console.log("\n1574. Shortest Subarray To Be Removed To Make Array Sorted\n");

test(findLengthOfShortestSubarray([5,4,3,2,1]), 4, 'Test 1');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,1]), 9, 'Test 2');
test(findLengthOfShortestSubarray([1,2,3]), 0, 'Test 3');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,0]), 10, 'Test 4');
test(findLengthOfShortestSubarray([1,2,3,4,5,5,6,7,8,9,10]), 0, 'Test 5');
test(findLengthOfShortestSubarray([1,2,3,4,5,3,5]), 1, 'Test 6');
test(findLengthOfShortestSubarray([1,2,2,2,3,4,5,5,5,4,3,2,1]), 4, 'Test 7');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,1]), 1, 'Test 8');
test(findLengthOfShortestSubarray([1,3,5,4,7,9,8,11,13,12]), 6, 'Test 9');
test(findLengthOfShortestSubarray([1]), 0, 'Test 10');
test(findLengthOfShortestSubarray([1,3,5,4,7]), 1, 'Test 11');
test(findLengthOfShortestSubarray([1,1,1,1,1]), 0, 'Test 12');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1]), 9, 'Test 13');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 14');
test(findLengthOfShortestSubarray([1,3,5,2,4,6,7]), 2, 'Test 15');
test(findLengthOfShortestSubarray([1,2,2,3,4,5]), 0, 'Test 16');
test(findLengthOfShortestSubarray([1,2,3,4,5,3,5,6,7,8,9]), 1, 'Test 17');
test(findLengthOfShortestSubarray([1,2,3,4,5,3,4,5]), 2, 'Test 18');
test(findLengthOfShortestSubarray([1,2,3,4,5]), 0, 'Test 19');
test(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5]), 3, 'Test 20');
test(findLengthOfShortestSubarray([1,2,2,3,1,4,5]), 1, 'Test 21');
test(findLengthOfShortestSubarray([1,2,3,2,1]), 2, 'Test 22');
test(findLengthOfShortestSubarray([1,2,3,4,3,2,1]), 3, 'Test 23');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9]), 0, 'Test 24');
test(findLengthOfShortestSubarray([1,3,2,4,5]), 1, 'Test 25');
test(findLengthOfShortestSubarray([1,3,2,4,3,5]), 2, 'Test 26');
test(findLengthOfShortestSubarray([1,2,3,4,3,2,1,2,3]), 5, 'Test 27');
test(findLengthOfShortestSubarray([1,2,3,4,3,2,1,2,3,4,5]), 5, 'Test 28');
test(findLengthOfShortestSubarray([1,2,3,4,5,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 2, 'Test 29');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13]), 13, 'Test 30');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10]), 8, 'Test 31');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,10]), 21, 'Test 32');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 33');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 9, 'Test 34');
test(findLengthOfShortestSubarray([1,3,5,4,7,9,8,11,13,12,14,16,15,17,19,18,20,22,21,23,25,24,26,28,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]), 21, 'Test 35');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,20,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 8, 'Test 36');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 37');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5]), 5, 'Test 38');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]), 6, 'Test 39');
test(findLengthOfShortestSubarray([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2,0,1,3,5,7,9,11,13,15]), 15, 'Test 40');
test(findLengthOfShortestSubarray([1,2,3,4,5,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37]), 1, 'Test 41');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1]), 21, 'Test 42');
test(findLengthOfShortestSubarray([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4]), 4, 'Test 43');
test(findLengthOfShortestSubarray([1,2,3,4,5,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 13, 'Test 44');
test(findLengthOfShortestSubarray([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2,0]), 8, 'Test 45');
test(findLengthOfShortestSubarray([5, 6, 7, 8, 9, 10, 8, 9, 10, 11, 12, 13, 14]), 2, 'Test 46');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,10,9,8]), 23, 'Test 47');
test(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5,6,7,8,9,10,11]), 3, 'Test 48');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 29, 'Test 49');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19]), 5, 'Test 50');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5]), 5, 'Test 51');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 9, 'Test 52');
test(findLengthOfShortestSubarray([1,2,3,4,5,3,4,5,1,2,3,4,5,6,7,8,9]), 7, 'Test 53');
test(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5,6,7,8,9,10,11,1,2,3,4,5,12,13,14,15,16,17,18,19,20,1,2,3,4]), 27, 'Test 54');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6]), 6, 'Test 55');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5]), 5, 'Test 56');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 57');
test(findLengthOfShortestSubarray([1,3,5,7,9,8,7,6,5,4,3,2,1]), 8, 'Test 58');
test(findLengthOfShortestSubarray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 9, 'Test 59');
test(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5,6,7,8,9,10,11,1,2,3,4,5,12,13,14,15,16,17]), 13, 'Test 60');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 19, 'Test 61');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8]), 8, 'Test 62');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 18, 'Test 63');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9]), 9, 'Test 64');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 65');
test(findLengthOfShortestSubarray([1, 3, 5, 7, 9, 11, 13, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 7, 'Test 66');
test(findLengthOfShortestSubarray([1,2,3,4,5,3,5,7,9,8,10,12,11,13,15,14,16,18,17,19,21,20,22,24,23,25]), 19, 'Test 67');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 68');
test(findLengthOfShortestSubarray([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 29, 'Test 69');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9]), 19, 'Test 70');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12]), 12, 'Test 71');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3]), 3, 'Test 72');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 17, 'Test 73');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9]), 10, 'Test 74');
test(findLengthOfShortestSubarray([100, 200, 300, 400, 500, 100, 200, 300, 400, 500, 600]), 4, 'Test 75');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10]), 4, 'Test 76');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1]), 1, 'Test 77');
test(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5,6,7,8,9,10,11,1,2,3,4,5,12,13,14,15,16,17,18,19,20,1,2]), 26, 'Test 78');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 49, 'Test 79');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,11]), 8, 'Test 80');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11]), 11, 'Test 81');
test(findLengthOfShortestSubarray([1,2,3,4,5,4,3,2,1,0]), 5, 'Test 82');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7]), 7, 'Test 83');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 18, 'Test 84');
test(findLengthOfShortestSubarray([40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 39, 'Test 85');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 14, 'Test 86');
test(findLengthOfShortestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 87');
test(findLengthOfShortestSubarray([1,3,5,4,7,9,8,11,13,12,20,22,21,24,23,26,25,28,27,30,29,32,31,34,33,36,35]), 23, 'Test 88');
test(findLengthOfShortestSubarray([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 9, 'Test 89');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 19, 'Test 90');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 15, 'Test 91');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 29, 'Test 92');
test(findLengthOfShortestSubarray([1, 3, 5, 4, 7, 9, 8, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20]), 6, 'Test 93');
test(findLengthOfShortestSubarray([1,2,3,4,5,1,6,7,8,9,10,11,12,13,14,15]), 1, 'Test 94');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]), 17, 'Test 95');
test(findLengthOfShortestSubarray([10,20,30,40,50,60,70,80,90,100,95,105,110,115,120,125,130,135,140,145]), 1, 'Test 96');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 16, 'Test 97');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), 18, 'Test 98');
test(findLengthOfShortestSubarray([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13]), 13, 'Test 99');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 17, 'Test 100');
test(findLengthOfShortestSubarray([10, 20, 30, 25, 26, 27, 15, 16, 17, 18, 19]), 5, 'Test 101');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 102');
test(findLengthOfShortestSubarray([10,20,30,40,50,60,70,80,90,100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 10, 'Test 103');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11]), 9, 'Test 104');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 29, 'Test 105');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1]), 1, 'Test 106');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 107');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 108');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 109');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 8, 'Test 110');
test(findLengthOfShortestSubarray([1,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 2, 'Test 111');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 112');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 9, 'Test 113');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3]), 3, 'Test 114');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8]), 16, 'Test 115');
test(findLengthOfShortestSubarray([1,2,3,10,11,12,4,5,6,7,8,9,13,14,15]), 3, 'Test 116');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,20,3,4,5,6,7,8,9,10,11]), 8, 'Test 117');
test(findLengthOfShortestSubarray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 118');
test(findLengthOfShortestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 119');
test(findLengthOfShortestSubarray([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5]), 19, 'Test 120');
test(findLengthOfShortestSubarray([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 121');
test(findLengthOfShortestSubarray([1,10,20,15,25,30,5,10,15,20]), 5, 'Test 122');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10]), 10, 'Test 123');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9]), 9, 'Test 124');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 0, 'Test 125');
test(findLengthOfShortestSubarray([1,2,3,4,5,10,4,2,3,5,6,7,8,9,10,11,1,2,3,4,5,12,13,14,15,16,17,18,19,20,1,2,3]), 27, 'Test 126');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1]), 11, 'Test 127');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,10,15,20,25,30,35,40,45,50,5,10,15]), 11, 'Test 128');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 129');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,11,12,13,14]), 5, 'Test 130');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28,29,30]), 9, 'Test 131');
test(findLengthOfShortestSubarray([1,2,3,4,5,10,4,2,3,5,6,7,8,9,10,11,1,2,3,4,5,12,13,14,15,16,17,18,19]), 15, 'Test 132');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,9,10,11,12,13,14,15]), 1, 'Test 133');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 14, 'Test 134');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1]), 21, 'Test 135');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 14, 'Test 136');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 5, 'Test 137');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7]), 7, 'Test 138');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,10,9]), 22, 'Test 139');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,1,3,5,7,9,11]), 23, 'Test 140');
test(findLengthOfShortestSubarray([5,10,15,20,25,30,2,3,4,6,7,8,9,11,12,13,14,16,17,18,19,21,22,23,24,26,27,28,29]), 6, 'Test 141');
test(findLengthOfShortestSubarray([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 51, 'Test 142');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 9, 'Test 143');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 144');
test(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5,6,7,8,9,10,11,1,2,3,4,5]), 13, 'Test 145');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,1]), 10, 'Test 146');
test(findLengthOfShortestSubarray([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2,0,1,2,3,4,5,6,7,8,9,10]), 15, 'Test 147');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 8, 'Test 148');
test(findLengthOfShortestSubarray([1,10,9,8,7,6,5,4,3,2,1,10,11,12,13,14,15,16,17,18,19,20]), 9, 'Test 149');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4]), 4, 'Test 150');
test(findLengthOfShortestSubarray([1,2,3,4,5,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 15, 'Test 151');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 152');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,11,12,13,14,15]), 5, 'Test 153');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9]), 5, 'Test 154');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 9, 'Test 155');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10]), 17, 'Test 156');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 18, 'Test 157');
test(findLengthOfShortestSubarray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,28,26,24,22,20,18,16,14,12,10,8,6,4,2]), 14, 'Test 158');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 19, 'Test 159');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 29, 'Test 160');
test(findLengthOfShortestSubarray([60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 59, 'Test 161');
test(findLengthOfShortestSubarray([5,4,3,2,1,2,3,4,5]), 4, 'Test 162');
test(findLengthOfShortestSubarray([1,3,5,4,7,9,8,11,13,12,14,16,15,17,19,18,20,22,21,23,25,24,26,28,27,29]), 21, 'Test 163');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,1,2,3,4,5]), 23, 'Test 164');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,2,3,4,5]), 9, 'Test 165');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 15, 'Test 166');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 167');
test(findLengthOfShortestSubarray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 168');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 0, 'Test 169');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 170');
test(findLengthOfShortestSubarray([1,2,3,4,5,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 5, 'Test 171');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1]), 1, 'Test 172');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2,3,4]), 4, 'Test 173');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 174');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10]), 8, 'Test 175');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 176');
test(findLengthOfShortestSubarray([1,3,5,4,7,9,8,11,13,12,15,17,16,18,20,19,21,23,22,24,26,25]), 18, 'Test 177');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), 10, 'Test 178');
test(findLengthOfShortestSubarray([1,3,5,4,7,9,8,11,13,12,14,16,15,17,19,18,20,22,21,23,25,24,26,28,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 21, 'Test 179');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]), 0, 'Test 180');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3]), 33, 'Test 181');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,3,5,7,9,11]), 6, 'Test 182');
test(findLengthOfShortestSubarray([10,20,30,40,50,60,5,6,7,8,9,10]), 6, 'Test 183');
test(findLengthOfShortestSubarray([10,9,8,7,6,5,4,3,2,1,11,12,13,14,15,16,17,18,19,20]), 9, 'Test 184');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 35, 'Test 185');
test(findLengthOfShortestSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1,2]), 2, 'Test 186');
test(findLengthOfShortestSubarray([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 2, 'Test 187');
test(findLengthOfShortestSubarray([1,3,5,4,7,9,8,11,13,12,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 9, 'Test 188');
test(findLengthOfShortestSubarray([1,2,3,1,2,3,4,5,6,7,8,9]), 2, 'Test 189');

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
