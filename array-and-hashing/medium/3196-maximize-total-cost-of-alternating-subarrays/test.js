// Test: 3196. Maximize Total Cost Of Alternating Subarrays
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { maximumTotalCost } = require("./solution");

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

console.log("\n3196. Maximize Total Cost Of Alternating Subarrays\n");

test(maximumTotalCost([5,-3,8,7,-2,6]), 31, 'Test 1');
test(maximumTotalCost([5,-3,2,7,-6,1]), 24, 'Test 2');
test(maximumTotalCost([5,-3,2,-4,6]), 20, 'Test 3');
test(maximumTotalCost([1]), 1, 'Test 4');
test(maximumTotalCost([1,-1,1,-1]), 4, 'Test 5');
test(maximumTotalCost([1,-2,3,4]), 10, 'Test 6');
test(maximumTotalCost([1,-1]), 2, 'Test 7');
test(maximumTotalCost([1000000000,-1000000000,1000000000,-1000000000,1000000000]), 5000000000, 'Test 8');
test(maximumTotalCost([-1,-2,-3,-4,-5]), 1, 'Test 9');
test(maximumTotalCost([-5,-3,-8,-7,-2,-6]), 1, 'Test 10');
test(maximumTotalCost([1,2,3,4,5]), 15, 'Test 11');
test(maximumTotalCost([-5,3,-2,7,-6,1]), 14, 'Test 12');
test(maximumTotalCost([5,3,-5,2,-3,3,9,0,123,1,-10]), 164, 'Test 13');
test(maximumTotalCost([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 14');
test(maximumTotalCost([0]), 0, 'Test 15');
test(maximumTotalCost([5,3,-5,2,-3,3,9,-1]), 31, 'Test 16');
test(maximumTotalCost([-1,-2,-3,-4]), 2, 'Test 17');
test(maximumTotalCost([1,2]), 3, 'Test 18');
test(maximumTotalCost([1000000000,-1000000000,1000000000,-1000000000]), 4000000000, 'Test 19');
test(maximumTotalCost([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10]), 100, 'Test 20');
test(maximumTotalCost([10, -5, 10, -5, 10, -5, 10, -5, 10, -5, 10, -5]), 90, 'Test 21');
test(maximumTotalCost([-1,0,1,-2,2,-3,3,-4,4,-5,5,-6,6,-7,7,-8,8,-9,9,-10,10,-11,11,-12,12,-13,13,-14]), 194, 'Test 22');
test(maximumTotalCost([0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1]), 10, 'Test 23');
test(maximumTotalCost([-1000000000, 1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000, 1000000000]), 6000000000, 'Test 24');
test(maximumTotalCost([5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5]), 140, 'Test 25');
test(maximumTotalCost([1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000, 1000000000]), 9000000000, 'Test 26');
test(maximumTotalCost([5, 3, 1, -2, -4, -6, 7, 9, -11, 13]), 53, 'Test 27');
test(maximumTotalCost([1000000000, 1000000000, -1000000000, -1000000000, 1000000000, 1000000000, -1000000000, -1000000000]), 4000000000, 'Test 28');
test(maximumTotalCost([1, 2, -1, 3, -4, 5, -6, 7, -8]), 37, 'Test 29');
test(maximumTotalCost([-5, 4, -3, 2, -1, 0, 1, -2, 3, -4]), 15, 'Test 30');
test(maximumTotalCost([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000]), 5500, 'Test 31');
test(maximumTotalCost([1000000000, -999999999, 999999998, -999999997, 999999996, -999999995]), 5999999985, 'Test 32');
test(maximumTotalCost([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 33');
test(maximumTotalCost([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 44, 'Test 34');
test(maximumTotalCost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 465, 'Test 35');
test(maximumTotalCost([1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0]), 10, 'Test 36');
test(maximumTotalCost([1, 2, 3, 4, 5, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, -5, -4, -3, -2, -1]), 36, 'Test 37');
test(maximumTotalCost([9, -8, 7, -6, 5, -4, 3, -2, 1, 0, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 100, 'Test 38');
test(maximumTotalCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 20, 'Test 39');
test(maximumTotalCost([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 210, 'Test 40');
test(maximumTotalCost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 820, 'Test 41');
test(maximumTotalCost([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), 530, 'Test 42');
test(maximumTotalCost([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20]), 208, 'Test 43');
test(maximumTotalCost([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 20, 'Test 44');
test(maximumTotalCost([10, -1, 3, -2, 15, -8, 7, -6, 5, -4]), 61, 'Test 45');
test(maximumTotalCost([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), 300, 'Test 46');
test(maximumTotalCost([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16]), 134, 'Test 47');
test(maximumTotalCost([0,1,-1,0,1,-1,0,1,-1,0]), 6, 'Test 48');
test(maximumTotalCost([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15,-16,17,-18,19,-20,21,-22,23,-24,25,-26,27,-28,29,-30,31]), 496, 'Test 49');
test(maximumTotalCost([1, -3, 2, -4, 3, -5, 4, -6, 5, -7, 6, -8, 7, -9, 8, -10]), 88, 'Test 50');
test(maximumTotalCost([10,-20,30,-40,50,-60,70,-80,90,-100]), 550, 'Test 51');
test(maximumTotalCost([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 18, 'Test 52');
test(maximumTotalCost([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), 9999999955, 'Test 53');
test(maximumTotalCost([100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99]), 1592, 'Test 54');
test(maximumTotalCost([-1000000000, 999999999, -999999998, 999999997, -999999996, 999999995]), 3999999985, 'Test 55');
test(maximumTotalCost([1000000000, 2000000000, 3000000000, 4000000000, 5000000000, 6000000000, 7000000000, 8000000000, 9000000000, 10000000000]), 55000000000, 'Test 56');
test(maximumTotalCost([1,-3,5,-7,9,-11,13,-15,17]), 81, 'Test 57');
test(maximumTotalCost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 58');
test(maximumTotalCost([50, -30, 20, -10, 0, 10, -20, 30, -40, 50]), 260, 'Test 59');
test(maximumTotalCost([1000000000,-500000000,1000000000,-500000000,1000000000,-500000000,1000000000,-500000000,1000000000,-500000000]), 7500000000, 'Test 60');
test(maximumTotalCost([-1,-3,-5,-7,-9,-11,-13,-15,-17,-19,-21,-23,-25,-27,-29,-31,-33,-35,-37,-39]), 20, 'Test 61');
test(maximumTotalCost([10, -5, 3, -8, 2, 1, -4, 6, -7, 9]), 55, 'Test 62');
test(maximumTotalCost([10, -1, 100, -10, 1000, -100, 10000, -1000, 100000, -10000]), 122221, 'Test 63');
test(maximumTotalCost([-1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000]), 6000, 'Test 64');
test(maximumTotalCost([100, 200, -300, 400, -500, 600, -700, 800, -900, 1000]), 5500, 'Test 65');
test(maximumTotalCost([1000000000, 500000000, -500000000, 250000000, -250000000, 125000000, -125000000, 62500000, -62500000, 31250000]), 2906250000, 'Test 66');
test(maximumTotalCost([-10, -20, 30, -40, 50, -60, 70, -80, 90, -100]), 530, 'Test 67');
test(maximumTotalCost([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 110, 'Test 68');
test(maximumTotalCost([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 15, 'Test 69');
test(maximumTotalCost([1, 3, -5, 7, -9, 11, -13, 15, -17, 19]), 100, 'Test 70');
test(maximumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 71');
test(maximumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 72');
test(maximumTotalCost([1000000000, 2000000000, -3000000000, 4000000000, -5000000000, 6000000000]), 21000000000, 'Test 73');
test(maximumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), 60, 'Test 74');
test(maximumTotalCost([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 55, 'Test 75');
test(maximumTotalCost([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12]), 76, 'Test 76');
test(maximumTotalCost([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 77');
test(maximumTotalCost([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100]), 6000, 'Test 78');
test(maximumTotalCost([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 12, 'Test 79');
test(maximumTotalCost([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 80');
test(maximumTotalCost([5, -3, 8, 7, -2, 6, -1, 4, 3, -5, 2, -8, 9, -4, 7, -6, 1, -2, 3, -10]), 96, 'Test 81');
test(maximumTotalCost([1000000000, 1000000000, -1000000000, -1000000000, 1000000000, 1000000000]), 4000000000, 'Test 82');
test(maximumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 83');
test(maximumTotalCost([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), -5, 'Test 84');
test(maximumTotalCost([1, 2, -3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14]), 99, 'Test 85');
test(maximumTotalCost([10, -20, 30, -40, 50, -60, 70, -80, 90, -100]), 550, 'Test 86');
test(maximumTotalCost([100, -50, 50, -50, 50, -50, 50, -50, 50, -50]), 550, 'Test 87');
test(maximumTotalCost([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, -1000000000, -1000000000, -1000000000, -1000000000, -1000000000]), 6000000000, 'Test 88');
test(maximumTotalCost([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]), 6, 'Test 89');
test(maximumTotalCost([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000, 1100, -1200, 1300, -1400, 1500, -1600, 1700, -1800, 1900, -2000]), 21000, 'Test 90');
test(maximumTotalCost([1, 2, 3, 4, 5, -5, -4, -3, -2, -1]), 18, 'Test 91');
test(maximumTotalCost([10, -10, 20, -20, 30, -30, 40, -40, 50]), 250, 'Test 92');
test(maximumTotalCost([500000000, -500000000, 500000000, -500000000, 500000000, -500000000, 500000000, -500000000, 500000000, -500000000]), 5000000000, 'Test 93');
test(maximumTotalCost([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 5, 'Test 94');
test(maximumTotalCost([1,-1,1,-1,1,-1,1,-1,1,-1]), 10, 'Test 95');
test(maximumTotalCost([9, -7, 5, -3, 1, -8, 6, -4, 2, -9, 7, -5, 3, -1, 0]), 70, 'Test 96');
test(maximumTotalCost([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 0, 'Test 97');
test(maximumTotalCost([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 30, 'Test 98');
test(maximumTotalCost([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 550, 'Test 99');
test(maximumTotalCost([1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1]), 11, 'Test 100');
test(maximumTotalCost([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 10, 'Test 101');
test(maximumTotalCost([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 16, 'Test 102');
test(maximumTotalCost([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), 120, 'Test 103');
test(maximumTotalCost([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 50, 'Test 104');
test(maximumTotalCost([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 40, 'Test 105');

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
