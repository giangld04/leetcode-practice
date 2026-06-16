// Test: 3026. Maximum Good Subarray Sum
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { maximumSubarraySum } = require("./solution");

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

console.log("\n3026. Maximum Good Subarray Sum\n");

test(maximumSubarraySum([1000000000,-1000000000], 2000000000), 0, 'Test 1');
test(maximumSubarraySum([-1,3,2,4,5], 3), 11, 'Test 2');
test(maximumSubarraySum([10,20,30,40,50], 20), 120, 'Test 3');
test(maximumSubarraySum([1000000000,1000000000,1000000000], 0), 3000000000, 'Test 4');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1], 0), 10, 'Test 5');
test(maximumSubarraySum([-1000000000,1000000000,-1000000000,1000000000], 2000000000), 0, 'Test 6');
test(maximumSubarraySum([1,3,5,7,9], 8), 25, 'Test 7');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10], 9), 55, 'Test 8');
test(maximumSubarraySum([10,20,30,40,50], 40), 150, 'Test 9');
test(maximumSubarraySum([-1,-2,-3,-4], 2), -6, 'Test 10');
test(maximumSubarraySum([1,-1,1,-1,1], 2), 0, 'Test 11');
test(maximumSubarraySum([1,2,3,4,5,6], 1), 11, 'Test 12');
test(maximumSubarraySum([1,3,1,5,4,1,3,5], 2), 22, 'Test 13');
test(maximumSubarraySum([1,3,1,5,4,1], 4), 10, 'Test 14');
test(maximumSubarraySum([5,4,3,2,1], 4), 15, 'Test 15');
test(maximumSubarraySum([10,9,8,7,6,5,4,3,2,1], 9), 55, 'Test 16');
test(maximumSubarraySum([10,20,30,40,50], 10), 90, 'Test 17');
test(maximumSubarraySum([5,5,5,5,5], 0), 25, 'Test 18');
test(maximumSubarraySum([1,1,1,1,1], 0), 5, 'Test 19');
test(maximumSubarraySum([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 0), -1, 'Test 20');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19), 210, 'Test 21');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5], 14), 120, 'Test 22');
test(maximumSubarraySum([1, 3, 1, 5, 1, 7, 1, 9, 1, 11], 8), 39, 'Test 23');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5], 19), 210, 'Test 24');
test(maximumSubarraySum([-1,0,1,-2,2,-3,3,-4,4,-5,5], 5), 1, 'Test 25');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 9), 55, 'Test 26');
test(maximumSubarraySum([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100,-10,-20,-30,-40,-50], 90), -110, 'Test 27');
test(maximumSubarraySum([-5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19], 9), -95, 'Test 28');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 19), -35, 'Test 29');
test(maximumSubarraySum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1], 999), 1001, 'Test 30');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1], 5), 45, 'Test 31');
test(maximumSubarraySum([10,-10,20,-20,30,-30,40], 20), 40, 'Test 32');
test(maximumSubarraySum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9], 18), 0, 'Test 33');
test(maximumSubarraySum([500000000, 500000000, 500000000, 500000000, 500000000, 500000000, 500000000, 500000000, 500000000, 500000000], 0), 5000000000, 'Test 34');
test(maximumSubarraySum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15], 1), -3, 'Test 35');
test(maximumSubarraySum([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11], 1), 51, 'Test 36');
test(maximumSubarraySum([-1, 0, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9], 1), 8, 'Test 37');
test(maximumSubarraySum([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9], 8), 1, 'Test 38');
test(maximumSubarraySum([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], 90), -550, 'Test 39');
test(maximumSubarraySum([-5, -10, 0, -15, 5, 10, 20, -5], 15), 35, 'Test 40');
test(maximumSubarraySum([5,4,3,2,1,0,-1,-2,-3,-4,-5], 4), 15, 'Test 41');
test(maximumSubarraySum([5,6,7,8,9,5,6,7,8,9], 3), 65, 'Test 42');
test(maximumSubarraySum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,20], 19), 210, 'Test 43');
test(maximumSubarraySum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 18), 300, 'Test 44');
test(maximumSubarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 190, 'Test 45');
test(maximumSubarraySum([5, 3, 8, 5, 12, 7, 5], 7), 33, 'Test 46');
test(maximumSubarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 0, 'Test 47');
test(maximumSubarraySum([1, 5, 3, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 18), 300, 'Test 48');
test(maximumSubarraySum([10,20,30,40,50,60,70,80,90,100], 50), 450, 'Test 49');
test(maximumSubarraySum([1000000000,999999999,999999998,999999997,999999996,999999995], 5), 5999999985, 'Test 50');
test(maximumSubarraySum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 50, 'Test 51');
test(maximumSubarraySum([5, 1, 9, 10, 3, 8, 7, 6, 4, 2], 5), 47, 'Test 52');
test(maximumSubarraySum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], 5), 3, 'Test 53');
test(maximumSubarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 190), 2100, 'Test 54');
test(maximumSubarraySum([-1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000], 2000), 0, 'Test 55');
test(maximumSubarraySum([5, 3, 1, 4, 7, 9, 2, 5], 4), 29, 'Test 56');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9), 110, 'Test 57');
test(maximumSubarraySum([500000000,500000001,500000002,500000003,500000004,500000005,500000000], 5), 3000000015, 'Test 58');
test(maximumSubarraySum([1, -1, 2, -2, 3, -3, 4, -4, 5], 5), 3, 'Test 59');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 14), 120, 'Test 60');
test(maximumSubarraySum([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2], 2), 36, 'Test 61');
test(maximumSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 1), 22, 'Test 62');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 14), 120, 'Test 63');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 18), 589, 'Test 64');
test(maximumSubarraySum([5,1,4,1,5,9,2,6,5,3,5], 8), 20, 'Test 65');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 39, 'Test 66');
test(maximumSubarraySum([5,-5,15,-15,25,-25,35,-35,45], 10), 45, 'Test 67');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 1), 49, 'Test 68');
test(maximumSubarraySum([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10], 19), 10, 'Test 69');
test(maximumSubarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 50), 850, 'Test 70');
test(maximumSubarraySum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 2), 10, 'Test 71');
test(maximumSubarraySum([100,-100,200,-200,300,-300,400,-400], 100), 400, 'Test 72');
test(maximumSubarraySum([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10], 1), 45, 'Test 73');
test(maximumSubarraySum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 1), 38, 'Test 74');
test(maximumSubarraySum([2, 4, 2, 6, 2, 8, 2, 10, 2, 12], 10), 50, 'Test 75');
test(maximumSubarraySum([-5, -3, -1, 0, 2, 4, 6, 8, 10, 12], 10), 42, 'Test 76');
test(maximumSubarraySum([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1], 1), 21, 'Test 77');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1], 19), 210, 'Test 78');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19), 210, 'Test 79');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0), 20, 'Test 80');
test(maximumSubarraySum([10, -10, 20, -20, 30, -30, 40, -40], 10), 40, 'Test 81');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8), 90, 'Test 82');
test(maximumSubarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110], 90), 650, 'Test 83');
test(maximumSubarraySum([1000000000,-1000000000,1000000000,-1000000000,1000000000], 2000000000), 0, 'Test 84');
test(maximumSubarraySum([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 999999999), 9999999956, 'Test 85');
test(maximumSubarraySum([1000000000, -1000000000, 1000000000, -1000000000, 1000000000], 2000000000), 0, 'Test 86');
test(maximumSubarraySum([5,1,3,5,7,9,3,5], 2), 33, 'Test 87');
test(maximumSubarraySum([100, 200, 300, 400, 500, 400, 300, 200, 100, 0, -100, -200, -300, -400, -500, -400, -300, -200, -100], 200), 2400, 'Test 88');
test(maximumSubarraySum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], 6), 4, 'Test 89');
test(maximumSubarraySum([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 29, 'Test 90');
test(maximumSubarraySum([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40], 100), 550, 'Test 91');
test(maximumSubarraySum([1000000000,1000000000,1000000000,1000000000,1000000000], 0), 5000000000, 'Test 92');
test(maximumSubarraySum([1, 3, 1, 5, 1, 7, 1, 9, 1, 11, 1, 13, 1, 15, 1, 17, 1, 19], 18), 108, 'Test 93');
test(maximumSubarraySum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 9), 55, 'Test 94');
test(maximumSubarraySum([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 5), 15, 'Test 95');
test(maximumSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 1), 27, 'Test 96');
test(maximumSubarraySum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15], 14), -120, 'Test 97');
test(maximumSubarraySum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 19), 210, 'Test 98');
test(maximumSubarraySum([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995], 5), 5999999985, 'Test 99');
test(maximumSubarraySum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 9), 110, 'Test 100');
test(maximumSubarraySum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 90), 550, 'Test 101');
test(maximumSubarraySum([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], 20), -60, 'Test 102');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), 29, 'Test 103');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1,1], 0), 11, 'Test 104');
test(maximumSubarraySum([1,-1,2,-2,3,-3,4,-4,5,-5], 4), 5, 'Test 105');
test(maximumSubarraySum([5,4,3,2,1,0,-1,-2,-3,-4,-5], 9), 5, 'Test 106');
test(maximumSubarraySum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 38), 400, 'Test 107');
test(maximumSubarraySum([5,3,8,6,7,2,9,1,4,10], 7), 50, 'Test 108');
test(maximumSubarraySum([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 9), 55, 'Test 109');
test(maximumSubarraySum([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50], 90), 550, 'Test 110');
test(maximumSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9), 55, 'Test 111');
test(maximumSubarraySum([100,90,80,70,60,50,40,30,20,10], 50), 450, 'Test 112');
test(maximumSubarraySum([1,5,2,5,3,5,4,5,5,5,5,5,5,5,5,5,5,5,5,5], 4), 90, 'Test 113');
test(maximumSubarraySum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 900), 5500, 'Test 114');
test(maximumSubarraySum([-5,-4,-3,-2,-1,0,1,2,3,4,5], 10), 0, 'Test 115');
test(maximumSubarraySum([100, 200, 300, 400, 500, 400, 300, 200, 100, 500, 400, 300, 200, 100], 400), 3000, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
