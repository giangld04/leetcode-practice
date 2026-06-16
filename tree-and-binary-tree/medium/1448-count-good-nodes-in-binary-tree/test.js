// Test: 1448. Count Good Nodes In Binary Tree
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { goodNodes } = require("./solution");

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

console.log("\n1448. Count Good Nodes In Binary Tree\n");

test(goodNodes([3,1,4,3,null,1,5]), 4, 'Test 1');
test(goodNodes([-10,-20,-5,-15,-30]), 2, 'Test 2');
test(goodNodes([5, 10, 20, 15, 25]), 5, 'Test 3');
test(goodNodes([-10, null, -20, null, -30]), 1, 'Test 4');
test(goodNodes([3,3,null,4,2]), 3, 'Test 5');
test(goodNodes([5,4,6,3,8,5,7]), 4, 'Test 6');
test(goodNodes([5,3,6,2,4,null,7]), 3, 'Test 7');
test(goodNodes([-10000, -5000, -2500]), 3, 'Test 8');
test(goodNodes([1]), 1, 'Test 9');
test(goodNodes([1,null,2,null,3,null,4,null,5]), 5, 'Test 10');
test(goodNodes([20, 10, 25, 5, 15, 22, 30, 2, 7, 12, 18, 21, 24, 28, 32]), 4, 'Test 11');
test(goodNodes([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 12');
test(goodNodes([5,3,6,2,4,null,7,1,null,null,null,null,8]), 4, 'Test 13');
test(goodNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 25, 'Test 14');
test(goodNodes([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11]), 11, 'Test 15');
test(goodNodes([7, 6, 8, 5, null, 9, 10, 4, null, null, null, 1, 11, null, 12]), 6, 'Test 16');
test(goodNodes([3,1,4,3,null,1,5,2,null,null,3,null,null,1,6]), 5, 'Test 17');
test(goodNodes([1,2,2,2,3,null,null,4,null,5,6]), 8, 'Test 18');
test(goodNodes([5,3,6,2,4,null,8,1,null,null,null,7,9]), 4, 'Test 19');
test(goodNodes([-10,-20,-30,-40,-50,null,-60]), 1, 'Test 20');
test(goodNodes([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 21');
test(goodNodes([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 22');
test(goodNodes([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 23');
test(goodNodes([1, 3, 2, 5, 3, null, 9, 4, null, 6, null, 7, 8, 10, 11]), 9, 'Test 24');
test(goodNodes([10,5,15,3,7,null,18]), 3, 'Test 25');
test(goodNodes([4,2,6,1,3,5,7,-2,null,null,null,null,null,null,-3]), 3, 'Test 26');
test(goodNodes([20,10,30,5,15,25,35,3,7,13,18,23,27,33,37]), 4, 'Test 27');
test(goodNodes([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 52, 'Test 28');
test(goodNodes([-5, -4, -3, -6, -2, -4, -2, -8, -1, -3, -1, -5, -1, -7, -1]), 9, 'Test 29');
test(goodNodes([100,50,200,25,75,150,250,10,30,60,80,125,175,225,275]), 4, 'Test 30');
test(goodNodes([5,3,6,2,4,7,8,1,9,null,null,null,null,null,null,null,null]), 5, 'Test 31');
test(goodNodes([50,25,75,10,30,60,80,null,20,28,35,null,55,70,null,15,null,22,26,29,33,38,52,57,72,null,13,17,null,null,21,null,24,27,null,null,31,36,null,null,51,54,56,58,71,null,null,null,12,null,null,null,16,null,19,null,null,23,null,null,32,null,34,37,null,50,null,53,null,59,null,69,73,null,null,11,null,14,null,18,null,21,null,null,25,null,30,null,null,null,null,null,49,null,52,null,68,null,72,null,10,null,13,null,null,null,17,null,19,null,null,25,null,29,null,33,null,null,48,null,null,51,null,67,null,71,null,null,null,null,9,null,12,null,null,null,16,null,18,null,null,24,null,null,28,null,null,32,null,34,null,null,47,null,null,50,null,66,null,70,null,null,null,null,8,null,11,null,null,null,15,null,null,null,17,null,19,null,null,23,null,null,27,null,null,31,null,34,null,null,46,null,null,49,null,65,null,69,null,null,null,null,7,null,10,null,null,null,14,null,null,null,17,null,19,null,null,23,null,null,27,null,null,31,null,33,null,null,45,null,null,48,null,64,null,68,null,null,null,null,6,null,9,null,null,null,13,null,null,null,16,null,18,null,null,22,null,null,26,null,null,30,null,33,null,null,44,null,null,47,null,63,null,67,null,null,null,null,5,null,8,null,null,null,12,null,null,null,15,null,null,null,17,null,19,null,null,22,null,null,26,null,null,30,null,32,null,null,43,null,null,46,null,62,null,66,null,null,null,null,4,null,7,null,null,null,11,null,null,null,14,null,null,null,16,null,18,null,null,21,null,null,25,null,null,29,null,32,null,null,42,null,null,45,null,61,null,65,null,null,null,null,3,null,6,null,null,null,10,null,null,null,13,null,null,null,15,null,null,null,18,null,20,null,null,24,null,null,28,null,31,null,33,null,null,41,null,null,44,null,60,null,64,null,null,null,null,2,null,5,null,null,null,9,null,null,null,12,null,null,null,14,null,null,null,17,null,19,null,null,23,null,null,27,null,null,31,null,33,null,null,40,null,null,43,null,59,null,63,null,null,null,null,1,null,4,null,null,null,8,null,null,null,11,null,null,null,13,null,null,null,16,null,18,null,null,22,null,null,26,null,null,30,null,32,null,null,39,null,null,42,null,58,null,62,null,null,null,null]), 10, 'Test 32');
test(goodNodes([10, 5, 15, 3, 7, 13, 18, 1, 4, 6, 8, 12, 14, 17, 20]), 4, 'Test 33');
test(goodNodes([8,3,10,1,6,null,14,null,null,4,7,13]), 3, 'Test 34');
test(goodNodes([8,5,9,7,6,12,null,null,null,null,15,null,18]), 5, 'Test 35');
test(goodNodes([8,3,10,1,6,null,14,null,null,4,7,12,16]), 4, 'Test 36');
test(goodNodes([1,null,2,null,null,3,null,null,null,null,4,null,null,null,null,5]), 2, 'Test 37');
test(goodNodes([10,5,15,3,7,null,18,1,null,6]), 3, 'Test 38');
test(goodNodes([100,-20,-30,-40,-50,-60,-70,-80,-90,-100,101,102,103,104,105]), 6, 'Test 39');
test(goodNodes([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 40');
test(goodNodes([100,-50,50,-100,0,25,75,-200,-100,-75,-25,0,100,150,200]), 4, 'Test 41');
test(goodNodes([20,10,20,5,15,15,25,3,7,12,18,22,30]), 5, 'Test 42');
test(goodNodes([5, 1, 6, 0, 2, 5, 8, -1, null, null, 3, null, 4, 7, 9]), 4, 'Test 43');
test(goodNodes([1,3,2,5,3,null,9,2,null,8,null,null,null,null,4]), 7, 'Test 44');
test(goodNodes([5,4,8,11,null,13,4,7,2,null,null,null,1]), 4, 'Test 45');
test(goodNodes([1,2,3,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,null,null,12,13,null,null,null,null,null,14,15]), 13, 'Test 46');
test(goodNodes([100, 50, 150, 25, 75, 125, 175, 10, 30, 60, 80, 110, 140, 160, 180]), 4, 'Test 47');
test(goodNodes([3,1,4,3,null,1,5,2,null,null,null,null,null,6,null]), 5, 'Test 48');
test(goodNodes([1, 2, 3, 4, 5, null, 6, 7, 8, null, 9, null, 10, 11, 12]), 12, 'Test 49');
test(goodNodes([-10, null, -5, -6, null, -8, null, -7]), 2, 'Test 50');
test(goodNodes([15,10,20,8,12,16,25,null,null,null,null,null,19,22,30]), 4, 'Test 51');
test(goodNodes([3,2,4,null,null,3,5,null,null,2,null,null,null,6]), 3, 'Test 52');
test(goodNodes([20,10,25,5,15,22,30,null,null,null,null,21,27,28,35]), 5, 'Test 53');
test(goodNodes([10,5,15,3,7,null,18,2,8]), 3, 'Test 54');
test(goodNodes([-10,9,20,null,null,15,7,null,null,null,12]), 3, 'Test 55');
test(goodNodes([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 56');
test(goodNodes([1,2,3,null,5,null,4,null,null,null,6]), 6, 'Test 57');
test(goodNodes([7,3,15,1,5,10,20,-1,2,null,6,8,12,18,25]), 4, 'Test 58');
test(goodNodes([5,4,6,3,7,null,null,2,null,null,null,null,null,8]), 3, 'Test 59');
test(goodNodes([10,10,10,10,10,null,null,10,10]), 7, 'Test 60');
test(goodNodes([10,9,8,7,6,5,4,3,2,1,null,null,null,null,null,null,null,null,null]), 1, 'Test 61');
test(goodNodes([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), 4, 'Test 62');
test(goodNodes([5,3,6,2,4,null,7,1,null,3,4]), 3, 'Test 63');
test(goodNodes([1,-10,-5,6,5,null,-8,3,12,-9,null,null,-3,null,null,null,null]), 4, 'Test 64');
test(goodNodes([-1,-2,-3,-4,-5,null,null,-6,-7]), 1, 'Test 65');
test(goodNodes([5,1,4,2,3,null,null,null,null,4,5]), 2, 'Test 66');
test(goodNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 67');
test(goodNodes([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100]), 1, 'Test 68');
test(goodNodes([5,4,6,3,null,null,7,2,null,null,null,8]), 4, 'Test 69');
test(goodNodes([10,5,15,3,7,13,18,1,null,6,null,14,null,null,null,8]), 3, 'Test 70');
test(goodNodes([-10,-5,20,null,0,15,25,-8,null,null,5,null,null,null,null]), 5, 'Test 71');
test(goodNodes([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 30, 'Test 72');
test(goodNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 73');
test(goodNodes([5,4,6,3,8,5,7,2,9,10,null,null,11,12,13]), 9, 'Test 74');
test(goodNodes([100,50,150,25,75,125,175,10,40,60,80,110,140,160,180]), 4, 'Test 75');
test(goodNodes([1,3,2,5,3,null,9,2,8,2,null,null,null,null,4,4,null,null,5]), 8, 'Test 76');
test(goodNodes([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 15, 'Test 77');
test(goodNodes([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), 15, 'Test 78');
test(goodNodes([8, 3, 10, 1, 6, 9, 14, null, 2, 4, 7, null, 11, 13, 15]), 5, 'Test 79');
test(goodNodes([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 11, 'Test 80');
test(goodNodes([10,5,15,3,7,12,18,1,6,8,11,13,17,19,20]), 7, 'Test 81');
test(goodNodes([10,5,15,3,7,12,20,1,4,6,8,11,13,18,25]), 4, 'Test 82');
test(goodNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 83');
test(goodNodes([-1, -2, -3, -4, -5, -6, -7, -8, -9]), 1, 'Test 84');
test(goodNodes([1,2,3,4,5,null,6,null,7,null,8,null,9,null,10,null,11]), 11, 'Test 85');

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
