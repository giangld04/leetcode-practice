// Test: 2270. Number Of Ways To Split Array
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { waysToSplitArray } = require("./solution");

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

console.log("\n2270. Number Of Ways To Split Array\n");

test(waysToSplitArray([-100000,-100000,-100000,-100000,-100000]), 2, 'Test 1');
test(waysToSplitArray([1,-1,1,-1,1]), 2, 'Test 2');
test(waysToSplitArray([100,-50,50,-25,25]), 4, 'Test 3');
test(waysToSplitArray([1,2,3,4,5,6,7,8,9,10]), 3, 'Test 4');
test(waysToSplitArray([1,-1,1,-1,1,-1]), 5, 'Test 5');
test(waysToSplitArray([100000,-100000,100000,-100000,100000]), 2, 'Test 6');
test(waysToSplitArray([100000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 19, 'Test 7');
test(waysToSplitArray([-1,-2,-3,-4,-5]), 3, 'Test 8');
test(waysToSplitArray([5,5,5,5,5]), 2, 'Test 9');
test(waysToSplitArray([-1,1,-1,1,-1]), 2, 'Test 10');
test(waysToSplitArray([0,0,0,0,0]), 4, 'Test 11');
test(waysToSplitArray([1,2,3,4,5]), 1, 'Test 12');
test(waysToSplitArray([1,1,1,1,1,1,1,1,1,1]), 5, 'Test 13');
test(waysToSplitArray([100000,-50000,50000,-50000,50000]), 4, 'Test 14');
test(waysToSplitArray([-100000,100000,-100000,100000,-100000]), 2, 'Test 15');
test(waysToSplitArray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100000]), 0, 'Test 16');
test(waysToSplitArray([100000,100000,100000,100000,100000]), 2, 'Test 17');
test(waysToSplitArray([100000,200000,300000,400000,500000]), 1, 'Test 18');
test(waysToSplitArray([5,4,3,2,1]), 3, 'Test 19');
test(waysToSplitArray([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 6, 'Test 20');
test(waysToSplitArray([1,-2,3,-4,5,-6,7,-8,9,-10]), 7, 'Test 21');
test(waysToSplitArray([10,4,-8,7]), 2, 'Test 22');
test(waysToSplitArray([2,3,1,0]), 2, 'Test 23');
test(waysToSplitArray([5, -5, 10, -10, 15, -15, 20, -20, 25, -25, 30, -30, 35, -35, 40, -40, 45, -45, 50, -50]), 19, 'Test 24');
test(waysToSplitArray([-1, -1, -1, -1, -1, 5, -1, -1, -1, -1, -1]), 5, 'Test 25');
test(waysToSplitArray([100000, 0, -50000, 50000, -100000, 0, 50000, -50000, 100000, 0]), 6, 'Test 26');
test(waysToSplitArray([10000, 20000, 30000, -10000, -20000, -30000, 40000]), 4, 'Test 27');
test(waysToSplitArray([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80, 90, -90, 100, -100]), 19, 'Test 28');
test(waysToSplitArray([100000, -50000, 25000, -12500, 6250, -3125, 1562]), 6, 'Test 29');
test(waysToSplitArray([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000]), 3, 'Test 30');
test(waysToSplitArray([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]), 6, 'Test 31');
test(waysToSplitArray([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000]), 7, 'Test 32');
test(waysToSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]), 10, 'Test 33');
test(waysToSplitArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 34');
test(waysToSplitArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 19, 'Test 35');
test(waysToSplitArray([1, 2, 3, 4, 5, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), 4, 'Test 36');
test(waysToSplitArray([50, 25, 12, 6, 3, 1, 0, -1, -3, -6, -12, -25, -50, 100, 200]), 0, 'Test 37');
test(waysToSplitArray([-100,200,-300,400,-500,600,-700,800,-900,1000,-1100,1200,-1300,1400,-1500,1600,-1700,1800,-1900,2000]), 5, 'Test 38');
test(waysToSplitArray([100, 200, 300, 400, 500, -600, -700, -800, -900, -1000]), 8, 'Test 39');
test(waysToSplitArray([10000, 20000, 30000, -60000, 40000, 50000, -100000, 60000, 70000, 80000]), 1, 'Test 40');
test(waysToSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100, -90, -80, -70, -60, -50, -40, -30, -20, -10]), 19, 'Test 41');
test(waysToSplitArray([-5, -1, -4, -2, -3, -6, -7, -8, -9, -10]), 6, 'Test 42');
test(waysToSplitArray([100, -100, 200, -200, 300, -300, 400, -400, 500, -500]), 9, 'Test 43');
test(waysToSplitArray([10, 20, 30, 40, 50, -10, -20, -30, -40, -50, 60, 70, 80, 90, 100]), 2, 'Test 44');
test(waysToSplitArray([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 20, 'Test 45');
test(waysToSplitArray([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000, 5500]), 0, 'Test 46');
test(waysToSplitArray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 15, 'Test 47');
test(waysToSplitArray([0,0,0,0,0,0,0,0,0,0]), 9, 'Test 48');
test(waysToSplitArray([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), 2, 'Test 49');
test(waysToSplitArray([5, 2, -3, 1, 4, 6, -2, 8, -5, 3]), 4, 'Test 50');
test(waysToSplitArray([-150, -140, -130, -120, -110, -100, -90, -80, -70, -60, -50, -40, -30, -20, -10]), 4, 'Test 51');
test(waysToSplitArray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 19, 'Test 52');
test(waysToSplitArray([100000, 0, -100000, 0, 100000, 0, -100000, 0, 100000]), 4, 'Test 53');
test(waysToSplitArray([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15,-16,17,-18,19,-20]), 15, 'Test 54');
test(waysToSplitArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 0, 'Test 55');
test(waysToSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 15, 'Test 56');
test(waysToSplitArray([5,2,3,7,4,1,6,8]), 3, 'Test 57');
test(waysToSplitArray([1,1,1,1,1,1,1,1,1,1,-10]), 10, 'Test 58');
test(waysToSplitArray([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 59');
test(waysToSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -550]), 10, 'Test 60');
test(waysToSplitArray([5, 1, 4, 2, 3, 6, 7, 8, 9, 10]), 3, 'Test 61');
test(waysToSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), 0, 'Test 62');
test(waysToSplitArray([10,-10,20,-20,30,-30,40,-40,50,-50]), 9, 'Test 63');
test(waysToSplitArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 10, 'Test 64');
test(waysToSplitArray([10, -5, 20, -10, 30, -15, 40, -20, 50, -25, 60, -30]), 4, 'Test 65');
test(waysToSplitArray([100, 200, 300, -600, 100, 200, 300]), 3, 'Test 66');
test(waysToSplitArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 6, 'Test 67');
test(waysToSplitArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 19, 'Test 68');
test(waysToSplitArray([50000, 40000, 30000, 20000, 10000, -10000, -20000, -30000, -40000, -50000]), 9, 'Test 69');
test(waysToSplitArray([100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000]), 3, 'Test 70');
test(waysToSplitArray([10,20,30,40,50,60,70,80,90,100]), 3, 'Test 71');
test(waysToSplitArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8]), 15, 'Test 72');
test(waysToSplitArray([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 7, 'Test 73');
test(waysToSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 4, 'Test 74');
test(waysToSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3, 'Test 75');
test(waysToSplitArray([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 55]), 0, 'Test 76');
test(waysToSplitArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 9, 'Test 77');
test(waysToSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 6, 'Test 78');
test(waysToSplitArray([100000, 50000, -25000, -25000, 10000, -10000, 1000, -1000, 100, -100, 10, -10, 1, -1]), 13, 'Test 79');
test(waysToSplitArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -1]), 21, 'Test 80');
test(waysToSplitArray([10, -20, 30, -40, 50, -60, 70, -80, 90, -100]), 7, 'Test 81');
test(waysToSplitArray([100000, -50000, 50000, -50000, 50000, -50000, 50000, -50000, 50000, -50000]), 9, 'Test 82');
test(waysToSplitArray([100000,-50000,-30000,-20000,10000,5000,2500,1250,625,313]), 8, 'Test 83');
test(waysToSplitArray([50000, 50000, -100000, 25000, 25000, 25000, 25000]), 4, 'Test 84');
test(waysToSplitArray([1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0,1,0,-1,0]), 19, 'Test 85');
test(waysToSplitArray([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 2, 'Test 86');
test(waysToSplitArray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]), 10, 'Test 87');
test(waysToSplitArray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 6, 'Test 88');
test(waysToSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 10]), 0, 'Test 89');
test(waysToSplitArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 20, 'Test 90');
test(waysToSplitArray([99999, -99999, 99998, -99998, 99997, -99997, 99996, -99996, 99995, -99995]), 9, 'Test 91');
test(waysToSplitArray([100000, 200000, 300000, 400000, 500000, -1500000]), 5, 'Test 92');
test(waysToSplitArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 9, 'Test 93');
test(waysToSplitArray([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80]), 15, 'Test 94');
test(waysToSplitArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 95');
test(waysToSplitArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 96');
test(waysToSplitArray([1, 1, 1, 1, 1, -5, 1, 1, 1, 1, 1]), 5, 'Test 97');
test(waysToSplitArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 7, 'Test 98');
test(waysToSplitArray([-100, -200, -300, -400, -500, 600, 700, 800, 900, 1000]), 1, 'Test 99');
test(waysToSplitArray([-10000, 10000, -10000, 10000, -10000, 10000, -10000, 10000, -10000, 10000]), 4, 'Test 100');
test(waysToSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100, -90, -80, -70, -60]), 11, 'Test 101');
test(waysToSplitArray([-5,-2,-3,-7,-4,-1,-6,-8]), 4, 'Test 102');
test(waysToSplitArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 4, 'Test 103');
test(waysToSplitArray([5, 3, -5, 2, -3, 3, 9, -10, 4]), 6, 'Test 104');
test(waysToSplitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55]), 10, 'Test 105');

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
