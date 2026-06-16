// Test: 3371. Identify The Largest Outlier In An Array
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { getLargestOutlier } = require("./solution");

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

console.log("\n3371. Identify The Largest Outlier In An Array\n");

test(getLargestOutlier([1000,-1000,0,500,-500]), 1000, 'Test 1');
test(getLargestOutlier([0,0,0,0,0,0,0,0,0,1]), 1, 'Test 2');
test(getLargestOutlier([5,5,5,5,5,25,30]), 30, 'Test 3');
test(getLargestOutlier([0,0,0,0,1]), 1, 'Test 4');
test(getLargestOutlier([-999,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1000]), -Infinity, 'Test 5');
test(getLargestOutlier([2,3,5,10]), 10, 'Test 6');
test(getLargestOutlier([100,200,300,600,500]), 500, 'Test 7');
test(getLargestOutlier([10,20,30,60,5]), 5, 'Test 8');
test(getLargestOutlier([0,0,0,0,1,0]), 1, 'Test 9');
test(getLargestOutlier([1000,-1000,0,1000,-1000,0]), 0, 'Test 10');
test(getLargestOutlier([-5,-5,-10,0,15]), 15, 'Test 11');
test(getLargestOutlier([-1,-2,-3,-6,10]), 10, 'Test 12');
test(getLargestOutlier([1000, -1000, 0, 1999, 2000]), 1999, 'Test 13');
test(getLargestOutlier([-2,-1,-3,-6,4]), 4, 'Test 14');
test(getLargestOutlier([500,500,1000,-500,500]), 1000, 'Test 15');
test(getLargestOutlier([999,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), -Infinity, 'Test 16');
test(getLargestOutlier([-1,-2,-3,-4,-5,-6,-15]), -6, 'Test 17');
test(getLargestOutlier([10,20,30,60,100]), 100, 'Test 18');
test(getLargestOutlier([3,3,3,3,3,3,9]), -Infinity, 'Test 19');
test(getLargestOutlier([5,5,5,5,5,5,5,15]), -Infinity, 'Test 20');
test(getLargestOutlier([-5,-5,-5,-5,-5,-10,40]), -Infinity, 'Test 21');
test(getLargestOutlier([1000,-1000,0,1000]), 1000, 'Test 22');
test(getLargestOutlier([1,1,1,1,1,5,5]), 5, 'Test 23');
test(getLargestOutlier([-10, -20, -30, -60, 10, 100, 101]), -Infinity, 'Test 24');
test(getLargestOutlier([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 100, -100, 150, -150, 200, -200, 250, -250, 300, -300, 350]), 250, 'Test 25');
test(getLargestOutlier([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 55]), 45, 'Test 26');
test(getLargestOutlier([100, 200, 300, 600, 400, 500, 700, 800, 900, 1000, 1500]), -Infinity, 'Test 27');
test(getLargestOutlier([-1, -2, -3, -6, -10, -20, -30]), -Infinity, 'Test 28');
test(getLargestOutlier([10, 20, 30, 60, 40, 50, 70, 80, 90, 100]), -Infinity, 'Test 29');
test(getLargestOutlier([-100, -200, -300, -600, 10, 20, 30, 40, 50]), -Infinity, 'Test 30');
test(getLargestOutlier([-1, -2, -3, -4, -5, -6, -15, -20]), -Infinity, 'Test 31');
test(getLargestOutlier([1, 1, 1, 1, 1, 5, 5, 5, 5, 5]), -Infinity, 'Test 32');
test(getLargestOutlier([100, 100, 100, 300, 400, 500, 600, 700]), -Infinity, 'Test 33');
test(getLargestOutlier([1000, -1000, 0, 0, 0, 1999, 2000, 3000]), -Infinity, 'Test 34');
test(getLargestOutlier([1, 1, 2, 2, 3, 3, 5, 5, 8, 8, 13, 21]), -Infinity, 'Test 35');
test(getLargestOutlier([999, 1, 1000, 1999, 500, 500, 1500]), -Infinity, 'Test 36');
test(getLargestOutlier([-10, -20, -30, -60, -40, -50, -70, -80, -90, -100]), -Infinity, 'Test 37');
test(getLargestOutlier([100, 200, 300, 400, 500, 1500, 1501]), 1501, 'Test 38');
test(getLargestOutlier([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55, 100]), 100, 'Test 39');
test(getLargestOutlier([1, 2, 3, 4, 5, 6, 10, 15]), -Infinity, 'Test 40');
test(getLargestOutlier([3, 3, 3, 3, 3, 3, 3, 21, 9]), 9, 'Test 41');
test(getLargestOutlier([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -210]), -Infinity, 'Test 42');
test(getLargestOutlier([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 50]), -Infinity, 'Test 43');
test(getLargestOutlier([-100, -200, -300, -600, -700, -800, -900]), -Infinity, 'Test 44');
test(getLargestOutlier([-1000, 1000, 0, 0, 0, -1999, -2000, -3000]), -Infinity, 'Test 45');
test(getLargestOutlier([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12]), -Infinity, 'Test 46');
test(getLargestOutlier([-100, -200, -300, -600, -400, -500, -700, -800]), -Infinity, 'Test 47');
test(getLargestOutlier([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 3500]), -Infinity, 'Test 48');
test(getLargestOutlier([-100, -200, -300, -400, -500, -1500, 1500]), 1500, 'Test 49');
test(getLargestOutlier([10, 20, 30, 60, 100, 200, 300]), -Infinity, 'Test 50');
test(getLargestOutlier([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 210]), -Infinity, 'Test 51');
test(getLargestOutlier([100, 200, 300, 600, 400, 500, 700, 800]), -Infinity, 'Test 52');
test(getLargestOutlier([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 53');
test(getLargestOutlier([-1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -10000]), -Infinity, 'Test 54');
test(getLargestOutlier([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 550]), -Infinity, 'Test 55');
test(getLargestOutlier([1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000]), 1000, 'Test 56');
test(getLargestOutlier([50, 50, 50, 150, 150, 250, 300]), -Infinity, 'Test 57');
test(getLargestOutlier([1000, -500, 500, 0, 2000, 3000, 4000]), 4000, 'Test 58');
test(getLargestOutlier([-1, -2, -3, -6, 1, -100, 100]), 1, 'Test 59');
test(getLargestOutlier([1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 60');
test(getLargestOutlier([10, 20, 30, 60, 100, 200, 300, 600]), -Infinity, 'Test 61');
test(getLargestOutlier([1, 2, 3, 6, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]), -Infinity, 'Test 62');
test(getLargestOutlier([500, 500, 1000, 1001, 999, 998, 997]), -Infinity, 'Test 63');
test(getLargestOutlier([999, 1, 1000, 1001, 2, 1002]), -Infinity, 'Test 64');
test(getLargestOutlier([500, 500, 500, 500, 500, 2500, 3000]), 3000, 'Test 65');
test(getLargestOutlier([0, 0, 0, 0, 0, 5, 5]), 0, 'Test 66');
test(getLargestOutlier([5, 10, 15, 30, 45, 50, 100]), -Infinity, 'Test 67');
test(getLargestOutlier([-500, -500, -500, -500, -500, -2500, -3000]), -3000, 'Test 68');
test(getLargestOutlier([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 69');
test(getLargestOutlier([1, 2, 3, 4, 5, 6, 10, 21]), 10, 'Test 70');
test(getLargestOutlier([1000, 2000, 3000, 6000, 10000, 15000, 20000]), -Infinity, 'Test 71');
test(getLargestOutlier([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20]), -Infinity, 'Test 72');
test(getLargestOutlier([5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), -Infinity, 'Test 73');
test(getLargestOutlier([100, 200, 300, 500, 1000, 1500, 2000, 2500, 3000, 3500]), -Infinity, 'Test 74');
test(getLargestOutlier([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -55]), -Infinity, 'Test 75');
test(getLargestOutlier([1, 2, 3, 4, 5, 15, 16]), 16, 'Test 76');
test(getLargestOutlier([-1, -2, -3, -4, -5, -10, -15, 20]), -10, 'Test 77');
test(getLargestOutlier([0, 0, 0, 0, 0, 0, 0, 0, 0, 1000]), 1000, 'Test 78');
test(getLargestOutlier([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 10000]), -Infinity, 'Test 79');
test(getLargestOutlier([-100, -200, -300, -600, -1000, -1500, 2000]), -1500, 'Test 80');
test(getLargestOutlier([100, 200, 300, 600, 700, 800, 900]), -Infinity, 'Test 81');
test(getLargestOutlier([0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 82');
test(getLargestOutlier([-100, -100, -200, -300, -400, -500, -600, -700]), -Infinity, 'Test 83');
test(getLargestOutlier([500, -500, 0, 1000, -1000, 1500, -2000, 3000]), 1500, 'Test 84');
test(getLargestOutlier([1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 100]), -Infinity, 'Test 85');
test(getLargestOutlier([10, 20, 30, 60, 50, 100, 70]), -Infinity, 'Test 86');
test(getLargestOutlier([-100, -200, -300, -500, -1000, -1500, -2000, -2500, -3000, -3500]), -Infinity, 'Test 87');
test(getLargestOutlier([-1, -1, -2, -2, -3, -3, -5, -5, -8, -8, -13, -21, 34]), -Infinity, 'Test 88');
test(getLargestOutlier([100, 200, 300, 600, 1000]), 1000, 'Test 89');
test(getLargestOutlier([100, 101, 102, 303, 404, 505, 606, 707, 808, 909, 1010]), -Infinity, 'Test 90');
test(getLargestOutlier([100, 200, 300, 600, 1000, 1500]), -Infinity, 'Test 91');
test(getLargestOutlier([0, 0, 0, 0, 0, 0, 0, 0, 0, -1]), -1, 'Test 92');
test(getLargestOutlier([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 100]), -Infinity, 'Test 93');
test(getLargestOutlier([-1, -1, -1, -1, -1, -1, -1, -1, -1, -9]), -Infinity, 'Test 94');
test(getLargestOutlier([-100, -200, -300, -400, -500, -600, -700, -800, -900, -1000, -5500, -6500, 7500]), -Infinity, 'Test 95');
test(getLargestOutlier([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 5500, 6500]), 6500, 'Test 96');
test(getLargestOutlier([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55]), -Infinity, 'Test 97');
test(getLargestOutlier([-10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -100]), -Infinity, 'Test 98');
test(getLargestOutlier([999, -999, 0, 0, 0, 1998, 2000]), 2000, 'Test 99');
test(getLargestOutlier([-10, -20, -30, -40, -50, -60, -150, -1000]), -Infinity, 'Test 100');
test(getLargestOutlier([1, 1, 1, 1, 1, 1, 1, 1, 1, 9]), -Infinity, 'Test 101');
test(getLargestOutlier([100, 200, 300, 600, 1200, 2400, 4800]), 4800, 'Test 102');
test(getLargestOutlier([-300, -200, -500, -1000, -1500, 500]), -Infinity, 'Test 103');
test(getLargestOutlier([-1, -2, -3, -4, -5, -6, -10, -21]), -10, 'Test 104');
test(getLargestOutlier([-1000, -1000, -1000, -3000, 500, 600, 700, 800, 900]), -Infinity, 'Test 105');
test(getLargestOutlier([500, 500, 1000, 1001, 250, 250, 1500]), -Infinity, 'Test 106');
test(getLargestOutlier([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, -1000, -2000, -3000]), -Infinity, 'Test 107');
test(getLargestOutlier([1, 2, 3, 6, 10, 20, 30]), -Infinity, 'Test 108');
test(getLargestOutlier([-1, -2, -3, -6, -9, -12, -15, -18, -21, -24, -100]), -Infinity, 'Test 109');
test(getLargestOutlier([10, 20, 30, 60, 40, 50, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), -Infinity, 'Test 110');
test(getLargestOutlier([10, 20, 30, 40, 50, 60, 150, 1000]), -Infinity, 'Test 111');
test(getLargestOutlier([1, 2, 3, 6, 10, 11, 12, 13, 14, 15]), -Infinity, 'Test 112');
test(getLargestOutlier([-100, -200, -300, -600, 100, 200, 300]), -Infinity, 'Test 113');
test(getLargestOutlier([100, 200, 300, 400, 500, 600, 1500, 1600, 1700]), -Infinity, 'Test 114');
test(getLargestOutlier([50, 50, 50, 50, 50, 250, 251]), 251, 'Test 115');
test(getLargestOutlier([0, 0, 0, 0, 0, 0, 1]), 1, 'Test 116');
test(getLargestOutlier([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000]), 1000, 'Test 117');
test(getLargestOutlier([999, 999, 999, 999, 999, 4995, 5000]), 5000, 'Test 118');

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
