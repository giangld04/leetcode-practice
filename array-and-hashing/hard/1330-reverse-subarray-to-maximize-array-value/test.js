// Test: 1330. Reverse Subarray To Maximize Array Value
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { maxValueAfterReverse } = require("./solution");

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

console.log("\n1330. Reverse Subarray To Maximize Array Value\n");

test(maxValueAfterReverse([1,3,2,4,5]), 9, 'Test 1');
test(maxValueAfterReverse([100,90,80,70,60,50,40,30,20,10]), 230, 'Test 2');
test(maxValueAfterReverse([1,-1,2,-2,3,-3]), 22, 'Test 3');
test(maxValueAfterReverse([1,-1,1,-1,1]), 8, 'Test 4');
test(maxValueAfterReverse([1,-1,1,-1,1,-1]), 10, 'Test 5');
test(maxValueAfterReverse([100000,-100000,100000,-100000,100000]), 800000, 'Test 6');
test(maxValueAfterReverse([-10,-5,0,5,10]), 40, 'Test 7');
test(maxValueAfterReverse([-1,-2,-3,-4,-5]), 8, 'Test 8');
test(maxValueAfterReverse([10,20,30,40,50,60,70,80,90,100]), 230, 'Test 9');
test(maxValueAfterReverse([2,4,9,24,2,1,10]), 68, 'Test 10');
test(maxValueAfterReverse([1,2,3,4,5]), 8, 'Test 11');
test(maxValueAfterReverse([1,3,2,1,2,3,1]), 9, 'Test 12');
test(maxValueAfterReverse([-1,4,-2,3]), 16, 'Test 13');
test(maxValueAfterReverse([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 14');
test(maxValueAfterReverse([-100000,100000,-100000,100000]), 600000, 'Test 15');
test(maxValueAfterReverse([10,20,30,40,50,60,70,80,90]), 200, 'Test 16');
test(maxValueAfterReverse([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 38, 'Test 17');
test(maxValueAfterReverse([1,1,1,1,1]), 0, 'Test 18');
test(maxValueAfterReverse([1,100000,1,100000,1]), 399996, 'Test 19');
test(maxValueAfterReverse([100,-100,100,-100]), 600, 'Test 20');
test(maxValueAfterReverse([100000,-100000,100000,-100000]), 600000, 'Test 21');
test(maxValueAfterReverse([-100000,100000,-100000,100000,-100000]), 800000, 'Test 22');
test(maxValueAfterReverse([5,4,3,2,1]), 8, 'Test 23');
test(maxValueAfterReverse([2,3,1,5,4]), 10, 'Test 24');
test(maxValueAfterReverse([1,2,1,2,1]), 4, 'Test 25');
test(maxValueAfterReverse([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 38, 'Test 26');
test(maxValueAfterReverse([5, 3, 8, 6, 7, 2, 4, 1, 9]), 33, 'Test 27');
test(maxValueAfterReverse([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 28');
test(maxValueAfterReverse([100000, -100000, 50000, -50000, 25000, -25000, 12500]), 687500, 'Test 29');
test(maxValueAfterReverse([-10, 10, -10, 10, -10, 10, -10, 10, -10, 10]), 180, 'Test 30');
test(maxValueAfterReverse([1, 3, 5, 7, 9, 8, 6, 4, 2, 0]), 29, 'Test 31');
test(maxValueAfterReverse([-10, 10, -20, 20, -30, 30, -40, 40, -50, 50]), 580, 'Test 32');
test(maxValueAfterReverse([100000, 0, -100000, 100000, 0, -100000, 100000]), 900000, 'Test 33');
test(maxValueAfterReverse([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20]), 91, 'Test 34');
test(maxValueAfterReverse([100000, 99999, 99998, 99997, 99996, 99995]), 11, 'Test 35');
test(maxValueAfterReverse([1, 2, 3, 2, 1, 2, 3, 2, 1]), 9, 'Test 36');
test(maxValueAfterReverse([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]), 38, 'Test 37');
test(maxValueAfterReverse([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), 53, 'Test 38');
test(maxValueAfterReverse([5, 3, 8, 6, 2, 7, 4, 9, 1]), 39, 'Test 39');
test(maxValueAfterReverse([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 38, 'Test 40');
test(maxValueAfterReverse([100, -100, 200, -200, 300, -300, 400]), 2900, 'Test 41');
test(maxValueAfterReverse([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 20, 'Test 42');
test(maxValueAfterReverse([-50000, 50000, -50000, 50000, -50000]), 400000, 'Test 43');
test(maxValueAfterReverse([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 9, 'Test 44');
test(maxValueAfterReverse([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]), 38, 'Test 45');
test(maxValueAfterReverse([100000, -100000, 100000, -100000, 100000, -100000]), 1000000, 'Test 46');
test(maxValueAfterReverse([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 21, 'Test 47');
test(maxValueAfterReverse([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 48');
test(maxValueAfterReverse([100000, 0, -100000, 0, 100000, 0, -100000, 0, 100000]), 900000, 'Test 49');
test(maxValueAfterReverse([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 50');
test(maxValueAfterReverse([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), 580, 'Test 51');
test(maxValueAfterReverse([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 23, 'Test 52');
test(maxValueAfterReverse([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 53, 'Test 53');
test(maxValueAfterReverse([1, -100000, 2, -99999, 3, -99998, 4, -99997, 5, -99996]), 900013, 'Test 54');
test(maxValueAfterReverse([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 23, 'Test 55');
test(maxValueAfterReverse([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 56');
test(maxValueAfterReverse([5, 3, 8, 6, 2, 7, 4, 1, 9]), 36, 'Test 57');
test(maxValueAfterReverse([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 0, 'Test 58');
test(maxValueAfterReverse([5, 3, 8, 6, 2, 7, 4, 1, 9, 10]), 43, 'Test 59');
test(maxValueAfterReverse([10000, 1000, 100, 10, 1, 0, -1, -10, -100, -1000, -10000]), 31000, 'Test 60');
test(maxValueAfterReverse([1, 2, 3, -1, -2, -3, 4, 5, 6, -4, -5, -6, 7, 8, 9]), 70, 'Test 61');
test(maxValueAfterReverse([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 28, 'Test 62');
test(maxValueAfterReverse([0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, -10, 10]), 219, 'Test 63');
test(maxValueAfterReverse([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 38, 'Test 64');
test(maxValueAfterReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 38, 'Test 65');
test(maxValueAfterReverse([-100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000]), 1800000, 'Test 66');
test(maxValueAfterReverse([100000, -100000, 100000, -100000, 100000]), 800000, 'Test 67');
test(maxValueAfterReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 23, 'Test 68');
test(maxValueAfterReverse([1, 100, 2, 99, 3, 98, 4, 97]), 675, 'Test 69');
test(maxValueAfterReverse([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 17, 'Test 70');
test(maxValueAfterReverse([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 320, 'Test 71');
test(maxValueAfterReverse([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 72');
test(maxValueAfterReverse([-5, 5, -15, 15, -25, 25, -35, 35, -45, 45, -55, 55]), 710, 'Test 73');
test(maxValueAfterReverse([9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 6, 4, 3, 2, 1]), 59, 'Test 74');
test(maxValueAfterReverse([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 107, 'Test 75');
test(maxValueAfterReverse([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4]), 38, 'Test 76');
test(maxValueAfterReverse([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), 33, 'Test 77');
test(maxValueAfterReverse([1, 2, 3, 100, 3, 2, 1, 99, 2, 1, 0]), 399, 'Test 78');
test(maxValueAfterReverse([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 79');
test(maxValueAfterReverse([10, -10, 20, -20, 30, -30, 40, -40]), 380, 'Test 80');
test(maxValueAfterReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 68, 'Test 81');
test(maxValueAfterReverse([100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000]), 1400000, 'Test 82');
test(maxValueAfterReverse([-100000, -100000, -100000, -100000, -100000, -100000, -100000, -100000, -100000, -100000]), 0, 'Test 83');
test(maxValueAfterReverse([-100000, -99999, -99998, -99997, -99996, -99995, -99994, -99993, -99992, -99991]), 23, 'Test 84');
test(maxValueAfterReverse([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 36, 'Test 85');
test(maxValueAfterReverse([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), 236, 'Test 86');
test(maxValueAfterReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 32, 'Test 87');
test(maxValueAfterReverse([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 49, 'Test 88');
test(maxValueAfterReverse([1, 2, 3, 4, 5, 10000, 6, 7, 8, 9, 10]), 20011, 'Test 89');
test(maxValueAfterReverse([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 90');
test(maxValueAfterReverse([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 230, 'Test 91');
test(maxValueAfterReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 53, 'Test 92');
test(maxValueAfterReverse([100, -100, 200, -200, 300, -300, 400, -400, 500, -500]), 5800, 'Test 93');
test(maxValueAfterReverse([1, 200000, 3, 400000, 5, 600000, 7, 800000, 9, 1000000]), 5799951, 'Test 94');
test(maxValueAfterReverse([1000, 2000, 3000, 4000, 5000, 4000, 3000, 2000, 1000]), 12000, 'Test 95');
test(maxValueAfterReverse([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 31, 'Test 96');
test(maxValueAfterReverse([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 859, 'Test 97');
test(maxValueAfterReverse([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9]), 48, 'Test 98');
test(maxValueAfterReverse([5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5]), 140, 'Test 99');

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
