// Test: 2006. Count Number Of Pairs With Absolute Difference K
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { countKDifference } = require("./solution");

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

console.log("\n2006. Count Number Of Pairs With Absolute Difference K\n");

test(countKDifference([100,1,100,1,100], 99), 6, 'Test 1');
test(countKDifference([5,4,3,2,1], 4), 1, 'Test 2');
test(countKDifference([1,1,1,1], 0), 6, 'Test 3');
test(countKDifference([5,5,5,5], 0), 6, 'Test 4');
test(countKDifference([3,2,1,5,4], 2), 3, 'Test 5');
test(countKDifference([5,1,4,1], 2), 0, 'Test 6');
test(countKDifference([1,3], 3), 0, 'Test 7');
test(countKDifference([10,20,30,40,50], 20), 3, 'Test 8');
test(countKDifference([1,2,3,4,5], 1), 4, 'Test 9');
test(countKDifference([1,2,2,1], 1), 4, 'Test 10');
test(countKDifference([100,1,100,1], 99), 4, 'Test 11');
test(countKDifference([20, 30, 40, 50, 60, 70, 80, 90, 100, 110], 10), 9, 'Test 12');
test(countKDifference([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 4), 32, 'Test 13');
test(countKDifference([1, 10, 19, 28, 37, 46, 55, 64, 73, 82], 9), 9, 'Test 14');
test(countKDifference([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93], 99), 1, 'Test 15');
test(countKDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86], 1), 14, 'Test 16');
test(countKDifference([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], 4), 10, 'Test 17');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 20, 'Test 18');
test(countKDifference([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 3, 6, 9, 12, 15], 3), 22, 'Test 19');
test(countKDifference([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 1), 40, 'Test 20');
test(countKDifference([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57], 4), 14, 'Test 21');
test(countKDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50], 30), 16, 'Test 22');
test(countKDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), 36, 'Test 23');
test(countKDifference([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 43], 1), 10, 'Test 24');
test(countKDifference([10, 20, 30, 40, 50], 10), 4, 'Test 25');
test(countKDifference([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 8), 6, 'Test 26');
test(countKDifference([10, 20, 30, 40, 50, 10, 20, 30, 40, 50], 10), 16, 'Test 27');
test(countKDifference([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 5, 15, 25, 35, 45], 10), 22, 'Test 28');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5], 4), 13, 'Test 29');
test(countKDifference([55, 45, 35, 25, 15, 5, 5, 15, 25, 35, 45], 10), 18, 'Test 30');
test(countKDifference([99, 100, 1, 98, 2, 97, 3, 96, 4, 95, 5, 94], 1), 10, 'Test 31');
test(countKDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 2), 19, 'Test 32');
test(countKDifference([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 0), 45, 'Test 33');
test(countKDifference([1, 3, 5, 7, 9, 11, 13, 15], 2), 7, 'Test 34');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 9, 'Test 35');
test(countKDifference([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0), 105, 'Test 36');
test(countKDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 9, 'Test 37');
test(countKDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 9), 1, 'Test 38');
test(countKDifference([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 1), 9, 'Test 39');
test(countKDifference([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 0), 1225, 'Test 40');
test(countKDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 1), 10, 'Test 41');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 3), 17, 'Test 42');
test(countKDifference([99, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93, 8, 92, 9], 97), 1, 'Test 43');
test(countKDifference([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 45, 'Test 44');
test(countKDifference([55, 45, 35, 25, 15, 5, 105, 115, 125], 10), 7, 'Test 45');
test(countKDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 10), 14, 'Test 46');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 14, 'Test 47');
test(countKDifference([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80], 9), 26, 'Test 48');
test(countKDifference([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 0), 45, 'Test 49');
test(countKDifference([10, 20, 30, 40, 50, 10, 20, 30], 10), 11, 'Test 50');
test(countKDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 1), 9, 'Test 51');
test(countKDifference([50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 53, 53, 53, 53, 53, 54, 54, 54, 54, 54, 55, 55, 55, 55, 55], 1), 125, 'Test 52');
test(countKDifference([1, 10, 100, 1000, 10000, 100000], 99), 1, 'Test 53');
test(countKDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 2), 14, 'Test 54');
test(countKDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20), 32, 'Test 55');
test(countKDifference([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85], 2), 13, 'Test 56');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 15, 'Test 57');
test(countKDifference([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 2), 12, 'Test 58');
test(countKDifference([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 2), 19, 'Test 59');
test(countKDifference([10, 10, 10, 10, 11, 11, 12, 12, 13], 1), 14, 'Test 60');
test(countKDifference([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33], 3), 10, 'Test 61');
test(countKDifference([10, 20, 30, 20, 10, 30, 20, 10, 30], 10), 18, 'Test 62');
test(countKDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 2), 32, 'Test 63');
test(countKDifference([90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40], 5), 10, 'Test 64');
test(countKDifference([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50], 10), 10, 'Test 65');
test(countKDifference([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 2), 14, 'Test 66');
test(countKDifference([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85], 3), 12, 'Test 67');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 19, 'Test 68');
test(countKDifference([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 10), 9, 'Test 69');
test(countKDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49], 2), 24, 'Test 70');
test(countKDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 1), 16, 'Test 71');
test(countKDifference([9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 9], 10), 10, 'Test 72');
test(countKDifference([10, 12, 15, 7, 5, 3, 10, 15], 5), 7, 'Test 73');
test(countKDifference([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 10), 10, 'Test 74');
test(countKDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81], 9), 11, 'Test 75');
test(countKDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 9, 'Test 76');
test(countKDifference([10, 10, 20, 20, 30, 30], 10), 8, 'Test 77');
test(countKDifference([3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79], 4), 19, 'Test 78');
test(countKDifference([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 10), 9, 'Test 79');
test(countKDifference([100, 1, 100, 2, 100, 3, 100, 4, 100, 5], 99), 5, 'Test 80');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 5, 'Test 81');
test(countKDifference([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97], 4), 24, 'Test 82');
test(countKDifference([8, 18, 28, 38, 48, 58, 68, 78, 88, 98], 10), 9, 'Test 83');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 36, 'Test 84');
test(countKDifference([50, 60, 70, 80, 90, 50, 60, 70, 80, 90, 50, 60], 20), 16, 'Test 85');
test(countKDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50], 1), 50, 'Test 86');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 1), 29, 'Test 87');
test(countKDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9], 1), 32, 'Test 88');
test(countKDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 2), 10, 'Test 89');
test(countKDifference([42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 0), 45, 'Test 90');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2), 13, 'Test 91');
test(countKDifference([50, 50, 50, 51, 51, 52, 52, 52, 53, 53], 1), 18, 'Test 92');
test(countKDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 4), 13, 'Test 93');
test(countKDifference([5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15], 5), 50, 'Test 94');
test(countKDifference([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 3), 8, 'Test 95');
test(countKDifference([42, 42, 42, 42, 42, 42, 42], 0), 21, 'Test 96');
test(countKDifference([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0), 2850, 'Test 97');
test(countKDifference([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5), 6, 'Test 98');
test(countKDifference([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91], 9), 10, 'Test 99');
test(countKDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 10), 19, 'Test 100');
test(countKDifference([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1), 0, 'Test 101');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9), 1, 'Test 102');
test(countKDifference([1, 10, 100, 1000, 10000, 10, 100, 1000], 999), 2, 'Test 103');
test(countKDifference([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98], 7), 13, 'Test 104');
test(countKDifference([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100], 9), 11, 'Test 105');
test(countKDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 60, 'Test 106');

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
