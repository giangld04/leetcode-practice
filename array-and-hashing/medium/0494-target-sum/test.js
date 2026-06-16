// Test: 494. Target Sum
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { findTargetSumWays } = require("./solution");

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

console.log("\n494. Target Sum\n");

test(findTargetSumWays([10,20,30], 60), 1, 'Test 1');
test(findTargetSumWays([1, 2, 3, 4, 5], 3), 3, 'Test 2');
test(findTargetSumWays([0,0,0,0,0], 0), 32, 'Test 3');
test(findTargetSumWays([1000], 1000), 1, 'Test 4');
test(findTargetSumWays([1], 1), 1, 'Test 5');
test(findTargetSumWays([1,2,3,4,5], 10), 0, 'Test 6');
test(findTargetSumWays([0,0,0,0,0,0,0,0,0,0], 0), 1024, 'Test 7');
test(findTargetSumWays([10,20,30,40,50], 100), 0, 'Test 8');
test(findTargetSumWays([1,2,3,4,5], 3), 3, 'Test 9');
test(findTargetSumWays([5,5,5,5,5], 15), 5, 'Test 10');
test(findTargetSumWays([10,20,30,40,50], 15), 0, 'Test 11');
test(findTargetSumWays([1,1,1,1,1], 3), 5, 'Test 12');
test(findTargetSumWays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 13');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 1000), 10, 'Test 14');
test(findTargetSumWays([10,20,30,40,50,60,70,80,90,100], -250), 20, 'Test 15');
test(findTargetSumWays([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 250), 0, 'Test 16');
test(findTargetSumWays([100, 200, 300, 400, 500], 500), 3, 'Test 17');
test(findTargetSumWays([20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400], 2000), 2865, 'Test 18');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 300), 0, 'Test 19');
test(findTargetSumWays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 3000), 0, 'Test 20');
test(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 1), 524288, 'Test 21');
test(findTargetSumWays([33, 49, 84, 43, 22, 14, 15, 57, 31, 30, 83, 84, 29, 3, 23, 76, 69, 38, 83, 12], 21), 0, 'Test 22');
test(findTargetSumWays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 167960, 'Test 23');
test(findTargetSumWays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0), 184756, 'Test 24');
test(findTargetSumWays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), 0, 'Test 25');
test(findTargetSumWays([2, 3, 5, 7, 11, 13, 17, 19], 20), 0, 'Test 26');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 2865, 'Test 27');
test(findTargetSumWays([100, 50, 25, 12, 6, 3, 1], 100), 0, 'Test 28');
test(findTargetSumWays([1, 1, 2, 3, 5], 3), 0, 'Test 29');
test(findTargetSumWays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 1000), 2865, 'Test 30');
test(findTargetSumWays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 0, 'Test 31');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 0), 0, 'Test 32');
test(findTargetSumWays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 0), 76, 'Test 33');
test(findTargetSumWays([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105], 525), 0, 'Test 34');
test(findTargetSumWays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1500), 31, 'Test 35');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -5), 39, 'Test 36');
test(findTargetSumWays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 15504, 'Test 37');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 250), 20, 'Test 38');
test(findTargetSumWays([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 1000), 0, 'Test 39');
test(findTargetSumWays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 15504, 'Test 40');
test(findTargetSumWays([10,20,30,40,50,60,70,80,90,100], 250), 20, 'Test 41');
test(findTargetSumWays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 100), 5126, 'Test 42');
test(findTargetSumWays([500, 500, 500, 500, 500], 1000), 0, 'Test 43');
test(findTargetSumWays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 550), 1969, 'Test 44');
test(findTargetSumWays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 0), 29504, 'Test 45');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 0, 'Test 46');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 15029, 'Test 47');
test(findTargetSumWays([1,1,2,2,3,3,4,4,5,5], 5), 0, 'Test 48');
test(findTargetSumWays([1,2,3,4,5,6,7,8,9,10], 1), 40, 'Test 49');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70], 100), 6, 'Test 50');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], -500), 10206, 'Test 51');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 500), 10206, 'Test 52');
test(findTargetSumWays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 20), 0, 'Test 53');
test(findTargetSumWays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5000), 0, 'Test 54');
test(findTargetSumWays([999, 1000, 999, 1000, 999, 1000], 0), 0, 'Test 55');
test(findTargetSumWays([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2), 0, 'Test 56');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1000), 2865, 'Test 57');
test(findTargetSumWays([9, 7, 5, 3, 1], 3), 1, 'Test 58');
test(findTargetSumWays([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 250), 15504, 'Test 59');
test(findTargetSumWays([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 50), 0, 'Test 60');
test(findTargetSumWays([1,2,3,4,5,6,7,8,9,10], 30), 0, 'Test 61');
test(findTargetSumWays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 500), 2865, 'Test 62');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20), 0, 'Test 63');
test(findTargetSumWays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2500), 20, 'Test 64');
test(findTargetSumWays([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 15), 1062, 'Test 65');
test(findTargetSumWays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 5), 0, 'Test 66');
test(findTargetSumWays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 45), 0, 'Test 67');
test(findTargetSumWays([2, 10, 3, 5, 6, 9, 8], 20), 0, 'Test 68');
test(findTargetSumWays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 0, 'Test 69');
test(findTargetSumWays([5,5,5,5,5,5,5,5,5,5], 15), 0, 'Test 70');
test(findTargetSumWays([100,200,300,400,500,600,700,800,900,1000], 1500), 31, 'Test 71');
test(findTargetSumWays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 184756, 'Test 72');
test(findTargetSumWays([100, 200, 300, 400, 500], 1500), 1, 'Test 73');
test(findTargetSumWays([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 0), 252, 'Test 74');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50), 10206, 'Test 75');
test(findTargetSumWays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 25), 0, 'Test 76');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 39, 'Test 77');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 14326, 'Test 78');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 550), 1, 'Test 79');
test(findTargetSumWays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0), 15272, 'Test 80');
test(findTargetSumWays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15), 34, 'Test 81');
test(findTargetSumWays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 21, 'Test 82');
test(findTargetSumWays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 0), 15272, 'Test 83');
test(findTargetSumWays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 200), 2865, 'Test 84');
test(findTargetSumWays([5, 10, 15, 20, 25, 30], 50), 0, 'Test 85');

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
