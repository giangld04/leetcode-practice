// Test: 1477. Find Two Non Overlapping Sub Arrays Each With Target Sum
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { minSumOfLengths } = require("./solution");

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

console.log("\n1477. Find Two Non Overlapping Sub Arrays Each With Target Sum\n");

test(minSumOfLengths([5,5,5,5,5], 10), 4, 'Test 1');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10], 15), 5, 'Test 2');
test(minSumOfLengths([2,2,2,2,2,2,2,2,2,2], 6), 6, 'Test 3');
test(minSumOfLengths([1,1,1,2,2,2,3,3,3], 6), 5, 'Test 4');
test(minSumOfLengths([1,2,3,4,5], 9), -1, 'Test 5');
test(minSumOfLengths([3,2,2,4,3], 3), 2, 'Test 6');
test(minSumOfLengths([5,5,4,4,5], 9), 4, 'Test 7');
test(minSumOfLengths([2,2,2,2,2,2,2,2,2,2], 4), 4, 'Test 8');
test(minSumOfLengths([1000,1000,1000], 2000), -1, 'Test 9');
test(minSumOfLengths([7,3,4,7], 7), 2, 'Test 10');
test(minSumOfLengths([1000,1000,1000,1000,1000], 2000), 4, 'Test 11');
test(minSumOfLengths([1,1,1,2,2,2,3,3,3], 3), 2, 'Test 12');
test(minSumOfLengths([1,2,1,2,1,2,1,2,1,2], 3), 4, 'Test 13');
test(minSumOfLengths([1000,1000,1000,1000,1000], 5000), -1, 'Test 14');
test(minSumOfLengths([1,1,1,1,1,1,1,1], 2), 4, 'Test 15');
test(minSumOfLengths([5,5,5,5,5,5,5,5,5], 15), 6, 'Test 16');
test(minSumOfLengths([1,2,3,4,5], 10), -1, 'Test 17');
test(minSumOfLengths([10,20,30,40,50], 60), -1, 'Test 18');
test(minSumOfLengths([1,4,4,4,4,4,4,4,4,1], 8), 4, 'Test 19');
test(minSumOfLengths([5,5,5,5,5,5,5,5,5,5], 15), 6, 'Test 20');
test(minSumOfLengths([4,3,2,6,2,3,4], 6), -1, 'Test 21');
test(minSumOfLengths([10,20,30,40,50], 90), -1, 'Test 22');
test(minSumOfLengths([999, 1, 999, 1, 999, 1, 999, 1, 999, 1], 1000), 4, 'Test 23');
test(minSumOfLengths([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 50), 4, 'Test 24');
test(minSumOfLengths([3,1,2,4,3,2,1,3,4,2,1,3,5,2,1,3,4,2,1,3], 6), 4, 'Test 25');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 30), 4, 'Test 26');
test(minSumOfLengths([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 3, 'Test 27');
test(minSumOfLengths([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 500), -1, 'Test 28');
test(minSumOfLengths([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 300), 8, 'Test 29');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 100), 13, 'Test 30');
test(minSumOfLengths([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 20), 8, 'Test 31');
test(minSumOfLengths([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), -1, 'Test 32');
test(minSumOfLengths([1, 3, 2, 1, 5, 2, 3, 1, 4, 2, 3, 1, 5, 2, 3, 1, 4, 2, 3, 1], 6), 4, 'Test 33');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), 3, 'Test 34');
test(minSumOfLengths([1, 4, 2, 3, 5, 7, 9, 11, 13, 15], 15), 4, 'Test 35');
test(minSumOfLengths([5, 1, 3, 5, 10, 7, 4, 9, 2, 8, 6], 15), 5, 'Test 36');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 15), 4, 'Test 37');
test(minSumOfLengths([1,4,4,1,1,2,3,5,3,2,3,4,1], 8), 4, 'Test 38');
test(minSumOfLengths([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 10, 'Test 39');
test(minSumOfLengths([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 30), 6, 'Test 40');
test(minSumOfLengths([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 20, 'Test 41');
test(minSumOfLengths([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 20), 8, 'Test 42');
test(minSumOfLengths([10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50], 60), 4, 'Test 43');
test(minSumOfLengths([9, 1, 2, 3, 9, 4, 5, 9, 6, 7, 8, 9], 9), 2, 'Test 44');
test(minSumOfLengths([3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 6), 6, 'Test 45');
test(minSumOfLengths([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 6, 'Test 46');
test(minSumOfLengths([5,2,3,4,1,5,2,3,4,1,5,2,3,4,1,5,2,3,4,1], 10), 6, 'Test 47');
test(minSumOfLengths([5,1,3,5,2,1,2,3,5,2,1,2,3,5,2,1,2,3,5,2,1,2,3,5,2,1,2,3], 9), -1, 'Test 48');
test(minSumOfLengths([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1500), 5, 'Test 49');
test(minSumOfLengths([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 4, 'Test 50');
test(minSumOfLengths([7, 8, 3, 4, 7, 6, 5, 4, 3, 2, 1], 15), 5, 'Test 51');
test(minSumOfLengths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20), -1, 'Test 52');
test(minSumOfLengths([7,1,3,1,2,1,3,1,7,1,3,1,2,1,3,1,7,1,3,1,2,1,3,1,7,1,3,1], 10), 10, 'Test 53');
test(minSumOfLengths([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 10, 'Test 54');
test(minSumOfLengths([5,2,3,4,5,6,7,8,9,10], 15), 5, 'Test 55');
test(minSumOfLengths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 21), 5, 'Test 56');
test(minSumOfLengths([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 3000), 8, 'Test 57');
test(minSumOfLengths([1,4,2,3,5,2,3,1,4,2,3,5,2,3,1,4,2,3,5,2,3,1,4,2,3,5,2,3,1,4,2,3], 8), 4, 'Test 58');
test(minSumOfLengths([100, 200, 300, 400, 500, 100, 200, 300, 400, 500], 600), 5, 'Test 59');
test(minSumOfLengths([2, 3, 2, 2, 3, 3, 2, 2, 2, 3], 6), 5, 'Test 60');
test(minSumOfLengths([100,200,300,400,500,600,700,800,900,1000], 1500), 5, 'Test 61');
test(minSumOfLengths([100,200,300,100,200,300,100,200,300,100,200,300,100,200,300], 600), 6, 'Test 62');
test(minSumOfLengths([5, 1, 3, 5, 2, 4, 8, 6, 3, 7], 10), 5, 'Test 63');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 30), 8, 'Test 64');
test(minSumOfLengths([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), 5, 'Test 65');
test(minSumOfLengths([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 4, 'Test 66');
test(minSumOfLengths([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 10, 'Test 67');
test(minSumOfLengths([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 6, 'Test 68');
test(minSumOfLengths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 5, 'Test 69');
test(minSumOfLengths([3,2,2,4,3,3,2,2,4,3,3,2,2,4,3,3,2,2,4,3,3,2,2,4,3,3,2,2,4,3], 5), 4, 'Test 70');
test(minSumOfLengths([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 10, 'Test 71');
test(minSumOfLengths([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 4, 'Test 72');
test(minSumOfLengths([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 400), -1, 'Test 73');
test(minSumOfLengths([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 40, 'Test 74');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 100), -1, 'Test 75');
test(minSumOfLengths([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 9), 6, 'Test 76');
test(minSumOfLengths([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 6, 'Test 77');
test(minSumOfLengths([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 4, 'Test 78');
test(minSumOfLengths([5,1,3,5,10,7,4,9,2,8], 15), 5, 'Test 79');
test(minSumOfLengths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 3), 3, 'Test 80');
test(minSumOfLengths([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 4), 6, 'Test 81');
test(minSumOfLengths([100, 200, 100, 300, 200, 400, 300, 500, 400, 600], 300), 2, 'Test 82');
test(minSumOfLengths([10,20,30,40,50,60,70,80,90,100], 150), 5, 'Test 83');
test(minSumOfLengths([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 4, 'Test 84');
test(minSumOfLengths([100, 200, 300, 400, 500, 100, 200, 300, 400, 500], 1000), 8, 'Test 85');

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
