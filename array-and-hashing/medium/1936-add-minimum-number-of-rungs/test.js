// Test: 1936. Add Minimum Number Of Rungs
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { addRungs } = require("./solution");

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

console.log("\n1936. Add Minimum Number Of Rungs\n");

test(addRungs([1,3,5,10], 2), 2, 'Test 1');
test(addRungs([1,2,3,4,5], 1), 0, 'Test 2');
test(addRungs([3,6,8,10], 3), 0, 'Test 3');
test(addRungs([10], 10), 0, 'Test 4');
test(addRungs([1000000000], 1), 999999999, 'Test 5');
test(addRungs([1,1000000000], 1), 999999998, 'Test 6');
test(addRungs([1,5,11,20], 4), 3, 'Test 7');
test(addRungs([3,4,6,7], 2), 1, 'Test 8');
test(addRungs([5], 10), 0, 'Test 9');
test(addRungs([1, 5, 10, 16, 23, 31, 40, 50, 61, 73, 86, 100], 14), 0, 'Test 10');
test(addRungs([1,10,20,30,40,50,60,70,80,90,100], 1), 89, 'Test 11');
test(addRungs([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 10), 0, 'Test 12');
test(addRungs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 2), 502, 'Test 13');
test(addRungs([2,8,16,32,64,128], 15), 7, 'Test 14');
test(addRungs([100, 200, 300, 400, 500], 150), 0, 'Test 15');
test(addRungs([2, 5, 10, 20, 35, 55, 80, 110, 145, 185, 230], 5), 36, 'Test 16');
test(addRungs([1,8,15,22,29], 5), 4, 'Test 17');
test(addRungs([5,15,25,35,45,55,65,75,85,95], 10), 0, 'Test 18');
test(addRungs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 15), 0, 'Test 19');
test(addRungs([5, 10, 20, 40, 80, 160], 10), 11, 'Test 20');
test(addRungs([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 3), 24, 'Test 21');
test(addRungs([1, 7, 15, 30, 60], 10), 3, 'Test 22');
test(addRungs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1), 502, 'Test 23');
test(addRungs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 20), 47, 'Test 24');
test(addRungs([10,25,45,70,100,130,160,190,220,250], 30), 0, 'Test 25');
test(addRungs([1,6,15,30,50], 10), 2, 'Test 26');
test(addRungs([1, 1000000000], 100000000), 9, 'Test 27');
test(addRungs([100,200,300,400,500], 99), 5, 'Test 28');
test(addRungs([1, 8, 15, 22, 30], 5), 4, 'Test 29');
test(addRungs([10,20,30,40,50,60,70,80,90,100], 9), 10, 'Test 30');
test(addRungs([10,15,25,40,50], 10), 1, 'Test 31');
test(addRungs([2, 5, 11, 21, 35, 50], 5), 6, 'Test 32');
test(addRungs([5,11,17,23,29,35,41,47,53,59], 6), 0, 'Test 33');
test(addRungs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1), 90, 'Test 34');
test(addRungs([1,1000000000], 100000000), 9, 'Test 35');
test(addRungs([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105], 14), 0, 'Test 36');
test(addRungs([1,2,3,4,5,6,7,8,9,10], 1), 0, 'Test 37');
test(addRungs([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 50), 0, 'Test 38');
test(addRungs([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 100], 10), 0, 'Test 39');
test(addRungs([10,30,50,70,90,110,130,150,170,190], 20), 0, 'Test 40');
test(addRungs([10,15,21,28,36,45,55,66,78,91,105], 10), 4, 'Test 41');
test(addRungs([5,10,20,40,80,160], 25), 4, 'Test 42');
test(addRungs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 1), 10, 'Test 43');
test(addRungs([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120], 4), 21, 'Test 44');
test(addRungs([1, 4, 10, 20, 30], 5), 3, 'Test 45');
test(addRungs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 10), 98, 'Test 46');
test(addRungs([5,10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000,500000,1000000], 100000), 6, 'Test 47');
test(addRungs([3, 15, 25, 30, 45, 60, 85, 100], 12), 5, 'Test 48');
test(addRungs([1, 3, 6, 10, 15, 21, 28], 3), 5, 'Test 49');
test(addRungs([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 100), 8, 'Test 50');
test(addRungs([2, 6, 10, 14, 18, 22, 26], 4), 0, 'Test 51');
test(addRungs([100,200,300,400,500], 90), 5, 'Test 52');
test(addRungs([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 100000), 9995, 'Test 53');
test(addRungs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576], 1024), 1013, 'Test 54');
test(addRungs([5, 11, 19, 29, 41, 55, 71, 89, 109, 131], 6), 15, 'Test 55');
test(addRungs([1,10,20,30,40,50,60,70,80,90,100], 9), 9, 'Test 56');
test(addRungs([2, 8, 14, 20, 26, 32, 38, 44, 50], 6), 0, 'Test 57');
test(addRungs([1,2,3,4,5,6,7,8,9,10], 3), 0, 'Test 58');
test(addRungs([1, 2, 4, 7, 13, 21], 3), 3, 'Test 59');
test(addRungs([1000000000], 500000000), 1, 'Test 60');
test(addRungs([1, 5, 15, 30, 50, 70, 100, 150, 200, 300], 25), 6, 'Test 61');
test(addRungs([2, 8, 14, 22, 30, 40, 50], 6), 4, 'Test 62');
test(addRungs([1, 1000000000], 1), 999999998, 'Test 63');
test(addRungs([1, 100, 200, 300], 50), 3, 'Test 64');
test(addRungs([3, 15, 35, 65, 100, 145, 195, 250, 310, 375], 10), 31, 'Test 65');
test(addRungs([10, 25, 45, 60, 75, 90], 15), 1, 'Test 66');
test(addRungs([10, 25, 45, 70, 100], 15), 3, 'Test 67');
test(addRungs([1, 1000000000], 500000000), 1, 'Test 68');
test(addRungs([5, 12, 24, 40, 60, 85, 100], 10), 6, 'Test 69');
test(addRungs([1, 1000000000], 1000000), 999, 'Test 70');
test(addRungs([2, 5, 9, 14, 20, 27, 35, 44, 54, 65], 4), 10, 'Test 71');
test(addRungs([1,3,5,7,9,11,13,15,17,19], 2), 0, 'Test 72');
test(addRungs([1, 9, 15, 25, 30], 5), 3, 'Test 73');
test(addRungs([5,10,15,20,25,30,35,40,45,50], 9), 0, 'Test 74');
test(addRungs([2, 8, 18, 32, 50, 72, 98], 15), 3, 'Test 75');
test(addRungs([10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120], 500), 8, 'Test 76');
test(addRungs([5,10,20,40,80,160], 10), 11, 'Test 77');
test(addRungs([1,6,11,16,21,26], 5), 0, 'Test 78');
test(addRungs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 0, 'Test 79');
test(addRungs([1,3,5,7,9,11,13,15,17,19,21,23,25], 2), 0, 'Test 80');
test(addRungs([1,3,6,10,15,21,28,36,45,55], 5), 5, 'Test 81');
test(addRungs([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 1000000), 996, 'Test 82');
test(addRungs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3), 0, 'Test 83');
test(addRungs([1000000000], 100000000), 9, 'Test 84');
test(addRungs([1,1000000000], 500000000), 1, 'Test 85');
test(addRungs([10, 1000000000], 500000000), 1, 'Test 86');
test(addRungs([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9), 9, 'Test 87');
test(addRungs([1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56, 67, 79, 92, 106], 5), 13, 'Test 88');
test(addRungs([2, 3, 6, 8, 15, 22, 30, 35, 40, 50], 5), 4, 'Test 89');
test(addRungs([3,9,12,21,23,29,30], 6), 1, 'Test 90');
test(addRungs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 0, 'Test 91');
test(addRungs([1, 3, 6, 10, 15, 21, 28, 36, 45, 55], 3), 12, 'Test 92');
test(addRungs([1, 10, 15, 20, 25, 30], 5), 1, 'Test 93');
test(addRungs([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 15), 0, 'Test 94');
test(addRungs([5, 12, 22, 35, 50, 68, 89, 113, 141, 173, 209], 7), 23, 'Test 95');
test(addRungs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 0, 'Test 96');
test(addRungs([2,4,6,8,10,12,14,16,18,20], 1), 10, 'Test 97');
test(addRungs([1,2,4,8,16,32,64], 15), 3, 'Test 98');
test(addRungs([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 2), 38, 'Test 99');
test(addRungs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9), 10, 'Test 100');
test(addRungs([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000], 1000000), 996, 'Test 101');
test(addRungs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 100), 8, 'Test 102');

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
