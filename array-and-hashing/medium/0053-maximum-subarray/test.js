// Test: 53. Maximum Subarray
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { maxSubArray } = require("./solution");

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

console.log("\n53. Maximum Subarray\n");

test(maxSubArray([0,1,2,3,4,5]), 15, 'Test 1');
test(maxSubArray([-2,1,-3,4,-1,2,1,-5,4,7]), 12, 'Test 2');
test(maxSubArray([10000,-10000,10000,-10000,10000]), 10000, 'Test 3');
test(maxSubArray([100,-1,50,-1,100]), 248, 'Test 4');
test(maxSubArray([0,-3,5,-2,1,3,-1,2,-4,2]), 8, 'Test 5');
test(maxSubArray([1]), 1, 'Test 6');
test(maxSubArray([0,-3,5,-2,1,3,-1,2,-4,2,3]), 9, 'Test 7');
test(maxSubArray([-5,-4,-3,-2,-1]), -1, 'Test 8');
test(maxSubArray([-1,0,-2,0,-3,0,-4,0]), 0, 'Test 9');
test(maxSubArray([1,-2,3,5,-3,2]), 8, 'Test 10');
test(maxSubArray([-2,0,-1]), 0, 'Test 11');
test(maxSubArray([1,2,3,4,5]), 15, 'Test 12');
test(maxSubArray([1,-1,2,-2,3,-3,4,-4]), 4, 'Test 13');
test(maxSubArray([10000,-10000,10000]), 10000, 'Test 14');
test(maxSubArray([0,0,0,0]), 0, 'Test 15');
test(maxSubArray([-1,-2,-3,-4]), -1, 'Test 16');
test(maxSubArray([-10000,10000]), 10000, 'Test 17');
test(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6, 'Test 18');
test(maxSubArray([-10000,10000,-10000,10000,-10000,10000]), 10000, 'Test 19');
test(maxSubArray([-2,1,-3,4,-1,2,1,-5,4,1,2,3]), 11, 'Test 20');
test(maxSubArray([5,4,-1,7,8]), 23, 'Test 21');
test(maxSubArray([1,-1,2,-2,3,-3,4,-4,5,-5]), 5, 'Test 22');
test(maxSubArray([5,-1,3,-2,4,-3,1,-1,2,-2,3,-3,4,-4,5,-5]), 11, 'Test 23');
test(maxSubArray([100, -1, -2, -3, 100, -1, -2, -3]), 194, 'Test 24');
test(maxSubArray([-10, -20, -30, -40, -50, -60]), -10, 'Test 25');
test(maxSubArray([5, -2, -3, 4, -1, -2, 1, 5, -3]), 7, 'Test 26');
test(maxSubArray([1, 2, 3, 4, 5, -15, 6, 7, 8, 9, 10, -25, 11, 12, 13, 14, 15]), 80, 'Test 27');
test(maxSubArray([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15]), 15, 'Test 28');
test(maxSubArray([10, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19]), 19, 'Test 29');
test(maxSubArray([100,-100,50,-50,75,-75,25,-25,0,0,0]), 100, 'Test 30');
test(maxSubArray([1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0]), 1, 'Test 31');
test(maxSubArray([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1]), 1, 'Test 32');
test(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 33');
test(maxSubArray([2,3,-2,5,-3,4,-1,2,1,-5,4,-6,7,8,-9,10,11,-12]), 31, 'Test 34');
test(maxSubArray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 35');
test(maxSubArray([10000,-10000,10000,-10000,10000,-10000,10000,-10000,10000,-10000]), 10000, 'Test 36');
test(maxSubArray([1, -3, 2, 1, -1, 3, -2, 3, 4, -5, 2, 1, -1, 2, 3, -4, 5, -6, 7, -8]), 14, 'Test 37');
test(maxSubArray([1,-1,1,-1,1,-1,1,-1,1,-1,100]), 100, 'Test 38');
test(maxSubArray([1,2,3,4,5,-1,-2,-3,-4,-5,6,7,8,9,10]), 40, 'Test 39');
test(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 6, -1, 2, -1, 4, -3]), 15, 'Test 40');
test(maxSubArray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 41');
test(maxSubArray([-21, 22, -23, 24, -25, 26, -27, 28, -29, 30, -31, 32, -33, 34, -35, 36, -37, 38, -39, 40]), 40, 'Test 42');
test(maxSubArray([100,-1,2,-3,-4,5,6,7,-8,9,10,-11,12,13,-14]), 137, 'Test 43');
test(maxSubArray([100,-100,100,-100,100,-100,100,-100,100,-100]), 100, 'Test 44');
test(maxSubArray([10,-10,20,-20,30,-30,40,-40,50]), 50, 'Test 45');
test(maxSubArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9]), 9, 'Test 46');
test(maxSubArray([10, -20, 30, -40, 50, -60, 70, -80, 90, -100, 110, -120, 130, -140, 150]), 150, 'Test 47');
test(maxSubArray([9, 8, 7, 6, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6, -7, -8, -9]), 45, 'Test 48');
test(maxSubArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 10, 'Test 49');
test(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 20]), 55, 'Test 50');
test(maxSubArray([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 1, 2, 3, 4, 5]), 15, 'Test 51');
test(maxSubArray([10,-5,10,-5,10,-5,10,-5,10,-5,10,-5,10,-5,10,-5,10,-5,10,-5]), 55, 'Test 52');
test(maxSubArray([5, 4, -1, 7, 8, -20, 15, -10, 25, -5, 10, -30, 40, -50, 60]), 60, 'Test 53');
test(maxSubArray([-1, 0, 1, 2, -1, 0, 1, 2, -1, 0, 1, 2, -1, 0, 1, 2, -1, 0, 1, 2]), 11, 'Test 54');
test(maxSubArray([-2,-3,-1,-5,-4]), -1, 'Test 55');
test(maxSubArray([1,2,3,4,5,-1,-2,-3,-4,-5,1,2,3,4,5]), 15, 'Test 56');
test(maxSubArray([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 3, 'Test 57');
test(maxSubArray([-1, -2, -3, -4, -5, -6, 7, 8, 9, 10, 11, -1, -2, -3, -4]), 45, 'Test 58');
test(maxSubArray([-1000,500,-300,200,-100,50,-25,12,-6,3,-1]), 500, 'Test 59');
test(maxSubArray([-10000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10000]), 10000, 'Test 60');
test(maxSubArray([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 10]), 15, 'Test 61');
test(maxSubArray([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20]), -1, 'Test 62');
test(maxSubArray([1, 2, 3, 4, 5, -15, 6, 7, 8, 9, 10]), 40, 'Test 63');
test(maxSubArray([-10,0,-1,3,4,-5,1,2,-1,-2,3,4,-5,6,7,-8,9,10]), 28, 'Test 64');
test(maxSubArray([-2,1,-3,4,-1,2,1,-5,4,-2,3,4,-1,2,1,-5,4]), 12, 'Test 65');
test(maxSubArray([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), -1, 'Test 66');
test(maxSubArray([10000, -5000, 5000, -5000, 5000, -5000, 5000, -5000, 5000, -5000]), 10000, 'Test 67');
test(maxSubArray([5, 4, -1, 7, 8, -10, 12, 3, 4, -15, 20, -21, 22]), 38, 'Test 68');
test(maxSubArray([1, 2, 3, 4, -10, 10, 20, -5, 5]), 30, 'Test 69');
test(maxSubArray([-2, -3, -1, -5, -4, -6, -3, -1, -2]), -1, 'Test 70');
test(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3, 4, -1, 2, 1, -5, 4]), 10, 'Test 71');
test(maxSubArray([1000,-500,200,-100,50,-25,12,-6,3,-1,0,-2,1,3,-1,2]), 1000, 'Test 72');
test(maxSubArray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 100]), 100, 'Test 73');
test(maxSubArray([-10, -20, -30, -40, -50, 100, -1, -2, -3]), 100, 'Test 74');
test(maxSubArray([1000, -1000, 500, -500, 250, -250, 125, -125]), 1000, 'Test 75');
test(maxSubArray([-1, 0, -2, 0, -3, 0, -4, 0, -5, 0, -6, 0, -7, 0, -8, 0]), 0, 'Test 76');
test(maxSubArray([1,2,3,-6,1,2,3,4,-10,5,6,7,8]), 26, 'Test 77');
test(maxSubArray([-10000, -9999, -9998, -9997, -9996, -9995, -9994, -9993, -9992, -9991]), -9991, 'Test 78');
test(maxSubArray([1,1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 10, 'Test 79');
test(maxSubArray([1000, -500, 200, -300, 100, -200, 50, -10, 5, 1]), 1000, 'Test 80');
test(maxSubArray([1, 2, 3, -6, 1, 2, 3, 4, 5, -10, 1, 2, 3, 4, 5, 6, 7]), 33, 'Test 81');
test(maxSubArray([1000, -1000, 500, -500, 250, -250, 125, -125, 62, -62, 31, -31, 15, -15]), 1000, 'Test 82');
test(maxSubArray([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), -1, 'Test 83');
test(maxSubArray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 100]), 100, 'Test 84');
test(maxSubArray([100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 100, 'Test 85');
test(maxSubArray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), 15, 'Test 86');
test(maxSubArray([10,20,30,40,50,-100,60,70,80,90,100]), 450, 'Test 87');
test(maxSubArray([-1,2,-1,2,-1,2,-1,2,-1,2,-1,2,-1,2]), 8, 'Test 88');
test(maxSubArray([100,-1,-2,-3,100]), 194, 'Test 89');
test(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 6, -1, 2, -1, 2, 3]), 16, 'Test 90');
test(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 91');
test(maxSubArray([100, -1, -2, -3, 100, -1, -2, -3, 100]), 288, 'Test 92');
test(maxSubArray([1, 2, 3, 4, 5, -15, 6, 7, 8, 9, 10, -25, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 170, 'Test 93');
test(maxSubArray([1,2,3,4,5,-1,-2,-3,-4,-5,10,20,30,-10,-20,-30]), 60, 'Test 94');
test(maxSubArray([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14]), -1, 'Test 95');
test(maxSubArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 96');
test(maxSubArray([0, -1, -2, -3, -4, -5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, 6, 7, 8, 9, 10]), 65, 'Test 97');
test(maxSubArray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 19, 'Test 98');

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
