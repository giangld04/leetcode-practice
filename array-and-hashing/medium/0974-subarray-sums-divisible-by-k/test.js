// Test: 974. Subarray Sums Divisible By K
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { subarraysDivByK } = require("./solution");

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

console.log("\n974. Subarray Sums Divisible By K\n");

test(subarraysDivByK([2,2,2,2,2], 6), 3, 'Test 1');
test(subarraysDivByK([0,0,0,0], 2), 10, 'Test 2');
test(subarraysDivByK([1,1,1,1,1,1,1,1,1,1], 2), 25, 'Test 3');
test(subarraysDivByK([-1,2,-3,4,-5], 2), 6, 'Test 4');
test(subarraysDivByK([4,5,0,-2,-3,1], 5), 7, 'Test 5');
test(subarraysDivByK([2,2,2,2,2], 2), 15, 'Test 6');
test(subarraysDivByK([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 3), 27, 'Test 7');
test(subarraysDivByK([0,0,0,0,0], 1), 15, 'Test 8');
test(subarraysDivByK([1,2,3,4,5], 3), 7, 'Test 9');
test(subarraysDivByK([0,0,0,0,0], 2), 15, 'Test 10');
test(subarraysDivByK([-1,-2,-3,4,5,6], 2), 9, 'Test 11');
test(subarraysDivByK([7,7,7,7,7,7], 7), 21, 'Test 12');
test(subarraysDivByK([1,2,3,4,5,6,7,8,9,10], 5), 17, 'Test 13');
test(subarraysDivByK([-1,2,-3,4,-5,6], 4), 3, 'Test 14');
test(subarraysDivByK([-1,-2,-3,3,1,2,3,-4], 3), 16, 'Test 15');
test(subarraysDivByK([1,-1,2,-2,3,-3], 2), 11, 'Test 16');
test(subarraysDivByK([0,0,0,0], 1), 10, 'Test 17');
test(subarraysDivByK([1,1,1,1,1], 5), 1, 'Test 18');
test(subarraysDivByK([5], 9), 0, 'Test 19');
test(subarraysDivByK([10,5,0,3,-2], 7), 1, 'Test 20');
test(subarraysDivByK([10,20,30,40,50], 10), 15, 'Test 21');
test(subarraysDivByK([-1,-2,-3,4,5,6], 4), 3, 'Test 22');
test(subarraysDivByK([-10,-5,0,5,10], 5), 15, 'Test 23');
test(subarraysDivByK([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1], 4), 100, 'Test 24');
test(subarraysDivByK([1,2,3,4,5,6,7,8,9,10], 10), 6, 'Test 25');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19), 13, 'Test 26');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 27, 'Test 27');
test(subarraysDivByK([104, -104, 208, -208, 312, -312, 416, -416, 520, -520], 104), 55, 'Test 28');
test(subarraysDivByK([-5,-4,-3,-2,-1,0,1,2,3,4,5], 3), 34, 'Test 29');
test(subarraysDivByK([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 6), 14, 'Test 30');
test(subarraysDivByK([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 7), 55, 'Test 31');
test(subarraysDivByK([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 250), 17, 'Test 32');
test(subarraysDivByK([-10,10,-10,10,-10,10,-10,10], 5), 36, 'Test 33');
test(subarraysDivByK([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15], 11), 5, 'Test 34');
test(subarraysDivByK([100, -100, 200, -200, 300, -300, 400, -400, 500, -500], 100), 55, 'Test 35');
test(subarraysDivByK([7, 3, 5, 1, 2, 4, 6], 7), 4, 'Test 36');
test(subarraysDivByK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 25, 'Test 37');
test(subarraysDivByK([9999,-9999,9999,-9999,9999,-9999], 10000), 9, 'Test 38');
test(subarraysDivByK([10,20,30,40,50,60,70,80,90,100], 10), 55, 'Test 39');
test(subarraysDivByK([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10), 55, 'Test 40');
test(subarraysDivByK([10, 20, 30, 40, 50], 10), 15, 'Test 41');
test(subarraysDivByK([100,200,300,400,500,600,700,800,900,1000], 100), 55, 'Test 42');
test(subarraysDivByK([1,0,2,1,-1,-1,-1,0,1,2], 4), 11, 'Test 43');
test(subarraysDivByK([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 3), 64, 'Test 44');
test(subarraysDivByK([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 3), 35, 'Test 45');
test(subarraysDivByK([3,1,2,5,3,2,3,1,2,3], 5), 9, 'Test 46');
test(subarraysDivByK([3, 6, 9, 12, 15, 18, 21], 3), 28, 'Test 47');
test(subarraysDivByK([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 11), 0, 'Test 48');
test(subarraysDivByK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 34, 'Test 49');
test(subarraysDivByK([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5), 210, 'Test 50');
test(subarraysDivByK([9, -1, -2, 3, 5, -7, 10, -12, 15, -18, 21, -24, 27, -30, 33, -36, 39, -42, 45, -48], 15), 20, 'Test 51');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7), 10, 'Test 52');
test(subarraysDivByK([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 4), 14, 'Test 53');
test(subarraysDivByK([-5, 0, 5, 0, -5, 0, 5, 0, -5, 0, 5, 0, -5, 0, 5, 0, -5, 0, 5, 0, -5, 0, 5, 0, -5, 0, 5, 0, -5, 0], 10), 225, 'Test 54');
test(subarraysDivByK([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 100), 120, 'Test 55');
test(subarraysDivByK([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], 5), 21, 'Test 56');
test(subarraysDivByK([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 2), 120, 'Test 57');
test(subarraysDivByK([-10000,-9999,-9998,-9997,-9996,-9995,-9994,-9993,-9992,-9991], 1000), 1, 'Test 58');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 13), 12, 'Test 59');
test(subarraysDivByK([10, 20, 30, 40, 50], 15), 7, 'Test 60');
test(subarraysDivByK([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 1000), 55, 'Test 61');
test(subarraysDivByK([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 4), 45, 'Test 62');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 13), 22, 'Test 63');
test(subarraysDivByK([-10, -20, -30, -40, -50], 15), 7, 'Test 64');
test(subarraysDivByK([-10000, -10000, -10000, -10000, -10000, -10000, -10000, -10000, -10000, -10000], 10000), 55, 'Test 65');
test(subarraysDivByK([15, -15, 30, -30, 45, -45, 60, -60, 75, -75, 90, -90], 15), 78, 'Test 66');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 27, 'Test 67');
test(subarraysDivByK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 63, 'Test 68');
test(subarraysDivByK([9999, -9999, 9999, -9999, 9999, -9999, 9999, -9999], 9999), 36, 'Test 69');
test(subarraysDivByK([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 2), 106, 'Test 70');
test(subarraysDivByK([10, -10, 10, -10, 10, -10, 10, -10, 10], 5), 45, 'Test 71');
test(subarraysDivByK([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000], 5000), 7, 'Test 72');
test(subarraysDivByK([2,3,-5,6,1,-7,8,9,10,-11,12], 7), 12, 'Test 73');
test(subarraysDivByK([-3, -1, -2, 2, 1, 3], 5), 3, 'Test 74');
test(subarraysDivByK([-1, 1, -2, 2, -3, 3, -4, 4], 4), 15, 'Test 75');
test(subarraysDivByK([1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000], 2000), 25, 'Test 76');
test(subarraysDivByK([10, -10, 20, -20, 30, -30, 40], 10), 28, 'Test 77');
test(subarraysDivByK([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 10000), 55, 'Test 78');
test(subarraysDivByK([-1, 0, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, -10, 10], 6), 72, 'Test 79');
test(subarraysDivByK([-10, 10, -10, 10, -10, 10, -10, 10], 10), 36, 'Test 80');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 10, 'Test 81');
test(subarraysDivByK([0, 0, 0, 0, 0, 0, 0], 4), 28, 'Test 82');
test(subarraysDivByK([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 5), 120, 'Test 83');
test(subarraysDivByK([1000, 2000, 3000, -1000, -2000, -3000], 1000), 21, 'Test 84');
test(subarraysDivByK([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 7), 27, 'Test 85');
test(subarraysDivByK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 7), 48, 'Test 86');
test(subarraysDivByK([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 11), 5, 'Test 87');
test(subarraysDivByK([1000, -1000, 2000, -2000, 3000, -3000, 4000, -4000], 1000), 36, 'Test 88');
test(subarraysDivByK([104, -104, 104, -104, 104, -104, 104, -104, 104, -104], 104), 55, 'Test 89');
test(subarraysDivByK([1,2,3,4,5,6,7,8,9,10], 7), 10, 'Test 90');
test(subarraysDivByK([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 3), 55, 'Test 91');
test(subarraysDivByK([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2), 25, 'Test 92');
test(subarraysDivByK([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 225, 'Test 93');
test(subarraysDivByK([-10, -20, -30, 0, 5, 10, 15, 20], 5), 36, 'Test 94');
test(subarraysDivByK([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 7), 210, 'Test 95');
test(subarraysDivByK([0,0,0,0,0,0,0,0,0,0], 5), 55, 'Test 96');
test(subarraysDivByK([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 3), 55, 'Test 97');
test(subarraysDivByK([2,-2,2,-2,2,-2,2,-2], 4), 16, 'Test 98');
test(subarraysDivByK([1,-1,1,-1,1,-1,1,-1,1,-1], 2), 25, 'Test 99');
test(subarraysDivByK([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5), 55, 'Test 100');
test(subarraysDivByK([1,2,3,4,5,6,7,8,9,10], 3), 27, 'Test 101');
test(subarraysDivByK([2,3,5,8,13,21,34,55,89,144], 7), 7, 'Test 102');
test(subarraysDivByK([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 11), 28, 'Test 103');
test(subarraysDivByK([10000, -10000, 10000, -10000, 10000], 10000), 15, 'Test 104');
test(subarraysDivByK([1,2,3,-6,1,2,3,4,5], 7), 8, 'Test 105');
test(subarraysDivByK([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15), 27, 'Test 106');
test(subarraysDivByK([-5, 5, -5, 5, -5, 5, -5, 5, -5, 5], 5), 55, 'Test 107');
test(subarraysDivByK([2, -2, 2, -4, 6, 5, -1, 3, -3, 4], 5), 8, 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

