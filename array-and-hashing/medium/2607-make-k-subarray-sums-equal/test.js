// Test: 2607. Make K Subarray Sums Equal
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { makeSubKSumEqual } = require("./solution");

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

console.log("\n2607. Make K Subarray Sums Equal\n");

test(makeSubKSumEqual([1,2,3,4,5], 1), 6, 'Test 1');
test(makeSubKSumEqual([5,5,5,5,5], 2), 0, 'Test 2');
test(makeSubKSumEqual([1,4,1,3], 2), 1, 'Test 3');
test(makeSubKSumEqual([10,20,30,40,50], 5), 0, 'Test 4');
test(makeSubKSumEqual([5,5,5,5,5], 5), 0, 'Test 5');
test(makeSubKSumEqual([1,2,3,4,5,6], 2), 8, 'Test 6');
test(makeSubKSumEqual([10,20,30,40,50], 2), 60, 'Test 7');
test(makeSubKSumEqual([1,2,3,4,5,6,7,8,9,10], 5), 25, 'Test 8');
test(makeSubKSumEqual([2,5,5,7], 3), 5, 'Test 9');
test(makeSubKSumEqual([1,1,1,1,1], 1), 0, 'Test 10');
test(makeSubKSumEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 6), 1000, 'Test 11');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 4), 12, 'Test 12');
test(makeSubKSumEqual([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), 50, 'Test 13');
test(makeSubKSumEqual([100,200,300,400,500,600,700,800,900,1000], 5), 2500, 'Test 14');
test(makeSubKSumEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 3), 180, 'Test 15');
test(makeSubKSumEqual([1,2,3,4,5,6,7,8,9,10], 3), 25, 'Test 16');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 25, 'Test 17');
test(makeSubKSumEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 0, 'Test 18');
test(makeSubKSumEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 10), 200, 'Test 19');
test(makeSubKSumEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 10), 1000, 'Test 20');
test(makeSubKSumEqual([10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 3), 50, 'Test 21');
test(makeSubKSumEqual([2, 4, 2, 4, 2, 4, 2, 4], 2), 0, 'Test 22');
test(makeSubKSumEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), 24, 'Test 23');
test(makeSubKSumEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 48, 'Test 24');
test(makeSubKSumEqual([10, 20, 30, 10, 20, 30, 10, 20, 30], 3), 0, 'Test 25');
test(makeSubKSumEqual([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 10), 0, 'Test 26');
test(makeSubKSumEqual([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7), 0, 'Test 27');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 8), 156, 'Test 28');
test(makeSubKSumEqual([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300], 7), 4200, 'Test 29');
test(makeSubKSumEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 125, 'Test 30');
test(makeSubKSumEqual([5, 3, 8, 6, 2, 7, 4, 9, 1, 10], 4), 20, 'Test 31');
test(makeSubKSumEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 250, 'Test 32');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 2), 12, 'Test 33');
test(makeSubKSumEqual([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 2), 0, 'Test 34');
test(makeSubKSumEqual([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5], 13), 70, 'Test 35');
test(makeSubKSumEqual([3, 8, 15, 7, 5, 12], 3), 10, 'Test 36');
test(makeSubKSumEqual([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 37');
test(makeSubKSumEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], 2), 18, 'Test 38');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4), 96, 'Test 39');
test(makeSubKSumEqual([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5), 2500, 'Test 40');
test(makeSubKSumEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47], 3), 187, 'Test 41');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 100, 'Test 42');
test(makeSubKSumEqual([1000,900,800,700,600,500,400,300,200,100], 5), 2500, 'Test 43');
test(makeSubKSumEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10), 0, 'Test 44');
test(makeSubKSumEqual([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12], 11), 52, 'Test 45');
test(makeSubKSumEqual([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 5), 500, 'Test 46');
test(makeSubKSumEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], 4), 16, 'Test 47');
test(makeSubKSumEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 10), 50, 'Test 48');
test(makeSubKSumEqual([4,3,2,1,5,6,7,8,9,10], 4), 24, 'Test 49');
test(makeSubKSumEqual([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 25), 0, 'Test 50');
test(makeSubKSumEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5], 4), 34, 'Test 51');
test(makeSubKSumEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 7), 50, 'Test 52');
test(makeSubKSumEqual([7, 3, 5, 2, 8, 6, 4, 9, 1, 10], 5), 9, 'Test 53');
test(makeSubKSumEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2), 12, 'Test 54');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5), 50, 'Test 55');
test(makeSubKSumEqual([10, 20, 30, 40, 50, 60, 70, 80, 90], 6), 180, 'Test 56');
test(makeSubKSumEqual([1,2,3,4,5,6,7,8,9,10], 10), 0, 'Test 57');
test(makeSubKSumEqual([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7), 0, 'Test 58');
test(makeSubKSumEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 10), 100, 'Test 59');
test(makeSubKSumEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 6), 0, 'Test 60');
test(makeSubKSumEqual([10,9,8,7,6,5,4,3,2,1], 4), 24, 'Test 61');
test(makeSubKSumEqual([5,15,25,35,45,55,65,75,85,95], 2), 240, 'Test 62');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 0, 'Test 63');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 100, 'Test 64');
test(makeSubKSumEqual([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 4), 240, 'Test 65');
test(makeSubKSumEqual([10, 20, 30, 40, 50, 10, 20, 30, 40, 50], 3), 120, 'Test 66');
test(makeSubKSumEqual([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995], 3), 9, 'Test 67');
test(makeSubKSumEqual([1,10,2,9,3,8,4,7,5,6,1,10,2,9,3,8,4,7,5,6,1,10,2,9,3,8,4,7,5,6], 8), 36, 'Test 68');
test(makeSubKSumEqual([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 2), 0, 'Test 69');
test(makeSubKSumEqual([10,20,30,40,50,60,70,80,90,100,110,120], 6), 360, 'Test 70');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 10), 200, 'Test 71');
test(makeSubKSumEqual([10, 20, 30, 10, 20, 30, 10, 20, 30, 10], 3), 70, 'Test 72');
test(makeSubKSumEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 4), 48, 'Test 73');
test(makeSubKSumEqual([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 10), 0, 'Test 74');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6), 36, 'Test 75');
test(makeSubKSumEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15), 0, 'Test 76');
test(makeSubKSumEqual([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 6), 54, 'Test 77');
test(makeSubKSumEqual([9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 20, 'Test 78');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 5), 150, 'Test 79');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 25, 'Test 80');
test(makeSubKSumEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 7), 112, 'Test 81');
test(makeSubKSumEqual([9, 1, 8, 2, 7, 3, 6, 4, 5], 9), 0, 'Test 82');
test(makeSubKSumEqual([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 5), 100, 'Test 83');
test(makeSubKSumEqual([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 4), 0, 'Test 84');
test(makeSubKSumEqual([123, 456, 789, 101, 202, 303, 404, 505, 606, 707], 5), 1526, 'Test 85');
test(makeSubKSumEqual([2, 2, 2, 2, 2, 2, 2, 2], 4), 0, 'Test 86');
test(makeSubKSumEqual([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 31), 0, 'Test 87');
test(makeSubKSumEqual([5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1], 13), 52, 'Test 88');
test(makeSubKSumEqual([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 3), 75, 'Test 89');
test(makeSubKSumEqual([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 19), 200, 'Test 90');
test(makeSubKSumEqual([1, 3, 5, 7, 9, 11], 3), 18, 'Test 91');
test(makeSubKSumEqual([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 4), 2400, 'Test 92');
test(makeSubKSumEqual([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991], 5), 25, 'Test 93');
test(makeSubKSumEqual([1, 3, 2, 4, 6, 5, 7, 8, 10, 9], 4), 24, 'Test 94');
test(makeSubKSumEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], 6), 150, 'Test 95');
test(makeSubKSumEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 6), 64, 'Test 96');
test(makeSubKSumEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6], 5), 25, 'Test 97');
test(makeSubKSumEqual([1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 100, 'Test 98');
test(makeSubKSumEqual([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5], 7), 65, 'Test 99');
test(makeSubKSumEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 7), 381, 'Test 100');
test(makeSubKSumEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 5), 100, 'Test 101');
test(makeSubKSumEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 100, 'Test 102');

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
