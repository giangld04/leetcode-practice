// Test: 3471. Find The Largest Almost Missing Integer
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { largestInteger } = require("./solution");

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

console.log("\n3471. Find The Largest Almost Missing Integer\n");

test(largestInteger([2,2,3,3,4,4,5,5], 2), -1, 'Test 1');
test(largestInteger([1,2,3,4,5,6,7,8,9,10], 10), 10, 'Test 2');
test(largestInteger([1,2,3,4,5,6,7,8,9,10], 5), 10, 'Test 3');
test(largestInteger([1,2,3,4,5], 2), 5, 'Test 4');
test(largestInteger([5,5,5,5,5,5,5,5,5,5], 3), -1, 'Test 5');
test(largestInteger([1,2,2,3,3,3,4,4,4,4], 4), 1, 'Test 6');
test(largestInteger([10,20,30,40,50], 5), 50, 'Test 7');
test(largestInteger([5,5,5,5,5], 3), -1, 'Test 8');
test(largestInteger([10,20,30,40,50], 2), 50, 'Test 9');
test(largestInteger([1,3,5,7,9,11,13,15,17,19], 4), 19, 'Test 10');
test(largestInteger([1,3,1,3,1,3], 3), -1, 'Test 11');
test(largestInteger([42,42,42,42,42,42,42], 7), 42, 'Test 12');
test(largestInteger([1,2,3,2,1,2,3,2,1], 3), -1, 'Test 13');
test(largestInteger([42], 1), 42, 'Test 14');
test(largestInteger([1,3,5,7,9,11,13,15,17,19], 1), 19, 'Test 15');
test(largestInteger([1,1,1,1,1], 1), -1, 'Test 16');
test(largestInteger([3,9,7,2,1,7], 4), 3, 'Test 17');
test(largestInteger([1,3,5,7,9,11,13,15,17,19], 10), 19, 'Test 18');
test(largestInteger([3,9,2,1,7], 3), 7, 'Test 19');
test(largestInteger([1,1,2,2,3,3], 2), -1, 'Test 20');
test(largestInteger([0,0], 1), -1, 'Test 21');
test(largestInteger([1,2,3,4,5], 1), 5, 'Test 22');
test(largestInteger([1,1,2,2,3,3,4,4,5,5], 2), -1, 'Test 23');
test(largestInteger([5,4,3,2,1], 3), 5, 'Test 24');
test(largestInteger([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), -1, 'Test 25');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4), 15, 'Test 26');
test(largestInteger([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 4), -1, 'Test 27');
test(largestInteger([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 7), 20, 'Test 28');
test(largestInteger([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 10), 25, 'Test 29');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19), 20, 'Test 30');
test(largestInteger([7, 6, 5, 7, 5, 6, 7, 6, 5, 7, 5, 6, 7], 7), -1, 'Test 31');
test(largestInteger([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 6), 105, 'Test 32');
test(largestInteger([15, 25, 15, 30, 25, 30, 15, 25, 30, 15, 25, 30], 5), -1, 'Test 33');
test(largestInteger([10, 10, 10, 20, 20, 20, 30, 30, 30], 2), -1, 'Test 34');
test(largestInteger([7,7,7,8,8,8,9,9,9,10,10,10], 3), -1, 'Test 35');
test(largestInteger([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), -1, 'Test 36');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5), 12, 'Test 37');
test(largestInteger([8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10], 5), -1, 'Test 38');
test(largestInteger([10, 20, 30, 40, 50, 60, 70, 80, 90], 4), 90, 'Test 39');
test(largestInteger([50,40,30,20,10,5,15,25,35,45,55,65,75,85,95], 7), 95, 'Test 40');
test(largestInteger([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 20), -1, 'Test 41');
test(largestInteger([5, 3, 9, 3, 5, 9, 5, 3, 9], 3), -1, 'Test 42');
test(largestInteger([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3], 3), -1, 'Test 43');
test(largestInteger([5, 5, 5, 5, 5, 5], 3), -1, 'Test 44');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6), 12, 'Test 45');
test(largestInteger([10, 20, 30, 40, 50, 10, 20, 30, 40, 50], 5), -1, 'Test 46');
test(largestInteger([10,9,8,7,6,5,4,3,2,1], 4), 10, 'Test 47');
test(largestInteger([15, 20, 25, 30, 35, 40, 45, 50, 55], 4), 55, 'Test 48');
test(largestInteger([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 21), 42, 'Test 49');
test(largestInteger([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 15, 'Test 50');
test(largestInteger([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 100, 'Test 51');
test(largestInteger([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 1), -1, 'Test 52');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5], 15), -1, 'Test 53');
test(largestInteger([1, 2, 2, 1, 3, 3, 1, 2, 1, 2, 3], 3), -1, 'Test 54');
test(largestInteger([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), 15, 'Test 55');
test(largestInteger([3,1,4,1,5,9,2,6,5,3,5,9], 4), -1, 'Test 56');
test(largestInteger([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 4), -1, 'Test 57');
test(largestInteger([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), -1, 'Test 58');
test(largestInteger([5,4,3,2,1,5,4,3,2,1], 5), -1, 'Test 59');
test(largestInteger([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 15), -1, 'Test 60');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 15, 'Test 61');
test(largestInteger([5, 2, 5, 3, 5, 2, 5, 3, 5, 2, 5], 3), -1, 'Test 62');
test(largestInteger([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 20), 7, 'Test 63');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 20, 'Test 64');
test(largestInteger([42, 24, 42, 24, 42, 24, 42, 24], 5), -1, 'Test 65');
test(largestInteger([8, 6, 4, 2, 0, 2, 4, 6, 8, 10, 12, 14], 5), 14, 'Test 66');
test(largestInteger([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5], 10), -1, 'Test 67');
test(largestInteger([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 3), -1, 'Test 68');
test(largestInteger([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 4), 1, 'Test 69');
test(largestInteger([7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6], 7), 7, 'Test 70');
test(largestInteger([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], 3), -1, 'Test 71');
test(largestInteger([10, 20, 10, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30], 5), -1, 'Test 72');
test(largestInteger([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 5), -1, 'Test 73');
test(largestInteger([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 10), 97, 'Test 74');
test(largestInteger([8,6,4,2,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31], 3), 31, 'Test 75');
test(largestInteger([5, 3, 5, 2, 5, 3, 5], 3), -1, 'Test 76');
test(largestInteger([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5], 3), 5, 'Test 77');
test(largestInteger([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 5), -1, 'Test 78');
test(largestInteger([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], 25), 50, 'Test 79');
test(largestInteger([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 2), -1, 'Test 80');
test(largestInteger([23, 45, 67, 89, 23, 45, 67, 89, 23, 45, 67, 89, 23, 45, 67, 89], 8), -1, 'Test 81');
test(largestInteger([29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10), 29, 'Test 82');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 10, 'Test 83');
test(largestInteger([5, 4, 3, 2, 1, 5, 4, 3, 2, 1], 5), -1, 'Test 84');
test(largestInteger([1,1,2,2,3,3,4,4,5,5,6,6], 2), -1, 'Test 85');
test(largestInteger([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 4), 31, 'Test 86');
test(largestInteger([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 15), 30, 'Test 87');
test(largestInteger([5,5,5,5,5,5,5,5,5,5], 5), -1, 'Test 88');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 2), 20, 'Test 89');
test(largestInteger([5, 15, 25, 35, 45, 55, 65, 75], 4), 75, 'Test 90');
test(largestInteger([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 25), 50, 'Test 91');
test(largestInteger([10,20,10,30,20,40,30,50,40,60], 4), 60, 'Test 92');
test(largestInteger([10, 20, 30, 40, 50, 60, 70, 80, 90], 5), 90, 'Test 93');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 50), 50, 'Test 94');
test(largestInteger([7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8], 9), -1, 'Test 95');
test(largestInteger([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6), 10, 'Test 96');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 10, 'Test 97');
test(largestInteger([5,15,25,35,45,55,65], 3), 65, 'Test 98');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 12), 25, 'Test 99');
test(largestInteger([42, 42, 42, 42, 42, 42, 41, 41, 41, 41, 40, 40, 40, 39, 39], 3), -1, 'Test 100');
test(largestInteger([45, 45, 45, 45, 45, 45, 45], 3), -1, 'Test 101');
test(largestInteger([5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 6), -1, 'Test 102');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 20, 'Test 103');
test(largestInteger([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 5), 29, 'Test 104');
test(largestInteger([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 20, 'Test 105');
test(largestInteger([5, 8, 5, 9, 8, 9, 10, 8, 10, 9], 4), -1, 'Test 106');
test(largestInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 20, 'Test 107');
test(largestInteger([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), 20, 'Test 108');
test(largestInteger([42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 10), 42, 'Test 109');
test(largestInteger([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 10), -1, 'Test 110');
test(largestInteger([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 2), 1, 'Test 111');
test(largestInteger([10, 10, 20, 20, 30, 30, 40, 40, 50, 50], 3), -1, 'Test 112');
test(largestInteger([34,23,12,45,67,89,10,20,30,40,50,60,70,80,90], 6), 90, 'Test 113');
test(largestInteger([15,20,15,20,15,20,15,20,15,20], 4), -1, 'Test 114');
test(largestInteger([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3], 7), -1, 'Test 115');
test(largestInteger([3, 6, 3, 9, 6, 9, 12, 6, 12, 9, 12, 9, 3, 6, 9, 3, 6, 9], 6), -1, 'Test 116');
test(largestInteger([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20], 5), -1, 'Test 117');
test(largestInteger([2,4,6,8,10,12,14,16,18,20], 6), 20, 'Test 118');
test(largestInteger([7,7,7,8,8,8,9,9,9,10,10,10,11,11,11], 3), -1, 'Test 119');
test(largestInteger([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), -1, 'Test 120');

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
