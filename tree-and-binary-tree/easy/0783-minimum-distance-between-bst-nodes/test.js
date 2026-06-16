// Test: 783. Minimum Distance Between Bst Nodes
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { minDiffInBST } = require("./solution");

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

console.log("\n783. Minimum Distance Between Bst Nodes\n");

test(minDiffInBST([4,2,6,1,3]), 1, 'Test 1');
test(minDiffInBST([10,5,15,3,7,null,18]), 2, 'Test 2');
test(minDiffInBST([2,1,3]), 1, 'Test 3');
test(minDiffInBST([1,0,48,null,null,12,49]), 1, 'Test 4');
test(minDiffInBST([90,69,null,49,89,null,52]), 1, 'Test 5');
test(minDiffInBST([4,2,7,1,3,6,9]), 1, 'Test 6');
test(minDiffInBST([4,2,null,1,3]), 1, 'Test 7');
test(minDiffInBST([50,25,75,15,35,65,85,10,20,30,40,60,70,80,90]), 5, 'Test 8');
test(minDiffInBST([5,3,7,2,4,6,8,1,null,null,null,null,null,null,9]), 1, 'Test 9');
test(minDiffInBST([30,15,45,10,20,40,50,5,12,18,25,35,42,47,55]), 2, 'Test 10');
test(minDiffInBST([100,50,150,25,75,125,175,10,30,60,80,110,130,160,180]), 5, 'Test 11');
test(minDiffInBST([88,44,132,22,66,110,154,11,33,55,77,88,99,121,143]), -11, 'Test 12');
test(minDiffInBST([100,50,150,25,75,125,175,10,30,60,85,115,140,160,185]), 5, 'Test 13');
test(minDiffInBST([30,15,45,10,20,40,50,5,12,17,25,35,42,48,55,1,8,14,16,19,23,28,33,37,41,44,46,49,53,52,56,58,59,60]), -57, 'Test 14');
test(minDiffInBST([8,3,10,null,6,null,null,4,7,9,12]), -6, 'Test 15');
test(minDiffInBST([2,1,null,0]), 1, 'Test 16');
test(minDiffInBST([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), 1, 'Test 17');
test(minDiffInBST([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), -1, 'Test 18');
test(minDiffInBST([20,10,30,5,15,25,35,3,7,12,18,22,28,33,37,1,null,null,null,null,13,null,null,21,27,null,31,36,null,null,null,14,17,null,23,26,32,34,null,null,null,null,null,null,null,null,16]), -13, 'Test 19');
test(minDiffInBST([27,18,35,12,24,30,40,9,15,21,26,28,33,38,45]), 1, 'Test 20');
test(minDiffInBST([8,3,13,null,7,10,18,null,null,9,12,15,20]), 1, 'Test 21');
test(minDiffInBST([100,50,150,25,75,125,175,10,30,60,90,110,140,160,180]), 5, 'Test 22');
test(minDiffInBST([50,25,75,10,40,60,90,5,15,30,45,55,65,85,95]), 5, 'Test 23');
test(minDiffInBST([70,30,110,10,50,90,130,5,25,40,60,80,100,120,140]), 5, 'Test 24');
test(minDiffInBST([50,25,75,10,40,60,90,null,null,30,45,55,70,null,null,null,null,35,42,52,65,68,72,85,87,95]), -53, 'Test 25');
test(minDiffInBST([60,30,90,15,45,75,105,5,25,35,50,65,85,95,110,3,10,20,32,40,48,55,63,68,72,80,88,92,98,102,108,113,115,118,120]), -110, 'Test 26');
test(minDiffInBST([33,16,50,13,18,45,55,8,14,17,22,40,48,52,60]), 1, 'Test 27');
test(minDiffInBST([5,3,10,2,4,null,15,1,null,6,8,13,18]), -3, 'Test 28');
test(minDiffInBST([8,3,10,null,4,9,12,null,null,7]), -1, 'Test 29');
test(minDiffInBST([2,1,3,0,4,2,5,null,null,null,6,null,null,7,8,null,null,9,10]), -5, 'Test 30');
test(minDiffInBST([7,3,15,null,null,9,20]), 2, 'Test 31');
test(minDiffInBST([35,18,45,12,23,40,50,8,16,20,25,38,43,48,55,5,11,14,17,19,22,24,27,32,37,42,47,49,54,57,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,41]), -4, 'Test 32');
test(minDiffInBST([1,2,4,3,5,7,9,6,8,10]), -6, 'Test 33');
test(minDiffInBST([27,14,35,10,19,31,42,4,13,17,23,29,34,39,40,1,7,12,16,18,22,25,26,28,32,36,38,41,43,44,45,46,47,48,49,50]), -45, 'Test 34');
test(minDiffInBST([30,10,45,5,20,35,50,1,7,15,25,32,37,47,55,null,8,null,null,null,null,null,22,null,null,null,null,27,40,48,null,null,null,null,null,null,52]), -18, 'Test 35');
test(minDiffInBST([20,10,30,5,15,25,35,1,7,12,18,23,27,32,37]), 2, 'Test 36');
test(minDiffInBST([60,30,90,10,45,75,105,null,null,35,50,70,80,null,null,55,null,null,null,null,95,100,110,null,null,null,null,null,null,null,115]), -25, 'Test 37');
test(minDiffInBST([30,15,45,10,20,40,50,5,12,17,25,35,48,null,null,null,9,null,null,18,null,23,33,43,47,null,null,null,27,null,null,37,41,44,null,null,null,46]), -17, 'Test 38');
test(minDiffInBST([10,5,15,3,7,13,18,1,null,6,null,11,14,null,null,null,16,19]), -13, 'Test 39');
test(minDiffInBST([20,10,30,5,15,25,35,3,7,12,18,23,28,32,37]), 2, 'Test 40');
test(minDiffInBST([20,10,30,5,15,25,35,1,null,8,12,22,28,32,40]), -3, 'Test 41');
test(minDiffInBST([25,10,40,5,20,35,50,3,7,15,23,30,38,45,55]), 2, 'Test 42');
test(minDiffInBST([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), -10, 'Test 43');
test(minDiffInBST([100000,50000,150000,25000,75000,null,200000]), 25000, 'Test 44');
test(minDiffInBST([22,15,30,10,20,25,40,5,12,18,23,27,35,37,45]), -5, 'Test 45');
test(minDiffInBST([10,5,15,null,null,13,18,12,14,16,19]), 1, 'Test 46');
test(minDiffInBST([60,30,90,20,40,70,100,10,25,35,45,65,80,95,105,5,15,null,32,null,null,55,75,85,98,103,110,1,null,null,12,null,null,33,null,null,null,null,62,null,null,72,null,null,82,null,null,102,null,108,null,null,107,null,109,111]), -107, 'Test 47');
test(minDiffInBST([30,15,45,10,20,40,50,5,12,18,25,35,43,47,55,3,7,11,16,19,23,28,33,38,42,46,49,52,57,60,65,70,2,8,13,17,21,26,31,37,41,44,48,51,54,59,63,67,71,62,66,72,69,73]), -67, 'Test 48');
test(minDiffInBST([10,1,null,null,10]), 0, 'Test 49');
test(minDiffInBST([50,25,75,10,35,60,90,5,20,30,40,55,65,80,95]), 5, 'Test 50');
test(minDiffInBST([100,50,150,25,75,125,175,10,40,60,85,110,140,160,185]), 10, 'Test 51');
test(minDiffInBST([15,9,21,7,11,19,25,6,8,10,12,18,20,24,26]), 1, 'Test 52');
test(minDiffInBST([2,1,3,null,null,2.5]), 0.5, 'Test 53');
test(minDiffInBST([5,3,7,1,4,6,8,null,null,2,null,null,null,null,null]), -1, 'Test 54');
test(minDiffInBST([100,99,101,98,102,97,103,96,104,95,105,94,106,93,107,92,108,91,109,90,110,89,111,88,112,87,113,86,114,85,115]), -18, 'Test 55');
test(minDiffInBST([10,5,15,3,7,13,null,1,4,6,8,12,14,11]), -10, 'Test 56');
test(minDiffInBST([100,50,150,25,75,125,175,10,35,60,85,110,140,160,190]), 10, 'Test 57');
test(minDiffInBST([200,100,300,50,150,250,350,25,75,125,175,225,275,325,375]), 25, 'Test 58');
test(minDiffInBST([50,25,75,10,35,65,85,5,15,30,40,60,70,80,90,2,8,20,32,45,55,63,68,73,78,82,87,92,3,12,18,28,42,48,53,58,62,67,72,77,81,86,91,93]), -77, 'Test 59');
test(minDiffInBST([5,3,8,1,4,7,9]), 1, 'Test 60');
test(minDiffInBST([500,250,750,125,375,625,875,63,188,313,438,563,688,813,938]), 62, 'Test 61');
test(minDiffInBST([500,250,750,125,375,625,875,63,188,292,438,563,713,813,938]), 37, 'Test 62');
test(minDiffInBST([10,5,20,null,null,15,25,null,null,null,30,null,35]), 5, 'Test 63');
test(minDiffInBST([20,10,30,5,15,25,35,1,7,12,18,22,27,32,40]), 2, 'Test 64');
test(minDiffInBST([42,21,63,10,31,52,74,5,15,26,36,47,57,67,83]), 4, 'Test 65');
test(minDiffInBST([20,10,30,5,15,25,35,1,7,12,17,23,27,32,37]), 2, 'Test 66');
test(minDiffInBST([1,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), -2, 'Test 67');
test(minDiffInBST([30,15,45,10,20,40,50,5,12,17,25,35,48,3,8,11,14,16,19,22,27,33,43,47,49]), -42, 'Test 68');
test(minDiffInBST([5,3,6,2,4,null,7,1]), 1, 'Test 69');
test(minDiffInBST([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37]), 2, 'Test 70');
test(minDiffInBST([1, null, 2, null, 3, null, 4, null, 5, null, 6]), 1, 'Test 71');
test(minDiffInBST([3,1,4,null,2]), 1, 'Test 72');
test(minDiffInBST([5,3,9,2,4,null,10,null,1,null,null,null,null,6,11]), -8, 'Test 73');
test(minDiffInBST([77,50,100,30,60,80,110,20,40,55,65,75,90,105,120]), -2, 'Test 74');
test(minDiffInBST([66,33,99,16,49,82,116,8,24,41,58,69,76,106,129]), -6, 'Test 75');
test(minDiffInBST([10,5,15,2,7,12,20,1,null,null,8,null,null,null,9]), -11, 'Test 76');
test(minDiffInBST([10,5,15,2,7,null,18,null,null,6,8]), 1, 'Test 77');
test(minDiffInBST([7,3,15,null,4,10,20,null,null,8,12,18,25,null,null,16,19,22,27,null,null,null,null,null,17,21,23,26,28,null,null,null,null,null,null,14,null,null,null,null,null,6,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,9,null,null,null,null,null,null,11]), -8, 'Test 78');
test(minDiffInBST([50,25,75,12,37,62,87,6,18,31,43,56,69,81,93,3,9,15,21,27,34,40,48,52,60,65,72,78,84,90,96]), 2, 'Test 79');
test(minDiffInBST([100,50,150,25,75,125,175,10,30,60,80,110,130,160,180,5,15,28,40,55,105,120,140,170,190,3,null,8,null,13,null,null,null,null,null,null,null,53,null,null,95,null,null,108,null,null,135,null,null,null,null,null,null,185,null,null,null]), -177, 'Test 80');
test(minDiffInBST([20,10,30,5,15,25,35,2,7,12,18,22,28,32,38]), 2, 'Test 81');
test(minDiffInBST([10,5,15,null,null,12,20,11,13,null,19,18,21,17,22]), -9, 'Test 82');
test(minDiffInBST([12,5,20,3,7,16,24,1,4,6,8,14,18,22,25,null,null,null,null,null,null,null,null,null,null,null,17,19,21,23,26,27]), -10, 'Test 83');
test(minDiffInBST([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), -1, 'Test 84');
test(minDiffInBST([20,10,30,5,15,25,35,2,7,12,17,22,28,32,38]), 2, 'Test 85');
test(minDiffInBST([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), 5, 'Test 86');
test(minDiffInBST([15,9,21,7,12,18,25,5,8,10,14,17,20,23,27]), 1, 'Test 87');
test(minDiffInBST([100,50,150,25,75,125,175,10,30,60,85,115,140,160,185,5,12,20,28,52,70,80,90,105,110,130,135,145,155,165,170,180,190,195,200]), -183, 'Test 88');
test(minDiffInBST([20,10,30,5,15,25,35,1,null,12,18,22,28,null,null,null,null,11,13,null,17,19,21,23,27,29]), -18, 'Test 89');
test(minDiffInBST([45,20,65,10,30,55,75,5,15,25,35,50,60,70,80]), 5, 'Test 90');
test(minDiffInBST([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15,17]), -16, 'Test 91');
test(minDiffInBST([30,15,45,10,20,40,50,5,12,17,25,35,47,3,8,13,18,22,33,38,44,46,48,49,51]), -42, 'Test 92');
test(minDiffInBST([20,10,30,5,15,25,35,null,null,13,17,null,28,32,40]), 2, 'Test 93');
test(minDiffInBST([8,3,15,1,7,12,20,null,null,null,null,null,null,10,14,16,25,null,null,null,null,null,null,22,23,26,28]), -6, 'Test 94');

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
