// Test: 35. Search Insert Position
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { searchInsert } = require("./solution");

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

console.log("\n35. Search Insert Position\n");

test(searchInsert([-10,0,5,10], 0), 1, 'Test 1');
test(searchInsert([1,2,4,6,7,9], 3), 2, 'Test 2');
test(searchInsert([1,3,5], 4), 2, 'Test 3');
test(searchInsert([1,3,5,6], 2), 1, 'Test 4');
test(searchInsert([-10,-5,-3,2,3,4,5], -4), 2, 'Test 5');
test(searchInsert([-10,0,10,20,30,40,50], -5), 1, 'Test 6');
test(searchInsert([1,2,3,4,5,6,7,8,9,10], 0), 0, 'Test 7');
test(searchInsert([1,3,5,7,9,11], 10), 5, 'Test 8');
test(searchInsert([1], 1), 0, 'Test 9');
test(searchInsert([-10,0,10,20,30,40,50], 25), 4, 'Test 10');
test(searchInsert([1,3], 2), 1, 'Test 11');
test(searchInsert([-10,0,5,10], 15), 4, 'Test 12');
test(searchInsert([1,3,5,6], 7), 4, 'Test 13');
test(searchInsert([1,3,5,6], 5), 2, 'Test 14');
test(searchInsert([1,3], 4), 2, 'Test 15');
test(searchInsert([1,2,3,4,5,6,7,8,9,10], 5), 4, 'Test 16');
test(searchInsert([1,3,4,5,6,8,9,11,13,15], 7), 5, 'Test 17');
test(searchInsert([1,2,4,6,8,10], 5), 3, 'Test 18');
test(searchInsert([1], 0), 0, 'Test 19');
test(searchInsert([1], 2), 1, 'Test 20');
test(searchInsert([-10,-5,-3,2,3,4,5], 3), 4, 'Test 21');
test(searchInsert([1,2,3,4,5,6,7,8,9,10], 11), 10, 'Test 22');
test(searchInsert([1,3,5,6], 0), 0, 'Test 23');
test(searchInsert([-10,0,5,10], -5), 1, 'Test 24');
test(searchInsert([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 256), 8, 'Test 25');
test(searchInsert([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 0, 'Test 26');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25], 14), 7, 'Test 27');
test(searchInsert([10000], 9999), 0, 'Test 28');
test(searchInsert([-1000, -900, -800, -700, -600, -500, -400, -300, -200, -100], -550), 5, 'Test 29');
test(searchInsert([1, 4, 6, 8, 10, 12, 14, 16, 18, 20], 15), 7, 'Test 30');
test(searchInsert([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10], -85), 2, 'Test 31');
test(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 12), 11, 'Test 32');
test(searchInsert([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 20), 10, 'Test 33');
test(searchInsert([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 29), 29, 'Test 34');
test(searchInsert([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 155), 15, 'Test 35');
test(searchInsert([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 15), 7, 'Test 36');
test(searchInsert([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 27), 5, 'Test 37');
test(searchInsert([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41], 39), 13, 'Test 38');
test(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5), 5, 'Test 39');
test(searchInsert([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 27), 8, 'Test 40');
test(searchInsert([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 500000), 6, 'Test 41');
test(searchInsert([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024], 200), 14, 'Test 42');
test(searchInsert([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 33), 6, 'Test 43');
test(searchInsert([-10000, 10000], 10000), 1, 'Test 44');
test(searchInsert([3, 6, 9, 12, 15, 18, 21, 24], 11), 3, 'Test 45');
test(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19), 18, 'Test 46');
test(searchInsert([-10000, 10000], 0), 1, 'Test 47');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 5, 'Test 48');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 0), 0, 'Test 49');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), 10, 'Test 50');
test(searchInsert([-10, -5, -3, -1, 0, 2, 4, 6, 8, 10], -6), 1, 'Test 51');
test(searchInsert([1, 4, 7, 10, 13, 16, 19, 22, 25, 28], 26), 9, 'Test 52');
test(searchInsert([50, 60, 70, 80, 90, 100, 110, 120, 130, 140], 145), 10, 'Test 53');
test(searchInsert([-10, -5, -3, 0, 4, 8, 12], 3), 4, 'Test 54');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25], 12), 6, 'Test 55');
test(searchInsert([10000], 10001), 1, 'Test 56');
test(searchInsert([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 512), 9, 'Test 57');
test(searchInsert([-10, -5, 0, 3, 9, 12, 15], 1), 3, 'Test 58');
test(searchInsert([-500, -400, -300, -200, -100, 0, 100, 200, 300, 400, 500], -350), 2, 'Test 59');
test(searchInsert([1, 2, 4, 8, 16, 32, 64, 128, 256], 64), 6, 'Test 60');
test(searchInsert([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], 50), 7, 'Test 61');
test(searchInsert([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80], 67), 13, 'Test 62');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 10), 5, 'Test 63');
test(searchInsert([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58], 59), 20, 'Test 64');
test(searchInsert([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 1), 0, 'Test 65');
test(searchInsert([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 100), 10, 'Test 66');
test(searchInsert([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 4, 'Test 67');
test(searchInsert([-500, -400, -300, -200, -100, 0, 100, 200, 300, 400, 500], -250), 3, 'Test 68');
test(searchInsert([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5), 6, 'Test 69');
test(searchInsert([-10, -5, 0, 5, 10, 15, 20, 25, 30], 12), 5, 'Test 70');
test(searchInsert([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 5500), 5, 'Test 71');
test(searchInsert([-1000, -500, -250, -100, -50, -25, -10, -5, -2, -1, 0, 1, 2, 5, 10, 25, 50, 100, 250, 500, 1000], -750), 1, 'Test 72');
test(searchInsert([-10, -5, 0, 5, 10, 15, 20], -3), 2, 'Test 73');
test(searchInsert([1, 3, 5, 7, 9], 6), 3, 'Test 74');
test(searchInsert([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 0, 'Test 75');
test(searchInsert([1, 10, 100, 1000, 10000], 500), 3, 'Test 76');
test(searchInsert([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50], -35), 2, 'Test 77');
test(searchInsert([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59], 3), 1, 'Test 78');
test(searchInsert([-10, -5, 0, 5, 10], -7), 1, 'Test 79');
test(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 7, 'Test 80');
test(searchInsert([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 1500), 1, 'Test 81');
test(searchInsert([1, 4, 7, 10, 13, 16, 19], 18), 6, 'Test 82');
test(searchInsert([-10000, 10000], -10000), 0, 'Test 83');
test(searchInsert([-999, -998, -997, -996, -995, -994, -993, -992, -991, -990], -993), 6, 'Test 84');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 20), 10, 'Test 85');
test(searchInsert([0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024], 1024), 32, 'Test 86');
test(searchInsert([-1000, -500, -250, -125, -62, -31, -15, -7, -3, -1], -10), 7, 'Test 87');
test(searchInsert([-10000, -9000, -8000, -7000, -6000, -5000, -4000, -3000, -2000, -1000], -7500), 3, 'Test 88');
test(searchInsert([2, 4, 6, 8, 10], 5), 2, 'Test 89');
test(searchInsert([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11), 11, 'Test 90');
test(searchInsert([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 29), 9, 'Test 91');
test(searchInsert([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 93), 18, 'Test 92');
test(searchInsert([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 550), 5, 'Test 93');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20), 10, 'Test 94');
test(searchInsert([1, 10, 100, 1000, 10000], 5000), 4, 'Test 95');
test(searchInsert([-10000, -9000, -8000, -7000, -6000, -5000, -4000, -3000, -2000, -1000, 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 5000), 15, 'Test 96');
test(searchInsert([-10, -5, -3, -1, 0, 2, 4, 6, 8, 10], -4), 2, 'Test 97');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 14), 7, 'Test 98');
test(searchInsert([-5000, -4000, -3000, -2000, -1000, 0, 1000, 2000, 3000, 4000, 5000], -2500), 3, 'Test 99');
test(searchInsert([-10, -5, 0, 2, 5, 9, 11, 20], 3), 4, 'Test 100');
test(searchInsert([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58], 26), 9, 'Test 101');
test(searchInsert([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000], 55000), 5, 'Test 102');
test(searchInsert([-500, -250, -100, -50, -25, -10, -5, -2, -1, 0, 1, 2, 5, 10, 25, 50, 100, 250, 500], -75), 3, 'Test 103');
test(searchInsert([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 31), 15, 'Test 104');
test(searchInsert([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], -45), 6, 'Test 105');
test(searchInsert([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59], 44), 22, 'Test 106');
test(searchInsert([1, 4, 7, 10, 13, 16, 19, 22, 25], 15), 5, 'Test 107');
test(searchInsert([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 1024), 10, 'Test 108');
test(searchInsert([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 1150), 11, 'Test 109');
test(searchInsert([1, 4, 7, 10, 13, 16, 19, 22, 25, 28], 15), 5, 'Test 110');
test(searchInsert([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 100), 6, 'Test 111');
test(searchInsert([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000], 10000000), 7, 'Test 112');
test(searchInsert([100, 200, 300, 400, 500], 250), 2, 'Test 113');
test(searchInsert([-100, -50, 0, 50, 100], -75), 1, 'Test 114');
test(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 14, 'Test 115');
test(searchInsert([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 19), 9, 'Test 116');
test(searchInsert([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 257), 9, 'Test 117');
test(searchInsert([10, 20, 30, 40, 50, 60, 70, 80, 90], 5), 0, 'Test 118');
test(searchInsert([0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024], -1), 0, 'Test 119');

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
