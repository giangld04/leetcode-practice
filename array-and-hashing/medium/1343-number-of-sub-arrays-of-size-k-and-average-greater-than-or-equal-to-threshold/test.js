// Test: 1343. Number Of Sub Arrays Of Size K And Average Greater Than Or Equal To Threshold
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { numOfSubarrays } = require("./solution");

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

console.log("\n1343. Number Of Sub Arrays Of Size K And Average Greater Than Or Equal To Threshold\n");

test(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4), 3, 'Test 1');
test(numOfSubarrays([5,5,5,5,5,5,5], 3, 5), 5, 'Test 2');
test(numOfSubarrays([10000,10000,10000], 3, 10000), 1, 'Test 3');
test(numOfSubarrays([1,2,3,4,5], 2, 3), 2, 'Test 4');
test(numOfSubarrays([10000,10000,10000,10000,10000], 1, 10000), 5, 'Test 5');
test(numOfSubarrays([1,1,1,1,1,1,1,1], 2, 1), 7, 'Test 6');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10], 4, 5), 4, 'Test 7');
test(numOfSubarrays([10,20,30,40,50], 1, 10), 5, 'Test 8');
test(numOfSubarrays([1,1,1,1,1,1,1,1,1,1], 5, 1), 6, 'Test 9');
test(numOfSubarrays([5,5,5,5,5], 5, 5), 1, 'Test 10');
test(numOfSubarrays([5,5,5,5,5,5,5,5], 4, 6), 0, 'Test 11');
test(numOfSubarrays([5,5,5,5,5,5,5,5], 5, 5), 4, 'Test 12');
test(numOfSubarrays([9,8,7,6,5,4,3,2,1], 4, 5), 3, 'Test 13');
test(numOfSubarrays([10000,10000,10000,10000,10000], 5, 10000), 1, 'Test 14');
test(numOfSubarrays([3,3,3,3,3,3,3], 4, 3), 4, 'Test 15');
test(numOfSubarrays([1,1,1,1,1], 2, 1), 4, 'Test 16');
test(numOfSubarrays([1,2,3,4,5], 2, 2), 3, 'Test 17');
test(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5), 6, 'Test 18');
test(numOfSubarrays([10,20,30,40,50], 4, 25), 2, 'Test 19');
test(numOfSubarrays([9, 7, 3, 5, 6, 2, 0, 8, 1, 4], 4, 4), 4, 'Test 20');
test(numOfSubarrays([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 11, 5.5), 0, 'Test 21');
test(numOfSubarrays([3,6,9,12,15,18,21,24,27,30], 6, 15), 3, 'Test 22');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 10, 13), 8, 'Test 23');
test(numOfSubarrays([1, 3, 2, 6, 5, 4, 8, 7, 9, 10], 3, 6), 3, 'Test 24');
test(numOfSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7, 7), 9, 'Test 25');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10, 10.5), 6, 'Test 26');
test(numOfSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 2, 55), 5, 'Test 27');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10], 5, 5), 4, 'Test 28');
test(numOfSubarrays([1,1,2,2,3,3,4,4,5,5,6,6], 3, 3), 6, 'Test 29');
test(numOfSubarrays([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6, 10), 8, 'Test 30');
test(numOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 6, 10), 8, 'Test 31');
test(numOfSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 5, 5), 9, 'Test 32');
test(numOfSubarrays([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 20, 9), 1, 'Test 33');
test(numOfSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10, 5), 11, 'Test 34');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 7, 10), 8, 'Test 35');
test(numOfSubarrays([2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6], 6, 3), 8, 'Test 36');
test(numOfSubarrays([25,25,25,25,25,25,25,25,25,25,25,25,25,25,25], 10, 25), 6, 'Test 37');
test(numOfSubarrays([5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 20, 5000), 1, 'Test 38');
test(numOfSubarrays([3,6,1,3,9,6,1,7,8,2], 3, 5), 4, 'Test 39');
test(numOfSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5, 5), 9, 'Test 40');
test(numOfSubarrays([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 10, 3), 11, 'Test 41');
test(numOfSubarrays([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50], 15, 50), 6, 'Test 42');
test(numOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 19, 1), 2, 'Test 43');
test(numOfSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 11, 800), 3, 'Test 44');
test(numOfSubarrays([10,9,8,7,6,5,4,3,2,1], 5, 5), 4, 'Test 45');
test(numOfSubarrays([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], 7, 5000), 6, 'Test 46');
test(numOfSubarrays([5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 10, 5000), 6, 'Test 47');
test(numOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 3, 10), 15, 'Test 48');
test(numOfSubarrays([5000,4000,3000,2000,1000,0,0,0,0,0,0,0], 5, 2000), 2, 'Test 49');
test(numOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10, 1), 11, 'Test 50');
test(numOfSubarrays([4999,5000,4999,5000,4999,5000,4999,5000,4999,5000], 3, 5000), 0, 'Test 51');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10], 5, 5.5), 3, 'Test 52');
test(numOfSubarrays([10000, 1, 10000, 1, 10000, 1, 10000, 1, 10000, 1], 5, 5000), 3, 'Test 53');
test(numOfSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 5, 1.5), 8, 'Test 54');
test(numOfSubarrays([39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1], 3, 10), 14, 'Test 55');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10], 2, 5), 5, 'Test 56');
test(numOfSubarrays([2,4,6,8,10,12,14,16,18,20], 3, 8), 6, 'Test 57');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 5), 11, 'Test 58');
test(numOfSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 55), 1, 'Test 59');
test(numOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 7, 15), 5, 'Test 60');
test(numOfSubarrays([10000,10000,10000,10000,10000,10000,10000,10000,10000,10000], 10, 10000), 1, 'Test 61');
test(numOfSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 5, 12), 7, 'Test 62');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 10), 6, 'Test 63');
test(numOfSubarrays([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85], 7, 92), 5, 'Test 64');
test(numOfSubarrays([9,8,7,6,5,4,3,2,1,0], 4, 3.5), 5, 'Test 65');
test(numOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 5, 20), 8, 'Test 66');
test(numOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 5, 15), 11, 'Test 67');
test(numOfSubarrays([10,20,30,40,50,60,70,80,90,100], 3, 55), 4, 'Test 68');
test(numOfSubarrays([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 8, 9000), 3, 'Test 69');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 6, 10), 8, 'Test 70');
test(numOfSubarrays([100,200,300,400,500,600,700,800,900,1000], 5, 550), 3, 'Test 71');
test(numOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 7, 1), 9, 'Test 72');
test(numOfSubarrays([5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6, 4), 9, 'Test 73');
test(numOfSubarrays([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1], 3, 2), 18, 'Test 74');
test(numOfSubarrays([5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 5, 5000), 6, 'Test 75');
test(numOfSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10, 10.5), 6, 'Test 76');
test(numOfSubarrays([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 5, 4), 11, 'Test 77');
test(numOfSubarrays([10000,1,10000,1,10000,1,10000,1,10000,1], 2, 5000), 9, 'Test 78');
test(numOfSubarrays([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21], 7, 15), 4, 'Test 79');
test(numOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10, 1), 73, 'Test 80');
test(numOfSubarrays([2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6, 5), 9, 'Test 81');
test(numOfSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 1), 6, 'Test 82');
test(numOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5, 10), 9, 'Test 83');
test(numOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 7, 15), 5, 'Test 84');
test(numOfSubarrays([40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2], 10, 15), 9, 'Test 85');
test(numOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 5, 15), 6, 'Test 86');
test(numOfSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 3, 4), 5, 'Test 87');
test(numOfSubarrays([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1], 4, 2), 18, 'Test 88');
test(numOfSubarrays([1, 1, 1, 1, 10, 1, 1, 1, 1, 10, 1, 1, 1, 1, 10], 3, 3), 7, 'Test 89');
test(numOfSubarrays([10,20,30,40,50,60,70,80,90,100], 6, 55), 3, 'Test 90');
test(numOfSubarrays([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 4, 5), 7, 'Test 91');
test(numOfSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4, 5), 4, 'Test 92');
test(numOfSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 4, 55), 4, 'Test 93');
test(numOfSubarrays([100,200,300,400,500,600,700,800,900,1000], 5, 450), 4, 'Test 94');
test(numOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 3, 15), 12, 'Test 95');
test(numOfSubarrays([10,9,8,7,6,5,4,3,2,1], 4, 5), 4, 'Test 96');
test(numOfSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 6, 10), 3, 'Test 97');
test(numOfSubarrays([100,200,300,400,500,600,700,800,900,1000], 6, 500), 3, 'Test 98');
test(numOfSubarrays([10000,10000,10000,10000,10000,10000,10000,10000,10000,10000], 9, 9999), 2, 'Test 99');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, 8), 3, 'Test 100');
test(numOfSubarrays([3,6,9,12,15,18,21,24,27,30], 4, 15), 4, 'Test 101');
test(numOfSubarrays([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 8, 100), 9, 'Test 102');
test(numOfSubarrays([5000, 4000, 3000, 2000, 1000, 0, 1000, 2000, 3000, 4000, 5000], 4, 3000), 2, 'Test 103');
test(numOfSubarrays([3, 5, 1, 8, 7, 9, 4, 6, 2, 10, 11, 12], 5, 6), 5, 'Test 104');
test(numOfSubarrays([100,200,300,400,500,600,700,800,900,1000], 2, 500), 5, 'Test 105');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 5), 4, 'Test 106');
test(numOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10, 0.5), 11, 'Test 107');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 6), 3, 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

