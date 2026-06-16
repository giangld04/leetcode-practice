// Test: 3282. Reach End Of Array With Max Score
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { findMaximumScore } = require("./solution");

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

console.log("\n3282. Reach End Of Array With Max Score\n");

test(findMaximumScore([2,3,5,6,7,8]), 23, 'Test 1');
test(findMaximumScore([10,9,8,7,6,5,4,3,2,1]), 90, 'Test 2');
test(findMaximumScore([2,4,6,8,10]), 20, 'Test 3');
test(findMaximumScore([4,3,1,3,2]), 16, 'Test 4');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10]), 45, 'Test 5');
test(findMaximumScore([2,1,4,5,3]), 13, 'Test 6');
test(findMaximumScore([1,3,1,5]), 7, 'Test 7');
test(findMaximumScore([10,20,30,40,50]), 100, 'Test 8');
test(findMaximumScore([5,5,5,5,5]), 20, 'Test 9');
test(findMaximumScore([5,6,7,8,9]), 26, 'Test 10');
test(findMaximumScore([100000, 1, 100000, 1, 100000]), 400000, 'Test 11');
test(findMaximumScore([1,1,1,1,1,1,1]), 6, 'Test 12');
test(findMaximumScore([10,9,8,7,6]), 40, 'Test 13');
test(findMaximumScore([1,2,3,4,5]), 10, 'Test 14');
test(findMaximumScore([1,1,1,1,1,1,1,1,1,1]), 9, 'Test 15');
test(findMaximumScore([1,1,1,1,1]), 4, 'Test 16');
test(findMaximumScore([2,3,6,1,5]), 17, 'Test 17');
test(findMaximumScore([5,4,3,2,1]), 20, 'Test 18');
test(findMaximumScore([10,10,10,10,10]), 40, 'Test 19');
test(findMaximumScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 511, 'Test 20');
test(findMaximumScore([1, 10, 100, 1000, 10000, 100000, 1, 1, 1, 1]), 411111, 'Test 21');
test(findMaximumScore([1,5,3,7,9,2,4,8,6,10,1,3,5,7,9,2,4,6,8,10]), 163, 'Test 22');
test(findMaximumScore([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 380, 'Test 23');
test(findMaximumScore([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 380, 'Test 24');
test(findMaximumScore([10,1,2,3,4,5,6,7,8,9,10]), 100, 'Test 25');
test(findMaximumScore([9, 8, 7, 6, 5, 4, 3, 2, 1]), 72, 'Test 26');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,1]), 595, 'Test 27');
test(findMaximumScore([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 210, 'Test 28');
test(findMaximumScore([50, 40, 30, 20, 10, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 875, 'Test 29');
test(findMaximumScore([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 19, 'Test 30');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 135, 'Test 31');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 435, 'Test 32');
test(findMaximumScore([100000,100000,100000,100000,100000]), 400000, 'Test 33');
test(findMaximumScore([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 870, 'Test 34');
test(findMaximumScore([100,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1900, 'Test 35');
test(findMaximumScore([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 180, 'Test 36');
test(findMaximumScore([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]), 88, 'Test 37');
test(findMaximumScore([1,10,2,9,3,8,4,7,5,6,1,1,1,1,1,1,1,1,1]), 171, 'Test 38');
test(findMaximumScore([9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1]), 171, 'Test 39');
test(findMaximumScore([1, 100, 1, 100, 1, 100, 1]), 501, 'Test 40');
test(findMaximumScore([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 100, 'Test 41');
test(findMaximumScore([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 900000, 'Test 42');
test(findMaximumScore([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 196, 'Test 43');
test(findMaximumScore([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10]), 19, 'Test 44');
test(findMaximumScore([5,10,15,20,25,30,35,40,45,50,1,2,3,4,5,6,7,8,9,10]), 725, 'Test 45');
test(findMaximumScore([9,8,7,6,5,4,3,2,1,10]), 81, 'Test 46');
test(findMaximumScore([10, 1, 1, 1, 1, 1, 10]), 60, 'Test 47');
test(findMaximumScore([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 81, 'Test 48');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11]), 235, 'Test 49');
test(findMaximumScore([9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 171, 'Test 50');
test(findMaximumScore([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 190, 'Test 51');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 190, 'Test 52');
test(findMaximumScore([2, 3, 5, 1, 4, 6, 2, 3, 1]), 38, 'Test 53');
test(findMaximumScore([50, 25, 12, 6, 3, 1, 1, 1, 1, 1]), 450, 'Test 54');
test(findMaximumScore([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 891, 'Test 55');
test(findMaximumScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 435, 'Test 56');
test(findMaximumScore([1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5, 1, 2, 5]), 63, 'Test 57');
test(findMaximumScore([1,2,3,10,5,1,2,3,4,1]), 66, 'Test 58');
test(findMaximumScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000]), 9, 'Test 59');
test(findMaximumScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 95, 'Test 60');
test(findMaximumScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1000]), 95, 'Test 61');
test(findMaximumScore([10,10,10,10,10,10,10,10,10,10]), 90, 'Test 62');
test(findMaximumScore([100, 50, 25, 12, 6, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1900, 'Test 63');
test(findMaximumScore([10,20,30,40,50,60,70,80,90,100]), 450, 'Test 64');
test(findMaximumScore([1,100,1,1,1,100,1,1,1,1]), 801, 'Test 65');
test(findMaximumScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25]), 475, 'Test 66');
test(findMaximumScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 105, 'Test 67');
test(findMaximumScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 45, 'Test 68');
test(findMaximumScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]), 3000, 'Test 69');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,100]), 210, 'Test 70');
test(findMaximumScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), 14, 'Test 71');
test(findMaximumScore([1,3,5,7,9,11,13,15,17,19,21,23,25]), 144, 'Test 72');
test(findMaximumScore([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10]), 29, 'Test 73');
test(findMaximumScore([5, 3, 9, 2, 8, 6, 1, 7, 4, 10]), 73, 'Test 74');
test(findMaximumScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 190, 'Test 75');
test(findMaximumScore([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 60, 'Test 76');
test(findMaximumScore([25,23,21,19,17,15,13,11,9,7,5,3,1]), 300, 'Test 77');
test(findMaximumScore([100, 10, 20, 30, 40, 50, 60, 70, 80, 90]), 900, 'Test 78');
test(findMaximumScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 79');
test(findMaximumScore([100,90,80,70,60,50,40,30,20,10]), 900, 'Test 80');
test(findMaximumScore([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 145, 'Test 81');
test(findMaximumScore([1,100,2,99,3,98,4,97,5,96]), 801, 'Test 82');
test(findMaximumScore([10, 20, 30, 40, 50, 40, 30, 20, 10, 5]), 350, 'Test 83');
test(findMaximumScore([29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 406, 'Test 84');
test(findMaximumScore([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 950, 'Test 85');
test(findMaximumScore([1, 5, 3, 4, 2, 6, 8, 7, 9, 10]), 52, 'Test 86');
test(findMaximumScore([100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 900, 'Test 87');
test(findMaximumScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 361, 'Test 88');
test(findMaximumScore([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 181, 'Test 89');
test(findMaximumScore([1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 801, 'Test 90');
test(findMaximumScore([1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5]), 91, 'Test 91');
test(findMaximumScore([10,1,1,1,1,1,1,1,1,10]), 90, 'Test 92');
test(findMaximumScore([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 37, 'Test 93');
test(findMaximumScore([100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 2000, 'Test 94');
test(findMaximumScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 450, 'Test 95');
test(findMaximumScore([3, 5, 7, 9, 2, 4, 6, 8, 10, 1]), 70, 'Test 96');
test(findMaximumScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 70, 'Test 97');
test(findMaximumScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), 19, 'Test 98');
test(findMaximumScore([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 70, 'Test 99');

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
