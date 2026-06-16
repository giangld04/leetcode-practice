// Test: 674. Longest Continuous Increasing Subsequence
// 134 test cases from LeetCodeDataset
// Run: node test.js

const { findLengthOfLCIS } = require("./solution");

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

console.log("\n674. Longest Continuous Increasing Subsequence\n");

test(findLengthOfLCIS([1,3,5,7,9,11,13,15]), 8, 'Test 1');
test(findLengthOfLCIS([1,3,5,7,9,11,4,5,6,7,8,12]), 6, 'Test 2');
test(findLengthOfLCIS([0,1,2,3,0,1,2,3,4,5,6]), 7, 'Test 3');
test(findLengthOfLCIS([10,9,2,5,3,7,101,18]), 3, 'Test 4');
test(findLengthOfLCIS([1]), 1, 'Test 5');
test(findLengthOfLCIS([1,3,2,4,3,5,4,6]), 2, 'Test 6');
test(findLengthOfLCIS([15,14,13,12,11,10,9,8,7]), 1, 'Test 7');
test(findLengthOfLCIS([1,2,2]), 2, 'Test 8');
test(findLengthOfLCIS([1,3,5,4,7]), 3, 'Test 9');
test(findLengthOfLCIS([10,9,8,7,6,5,4,3,2,1,0]), 1, 'Test 10');
test(findLengthOfLCIS([1,2,3,4,5]), 5, 'Test 11');
test(findLengthOfLCIS([1,2,2,3,4,5,5,6,7]), 4, 'Test 12');
test(findLengthOfLCIS([1,2,0,3,4,5,6,7]), 6, 'Test 13');
test(findLengthOfLCIS([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 10, 'Test 14');
test(findLengthOfLCIS([1,2,2,3,4,5,5,6]), 4, 'Test 15');
test(findLengthOfLCIS([1,3,2,2,3,4,5,4,3,2,1]), 4, 'Test 16');
test(findLengthOfLCIS([1,3,5,7,9,11,4,5,6,7,8]), 6, 'Test 17');
test(findLengthOfLCIS([1,2,0,3,4,5,6,7,8,9,10]), 9, 'Test 18');
test(findLengthOfLCIS([5,4,3,2,1]), 1, 'Test 19');
test(findLengthOfLCIS([-1,3,2,4,5,6,7,8,9]), 7, 'Test 20');
test(findLengthOfLCIS([1,2]), 2, 'Test 21');
test(findLengthOfLCIS([0,1,2,3,-1,-2,-1,0,1,2]), 5, 'Test 22');
test(findLengthOfLCIS([0,1,0,3,2,3]), 2, 'Test 23');
test(findLengthOfLCIS([1,2,2,3,4,1,2,3,4,5]), 5, 'Test 24');
test(findLengthOfLCIS([1,2,0,1,2,3,4,5,0,1,2,3]), 6, 'Test 25');
test(findLengthOfLCIS([1,2,0,4,5,3,6,7]), 3, 'Test 26');
test(findLengthOfLCIS([2,2,2,2,2]), 1, 'Test 27');
test(findLengthOfLCIS([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8]), 8, 'Test 28');
test(findLengthOfLCIS([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]), 20, 'Test 29');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3]), 5, 'Test 30');
test(findLengthOfLCIS([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7]), 3, 'Test 31');
test(findLengthOfLCIS([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 32');
test(findLengthOfLCIS([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 33');
test(findLengthOfLCIS([-10,0,10,20,30,40,50,60,70,80]), 10, 'Test 34');
test(findLengthOfLCIS([2, 1]), 1, 'Test 35');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 12, 'Test 36');
test(findLengthOfLCIS([1,2,3,4,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 5, 'Test 37');
test(findLengthOfLCIS([5, 4, 3, 2, 1, 0, -1, -2, -3, -4]), 1, 'Test 38');
test(findLengthOfLCIS([1, 3, 5, 4, 7, 9, 11, 13, 12, 15, 17, 19, 21, 20, 22]), 5, 'Test 39');
test(findLengthOfLCIS([9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 40');
test(findLengthOfLCIS([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 41');
test(findLengthOfLCIS([]), 1, 'Test 42');
test(findLengthOfLCIS([1,2,3,1,2,3,1,2,3,1,2,3]), 3, 'Test 43');
test(findLengthOfLCIS([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8]), 1, 'Test 44');
test(findLengthOfLCIS([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 20, 'Test 45');
test(findLengthOfLCIS([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 20, 'Test 46');
test(findLengthOfLCIS([1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 10, 'Test 47');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 48');
test(findLengthOfLCIS([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 2, 'Test 49');
test(findLengthOfLCIS([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]), 21, 'Test 50');
test(findLengthOfLCIS([1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]), 6, 'Test 51');
test(findLengthOfLCIS([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 52');
test(findLengthOfLCIS([73,74,75,71,69,72,76,73]), 3, 'Test 53');
test(findLengthOfLCIS([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80]), 1, 'Test 54');
test(findLengthOfLCIS([23, 11, 56, 57, 58, 23, 24, 25, 26, 27, 28]), 6, 'Test 55');
test(findLengthOfLCIS([1, 3, 5, 4, 7, 8, 9, 10, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 11, 'Test 56');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 57');
test(findLengthOfLCIS([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 58');
test(findLengthOfLCIS([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1, 'Test 59');
test(findLengthOfLCIS([1, 2]), 2, 'Test 60');
test(findLengthOfLCIS([5, 7, 7, 8, 8, 9, 10, 9, 10, 11, 12, 13, 14]), 6, 'Test 61');
test(findLengthOfLCIS([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 62');
test(findLengthOfLCIS([1, 2, 3, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17]), 6, 'Test 63');
test(findLengthOfLCIS([5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 64');
test(findLengthOfLCIS([1,3,5,7,9,11,13,15,17,19]), 10, 'Test 65');
test(findLengthOfLCIS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 66');
test(findLengthOfLCIS([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 2, 'Test 67');
test(findLengthOfLCIS([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 2, 'Test 68');
test(findLengthOfLCIS([1,2,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 9, 'Test 69');
test(findLengthOfLCIS([1,2,3,4,3,4,5,6,5,6,7,8,7,8,9,10,9,10,11,12]), 4, 'Test 70');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 25, 'Test 71');
test(findLengthOfLCIS([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 1, 'Test 72');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 73');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 40, 'Test 74');
test(findLengthOfLCIS([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 14, 15]), 4, 'Test 75');
test(findLengthOfLCIS([100, 4, 200, 1, 3, 2, 150, 151, 152, 153]), 5, 'Test 76');
test(findLengthOfLCIS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 77');
test(findLengthOfLCIS([-1, -2, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 9, 'Test 78');
test(findLengthOfLCIS([1, 2, 3, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 12, 'Test 79');
test(findLengthOfLCIS([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 2, 'Test 80');
test(findLengthOfLCIS([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1, 'Test 81');
test(findLengthOfLCIS([5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 82');
test(findLengthOfLCIS([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 12]), 3, 'Test 83');
test(findLengthOfLCIS([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]), 15, 'Test 84');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 85');
test(findLengthOfLCIS([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 86');
test(findLengthOfLCIS([1,2,3,4,5,3,4,5,6,7,8,9,0,1,2]), 7, 'Test 87');
test(findLengthOfLCIS([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 10, 'Test 88');
test(findLengthOfLCIS([1, 3, 2, 3, 4, 5, 4, 6, 7, 8, 7, 9, 10]), 4, 'Test 89');
test(findLengthOfLCIS([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12]), 12, 'Test 90');
test(findLengthOfLCIS([1, 2, 3, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9]), 6, 'Test 91');
test(findLengthOfLCIS([100, 98, 96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76, 74, 72]), 1, 'Test 92');
test(findLengthOfLCIS([3, 3, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 93');
test(findLengthOfLCIS([10, 9, 2, 5, 3, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 5, 'Test 94');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 95');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 96');
test(findLengthOfLCIS([1,2,3,2,3,4,5,4,5,6,7,6,7,8]), 4, 'Test 97');
test(findLengthOfLCIS([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1, 'Test 98');
test(findLengthOfLCIS([1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]), 6, 'Test 99');
test(findLengthOfLCIS([1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]), 34, 'Test 100');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 101');
test(findLengthOfLCIS([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 2, 'Test 102');
test(findLengthOfLCIS([3,3,3,3,3,4,5,6,7,8,8,8,9,10,11,12,13,14,15,16]), 9, 'Test 103');
test(findLengthOfLCIS([5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 104');
test(findLengthOfLCIS([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), 2, 'Test 105');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 10, 'Test 106');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 107');
test(findLengthOfLCIS([1000000000, 999999999, 1000000001, 1000000002, 1000000003, 1000000002, 1000000003]), 4, 'Test 108');
test(findLengthOfLCIS([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 5, 'Test 109');
test(findLengthOfLCIS([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 2, 'Test 110');
test(findLengthOfLCIS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5]), 20, 'Test 111');
test(findLengthOfLCIS([10, 9, 2, 5, 3, 7, 101, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 13, 'Test 112');
test(findLengthOfLCIS([1, 3, 5, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 15, 'Test 113');
test(findLengthOfLCIS([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 114');
test(findLengthOfLCIS([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 115');
test(findLengthOfLCIS([9,8,7,6,5,4,3,2,1]), 1, 'Test 116');
test(findLengthOfLCIS([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 2, 'Test 117');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 118');
test(findLengthOfLCIS([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 20, 'Test 119');
test(findLengthOfLCIS([100, 98, 96, 97, 95, 93, 94, 92, 90, 91, 89, 87, 88, 86, 84, 85, 83, 82, 81]), 2, 'Test 120');
test(findLengthOfLCIS([3,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,-1,-1,-1,-1,-1]), 1, 'Test 121');
test(findLengthOfLCIS([1, 11, 2, 10, 4, 5, 2, 1]), 2, 'Test 122');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15]), 20, 'Test 123');
test(findLengthOfLCIS([5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1]), 1, 'Test 124');
test(findLengthOfLCIS([1, 2, 3, 2, 1, 2, 3, 4, 3, 4, 5, 6, 7, 8, 7, 8, 9, 10]), 6, 'Test 125');
test(findLengthOfLCIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 126');
test(findLengthOfLCIS([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 127');
test(findLengthOfLCIS([99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123]), 25, 'Test 128');
test(findLengthOfLCIS([4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 1, 'Test 129');
test(findLengthOfLCIS([1000000000,-1000000000,1000000000,-1000000000,1000000000,-1000000000]), 2, 'Test 130');
test(findLengthOfLCIS([5, 4, 3, 2, 1, 0]), 1, 'Test 131');
test(findLengthOfLCIS([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 132');
test(findLengthOfLCIS([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 133');
test(findLengthOfLCIS([10, 9, 2, 5, 3, 7, 101, 18]), 3, 'Test 134');

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
