// Test: 3075. Maximize Happiness Of Selected Children
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { maximumHappinessSum } = require("./solution");

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

console.log("\n3075. Maximize Happiness Of Selected Children\n");

test(maximumHappinessSum([10,9,8,7,6,5,4,3,2,1], 10), 30, 'Test 1');
test(maximumHappinessSum([10,20,30,40,50], 5), 140, 'Test 2');
test(maximumHappinessSum([5,5,5,5,5,5,5,5,5,5], 5), 15, 'Test 3');
test(maximumHappinessSum([100000000, 100000000, 100000000], 2), 199999999, 'Test 4');
test(maximumHappinessSum([1,2,3,4,5,6,7,8,9,10], 5), 30, 'Test 5');
test(maximumHappinessSum([1], 1), 1, 'Test 6');
test(maximumHappinessSum([100000000,100000000,100000000,100000000], 2), 199999999, 'Test 7');
test(maximumHappinessSum([9,8,7,6,5,4,3,2,1], 9), 25, 'Test 8');
test(maximumHappinessSum([10,9,8,7,6], 3), 24, 'Test 9');
test(maximumHappinessSum([100,100,100], 1), 100, 'Test 10');
test(maximumHappinessSum([1,1,1,1], 2), 1, 'Test 11');
test(maximumHappinessSum([1,1,2,2,3,3,4,4,5,5], 5), 12, 'Test 12');
test(maximumHappinessSum([1,2,3], 2), 4, 'Test 13');
test(maximumHappinessSum([2,3,4,5], 1), 5, 'Test 14');
test(maximumHappinessSum([1,1,1,1,1,1,1,1,1,1], 5), 1, 'Test 15');
test(maximumHappinessSum([5,4,3,2,1], 3), 9, 'Test 16');
test(maximumHappinessSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), 12, 'Test 17');
test(maximumHappinessSum([1,10,1,10,1,10,1,10,1,10], 5), 40, 'Test 18');
test(maximumHappinessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 24, 'Test 19');
test(maximumHappinessSum([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 10), 15, 'Test 20');
test(maximumHappinessSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1, 'Test 21');
test(maximumHappinessSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 4), 334, 'Test 22');
test(maximumHappinessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 12), 110, 'Test 23');
test(maximumHappinessSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 15), 15, 'Test 24');
test(maximumHappinessSum([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 18), 55, 'Test 25');
test(maximumHappinessSum([10, 20, 30, 40, 50], 3), 117, 'Test 26');
test(maximumHappinessSum([3,1,4,1,5,9,2,6,5,3,5,9], 7), 24, 'Test 27');
test(maximumHappinessSum([100000000, 90000000, 80000000, 70000000, 60000000, 50000000, 40000000, 30000000, 20000000, 10000000], 10), 549999955, 'Test 28');
test(maximumHappinessSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 10), 5455, 'Test 29');
test(maximumHappinessSum([50, 40, 30, 20, 10, 0, -10, -20, -30, -40], 6), 140, 'Test 30');
test(maximumHappinessSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 40, 'Test 31');
test(maximumHappinessSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 7), 1, 'Test 32');
test(maximumHappinessSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 110, 'Test 33');
test(maximumHappinessSum([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 10), 3, 'Test 34');
test(maximumHappinessSum([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81], 10), 910, 'Test 35');
test(maximumHappinessSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 8), 492, 'Test 36');
test(maximumHappinessSum([1, 100000000, 1, 100000000, 1, 100000000, 1, 100000000, 1, 100000000], 5), 499999990, 'Test 37');
test(maximumHappinessSum([98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79], 15), 1260, 'Test 38');
test(maximumHappinessSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 15), 273, 'Test 39');
test(maximumHappinessSum([1,2,3,4,5,6,7,8,9,10], 1), 10, 'Test 40');
test(maximumHappinessSum([10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6), 30, 'Test 41');
test(maximumHappinessSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100), 1, 'Test 42');
test(maximumHappinessSum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 8), 156, 'Test 43');
test(maximumHappinessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 63, 'Test 44');
test(maximumHappinessSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15), 1, 'Test 45');
test(maximumHappinessSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 15), 9995, 'Test 46');
test(maximumHappinessSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 63, 'Test 47');
test(maximumHappinessSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 110, 'Test 48');
test(maximumHappinessSum([100000000,90000000,80000000,70000000,60000000,50000000,40000000,30000000,20000000,10000000], 5), 399999990, 'Test 49');
test(maximumHappinessSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 10), 465, 'Test 50');
test(maximumHappinessSum([9, 7, 5, 3, 1, 8, 6, 4, 2, 0, 9, 7, 5, 3, 1, 8, 6, 4, 2, 0], 10), 33, 'Test 51');
test(maximumHappinessSum([100,99,98,97,96,95,94,93,92,91], 10), 910, 'Test 52');
test(maximumHappinessSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 30, 'Test 53');
test(maximumHappinessSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 10), 40, 'Test 54');
test(maximumHappinessSum([100,200,300,400,500,600,700,800,900,1000], 5), 3990, 'Test 55');
test(maximumHappinessSum([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 3), 132, 'Test 56');
test(maximumHappinessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7), 30, 'Test 57');
test(maximumHappinessSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 15), 256, 'Test 58');
test(maximumHappinessSum([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 4), 34, 'Test 59');
test(maximumHappinessSum([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10], 15), 43, 'Test 60');
test(maximumHappinessSum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 8), 25, 'Test 61');
test(maximumHappinessSum([5, 4, 3, 2, 1], 3), 9, 'Test 62');
test(maximumHappinessSum([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 15), 55, 'Test 63');
test(maximumHappinessSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 390, 'Test 64');
test(maximumHappinessSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 1, 'Test 65');
test(maximumHappinessSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 6), 20, 'Test 66');
test(maximumHappinessSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), 64, 'Test 67');
test(maximumHappinessSum([2,2,2,2,2,2,2,2,2,2], 5), 3, 'Test 68');
test(maximumHappinessSum([9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 25, 'Test 69');
test(maximumHappinessSum([100,50,10,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 159, 'Test 70');
test(maximumHappinessSum([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 8), 772, 'Test 71');
test(maximumHappinessSum([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 15), 1845, 'Test 72');
test(maximumHappinessSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 15, 'Test 73');
test(maximumHappinessSum([10,20,30,40,50,60,70,80,90,100], 5), 390, 'Test 74');
test(maximumHappinessSum([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 8), 40, 'Test 75');
test(maximumHappinessSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20), 1, 'Test 76');
test(maximumHappinessSum([20, 15, 10, 5, 0, 0, 0, 0, 0, 0], 4), 44, 'Test 77');
test(maximumHappinessSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 9), 9864, 'Test 78');
test(maximumHappinessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 30, 'Test 79');
test(maximumHappinessSum([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5], 5), 30, 'Test 80');
test(maximumHappinessSum([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 20), 240, 'Test 81');
test(maximumHappinessSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 5), 30, 'Test 82');
test(maximumHappinessSum([5, 4, 3, 2, 1, 5, 4, 3, 2, 1], 5), 12, 'Test 83');
test(maximumHappinessSum([5, 15, 25, 35, 45, 55, 65], 4), 194, 'Test 84');
test(maximumHappinessSum([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 240, 'Test 85');
test(maximumHappinessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 110, 'Test 86');
test(maximumHappinessSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 30, 'Test 87');
test(maximumHappinessSum([5, 3, 8, 6, 2, 7, 4, 9, 1, 10], 6), 30, 'Test 88');
test(maximumHappinessSum([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14], 8), 64, 'Test 89');
test(maximumHappinessSum([5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5], 10), 14, 'Test 90');
test(maximumHappinessSum([100000000, 90000000, 80000000, 70000000, 60000000], 3), 269999997, 'Test 91');
test(maximumHappinessSum([5, 15, 25, 35, 45, 55], 4), 154, 'Test 92');
test(maximumHappinessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 30, 'Test 93');
test(maximumHappinessSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 505, 'Test 94');
test(maximumHappinessSum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 10), 255, 'Test 95');
test(maximumHappinessSum([5, 3, 8, 6, 2, 7, 4, 1, 9], 4), 24, 'Test 96');
test(maximumHappinessSum([100, 50, 25, 12, 6, 3, 1, 0, 0, 0], 5), 183, 'Test 97');
test(maximumHappinessSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 15, 'Test 98');
test(maximumHappinessSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3), 267, 'Test 99');
test(maximumHappinessSum([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11], 5), 35, 'Test 100');

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
