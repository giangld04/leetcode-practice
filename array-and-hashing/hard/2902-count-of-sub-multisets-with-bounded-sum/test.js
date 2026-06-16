// Test: 2902. Count Of Sub Multisets With Bounded Sum
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { countSubMultisets } = require("./solution");

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

console.log("\n2902. Count Of Sub Multisets With Bounded Sum\n");

test(countSubMultisets([1,2,2,3], 6, 6), 1, 'Test 1');
test(countSubMultisets([10,20,30,40,50], 15, 100), 23, 'Test 2');
test(countSubMultisets([10,20,30,40,50], 15, 75), 14, 'Test 3');
test(countSubMultisets([10,20,30,40,50], 15, 60), 11, 'Test 4');
test(countSubMultisets([1,2,1,3,5,2], 3, 5), 9, 'Test 5');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1], 5, 5), 1, 'Test 6');
test(countSubMultisets([1,1,1,1,1], 1, 5), 5, 'Test 7');
test(countSubMultisets([10000,10000,10000], 20000, 30000), 2, 'Test 8');
test(countSubMultisets([1,2,3,4,5], 5, 10), 18, 'Test 9');
test(countSubMultisets([0,0,0], 0, 0), 4, 'Test 10');
test(countSubMultisets([2,1,4,2,7], 1, 5), 7, 'Test 11');
test(countSubMultisets([0,0,0,0], 0, 0), 5, 'Test 12');
test(countSubMultisets([1,3,5,7,9,11,13,15,17,19], 20, 30), 104, 'Test 13');
test(countSubMultisets([20000,20000,20000,20000,20000,20000,20000,20000,20000,20000], 10000, 20000), 1, 'Test 14');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1], 5, 10), 6, 'Test 15');
test(countSubMultisets([1,2,3,4,5,6,7,8,9,10], 10, 20), 219, 'Test 16');
test(countSubMultisets([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 25, 75), 11, 'Test 17');
test(countSubMultisets([1,2,3,4,5], 0, 15), 32, 'Test 18');
test(countSubMultisets([1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 10, 20), 247, 'Test 19');
test(countSubMultisets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10, 40), 11085, 'Test 20');
test(countSubMultisets([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 100, 500), 455555, 'Test 21');
test(countSubMultisets([10,20,30,40,50,60,70,80,90,100], 200, 500), 796, 'Test 22');
test(countSubMultisets([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 20000, 40000), 704, 'Test 23');
test(countSubMultisets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 200, 400), 704, 'Test 24');
test(countSubMultisets([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50], 100, 1000), 19, 'Test 25');
test(countSubMultisets([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5], 5, 15), 169, 'Test 26');
test(countSubMultisets([10,20,30,40,50,60,70,80,90,100], 150, 300), 531, 'Test 27');
test(countSubMultisets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 400, 600), 12610, 'Test 28');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5, 25), 21, 'Test 29');
test(countSubMultisets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 50, 150), 982553, 'Test 30');
test(countSubMultisets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10, 50), 23142, 'Test 31');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1], 0, 5), 6, 'Test 32');
test(countSubMultisets([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 5, 15), 4, 'Test 33');
test(countSubMultisets([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 20, 30), 3, 'Test 34');
test(countSubMultisets([1,2,3,1,2,3,1,2,3,1], 4, 9), 33, 'Test 35');
test(countSubMultisets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15, 25), 11, 'Test 36');
test(countSubMultisets([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2500, 4500), 597, 'Test 37');
test(countSubMultisets([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 250, 500), 436865, 'Test 38');
test(countSubMultisets([1,1,2,2,3,3,4,4,5,5], 5, 15), 119, 'Test 39');
test(countSubMultisets([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 5000, 25000), 426, 'Test 40');
test(countSubMultisets([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 100, 400), 192776, 'Test 41');
test(countSubMultisets([7,7,7,7,7,7,7,7,7,7], 20, 40), 3, 'Test 42');
test(countSubMultisets([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6], 15, 30), 839, 'Test 43');
test(countSubMultisets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20, 30), 1254, 'Test 44');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10, 20), 11, 'Test 45');
test(countSubMultisets([10,20,30,40,50,60,70,80,90,100], 150, 400), 826, 'Test 46');
test(countSubMultisets([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5], 5, 15), 205, 'Test 47');
test(countSubMultisets([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10, 20), 316, 'Test 48');
test(countSubMultisets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 2000, 4000), 2001, 'Test 49');
test(countSubMultisets([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20], 20, 60), 14, 'Test 50');
test(countSubMultisets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150, 450), 892, 'Test 51');
test(countSubMultisets([1,2,3,4,5,6,7,8,9,10], 15, 50), 918, 'Test 52');
test(countSubMultisets([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5], 10, 30), 1480, 'Test 53');
test(countSubMultisets([1,3,5,7,9,11,13,15,17,19,21], 20, 50), 614, 'Test 54');
test(countSubMultisets([5,5,5,5,5,5,5,5,5,5], 10, 30), 5, 'Test 55');
test(countSubMultisets([2,3,5,7,11,13,17,19,23,29], 20, 50), 269, 'Test 56');
test(countSubMultisets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20, 100), 455555, 'Test 57');
test(countSubMultisets([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 30, 100), 3571, 'Test 58');
test(countSubMultisets([500, 500, 500, 500, 500, 500, 500, 500, 500, 500], 2500, 5000), 6, 'Test 59');
test(countSubMultisets([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105], 150, 300), 4992, 'Test 60');
test(countSubMultisets([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60], 100, 200), 77629, 'Test 61');
test(countSubMultisets([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000], 5000, 10000), 6, 'Test 62');
test(countSubMultisets([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 5000, 10000), 23274, 'Test 63');
test(countSubMultisets([10000], 10000, 10000), 1, 'Test 64');
test(countSubMultisets([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 20, 50), 269, 'Test 65');
test(countSubMultisets([100,200,300,400,500,600,700,800,900,1000], 1500, 3500), 704, 'Test 66');
test(countSubMultisets([1,2,4,8,16,32,64,128,256,512], 500, 1000), 501, 'Test 67');
test(countSubMultisets([2,3,5,7,11,13,17,19,23,29], 30, 100), 865, 'Test 68');
test(countSubMultisets([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 50, 100), 20215, 'Test 69');
test(countSubMultisets([1,3,5,7,9,11,13,15,17,19], 20, 50), 473, 'Test 70');
test(countSubMultisets([2,3,5,7,11,13,17,19,23,29], 30, 50), 218, 'Test 71');
test(countSubMultisets([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 50, 100), 9146, 'Test 72');
test(countSubMultisets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 8), 4, 'Test 73');
test(countSubMultisets([100,200,300,400,500,600,700,800,900,1000], 1500, 4500), 892, 'Test 74');
test(countSubMultisets([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000], 1000, 6000), 50984, 'Test 75');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5, 10), 6, 'Test 76');
test(countSubMultisets([1,2,2,3,3,3,4,4,4,4], 10, 20), 64, 'Test 77');
test(countSubMultisets([2,4,6,8,10,12,14,16,18,20,22], 30, 70), 1093, 'Test 78');
test(countSubMultisets([100,200,300,400,500,600,700,800,900,1000], 1000, 3000), 597, 'Test 79');
test(countSubMultisets([10,20,30,40,50,60,70,80,90,100], 100, 500), 984, 'Test 80');
test(countSubMultisets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 30), 531, 'Test 81');
test(countSubMultisets([7,14,21,28,35,42,49,56,63,70], 70, 280), 892, 'Test 82');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50, 100), 51, 'Test 83');
test(countSubMultisets([1,2,3,4,5,6,7,8,9,10], 15, 35), 704, 'Test 84');
test(countSubMultisets([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71], 100, 200), 86894, 'Test 85');
test(countSubMultisets([1,2,3,4,5,6,7,8,9,10], 10, 30), 597, 'Test 86');
test(countSubMultisets([5,10,15,20,25,30,35,40,45,50], 30, 150), 620, 'Test 87');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10, 20), 11, 'Test 88');
test(countSubMultisets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5, 15), 11, 'Test 89');

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
