// Test: 1013. Partition Array Into Three Parts With Equal Sum
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { canThreePartsEqualSum } = require("./solution");

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

console.log("\n1013. Partition Array Into Three Parts With Equal Sum\n");

test(canThreePartsEqualSum([10000,-10000,10000,-10000,10000,-10000,10000,-10000,10000,-10000]), true, 'Test 1');
test(canThreePartsEqualSum([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100]), false, 'Test 2');
test(canThreePartsEqualSum([10,-10,10,-10,10,-10,10,-10]), true, 'Test 3');
test(canThreePartsEqualSum([1,2,3,4,5,6,7,8,9,10,11,12]), false, 'Test 4');
test(canThreePartsEqualSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), false, 'Test 5');
test(canThreePartsEqualSum([10,-10,10,-10,10,-10,10,-10,10,-10]), true, 'Test 6');
test(canThreePartsEqualSum([1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 7');
test(canThreePartsEqualSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 8');
test(canThreePartsEqualSum([-10000,10000,-10000,10000,-10000,10000]), true, 'Test 9');
test(canThreePartsEqualSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 10');
test(canThreePartsEqualSum([1,1,1,1,1,1,1,1,1,3]), true, 'Test 11');
test(canThreePartsEqualSum([1,2,3,4,5,6,7,8,9,10]), false, 'Test 12');
test(canThreePartsEqualSum([0,0,0,0,0,0,0,0,0,0]), true, 'Test 13');
test(canThreePartsEqualSum([1,-1,1,-1,1,-1,1,-1,1,-1]), true, 'Test 14');
test(canThreePartsEqualSum([1,2,3,0,0,0,1,2,3]), false, 'Test 15');
test(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]), true, 'Test 16');
test(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]), false, 'Test 17');
test(canThreePartsEqualSum([-10000,10000,-10000,10000,-10000,10000,-10000,10000,-10000,10000,-10000,10000]), true, 'Test 18');
test(canThreePartsEqualSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 19');
test(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]), true, 'Test 20');
test(canThreePartsEqualSum([1,2,3,6,2,3,6,2,3,6]), false, 'Test 21');
test(canThreePartsEqualSum([5,-5,5,-5,5,-5,5,-5,5,-5]), true, 'Test 22');
test(canThreePartsEqualSum([1,2,3,4,5,6,7,8,9,15]), false, 'Test 23');
test(canThreePartsEqualSum([1,-1,1,-1,1,-1,1,-1]), true, 'Test 24');
test(canThreePartsEqualSum([0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 25');
test(canThreePartsEqualSum([10,20,30,40,50,60,70,80,90,100]), false, 'Test 26');
test(canThreePartsEqualSum([5,5,5,5,5,5,5,5,5,5]), false, 'Test 27');
test(canThreePartsEqualSum([1,2,3,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0]), false, 'Test 28');
test(canThreePartsEqualSum([10,10,10,10,10,10,10,10,10,10]), false, 'Test 29');
test(canThreePartsEqualSum([5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 30');
test(canThreePartsEqualSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 31');
test(canThreePartsEqualSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34, -35, -36, -37, -38, -39, -40, -41, -42, -43, -44, -45, -46, -47, -48, -49, -50]), false, 'Test 32');
test(canThreePartsEqualSum([3, 6, -3, 6, -6, 3, 6, -3, 6, -6, 3, 6, -3, 6, -6]), true, 'Test 33');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -66, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), false, 'Test 34');
test(canThreePartsEqualSum([-1, -1, -1, 3, 2, 0, 1, 1, -2, -1, 1, 1, 1, 1]), false, 'Test 35');
test(canThreePartsEqualSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -15, 5, 10, 15, -30]), false, 'Test 36');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, -15, 1, 2, 3, 4, 5, -15, 1, 2, 3, 4, 5]), false, 'Test 37');
test(canThreePartsEqualSum([-5, 10, -15, 20, -25, 30, -35, 40, -45, 50, -55, 60, -65, 70, -75]), false, 'Test 38');
test(canThreePartsEqualSum([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), false, 'Test 39');
test(canThreePartsEqualSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 40');
test(canThreePartsEqualSum([1, 2, 3, 6, 0, 0, 6, 3, 2, 1]), false, 'Test 41');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -210, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), false, 'Test 42');
test(canThreePartsEqualSum([3, 6, 5, 2, 2, 5, 1, 2, 2, 3]), false, 'Test 43');
test(canThreePartsEqualSum([3, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), false, 'Test 44');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), false, 'Test 45');
test(canThreePartsEqualSum([10, 20, 30, 40, 50, -150, 60, 70, 80, 90, 100]), false, 'Test 46');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, -5, -10, -15, 30]), false, 'Test 47');
test(canThreePartsEqualSum([100, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50]), false, 'Test 48');
test(canThreePartsEqualSum([3, 1, -2, 1, 5, -4, 2, -1, 2, 1, 3, -1, -2, 1]), true, 'Test 49');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55, 11, 12, 13, 14]), false, 'Test 50');
test(canThreePartsEqualSum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20]), false, 'Test 51');
test(canThreePartsEqualSum([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80, 90, -90, 100, -100]), true, 'Test 52');
test(canThreePartsEqualSum([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), false, 'Test 53');
test(canThreePartsEqualSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 54');
test(canThreePartsEqualSum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), true, 'Test 55');
test(canThreePartsEqualSum([7, 2, 19, 5, 1, 13, 1, 5, 3, 100, 1]), false, 'Test 56');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -120, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), false, 'Test 57');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -210, 21]), false, 'Test 58');
test(canThreePartsEqualSum([10, 10, -10, 10, 10, -20, 10, 10, 10, -30, 10, 10, 10, 10, 10]), true, 'Test 59');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 60');
test(canThreePartsEqualSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 61');
test(canThreePartsEqualSum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), true, 'Test 62');
test(canThreePartsEqualSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), true, 'Test 63');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), false, 'Test 64');
test(canThreePartsEqualSum([3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]), false, 'Test 65');
test(canThreePartsEqualSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), true, 'Test 66');
test(canThreePartsEqualSum([100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300]), false, 'Test 67');
test(canThreePartsEqualSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 55, -11, -12, -13, -14, -15, -16, -17, -18, -19]), false, 'Test 68');
test(canThreePartsEqualSum([5, 5, 5, 5, -15, 5, 5, 5, 5, 5, 5, 5, -15, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 69');
test(canThreePartsEqualSum([100, -50, 50, -25, 25, -12, 12, -6, 6, -3, 3, -1, 1, 0, 0, 0, 0, 0, 0, 0]), false, 'Test 70');
test(canThreePartsEqualSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), false, 'Test 71');
test(canThreePartsEqualSum([-1, 2, -2, 3, -3, 4, -4, 5, -5, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), false, 'Test 72');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55, 11, 12, 13, 14, 15, 16, 17, 18, 19]), false, 'Test 73');
test(canThreePartsEqualSum([1000, 2000, 3000, -1000, -2000, -3000, 1000, 2000, 3000, -1000, -2000, -3000, 1000, 2000, 3000]), false, 'Test 74');
test(canThreePartsEqualSum([2, 4, 6, 8, 10, 2, 4, 6, 8, 10, 2, 4, 6, 8, 10, 2, 4, 6, 8, 10]), false, 'Test 75');
test(canThreePartsEqualSum([7, -5, 3, 2, -4, 4, -1, 0, 1, -2, 1, 2, -3, 3]), false, 'Test 76');
test(canThreePartsEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -210]), false, 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

