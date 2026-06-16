// Test: 1043. Partition Array For Maximum Sum
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { maxSumAfterPartitioning } = require("./solution");

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

console.log("\n1043. Partition Array For Maximum Sum\n");

test(maxSumAfterPartitioning([1], 1), 1, 'Test 1');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9], 1), 45, 'Test 2');
test(maxSumAfterPartitioning([1,15,7,9,2,5,10], 3), 84, 'Test 3');
test(maxSumAfterPartitioning([10,20,30,40,50], 3), 190, 'Test 4');
test(maxSumAfterPartitioning([9,1,2,3,9], 3), 45, 'Test 5');
test(maxSumAfterPartitioning([10,9,8,7,6,5,4,3,2,1], 1), 55, 'Test 6');
test(maxSumAfterPartitioning([2,3,5,10,15,20], 2), 66, 'Test 7');
test(maxSumAfterPartitioning([3,2,1,4,7,8,5,6,9], 3), 62, 'Test 8');
test(maxSumAfterPartitioning([5,4,3,2,1], 1), 15, 'Test 9');
test(maxSumAfterPartitioning([2,3,4,5,6,7,8,9,10], 2), 58, 'Test 10');
test(maxSumAfterPartitioning([5,5,5,5,5,5,5,5,5,5], 5), 50, 'Test 11');
test(maxSumAfterPartitioning([9,8,7,6,5,4,3,2,1], 3), 54, 'Test 12');
test(maxSumAfterPartitioning([5,5,5,5,5], 5), 25, 'Test 13');
test(maxSumAfterPartitioning([5,4,3,2,1], 5), 25, 'Test 14');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10], 2), 60, 'Test 15');
test(maxSumAfterPartitioning([1,1,1,1,1,1,1,1,1,1], 2), 10, 'Test 16');
test(maxSumAfterPartitioning([10,9,8,7,6,5,4,3,2,1], 5), 75, 'Test 17');
test(maxSumAfterPartitioning([1,2,3,4,5], 3), 19, 'Test 18');
test(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 4), 83, 'Test 19');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10], 10), 100, 'Test 20');
test(maxSumAfterPartitioning([10,10,10,10,10,10,10,10,10], 9), 90, 'Test 21');
test(maxSumAfterPartitioning([2,3,1,2,4,3], 2), 19, 'Test 22');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10], 5), 75, 'Test 23');
test(maxSumAfterPartitioning([4,3,2,5,6], 2), 24, 'Test 24');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0], 6), 143, 'Test 25');
test(maxSumAfterPartitioning([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 75, 'Test 26');
test(maxSumAfterPartitioning([1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9], 8), 180, 'Test 27');
test(maxSumAfterPartitioning([8,5,4,2,1,9,3,7,6,10,11,13,12,14,15,17,16,18,19,20,22,21,23,24,26,25,27,28,30,29,31,32,33,35,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], 6), 2007, 'Test 28');
test(maxSumAfterPartitioning([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 7), 1422, 'Test 29');
test(maxSumAfterPartitioning([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 3), 229, 'Test 30');
test(maxSumAfterPartitioning([100,200,300,400,500,600,700,800,900,1000], 5), 7500, 'Test 31');
test(maxSumAfterPartitioning([9,1,5,7,3,6,4,8,2,10], 2), 80, 'Test 32');
test(maxSumAfterPartitioning([7,1,5,3,6,4,2,9,8,11,10,12], 6), 118, 'Test 33');
test(maxSumAfterPartitioning([8, 7, 6, 5, 4, 3, 2, 1], 5), 49, 'Test 34');
test(maxSumAfterPartitioning([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 20, 'Test 35');
test(maxSumAfterPartitioning([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 55, 'Test 36');
test(maxSumAfterPartitioning([9,1,2,3,9,1,2,3,9,1,2,3,9], 4), 117, 'Test 37');
test(maxSumAfterPartitioning([5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1], 2), 58, 'Test 38');
test(maxSumAfterPartitioning([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 20, 'Test 39');
test(maxSumAfterPartitioning([7,3,6,1,4,9,2,8,5,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50], 7), 835, 'Test 40');
test(maxSumAfterPartitioning([5,1,1,5,2,2,2,2,2,5], 4), 50, 'Test 41');
test(maxSumAfterPartitioning([9,1,2,3,9,3,2,4,5,6], 3), 75, 'Test 42');
test(maxSumAfterPartitioning([5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1,4,1,5,1], 3), 334, 'Test 43');
test(maxSumAfterPartitioning([100,200,300,400,500,600,700,800,900], 7), 6700, 'Test 44');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 5), 139, 'Test 45');
test(maxSumAfterPartitioning([40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2], 3), 458, 'Test 46');
test(maxSumAfterPartitioning([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 1), 2000, 'Test 47');
test(maxSumAfterPartitioning([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4), 240, 'Test 48');
test(maxSumAfterPartitioning([50,40,30,20,10,1,2,3,4,5,6,7,8,9,10], 7), 423, 'Test 49');
test(maxSumAfterPartitioning([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 25), 300, 'Test 50');
test(maxSumAfterPartitioning([1000000000, 999999999, 888888888, 777777777, 666666666], 2), 4555555552, 'Test 51');
test(maxSumAfterPartitioning([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 150, 'Test 52');
test(maxSumAfterPartitioning([100,101,102,103,104,105,106,107,108,109], 2), 1050, 'Test 53');
test(maxSumAfterPartitioning([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 160, 'Test 54');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 5), 1375, 'Test 55');
test(maxSumAfterPartitioning([100,1,200,2,300,3,400,4,500,5,600,6], 3), 4800, 'Test 56');
test(maxSumAfterPartitioning([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 2), 1270, 'Test 57');
test(maxSumAfterPartitioning([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 15, 'Test 58');
test(maxSumAfterPartitioning([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9], 15), 900, 'Test 59');
test(maxSumAfterPartitioning([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 4), 20, 'Test 60');
test(maxSumAfterPartitioning([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), 150, 'Test 61');
test(maxSumAfterPartitioning([5,3,7,9,2,6,1,8,4,10,11,12,13,14,15], 5), 170, 'Test 62');
test(maxSumAfterPartitioning([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991], 10), 10000000000, 'Test 63');
test(maxSumAfterPartitioning([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 2), 480, 'Test 64');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), 120, 'Test 65');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 300, 'Test 66');
test(maxSumAfterPartitioning([9, 1, 2, 3, 9, 1, 4, 5, 1, 6, 7, 8, 1, 9], 4), 122, 'Test 67');
test(maxSumAfterPartitioning([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 130, 'Test 68');
test(maxSumAfterPartitioning([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9], 7), 881, 'Test 69');
test(maxSumAfterPartitioning([5,5,5,5,5,5,5,5,5,5], 2), 50, 'Test 70');
test(maxSumAfterPartitioning([8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1], 4), 192, 'Test 71');
test(maxSumAfterPartitioning([5, 1, 100, 1, 1, 100, 1, 1, 100, 1, 1], 3), 910, 'Test 72');
test(maxSumAfterPartitioning([5,4,3,2,1], 4), 21, 'Test 73');
test(maxSumAfterPartitioning([10,9,8,7,6,5,4,3,2,1], 4), 68, 'Test 74');
test(maxSumAfterPartitioning([9,8,7,6,5,4,3,2,1,0], 3), 54, 'Test 75');
test(maxSumAfterPartitioning([5,2,7,1,8,3,6,4,9,10,11,12,13,14,15], 8), 176, 'Test 76');
test(maxSumAfterPartitioning([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 20, 'Test 77');
test(maxSumAfterPartitioning([9,8,7,6,5,4,3,2,1], 2), 49, 'Test 78');
test(maxSumAfterPartitioning([10,20,10,20,10,20,10,20,10,20], 2), 200, 'Test 79');
test(maxSumAfterPartitioning([1,3,2,5,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 300, 'Test 80');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 675, 'Test 81');
test(maxSumAfterPartitioning([9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,11,10,9,8,7,6,5,4,3,2,1,12,11,10,9,8,7,6,5,4,3,2,1,13,12,11,10,9,8,7,6,5,4,3,2,1], 4), 502, 'Test 82');
test(maxSumAfterPartitioning([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 162, 'Test 83');
test(maxSumAfterPartitioning([100,200,300,400,500,600,700,800,900,1000], 10), 10000, 'Test 84');
test(maxSumAfterPartitioning([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59], 15), 1320, 'Test 85');
test(maxSumAfterPartitioning([10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 10), 150, 'Test 86');
test(maxSumAfterPartitioning([10,20,30,40,50,60,70,80,90,100], 5), 750, 'Test 87');
test(maxSumAfterPartitioning([15,25,35,45,55,65,75,85,95,105,115,125,135,145,150], 6), 1590, 'Test 88');
test(maxSumAfterPartitioning([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 4), 480, 'Test 89');
test(maxSumAfterPartitioning([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 2), 90, 'Test 90');
test(maxSumAfterPartitioning([5, 1, 3, 4, 6, 2, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19, 22, 21, 24, 23, 26, 25, 28, 27, 30, 29], 6), 563, 'Test 91');
test(maxSumAfterPartitioning([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 250, 'Test 92');
test(maxSumAfterPartitioning([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 25), 300, 'Test 93');
test(maxSumAfterPartitioning([5,6,1,2,8,7,3,4,5,6,7,8,9], 5), 106, 'Test 94');
test(maxSumAfterPartitioning([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5), 200, 'Test 95');
test(maxSumAfterPartitioning([1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9], 2), 180, 'Test 96');
test(maxSumAfterPartitioning([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 2), 420, 'Test 97');
test(maxSumAfterPartitioning([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), 175, 'Test 98');
test(maxSumAfterPartitioning([5,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4), 147, 'Test 99');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 250, 'Test 100');
test(maxSumAfterPartitioning([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 111, 'Test 101');
test(maxSumAfterPartitioning([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), 135, 'Test 102');
test(maxSumAfterPartitioning([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 3), 229, 'Test 103');
test(maxSumAfterPartitioning([1,2,3,4,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5], 3), 89, 'Test 104');

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
