// Test: 1723. Find Minimum Time To Finish All Jobs
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { minimumTimeRequired } = require("./solution");

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

console.log("\n1723. Find Minimum Time To Finish All Jobs\n");

test(minimumTimeRequired([1,2,4,7,8], 2), 11, 'Test 1');
test(minimumTimeRequired([1,2,3,4,5,6,7,8,9,10,11,12], 4), 20, 'Test 2');
test(minimumTimeRequired([6,5,4,3,2,1], 6), 6, 'Test 3');
test(minimumTimeRequired([12,11,10,9,8,7,6,5,4,3,2,1], 4), 20, 'Test 4');
test(minimumTimeRequired([10,20,30,40,50,60], 3), 70, 'Test 5');
test(minimumTimeRequired([10,10,10,10,10,10,10,10,10,10,10,10], 12), 10, 'Test 6');
test(minimumTimeRequired([1,1,1,1,1,1,1,1,1,1,1,1], 4), 3, 'Test 7');
test(minimumTimeRequired([1,2,3,4,5,6,7,8,9,10,11,12], 6), 13, 'Test 8');
test(minimumTimeRequired([9,9,9,9,9,9,9,9,9,9,9,9], 6), 18, 'Test 9');
test(minimumTimeRequired([5,5,5,5,5,5,5,5,5,5,5,5], 6), 10, 'Test 10');
test(minimumTimeRequired([10,20,30,40,50,60,70,80,90,100,110,120], 12), 120, 'Test 11');
test(minimumTimeRequired([1,1,1,1,1,1,1,1,1,1,1,1], 12), 1, 'Test 12');
test(minimumTimeRequired([3,2,3], 3), 3, 'Test 13');
test(minimumTimeRequired([5,5,3,2,4,1], 3), 7, 'Test 14');
test(minimumTimeRequired([1,2,3,4,5,6,7,8,9,10,11,12], 3), 26, 'Test 15');
test(minimumTimeRequired([5,5,5,5,5,5,5,5,5,5,5,5], 4), 15, 'Test 16');
test(minimumTimeRequired([12, 3, 5, 8, 9, 4, 7, 6, 2, 10, 11, 1], 5), 16, 'Test 17');
test(minimumTimeRequired([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 6), 100, 'Test 18');
test(minimumTimeRequired([10,20,30,40,50,60,70,80,90,100,110,120], 5), 160, 'Test 19');
test(minimumTimeRequired([1,2,3,4,5,6,7,8,9,10,11,12], 7), 12, 'Test 20');
test(minimumTimeRequired([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000], 2), 39000, 'Test 21');
test(minimumTimeRequired([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 0], 4), 140, 'Test 22');
test(minimumTimeRequired([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2), 18, 'Test 23');
test(minimumTimeRequired([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 7), 120, 'Test 24');
test(minimumTimeRequired([10000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4), 10000000, 'Test 25');
test(minimumTimeRequired([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], 4), 40, 'Test 26');
test(minimumTimeRequired([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 3), 130, 'Test 27');
test(minimumTimeRequired([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23], 4), 36, 'Test 28');
test(minimumTimeRequired([3,7,1,10,5,2,8,6,4,9,11,12], 5), 16, 'Test 29');
test(minimumTimeRequired([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], 4), 11, 'Test 30');
test(minimumTimeRequired([10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000], 6), 20000000, 'Test 31');
test(minimumTimeRequired([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 6), 24, 'Test 32');
test(minimumTimeRequired([3,3,3,3,3,3,3,3,3,3,3,3], 1), 36, 'Test 33');
test(minimumTimeRequired([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200], 5), 1600, 'Test 34');
test(minimumTimeRequired([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 8), 12, 'Test 35');
test(minimumTimeRequired([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23], 12), 23, 'Test 36');
test(minimumTimeRequired([30, 15, 40, 10, 25, 5, 60, 45, 20, 50, 55, 35], 5), 80, 'Test 37');
test(minimumTimeRequired([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 1), 12000000, 'Test 38');
test(minimumTimeRequired([20,10,30,25,15,5,40,35,50,100,200,50], 3), 200, 'Test 39');
test(minimumTimeRequired([10,9,8,7,6,5,4,3,2,1,15,14], 3), 28, 'Test 40');
test(minimumTimeRequired([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], 6), 56, 'Test 41');
test(minimumTimeRequired([10,20,30,40,50,60,70,80,90,100,110,120], 4), 200, 'Test 42');
test(minimumTimeRequired([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 6), 65, 'Test 43');
test(minimumTimeRequired([7,8,9,10,11,12,13,14,15,16,17,18], 4), 38, 'Test 44');
test(minimumTimeRequired([2,2,2,2,2,2,2,2,2,2,2,2], 6), 4, 'Test 45');
test(minimumTimeRequired([10,20,30,40,50,60,70,80,90,100,110,120], 2), 390, 'Test 46');
test(minimumTimeRequired([9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10], 4), 20, 'Test 47');
test(minimumTimeRequired([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2), 39, 'Test 48');
test(minimumTimeRequired([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84], 4), 140, 'Test 49');
test(minimumTimeRequired([1,2,3,4,5,6,7,8,9,10,11,12], 1), 78, 'Test 50');
test(minimumTimeRequired([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200], 11), 1200, 'Test 51');
test(minimumTimeRequired([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 7), 12, 'Test 52');
test(minimumTimeRequired([1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 3000, 3000, 3000, 3000], 8), 3000, 'Test 53');
test(minimumTimeRequired([30,20,10,40,50,60,70,80,90,100,110,120], 4), 200, 'Test 54');
test(minimumTimeRequired([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 8, 'Test 55');
test(minimumTimeRequired([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], 4), 60, 'Test 56');
test(minimumTimeRequired([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23], 5), 30, 'Test 57');
test(minimumTimeRequired([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 12, 'Test 58');
test(minimumTimeRequired([2, 5, 10, 17, 26, 37, 50, 65, 82, 101, 122, 145], 4), 168, 'Test 59');
test(minimumTimeRequired([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 8), 4, 'Test 60');
test(minimumTimeRequired([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200], 12), 1200, 'Test 61');
test(minimumTimeRequired([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000], 2), 39000, 'Test 62');
test(minimumTimeRequired([7,14,21,28,35,42,49,56,63,70,77,84], 6), 91, 'Test 63');
test(minimumTimeRequired([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6), 13, 'Test 64');
test(minimumTimeRequired([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 2), 390, 'Test 65');
test(minimumTimeRequired([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 5), 2048, 'Test 66');
test(minimumTimeRequired([9, 7, 5, 3, 1, 2, 4, 6, 8, 10, 12, 11], 6), 13, 'Test 67');
test(minimumTimeRequired([1000,2000,1000,2000,1000,2000,1000,2000,1000,2000,1000,2000], 4), 5000, 'Test 68');
test(minimumTimeRequired([7,6,5,4,3,2,1,1,1,1,1,1], 2), 17, 'Test 69');
test(minimumTimeRequired([10000000,10000000,1,2,3,4,5,6,7,8,9,10], 3), 10000000, 'Test 70');
test(minimumTimeRequired([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37], 3), 66, 'Test 71');
test(minimumTimeRequired([10,20,30,40,50,60,70,80,90,100,110,120], 3), 260, 'Test 72');
test(minimumTimeRequired([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 4), 200, 'Test 73');
test(minimumTimeRequired([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12), 12, 'Test 74');
test(minimumTimeRequired([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 8), 20, 'Test 75');
test(minimumTimeRequired([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 3), 260, 'Test 76');
test(minimumTimeRequired([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 8), 14, 'Test 77');
test(minimumTimeRequired([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4), 20, 'Test 78');
test(minimumTimeRequired([3, 5, 7, 12, 4, 8, 9, 11, 6, 10, 2, 1], 3), 26, 'Test 79');
test(minimumTimeRequired([9,8,7,6,5,4,3,2,1,1,2,3], 5), 11, 'Test 80');
test(minimumTimeRequired([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], 3), 14, 'Test 81');
test(minimumTimeRequired([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 12), 120, 'Test 82');
test(minimumTimeRequired([1,3,5,7,9,11,13,15,17,19,21,23], 4), 36, 'Test 83');
test(minimumTimeRequired([100,200,300,400,500,600,700,800,900,1000,1100,1200], 6), 1300, 'Test 84');
test(minimumTimeRequired([10000000,1000000,100000,10000,1000,100,10,1,1,1,1,1], 7), 10000000, 'Test 85');
test(minimumTimeRequired([1,2,2,3,3,3,4,4,4,4,5,5], 6), 7, 'Test 86');
test(minimumTimeRequired([1,1,2,2,3,3,4,4,5,5,6,6], 4), 11, 'Test 87');
test(minimumTimeRequired([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115], 5), 150, 'Test 88');
test(minimumTimeRequired([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 3), 2048, 'Test 89');
test(minimumTimeRequired([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1], 5), 10, 'Test 90');
test(minimumTimeRequired([12,11,10,9,8,7,6,5,4,3,2,1], 3), 26, 'Test 91');
test(minimumTimeRequired([10,9,8,7,6,5,4,3,2,1,12,11], 4), 20, 'Test 92');
test(minimumTimeRequired([7,7,7,7,7,7,7,7,7,7,7,7], 6), 14, 'Test 93');
test(minimumTimeRequired([7, 2, 8, 9, 4, 3, 6, 1, 5, 10, 11, 12], 3), 26, 'Test 94');
test(minimumTimeRequired([10000000, 1000000, 100000, 10000, 1000, 100, 10, 1, 1, 1, 1, 1], 3), 10000000, 'Test 95');
test(minimumTimeRequired([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3), 40, 'Test 96');
test(minimumTimeRequired([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], 4), 8, 'Test 97');
test(minimumTimeRequired([1,2,3,4,5,6,7,8,9,10,11,12], 12), 12, 'Test 98');
test(minimumTimeRequired([5,10,15,20,25,30,35,40,45,50,55,60], 8), 60, 'Test 99');
test(minimumTimeRequired([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 6), 130, 'Test 100');
test(minimumTimeRequired([6,6,6,6,6,6,6,6,6,6,6,6], 5), 18, 'Test 101');
test(minimumTimeRequired([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], 4), 14, 'Test 102');
test(minimumTimeRequired([9, 8, 7, 6, 5, 4, 3, 2, 1, 15, 20, 25], 5), 25, 'Test 103');
test(minimumTimeRequired([3,5,7,9,11,13,15,17,19,21,23,25], 3), 56, 'Test 104');
test(minimumTimeRequired([5, 7, 12, 18, 23, 30, 37, 40, 45, 50, 55, 60], 3), 128, 'Test 105');
test(minimumTimeRequired([10000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5), 10000000, 'Test 106');
test(minimumTimeRequired([10000000, 9000000, 8000000, 7000000, 6000000, 5000000, 4000000, 3000000, 2000000, 1000000, 100000, 10000], 6), 10000000, 'Test 107');
test(minimumTimeRequired([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1), 78, 'Test 108');
test(minimumTimeRequired([12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144], 9), 144, 'Test 109');
test(minimumTimeRequired([2,3,5,7,11,13,17,19,23,29,31,37], 5), 40, 'Test 110');
test(minimumTimeRequired([10000000, 5000000, 2500000, 1250000, 625000, 312500, 156250, 78125, 39062, 19531, 9765, 4882], 3), 10000000, 'Test 111');

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
