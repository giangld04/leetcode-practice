// Test: 3349. Adjacent Increasing Subarrays Detection I
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { hasIncreasingSubarrays } = require("./solution");

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

console.log("\n3349. Adjacent Increasing Subarrays Detection I\n");

test(hasIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10], 2), true, 'Test 1');
test(hasIncreasingSubarrays([1,2,2,3,4,5,6,7,8,9], 2), true, 'Test 2');
test(hasIncreasingSubarrays([5,6,7,8,9,1,2,3,4,5], 4), true, 'Test 3');
test(hasIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19], 5), true, 'Test 4');
test(hasIncreasingSubarrays([1,3,2,3,4,5,6,7,8,9], 2), true, 'Test 5');
test(hasIncreasingSubarrays([5,6,7,8,9,10,1,2,3,4], 5), false, 'Test 6');
test(hasIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7], 5), false, 'Test 7');
test(hasIncreasingSubarrays([1,3,2,5,7,9,11,13,15], 2), true, 'Test 8');
test(hasIncreasingSubarrays([10,9,8,7,6,5,4,3,2,1], 2), false, 'Test 9');
test(hasIncreasingSubarrays([1,3,5,7,9,11,13,15], 2), true, 'Test 10');
test(hasIncreasingSubarrays([10,20,30,25,35,40,45,50], 3), true, 'Test 11');
test(hasIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10], 4), true, 'Test 12');
test(hasIncreasingSubarrays([10,20,30,40,50,60,70,80,90,100], 4), true, 'Test 13');
test(hasIncreasingSubarrays([1,3,2,4,5,6,7,8,9,10], 2), true, 'Test 14');
test(hasIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5], 3), true, 'Test 15');
test(hasIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19], 2), true, 'Test 16');
test(hasIncreasingSubarrays([5,6,7,8,9,10,11,12,13,14], 4), true, 'Test 17');
test(hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1], 3), true, 'Test 18');
test(hasIncreasingSubarrays([5,7,9,11,13,15,10,12,14,16,18,20,17,19,21,23,25,27,29,31], 4), true, 'Test 19');
test(hasIncreasingSubarrays([2,3,1,2,3,4,5,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9,10], 5), true, 'Test 20');
test(hasIncreasingSubarrays([5, 6, 7, 1, 2, 3, 4, 5, 6, 7], 3), true, 'Test 21');
test(hasIncreasingSubarrays([1, 3, 5, 2, 4, 6, 3, 5, 7, 4], 2), true, 'Test 22');
test(hasIncreasingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), false, 'Test 23');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), true, 'Test 24');
test(hasIncreasingSubarrays([5,6,7,8,9,10,1,2,3,4,5,6,7,8,9], 5), true, 'Test 25');
test(hasIncreasingSubarrays([100,200,300,400,500,600,700,800,900,1000,50,150,250,350,450], 5), true, 'Test 26');
test(hasIncreasingSubarrays([100, 200, 300, 400, 100, 200, 300, 400, 500, 600], 4), true, 'Test 27');
test(hasIncreasingSubarrays([1,2,3,4,3,5,6,7,8,7,9,10,11,12,11,13,14,15,16,15], 3), true, 'Test 28');
test(hasIncreasingSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 3), false, 'Test 29');
test(hasIncreasingSubarrays([2, 3, 4, 5, 6, 7, 8, 9, 10, 1], 5), false, 'Test 30');
test(hasIncreasingSubarrays([5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 4), true, 'Test 31');
test(hasIncreasingSubarrays([100,101,102,99,103,104,105,106,107,108,109], 4), true, 'Test 32');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 4, 5, 6, 7], 5), false, 'Test 33');
test(hasIncreasingSubarrays([-1,-2,-3,-4,-5,-4,-3,-2,-1,0,1,2,3,4,5], 5), true, 'Test 34');
test(hasIncreasingSubarrays([1,2,3,4,1,2,3,4,5,6,7,8,5,6,7,8,9,10,11,12], 4), true, 'Test 35');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6), true, 'Test 36');
test(hasIncreasingSubarrays([1,2,1,2,3,4,5,4,5,6,7,8,7,8,9,10], 3), true, 'Test 37');
test(hasIncreasingSubarrays([10,20,30,40,50,5,15,25,35,45], 5), true, 'Test 38');
test(hasIncreasingSubarrays([10, 20, 30, 25, 26, 27, 40, 50, 60, 55, 56, 57, 70, 80, 90], 3), true, 'Test 39');
test(hasIncreasingSubarrays([1, 2, 1, 3, 4, 1, 5, 6, 1, 7, 8, 1, 9, 10, 1, 11, 12], 2), true, 'Test 40');
test(hasIncreasingSubarrays([9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4, 15, 16, 17, 18], 4), true, 'Test 41');
test(hasIncreasingSubarrays([1, 2, 3, 1, 2, 3, 4, 5, 6, 7], 3), true, 'Test 42');
test(hasIncreasingSubarrays([10, 20, 30, 40, 35, 36, 37, 38, 39, 40], 4), true, 'Test 43');
test(hasIncreasingSubarrays([9,8,7,6,5,4,3,2,1,10,11,12,13,14,15], 5), false, 'Test 44');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), true, 'Test 45');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5], 5), true, 'Test 46');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 5), true, 'Test 47');
test(hasIncreasingSubarrays([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 4), true, 'Test 48');
test(hasIncreasingSubarrays([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 5), true, 'Test 49');
test(hasIncreasingSubarrays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 6), true, 'Test 50');
test(hasIncreasingSubarrays([5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), true, 'Test 51');
test(hasIncreasingSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 5), true, 'Test 52');
test(hasIncreasingSubarrays([1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 1, 3, 5, 7], 3), true, 'Test 53');
test(hasIncreasingSubarrays([1000, 999, 998, 1001, 1002, 1003, 999, 998, 997, 1000, 1001, 1002], 3), false, 'Test 54');
test(hasIncreasingSubarrays([10,20,30,25,40,50,60,55,70,80,90,85,100,110,120], 5), false, 'Test 55');
test(hasIncreasingSubarrays([10, 20, 30, 40, 35, 36, 37, 38, 39, 41], 3), true, 'Test 56');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7], 5), true, 'Test 57');
test(hasIncreasingSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 2), true, 'Test 58');
test(hasIncreasingSubarrays([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16], 3), false, 'Test 59');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), true, 'Test 60');
test(hasIncreasingSubarrays([1, 3, 5, 7, 9, 8, 9, 10, 11, 12], 4), true, 'Test 61');
test(hasIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8], 5), true, 'Test 62');
test(hasIncreasingSubarrays([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2], 3), false, 'Test 63');
test(hasIncreasingSubarrays([1, 3, 5, 7, 6, 8, 10, 12, 11, 13, 15], 4), true, 'Test 64');
test(hasIncreasingSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 5), false, 'Test 65');
test(hasIncreasingSubarrays([2, 3, 4, 5, 6, 5, 6, 7, 8, 7, 8, 9, 10, 9, 10, 11, 12, 11, 12, 13], 2), true, 'Test 66');
test(hasIncreasingSubarrays([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12], 2), true, 'Test 67');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 5), true, 'Test 68');
test(hasIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 7), true, 'Test 69');
test(hasIncreasingSubarrays([1, 2, 3, 4, 3, 5, 6, 7, 8, 7, 9, 10, 11, 12], 4), true, 'Test 70');
test(hasIncreasingSubarrays([1,1,1,1,1,2,3,4,5,6,7,8,9,10,11], 5), true, 'Test 71');
test(hasIncreasingSubarrays([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12], 3), true, 'Test 72');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5], 5), true, 'Test 73');
test(hasIncreasingSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2], 3), true, 'Test 74');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4), true, 'Test 75');
test(hasIncreasingSubarrays([5,6,7,8,9,10,8,9,10,11,12,13,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], 5), true, 'Test 76');
test(hasIncreasingSubarrays([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), true, 'Test 77');
test(hasIncreasingSubarrays([5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5), true, 'Test 78');
test(hasIncreasingSubarrays([5,1,2,3,4,5,6,7,8,9], 5), false, 'Test 79');
test(hasIncreasingSubarrays([1000, 999, 1000, 999, 1000, 999, 1000, 999, 1000, 999], 2), true, 'Test 80');
test(hasIncreasingSubarrays([1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 4), true, 'Test 81');
test(hasIncreasingSubarrays([10, 20, 30, 25, 26, 27, 31, 32, 33, 28, 29, 34, 35], 3), true, 'Test 82');
test(hasIncreasingSubarrays([20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 5), true, 'Test 83');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 7), true, 'Test 84');
test(hasIncreasingSubarrays([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9], 2), true, 'Test 85');
test(hasIncreasingSubarrays([10,20,30,40,50,45,55,65,75,85,95,105], 5), true, 'Test 86');
test(hasIncreasingSubarrays([1,3,2,4,5,7,6,8,9,10,12,11,13,14,15], 3), true, 'Test 87');
test(hasIncreasingSubarrays([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 6), true, 'Test 88');
test(hasIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), true, 'Test 89');
test(hasIncreasingSubarrays([1,2,3,4,3,5,6,7,8,9,10,11,12,13,14], 4), true, 'Test 90');
test(hasIncreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 3), true, 'Test 91');
test(hasIncreasingSubarrays([10,9,8,7,6,5,15,16,17,18,19,20,21,22,23], 5), true, 'Test 92');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 5), true, 'Test 93');
test(hasIncreasingSubarrays([1,2,3,4,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9,10], 5), true, 'Test 94');
test(hasIncreasingSubarrays([10, 11, 12, 9, 13, 14, 15, 16, 17, 18], 3), true, 'Test 95');
test(hasIncreasingSubarrays([10, 20, 30, 25, 35, 40, 45, 50, 55, 60], 3), true, 'Test 96');
test(hasIncreasingSubarrays([1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 11], 3), true, 'Test 97');
test(hasIncreasingSubarrays([5, 6, 7, 8, 4, 5, 6, 7, 3, 4, 5, 6, 2, 3, 4, 5], 2), true, 'Test 98');
test(hasIncreasingSubarrays([1, 3, 5, 7, 9, 8, 9, 11, 13, 15, 14, 15, 17, 19, 18, 19, 21, 23], 3), true, 'Test 99');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 6), true, 'Test 100');
test(hasIncreasingSubarrays([5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), true, 'Test 101');
test(hasIncreasingSubarrays([9, 10, 11, 12, 8, 9, 10, 11, 7, 8, 9, 10, 6, 7, 8, 9], 3), true, 'Test 102');
test(hasIncreasingSubarrays([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 6), true, 'Test 103');
test(hasIncreasingSubarrays([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6), true, 'Test 104');
test(hasIncreasingSubarrays([-1, -2, -3, -4, -5, -4, -3, -2, -1, 0], 4), false, 'Test 105');
test(hasIncreasingSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5], 5), false, 'Test 106');
test(hasIncreasingSubarrays([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 6), true, 'Test 107');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 3, 4, 5, 6, 7], 4), true, 'Test 108');
test(hasIncreasingSubarrays([1,2,2,3,4,5,6,7,8,9], 3), true, 'Test 109');
test(hasIncreasingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7], 3), true, 'Test 110');
test(hasIncreasingSubarrays([9,8,7,6,5,4,3,2,1,10,11,12,13,14,15,16,17,18,19,20], 4), true, 'Test 111');
test(hasIncreasingSubarrays([1,3,2,4,6,5,7,9,8,10,12,11,13,15,14], 3), true, 'Test 112');
test(hasIncreasingSubarrays([1,2,3,4,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4), true, 'Test 113');
test(hasIncreasingSubarrays([2,4,6,8,10,12,14,16,18,20,1,3,5,7,9,11,13,15,17,19], 5), true, 'Test 114');
test(hasIncreasingSubarrays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 7, 8, 9, 10, 11, 12], 2), true, 'Test 115');
test(hasIncreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15], 5), false, 'Test 116');
test(hasIncreasingSubarrays([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11], 2), true, 'Test 117');
test(hasIncreasingSubarrays([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), true, 'Test 118');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), true, 'Test 119');
test(hasIncreasingSubarrays([1, 3, 5, 7, 9, 11, 10, 12, 14, 16, 18, 20], 3), true, 'Test 120');
test(hasIncreasingSubarrays([1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 5, 4, 5, 6, 7, 8], 4), false, 'Test 121');
test(hasIncreasingSubarrays([1, 2, 3, 4, 5, 4, 5, 6, 7, 6, 7, 8, 9, 8, 9, 10, 11, 10, 11, 12], 3), true, 'Test 122');
test(hasIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,18,19,20,21,22,23,24,25,26,27], 5), true, 'Test 123');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

