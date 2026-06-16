// Test: 1385. Find The Distance Value Between Two Arrays
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { findTheDistanceValue } = require("./solution");

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

console.log("\n1385. Find The Distance Value Between Two Arrays\n");

test(findTheDistanceValue([10,20,30], [5,15,25], 4), 3, 'Test 1');
test(findTheDistanceValue([-1000,1000], [-500,500], 499), 2, 'Test 2');
test(findTheDistanceValue([4,5,8], [10,9,1,8], 2), 2, 'Test 3');
test(findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3), 2, 'Test 4');
test(findTheDistanceValue([-1,-2,-3], [1,2,3], 2), 2, 'Test 5');
test(findTheDistanceValue([0,0,0,0], [1,2,3,4], 0), 4, 'Test 6');
test(findTheDistanceValue([1000], [-1000], 1999), 1, 'Test 7');
test(findTheDistanceValue([1], [1], 0), 0, 'Test 8');
test(findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6), 1, 'Test 9');
test(findTheDistanceValue([1,2,3], [4,5,6], 0), 3, 'Test 10');
test(findTheDistanceValue([1,2,3,4,5], [6,7,8,9,10], 1), 4, 'Test 11');
test(findTheDistanceValue([100, 200, 300, 400, 500], [50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 49), 0, 'Test 12');
test(findTheDistanceValue([-1000, -900, -800, -700, -600], [600, 700, 800, 900, 1000], 100), 5, 'Test 13');
test(findTheDistanceValue([-100, -200, -300], [-50, -150, -250], 49), 3, 'Test 14');
test(findTheDistanceValue([500, 500, 500, 500, 500], [500, 500, 500, 500, 500], 0), 0, 'Test 15');
test(findTheDistanceValue([10, 20, 30, 40, 50], [1, 2, 3, 4, 5], 5), 4, 'Test 16');
test(findTheDistanceValue([1, 2, 3, 4, 5], [10, 20, 30, 40, 50], 10), 0, 'Test 17');
test(findTheDistanceValue([1, 1, 1, 1, 1], [2, 4, 6, 8, 10], 1), 0, 'Test 18');
test(findTheDistanceValue([500, 1000, 1500, 2000], [400, 900, 1400, 1900], 100), 0, 'Test 19');
test(findTheDistanceValue([0, 100, 200, 300, 400], [50, 150, 250, 350, 450], 50), 0, 'Test 20');
test(findTheDistanceValue([100, 200, 300, 400, 500], [50, 150, 250, 350, 450], 49), 5, 'Test 21');
test(findTheDistanceValue([0, 5, 10, 15, 20], [3, 6, 9, 12, 18], 2), 2, 'Test 22');
test(findTheDistanceValue([500, 400, 300, 200, 100], [0, 100, 200, 300, 400, 500], 99), 0, 'Test 23');
test(findTheDistanceValue([10, 20, 30, 40, 50], [5, 15, 25, 35, 45, 55], 9), 0, 'Test 24');
test(findTheDistanceValue([10, 20, 30, 40, 50], [5, 15, 25, 35, 45, 55], 4), 5, 'Test 25');
test(findTheDistanceValue([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 0), 5, 'Test 26');
test(findTheDistanceValue([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 1), 0, 'Test 27');
test(findTheDistanceValue([0, 0, 0, 0], [1, -1, 2, -2], 1), 0, 'Test 28');
test(findTheDistanceValue([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 0), 5, 'Test 29');
test(findTheDistanceValue([-100, -200, -300, -400, -500], [100, 200, 300, 400, 500], 150), 5, 'Test 30');
test(findTheDistanceValue([-10, -20, -30], [10, 20, 30], 19), 3, 'Test 31');
test(findTheDistanceValue([100, 200, 300, 400, 500], [90, 190, 290, 390, 490], 9), 5, 'Test 32');
test(findTheDistanceValue([1, 2, 3, 4, 5], [1, 3, 5, 7, 9], 0), 2, 'Test 33');
test(findTheDistanceValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 0), 5, 'Test 34');
test(findTheDistanceValue([5, 5, 5, 5, 5], [1, 2, 3, 4, 6], 1), 0, 'Test 35');
test(findTheDistanceValue([1, 3, 5, 7, 9], [0, 2, 4, 6, 8], 0), 5, 'Test 36');
test(findTheDistanceValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 3), 3, 'Test 37');
test(findTheDistanceValue([-10, -20, -30, -40], [-11, -21, -31, -41], 0), 4, 'Test 38');
test(findTheDistanceValue([0,1,2,3,4,5,6,7,8,9], [5], 1), 7, 'Test 39');
test(findTheDistanceValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0), 1, 'Test 40');
test(findTheDistanceValue([0,0,0,0,0], [1,2,3,4,5], 0), 5, 'Test 41');
test(findTheDistanceValue([1, 1, 1, 1, 1], [2, 2, 2, 2, 2], 0), 5, 'Test 42');
test(findTheDistanceValue([2, 4, 6, 8, 10], [1, 3, 5, 7, 9], 1), 0, 'Test 43');
test(findTheDistanceValue([1000,-1000,500,-500], [1000,-1000,500,-500], 0), 0, 'Test 44');
test(findTheDistanceValue([5, 10, 15, 20, 25], [3, 6, 9, 12, 18], 2), 2, 'Test 45');
test(findTheDistanceValue([5, 15, 25, 35, 45], [0, 10, 20, 30, 40], 4), 5, 'Test 46');
test(findTheDistanceValue([-1000, -500, 0, 500, 1000], [-500, 0, 500], 499), 2, 'Test 47');
test(findTheDistanceValue([-1000, 1000, 500, -500], [0, -2000, 2000, 1000], 500), 1, 'Test 48');
test(findTheDistanceValue([500, 400, 300, 200, 100], [-100, -200, -300, -400, -500], 100), 5, 'Test 49');
test(findTheDistanceValue([100, 200, 300, 400], [50, 150, 250, 350], 49), 4, 'Test 50');
test(findTheDistanceValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 8), 1, 'Test 51');
test(findTheDistanceValue([-500, -1000, -1500, -2000], [-400, -900, -1400, -1900], 100), 0, 'Test 52');
test(findTheDistanceValue([1, 2, 3, 4, 5], [0, 0, 0, 0, 0], 1), 4, 'Test 53');
test(findTheDistanceValue([10, 20, 30, 40, 50], [5, 15, 25, 35, 45, 55], 5), 0, 'Test 54');
test(findTheDistanceValue([1,3,5,7,9], [2,4,6,8,10], 0), 5, 'Test 55');
test(findTheDistanceValue([100,200,300,400,500], [150,250,350,450], 49), 5, 'Test 56');
test(findTheDistanceValue([0, 1, 2, 3, 4], [0, 0, 0, 0, 0], 2), 2, 'Test 57');
test(findTheDistanceValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 4, 'Test 58');
test(findTheDistanceValue([0, 0, 0, 0], [1, 2, 3, 4], 0), 4, 'Test 59');
test(findTheDistanceValue([-5, -10, -15, -20, -25], [5, 10, 15, 20, 25], 4), 5, 'Test 60');
test(findTheDistanceValue([50,51,52,53,54,55], [50,55], 0), 4, 'Test 61');
test(findTheDistanceValue([1, 1, 1, 1], [2, 2, 2, 2], 1), 0, 'Test 62');
test(findTheDistanceValue([10, 20, 30, 40, 50], [5, 15, 25, 35, 45], 5), 0, 'Test 63');
test(findTheDistanceValue([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 1), 0, 'Test 64');
test(findTheDistanceValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 9), 0, 'Test 65');
test(findTheDistanceValue([1, 3, 5, 7, 9], [0, 2, 4, 6, 8], 1), 0, 'Test 66');
test(findTheDistanceValue([10, 20, 30, 40, 50], [5, 15, 25, 35, 45], 4), 5, 'Test 67');
test(findTheDistanceValue([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12, 14, 16, 18], 0), 5, 'Test 68');
test(findTheDistanceValue([1, 2, 3, 4, 5], [10, 20, 30, 40, 50], 5), 4, 'Test 69');
test(findTheDistanceValue([1,2,3,4,5], [1,2,3,4,5], 10), 0, 'Test 70');
test(findTheDistanceValue([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 0), 0, 'Test 71');
test(findTheDistanceValue([0, 0, 0, 0, 0], [-1, -2, -3, -4, -5], 1), 0, 'Test 72');
test(findTheDistanceValue([100, 200, 300], [95, 195, 295, 105, 205, 305], 5), 0, 'Test 73');
test(findTheDistanceValue([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 2), 0, 'Test 74');
test(findTheDistanceValue([-100,-90,-80,-70,-60,-50], [-95,-85,-75,-65,-55], 4), 6, 'Test 75');
test(findTheDistanceValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 11, 21, 31, 41, 51, 61, 71, 81, 91], 9), 0, 'Test 76');
test(findTheDistanceValue([1,1,1,1,1], [1,1,1,1,1], 1), 0, 'Test 77');
test(findTheDistanceValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 1), 7, 'Test 78');
test(findTheDistanceValue([1, 1, 1, 1, 1], [1, 2, 3, 4, 5], 0), 0, 'Test 79');
test(findTheDistanceValue([1000, -1000, 0], [500, -500, 0], 500), 0, 'Test 80');
test(findTheDistanceValue([0, 10, 20, 30, 40], [5, 15, 25, 35, 45], 5), 0, 'Test 81');
test(findTheDistanceValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8), 9, 'Test 82');
test(findTheDistanceValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 0), 10, 'Test 83');
test(findTheDistanceValue([1, 2, 3, 4, 5], [10, 20, 30, 40, 50], 9), 0, 'Test 84');
test(findTheDistanceValue([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16], 1), 0, 'Test 85');
test(findTheDistanceValue([10, 20, 30, 40, 50], [5, 15, 25, 35, 45], 6), 0, 'Test 86');
test(findTheDistanceValue([0, 100, 200], [50, 150, 250], 49), 3, 'Test 87');
test(findTheDistanceValue([1, 2, 3, 4, 5], [-1, -2, -3, -4, -5], 1), 5, 'Test 88');
test(findTheDistanceValue([1, 1, 1, 1], [1], 1), 0, 'Test 89');
test(findTheDistanceValue([-50, -40, -30, -20, -10], [-45, -35, -25, -15, -5], 4), 5, 'Test 90');
test(findTheDistanceValue([-10, -20, -30, -40, -50], [-5, -15, -25, -35, -45, -55], 9), 0, 'Test 91');
test(findTheDistanceValue([1, 2, 3, 4, 5], [2, 4, 6, 8, 10], 1), 0, 'Test 92');
test(findTheDistanceValue([0, 0, 0, 0], [0, 0, 0, 0], 0), 0, 'Test 93');
test(findTheDistanceValue([100,200,300,400,500], [50,150,250,350,450,550], 49), 5, 'Test 94');
test(findTheDistanceValue([-100, -200, -300, -400, -500], [-95, -195, -295, -395, -495, -595], 5), 0, 'Test 95');
test(findTheDistanceValue([1, 1, 1, 1, 1], [2, 2, 2, 2, 2], 1), 0, 'Test 96');
test(findTheDistanceValue([1, 2, 3, 4, 5], [0, 6, 7, 8, 9], 1), 3, 'Test 97');
test(findTheDistanceValue([100, 200, 300, 400, 500], [90, 190, 290, 390, 490], 5), 5, 'Test 98');
test(findTheDistanceValue([1, 10, 100, 1000], [-1, -10, -100, -1000], 5), 3, 'Test 99');
test(findTheDistanceValue([100, 200, 300, 400], [99, 199, 299, 399], 1), 0, 'Test 100');
test(findTheDistanceValue([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 1), 0, 'Test 101');
test(findTheDistanceValue([-100, -200, -300, -400], [-50, -150, -250, -350], 49), 4, 'Test 102');
test(findTheDistanceValue([5, 15, 25, 35], [10, 20, 30, 40], 5), 0, 'Test 103');
test(findTheDistanceValue([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 1), 4, 'Test 104');
test(findTheDistanceValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 3, 5, 7, 9], 0), 5, 'Test 105');
test(findTheDistanceValue([1, 1, 1, 1, 1], [2, 3, 4, 5, 6], 0), 5, 'Test 106');
test(findTheDistanceValue([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16], 0), 8, 'Test 107');
test(findTheDistanceValue([-50, -40, -30, -20, -10], [-60, -55, -45, -35, -25], 5), 1, 'Test 108');
test(findTheDistanceValue([10, 20, 30, 40, 50], [15, 25, 35, 45, 55], 4), 5, 'Test 109');
test(findTheDistanceValue([10, 20, 30, 40, 50, 60, 70, 80, 90], [1, 11, 21, 31, 41, 51, 61, 71, 81], 9), 0, 'Test 110');
test(findTheDistanceValue([-100, -200, -300, -400, -500], [-50, -150, -250, -350, -450], 49), 5, 'Test 111');
test(findTheDistanceValue([500, 400, 300, 200, 100], [550, 450, 350, 250, 150], 49), 5, 'Test 112');
test(findTheDistanceValue([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1], [-5,0,5], 2), 3, 'Test 113');
test(findTheDistanceValue([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 4), 1, 'Test 114');
test(findTheDistanceValue([-50, -25, 0, 25, 50], [-30, -15, 15, 30], 14), 3, 'Test 115');

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
