// Test: 4. Median Of Two Sorted Arrays
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { findMedianSortedArrays } = require("./solution");

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

console.log("\n4. Median Of Two Sorted Arrays\n");

test(findMedianSortedArrays([100,200,300], [150,250,350]), 225.0, 'Test 1');
test(findMedianSortedArrays([2], []), 2.0, 'Test 2');
test(findMedianSortedArrays([1,3], [2]), 2.0, 'Test 3');
test(findMedianSortedArrays([1], [2,3,4,5,6,7,8,9,10]), 5.5, 'Test 4');
test(findMedianSortedArrays([1000000], [-1000000]), 0.0, 'Test 5');
test(findMedianSortedArrays([1,2,3,4,5,6,7,8,9], [10,11,12,13,14,15,16,17,18,19]), 10.0, 'Test 6');
test(findMedianSortedArrays([1,3,5,7], [2,4,6,8]), 4.5, 'Test 7');
test(findMedianSortedArrays([10,20,30], [5,15,25,35,45]), 22.5, 'Test 8');
test(findMedianSortedArrays([0,0], [0,0]), 0.0, 'Test 9');
test(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20]), 10.5, 'Test 10');
test(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10]), 5.5, 'Test 11');
test(findMedianSortedArrays([1,2,3], [0,4,5,6]), 3.0, 'Test 12');
test(findMedianSortedArrays([5,6], [1,2,3,4,7,8]), 4.5, 'Test 13');
test(findMedianSortedArrays([1,3,5,7], [2,4,6,8,10]), 5.0, 'Test 14');
test(findMedianSortedArrays([1,2,3,4,5,6], [0]), 3.0, 'Test 15');
test(findMedianSortedArrays([1,2,3], [4]), 2.5, 'Test 16');
test(findMedianSortedArrays([1,2], [3]), 2.0, 'Test 17');
test(findMedianSortedArrays([1,3,5], [2,4,6]), 3.5, 'Test 18');
test(findMedianSortedArrays([1], [2,3,4]), 2.5, 'Test 19');
test(findMedianSortedArrays([1,2], [3,4]), 2.5, 'Test 20');
test(findMedianSortedArrays([10,20,30,40,50], [5,15,25,35,45]), 27.5, 'Test 21');
test(findMedianSortedArrays([], [1]), 1.0, 'Test 22');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], [2, 4, 6, 8, 10]), 10.5, 'Test 23');
test(findMedianSortedArrays([1000000, 1000001, 1000002, 1000003, 1000004], [999999, 1000000, 1000005, 1000010]), 1000002.0, 'Test 24');
test(findMedianSortedArrays([-1000000, -999999, -999998], [-1000001, -999997, -999995, -999993, -999991]), -999997.5, 'Test 25');
test(findMedianSortedArrays([5, 9, 11, 19], [1, 3, 4, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18]), 10.5, 'Test 26');
test(findMedianSortedArrays([-5, -3, -1], [-6, -4, -2, 0]), -3.0, 'Test 27');
test(findMedianSortedArrays([-10, -5, 0, 5, 10], [-7, -3, 2, 7, 12]), 1.0, 'Test 28');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 15.5, 'Test 29');
test(findMedianSortedArrays([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10]), 8.0, 'Test 30');
test(findMedianSortedArrays([-1000000], [0,1000000]), 0.0, 'Test 31');
test(findMedianSortedArrays([1], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10.5, 'Test 32');
test(findMedianSortedArrays([-10, -9, -8, -7, -6], [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), -2.5, 'Test 33');
test(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10.5, 'Test 34');
test(findMedianSortedArrays([1], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 15.0, 'Test 35');
test(findMedianSortedArrays([1, 5, 9, 13], [2, 6, 10, 14, 18]), 9.0, 'Test 36');
test(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 8.0, 'Test 37');
test(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15]), 8.0, 'Test 38');
test(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10], [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 0.0, 'Test 39');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 10.5, 'Test 40');
test(findMedianSortedArrays([-5, -3, -1, 1, 3, 5], [-6, -4, -2, 0, 2, 4, 6]), 0.0, 'Test 41');
test(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12, 14, 16]), 7.0, 'Test 42');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10.5, 'Test 43');
test(findMedianSortedArrays([1], [1000000]), 500000.5, 'Test 44');
test(findMedianSortedArrays([5, 15, 25, 35, 45], [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 37.5, 'Test 45');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30]), 15.5, 'Test 46');
test(findMedianSortedArrays([-1000000, -999999, -999998], [-1000001, -1000000, -999999, -999998]), -999999.0, 'Test 47');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20]), 10.5, 'Test 48');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25]), 13.0, 'Test 49');
test(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 25.5, 'Test 50');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16]), 8.5, 'Test 51');
test(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 20.5, 'Test 52');
test(findMedianSortedArrays([1, 3, 5, 7, 9], [0, 2, 4, 6, 8]), 4.5, 'Test 53');
test(findMedianSortedArrays([100, 200, 300, 400, 500], [5, 15, 25, 35, 45, 55]), 55.0, 'Test 54');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 20.5, 'Test 55');
test(findMedianSortedArrays([], [1,3,5,7,9]), 5.0, 'Test 56');
test(findMedianSortedArrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 15.5, 'Test 57');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 20.5, 'Test 58');
test(findMedianSortedArrays([100,200,300,400,500], [50,150,250,350,450,550]), 300.0, 'Test 59');
test(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [21,22,23,24,25,26,27,28,29,30]), 15.5, 'Test 60');
test(findMedianSortedArrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 20.5, 'Test 61');
test(findMedianSortedArrays([10, 20, 30, 40, 50], [5, 15, 25, 35, 45, 55]), 30.0, 'Test 62');
test(findMedianSortedArrays([1,2,3], [1,2,3,4,5,6,7,8,9,10]), 4.0, 'Test 63');
test(findMedianSortedArrays([-1, -3, -5, -7, -9], [-2, -4, -6, -8, -10]), -5.5, 'Test 64');
test(findMedianSortedArrays([1,3,5,7,9,11], [2,4,6,8,10,12]), 6.5, 'Test 65');
test(findMedianSortedArrays([100, 200, 300, 400, 500], [50, 150, 250, 350, 450, 550, 650]), 325.0, 'Test 66');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 15.5, 'Test 67');
test(findMedianSortedArrays([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], [500, 1500, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 9500, 10500]), 5500.0, 'Test 68');
test(findMedianSortedArrays([-10, -8, -6, -4, -2], [-9, -7, -5, -3, -1]), -5.5, 'Test 69');
test(findMedianSortedArrays([1000000], [999999]), 999999.5, 'Test 70');
test(findMedianSortedArrays([-5, -3, -1, 1, 3], [-10, -8, -6, -4, -2]), -3.5, 'Test 71');
test(findMedianSortedArrays([], [1, 2, 3, 4, 5]), 3.0, 'Test 72');
test(findMedianSortedArrays([1,5,9,13,17], [2,6,10,14,18]), 9.5, 'Test 73');
test(findMedianSortedArrays([1000000, 1000001, 1000002], [999999, 1000000, 1000001, 1000002]), 1000001.0, 'Test 74');
test(findMedianSortedArrays([100000, 100001, 100002, 100003, 100004], [100005, 100006, 100007, 100008, 100009]), 100004.5, 'Test 75');
test(findMedianSortedArrays([-5,-4,-3,-2,-1], [0,1,2,3,4,5]), 0.0, 'Test 76');
test(findMedianSortedArrays([100000], [-100000, -99999, -99998, -99997, -99996, -99995]), -99997.0, 'Test 77');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []), 5.5, 'Test 78');
test(findMedianSortedArrays([1,2,3,4,5], []), 3.0, 'Test 79');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], [2, 4, 6, 8, 10]), 15.0, 'Test 80');
test(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 5.5, 'Test 81');
test(findMedianSortedArrays([], [1,2,3,4,5]), 3.0, 'Test 82');
test(findMedianSortedArrays([-5, -3, 0, 8], [-10, -4, 2, 6, 12]), 0.0, 'Test 83');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 13.0, 'Test 84');
test(findMedianSortedArrays([-1,3,5,7,9], [-2,-4,-6,-8,-10]), -5.5, 'Test 85');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]), 25.5, 'Test 86');
test(findMedianSortedArrays([1, 2, 2, 3, 3], [2, 2, 3, 3, 4, 4, 5, 5]), 3.0, 'Test 87');
test(findMedianSortedArrays([100, 200, 300], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 6.5, 'Test 88');
test(findMedianSortedArrays([], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10.5, 'Test 89');
test(findMedianSortedArrays([], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5.5, 'Test 90');
test(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 7, 8, 9, 10]), 5.5, 'Test 91');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], []), 13.0, 'Test 92');
test(findMedianSortedArrays([100, 200, 300, 400, 500], [50, 150, 250, 350, 450, 550]), 300.0, 'Test 93');
test(findMedianSortedArrays([-5,0,3,8,12], [-10,-1,2,4,9,14]), 3.0, 'Test 94');
test(findMedianSortedArrays([50,60,70,80,90], [10,20,30,40]), 50.0, 'Test 95');
test(findMedianSortedArrays([1, 3, 5], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 18.0, 'Test 96');
test(findMedianSortedArrays([1,5,7,9,11,13], [2,4,6,8,10,12,14]), 8.0, 'Test 97');
test(findMedianSortedArrays([-10, -5, 0, 5, 10], [-20, -15, -1, 1, 6, 11, 15, 20]), 1.0, 'Test 98');
test(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12]), 6.5, 'Test 99');
test(findMedianSortedArrays([-1, -2, -3, -4, -5], [-10, -9, -8, -7, -6]), -3.5, 'Test 100');
test(findMedianSortedArrays([0, 0, 0, 0], [0, 0, 0, 0]), 0.0, 'Test 101');
test(findMedianSortedArrays([5, 15, 25, 35, 45], [10, 20, 30, 40, 50, 60]), 30.0, 'Test 102');
test(findMedianSortedArrays([100, 200, 300], [50, 150, 250, 350]), 200.0, 'Test 103');
test(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]), 12.0, 'Test 104');
test(findMedianSortedArrays([1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1.0, 'Test 105');
test(findMedianSortedArrays([-100000, -99999, -99998], [-99997, -99996, -99995, -99994, -99993, -99992]), -99996.0, 'Test 106');
test(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], []), 10.5, 'Test 107');
test(findMedianSortedArrays([1, 2, 3, 4, 5], []), 3.0, 'Test 108');
test(findMedianSortedArrays([1], [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), 19.0, 'Test 109');
test(findMedianSortedArrays([1, 2, 2, 3, 4], [2, 2, 3, 4, 5]), 2.5, 'Test 110');
test(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12, 14]), 6.5, 'Test 111');
test(findMedianSortedArrays([100, 200, 300, 400], [50, 150, 250, 350, 450, 550]), 275.0, 'Test 112');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

