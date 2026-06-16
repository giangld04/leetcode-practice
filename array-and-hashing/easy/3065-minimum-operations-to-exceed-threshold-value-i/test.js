// Test: 3065. Minimum Operations To Exceed Threshold Value I
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3065. Minimum Operations To Exceed Threshold Value I\n");

test(minOperations([7,7,7,7,7], 7), 0, 'Test 1');
test(minOperations([5,5,5,5,5], 5), 0, 'Test 2');
test(minOperations([1,1,2,4,9], 1), 0, 'Test 3');
test(minOperations([1,2,3,4,5], 3), 2, 'Test 4');
test(minOperations([5,3,8,9,2], 5), 2, 'Test 5');
test(minOperations([100,200,300,400,500], 100), 0, 'Test 6');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 5), 4, 'Test 7');
test(minOperations([3,6,9,12,15], 12), 3, 'Test 8');
test(minOperations([10,20,30,40,50], 25), 2, 'Test 9');
test(minOperations([10,20,30,40,50], 15), 1, 'Test 10');
test(minOperations([1,1,2,4,9], 9), 4, 'Test 11');
test(minOperations([8,8,8,8,8,8], 8), 0, 'Test 12');
test(minOperations([2,11,10,1,3], 10), 3, 'Test 13');
test(minOperations([10,9,8,7,6], 7), 1, 'Test 14');
test(minOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 95), 5, 'Test 15');
test(minOperations([1000000000,999999999,888888888,777777777,666666666,555555555,444444444,333333333,222222222,111111111], 555555555), 4, 'Test 16');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 10), 9, 'Test 17');
test(minOperations([10, 20, 30, 40, 50], 25), 2, 'Test 18');
test(minOperations([3,6,9,12,15,18,21,24,27,30], 25), 8, 'Test 19');
test(minOperations([5, 3, 8, 6, 2, 7, 4, 1], 5), 4, 'Test 20');
test(minOperations([100,90,80,70,60,50,40,30,20,10], 60), 5, 'Test 21');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 22');
test(minOperations([1000000000, 999999999, 999999998, 999999997, 999999996], 999999997), 1, 'Test 23');
test(minOperations([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 95), 5, 'Test 24');
test(minOperations([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3], 2), 5, 'Test 25');
test(minOperations([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 42), 0, 'Test 26');
test(minOperations([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 9), 8, 'Test 27');
test(minOperations([10,9,8,7,6,5,4,3,2,1], 6), 5, 'Test 28');
test(minOperations([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 28), 13, 'Test 29');
test(minOperations([1,1,1,1,1,1,1,1,1,1], 1), 0, 'Test 30');
test(minOperations([5,3,8,2,6,1,4], 4), 3, 'Test 31');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6), 5, 'Test 32');
test(minOperations([20,19,18,17,16,15,14,13,12,11], 15), 4, 'Test 33');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 0, 'Test 34');
test(minOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 20), 10, 'Test 35');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 5, 'Test 36');
test(minOperations([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 4), 5, 'Test 37');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), 14, 'Test 38');
test(minOperations([34,23,54,12,45,67,89,23,45,67,89,12,34,56,78,90,12,34,56,78,90,12,34,56,78,90,12,34,56,78,90], 45), 12, 'Test 39');
test(minOperations([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000), 9, 'Test 40');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 4, 'Test 41');
test(minOperations([5, 5, 5, 5, 5], 6), 5, 'Test 42');
test(minOperations([5,3,1,4,2,6], 4), 3, 'Test 43');
test(minOperations([10,20,30,40,50,60,70,80,90,100], 50), 4, 'Test 44');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 0, 'Test 45');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 14, 'Test 46');
test(minOperations([1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000], 1000000000), 3, 'Test 47');
test(minOperations([1000000000,999999999,999999998,999999997,999999996], 999999997), 1, 'Test 48');
test(minOperations([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5], 5), 19, 'Test 49');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 50');
test(minOperations([34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34], 33), 0, 'Test 51');
test(minOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 0, 'Test 52');
test(minOperations([1,1,1,1,1,1,1,1,1,2], 2), 9, 'Test 53');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 10), 5, 'Test 54');
test(minOperations([10,10,10,10,10], 10), 0, 'Test 55');
test(minOperations([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31], 35), 4, 'Test 56');
test(minOperations([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 13, 'Test 57');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 60), 5, 'Test 58');
test(minOperations([5,3,8,6,2,10,4,9], 5), 3, 'Test 59');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 40), 39, 'Test 60');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 61');
test(minOperations([9,8,7,6,5,4,3,2,1], 5), 4, 'Test 62');
test(minOperations([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30], 40), 10, 'Test 63');
test(minOperations([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 99), 0, 'Test 64');
test(minOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 6), 45, 'Test 65');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 4, 'Test 66');
test(minOperations([5, 3, 3, 2, 1, 1, 1, 1], 3), 5, 'Test 67');
test(minOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 0, 'Test 68');
test(minOperations([5,5,5,5,5,5,5,5,5,5], 6), 10, 'Test 69');
test(minOperations([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995], 999999997), 2, 'Test 70');
test(minOperations([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47], 20), 8, 'Test 71');
test(minOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 75), 7, 'Test 72');
test(minOperations([3,1,2,4,5,6,7,8,9,10], 4), 3, 'Test 73');
test(minOperations([2,4,6,8,10,12,14,16,18,20], 15), 7, 'Test 74');
test(minOperations([2,3,1,5,4,7,6,9,8,10], 7), 6, 'Test 75');
test(minOperations([5,10,15,20,25,30,35,40,45,50], 30), 5, 'Test 76');
test(minOperations([100,99,98,97,96,95,94], 96), 2, 'Test 77');
test(minOperations([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42], 25), 12, 'Test 78');
test(minOperations([1,3,5,7,9,11,13,15,17,19], 10), 5, 'Test 79');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 7, 'Test 80');
test(minOperations([1,1000000000,1,1000000000,1,1000000000,1,1000000000,1,1000000000], 1000000000), 5, 'Test 81');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 25), 12, 'Test 82');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8), 7, 'Test 83');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1), 0, 'Test 84');
test(minOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), 23, 'Test 85');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 4, 'Test 86');
test(minOperations([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 4, 'Test 87');
test(minOperations([5,3,1,4,2,6,7], 4), 3, 'Test 88');
test(minOperations([3,3,3,3,3,3,3,3,3,3], 4), 10, 'Test 89');
test(minOperations([3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1], 2), 30, 'Test 90');
test(minOperations([1000000000, 999999999, 999999998, 999999997, 999999996], 999999998), 2, 'Test 91');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 9, 'Test 92');
test(minOperations([10,9,8,7,6,5,4,3,2,1], 5), 4, 'Test 93');
test(minOperations([47, 23, 89, 5, 76, 12, 34, 67, 9, 100], 25), 4, 'Test 94');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 25), 24, 'Test 95');
test(minOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1), 0, 'Test 96');
test(minOperations([9,8,7,6,5,4,3,2,1,10,11,12,13,14,15], 10), 9, 'Test 97');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10], 10), 51, 'Test 98');
test(minOperations([2,2,2,2,2,2,2,2,2,2], 1), 0, 'Test 99');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10], 10), 10, 'Test 100');
test(minOperations([9,9,9,9,9,9,9,9,9,9], 8), 0, 'Test 101');
test(minOperations([100, 99, 98, 97, 96, 95], 98), 3, 'Test 102');
test(minOperations([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 10), 5, 'Test 103');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], 3), 2, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

