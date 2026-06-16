// Test: 2256. Minimum Average Difference
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { minimumAverageDifference } = require("./solution");

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

console.log("\n2256. Minimum Average Difference\n");

test(minimumAverageDifference([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 1');
test(minimumAverageDifference([1,0,1,0,1]), 1, 'Test 2');
test(minimumAverageDifference([100000,0,100000,0,100000,0,100000,0,100000,0]), 1, 'Test 3');
test(minimumAverageDifference([100000,0,0,0,0,0]), 5, 'Test 4');
test(minimumAverageDifference([0,1,0,1,0]), 0, 'Test 5');
test(minimumAverageDifference([10,9,8,7,6,5,4,3,2,1]), 0, 'Test 6');
test(minimumAverageDifference([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 7');
test(minimumAverageDifference([1]), 0, 'Test 8');
test(minimumAverageDifference([0,1,2,3,4,5,6,7,8,9]), 9, 'Test 9');
test(minimumAverageDifference([10,20,30,40,50]), 0, 'Test 10');
test(minimumAverageDifference([1,0,1,0,1,0,1,0,1,0]), 1, 'Test 11');
test(minimumAverageDifference([10,20,30,40,50,60,70,80,90,100]), 0, 'Test 12');
test(minimumAverageDifference([0,0,0,0,0]), 0, 'Test 13');
test(minimumAverageDifference([1,2,3,4,5]), 0, 'Test 14');
test(minimumAverageDifference([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 15');
test(minimumAverageDifference([0]), 0, 'Test 16');
test(minimumAverageDifference([100,200,300,400,500]), 0, 'Test 17');
test(minimumAverageDifference([9,8,7,6,5,4,3,2,1,0]), 9, 'Test 18');
test(minimumAverageDifference([100000,100000,100000,100000,100000]), 0, 'Test 19');
test(minimumAverageDifference([1,0,0,0,0]), 1, 'Test 20');
test(minimumAverageDifference([5,4,3,2,1]), 1, 'Test 21');
test(minimumAverageDifference([2,5,3,9,5,3]), 3, 'Test 22');
test(minimumAverageDifference([1,2,3]), 0, 'Test 23');
test(minimumAverageDifference([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 24');
test(minimumAverageDifference([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0]), 0, 'Test 25');
test(minimumAverageDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 26');
test(minimumAverageDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]), 0, 'Test 27');
test(minimumAverageDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 28');
test(minimumAverageDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 8, 'Test 29');
test(minimumAverageDifference([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 0, 'Test 30');
test(minimumAverageDifference([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 0, 'Test 31');
test(minimumAverageDifference([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 0, 'Test 32');
test(minimumAverageDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 0, 'Test 33');
test(minimumAverageDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 0, 'Test 34');
test(minimumAverageDifference([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16]), 1, 'Test 35');
test(minimumAverageDifference([100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]), 1, 'Test 36');
test(minimumAverageDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 0, 'Test 37');
test(minimumAverageDifference([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000]), 0, 'Test 38');
test(minimumAverageDifference([100000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 14, 'Test 39');
test(minimumAverageDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 0, 'Test 40');
test(minimumAverageDifference([1, 10, 100, 1000, 10000, 100000, 90000, 9000, 900, 90]), 5, 'Test 41');
test(minimumAverageDifference([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990]), 0, 'Test 42');
test(minimumAverageDifference([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 1, 'Test 43');
test(minimumAverageDifference([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0]), 11, 'Test 44');
test(minimumAverageDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 45');
test(minimumAverageDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 46');
test(minimumAverageDifference([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 47');
test(minimumAverageDifference([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 1, 'Test 48');
test(minimumAverageDifference([1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 4, 'Test 49');
test(minimumAverageDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 0, 'Test 50');
test(minimumAverageDifference([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 0, 'Test 51');
test(minimumAverageDifference([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114]), 0, 'Test 52');
test(minimumAverageDifference([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14]), 19, 'Test 53');
test(minimumAverageDifference([100000, 0, 50000, 50000, 25000, 25000, 75000, 25000, 0, 100000]), 4, 'Test 54');
test(minimumAverageDifference([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 0]), 0, 'Test 55');
test(minimumAverageDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100000]), 20, 'Test 56');
test(minimumAverageDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 0, 'Test 57');
test(minimumAverageDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 58');
test(minimumAverageDifference([50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000]), 0, 'Test 59');
test(minimumAverageDifference([5, 3, 8, 1, 4, 2, 7, 6, 9, 0]), 1, 'Test 60');
test(minimumAverageDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 61');
test(minimumAverageDifference([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 1, 'Test 62');
test(minimumAverageDifference([10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0]), 9, 'Test 63');
test(minimumAverageDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 0, 'Test 64');
test(minimumAverageDifference([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 65');
test(minimumAverageDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 0, 'Test 66');
test(minimumAverageDifference([5,4,3,2,1,0,1,2,3,4,5]), 3, 'Test 67');
test(minimumAverageDifference([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]), 9, 'Test 68');
test(minimumAverageDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 69');
test(minimumAverageDifference([0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000]), 1, 'Test 70');
test(minimumAverageDifference([5, 2, 9, 1, 5, 6]), 0, 'Test 71');
test(minimumAverageDifference([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 9, 'Test 72');
test(minimumAverageDifference([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 73');
test(minimumAverageDifference([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 74');
test(minimumAverageDifference([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 9, 'Test 75');
test(minimumAverageDifference([1,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 76');
test(minimumAverageDifference([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 77');
test(minimumAverageDifference([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 0, 'Test 78');
test(minimumAverageDifference([9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 4, 5, 0, 6, 3, 7, 2, 8, 1, 9]), 9, 'Test 79');
test(minimumAverageDifference([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1, 'Test 80');
test(minimumAverageDifference([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 14, 'Test 81');
test(minimumAverageDifference([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 0, 'Test 82');
test(minimumAverageDifference([1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 1, 'Test 83');
test(minimumAverageDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 84');
test(minimumAverageDifference([100000, 100000, 100000, 100000, 100000, 0, 0, 0, 0, 0]), 9, 'Test 85');
test(minimumAverageDifference([7, 3, 8, 5, 2, 6, 4, 9, 1, 10]), 1, 'Test 86');
test(minimumAverageDifference([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 0, 'Test 87');
test(minimumAverageDifference([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 88');
test(minimumAverageDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 0, 'Test 89');
test(minimumAverageDifference([100000, 0, 100000, 0, 100000, 0]), 1, 'Test 90');
test(minimumAverageDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100000]), 14, 'Test 91');
test(minimumAverageDifference([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 9, 'Test 92');
test(minimumAverageDifference([10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20]), 1, 'Test 93');
test(minimumAverageDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

