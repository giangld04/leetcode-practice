// Test: 1749. Maximum Absolute Sum Of Any Subarray
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { maxAbsoluteSum } = require("./solution");

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

console.log("\n1749. Maximum Absolute Sum Of Any Subarray\n");

test(maxAbsoluteSum([1,-1,1,-1,1,-1]), 1, 'Test 1');
test(maxAbsoluteSum([1]), 1, 'Test 2');
test(maxAbsoluteSum([-10000,10000,-10000,10000]), 10000, 'Test 3');
test(maxAbsoluteSum([1,-3,2,3,-4]), 5, 'Test 4');
test(maxAbsoluteSum([0]), 0, 'Test 5');
test(maxAbsoluteSum([2,-5,1,-4,3,-2]), 8, 'Test 6');
test(maxAbsoluteSum([10000,-10000,10000,-10000,10000]), 10000, 'Test 7');
test(maxAbsoluteSum([-1,-2,-3,-4,-5]), 15, 'Test 8');
test(maxAbsoluteSum([0,0,0,0,0]), 0, 'Test 9');
test(maxAbsoluteSum([-1]), 1, 'Test 10');
test(maxAbsoluteSum([1,2,3,4,5]), 15, 'Test 11');
test(maxAbsoluteSum([-10000,10000,-10000,10000,-10000]), 10000, 'Test 12');
test(maxAbsoluteSum([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10]), 10, 'Test 13');
test(maxAbsoluteSum([1, 2, 3, 4, 5, -15, 6, 7, 8, 9, 10, -25, 11, 12, 13, 14, 15]), 80, 'Test 14');
test(maxAbsoluteSum([10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), 100, 'Test 15');
test(maxAbsoluteSum([5,1,-2,4,-1,-3,6,-2,1]), 10, 'Test 16');
test(maxAbsoluteSum([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 17');
test(maxAbsoluteSum([-100, 101, -102, 103, -104, 105, -106, 107]), 107, 'Test 18');
test(maxAbsoluteSum([100, -50, 25, -10, 5, -2, 1]), 100, 'Test 19');
test(maxAbsoluteSum([-1, -2, -3, -4, -5, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5, 5, 4, 3, 2, 1]), 15, 'Test 20');
test(maxAbsoluteSum([5, -1, 3, -2, 4, -3, 6, -4, 7, -5]), 15, 'Test 21');
test(maxAbsoluteSum([1000, -500, 250, -125, 62, -31, 15, -7, 3, -1]), 1000, 'Test 22');
test(maxAbsoluteSum([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000]), 1000, 'Test 23');
test(maxAbsoluteSum([1, 2, 3, -6, 1, 2, 3, -6, 1, 2, 3, -6]), 6, 'Test 24');
test(maxAbsoluteSum([5000, 4000, 3000, 2000, 1000, -5000, -4000, -3000, -2000, -1000]), 15000, 'Test 25');
test(maxAbsoluteSum([10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10000]), 10000, 'Test 26');
test(maxAbsoluteSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55]), 55, 'Test 27');
test(maxAbsoluteSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 55, 'Test 28');
test(maxAbsoluteSum([43, 44, -87, 45, 46, 47, -135, 48, 49, 50, 51, -195, 52, 53, 54, 55, 56, -260, 57, 58]), 276, 'Test 29');
test(maxAbsoluteSum([100, -100, 200, -200, 300, -300, 400, -400, 500, -500]), 500, 'Test 30');
test(maxAbsoluteSum([1, 2, 3, 4, 5, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, -5, -4, -3, -2, -1]), 15, 'Test 31');
test(maxAbsoluteSum([10, 20, 30, -60, 40, 50, -100, 60, 70, 80, -230, 90, 100, 110, -340, 120]), 340, 'Test 32');
test(maxAbsoluteSum([-5,-4,-3,-2,-1,1,2,3,4,5]), 15, 'Test 33');
test(maxAbsoluteSum([5000, -1200, 3000, -1500, 2000, -1000, 4000]), 10300, 'Test 34');
test(maxAbsoluteSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 20, 'Test 35');
test(maxAbsoluteSum([10000, -9999, 10000, -9999, 10000, -9999, 10000, -9999]), 10003, 'Test 36');
test(maxAbsoluteSum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20]), 20, 'Test 37');
test(maxAbsoluteSum([5, -1, 4, -2, 3, -3, 2, -2, 1, -1, 0, 1, -1, 2, -2, 3, -3, 4, -4, 5]), 11, 'Test 38');
test(maxAbsoluteSum([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 1, 'Test 39');
test(maxAbsoluteSum([-5, 10, -15, 20, -25, 30, -35, 40]), 40, 'Test 40');
test(maxAbsoluteSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 41');
test(maxAbsoluteSum([-5, 4, -3, 7, -8, 2, -6, 1, 9, -4]), 12, 'Test 42');
test(maxAbsoluteSum([26, -27, 28, -29, 30, -31, 32, -33, 34, -35, 36, -37, 38, -39, 40, -41, 42, -43, 44, -45, 46, -47, 48, -49, 50]), 50, 'Test 43');
test(maxAbsoluteSum([10, -3, 20, -40, 50, -60, 70, -80, 90]), 90, 'Test 44');
test(maxAbsoluteSum([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), 50, 'Test 45');
test(maxAbsoluteSum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16]), 16, 'Test 46');
test(maxAbsoluteSum([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100, -110, 120, -130, 140, -150, 160, -170, 180, -190, 200]), 200, 'Test 47');
test(maxAbsoluteSum([1, -10, 100, -1000, 10000, -100000, 1000000, -10000000, 100000000, -1000000000]), 1000000000, 'Test 48');
test(maxAbsoluteSum([23, -24, 25, -26, 27, -28, 29, -30, 31, -32, 33, -34, 35, -36, 37, -38, 39, -40, 41, -42]), 42, 'Test 49');
test(maxAbsoluteSum([1, -100, 100, -50, 50, -25, 25, -12, 12, -6, 6]), 100, 'Test 50');
test(maxAbsoluteSum([2, 3, -5, 4, 2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12]), 13, 'Test 51');
test(maxAbsoluteSum([10,-20,30,-40,50,-60,70,-80,90,-100]), 100, 'Test 52');
test(maxAbsoluteSum([100, -100, 200, -200, 300, -300, 400, -400]), 400, 'Test 53');
test(maxAbsoluteSum([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 15, 'Test 54');
test(maxAbsoluteSum([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 5, 'Test 55');
test(maxAbsoluteSum([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7]), 7, 'Test 56');
test(maxAbsoluteSum([5000, -2000, 1500, -1000, 800, -700, 600, -500, 400, -300]), 5000, 'Test 57');
test(maxAbsoluteSum([-10000, -10000, 20000, -10000, -10000, 20000, -10000, -10000, 20000, -10000, -10000, 20000]), 20000, 'Test 58');
test(maxAbsoluteSum([-3000, 4500, -5000, 6000, -7000, 8000, -9000]), 9000, 'Test 59');
test(maxAbsoluteSum([-100, 200, -300, 400, -500, 600, -700, 800, -900, 1000]), 1000, 'Test 60');
test(maxAbsoluteSum([500, -500, 500, -500, 500, -500, 500, -500, 500, -500]), 500, 'Test 61');
test(maxAbsoluteSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13]), 13, 'Test 62');
test(maxAbsoluteSum([0, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20]), 20, 'Test 63');
test(maxAbsoluteSum([1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 10, 'Test 64');
test(maxAbsoluteSum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 10, 'Test 65');
test(maxAbsoluteSum([3,2,1,0,-1,-2,-3,0,3,2,1,0,-1,-2,-3]), 6, 'Test 66');
test(maxAbsoluteSum([9999, -9998, 9997, -9996, 9995, -9994, 9993, -9992, 9991, -9990]), 9999, 'Test 67');
test(maxAbsoluteSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 1, 'Test 68');
test(maxAbsoluteSum([10000, 9000, 8000, -7000, -6000, -5000, 4000, 3000, 2000, -1000]), 27000, 'Test 69');
test(maxAbsoluteSum([10000, 10000, -20000, 10000, 10000, -20000, 10000, 10000, -20000, 10000, 10000, -20000]), 20000, 'Test 70');
test(maxAbsoluteSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 10, 'Test 71');
test(maxAbsoluteSum([5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5]), 5, 'Test 72');
test(maxAbsoluteSum([5, -1, 3, -2, 7, -8, 2, -6, 4]), 12, 'Test 73');
test(maxAbsoluteSum([100, 200, 300, -600, 400, 500, -1400, 600, 700, 800, 900, 1000]), 4000, 'Test 74');
test(maxAbsoluteSum([-10, -20, -30, 60, -40, -50, 100, -60, -70, -80, 230, -90, -100, -110, 340, -120]), 340, 'Test 75');
test(maxAbsoluteSum([-100, -200, -300, -400, -500, 1500, -600, -700, -800, -900, -1000]), 4000, 'Test 76');
test(maxAbsoluteSum([-100, -200, -300, -400, -500, -600, -700, -800, -900, -1000, 100, 200, 300, 400, 500]), 5500, 'Test 77');
test(maxAbsoluteSum([5, -1, 4, -2, 3, -3, 2, -4, 1, -5, 0, 6, -6, 7, -7, 8, -8, 9, -9, 10]), 10, 'Test 78');
test(maxAbsoluteSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 79');
test(maxAbsoluteSum([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000, 100, -200, 300, -400, 500]), 1200, 'Test 80');
test(maxAbsoluteSum([9000, 9000, -18000, 9000, 9000, -18000, 9000, 9000]), 18000, 'Test 81');
test(maxAbsoluteSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 1, 'Test 82');
test(maxAbsoluteSum([10000, -9000, 8000, -7000, 6000, -5000, 4000, -3000, 2000, -1000]), 10000, 'Test 83');
test(maxAbsoluteSum([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, -10, 10]), 10, 'Test 84');
test(maxAbsoluteSum([-5000, 6000, -7000, 8000, -9000, 10000, -11000, 12000, -13000, 14000]), 14000, 'Test 85');
test(maxAbsoluteSum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 10, 'Test 86');
test(maxAbsoluteSum([-5000, 5000, 0, -5000, 5000, 0, -5000, 5000, 0]), 5000, 'Test 87');
test(maxAbsoluteSum([1, 2, 3, 4, 5, -5, -4, -3, -2, -1]), 15, 'Test 88');
test(maxAbsoluteSum([10000,-10000,10000,-10000,10000,-10000]), 10000, 'Test 89');
test(maxAbsoluteSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, 20, -21, 22, -23, 24, -25]), 41, 'Test 90');
test(maxAbsoluteSum([5000, -2000, 1000, -500, 250, -125, 62, -31, 15, -7, 3, -1]), 5000, 'Test 91');
test(maxAbsoluteSum([10000, 10000, 10000, -10000, -10000, -10000, 10000]), 30000, 'Test 92');
test(maxAbsoluteSum([1,-1,1,-1,1,-1,1,-1,1,-1]), 1, 'Test 93');
test(maxAbsoluteSum([1, 2, 3, 4, 5, -15, 6, 7, 8, 9, 10]), 40, 'Test 94');
test(maxAbsoluteSum([1000, -2000, 3000, -4000, 5000]), 5000, 'Test 95');
test(maxAbsoluteSum([100, 200, 300, 400, 500, -1500, 600, 700, 800, 900, 1000]), 4000, 'Test 96');
test(maxAbsoluteSum([-9999, 9998, -9997, 9996, -9995, 9994]), 9999, 'Test 97');
test(maxAbsoluteSum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 5, 'Test 98');
test(maxAbsoluteSum([-20, 19, -18, 17, -16, 15, -14, 13, -12, 11, -10, 9, -8, 7, -6, 5, -4, 3, -2, 1]), 20, 'Test 99');
test(maxAbsoluteSum([100,-1,200,-2,300,-3,400,-4,500,-5]), 1490, 'Test 100');
test(maxAbsoluteSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 101');
test(maxAbsoluteSum([-1,0,1,-1,0,1,-1,0,1,-1,0,1,-1,0,1]), 1, 'Test 102');
test(maxAbsoluteSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 103');
test(maxAbsoluteSum([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100, -110]), 110, 'Test 104');
test(maxAbsoluteSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), 15, 'Test 105');
test(maxAbsoluteSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, 20, -21, 22]), 40, 'Test 106');
test(maxAbsoluteSum([10000, -9999, 9998, -9997, 9996, -9995, 9994, -9993, 9992, -9991]), 10000, 'Test 107');
test(maxAbsoluteSum([5, -3, 8, -1, 4, -7, 9, -2, 6, -10]), 19, 'Test 108');
test(maxAbsoluteSum([10000, -9999, 9998, -9997, 9996, -9995, 9994]), 10000, 'Test 109');
test(maxAbsoluteSum([5, -3, 8, -6, 2, -4, 7, -9, 1, -1]), 10, 'Test 110');

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
