// Test: 3218. Minimum Cost For Cutting Cake I
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n3218. Minimum Cost For Cutting Cake I\n");

test(minimumCost(5, 4, [1,2,3,4], [2,4,6]), 49, 'Test 1');
test(minimumCost(4, 3, [2,5,7], [3,8]), 47, 'Test 2');
test(minimumCost(5, 4, [1,3,4], [2,5,6]), Error: list index out of range, 'Test 3');
test(minimumCost(2, 2, [7], [4]), 15, 'Test 4');
test(minimumCost(4, 3, [1,2,3], [1,2]), 17, 'Test 5');
test(minimumCost(5, 4, [1,4,6,8], [2,3,5]), 61, 'Test 6');
test(minimumCost(6, 5, [1,3,5,7,9], [2,4,6,8]), 115, 'Test 7');
test(minimumCost(3, 3, [1,2], [1,2]), 11, 'Test 8');
test(minimumCost(5, 4, [1,2,3,4], [1,2,3]), 36, 'Test 9');
test(minimumCost(5, 4, [1,3,6,9], [2,4,7]), 68, 'Test 10');
test(minimumCost(3, 2, [1,3], [5]), 13, 'Test 11');
test(minimumCost(4, 3, [2,5,7], [1,6]), 37, 'Test 12');
test(minimumCost(4, 3, [2,4,6], [1,3]), 27, 'Test 13');
test(minimumCost(16, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [2, 4, 6, 8, 10]), Error: list index out of range, 'Test 14');
test(minimumCost(12, 9, [2, 5, 8, 11, 14, 17, 20, 23, 26, 29], [1, 3, 5, 7, 9, 11, 13, 15, 17]), Error: list index out of range, 'Test 15');
test(minimumCost(18, 16, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 2598, 'Test 16');
test(minimumCost(15, 12, [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], [3,6,9,12,15,18,21,24,27,30,33,36]), 3763, 'Test 17');
test(minimumCost(10, 10, [3, 6, 9, 12, 15, 18, 21, 24, 27], [2, 5, 8, 11, 14, 17, 20, 23, 26]), 1071, 'Test 18');
test(minimumCost(17, 11, [2,4,6,8,10,12,14,16], [1,3,5,7,9,11]), Error: list index out of range, 'Test 19');
test(minimumCost(9, 14, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]), Error: list index out of range, 'Test 20');
test(minimumCost(7, 6, [1,3,5,7,9,11], [2,4,6,8,10]), 191, 'Test 21');
test(minimumCost(18, 10, [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 52, 56, 60, 64], [2, 4, 6, 8, 10, 12, 14, 16, 18]), Error: list index out of range, 'Test 22');
test(minimumCost(18, 5, [2, 4, 6, 8, 10, 12, 14, 16], [1, 3, 5]), Error: list index out of range, 'Test 23');
test(minimumCost(10, 8, [3,6,9,12,15,18,21,24,27], [2,5,8,11,14,17,20,23]), 891, 'Test 24');
test(minimumCost(8, 8, [1, 3, 5, 7, 9, 11, 13, 15], [1, 3, 5, 7, 9, 11, 13, 15]), 455, 'Test 25');
test(minimumCost(15, 10, [5,10,12,14,15], [2,4,6,8,10]), Error: list index out of range, 'Test 26');
test(minimumCost(10, 5, [10, 20, 30, 40, 50, 60, 70, 80, 90], [5, 15, 25, 35, 45]), 1500, 'Test 27');
test(minimumCost(18, 16, [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]), 5983, 'Test 28');
test(minimumCost(20, 15, [2,4,6,8,10,12,14,16,18,20], [1,3,5,7,9,11,13,15,17]), Error: list index out of range, 'Test 29');
test(minimumCost(12, 8, [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72], [4, 8, 12, 16, 20, 24, 28, 32]), 2036, 'Test 30');
test(minimumCost(12, 10, [4,8,12,16,20,24,28,32,36,40,44,48], [2,6,10,14,18,20,24,28,32,36]), 2216, 'Test 31');
test(minimumCost(12, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [3, 6, 9]), Error: list index out of range, 'Test 32');
test(minimumCost(18, 12, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), 3045, 'Test 33');
test(minimumCost(12, 10, [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 1523, 'Test 34');
test(minimumCost(12, 12, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]), 1199, 'Test 35');
test(minimumCost(15, 10, [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], [3,6,9,12,15,18,21,24,27,30]), 2874, 'Test 36');
test(minimumCost(10, 8, [10, 20, 30, 40, 50, 60, 70, 80, 90], [15, 30, 45, 60, 75]), Error: list index out of range, 'Test 37');
test(minimumCost(8, 6, [1,3,5,7,9,11], [2,4,6,8,10]), Error: list index out of range, 'Test 38');
test(minimumCost(16, 20, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]), 4240, 'Test 39');
test(minimumCost(10, 6, [1,3,5,7,8,9], [2,4,5,7,8]), Error: list index out of range, 'Test 40');
test(minimumCost(12, 9, [1,3,4,6,8,10], [2,4,5,7,8]), Error: list index out of range, 'Test 41');
test(minimumCost(12, 10, [7, 14, 21, 28, 35, 42, 49, 56, 63, 69], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), Error: list index out of range, 'Test 42');
test(minimumCost(20, 20, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 6289, 'Test 43');
test(minimumCost(15, 7, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27], [2, 4, 6]), Error: list index out of range, 'Test 44');
test(minimumCost(7, 5, [1,2,4,6], [3,5,7,8]), Error: list index out of range, 'Test 45');
test(minimumCost(10, 8, [10, 20, 30, 40, 50, 60, 70, 80, 90], [5, 15, 25, 35, 45, 55, 65, 75]), 2900, 'Test 46');
test(minimumCost(6, 6, [2, 4, 6, 8, 10, 12], [1, 3, 5, 7, 9, 11]), 220, 'Test 47');
test(minimumCost(6, 9, [2, 5, 8, 11], [1, 3, 5, 7, 9, 11, 13, 15, 17]), Error: list index out of range, 'Test 48');
test(minimumCost(10, 8, [10, 20, 30, 40, 50, 60, 70, 80], [5, 10, 15, 20, 25, 30, 35]), Error: list index out of range, 'Test 49');
test(minimumCost(14, 6, [1, 3, 5, 7, 9, 11, 12, 13], [1, 3, 5]), Error: list index out of range, 'Test 50');
test(minimumCost(8, 7, [2,4,6,8,10,12,14], [1,3,5,7,9,11]), 289, 'Test 51');
test(minimumCost(10, 8, [3, 6, 9, 12, 15, 18, 21, 24, 27], [2, 4, 6, 8, 10, 12, 14, 16]), 733, 'Test 52');
test(minimumCost(8, 7, [1,3,4,5,6,7], [2,3,5,6,8]), Error: list index out of range, 'Test 53');
test(minimumCost(19, 14, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 1536, 'Test 54');
test(minimumCost(11, 12, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), 1652, 'Test 55');
test(minimumCost(19, 13, [1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12]), Error: list index out of range, 'Test 56');
test(minimumCost(9, 7, [2,4,6,8,10,12,14,16], [1,3,5,7,9,11,13]), 413, 'Test 57');
test(minimumCost(18, 12, [1,3,5,7,9,11,13,15,17], [2,4,6,8,10,12]), Error: list index out of range, 'Test 58');
test(minimumCost(20, 18, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [1, 3, 5, 7, 9, 11, 13, 15, 17]), Error: list index out of range, 'Test 59');
test(minimumCost(10, 10, [2, 4, 6, 8, 10, 12, 14, 16, 18], [3, 6, 9, 12, 15, 18, 21, 24, 27]), 888, 'Test 60');
test(minimumCost(8, 7, [7, 14, 21, 28, 35, 42, 49, 56], [5, 10, 15, 20, 25, 30, 35]), 1234, 'Test 61');
test(minimumCost(16, 6, [2, 4, 6, 8, 10, 12, 14, 18, 20, 22, 24, 26, 28, 30, 32], [1, 3, 5]), Error: list index out of range, 'Test 62');
test(minimumCost(20, 20, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 2850, 'Test 63');
test(minimumCost(10, 8, [5, 10, 15, 20, 25, 30, 35, 40, 45], [2, 4, 6, 8]), Error: list index out of range, 'Test 64');
test(minimumCost(10, 8, [5,10,15,20,25,30,35,40], [3,6,9,12,15,18,21]), Error: list index out of range, 'Test 65');
test(minimumCost(15, 10, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 865, 'Test 66');
test(minimumCost(11, 6, [1, 3, 5, 7, 9], [1, 2, 3, 4, 5]), Error: list index out of range, 'Test 67');
test(minimumCost(18, 15, [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90], [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45]), 6621, 'Test 68');
test(minimumCost(15, 15, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 2674, 'Test 69');
test(minimumCost(16, 14, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65]), 7675, 'Test 70');
test(minimumCost(20, 20, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 6099, 'Test 71');
test(minimumCost(7, 10, [3, 6, 9, 12, 15, 18, 21], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 714, 'Test 72');
test(minimumCost(20, 15, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]), 16810, 'Test 73');
test(minimumCost(16, 14, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13]), 1212, 'Test 74');
test(minimumCost(20, 15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 1835, 'Test 75');
test(minimumCost(15, 15, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]), 6125, 'Test 76');
test(minimumCost(15, 10, [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145], [10, 20, 30, 40, 50, 60, 70, 80, 90]), 6850, 'Test 77');
test(minimumCost(15, 12, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), 2267, 'Test 78');
test(minimumCost(6, 5, [7,14,21,28,35], [4,8,12,16,20]), 405, 'Test 79');
test(minimumCost(15, 12, [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39]), 4578, 'Test 80');
test(minimumCost(12, 9, [1,2,3,4,5,6,7,8,9,10,11], [1,2,3,4,5,6,7,8]), 414, 'Test 81');
test(minimumCost(7, 5, [2,4,6,8,10], [1,3,5,7]), Error: list index out of range, 'Test 82');
test(minimumCost(8, 6, [3, 6, 9, 12, 15, 21], [2, 4, 6, 8, 10]), Error: list index out of range, 'Test 83');
test(minimumCost(7, 9, [3, 6, 9, 12, 15, 18], [2, 4, 6, 8, 10, 12, 14, 16]), 465, 'Test 84');
test(minimumCost(16, 16, [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48], [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47]), 5070, 'Test 85');

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
