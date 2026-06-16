// Test: 1696. Jump Game Vi
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { maxResult } = require("./solution");

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

console.log("\n1696. Jump Game Vi\n");

test(maxResult([1,2,3,4,5,6,7,8,9,10], 5), 55, 'Test 1');
test(maxResult([1,-1,-2,4,-7,3], 2), 7, 'Test 2');
test(maxResult([10,-5,-2,4,0,3], 3), 17, 'Test 3');
test(maxResult([-1,-2,-3,-4,-5], 4), -6, 'Test 4');
test(maxResult([5,5,5,5,5,5,5,5,5,5], 5), 50, 'Test 5');
test(maxResult([-10000,-10000,-10000,-10000,-10000], 2), -30000, 'Test 6');
test(maxResult([-1,-2,-3,-4,-5], 2), -9, 'Test 7');
test(maxResult([5, -1, 5], 2), 10, 'Test 8');
test(maxResult([1], 1), 1, 'Test 9');
test(maxResult([5,4,3,2,1], 1), 15, 'Test 10');
test(maxResult([100, -100, 100, -100, 100], 2), 300, 'Test 11');
test(maxResult([10000,10000,10000,10000,10000], 5), 50000, 'Test 12');
test(maxResult([5,6,-4,2,1], 3), 14, 'Test 13');
test(maxResult([1,-5,-20,4,-1,3,-6,-3], 2), 0, 'Test 14');
test(maxResult([1,2,3,4,5], 1), 15, 'Test 15');
test(maxResult([-5, -1, -5], 1), -11, 'Test 16');
test(maxResult([1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000], 2), 4000, 'Test 17');
test(maxResult([1,2,3,4,5,6,7,8,9,10], 10), 55, 'Test 18');
test(maxResult([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2), 9, 'Test 19');
test(maxResult([1000, -500, 2000, -100, 4000, -200, 3000, -300, 5000, -400], 5), 14600, 'Test 20');
test(maxResult([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 5), -16, 'Test 21');
test(maxResult([1,-10,5,6,-4,-5,10,1,2], 4), 25, 'Test 22');
test(maxResult([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 55, 'Test 23');
test(maxResult([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 4), -19, 'Test 24');
test(maxResult([5,-1,-2,-3,-4,-5,6,-1,2,-3,-4,-5,10], 5), 22, 'Test 25');
test(maxResult([1000,-2000,3000,-4000,5000,-6000,7000,-8000,9000], 6), 25000, 'Test 26');
test(maxResult([10, 20, 30, 40, 50, -60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 4), 1140, 'Test 27');
test(maxResult([3,2,-6,5,0,-3,2,1], 3), 13, 'Test 28');
test(maxResult([100,200,300,400,500,600,700,800,900,1000], 2), 5500, 'Test 29');
test(maxResult([10,20,30,40,50,60,70,80,90,100], 10), 550, 'Test 30');
test(maxResult([1,1,1,1,1,1,1,1,1,1], 1), 10, 'Test 31');
test(maxResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 55, 'Test 32');
test(maxResult([1,2,3,4,5,6,7,8,9,10], 1), 55, 'Test 33');
test(maxResult([10000,-5000,5000,6000,-2000,3000,7000,-8000,4000,10000], 5), 45000, 'Test 34');
test(maxResult([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], 4), 29, 'Test 35');
test(maxResult([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1], 5), 9, 'Test 36');
test(maxResult([1000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1000], 10), 2000, 'Test 37');
test(maxResult([-10000,10000,-10000,10000,-10000,10000,-10000,10000,-10000,10000], 5), 40000, 'Test 38');
test(maxResult([1,-10,5,6,-2,3,7,-8,4,10], 3), 36, 'Test 39');
test(maxResult([10,20,30,40,50,60,70,80,90,100], 1), 550, 'Test 40');
test(maxResult([10000,-9999,10000,-9999,10000,-9999,10000,-9999,10000,-9999], 2), 40001, 'Test 41');
test(maxResult([5,-1,3,-2,7,1,-4,8,-3,2], 4), 26, 'Test 42');
test(maxResult([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 0, 'Test 43');
test(maxResult([3,-2,-2,2,-1,2,1,-5,4], 3), 12, 'Test 44');
test(maxResult([100,-100,100,-100,100,-100,100], 2), 400, 'Test 45');
test(maxResult([1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000], 5), 4000, 'Test 46');
test(maxResult([100,-100,200,-200,300,-300,400,-400,500,-500], 3), 1000, 'Test 47');
test(maxResult([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1], 4), 7, 'Test 48');
test(maxResult([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 10), 9, 'Test 49');
test(maxResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 210, 'Test 50');
test(maxResult([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 15), 1, 'Test 51');
test(maxResult([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10], 2), 55, 'Test 52');
test(maxResult([3,-1,2,-5,6,2,-1,4], 4), 17, 'Test 53');
test(maxResult([1,-5,4,2,-2,-1,3,1,-1,2,-3,4,-5,6], 3), 23, 'Test 54');
test(maxResult([5,-10,4,-2,3,100,-100,200,-200,300], 4), 612, 'Test 55');
test(maxResult([10,5,2,7,8,9,3,5,2,1,5,6,7,8,9,1,2,3,4,5], 3), 102, 'Test 56');
test(maxResult([10,-5,-20,4,-1,3,-6,-3,5,2], 4), 24, 'Test 57');
test(maxResult([1,-10,100,-1000,10000], 3), 10101, 'Test 58');
test(maxResult([-1,-5,-2,-4,-10,-20], 2), -27, 'Test 59');
test(maxResult([5, -10, 15, -20, 25, -30, 35, -40, 45, -50, 55, -60, 65, -70, 75, -80], 5), 240, 'Test 60');
test(maxResult([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 15, 'Test 61');
test(maxResult([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], 3), -220, 'Test 62');
test(maxResult([3,-1,-1,-1,10,5], 2), 17, 'Test 63');
test(maxResult([10,-1,10,-1,10,-1,10,-1,10,-1], 5), 49, 'Test 64');
test(maxResult([3,-1,2,1,-4,2,3,-5,4], 4), 15, 'Test 65');
test(maxResult([100, -100, 50, -50, 25, -25, 12, -12, 6, -6], 4), 187, 'Test 66');
test(maxResult([1,-5,10,20,-30,5,15], 4), 51, 'Test 67');
test(maxResult([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3), 55, 'Test 68');
test(maxResult([1000, -1000, 500, -500, 250, -250, 125, -125, 62, -62, 31, -31], 5), 1937, 'Test 69');
test(maxResult([5,3,2,1,7,6,4,8,9], 3), 45, 'Test 70');
test(maxResult([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], 10), -110, 'Test 71');
test(maxResult([1, -10, 2, -20, 3, -30, 4, -40, 5, -50], 4), -35, 'Test 72');
test(maxResult([100, -50, 200, -300, 400, -500, 600, -700, 800], 3), 2100, 'Test 73');
test(maxResult([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), 0, 'Test 74');
test(maxResult([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2), 4, 'Test 75');
test(maxResult([100,-50,-100,200,-300,400,500], 3), 1200, 'Test 76');
test(maxResult([10000,-5000,2000,-1000,5000,2000,-2000,3000,4000,-1000], 3), 25000, 'Test 77');
test(maxResult([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15,16,-17,18,-19,20], 5), 109, 'Test 78');
test(maxResult([0,0,0,0,0,0,0,0,0,0], 5), 0, 'Test 79');
test(maxResult([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 20, 'Test 80');
test(maxResult([1,-1,1,-1,1,-1,1,-1,1,-1], 2), 4, 'Test 81');
test(maxResult([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 210, 'Test 82');
test(maxResult([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5], 5), 50, 'Test 83');
test(maxResult([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 20), 0, 'Test 84');
test(maxResult([10,9,8,7,6,5,4,3,2,1], 5), 55, 'Test 85');
test(maxResult([10,-10,10,-10,10,-10,10,-10,10,-10], 2), 40, 'Test 86');
test(maxResult([1,-1,2,-2,3,-3,4,-4,5,-5], 4), 10, 'Test 87');
test(maxResult([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100,-110,-120,-130,-140,-150], 3), -460, 'Test 88');
test(maxResult([100,200,300,400,500], 5), 1500, 'Test 89');
test(maxResult([100,100,100,100,100,100,100,100,100,100], 5), 1000, 'Test 90');
test(maxResult([1,2,3,4,5,6,7,8,9,10], 2), 55, 'Test 91');
test(maxResult([0,0,0,0,0,0,0,0,0,0], 10), 0, 'Test 92');

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
