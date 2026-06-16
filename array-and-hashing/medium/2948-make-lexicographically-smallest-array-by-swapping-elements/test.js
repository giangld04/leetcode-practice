// Test: 2948. Make Lexicographically Smallest Array By Swapping Elements
// 138 test cases from LeetCodeDataset
// Run: node test.js

const { lexicographicallySmallestArray } = require("./solution");

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

console.log("\n2948. Make Lexicographically Smallest Array By Swapping Elements\n");

test(lexicographicallySmallestArray([10,10,10,10,10], 0), [10, 10, 10, 10, 10], 'Test 1');
test(lexicographicallySmallestArray([1,1,1,1,1], 1), [1, 1, 1, 1, 1], 'Test 2');
test(lexicographicallySmallestArray([10,9,8,7,6,5,4,3,2,1], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 3');
test(lexicographicallySmallestArray([3,1,4,1,5,9,2,6,5,3,5], 2), [1, 1, 2, 3, 3, 9, 4, 5, 5, 5, 6], 'Test 4');
test(lexicographicallySmallestArray([9,7,5,3,1], 2), [1, 3, 5, 7, 9], 'Test 5');
test(lexicographicallySmallestArray([1,2,3,4,5,6,7,8,9,10], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 6');
test(lexicographicallySmallestArray([10,20,30,40,50], 5), [10, 20, 30, 40, 50], 'Test 7');
test(lexicographicallySmallestArray([10,9,8,7,6], 1), [6, 7, 8, 9, 10], 'Test 8');
test(lexicographicallySmallestArray([1,7,28,19,10], 3), [1, 7, 28, 19, 10], 'Test 9');
test(lexicographicallySmallestArray([1,10,2,9,3,8,4,7,5,6], 9), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 10');
test(lexicographicallySmallestArray([5,5,5,5,5], 0), [5, 5, 5, 5, 5], 'Test 11');
test(lexicographicallySmallestArray([1,3,5,7,9], 2), [1, 3, 5, 7, 9], 'Test 12');
test(lexicographicallySmallestArray([5,4,3,2,1], 1), [1, 2, 3, 4, 5], 'Test 13');
test(lexicographicallySmallestArray([100,90,80,70,60,50,40,30,20,10], 10), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 14');
test(lexicographicallySmallestArray([1,7,6,18,2,1], 3), [1, 6, 7, 18, 1, 2], 'Test 15');
test(lexicographicallySmallestArray([5,5,5,5,5], 1), [5, 5, 5, 5, 5], 'Test 16');
test(lexicographicallySmallestArray([1,2,3,4,5], 10), [1, 2, 3, 4, 5], 'Test 17');
test(lexicographicallySmallestArray([1,5,3,9,8], 2), [1, 3, 5, 8, 9], 'Test 18');
test(lexicographicallySmallestArray([10, 20, 15, 18, 17, 25, 30, 35, 40, 45], 5), [10, 15, 17, 18, 20, 25, 30, 35, 40, 45], 'Test 19');
test(lexicographicallySmallestArray([3, 8, 13, 18, 23, 28, 33], 10), [3, 8, 13, 18, 23, 28, 33], 'Test 20');
test(lexicographicallySmallestArray([3,1,2,4,5,6,7,8,9,10], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 21');
test(lexicographicallySmallestArray([5, 9, 2, 8, 1, 7, 3, 6, 4, 10], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 22');
test(lexicographicallySmallestArray([3, 5, 1, 8, 7, 2, 4, 6], 2), [1, 2, 3, 4, 5, 6, 7, 8], 'Test 23');
test(lexicographicallySmallestArray([1,1,1,1,1,1,1,1,1,1], 1), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 24');
test(lexicographicallySmallestArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6], 1), [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6], 'Test 25');
test(lexicographicallySmallestArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 26');
test(lexicographicallySmallestArray([10, 14, 13, 12, 11, 9, 8, 7, 6, 5], 2), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 27');
test(lexicographicallySmallestArray([1, 3, 2, 6, 5, 4, 9, 7, 8, 10], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 28');
test(lexicographicallySmallestArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 2), [1, 1, 2, 3, 3, 9, 4, 5, 5, 5, 6], 'Test 29');
test(lexicographicallySmallestArray([100, 101, 99, 102, 103, 98, 104, 105, 97, 106], 5), [97, 98, 99, 100, 101, 102, 103, 104, 105, 106], 'Test 30');
test(lexicographicallySmallestArray([9, 19, 29, 39, 49, 59, 69, 79, 89, 99], 10), [9, 19, 29, 39, 49, 59, 69, 79, 89, 99], 'Test 31');
test(lexicographicallySmallestArray([1, 100, 2, 99, 3, 98, 4, 97, 5, 96], 50), [1, 96, 2, 97, 3, 98, 4, 99, 5, 100], 'Test 32');
test(lexicographicallySmallestArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 33');
test(lexicographicallySmallestArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3), [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 'Test 34');
test(lexicographicallySmallestArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 25), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 35');
test(lexicographicallySmallestArray([1,5,3,9,8,4,6,7,2,10], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 36');
test(lexicographicallySmallestArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 37');
test(lexicographicallySmallestArray([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 2), [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 'Test 38');
test(lexicographicallySmallestArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 2), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 'Test 39');
test(lexicographicallySmallestArray([4,4,4,4,4,4,4,4,4,4], 1), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 40');
test(lexicographicallySmallestArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 'Test 41');
test(lexicographicallySmallestArray([1,6,8,2,4,3,9,10,12,11], 3), [1, 2, 3, 4, 6, 8, 9, 10, 11, 12], 'Test 42');
test(lexicographicallySmallestArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 43');
test(lexicographicallySmallestArray([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5], 1), [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], 'Test 44');
test(lexicographicallySmallestArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 2), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 'Test 45');
test(lexicographicallySmallestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 46');
test(lexicographicallySmallestArray([31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1], 2), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 'Test 47');
test(lexicographicallySmallestArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 48');
test(lexicographicallySmallestArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 0), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 49');
test(lexicographicallySmallestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 50');
test(lexicographicallySmallestArray([5,10,15,20,25,30,35,40,45,50], 5), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 51');
test(lexicographicallySmallestArray([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995], 10), [999999995, 999999996, 999999997, 999999998, 999999999, 1000000000], 'Test 52');
test(lexicographicallySmallestArray([109, 98, 87, 76, 65, 54, 43, 32, 21, 10], 10), [109, 98, 87, 76, 65, 54, 43, 32, 21, 10], 'Test 53');
test(lexicographicallySmallestArray([1, 5, 3, 9, 8, 2, 6, 4, 10, 7], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 54');
test(lexicographicallySmallestArray([50, 45, 40, 35, 30, 25, 20, 15, 10, 5], 5), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 55');
test(lexicographicallySmallestArray([2,1,5,6,3,4,8,7,10,9], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 56');
test(lexicographicallySmallestArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 'Test 57');
test(lexicographicallySmallestArray([5, 1, 9, 3, 7, 2, 8, 4, 6, 10], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 58');
test(lexicographicallySmallestArray([7,3,9,1,5,11,13,12,14,10], 3), [1, 3, 5, 7, 9, 10, 11, 12, 13, 14], 'Test 59');
test(lexicographicallySmallestArray([1,2,3,4,5,6,7,8,9,10], 5), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 60');
test(lexicographicallySmallestArray([4, 1, 5, 3, 2, 8, 7, 6], 2), [1, 2, 3, 4, 5, 6, 7, 8], 'Test 61');
test(lexicographicallySmallestArray([1, 5, 3, 7, 2, 6, 4, 8, 10, 9], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 62');
test(lexicographicallySmallestArray([100,99,98,97,96,95,94,93,92,91], 5), [91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 'Test 63');
test(lexicographicallySmallestArray([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991], 5), [999999991, 999999992, 999999993, 999999994, 999999995, 999999996, 999999997, 999999998, 999999999, 1000000000], 'Test 64');
test(lexicographicallySmallestArray([15,20,10,12,14,13,9,8,7,6], 3), [6, 20, 7, 8, 9, 10, 12, 13, 14, 15], 'Test 65');
test(lexicographicallySmallestArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 2), [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 'Test 66');
test(lexicographicallySmallestArray([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60], 6), [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60], 'Test 67');
test(lexicographicallySmallestArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 68');
test(lexicographicallySmallestArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31], 2), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 'Test 69');
test(lexicographicallySmallestArray([999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990], 100000000), [999999990, 999999991, 999999992, 999999993, 999999994, 999999995, 999999996, 999999997, 999999998, 999999999], 'Test 70');
test(lexicographicallySmallestArray([9,8,7,6,5,4,3,2,1], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 71');
test(lexicographicallySmallestArray([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 50), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 'Test 72');
test(lexicographicallySmallestArray([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 73');
test(lexicographicallySmallestArray([10, 1, 20, 2, 30, 3, 40, 4, 50, 5], 9), [1, 2, 20, 3, 30, 4, 40, 5, 50, 10], 'Test 74');
test(lexicographicallySmallestArray([5, 11, 17, 23, 29, 35, 41, 47, 53, 59], 6), [5, 11, 17, 23, 29, 35, 41, 47, 53, 59], 'Test 75');
test(lexicographicallySmallestArray([5,1,4,3,2,8,7,6,10,9], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 76');
test(lexicographicallySmallestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 77');
test(lexicographicallySmallestArray([100,90,80,70,60,50,40,30,20,10], 15), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 78');
test(lexicographicallySmallestArray([1, 4, 2, 5, 3, 8, 6, 7, 10, 9], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 79');
test(lexicographicallySmallestArray([1,1000000000,2,999999999,3,999999998,4,999999997,5,999999996], 1000000000), [1, 2, 3, 4, 5, 999999996, 999999997, 999999998, 999999999, 1000000000], 'Test 80');
test(lexicographicallySmallestArray([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 2), [91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 'Test 81');
test(lexicographicallySmallestArray([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 500000000), [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 'Test 82');
test(lexicographicallySmallestArray([1000000000,999999999,999999998,999999997,999999996,999999995], 3), [999999995, 999999996, 999999997, 999999998, 999999999, 1000000000], 'Test 83');
test(lexicographicallySmallestArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 84');
test(lexicographicallySmallestArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 85');
test(lexicographicallySmallestArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 15), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 86');
test(lexicographicallySmallestArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 87');
test(lexicographicallySmallestArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 10), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 88');
test(lexicographicallySmallestArray([1, 9, 2, 8, 3, 7, 4, 6, 5], 4), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 89');
test(lexicographicallySmallestArray([1,3,5,2,4,6,8,7,10,9], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 90');
test(lexicographicallySmallestArray([10,1,20,2,30,3,40,4,50,5], 9), [1, 2, 20, 3, 30, 4, 40, 5, 50, 10], 'Test 91');
test(lexicographicallySmallestArray([10, 2, 14, 4, 18, 6, 20, 8, 22, 10], 6), [2, 4, 6, 8, 10, 10, 14, 18, 20, 22], 'Test 92');
test(lexicographicallySmallestArray([3,8,2,6,5,10,7,1], 3), [1, 2, 3, 5, 6, 7, 8, 10], 'Test 93');
test(lexicographicallySmallestArray([100,101,102,103,104,105,106,107,108,109], 1), [100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 'Test 94');
test(lexicographicallySmallestArray([10, 21, 32, 43, 54, 65, 76, 87, 98, 109], 10), [10, 21, 32, 43, 54, 65, 76, 87, 98, 109], 'Test 95');
test(lexicographicallySmallestArray([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 96');
test(lexicographicallySmallestArray([5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1], 2), [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 'Test 97');
test(lexicographicallySmallestArray([20, 19, 18, 17, 16, 15, 14, 13, 12, 11], 5), [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 98');
test(lexicographicallySmallestArray([3, 8, 1, 6, 2, 7, 5, 10, 4, 9], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 99');
test(lexicographicallySmallestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 100');
test(lexicographicallySmallestArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 101');
test(lexicographicallySmallestArray([2, 1, 4, 3, 6, 5, 8, 7, 10, 9], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 102');
test(lexicographicallySmallestArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 103');
test(lexicographicallySmallestArray([10,5,15,20,25,30,35,40,45,50], 5), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 104');
test(lexicographicallySmallestArray([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 105');
test(lexicographicallySmallestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 106');
test(lexicographicallySmallestArray([1,10,2,9,3,8,4,7,5,6,11,20,12,19,13,18,14,17,15,16], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 107');
test(lexicographicallySmallestArray([30,20,10,40,50,60,70,80,90,100], 10), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 108');
test(lexicographicallySmallestArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 109');
test(lexicographicallySmallestArray([5, 9, 2, 6, 3, 8, 1, 7, 4, 10], 3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 110');
test(lexicographicallySmallestArray([3, 1, 2, 5, 4, 7, 6, 9, 8, 10], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 111');
test(lexicographicallySmallestArray([10, 15, 13, 12, 11, 20, 19, 18, 17, 16], 2), [10, 11, 12, 13, 15, 16, 17, 18, 19, 20], 'Test 112');
test(lexicographicallySmallestArray([10, 25, 20, 30, 35, 15, 5, 40, 45, 50], 5), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 113');
test(lexicographicallySmallestArray([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 5), [5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 'Test 114');
test(lexicographicallySmallestArray([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 5), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 115');
test(lexicographicallySmallestArray([20,18,16,14,12,10,8,6,4,2,0,1,3,5,7,9,11,13,15,17,19], 4), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 116');
test(lexicographicallySmallestArray([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 117');
test(lexicographicallySmallestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 118');
test(lexicographicallySmallestArray([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 119');
test(lexicographicallySmallestArray([1, 6, 11, 16, 21, 26, 31, 36], 15), [1, 6, 11, 16, 21, 26, 31, 36], 'Test 120');
test(lexicographicallySmallestArray([5,15,10,20,25,30,35,40,45,50], 10), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 121');
test(lexicographicallySmallestArray([2, 1, 4, 3, 6, 5, 8, 7, 10, 9], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 122');
test(lexicographicallySmallestArray([7, 14, 21, 28, 35, 42, 49, 56], 21), [7, 14, 21, 28, 35, 42, 49, 56], 'Test 123');
test(lexicographicallySmallestArray([15, 10, 5, 20, 25, 30, 35, 40, 45, 50], 5), [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 124');
test(lexicographicallySmallestArray([3, 12, 21, 30, 39, 48, 57, 66, 75, 84], 9), [3, 12, 21, 30, 39, 48, 57, 66, 75, 84], 'Test 125');
test(lexicographicallySmallestArray([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 1), [7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 'Test 126');
test(lexicographicallySmallestArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 2), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 127');
test(lexicographicallySmallestArray([1,3,2,4,6,5,8,7,10,9,12,11,14,13,16,15,18,17,20,19], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 128');
test(lexicographicallySmallestArray([5,1,4,2,3,8,6,7,10,9], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 129');
test(lexicographicallySmallestArray([10, 5, 15, 20, 25, 30], 5), [5, 10, 15, 20, 25, 30], 'Test 130');
test(lexicographicallySmallestArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 15), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 'Test 131');
test(lexicographicallySmallestArray([1,10,2,9,3,8,4,7,5,6], 4), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 132');
test(lexicographicallySmallestArray([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 500), [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 'Test 133');
test(lexicographicallySmallestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 134');
test(lexicographicallySmallestArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 4), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 'Test 135');
test(lexicographicallySmallestArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'Test 136');
test(lexicographicallySmallestArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 1), [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 'Test 137');
test(lexicographicallySmallestArray([3, 1, 2, 5, 4, 7, 6, 9, 8, 10], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 138');

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
