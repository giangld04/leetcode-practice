// Test: 3116. Kth Smallest Amount With Single Denomination Combination
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { findKthSmallest } = require("./solution");

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

console.log("\n3116. Kth Smallest Amount With Single Denomination Combination\n");

test(findKthSmallest([10,20,30], 5), 50, 'Test 1');
test(findKthSmallest([15,20,25], 15), 125, 'Test 2');
test(findKthSmallest([15,25,35], 8), 70, 'Test 3');
test(findKthSmallest([25,50,75], 20), 500, 'Test 4');
test(findKthSmallest([1,10,100], 100), 100, 'Test 5');
test(findKthSmallest([4,8,12], 10), 40, 'Test 6');
test(findKthSmallest([7,14,28], 5), 35, 'Test 7');
test(findKthSmallest([2,3,5,7], 12), 15, 'Test 8');
test(findKthSmallest([10,20,30], 20), 200, 'Test 9');
test(findKthSmallest([7,11,13], 15), 52, 'Test 10');
test(findKthSmallest([3,6,9], 3), 9, 'Test 11');
test(findKthSmallest([7,11,13], 10), 35, 'Test 12');
test(findKthSmallest([9,18,27,36], 15), 135, 'Test 13');
test(findKthSmallest([15,20,25], 8), 60, 'Test 14');
test(findKthSmallest([2,3,5], 30), 40, 'Test 15');
test(findKthSmallest([1,2,3], 10), 10, 'Test 16');
test(findKthSmallest([5,2], 7), 12, 'Test 17');
test(findKthSmallest([1,2,3], 5), 5, 'Test 18');
test(findKthSmallest([8,16,24], 12), 96, 'Test 19');
test(findKthSmallest([17,19,23], 8), 57, 'Test 20');
test(findKthSmallest([3, 5, 7], 20), 36, 'Test 21');
test(findKthSmallest([17, 23, 29], 20), 153, 'Test 22');
test(findKthSmallest([2,4,6,8,10,12,14,16,18,20], 75), 150, 'Test 23');
test(findKthSmallest([2, 5, 7, 10], 30), 46, 'Test 24');
test(findKthSmallest([1, 3, 6, 9, 12, 15], 100), 100, 'Test 25');
test(findKthSmallest([2, 5, 10, 20], 25), 42, 'Test 26');
test(findKthSmallest([2, 4, 8, 16, 32, 64], 200), 400, 'Test 27');
test(findKthSmallest([1, 3, 5, 7, 9], 100), 100, 'Test 28');
test(findKthSmallest([3,5,7,9,11,13], 100), 165, 'Test 29');
test(findKthSmallest([2, 5, 10, 20], 30), 50, 'Test 30');
test(findKthSmallest([3, 5, 7, 9], 20), 36, 'Test 31');
test(findKthSmallest([2, 3, 5, 7, 11, 13, 17, 19], 150), 185, 'Test 32');
test(findKthSmallest([6,12,18,24,30], 25), 150, 'Test 33');
test(findKthSmallest([2, 5, 10, 20, 25], 200), 334, 'Test 34');
test(findKthSmallest([1, 3, 5, 7, 9, 11], 100), 100, 'Test 35');
test(findKthSmallest([2, 4, 8, 16, 32, 64], 150), 300, 'Test 36');
test(findKthSmallest([4,6,8,10,12,14], 60), 156, 'Test 37');
test(findKthSmallest([7, 14, 21, 28, 35], 75), 525, 'Test 38');
test(findKthSmallest([15, 25, 35, 45, 55, 65, 75], 300), 2430, 'Test 39');
test(findKthSmallest([13, 26, 39, 52, 65, 78, 91], 100), 1300, 'Test 40');
test(findKthSmallest([1, 4, 9, 16, 25], 100), 100, 'Test 41');
test(findKthSmallest([2, 3, 5, 7], 50), 65, 'Test 42');
test(findKthSmallest([13, 17, 19], 30), 169, 'Test 43');
test(findKthSmallest([7, 14, 21, 28], 25), 175, 'Test 44');
test(findKthSmallest([8, 16, 24, 32, 40, 48], 100), 800, 'Test 45');
test(findKthSmallest([3,5,7], 15), 27, 'Test 46');
test(findKthSmallest([11,22,33,44,55], 50), 550, 'Test 47');
test(findKthSmallest([11,13,17,19], 50), 190, 'Test 48');
test(findKthSmallest([1,3,7,9,11,13], 40), 40, 'Test 49');
test(findKthSmallest([11, 13, 17], 15), 68, 'Test 50');
test(findKthSmallest([1,3,6,9,12,15,18,21,24,27,30,33,36,39,42], 700), 700, 'Test 51');
test(findKthSmallest([7,14,21,28], 25), 175, 'Test 52');
test(findKthSmallest([4, 7, 10, 13, 16], 75), 169, 'Test 53');
test(findKthSmallest([5,10,15,20,25,30,35], 100), 500, 'Test 54');
test(findKthSmallest([15,21,27,33,39], 40), 234, 'Test 55');
test(findKthSmallest([2, 5, 10, 20, 25, 50], 1000), 1666, 'Test 56');
test(findKthSmallest([11,13,17], 20), 91, 'Test 57');
test(findKthSmallest([6, 12, 18, 24, 30], 50), 300, 'Test 58');
test(findKthSmallest([1,2,4,8,16,32], 1000), 1000, 'Test 59');
test(findKthSmallest([17,19,23,29,31,37,41,43,47], 400), 1410, 'Test 60');
test(findKthSmallest([5, 10, 15, 20, 25, 30], 150), 750, 'Test 61');
test(findKthSmallest([2,3,5,7,11], 100), 126, 'Test 62');
test(findKthSmallest([1,3,5,7,9,11,13], 50), 50, 'Test 63');
test(findKthSmallest([2, 3, 5, 7, 11], 50), 64, 'Test 64');
test(findKthSmallest([21,23,29,31,37,41,43,47,53,59,61,67,71,73,79], 1000), 3161, 'Test 65');
test(findKthSmallest([11, 22, 33, 44], 100), 1100, 'Test 66');
test(findKthSmallest([18, 24, 30, 36, 42], 70), 648, 'Test 67');
test(findKthSmallest([17,23,29], 12), 92, 'Test 68');
test(findKthSmallest([10, 15, 20, 25, 30], 300), 2050, 'Test 69');
test(findKthSmallest([25,50,75,100,125], 35), 875, 'Test 70');
test(findKthSmallest([6, 9, 12, 18], 50), 225, 'Test 71');
test(findKthSmallest([3, 5, 7, 9, 11], 30), 50, 'Test 72');
test(findKthSmallest([5,10,15,20,25,30,35,40,45,50,55,60], 600), 3000, 'Test 73');
test(findKthSmallest([18,24,30,36,42,48,54,60,66,72,78,84,90,96,102], 1500), 12312, 'Test 74');
test(findKthSmallest([3, 5, 15], 25), 54, 'Test 75');
test(findKthSmallest([11, 22, 33, 44, 55], 100), 1100, 'Test 76');
test(findKthSmallest([15, 25, 35, 45], 60), 555, 'Test 77');
test(findKthSmallest([6, 12, 18, 24], 100), 600, 'Test 78');
test(findKthSmallest([5, 10, 15, 20, 25, 30, 35], 200), 1000, 'Test 79');
test(findKthSmallest([11, 22, 33], 25), 275, 'Test 80');
test(findKthSmallest([5, 10, 15, 20, 25], 250), 1250, 'Test 81');
test(findKthSmallest([19, 21, 23, 25], 40), 228, 'Test 82');
test(findKthSmallest([15,25,35,45,55,65,75], 200), 1635, 'Test 83');
test(findKthSmallest([2,3,5,7,11,13,17,19], 300), 365, 'Test 84');
test(findKthSmallest([2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768], 1000), 2000, 'Test 85');
test(findKthSmallest([2, 4, 8, 16, 32, 64, 128], 200), 400, 'Test 86');
test(findKthSmallest([7, 11, 13], 15), 52, 'Test 87');
test(findKthSmallest([10,20,30,40,50,60,70,80,90,100], 500), 5000, 'Test 88');
test(findKthSmallest([7,11,13,17,19], 35), 91, 'Test 89');
test(findKthSmallest([15,25,35,45], 200), 1845, 'Test 90');
test(findKthSmallest([8,16,24,32,40,48,56,64,72,80,88,96,104,112,120], 800), 6400, 'Test 91');
test(findKthSmallest([3, 6, 9, 12, 15], 50), 150, 'Test 92');
test(findKthSmallest([1, 4, 9, 16, 25], 150), 150, 'Test 93');
test(findKthSmallest([3, 6, 12, 18, 24, 30], 150), 450, 'Test 94');
test(findKthSmallest([3,5,7,9], 20), 36, 'Test 95');
test(findKthSmallest([17, 19, 23], 20), 136, 'Test 96');
test(findKthSmallest([11, 22, 33, 44, 55], 45), 495, 'Test 97');
test(findKthSmallest([13, 26, 39, 52, 65], 50), 650, 'Test 98');
test(findKthSmallest([19,31,37,41], 25), 190, 'Test 99');
test(findKthSmallest([7, 14, 21], 15), 105, 'Test 100');
test(findKthSmallest([3, 6, 9, 12, 15], 30), 90, 'Test 101');
test(findKthSmallest([6,10,14], 30), 110, 'Test 102');
test(findKthSmallest([2,4,6,8,10], 30), 60, 'Test 103');
test(findKthSmallest([15,20,25], 50), 420, 'Test 104');
test(findKthSmallest([13, 26, 39, 52, 65, 78], 150), 1950, 'Test 105');
test(findKthSmallest([2,3,5,7], 25), 33, 'Test 106');
test(findKthSmallest([9, 18, 27, 36, 45], 30), 270, 'Test 107');
test(findKthSmallest([8, 16, 24, 32, 40, 48], 200), 1600, 'Test 108');
test(findKthSmallest([7,14,28], 15), 105, 'Test 109');
test(findKthSmallest([2, 5, 10, 25], 50), 84, 'Test 110');

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
