// Test: 689. Maximum Sum Of 3 Non Overlapping Subarrays
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { maxSumOfThreeSubarrays } = require("./solution");

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

console.log("\n689. Maximum Sum Of 3 Non Overlapping Subarrays\n");

test(maxSumOfThreeSubarrays([5,5,5,5,5,5,5,5,5,5,5,5], 2), [0, 2, 4], 'Test 1');
test(maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1,9,7,4,6], 3), [3, 6, 9], 'Test 2');
test(maxSumOfThreeSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), [0, 5, 10], 'Test 3');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10], 3), [1, 4, 7], 'Test 4');
test(maxSumOfThreeSubarrays([1,1,1,1,1,1,1,1,1,1,1,1], 3), [0, 3, 6], 'Test 5');
test(maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1], 2), [0, 3, 5], 'Test 6');
test(maxSumOfThreeSubarrays([3,5,10,7,6,2], 1), [2, 3, 4], 'Test 7');
test(maxSumOfThreeSubarrays([9,1,2,1,2,1,2,1,2,1,2,1], 3), [0, 4, 8], 'Test 8');
test(maxSumOfThreeSubarrays([1,2,1,2,1,2,1,2,1], 2), [0, 2, 4], 'Test 9');
test(maxSumOfThreeSubarrays([1,1,1,1,1,1,1,1,1,1], 1), [0, 1, 2], 'Test 10');
test(maxSumOfThreeSubarrays([7,13,20,19,19,2,10,1,1,1,1,100], 2), [1, 3, 10], 'Test 11');
test(maxSumOfThreeSubarrays([3,3,3,3,3,3,3,3,3,3,3,3], 2), [0, 2, 4], 'Test 12');
test(maxSumOfThreeSubarrays([9,8,7,6,5,4,3,2,1], 1), [0, 1, 2], 'Test 13');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9], 1), [6, 7, 8], 'Test 14');
test(maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1,9,8], 3), [1, 4, 7], 'Test 15');
test(maxSumOfThreeSubarrays([1,2,1,2,1,2,1,2,1,2,1,2], 2), [0, 2, 4], 'Test 16');
test(maxSumOfThreeSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 2), [3, 8, 13], 'Test 17');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 4), [28, 32, 36], 'Test 18');
test(maxSumOfThreeSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 4), [], 'Test 19');
test(maxSumOfThreeSubarrays([500,400,300,200,100,50,10,5,1,0,1,5,10,50,100,200,300,400,500,600,700,800,900,1000], 6), [0, 12, 18], 'Test 20');
test(maxSumOfThreeSubarrays([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7], 6), [0, 10, 17], 'Test 21');
test(maxSumOfThreeSubarrays([1,3,2,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 3), [22, 25, 28], 'Test 22');
test(maxSumOfThreeSubarrays([9,8,7,6,5,4,3,2,1,0], 3), [0, 3, 6], 'Test 23');
test(maxSumOfThreeSubarrays([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 5), [0, 5, 10], 'Test 24');
test(maxSumOfThreeSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), [0, 3, 6], 'Test 25');
test(maxSumOfThreeSubarrays([9, 1, 2, 3, 9, 1, 2, 3, 9, 1, 2, 3, 9, 1, 2, 3], 3), [2, 6, 10], 'Test 26');
test(maxSumOfThreeSubarrays([5,1,5,1,5,1,5,1,5,1], 2), [0, 2, 4], 'Test 27');
test(maxSumOfThreeSubarrays([100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300], 5), [0, 5, 10], 'Test 28');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], 10), [30, 40, 50], 'Test 29');
test(maxSumOfThreeSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), [0, 5, 10], 'Test 30');
test(maxSumOfThreeSubarrays([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 5), [0, 5, 10], 'Test 31');
test(maxSumOfThreeSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), [0, 3, 6], 'Test 32');
test(maxSumOfThreeSubarrays([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9], 3), [35, 39, 42], 'Test 33');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4), [8, 12, 16], 'Test 34');
test(maxSumOfThreeSubarrays([5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5], 5), [0, 15, 33], 'Test 35');
test(maxSumOfThreeSubarrays([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000], 5), [5, 10, 15], 'Test 36');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 10), [10, 20, 30], 'Test 37');
test(maxSumOfThreeSubarrays([5,1,3,2,6,4,5,3,7,8,1,9,2,4,6], 3), [4, 7, 11], 'Test 38');
test(maxSumOfThreeSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 5), [25, 30, 35], 'Test 39');
test(maxSumOfThreeSubarrays([1,3,1,2,3,4,5,6,7,8,9,10], 4), [0, 4, 8], 'Test 40');
test(maxSumOfThreeSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,1,1,2,2,3,3,4,4,5,5,6,6,7,7], 5), [8, 13, 27], 'Test 41');
test(maxSumOfThreeSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 6), [12, 18, 24], 'Test 42');
test(maxSumOfThreeSubarrays([9,4,3,7,9,1,4,7,9,7,1,8,3,1,8,1,6,8,1,8,5,9,5,7,5,8,5,8,9,3,4,8,2,7,8,3,8,4,3,7,6,9,2,4,5,8,3,7,5,9], 7), [3, 17, 25], 'Test 43');
test(maxSumOfThreeSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300], 5), [15, 20, 25], 'Test 44');
test(maxSumOfThreeSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), [0, 3, 6], 'Test 45');
test(maxSumOfThreeSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 5), [0, 5, 10], 'Test 46');
test(maxSumOfThreeSubarrays([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1], 6), [0, 14, 20], 'Test 47');
test(maxSumOfThreeSubarrays([10,4,5,1,8,9,2,6,7,3,1,5,4,8,9,1,2,3,4,5], 4), [0, 4, 11], 'Test 48');
test(maxSumOfThreeSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), [0, 5, 10], 'Test 49');
test(maxSumOfThreeSubarrays([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 5), [0, 5, 10], 'Test 50');
test(maxSumOfThreeSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4), [8, 12, 16], 'Test 51');
test(maxSumOfThreeSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), [0, 2, 4], 'Test 52');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 7), [9, 16, 23], 'Test 53');
test(maxSumOfThreeSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), [0, 2, 4], 'Test 54');
test(maxSumOfThreeSubarrays([1,3,2,5,4,7,9,8,6,5,4,3,2,1,0,12,11,10,9,8,7], 3), [5, 15, 18], 'Test 55');
test(maxSumOfThreeSubarrays([9,4,3,7,6,9,8,5,2,1,10,6,7,8,9], 3), [4, 9, 12], 'Test 56');
test(maxSumOfThreeSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), [0, 5, 10], 'Test 57');
test(maxSumOfThreeSubarrays([10,20,30,40,50,60,70,80,90,100,110,120], 5), [], 'Test 58');
test(maxSumOfThreeSubarrays([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4), [0, 4, 8], 'Test 59');
test(maxSumOfThreeSubarrays([8,1,9,2,4,6,3,5,7,10,1,3,5,7,9], 4), [2, 6, 11], 'Test 60');
test(maxSumOfThreeSubarrays([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 5), [0, 5, 10], 'Test 61');
test(maxSumOfThreeSubarrays([1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9], 5), [1, 7, 13], 'Test 62');
test(maxSumOfThreeSubarrays([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 3), [6, 9, 12], 'Test 63');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 7), [29, 36, 43], 'Test 64');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 6), [2, 8, 14], 'Test 65');
test(maxSumOfThreeSubarrays([100000,90000,80000,70000,60000,50000,40000,30000,20000,10000,9000,8000,7000,6000,5000], 3), [0, 3, 6], 'Test 66');
test(maxSumOfThreeSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), [0, 10, 20], 'Test 67');
test(maxSumOfThreeSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), [0, 5, 10], 'Test 68');
test(maxSumOfThreeSubarrays([3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1], 2), [0, 3, 6], 'Test 69');
test(maxSumOfThreeSubarrays([9,4,3,7,2,5,8,1,6,3,5,7,4,8,2], 3), [0, 4, 11], 'Test 70');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 4), [18, 22, 26], 'Test 71');
test(maxSumOfThreeSubarrays([1000,900,800,700,600,500,400,300,200,100], 3), [0, 3, 6], 'Test 72');
test(maxSumOfThreeSubarrays([2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1], 2), [1, 5, 9], 'Test 73');
test(maxSumOfThreeSubarrays([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1], 2), [0, 5, 10], 'Test 74');
test(maxSumOfThreeSubarrays([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1], 3), [0, 9, 18], 'Test 75');
test(maxSumOfThreeSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250], 5), [10, 15, 20], 'Test 76');
test(maxSumOfThreeSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), [5, 10, 15], 'Test 77');
test(maxSumOfThreeSubarrays([5,4,3,2,1,6,7,8,9,10,11,12,13,14,15], 4), [3, 7, 11], 'Test 78');
test(maxSumOfThreeSubarrays([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), [0, 5, 10], 'Test 79');
test(maxSumOfThreeSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), [0, 5, 10], 'Test 80');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

