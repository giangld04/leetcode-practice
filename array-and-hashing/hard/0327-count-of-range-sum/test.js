// Test: 327. Count Of Range Sum
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { countRangeSum } = require("./solution");

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

console.log("\n327. Count Of Range Sum\n");

test(countRangeSum([-3,-2,-1,0,1,2,3], -5, 5), 24, 'Test 1');
test(countRangeSum([100, 200, 300, 400, 500], 150, 1000), 11, 'Test 2');
test(countRangeSum([-1,-2,-3,-4,-5], -10, -5), 7, 'Test 3');
test(countRangeSum([1,2,3,4,5], 1, 5), 7, 'Test 4');
test(countRangeSum([100,100,100,100,100], 200, 400), 9, 'Test 5');
test(countRangeSum([0,0,0,0,0], 0, 0), 15, 'Test 6');
test(countRangeSum([-2,5,-1], -2, 2), 3, 'Test 7');
test(countRangeSum([5,5,5,5,5], 10, 20), 9, 'Test 8');
test(countRangeSum([1000000000,-1000000000,1000000000,-1000000000], -2000000000, 2000000000), 10, 'Test 9');
test(countRangeSum([2147483647,-2147483648,-1,0], -1, 1), 4, 'Test 10');
test(countRangeSum([1,2,3], 3, 6), 4, 'Test 11');
test(countRangeSum([0], 0, 0), 1, 'Test 12');
test(countRangeSum([-1,-2,-3,-4,-5], -10, -1), 12, 'Test 13');
test(countRangeSum([-1,-2,-3,-4,-5], -10, -3), 10, 'Test 14');
test(countRangeSum([2147483647,-2147483648,2147483647,-2147483648], -4294967295, 4294967295), 10, 'Test 15');
test(countRangeSum([3,-2,1,5,4], -3, 7), 11, 'Test 16');
test(countRangeSum([-1,1,-1,1,-1,1,-1,1,-1,1], -1, 1), 55, 'Test 17');
test(countRangeSum([1,2,3,4,5], 1, 10), 12, 'Test 18');
test(countRangeSum([1,-1,1,-1,1,-1], 0, 1), 15, 'Test 19');
test(countRangeSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 0), 210, 'Test 20');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1], -15, -5), 37, 'Test 21');
test(countRangeSum([100, -50, 200, -150, 300, -200, 400, -250, 500, -300], 100, 600), 39, 'Test 22');
test(countRangeSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -1, 1), 55, 'Test 23');
test(countRangeSum([5,5,5,5,5,5,5,5,5,5], 15, 25), 21, 'Test 24');
test(countRangeSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 100, 200), 24, 'Test 25');
test(countRangeSum([1, -1, 1, -1, 1, -1], 0, 1), 15, 'Test 26');
test(countRangeSum([1,2,3,4,5,6,7,8,9,10], 15, 30), 19, 'Test 27');
test(countRangeSum([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 500000000, 2000000000), 19, 'Test 28');
test(countRangeSum([5, 4, 3, 2, 1], 2, 7), 8, 'Test 29');
test(countRangeSum([100,200,300,400,500,600,700,800,900,1000], 1500, 3500), 23, 'Test 30');
test(countRangeSum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20], -20, 20), 210, 'Test 31');
test(countRangeSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20], -100, -50), 60, 'Test 32');
test(countRangeSum([-10,-20,-30,-40,-50], -150, -50), 10, 'Test 33');
test(countRangeSum([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -200, -100), 14, 'Test 34');
test(countRangeSum([1,-1,1,-1,1,-1,1,-1,1,-1], -2, 2), 55, 'Test 35');
test(countRangeSum([0,0,0,0,0,0,0,0,0,0], -1, 1), 55, 'Test 36');
test(countRangeSum([1,-1,1,-1,1,-1,1,-1,1,-1], 0, 2), 40, 'Test 37');
test(countRangeSum([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000], -500, 500), 40, 'Test 38');
test(countRangeSum([10,20,30,40,50,60,70,80,90,100], 100, 500), 37, 'Test 39');
test(countRangeSum([50000, -50000] * 50000, -100000, 100000), Error: Solution.countRangeSum[] missing 1 required positional argument: 'nums', 'Test 40');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 30), 19, 'Test 41');
test(countRangeSum([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], -500, -100), 37, 'Test 42');
test(countRangeSum([10, -10, 20, -20, 30, -30, 40, -40, 50, -50] * 5000, 0, 0), Error: Solution.countRangeSum[] missing 1 required positional argument: 'nums', 'Test 43');
test(countRangeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 50, 100), 40, 'Test 44');
test(countRangeSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], -2, 2), 55, 'Test 45');
test(countRangeSum([1000000000,1000000000,1000000000,1000000000,1000000000], 5000000000, 6000000000), 1, 'Test 46');
test(countRangeSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1500, 3000), 19, 'Test 47');
test(countRangeSum([1,2,3,4,5,6,7,8,9,10], 10, 20), 14, 'Test 48');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 20), 24, 'Test 49');
test(countRangeSum([-1000000000,-1000000000,-1000000000,-1000000000,-1000000000], -6000000000, -5000000000), 1, 'Test 50');
test(countRangeSum([1] * 100000, 100000, 200000), Error: Solution.countRangeSum[] missing 1 required positional argument: 'nums', 'Test 51');
test(countRangeSum([100, -100, 200, -200, 300, -300, 400, -400, 500, -500, 600, -600, 700, -700, 800, -800, 900, -900, 1000, -1000], -500, 500), 145, 'Test 52');
test(countRangeSum([100, 200, 300, 400, 500], 150, 1200), 12, 'Test 53');
test(countRangeSum([100000000,200000000,300000000,400000000,500000000], 500000000, 1500000000), 10, 'Test 54');
test(countRangeSum([1,1,1,1,1,1,1,1,1,1], 5, 10), 21, 'Test 55');
test(countRangeSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], -5, 5), 465, 'Test 56');
test(countRangeSum([10,20,30,40,50], 100, 150), 4, 'Test 57');
test(countRangeSum([10,-10,20,-20,30,-30,40,-40,50,-50], -50, 50), 55, 'Test 58');
test(countRangeSum([-1, 1] * 50000, -2, 2), Error: Solution.countRangeSum[] missing 1 required positional argument: 'nums', 'Test 59');
test(countRangeSum([1,-1,2,-2,3,-3,4,-4,5,-5], -5, 5), 55, 'Test 60');
test(countRangeSum([5, -1, 5, -1, 5, -1, 5, -1, 5, -1, 5, -1, 5, -1, 5, -1, 5, -1, 5, -1], 0, 10), 72, 'Test 61');
test(countRangeSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20], -200, 0), 206, 'Test 62');
test(countRangeSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], -30, -15), 19, 'Test 63');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1], 5, 15), 37, 'Test 64');
test(countRangeSum([5,-1,5,-1,5,-1,5,-1,5,-1], 1, 9), 32, 'Test 65');
test(countRangeSum([1000000000, 1000000000, -2000000000, 0, 1000000000, -1000000000], -5000000000, 5000000000), 21, 'Test 66');
test(countRangeSum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], -10, 10), 55, 'Test 67');
test(countRangeSum([1,3,5,7,9,11,13,15,17,19], 25, 45), 13, 'Test 68');
test(countRangeSum([10,20,30,40,50,60,70,80,90,100], 150, 450), 30, 'Test 69');
test(countRangeSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -30, -15), 19, 'Test 70');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 55, 100), 73, 'Test 71');
test(countRangeSum([1, -100, 100, -10000, 10000, -1000000, 1000000, 1, -1, 10, -10], -1000000, 1000000), 64, 'Test 72');
test(countRangeSum([1, 2, 3, -6, 2, 3, -6, 2, 3], 1, 5), 23, 'Test 73');
test(countRangeSum([5,-5,5,-5,5,-5,5,-5,5,-5], -10, 10), 55, 'Test 74');
test(countRangeSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], -1, 1), 55, 'Test 75');
test(countRangeSum([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], -450, -150), 30, 'Test 76');
test(countRangeSum([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], -5, 5), 90, 'Test 77');
test(countRangeSum([0,0,0,0,0,0,0,0,0,0], 0, 0), 55, 'Test 78');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0, 200), 206, 'Test 79');
test(countRangeSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 5), 40, 'Test 80');
test(countRangeSum([1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000], -2000000000, 2000000000), 21, 'Test 81');
test(countRangeSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], -1, 1), 210, 'Test 82');
test(countRangeSum([30, -10, 20, -20, 10, -10, 20, -20, 10, -10, 20, -20, 10, -10, 20, -20, 10, -10, 20, -20], 0, 20), 135, 'Test 83');
test(countRangeSum([1000000000, -1000000000] * 50000, -2000000000, 2000000000), Error: Solution.countRangeSum[] missing 1 required positional argument: 'nums', 'Test 84');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15, 30), 31, 'Test 85');
test(countRangeSum([1,2,3,4,5,6,7,8,9,10], 5, 15), 19, 'Test 86');
test(countRangeSum([1,1,1,1,1,1,1,1,1,1], 3, 7), 30, 'Test 87');
test(countRangeSum([1000000000, 500000000, -1500000000, 2000000000, -2000000000, 1000000000], -3000000000, 3000000000), 21, 'Test 88');
test(countRangeSum([100000000, 200000000, 300000000, -100000000, -200000000, -300000000], 100000000, 500000000), 10, 'Test 89');
test(countRangeSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], -20, -10), 14, 'Test 90');
test(countRangeSum([100,200,300,400,500], 500, 1500), 10, 'Test 91');
test(countRangeSum([-10, 10, -10, 10, -10, 10, -10, 10, -10, 10], -20, 20), 55, 'Test 92');
test(countRangeSum([0] * 100000, -1, 1), Error: Solution.countRangeSum[] missing 1 required positional argument: 'nums', 'Test 93');
test(countRangeSum([1, 2, 3, 4, 5, -5, -4, -3, -2, -1], 0, 10), 27, 'Test 94');
test(countRangeSum([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 5000000000, 10000000000), 21, 'Test 95');
test(countRangeSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -20, -5), 24, 'Test 96');
test(countRangeSum([2147483647, -2147483647, 2147483647, -2147483647, 2147483647], -4294967295, 4294967295), 15, 'Test 97');
test(countRangeSum([1000000000, 2000000000, 3000000000, 4000000000, 5000000000, 6000000000, 7000000000, 8000000000, 9000000000, 10000000000], -5000000000, 15000000000), 24, 'Test 98');
test(countRangeSum([1,-1,1,-1,1,-1,1,-1,1,-1], 0, 0), 25, 'Test 99');
test(countRangeSum([1, 2, 3, 4, 5, -5, -4, -3, -2, -1], -10, 0), 27, 'Test 100');
test(countRangeSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], -15, -5), 19, 'Test 101');
test(countRangeSum([5,4,3,2,1,0,-1,-2,-3,-4,-5], -10, 10), 54, 'Test 102');
test(countRangeSum([1000000, -1000000, 1000000, -1000000, 1000000, -1000000, 1000000, -1000000], 0, 1), 16, 'Test 103');
test(countRangeSum([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 10000000000, 15000000000), 1, 'Test 104');
test(countRangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50, 100), 60, 'Test 105');
test(countRangeSum([-1,0,1,-1,0,1,-1,0,1,-1], -1, 1), 55, 'Test 106');
test(countRangeSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 0), 55, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

