// Test: 910. Smallest Range Ii
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { smallestRangeII } = require("./solution");

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

console.log("\n910. Smallest Range Ii\n");

test(smallestRangeII([0,10], 2), 6, 'Test 1');
test(smallestRangeII([1,5,8], 2), 3, 'Test 2');
test(smallestRangeII([6,3,4,7], 3), 4, 'Test 3');
test(smallestRangeII([6,3,2,18,9,12,3,6,5,0], 6), 9, 'Test 4');
test(smallestRangeII([4,9,6], 2), 2, 'Test 5');
test(smallestRangeII([1,3,6], 3), 3, 'Test 6');
test(smallestRangeII([7,8,8,10], 3), 3, 'Test 7');
test(smallestRangeII([1], 0), 0, 'Test 8');
test(smallestRangeII([4,1,8,10], 2), 5, 'Test 9');
test(smallestRangeII([6,3,4,2], 1), 2, 'Test 10');
test(smallestRangeII([100, 200, 300, 400, 500], 50), 300, 'Test 11');
test(smallestRangeII([30, 10, 20, 40, 50, 60], 15), 20, 'Test 12');
test(smallestRangeII([10, 15, 3, 7, 8, 12], 4), 6, 'Test 13');
test(smallestRangeII([9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990], 1000), 9, 'Test 14');
test(smallestRangeII([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3), 12, 'Test 15');
test(smallestRangeII([10,20,30,40,50,60,70,80,90,100,110,120], 15), 80, 'Test 16');
test(smallestRangeII([5, 8, 12, 15, 20, 25, 30], 10), 15, 'Test 17');
test(smallestRangeII([1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 799, 'Test 18');
test(smallestRangeII([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 10), 18, 'Test 19');
test(smallestRangeII([10, 15, 20, 25, 30, 35, 40], 5), 20, 'Test 20');
test(smallestRangeII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 50), 90, 'Test 21');
test(smallestRangeII([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 20), 410, 'Test 22');
test(smallestRangeII([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 8, 'Test 23');
test(smallestRangeII([7, 14, 21, 28, 35, 42, 49, 56], 7), 35, 'Test 24');
test(smallestRangeII([8, 10, 15, 17, 20, 22, 30], 10), 14, 'Test 25');
test(smallestRangeII([10,20,30,40,50,60,70,80,90,100], 10), 70, 'Test 26');
test(smallestRangeII([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60], 5), 47, 'Test 27');
test(smallestRangeII([1,2,3,4,5,6,7,8,9,10], 0), 9, 'Test 28');
test(smallestRangeII([100, 200, 300, 400, 500], 150), 200, 'Test 29');
test(smallestRangeII([500, 1000, 1500, 2000, 2500, 3000], 300), 1900, 'Test 30');
test(smallestRangeII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 7, 'Test 31');
test(smallestRangeII([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000], 100), 0, 'Test 32');
test(smallestRangeII([1,2,3,4,5,6,7,8,9,10], 1), 7, 'Test 33');
test(smallestRangeII([1, 10, 100, 1000, 10000], 500), 8999, 'Test 34');
test(smallestRangeII([8, 23, 45, 12, 19, 32, 55, 60, 48, 37, 28, 17, 7, 5, 3, 1, 2, 4, 6, 9, 11, 13, 15, 18, 20, 21, 22, 24, 25, 26, 27, 29, 30, 31, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 46, 47, 49, 50], 8), 43, 'Test 35');
test(smallestRangeII([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 300), 500, 'Test 36');
test(smallestRangeII([15, 10, 5, 0, 20, 25], 10), 15, 'Test 37');
test(smallestRangeII([9999,9998,9997,9996,9995,9994,9993,9992,9991,9990], 1000), 9, 'Test 38');
test(smallestRangeII([10000, 100, 1000, 10, 100000], 500), 98990, 'Test 39');
test(smallestRangeII([1, 10000, 2, 9999, 3, 9998, 4, 9997], 5000), 7, 'Test 40');
test(smallestRangeII([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60], 10), 37, 'Test 41');
test(smallestRangeII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 12, 'Test 42');
test(smallestRangeII([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 5), 18, 'Test 43');
test(smallestRangeII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 20), 150, 'Test 44');
test(smallestRangeII([100, 50, 200, 150, 250], 75), 100, 'Test 45');
test(smallestRangeII([5, 8, 12, 15, 17, 20, 22, 25, 27, 30], 10), 17, 'Test 46');
test(smallestRangeII([8, 11, 12, 9, 10], 3), 4, 'Test 47');
test(smallestRangeII([20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300], 15), 250, 'Test 48');
test(smallestRangeII([15, 22, 35, 14, 7, 30], 10), 13, 'Test 49');
test(smallestRangeII([3,5,7,9,11,13,15,17,19,21], 2), 14, 'Test 50');
test(smallestRangeII([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], 20), 149, 'Test 51');
test(smallestRangeII([10,25,40,55,70,85,100,115,130,145,160,175,190,205,220], 10), 190, 'Test 52');
test(smallestRangeII([100, 200, 150, 50, 250, 300], 75), 100, 'Test 53');
test(smallestRangeII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 0, 'Test 54');
test(smallestRangeII([10, 10, 10, 10, 10], 10), 0, 'Test 55');
test(smallestRangeII([23, 45, 12, 78, 45, 90, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90], 30), 44, 'Test 56');
test(smallestRangeII([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 150), 600, 'Test 57');
test(smallestRangeII([1,1000,2000,3000,4000,5000,6000], 100), 5799, 'Test 58');
test(smallestRangeII([3, 7, 11, 15, 19, 23, 27, 31, 35, 39], 4), 28, 'Test 59');
test(smallestRangeII([5, 2, 11, 14, 7], 4), 5, 'Test 60');
test(smallestRangeII([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 10), 35, 'Test 61');
test(smallestRangeII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 17, 'Test 62');
test(smallestRangeII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250], 60), 120, 'Test 63');
test(smallestRangeII([100,200,300,400,500,600,700,800,900,1000], 0), 900, 'Test 64');
test(smallestRangeII([15, 25, 35, 45, 55, 65, 75], 20), 30, 'Test 65');
test(smallestRangeII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 5, 'Test 66');
test(smallestRangeII([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 67');
test(smallestRangeII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20), 50, 'Test 68');
test(smallestRangeII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 25), 90, 'Test 69');
test(smallestRangeII([5,8,12,15,18,22,25,28,32,35,38,42,45,48,52,55,58,62], 10), 37, 'Test 70');
test(smallestRangeII([5,5,5,5,5,5,5,5,5,5], 0), 0, 'Test 71');
test(smallestRangeII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 0, 'Test 72');
test(smallestRangeII([7, 17, 27, 37, 47, 57, 67, 77], 15), 40, 'Test 73');
test(smallestRangeII([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 14, 'Test 74');
test(smallestRangeII([5000, 4000, 3000, 2000, 1000], 1000), 2000, 'Test 75');
test(smallestRangeII([5, 8, 12, 15, 20, 25, 30, 35], 3), 24, 'Test 76');
test(smallestRangeII([1, 100, 200, 300, 400, 500], 25), 449, 'Test 77');
test(smallestRangeII([1, 5, 10, 15, 20, 25, 30, 35, 40, 45], 5), 34, 'Test 78');
test(smallestRangeII([2,5,1,8,9,10,11,12,15,20], 5), 9, 'Test 79');
test(smallestRangeII([10,15,1,2,11,5,7,3,13,9], 4), 6, 'Test 80');
test(smallestRangeII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 9, 'Test 81');
test(smallestRangeII([10, 15, 18, 20, 25, 30, 40, 50], 5), 30, 'Test 82');
test(smallestRangeII([5, 1, 9, 17, 13, 2, 8], 5), 8, 'Test 83');
test(smallestRangeII([100,200,300,400,500], 50), 300, 'Test 84');
test(smallestRangeII([5,15,25,35,45,55,65,75,85,95,105,115,125,135,145], 20), 100, 'Test 85');
test(smallestRangeII([1, 100, 200, 300, 400, 500], 50), 399, 'Test 86');
test(smallestRangeII([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000], 2000), 15000, 'Test 87');
test(smallestRangeII([10,20,30,40,50,60,70,80,90,100], 20), 50, 'Test 88');
test(smallestRangeII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2), 10, 'Test 89');
test(smallestRangeII([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140], 7), 119, 'Test 90');
test(smallestRangeII([8,10,5,11,6,9,4,12,3,7], 3), 5, 'Test 91');
test(smallestRangeII([100, 150, 200, 250, 300, 350, 400, 450, 500], 20), 360, 'Test 92');
test(smallestRangeII([9,18,27,36,45,54,63,72,81,90], 9), 63, 'Test 93');
test(smallestRangeII([10,20,30,40,50,60,70,80,90,100], 0), 90, 'Test 94');
test(smallestRangeII([1000,500,300,200,400,600,700,800,900,100], 50), 800, 'Test 95');
test(smallestRangeII([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 3), 9, 'Test 96');
test(smallestRangeII([5, 8, 12, 15, 20, 25, 30, 35, 40, 45, 50], 7), 31, 'Test 97');
test(smallestRangeII([2,8,15,18,3,5,7,10,12,14], 4), 8, 'Test 98');
test(smallestRangeII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15), 60, 'Test 99');
test(smallestRangeII([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 25), 40, 'Test 100');
test(smallestRangeII([9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990, 9989, 9988, 9987, 9986, 9985, 9984, 9983, 9982, 9981, 9980], 100), 19, 'Test 101');
test(smallestRangeII([4, 8, 15, 16, 23, 42], 5), 28, 'Test 102');
test(smallestRangeII([5, 8, 12, 16, 20, 24, 28], 7), 11, 'Test 103');
test(smallestRangeII([100,50,30,20,40,60,70,80,90,10], 15), 60, 'Test 104');
test(smallestRangeII([9,7,5,3,1,10,8,6,4,2], 1), 7, 'Test 105');
test(smallestRangeII([20,1,15,17,5,13,19,9,7,11], 5), 9, 'Test 106');
test(smallestRangeII([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 10), 75, 'Test 107');

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
