// Test: 653. Two Sum Iv Input Is A Bst
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { findTarget } = require("./solution");

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

console.log("\n653. Two Sum Iv Input Is A Bst\n");

test(findTarget([5,3,6,2,4,null,7], 28), false, 'Test 1');
test(findTarget([5,3,6,2,4,null,7], 9), true, 'Test 2');
test(findTarget([100,50,150,25,75,125,175,10,30,60,90,110,140,160,180], 150), true, 'Test 3');
test(findTarget([2,0,3,-4,1], 5), true, 'Test 4');
test(findTarget([100,50,150,25,75,125,175,10,30,60,90,110,140,160,190], 500), false, 'Test 5');
test(findTarget([2,1,3], 4), true, 'Test 6');
test(findTarget([8,5,10,3,7,9,12], 14), true, 'Test 7');
test(findTarget([1,0,2], 3), true, 'Test 8');
test(findTarget([7,3,9,1,5,null,11,0,2,4,6,8,10,12], 19), true, 'Test 9');
test(findTarget([-10,-5,0,-7,-8,5,7,6,8,null,null,3,1], 10), true, 'Test 10');
test(findTarget([2,0,3,-4,1], -1), true, 'Test 11');
test(findTarget([50,25,75,12,37,63,87,6,18,30,45,57,70,80,90], 500), false, 'Test 12');
test(findTarget([5,3,6,2,4,null,7,null,null,null,null,null,8], 14), true, 'Test 13');
test(findTarget([7,3,15,null,null,null,20], 17), false, 'Test 14');
test(findTarget([10,5,15,3,7,13,18,1,null,6], 18), true, 'Test 15');
test(findTarget([5,3,6,2,4,null,7], 11), true, 'Test 16');
test(findTarget([2,0,3,-4,1], 0), false, 'Test 17');
test(findTarget([5,3,6,2,4,null,7], 8), true, 'Test 18');
test(findTarget([15,9,20,7,11,17,22,3,8,10,12,16,18,21,23], 25), true, 'Test 19');
test(findTarget([8,5,10,3,6,9,11], 21), true, 'Test 20');
test(findTarget([5,3,6,2,4,null,7,1], 3), true, 'Test 21');
test(findTarget([100,50,150,25,75,125,175,10,30,60,90,110,140,160,190], 200), true, 'Test 22');
test(findTarget([5,3,6,2,4,null,7,1], 8), true, 'Test 23');
test(findTarget([0,-1,2,null,-2,null,3], 0), true, 'Test 24');
test(findTarget([5,1,8,null,4,null,null,3,null,2,null,null,null,0,null,-1], 8), true, 'Test 25');
test(findTarget([1,0,2,-1,null,null,null,-2,null], -1), true, 'Test 26');
test(findTarget([10000,5000,15000,2500,7500,12500,17500], 20000), true, 'Test 27');
test(findTarget([1,0,2], 1), true, 'Test 28');
test(findTarget([-10,-5,0,-7,-8,5,7,6,8,null,null,3,1], -5), true, 'Test 29');
test(findTarget([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15], 29), true, 'Test 30');
test(findTarget([1,0,2,null,-1], 1), true, 'Test 31');
test(findTarget([1,0,2,null,null,2,null], 2), true, 'Test 32');
test(findTarget([10,5,15,3,7,12,18], 27), true, 'Test 33');
test(findTarget([20,10,30,5,15,25,35], 30), true, 'Test 34');
test(findTarget([50,25,75,12,37,63,87,6,18,30,45,57,70,80,90], 45), false, 'Test 35');
test(findTarget([-10,-5,0,1,null,-6,null,-8], -16), true, 'Test 36');
test(findTarget([2,0,3,-4,1], 6), false, 'Test 37');
test(findTarget([1,0,2,-1,null,null,null], -1), true, 'Test 38');
test(findTarget([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190], 125), true, 'Test 39');
test(findTarget([10,1,null,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], 18), true, 'Test 40');
test(findTarget([100,50,150,25,75,125,175,10,30,60,90,110,140,160,180], 200), true, 'Test 41');
test(findTarget([5,3,6,2,4,null,7,null,null,null,null,null,8], 15), true, 'Test 42');
test(findTarget([10000,5000,15000,2500,7500,12500,17500], 25000), true, 'Test 43');
test(findTarget([2,1,3], 5), true, 'Test 44');
test(findTarget([-10,-20,-5,-15,null,-30], -30), true, 'Test 45');
test(findTarget([20,15,30,10,17,25,40,5,12,null,null,null,null,35,45], 52), true, 'Test 46');
test(findTarget([20,15,25,10,18,22,30,5,13,null,null,17,19,null,null,3,8], 25), true, 'Test 47');
test(findTarget([15,10,20,8,12,17,25,6,9,11,13,16,18,22,28], 33), true, 'Test 48');
test(findTarget([100,50,150,25,75,125,175,10,35,60,90,110,140,160,190], 200), true, 'Test 49');
test(findTarget([10,5,15,3,7,12,18], 25), true, 'Test 50');
test(findTarget([50,25,75,12,37,63,87,6,18,30,45,57,70,80,90], 110), true, 'Test 51');
test(findTarget([20,10,30,5,15,25,35], 60), true, 'Test 52');
test(findTarget([-10,-5,0,-7,-8,5,7,6,8,null,null,3,1], 0), true, 'Test 53');
test(findTarget([-1,-2,-3,-4,-5], -8), true, 'Test 54');
test(findTarget([5,3,6,2,4,null,7,1,null,null,null,null,8], 15), true, 'Test 55');
test(findTarget([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15], 27), true, 'Test 56');
test(findTarget([50,25,75,12,37,63,87,6,18,30,45,57,70,80,90], 150), true, 'Test 57');
test(findTarget([10,5,15,3,7,13,18,1,null,6], 26), false, 'Test 58');
test(findTarget([8,4,12,2,6,10,14,1,null,3,5,7,9,11,13,15], 30), false, 'Test 59');
test(findTarget([10,8,12,7,9,11,13], 21), true, 'Test 60');
test(findTarget([20,10,30,5,15,25,35,2,7,12,18,23,27,32,37], 45), true, 'Test 61');
test(findTarget([7,3,15,null,null,9,20], 22), true, 'Test 62');
test(findTarget([8,4,12,2,6,10,14,1,null,5,7,9,11,13,15], 26), true, 'Test 63');
test(findTarget([3,1,4,null,2], 6), true, 'Test 64');
test(findTarget([2,0,3,-4,1], -3), true, 'Test 65');
test(findTarget([2,0,3,-4,1], 2), true, 'Test 66');
test(findTarget([3,1,4,null,2], 5), true, 'Test 67');
test(findTarget([1,0,2,null,-1], -1), true, 'Test 68');
test(findTarget([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190], 200), true, 'Test 69');
test(findTarget([10,5,15,3,7,null,18], 17), true, 'Test 70');
test(findTarget([5,4,6,3,null,7], 9), true, 'Test 71');
test(findTarget([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 300), true, 'Test 72');
test(findTarget([10,5,15,3,7,null,18,1,null,null,null,null,22], 33), true, 'Test 73');
test(findTarget([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 200), true, 'Test 74');
test(findTarget([10,5,15,3,7,null,18], 30), false, 'Test 75');
test(findTarget([10,5,15,3,7,null,18], 25), true, 'Test 76');
test(findTarget([2,0,3,-4,1], -2), true, 'Test 77');
test(findTarget([45,30,60,20,35,50,70,10,25,32,37,48,55,65,75,5,15,22,28,33,36,42,47,52,58,62,68,72,78,80], 85), true, 'Test 78');
test(findTarget([7,3,15,1,5,9,20,null,null,null,6], 11), true, 'Test 79');
test(findTarget([5,3,6,2,4,null,7], 5), true, 'Test 80');
test(findTarget([10,5,15,3,7,null,18], 18), true, 'Test 81');
test(findTarget([10,5,15,3,7,12,18], 15), true, 'Test 82');
test(findTarget([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 250), true, 'Test 83');
test(findTarget([0,-1,2,null,-3,null,4], -1), true, 'Test 84');
test(findTarget([20,10,30,5,15,25,35], 40), true, 'Test 85');
test(findTarget([5,5,5,5,5,5,5], 10), true, 'Test 86');
test(findTarget([3,2,4,null,1], 6), true, 'Test 87');
test(findTarget([1], 2), false, 'Test 88');
test(findTarget([0,-1,2,-2,null,null,3,-3,null,null,null], 0), true, 'Test 89');

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
