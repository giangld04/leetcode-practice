// Test: 2554. Maximum Number Of Integers To Choose From A Range I
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { maxCount } = require("./solution");

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

console.log("\n2554. Maximum Number Of Integers To Choose From A Range I\n");

test(maxCount([11], 7, 50), 7, 'Test 1');
test(maxCount([1,2,3,4,5,6,7], 8, 1), 0, 'Test 2');
test(maxCount([], 10, 55), 10, 'Test 3');
test(maxCount([1,6,5], 5, 6), 2, 'Test 4');
test(maxCount([2,4,6,8], 10, 30), 5, 'Test 5');
test(maxCount([2, 4, 6, 8], 10, 15), 3, 'Test 6');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 55), 0, 'Test 7');
test(maxCount([5,6,7,8,9,10], 10, 1), 1, 'Test 8');
test(maxCount([100,200,300], 500, 1500), 54, 'Test 9');
test(maxCount([10], 10, 10), 4, 'Test 10');
test(maxCount([1,3,5,7,9], 10, 25), 4, 'Test 11');
test(maxCount([3, 5, 7], 10, 25), 5, 'Test 12');
test(maxCount([2,4,6,8], 10, 15), 3, 'Test 13');
test(maxCount([1,2,3], 3, 5), 0, 'Test 14');
test(maxCount([3,5,7,9], 15, 40), 6, 'Test 15');
test(maxCount([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20, 100), 9, 'Test 16');
test(maxCount([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], 100, 1000), 41, 'Test 17');
test(maxCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100, 1500), 51, 'Test 18');
test(maxCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100, 450), 28, 'Test 19');
test(maxCount([9996, 9997, 9998, 9999, 10000], 10000, 50000000), 9995, 'Test 20');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20, 150), 5, 'Test 21');
test(maxCount([10, 20, 30, 40, 50], 50, 1275), 45, 'Test 22');
test(maxCount([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100, 4950), 89, 'Test 23');
test(maxCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 50, 125), 14, 'Test 24');
test(maxCount([5000, 5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009], 10000, 25000000), 7067, 'Test 25');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 45), 3, 'Test 26');
test(maxCount([100, 200, 300, 400], 500, 10000), 140, 'Test 27');
test(maxCount([1, 3, 5, 7, 9], 15, 50), 6, 'Test 28');
test(maxCount([5000, 5001, 5002, 5003, 5004], 10000, 25000000), 7069, 'Test 29');
test(maxCount([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 30, 250), 15, 'Test 30');
test(maxCount([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], 100, 2500), 67, 'Test 31');
test(maxCount([1000], 10000, 1000000), 1413, 'Test 32');
test(maxCount([100, 200, 300, 400, 500], 1000, 10000), 140, 'Test 33');
test(maxCount([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], 100, 5000), 89, 'Test 34');
test(maxCount([15, 25, 35, 45, 55, 65, 75, 85, 95], 100, 4500), 90, 'Test 35');
test(maxCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 50, 1000), 40, 'Test 36');
test(maxCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 100, 3000), 70, 'Test 37');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20, 150), 9, 'Test 38');
test(maxCount([1, 2, 3, 4, 5], 10000, 1000000000), 9995, 'Test 39');
test(maxCount([1000, 2000, 3000, 4000], 5000, 12500000), 4996, 'Test 40');
test(maxCount([9999], 10000, 10000), 140, 'Test 41');
test(maxCount([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 50, 600), 24, 'Test 42');
test(maxCount([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192], 10000, 10000000), 4460, 'Test 43');
test(maxCount([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 30, 150), 12, 'Test 44');
test(maxCount([1, 10, 100, 1000, 10000], 10000, 50005000), 9995, 'Test 45');
test(maxCount([50, 51, 52, 53, 54, 55], 100, 1000), 44, 'Test 46');
test(maxCount([3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99], 100, 1500), 47, 'Test 47');
test(maxCount([], 10000, 50000000), 9999, 'Test 48');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 25, 100), 4, 'Test 49');
test(maxCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 50, 1275), 40, 'Test 50');
test(maxCount([1, 3, 5, 7, 9], 10, 25), 4, 'Test 51');
test(maxCount([], 100, 5000), 99, 'Test 52');
test(maxCount([], 50, 1275), 50, 'Test 53');
test(maxCount([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 30, 250), 18, 'Test 54');
test(maxCount([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20, 190), 10, 'Test 55');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20, 190), 0, 'Test 56');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20, 90), 5, 'Test 57');
test(maxCount([2, 3, 5, 7, 11, 13, 17, 19], 20, 50), 7, 'Test 58');
test(maxCount([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000, 500500), 990, 'Test 59');
test(maxCount([100, 200, 300, 400, 500], 1000, 5000), 99, 'Test 60');
test(maxCount([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 30, 225), 15, 'Test 61');
test(maxCount([15, 16, 17, 18, 19, 20], 20, 150), 14, 'Test 62');
test(maxCount([1], 10000, 5000000), 3160, 'Test 63');
test(maxCount([2, 4, 6, 8, 10, 12, 14, 16], 20, 100), 10, 'Test 64');
test(maxCount([2, 4, 6, 8, 10], 15, 50), 7, 'Test 65');
test(maxCount([1, 10, 100, 1000, 10000], 10000, 50000000), 9995, 'Test 66');
test(maxCount([101, 102, 103, 104, 105], 150, 10000), 139, 'Test 67');
test(maxCount([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 40, 400), 19, 'Test 68');
test(maxCount([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 20, 100), 10, 'Test 69');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 20, 190), 1, 'Test 70');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20, 210), 0, 'Test 71');
test(maxCount([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99], 100, 2500), 49, 'Test 72');
test(maxCount([1, 2, 3, 4, 5], 10, 20), 2, 'Test 73');
test(maxCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 50), 4, 'Test 74');
test(maxCount([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1500, 100000), 444, 'Test 75');
test(maxCount([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000, 5000), 99, 'Test 76');
test(maxCount([1, 3, 5, 7, 9, 11, 13, 15], 15, 60), 7, 'Test 77');
test(maxCount([2, 4, 6, 8, 10], 20, 100), 10, 'Test 78');
test(maxCount([15, 30, 45, 60, 75], 100, 3775), 83, 'Test 79');
test(maxCount([1], 10000, 50005000), 9999, 'Test 80');
test(maxCount([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150, 1000), 42, 'Test 81');
test(maxCount([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 10000, 1000000), 1413, 'Test 82');
test(maxCount([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145], 150, 1000), 41, 'Test 83');
test(maxCount([1000], 2000, 1000000), 1413, 'Test 84');
test(maxCount([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 110, 1050), 45, 'Test 85');
test(maxCount([15, 16, 17, 18, 19, 20], 20, 190), 14, 'Test 86');
test(maxCount([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20, 150), 10, 'Test 87');
test(maxCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 50, 200), 17, 'Test 88');
test(maxCount([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000, 20000), 198, 'Test 89');
test(maxCount([100, 101, 102, 103, 104], 110, 500), 31, 'Test 90');
test(maxCount([5, 10, 15, 20, 25], 30, 200), 17, 'Test 91');
test(maxCount([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 100, 2500), 63, 'Test 92');
test(maxCount([10, 20, 30, 40, 50], 60, 1770), 55, 'Test 93');
test(maxCount([10000], 10000, 10000000), 4471, 'Test 94');
test(maxCount([50, 51, 52, 53, 54, 55], 100, 2500), 68, 'Test 95');
test(maxCount([20, 40, 60, 80, 100], 100, 500), 30, 'Test 96');
test(maxCount([1, 3, 5, 7, 9], 15, 60), 7, 'Test 97');
test(maxCount([2500, 5000, 7500], 10000, 25000000), 7069, 'Test 98');
test(maxCount([1], 100, 5050), 99, 'Test 99');
test(maxCount([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 20, 90), 9, 'Test 100');
test(maxCount([1, 3, 5, 7, 9, 11, 13, 15], 15, 100), 7, 'Test 101');

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
