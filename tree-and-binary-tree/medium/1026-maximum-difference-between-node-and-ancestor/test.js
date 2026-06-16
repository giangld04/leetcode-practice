// Test: 1026. Maximum Difference Between Node And Ancestor
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { maxAncestorDiff } = require("./solution");

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

console.log("\n1026. Maximum Difference Between Node And Ancestor\n");

test(maxAncestorDiff([1,null,2,null,0,3]), 3, 'Test 1');
test(maxAncestorDiff([8,3,10,1,6,null,14,null,null,4,7,13]), 7, 'Test 2');
test(maxAncestorDiff([10,5,15,2,7,null,18,null,null,6,8,13,19]), 9, 'Test 3');
test(maxAncestorDiff([4,2,6,1,3,5,7,null,null,null,null,null,null,null,null]), 3, 'Test 4');
test(maxAncestorDiff([10,9,8,7,6,5,4,3,2,1]), 9, 'Test 5');
test(maxAncestorDiff([20,10,30,5,15,25,35,3,null,12,null,22,28,null,33]), 17, 'Test 6');
test(maxAncestorDiff([5,4,7,3,8,6,9,2,9,10,null,null,null,11,null,12,null,13]), 10, 'Test 7');
test(maxAncestorDiff([10,8,15,7,9,12,20,6,null,10,11,14,18,null,null,null,null,13,17,19,25]), 17, 'Test 8');
test(maxAncestorDiff([10,9,20,null,null,15,7,6,11,14,null,13,null,null,null,null,null,null,12,null,null,null,null,16,null,null,null,null,null,null,null,null,18,null,null,null,null,19,null,null,null,null,null,20,null,null,null,null,null,null,null,null]), 14, 'Test 9');
test(maxAncestorDiff([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190]), 90, 'Test 10');
test(maxAncestorDiff([10,4,17,3,9,15,8,null,null,7,null,null,null,null,null]), 9, 'Test 11');
test(maxAncestorDiff([20,10,30,5,15,25,35,1,7,null,18,null,28,32,40,null,null,null,null,null,null,null,null,27]), 20, 'Test 12');
test(maxAncestorDiff([50,25,75,10,30,60,90,5,null,28,40,55,70,80,95]), 45, 'Test 13');
test(maxAncestorDiff([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), 7, 'Test 14');
test(maxAncestorDiff([50,20,60,10,30,55,70,5,15,25,35,52,58,65,75,1,null,null,null,null,null,null,null,12,null,28,null,null,50,56,62,68,72,78,80]), 71, 'Test 15');
test(maxAncestorDiff([9,4,17,3,6,10,22,null,null,5,7,null,20,null,24]), 15, 'Test 16');
test(maxAncestorDiff([10,null,11,null,12,null,13,null,14,null,15]), 5, 'Test 17');
test(maxAncestorDiff([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 19, 'Test 18');
test(maxAncestorDiff([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), 7, 'Test 19');
test(maxAncestorDiff([20,10,30,5,15,null,35,null,7,null,17,null,null,null,25,40]), 30, 'Test 20');
test(maxAncestorDiff([25,10,35,5,15,30,40,2,7,12,18,27,32,38,45]), 23, 'Test 21');
test(maxAncestorDiff([100,50,150,25,75,125,175,10,30,60,90,110,140,160,180]), 90, 'Test 22');
test(maxAncestorDiff([10,5,15,3,7,13,18,1,null,6,null,11,14,null,null,17,20]), 19, 'Test 23');
test(maxAncestorDiff([15,10,20,8,12,18,25,5,9,11,14,16,19,24,30]), 15, 'Test 24');
test(maxAncestorDiff([7,3,15,1,5,10,20,null,2,null,null,6,12,18,25]), 18, 'Test 25');
test(maxAncestorDiff([9,4,17,3,6,15,22,2,5,12,18,null,null,null,null,16,20,null,null,null,null,null,24,27]), 25, 'Test 26');
test(maxAncestorDiff([4,2,7,1,3,6,9,null,null,null,null,null,12,11,14]), 10, 'Test 27');
test(maxAncestorDiff([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,16]), 15, 'Test 28');
test(maxAncestorDiff([20,10,30,5,15,25,35,3,7,12,18,23,27,32,37]), 17, 'Test 29');
test(maxAncestorDiff([100,90,110,80,95,105,120,70,85,92,98,102,115,118,125]), 30, 'Test 30');
test(maxAncestorDiff([9,4,17,3,6,12,22,2,5,8,11,15,20,24,25]), 16, 'Test 31');
test(maxAncestorDiff([3,1,4,null,2,null,null,null,null,null,null]), 2, 'Test 32');
test(maxAncestorDiff([3,9,20,null,null,15,7]), 17, 'Test 33');
test(maxAncestorDiff([20,10,30,5,15,25,35,2,7,13,17,23,27,33,37]), 18, 'Test 34');
test(maxAncestorDiff([30,15,45,10,20,40,50,5,null,18,null,37,47,null,null,null,null,null]), 25, 'Test 35');
test(maxAncestorDiff([20,10,30,5,15,25,35,3,7,13,18,23,27,33,37]), 17, 'Test 36');
test(maxAncestorDiff([30,20,40,10,25,35,50,5,15,null,null,32,37,45,60]), 30, 'Test 37');
test(maxAncestorDiff([5,3,10,1,6,9,15,null,null,4,7,8,12,null,null,null,null,null,null,null,14]), 10, 'Test 38');
test(maxAncestorDiff([10,5,15,null,7,null,20,null,null,18,25]), 15, 'Test 39');
test(maxAncestorDiff([100,90,110,80,95,105,120,70,85,92,97,102,115,125,130]), 30, 'Test 40');
test(maxAncestorDiff([3,1,4,null,2,null,null,null,null,null,5,null,6,null,7,null,8,null,9]), 2, 'Test 41');
test(maxAncestorDiff([20,10,30,5,15,25,35,2,7,null,13,null,22,28,40]), 20, 'Test 42');
test(maxAncestorDiff([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 14, 'Test 43');
test(maxAncestorDiff([50,20,80,10,30,70,90,null,null,25,35,null,75,85,null]), 40, 'Test 44');
test(maxAncestorDiff([10,5,15,3,7,null,18,1,null,6]), 9, 'Test 45');
test(maxAncestorDiff([50,25,75,10,35,60,90,5,20,30,40,55,65,85,95]), 45, 'Test 46');
test(maxAncestorDiff([50,25,75,12,37,63,87,6,18,31,44,58,69,83,90]), 44, 'Test 47');
test(maxAncestorDiff([2,1,3,null,4,null,null,null,5]), 4, 'Test 48');
test(maxAncestorDiff([5,1,9,null,null,7,10,null,6,null,11]), 6, 'Test 49');
test(maxAncestorDiff([5,2,10,1,3,9,12,null,null,4,6,8,11,13]), 8, 'Test 50');
test(maxAncestorDiff([50,25,75,10,30,60,90,5,15,20,35,55,65,85,100]), 50, 'Test 51');
test(maxAncestorDiff([2,1,3,null,null,4,null,null,5,null,null,null,null,null,6]), 3, 'Test 52');
test(maxAncestorDiff([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75]), 35, 'Test 53');
test(maxAncestorDiff([30,15,45,10,20,40,50,5,12,17,25,35,47,49]), 25, 'Test 54');
test(maxAncestorDiff([50,20,60,10,30,55,70,5,15,25,35,52,65,68,75]), 45, 'Test 55');
test(maxAncestorDiff([2,1,3,4,5,6,7,8,9,10,11,12,13,14,15]), 13, 'Test 56');
test(maxAncestorDiff([25,15,35,10,20,30,40,5,null,null,null,null,null,null,null]), 20, 'Test 57');
test(maxAncestorDiff([1,null,3,null,null,2,4,null,null,null,5]), 2, 'Test 58');
test(maxAncestorDiff([30,25,40,20,28,35,45,15,22,null,27,32,38,43,47]), 17, 'Test 59');
test(maxAncestorDiff([30,15,45,10,20,40,50,5,12,null,25,35,45,48,55]), 25, 'Test 60');
test(maxAncestorDiff([10,5,15,3,7,13,18,1,null,6]), 9, 'Test 61');
test(maxAncestorDiff([5,3,8,1,4,7,9,0,2,6,10]), 7, 'Test 62');
test(maxAncestorDiff([3,1,4,null,2]), 2, 'Test 63');
test(maxAncestorDiff([4,2,6,1,3,5,7,0,null,null,null,null,null,null,8]), 4, 'Test 64');
test(maxAncestorDiff([5,1,9,0,2,null,null,null,4,3]), 5, 'Test 65');
test(maxAncestorDiff([20,10,30,5,15,25,35,1,7,12,18,23,28,33,37]), 19, 'Test 66');
test(maxAncestorDiff([1,0,2,null,null,3,null,null,null,4,null,null,null,5]), 2, 'Test 67');
test(maxAncestorDiff([7,3,15,1,5,10,20,null,null,4,6,8,12,17,23]), 16, 'Test 68');
test(maxAncestorDiff([20,10,30,5,15,null,null,3,7,13,18]), 17, 'Test 69');
test(maxAncestorDiff([2,1,3,null,4,null,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30]), 29, 'Test 70');
test(maxAncestorDiff([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,null,null,null,null,20,null,40,null,90,null,null,130,null,null,null,null,150,null,null,190,null,null]), 150, 'Test 71');
test(maxAncestorDiff([4,2,6,1,3,5,7,0,8,null,null,null,null,null,null]), 7, 'Test 72');
test(maxAncestorDiff([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 73');
test(maxAncestorDiff([4,2,6,1,3,5,7]), 3, 'Test 74');
test(maxAncestorDiff([10,5,15,3,7,null,18,null,null,null,null,16,20]), 10, 'Test 75');
test(maxAncestorDiff([2,1,3,null,null,4]), 2, 'Test 76');
test(maxAncestorDiff([100,50,150,25,75,125,175,12,37,62,87,112,137,162,187,6,18,31,44,58,69,83,90,108,118,128,138,158,168,178,188]), 94, 'Test 77');
test(maxAncestorDiff([9,6,12,4,7,10,14,3,5,8,11,13,15]), 6, 'Test 78');
test(maxAncestorDiff([20,10,30,5,15,25,35,3,7,12,18,22,27,32,37]), 17, 'Test 79');
test(maxAncestorDiff([5,3,9,1,4,null,11,null,null,2,6,10,12]), 7, 'Test 80');
test(maxAncestorDiff([100,50,200,25,75,150,250,12,null,65,85,125,175,225,275]), 175, 'Test 81');
test(maxAncestorDiff([10,5,15,1,8,null,7]), 9, 'Test 82');
test(maxAncestorDiff([5,2,6,1,null,null,8,null,4,null,null,null,7,9]), 8, 'Test 83');
test(maxAncestorDiff([10,5,15,3,7,13,18,1,null,6,null,10,14,null,null,17,null,null,null,null,null,null,null,null]), 16, 'Test 84');
test(maxAncestorDiff([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), 90, 'Test 85');
test(maxAncestorDiff([10,9,20,null,null,15,7,13,18,25,8,17,19,21,30]), 20, 'Test 86');
test(maxAncestorDiff([15,10,20,8,12,null,25,null,null,null,null,22,28]), 13, 'Test 87');

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
