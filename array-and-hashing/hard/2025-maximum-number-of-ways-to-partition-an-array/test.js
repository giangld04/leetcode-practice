// Test: 2025. Maximum Number Of Ways To Partition An Array
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { waysToPartition } = require("./solution");

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

console.log("\n2025. Maximum Number Of Ways To Partition An Array\n");

test(waysToPartition([1,2,3,4,5], 3), 0, 'Test 1');
test(waysToPartition([0,0,0], 1), 2, 'Test 2');
test(waysToPartition([5,5,5,5,5], 5), 0, 'Test 3');
test(waysToPartition([100000,-100000,100000,-100000], 0), 1, 'Test 4');
test(waysToPartition([-1,-2,-3,-4,-5], -3), 0, 'Test 5');
test(waysToPartition([1,2,3,4,5,6,7,8,9,10], 5), 1, 'Test 6');
test(waysToPartition([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], -5), 1, 'Test 7');
test(waysToPartition([1,0,1,0,1,0], 1), 2, 'Test 8');
test(waysToPartition([1,2,3,4,5,6,7,8,9,10], 55), 0, 'Test 9');
test(waysToPartition([-1,-2,-3,-4,-5], -15), 0, 'Test 10');
test(waysToPartition([1,1,1,1,1,1,1,1,1,1], 1), 1, 'Test 11');
test(waysToPartition([2,-1,2], 3), 1, 'Test 12');
test(waysToPartition([1,2,3,4,5], 9), 0, 'Test 13');
test(waysToPartition([-1,1,-1,1,-1], 0), 3, 'Test 14');
test(waysToPartition([22,4,-25,-20,-15,15,-16,7,19,-10,0,-13,-14], -33), 4, 'Test 15');
test(waysToPartition([1000, 2000, 3000, 4000, 5000], 15000), 0, 'Test 16');
test(waysToPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 1, 'Test 17');
test(waysToPartition([100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000], 0), 4, 'Test 18');
test(waysToPartition([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80, 90, -90, 100, -100], 50), 9, 'Test 19');
test(waysToPartition([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 60), 0, 'Test 20');
test(waysToPartition([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 1), 14, 'Test 21');
test(waysToPartition([1, -1, 1, -1, 1, -1, 1, -1], 0), 3, 'Test 22');
test(waysToPartition([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], 0), 1, 'Test 23');
test(waysToPartition([10000, 20000, 30000, 40000, 50000, -150000], 25000), 0, 'Test 24');
test(waysToPartition([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1], 0), 9, 'Test 25');
test(waysToPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 1, 'Test 26');
test(waysToPartition([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15], 0), 1, 'Test 27');
test(waysToPartition([22, 4, -25, -20, -15, 15, -16, 7, 19, -10, 0, -13, -14, 22, 4, -25, -20, -15, 15, -16, 7, 19, -10, 0, -13, -14], -33), 1, 'Test 28');
test(waysToPartition([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20], 5), 1, 'Test 29');
test(waysToPartition([10, -10, 20, -20, 30, -30, 40, -40], 0), 3, 'Test 30');
test(waysToPartition([-100000, -99999, -99998, -99997, -99996], 50000), 0, 'Test 31');
test(waysToPartition([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000], 550000), 0, 'Test 32');
test(waysToPartition([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 105), 0, 'Test 33');
test(waysToPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 1, 'Test 34');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 15), 0, 'Test 35');
test(waysToPartition([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], 525), 1, 'Test 36');
test(waysToPartition([1, -2, 3, -4, 5, -6, 7, -8, 9], 0), 2, 'Test 37');
test(waysToPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 210), 1, 'Test 38');
test(waysToPartition([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -5), 1, 'Test 39');
test(waysToPartition([1, -1, 1, -1, 1, -1, 1, -1, 1], 2), 4, 'Test 40');
test(waysToPartition([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 50), 1, 'Test 41');
test(waysToPartition([1, -1, 1, -1, 1, -1], 0), 2, 'Test 42');
test(waysToPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 43');
test(waysToPartition([10000,-10000,10000,-10000,10000,-10000,10000,-10000,10000,-10000], 0), 4, 'Test 44');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 0, 'Test 45');
test(waysToPartition([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 1, 'Test 46');
test(waysToPartition([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1], 0), 7, 'Test 47');
test(waysToPartition([100, -100, 200, -200, 300, -300, 400, -400], 50), 3, 'Test 48');
test(waysToPartition([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 420), 1, 'Test 49');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 780), 0, 'Test 50');
test(waysToPartition([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100], 0), 1, 'Test 51');
test(waysToPartition([100000, -100000, 100000, -100000, 100000, -100000], 0), 2, 'Test 52');
test(waysToPartition([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000], 10500), 1, 'Test 53');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 0), 1, 'Test 54');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 1, 'Test 55');
test(waysToPartition([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 1), 5, 'Test 56');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 2100), 1, 'Test 57');
test(waysToPartition([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 110), 0, 'Test 58');
test(waysToPartition([-100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000, 100000], 0), 9, 'Test 59');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1910), 1, 'Test 60');
test(waysToPartition([10, -10, 20, -20, 30, -30, 40], 0), 3, 'Test 61');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 15), 1, 'Test 62');
test(waysToPartition([100000, -100000, 100000, -100000, 100000], 0), 3, 'Test 63');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 65), 0, 'Test 64');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 100), 1, 'Test 65');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 1275), 0, 'Test 66');
test(waysToPartition([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 10), 0, 'Test 67');
test(waysToPartition([0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5], 0), 5, 'Test 68');
test(waysToPartition([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 5), 10, 'Test 69');
test(waysToPartition([-100000, 0, 100000, 0, -100000, 0, 100000, 0, -100000], 50000), 0, 'Test 70');
test(waysToPartition([10000, -10000, 20000, -20000, 30000, -30000, 40000, -40000, 50000], -10000), 3, 'Test 71');
test(waysToPartition([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1], 0), 4, 'Test 72');
test(waysToPartition([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 1, 'Test 73');
test(waysToPartition([10000, -5000, 20000, -10000, 15000, -5000, 20000, -10000, 15000], 10000), 2, 'Test 74');
test(waysToPartition([-10,10,-20,20,-30,30,-40,40], 0), 3, 'Test 75');
test(waysToPartition([22, 4, -25, -20, -15, 15, -16, 7, 19, -10, 0, -13, -14, 30, -30], -33), 4, 'Test 76');
test(waysToPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 120), 0, 'Test 77');
test(waysToPartition([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000], 5500000), 0, 'Test 78');
test(waysToPartition([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 500), 1, 'Test 79');
test(waysToPartition([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 0), 4, 'Test 80');
test(waysToPartition([5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5], 10), 6, 'Test 81');
test(waysToPartition([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 100), 1, 'Test 82');
test(waysToPartition([22, 4, -25, -20, -15, 15, -16, 7, 19, -10, 0, -13, -14], 100), 0, 'Test 83');
test(waysToPartition([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], 5), 1, 'Test 84');
test(waysToPartition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 0), 0, 'Test 85');
test(waysToPartition([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 50), 0, 'Test 86');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 0, 'Test 87');
test(waysToPartition([-10000, 10000, -10000, 10000, -10000, 10000, -10000, 10000], 5000), 3, 'Test 88');
test(waysToPartition([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5), 1, 'Test 89');
test(waysToPartition([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 19, 'Test 90');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 120), 0, 'Test 91');
test(waysToPartition([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), 0, 'Test 92');
test(waysToPartition([10, -20, 30, -40, 50, -60, 70, -80, 90], 0), 2, 'Test 93');
test(waysToPartition([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 1), 2, 'Test 94');
test(waysToPartition([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 10), 1, 'Test 95');
test(waysToPartition([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 0), 9, 'Test 96');
test(waysToPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 1, 'Test 97');
test(waysToPartition([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -55), 0, 'Test 98');
test(waysToPartition([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 55000), 0, 'Test 99');
test(waysToPartition([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 225), 0, 'Test 100');
test(waysToPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], -50), 1, 'Test 101');
test(waysToPartition([-100000, -90000, -80000, -70000, -60000, -50000, -40000, -30000, -20000, -10000], -55000), 0, 'Test 102');
test(waysToPartition([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 14, 'Test 103');
test(waysToPartition([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 0), 9, 'Test 104');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 210), 1, 'Test 105');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 1, 'Test 106');
test(waysToPartition([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 275), 0, 'Test 107');
test(waysToPartition([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20], -10), 1, 'Test 108');
test(waysToPartition([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000], 50000), 1, 'Test 109');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 0, 'Test 110');
test(waysToPartition([100000,90000,80000,70000,60000,50000,40000,30000,20000,10000], 500000), 1, 'Test 111');
test(waysToPartition([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 1), 2, 'Test 112');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 1, 'Test 113');
test(waysToPartition([100, 200, 300, 400, 500, 600, 700, 800, 900], 4500), 0, 'Test 114');
test(waysToPartition([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 550), 0, 'Test 115');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 190), 1, 'Test 116');
test(waysToPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 0, 'Test 117');

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
