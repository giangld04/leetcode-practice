// Test: 1373. Maximum Sum Bst In Binary Tree
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { maxSumBST } = require("./solution");

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

console.log("\n1373. Maximum Sum Bst In Binary Tree\n");

test(maxSumBST([1,null,2,null,3,null,4,null,5]), 15, 'Test 1');
test(maxSumBST([5,4,8,3,null,6,3]), 7, 'Test 2');
test(maxSumBST([5,4,6,null,null,3,7]), 16, 'Test 3');
test(maxSumBST([10,5,15,3,7,null,18]), 58, 'Test 4');
test(maxSumBST([10,5,15,1,8,null,7]), 14, 'Test 5');
test(maxSumBST([-4,-2,-5]), 0, 'Test 6');
test(maxSumBST([1,null,10,-5,20]), 25, 'Test 7');
test(maxSumBST([2,1,3]), 6, 'Test 8');
test(maxSumBST([0,null,-1]), 0, 'Test 9');
test(maxSumBST([1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]), 20, 'Test 10');
test(maxSumBST([4,3,null,1,2]), 2, 'Test 11');
test(maxSumBST([2,1,3,null,null,null,4]), 10, 'Test 12');
test(maxSumBST([3,1,4,null,null,2]), 6, 'Test 13');
test(maxSumBST([15,10,20,5,13,18,25,2,7,11,14,16,19,23,27,1,3,6,8,9,12,17,21,22,24,26,28,29,30]), 32, 'Test 14');
test(maxSumBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 55, 'Test 15');
test(maxSumBST([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,null,null,null,null,null,null,null,null,null]), 11, 'Test 16');
test(maxSumBST([2,1,3,0,4,null,null,-2,null,null,5,null,null,null,null,null,6]), 9, 'Test 17');
test(maxSumBST([10,5,15,3,7,12,20,1,4,6,8,11,13,17,25,null,null,null,null,null,16,null,null,null,18,null,null,null,null,22,null,null,null,null,null,null,null,null,24,null,null,null,null,null,null,23]), 84, 'Test 18');
test(maxSumBST([5,3,12,1,4,null,15,null,null,null,null,null,18,13,17]), 17, 'Test 19');
test(maxSumBST([10,5,15,3,7,12,18,null,null,null,null,11,14]), 95, 'Test 20');
test(maxSumBST([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85,5,15,null,28,32,38,43,48,52,58,63,68,72,78,82,88,90,92,95,98,100]), 1051, 'Test 21');
test(maxSumBST([1,1,1,1,1,null,1]), 1, 'Test 22');
test(maxSumBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 45, 'Test 23');
test(maxSumBST([3,2,5,null,null,4,6]), 20, 'Test 24');
test(maxSumBST([10,5,15,1,8,12,20,0,4,9,11,14,18,13,19,null,null,3,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1]), 19, 'Test 25');
test(maxSumBST([10,5,15,1,8,null,7,0,6,null,9]), 17, 'Test 26');
test(maxSumBST([3,1,5,0,2,4,6,-1]), 20, 'Test 27');
test(maxSumBST([5,3,8,1,4,7,10,0,2,6,9,5,11]), 23, 'Test 28');
test(maxSumBST([3,2,5,1,null,4,null]), 15, 'Test 29');
test(maxSumBST([2,1,3,null,4]), 5, 'Test 30');
test(maxSumBST([2,1,3,null,null,0,5]), 8, 'Test 31');
test(maxSumBST([10,5,15,1,8,null,20,-2,null,null,6,null,null,null,null,null,25]), 35, 'Test 32');
test(maxSumBST([30,10,50,5,20,40,60,1,null,15,25,35,45,55,65,null,3,7,13,17,23,27,33,37,43,47,53,57,63]), 63, 'Test 33');
test(maxSumBST([1,null,-1,-2,null,null,-3,null,-4,null,-5]), 0, 'Test 34');
test(maxSumBST([15,10,20,8,12,16,25,7,9,11,13,15,17,22,27]), 142, 'Test 35');
test(maxSumBST([10,5,15,1,8,null,20,null,null,6,9]), 74, 'Test 36');
test(maxSumBST([2,1,3,null,null,null,4,null,5]), 15, 'Test 37');
test(maxSumBST([10,5,15,1,8,7,20]), 42, 'Test 38');
test(maxSumBST([5,3,9,-2,4,null,10,null,null,1,6,null,null,8]), 19, 'Test 39');
test(maxSumBST([5,2,13,1,5,10,20,null,null,null,null,8,15]), 33, 'Test 40');
test(maxSumBST([10,5,15,1,8,null,20,-3,null,null,6,null,null,null,26]), 35, 'Test 41');
test(maxSumBST([2,1,3,0,5,null,7,0,6,null,null,9]), 9, 'Test 42');
test(maxSumBST([5,2,6,null,4,null,7]), 24, 'Test 43');
test(maxSumBST([2,1,3,null,null,0,4]), 7, 'Test 44');
test(maxSumBST([10,5,15,1,8,7,20,0,null,null,null,6,12,null,18]), 25, 'Test 45');
test(maxSumBST([10,5,15,1,8,null,7,null,null,6,9]), 29, 'Test 46');
test(maxSumBST([10,5,15,1,8,null,20,-1,null,null,6,null,null,null,null,null,26,null,27]), 59, 'Test 47');
test(maxSumBST([10,5,15,1,8,null,20,null,null,6,9,null,null,16,25]), 35, 'Test 48');
test(maxSumBST([5,2,6,1,3,null,null,null,null,4]), 6, 'Test 49');
test(maxSumBST([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 50');
test(maxSumBST([10,5,10,2,8,null,null,1,null,null,9]), 25, 'Test 51');
test(maxSumBST([10,5,15,3,7,null,18,1,null,6]), 65, 'Test 52');
test(maxSumBST([15,10,20,8,12,16,25,6,9,11,13,14,17,19,30]), 74, 'Test 53');
test(maxSumBST([5,2,3,null,null,null,null,1]), 3, 'Test 54');
test(maxSumBST([1,2,3,4,5,6,7]), 7, 'Test 55');
test(maxSumBST([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 50, 'Test 56');
test(maxSumBST([0,-10,10,-20,0,-5,5,null,null,null,null,null,null,-15,-1,0,1,5,null,null,null,null,null,null,-15,-1,0,1,5]), 5, 'Test 57');
test(maxSumBST([4,2,7,2,3,5,null,2,null,null,null,null,null,1]), 12, 'Test 58');
test(maxSumBST([5,2,13,null,null,10,15,6,12,11,14,13,16]), 16, 'Test 59');
test(maxSumBST([1,null,2,null,3,null,4]), 10, 'Test 60');
test(maxSumBST([10,5,15,3,7,13,18,1,4,6,8,11,14,17,19]), 151, 'Test 61');
test(maxSumBST([50,30,80,20,40,70,90,null,null,25]), 240, 'Test 62');
test(maxSumBST([10,5,15,3,7,12,18,1,null,6,8,null,11,13,17,19]), 21, 'Test 63');
test(maxSumBST([10,5,15,3,7,12,20,1,null,6,8,11,13,null,19]), 36, 'Test 64');
test(maxSumBST([10,5,15,1,8,7,20,null,null,6,9,11,19]), 29, 'Test 65');
test(maxSumBST([5,2,6,null,null,3,8,null,4,null,null,7]), 8, 'Test 66');
test(maxSumBST([50,30,70,20,40,60,80,null,null,25,null,null,55,65,null,null,75,85]), 145, 'Test 67');
test(maxSumBST([50,30,70,20,40,60,80,15,25,35,45,55,65,75,85]), 750, 'Test 68');
test(maxSumBST([5,1,4,null,null,3,6]), 13, 'Test 69');
test(maxSumBST([50,30,60,10,40,55,70,null,45,null,null,null,65,80]), 120, 'Test 70');
test(maxSumBST([50,30,60,5,20,45,70,null,null,15,25,35,48,65,75,null,null,null,null,40,50]), 210, 'Test 71');
test(maxSumBST([10,5,15,1,8,12,20,null,null,6,9,11,13,null,null,null,null,null,18,22]), 47, 'Test 72');
test(maxSumBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), 210, 'Test 73');
test(maxSumBST([3,2,5,null,3,null,9]), 14, 'Test 74');
test(maxSumBST([2,1,3,null,null,null,null,0,4]), 6, 'Test 75');
test(maxSumBST([4,2,6,1,3,5,7,0,null,null,null,null,null,null,8]), 36, 'Test 76');
test(maxSumBST([5,4,6,3,7,null,null,2,8,1,9]), 17, 'Test 77');
test(maxSumBST([1,null,10,null,null,5,null,null,15]), 11, 'Test 78');
test(maxSumBST([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 78, 'Test 79');
test(maxSumBST([20,10,30,5,15,null,null,3,7,13,18]), 121, 'Test 80');
test(maxSumBST([5,2,3,null,null,1]), 4, 'Test 81');
test(maxSumBST([5,2,13,null,null,9,21,7,11,14,25]), 107, 'Test 82');
test(maxSumBST([50,10,60,5,20,null,null,3,7,15,35,25,45,17,25]), 70, 'Test 83');
test(maxSumBST([10,5,15,3,7,13,18,1,null,6,8,12,14,null,19]), 131, 'Test 84');
test(maxSumBST([100,50,150,20,75,125,175,10,30,60,80,110,140,160,180]), 1465, 'Test 85');
test(maxSumBST([4,2,6,1,3,5,7]), 28, 'Test 86');
test(maxSumBST([10,5,15,3,7,12,18,null,null,null,null,10,14]), 69, 'Test 87');
test(maxSumBST([10,5,15,1,8,12,20,0,4,9,11,14,18,13,19]), 19, 'Test 88');
test(maxSumBST([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), 1470, 'Test 89');
test(maxSumBST([10,5,15,3,7,12,20,1,4,6,8,11,13,18,25,null,null,null,null,null,null,null,null,null,null,null,14,null,16,null,null,17,null,null,null,null,null,null,null,21,null,24,null,null,null,null,19,null,22,null,23,null,null,26,null,27]), 34, 'Test 90');
test(maxSumBST([4,2,7,1,3,6,9,0,1,5,8,null,null,null,null,null,null,null,null,null]), 22, 'Test 91');
test(maxSumBST([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,null,12,28,55,65,77,85,105,115,135,145,155,165,178,185,190]), 190, 'Test 92');
test(maxSumBST([50,30,60,5,20,45,70,null,null,10,25,40,55,65,80]), 415, 'Test 93');
test(maxSumBST([5,3,6,2,4,null,null,1]), 21, 'Test 94');
test(maxSumBST([3,2,5,null,null,4,6,3,7]), 14, 'Test 95');
test(maxSumBST([5,2,13,null,null,8,14,3,12,7,11,null,15]), 18, 'Test 96');

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
