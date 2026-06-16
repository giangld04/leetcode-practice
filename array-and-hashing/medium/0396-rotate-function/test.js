// Test: 396. Rotate Function
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { maxRotateFunction } = require("./solution");

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

console.log("\n396. Rotate Function\n");

test(maxRotateFunction([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 1');
test(maxRotateFunction([1,-1,1,-1,1]), 6, 'Test 2');
test(maxRotateFunction([1,0,0,0,1]), 7, 'Test 3');
test(maxRotateFunction([10,-10,20,-20]), 50, 'Test 4');
test(maxRotateFunction([1,2,3,4,5,6,7,8,9,10]), 330, 'Test 5');
test(maxRotateFunction([1,0,0,0]), 3, 'Test 6');
test(maxRotateFunction([100]), 0, 'Test 7');
test(maxRotateFunction([1,-1,1,-1]), 2, 'Test 8');
test(maxRotateFunction([10,20,30,40,50]), 400, 'Test 9');
test(maxRotateFunction([4,3,2,6]), 26, 'Test 10');
test(maxRotateFunction([-1,-2,-3,-4,-5]), -25, 'Test 11');
test(maxRotateFunction([5,5,5,5,5]), 50, 'Test 12');
test(maxRotateFunction([0,0,0,0,0]), 0, 'Test 13');
test(maxRotateFunction([5,5,5,5]), 30, 'Test 14');
test(maxRotateFunction([1,2,3,4,5]), 40, 'Test 15');
test(maxRotateFunction([100, -100, 100, -100, 100]), 600, 'Test 16');
test(maxRotateFunction([0,0,0,0]), 0, 'Test 17');
test(maxRotateFunction([-1,-2,-3,-4]), -12, 'Test 18');
test(maxRotateFunction([1,0,0,0,0]), 4, 'Test 19');
test(maxRotateFunction([1,2]), 2, 'Test 20');
test(maxRotateFunction([5,3,1,2,4]), 37, 'Test 21');
test(maxRotateFunction([-1,0,1]), 2, 'Test 22');
test(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 41650, 'Test 23');
test(maxRotateFunction([-10, -20, -30, -40, -50, -60]), -430, 'Test 24');
test(maxRotateFunction([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]), 266000, 'Test 25');
test(maxRotateFunction([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 56, 'Test 26');
test(maxRotateFunction([-100, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90]), -5115, 'Test 27');
test(maxRotateFunction([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 4295, 'Test 28');
test(maxRotateFunction([0, 0, 0, 0, 0, 1, 0, 0, 0, 0]), 9, 'Test 29');
test(maxRotateFunction([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 21750, 'Test 30');
test(maxRotateFunction([-99, -98, -97, -96, -95, -94, -93, -92, -91, -90]), -4170, 'Test 31');
test(maxRotateFunction([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 4500, 'Test 32');
test(maxRotateFunction([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 33000, 'Test 33');
test(maxRotateFunction([10, 20, 30, 40, 50, 60, 70]), 1120, 'Test 34');
test(maxRotateFunction([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 29, 'Test 35');
test(maxRotateFunction([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]), 285, 'Test 36');
test(maxRotateFunction([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 7, 'Test 37');
test(maxRotateFunction([10, 20, 30, 40, 50, 60]), 700, 'Test 38');
test(maxRotateFunction([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 5280, 'Test 39');
test(maxRotateFunction([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]), -700, 'Test 40');
test(maxRotateFunction([-10, 20, -30, 40, -50, 60]), 180, 'Test 41');
test(maxRotateFunction([-10, 1, -20, 2, -30, 3, -40, 4]), -206, 'Test 42');
test(maxRotateFunction([0, 1, -1, 2, -2, 3, -3]), 15, 'Test 43');
test(maxRotateFunction([10, -10, 20, -20, 30, -30, 40]), 210, 'Test 44');
test(maxRotateFunction([1000, -1000, 2000, -2000, 3000, -3000, 4000, -4000, 5000, -5000]), 35000, 'Test 45');
test(maxRotateFunction([0, 0, 0, 0, 0, 0, 0]), 0, 'Test 46');
test(maxRotateFunction([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 9, 'Test 47');
test(maxRotateFunction([-10, 0, 10, -20, 20, -30, 30, -40, 40, -50]), 110, 'Test 48');
test(maxRotateFunction([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 435, 'Test 49');
test(maxRotateFunction([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), 350, 'Test 50');
test(maxRotateFunction([0, 0, 0, 0, 0, 1, 2]), 17, 'Test 51');
test(maxRotateFunction([-50, -50, -50, -50, -50]), -500, 'Test 52');
test(maxRotateFunction([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1050, 'Test 53');
test(maxRotateFunction([5, 1, 4, 2, 8, 3, 7, 6, 9, 0]), 263, 'Test 54');
test(maxRotateFunction([100, 0, -100, 200, 0, -200, 300, 0, -300, 400]), 3000, 'Test 55');
test(maxRotateFunction([9, 8, 7, 6, 5, 4, 3, 2, 1]), 210, 'Test 56');
test(maxRotateFunction([-50, -50, -50, -50, -50, -50, -50, -50, -50, -50]), -2250, 'Test 57');
test(maxRotateFunction([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, -10, 10, -11, 11, -12, 12, -13, 13, -14, 14, -15, 15]), 120, 'Test 58');
test(maxRotateFunction([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 21, 'Test 59');
test(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1120, 'Test 60');
test(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 330, 'Test 61');
test(maxRotateFunction([50, 50, 50, 50, 50]), 500, 'Test 62');
test(maxRotateFunction([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 35, 'Test 63');
test(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), 715, 'Test 64');
test(maxRotateFunction([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 3300, 'Test 65');
test(maxRotateFunction([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 66');
test(maxRotateFunction([50, -50, 40, -40, 30, -30, 20, -20, 10, -10]), 350, 'Test 67');
test(maxRotateFunction([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 26600, 'Test 68');
test(maxRotateFunction([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 190, 'Test 69');
test(maxRotateFunction([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 5, 'Test 70');
test(maxRotateFunction([-10, 0, 10, -20, 0, 20, -30, 0, 30, -40]), 120, 'Test 71');
test(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 5200, 'Test 72');
test(maxRotateFunction([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 110, 'Test 73');
test(maxRotateFunction([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 1900, 'Test 74');
test(maxRotateFunction([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 75');
test(maxRotateFunction([100, 0, -100, 50, 0, -50, 25, 0, -25, 12]), 746, 'Test 76');
test(maxRotateFunction([1000, -1000, 1000, -1000, 1000, -1000]), 3000, 'Test 77');
test(maxRotateFunction([0, 1, -1, 2, -2, 3, -3, 4, -4, 5]), 35, 'Test 78');
test(maxRotateFunction([100, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 1140, 'Test 79');
test(maxRotateFunction([99, -99, 98, -98, 97, -97, 96, -96, 95, -95]), 505, 'Test 80');
test(maxRotateFunction([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50]), 550, 'Test 81');
test(maxRotateFunction([100, 0, -100, 200, 0, -200, 300, 0, -300, 400, 0, -400]), 2800, 'Test 82');
test(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 2660, 'Test 83');
test(maxRotateFunction([90, 80, 70, 60, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50]), 3500, 'Test 84');
test(maxRotateFunction([7, 1, 3, 4, 6, 5]), 84, 'Test 85');
test(maxRotateFunction([100, -100, 200, -200, 300, -300, 400, -400, 500, -500, 600, -600, 700, -700, 800, -800, 900, -900, 1000, -1000]), 14500, 'Test 86');
test(maxRotateFunction([100, -50, 200, -25, 300, -75]), 2000, 'Test 87');
test(maxRotateFunction([50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 2250, 'Test 88');
test(maxRotateFunction([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 190, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

