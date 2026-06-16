// Test: 1425. Constrained Subsequence Sum
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { constrainedSubsetSum } = require("./solution");

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

console.log("\n1425. Constrained Subsequence Sum\n");

test(constrainedSubsetSum([5,7,-3,5], 1), 14, 'Test 1');
test(constrainedSubsetSum([10,2,-10,5,20], 2), 37, 'Test 2');
test(constrainedSubsetSum([1,2,3,4,5], 3), 15, 'Test 3');
test(constrainedSubsetSum([3,-1,4,-2,2,1], 2), 10, 'Test 4');
test(constrainedSubsetSum([-1,-2,-3,-4,-5], 4), -1, 'Test 5');
test(constrainedSubsetSum([5,-1,5], 2), 10, 'Test 6');
test(constrainedSubsetSum([-1,-2,-3], 1), -1, 'Test 7');
test(constrainedSubsetSum([5,4,3,2,1], 5), 15, 'Test 8');
test(constrainedSubsetSum([5,3,-5,-10,-3,7], 4), 15, 'Test 9');
test(constrainedSubsetSum([1,-1,5,-2,3], 3), 9, 'Test 10');
test(constrainedSubsetSum([10,-2,-10,-5,20], 2), 23, 'Test 11');
test(constrainedSubsetSum([1,-1,2,-2,3,-3,4,-4,5,-5], 2), 15, 'Test 12');
test(constrainedSubsetSum([10,-10,20,-20,30,-30,40,-40,50,-50], 2), 150, 'Test 13');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10], 10), 55, 'Test 14');
test(constrainedSubsetSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20], 5), -1, 'Test 15');
test(constrainedSubsetSum([-10, -20, -30, -40, -50, -60, -70], 1), -10, 'Test 16');
test(constrainedSubsetSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 20, 'Test 17');
test(constrainedSubsetSum([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], 4), 150, 'Test 18');
test(constrainedSubsetSum([1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9,10,-10], 10), 55, 'Test 19');
test(constrainedSubsetSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 5), -1, 'Test 20');
test(constrainedSubsetSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 15), 5500, 'Test 21');
test(constrainedSubsetSum([1000, -500, 200, -300, 400, -200, 600, -100, 700, -300], 5), 2900, 'Test 22');
test(constrainedSubsetSum([10000,-10000,10000,-10000,10000,-10000,10000,-10000,10000,-10000], 4), 50000, 'Test 23');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10], 5), 55, 'Test 24');
test(constrainedSubsetSum([-10, -3, -5, -1, -6, -2, -4, -8, -9], 2), -1, 'Test 25');
test(constrainedSubsetSum([1000,999,998,997,996,995,994,993,992,991,990,989,988,987,986,985,984,983,982,981], 5), 19810, 'Test 26');
test(constrainedSubsetSum([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1], 2), 8, 'Test 27');
test(constrainedSubsetSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 3), 0, 'Test 28');
test(constrainedSubsetSum([10,-2,3,5,-1,2,0,8,-5,10], 4), 38, 'Test 29');
test(constrainedSubsetSum([0,0,0,0,0,0,0,0,0,0], 1), 0, 'Test 30');
test(constrainedSubsetSum([100, -100, 100, -100, 100, -100, 100, -100, 100, -100], 2), 500, 'Test 31');
test(constrainedSubsetSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10), 0, 'Test 32');
test(constrainedSubsetSum([1,0,1,0,1,0,1,0,1,0], 1), 5, 'Test 33');
test(constrainedSubsetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 55, 'Test 34');
test(constrainedSubsetSum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 7), 55, 'Test 35');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10], 1), 55, 'Test 36');
test(constrainedSubsetSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 550, 'Test 37');
test(constrainedSubsetSum([100,-200,300,-400,500,600,-700,800,-900,1000], 3), 3300, 'Test 38');
test(constrainedSubsetSum([1000,-1000,2000,-2000,3000,-3000,4000,-4000,5000,-5000], 2), 15000, 'Test 39');
test(constrainedSubsetSum([1, 2, 3, -4, 5, 6, -7, 8, 9, -10], 3), 34, 'Test 40');
test(constrainedSubsetSum([39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 7), 400, 'Test 41');
test(constrainedSubsetSum([-1000, -2000, -3000, -4000, -5000, 5000, 4000, 3000, 2000, 1000], 4), 15000, 'Test 42');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 210, 'Test 43');
test(constrainedSubsetSum([-1, -2, -3, -4, -5, -6, -7, -8, -9], 4), -1, 'Test 44');
test(constrainedSubsetSum([10,20,30,40,50,60,70,80,90,100], 1), 550, 'Test 45');
test(constrainedSubsetSum([5,2,3,1,6,4,7,8,9,10,1,1,1,1,1,1,1,1,1,1], 2), 65, 'Test 46');
test(constrainedSubsetSum([100, -300, 200, 50, -150, 400, 300], 3), 1050, 'Test 47');
test(constrainedSubsetSum([5,1,5,1,5,1,5,1,5,1], 3), 30, 'Test 48');
test(constrainedSubsetSum([100,-100,200,-200,300,-300,400,-400,500,-500], 5), 1500, 'Test 49');
test(constrainedSubsetSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 8), 400, 'Test 50');
test(constrainedSubsetSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 1), -1, 'Test 51');
test(constrainedSubsetSum([-10,2,-3,-4,5,6,-1,2,3,-10,100,-200,300], 4), 418, 'Test 52');
test(constrainedSubsetSum([-5,-4,-3,-2,-1,0,1,2,3,4,5], 5), 15, 'Test 53');
test(constrainedSubsetSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15], 6), 64, 'Test 54');
test(constrainedSubsetSum([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1], 2), 5, 'Test 55');
test(constrainedSubsetSum([5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5], 15), 50, 'Test 56');
test(constrainedSubsetSum([1000, 2000, 3000, 4000, 5000, -5000, -4000, -3000, -2000, -1000], 5), 15000, 'Test 57');
test(constrainedSubsetSum([1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000], 7), 8000, 'Test 58');
test(constrainedSubsetSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5], 5), 50, 'Test 59');
test(constrainedSubsetSum([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 4), 1045, 'Test 60');
test(constrainedSubsetSum([100, 200, 300, 400, 500, -100, -200, -300, -400, -500, 600, 700, 800, 900, 1000], 7), 5500, 'Test 61');
test(constrainedSubsetSum([5,5,5,5,5,5,5,5,5,5], 1), 50, 'Test 62');
test(constrainedSubsetSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 2), -1, 'Test 63');
test(constrainedSubsetSum([0, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19], 9), 90, 'Test 64');
test(constrainedSubsetSum([100,-50,200,-250,300,-350,400,-450,500], 5), 1500, 'Test 65');
test(constrainedSubsetSum([1, -2, 3, 5, -1, 2, 4, -3, 7], 3), 22, 'Test 66');
test(constrainedSubsetSum([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1], 2), 8, 'Test 67');
test(constrainedSubsetSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100, -90, -80, -70, -60, -50, -40, -30, -20, -10], 6), 550, 'Test 68');
test(constrainedSubsetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 10), 55, 'Test 69');
test(constrainedSubsetSum([100,200,300,400,500,600,700,800,900,1000], 1), 5500, 'Test 70');
test(constrainedSubsetSum([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 5), 105, 'Test 71');
test(constrainedSubsetSum([3, -1, 4, -1, 5, -9, 2, 6, -5, 3, 5, -7, 8, -2, 6], 5), 42, 'Test 72');
test(constrainedSubsetSum([100, 50, 20, 10, -10, -20, -50, -100, 30, 40], 4), 240, 'Test 73');
test(constrainedSubsetSum([-10,2,-3,4,-1,5,-6,7,-8,9], 4), 27, 'Test 74');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 7), 325, 'Test 75');
test(constrainedSubsetSum([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 10), 2100, 'Test 76');
test(constrainedSubsetSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 5), 6, 'Test 77');
test(constrainedSubsetSum([10,-2,-10,5,20,-30,40,-50,60,-70], 3), 135, 'Test 78');
test(constrainedSubsetSum([10,-10,20,-20,30,-30,40,-40,50,-50,60,-60,70,-70,80,-80,90,-90,100,-100], 7), 550, 'Test 79');
test(constrainedSubsetSum([-100, -99, -98, -97, -96, -95, -94, -93, -92, -91], 5), -91, 'Test 80');
test(constrainedSubsetSum([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 3), -1, 'Test 81');
test(constrainedSubsetSum([1, 2, 3, -6, 4, 5, -7, 6, 7, -8, 8, 9], 3), 45, 'Test 82');
test(constrainedSubsetSum([1,-100,1000,-10000,100000,-1000000,10000000,-100000000,1000000000], 2), 1010101001, 'Test 83');
test(constrainedSubsetSum([3,-2,5,-1,6,2,-5,10], 3), 26, 'Test 84');
test(constrainedSubsetSum([10, -20, 30, -40, 50, -60, 70, -80, 90, -100, 110, -120], 6), 360, 'Test 85');
test(constrainedSubsetSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3), 55, 'Test 86');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 210, 'Test 87');
test(constrainedSubsetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 55, 'Test 88');
test(constrainedSubsetSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 3), 0, 'Test 89');
test(constrainedSubsetSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), 0, 'Test 90');
test(constrainedSubsetSum([1,-1,1,-1,1,-1,1,-1,1,-1], 1), 1, 'Test 91');
test(constrainedSubsetSum([100,-200,300,-400,500,-600,700,-800,900,-1000], 4), 2500, 'Test 92');
test(constrainedSubsetSum([100,-100,50,-50,25,-25,12,-12,6,-6,3,-3,1,-1], 6), 197, 'Test 93');
test(constrainedSubsetSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), 0, 'Test 94');
test(constrainedSubsetSum([1,-1,1,-1,1,-1,1,-1,1,-1], 2), 5, 'Test 95');
test(constrainedSubsetSum([3,-1,-10,4,13,-5,12,-3,15,-10,7,8], 3), 62, 'Test 96');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), 120, 'Test 97');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10], 3), 55, 'Test 98');
test(constrainedSubsetSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 210, 'Test 99');
test(constrainedSubsetSum([1000,-1000,2000,-2000,3000,-3000,4000,-4000,5000], 3), 15000, 'Test 100');
test(constrainedSubsetSum([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000], 5), 2500, 'Test 101');
test(constrainedSubsetSum([10, 20, 30, 40, 50, -1, -2, -3, -4, -5, 60, 70, 80, 90, 100], 10), 550, 'Test 102');
test(constrainedSubsetSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20], 10), 100, 'Test 103');
test(constrainedSubsetSum([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], 4), -10, 'Test 104');
test(constrainedSubsetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 210, 'Test 105');
test(constrainedSubsetSum([-10000,-9000,-8000,-7000,-6000,-5000,-4000,-3000,-2000,-1000], 2), -1000, 'Test 106');
test(constrainedSubsetSum([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15], 7), 64, 'Test 107');
test(constrainedSubsetSum([1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9,10,-10], 3), 55, 'Test 108');
test(constrainedSubsetSum([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], 4), -1, 'Test 109');
test(constrainedSubsetSum([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 1), 120, 'Test 110');
test(constrainedSubsetSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 3), 0, 'Test 111');
test(constrainedSubsetSum([10, -5, 20, -10, 5, 15, -3], 3), 50, 'Test 112');
test(constrainedSubsetSum([-5,-5,-5,-5,-5,-5,-5,-5,-5,-5], 1), -5, 'Test 113');
test(constrainedSubsetSum([0,0,0,0,0,0,0,0,0,0], 10), 0, 'Test 114');
test(constrainedSubsetSum([-1,3,-2,5,-6,4,2,-3,5,-4], 3), 19, 'Test 115');

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
