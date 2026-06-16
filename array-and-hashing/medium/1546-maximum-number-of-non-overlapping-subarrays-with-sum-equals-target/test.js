// Test: 1546. Maximum Number Of Non Overlapping Subarrays With Sum Equals Target
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { maxNonOverlapping } = require("./solution");

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

console.log("\n1546. Maximum Number Of Non Overlapping Subarrays With Sum Equals Target\n");

test(maxNonOverlapping([5,5,5,5,5], 10), 2, 'Test 1');
test(maxNonOverlapping([1,2,3,4,5], 9), 1, 'Test 2');
test(maxNonOverlapping([-1,3,5,1,4,2,-9], 6), 2, 'Test 3');
test(maxNonOverlapping([5,5,5,5,5,5], 15), 2, 'Test 4');
test(maxNonOverlapping([0,0,0,0,0], 0), 5, 'Test 5');
test(maxNonOverlapping([1,-1,2,-2,3,-3], 0), 3, 'Test 6');
test(maxNonOverlapping([1,1,1,1,1], 2), 2, 'Test 7');
test(maxNonOverlapping([5,5,5,5,5], 15), 1, 'Test 8');
test(maxNonOverlapping([5,5,5,5,5,5,5,5,5,5], 15), 3, 'Test 9');
test(maxNonOverlapping([10,-5,5,-3,2,3,-1,7], 5), 3, 'Test 10');
test(maxNonOverlapping([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20), 1, 'Test 11');
test(maxNonOverlapping([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 38), 1, 'Test 12');
test(maxNonOverlapping([-2,2,-2,2,-2,2,-2,2,-2,2], 0), 5, 'Test 13');
test(maxNonOverlapping([100,-100,200,-200,300,-300,400,-400,500,-500], 0), 5, 'Test 14');
test(maxNonOverlapping([-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5,-1,-2,-3,-4,-5], -15), 10, 'Test 15');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10], 15), 2, 'Test 16');
test(maxNonOverlapping([100,-25,25,-50,50,150,-150,200,-200], 100), 1, 'Test 17');
test(maxNonOverlapping([1, 2, 3, 4, 5, 0, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 5), 4, 'Test 18');
test(maxNonOverlapping([1, 2, 3, 4, 5, -15, 1, 2, 3, 4, 5, -10, 1, 2, 3], 10), 2, 'Test 19');
test(maxNonOverlapping([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 0), 10, 'Test 20');
test(maxNonOverlapping([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], -15), 2, 'Test 21');
test(maxNonOverlapping([1000, -500, 500, -300, 200, 300, -100, 700], 500), 3, 'Test 22');
test(maxNonOverlapping([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 9), 5, 'Test 23');
test(maxNonOverlapping([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100], 150), 6, 'Test 24');
test(maxNonOverlapping([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 30, 'Test 25');
test(maxNonOverlapping([5,-2,5,-2,5,-2,5,-2,5,-2], 3), 5, 'Test 26');
test(maxNonOverlapping([1,1,1,1,1,1,1,1,1,1], 1), 10, 'Test 27');
test(maxNonOverlapping([2,2,2,2,2,2,2,2,2,2,2,2], 6), 4, 'Test 28');
test(maxNonOverlapping([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 1, 'Test 29');
test(maxNonOverlapping([100,-50,50,-25,25,125,-125,62,-62,31,-31], 50), 2, 'Test 30');
test(maxNonOverlapping([5,1,3,7,8,2,4,6,9,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9], 5), 2, 'Test 31');
test(maxNonOverlapping([10,5,5,15,10,10,5,5,20,15], 20), 3, 'Test 32');
test(maxNonOverlapping([10000,-10000,10000,-10000,10000], 10000), 3, 'Test 33');
test(maxNonOverlapping([3,4,-2,3,-2,5,-5,1,1,1], 3), 4, 'Test 34');
test(maxNonOverlapping([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 10, 'Test 35');
test(maxNonOverlapping([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2), 0, 'Test 36');
test(maxNonOverlapping([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 4, 'Test 37');
test(maxNonOverlapping([2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 9), 3, 'Test 38');
test(maxNonOverlapping([10, 5, -5, 10, 15, -25, 30, -30, 35, -35, 40, -40, 45, -45, 50, -50, 55, -55, 60, -60], 10), 5, 'Test 39');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 55), 2, 'Test 40');
test(maxNonOverlapping([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], -5), 4, 'Test 41');
test(maxNonOverlapping([10,20,30,40,50,60,70,80,90,100], 150), 2, 'Test 42');
test(maxNonOverlapping([1,2,3,4,5,0,1,2,3,4,5], 9), 2, 'Test 43');
test(maxNonOverlapping([100,200,300,400,500,600,700,800,900,1000], 1500), 2, 'Test 44');
test(maxNonOverlapping([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 3, 'Test 45');
test(maxNonOverlapping([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], -30), 2, 'Test 46');
test(maxNonOverlapping([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 0), 10, 'Test 47');
test(maxNonOverlapping([100,-100,200,-200,300,-300,400,-400,500,-500], 100), 5, 'Test 48');
test(maxNonOverlapping([1,-1,1,-1,1,-1,1,-1,1,-1], 0), 5, 'Test 49');
test(maxNonOverlapping([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 20, 'Test 50');
test(maxNonOverlapping([100, -25, 25, -50, 50, -75, 75, -100, 100, -125, 125], 50), 2, 'Test 51');
test(maxNonOverlapping([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1], 0), 27, 'Test 52');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), 3, 'Test 53');
test(maxNonOverlapping([3,3,3,3,3,3,3,3,3,3], 9), 3, 'Test 54');
test(maxNonOverlapping([100, -25, 25, -25, 25, 25, -50, 25, -25, 25, 25, -50, 100, -200, 100], 25), 6, 'Test 55');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 30), 2, 'Test 56');
test(maxNonOverlapping([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 1, 2, 3, 4, 5], 5), 4, 'Test 57');
test(maxNonOverlapping([5, 1, 3, 7, 2, 8, 6, 4, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 5, 'Test 58');
test(maxNonOverlapping([10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10], 0), 10, 'Test 59');
test(maxNonOverlapping([9,3,6,9,3,6,9,3,6,9], 12), 3, 'Test 60');
test(maxNonOverlapping([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 10, 'Test 61');
test(maxNonOverlapping([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1], 0), 10, 'Test 62');
test(maxNonOverlapping([1,-1,0,1,0,-1,1], 0), 4, 'Test 63');
test(maxNonOverlapping([3, 2, 1, 6, 3, 3, 2, 1, 6, 3, 3, 2, 1, 6, 3], 9), 4, 'Test 64');
test(maxNonOverlapping([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], 0), 5, 'Test 65');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 55), 1, 'Test 66');
test(maxNonOverlapping([1,2,1,2,1,2,1,2,1,2], 3), 5, 'Test 67');
test(maxNonOverlapping([100,-50,50,-25,25,-10,10,5,-5,15,-15], 25), 3, 'Test 68');
test(maxNonOverlapping([-1, -2, -3, -4, -5, 10, 5, 0, -5, -10, 1, 2, 3, 4, 5], 0), 3, 'Test 69');
test(maxNonOverlapping([0,0,0,0,0,0,0,0,0,0], 0), 10, 'Test 70');
test(maxNonOverlapping([1000, -500, 500, -250, 250, -125, 125, 0, 0, 0, 0, 0, 0, 0, 0], 250), 2, 'Test 71');
test(maxNonOverlapping([-2, 2, 3, -3, 4, 5, -5, 4, 6, -6, 7, -7, 8, -8], 0), 6, 'Test 72');
test(maxNonOverlapping([5, 1, 3, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 6), 4, 'Test 73');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 15), 8, 'Test 74');
test(maxNonOverlapping([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 0), 15, 'Test 75');
test(maxNonOverlapping([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 150), 3, 'Test 76');
test(maxNonOverlapping([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 8, 'Test 77');
test(maxNonOverlapping([10,15,20,25,30,35,40,45,50,55], 75), 2, 'Test 78');
test(maxNonOverlapping([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 20, 'Test 79');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20), 1, 'Test 80');
test(maxNonOverlapping([5, -5, 5, -5, 5, -5, 5, -5, 5, -5], 5), 5, 'Test 81');
test(maxNonOverlapping([10, -20, 30, -40, 50, -60, 70, -80, 90, -100, 110, -120, 130, -140, 150, -160, 170, -180, 190, -200], 100), 1, 'Test 82');
test(maxNonOverlapping([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 100), 2, 'Test 83');
test(maxNonOverlapping([-1,0,1,-1,0,1,-1,0,1,-1], 0), 6, 'Test 84');
test(maxNonOverlapping([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6], 10), 1, 'Test 85');
test(maxNonOverlapping([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 20, 'Test 86');
test(maxNonOverlapping([10000, -10000, 10000, -10000, 10000, -10000], 10000), 3, 'Test 87');
test(maxNonOverlapping([5,10,15,20,25,30,35,40,45,50], 75), 2, 'Test 88');
test(maxNonOverlapping([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15], -15), 3, 'Test 89');
test(maxNonOverlapping([10,-10,10,-10,10,-10,10,-10,10,-10], 0), 5, 'Test 90');
test(maxNonOverlapping([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 3, 'Test 91');
test(maxNonOverlapping([5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5], 0), 10, 'Test 92');
test(maxNonOverlapping([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 15, 'Test 93');
test(maxNonOverlapping([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 100), 2, 'Test 94');
test(maxNonOverlapping([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15), 3, 'Test 95');
test(maxNonOverlapping([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 28), 1, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

