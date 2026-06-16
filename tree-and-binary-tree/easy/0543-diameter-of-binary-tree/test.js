// Test: 543. Diameter Of Binary Tree
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { diameterOfBinaryTree } = require("./solution");

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

console.log("\n543. Diameter Of Binary Tree\n");

test(diameterOfBinaryTree([1,2,3,4,5,6,7]), 4, 'Test 1');
test(diameterOfBinaryTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]), 8, 'Test 2');
test(diameterOfBinaryTree([1,2,3,4,5]), 3, 'Test 3');
test(diameterOfBinaryTree([1,null,2,null,3,null,4,null,5]), 4, 'Test 4');
test(diameterOfBinaryTree([3,1,4,null,2]), 3, 'Test 5');
test(diameterOfBinaryTree([1,2,3]), 2, 'Test 6');
test(diameterOfBinaryTree([1,2,3,4,null,null,5]), 4, 'Test 7');
test(diameterOfBinaryTree([1,2,null,4,5]), 2, 'Test 8');
test(diameterOfBinaryTree([1,2]), 1, 'Test 9');
test(diameterOfBinaryTree([4,-7,-3,null,null,-9,-3,9,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]), 8, 'Test 10');
test(diameterOfBinaryTree([4,2,null,3,null,1]), 3, 'Test 11');
test(diameterOfBinaryTree([1,2,3,null,null,4,5]), 3, 'Test 12');
test(diameterOfBinaryTree([3,1,2]), 2, 'Test 13');
test(diameterOfBinaryTree([1]), 0, 'Test 14');
test(diameterOfBinaryTree([1,null,2,null,3]), 2, 'Test 15');
test(diameterOfBinaryTree([1,null,2,null,null,3,null,null,4,null,null,5]), 1, 'Test 16');
test(diameterOfBinaryTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 9, 'Test 17');
test(diameterOfBinaryTree([1,null,2,3,null,null,4,5,null,null,6,null,7,null,8]), 7, 'Test 18');
test(diameterOfBinaryTree([1,null,2,3,null,null,4,5,null,null,null,null,null,null,6]), 4, 'Test 19');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 8, 'Test 20');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,null,null,6,null,null,7]), 6, 'Test 21');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,8,null,9,null,10,null,11]), 6, 'Test 22');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,null,null,10,11,12,13,14,15,null,null,null,null,16]), 8, 'Test 23');
test(diameterOfBinaryTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 14, 'Test 24');
test(diameterOfBinaryTree([1,2,3,4,null,6,7,null,null,8,9,null,null,null,null,10]), 6, 'Test 25');
test(diameterOfBinaryTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 26');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,null,null,6,7,null,null,8,9]), 6, 'Test 27');
test(diameterOfBinaryTree([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 28');
test(diameterOfBinaryTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), 7, 'Test 29');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 8, 'Test 30');
test(diameterOfBinaryTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 10, 'Test 31');
test(diameterOfBinaryTree([1,2,3,4,5,null,6,7,null,null,null,null,8]), 6, 'Test 32');
test(diameterOfBinaryTree([1,2,3,null,null,null,4,null,null,null,null,null,5,null,null,null,null,6]), 3, 'Test 33');
test(diameterOfBinaryTree([1,2,3,null,null,4,5,6,7,8,9,10,11,12,13]), 5, 'Test 34');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,null,null,6,null,null,7,null,null,8]), 6, 'Test 35');
test(diameterOfBinaryTree([1,null,2,null,null,null,3,null,null,null,null,4,null,null,null,null,5]), 1, 'Test 36');
test(diameterOfBinaryTree([1,2,3,4,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 37');
test(diameterOfBinaryTree([1,2,null,4,null,6,7,8,9]), 4, 'Test 38');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,null,null,null,null,6,7,null,null,8,null,null,9]), 4, 'Test 39');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,null,null,10,11,null,null,12,13]), 7, 'Test 40');
test(diameterOfBinaryTree([1,2,3,4,null,5,6,null,7,8,null,null,9,null,null,10,11]), 7, 'Test 41');
test(diameterOfBinaryTree([1,2,3,4,5,null,null,6,7,8,9,null,null,null,null,10,11]), 5, 'Test 42');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 43');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 8, 'Test 44');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 7, 'Test 45');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 6, 'Test 46');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,8,null,null,null,9,null,null,null,null,10,null,null,null,null,11]), 7, 'Test 47');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,10,null,null,11,null,null,12,null,null,13,null,null,14]), 8, 'Test 48');
test(diameterOfBinaryTree([1,2,3,null,4,null,null,5,6]), 4, 'Test 49');
test(diameterOfBinaryTree([1,2,null,3,null,4,null,5]), 4, 'Test 50');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,null,8,9,null,null,null,null,10,11]), 6, 'Test 51');
test(diameterOfBinaryTree([1,2,3,4,5,null,6,null,null,null,null,7,null,null,8,null,null,null,null,null,null,9,null,null,10]), 6, 'Test 52');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11]), 6, 'Test 53');
test(diameterOfBinaryTree([1,2,3,null,4,5,null,null,6,7,null,8,null,null,9]), 8, 'Test 54');
test(diameterOfBinaryTree([1,2,3,null,4,null,null,5,null,null,6]), 5, 'Test 55');
test(diameterOfBinaryTree([1,2,3,null,4,5,6,7,8,9,10,null,null,11,12]), 7, 'Test 56');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 8, 'Test 57');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,null,6,null,null,7,null,8]), 7, 'Test 58');
test(diameterOfBinaryTree([1,2,3,null,null,null,null,null,null,null,4,null,null,null,null,5]), 2, 'Test 59');
test(diameterOfBinaryTree([1,2,3,null,null,4,null,null,5,null,6,null,null,7,null,null,8,null,9]), 5, 'Test 60');
test(diameterOfBinaryTree([1,2,null,null,3,null,null,null,4,null,null,null,null,5,null,null,null,null,null,6]), 2, 'Test 61');
test(diameterOfBinaryTree([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 14, 'Test 62');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13]), 10, 'Test 63');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,null,9,null,10,null,11,null,12]), 7, 'Test 64');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,12,13]), 7, 'Test 65');
test(diameterOfBinaryTree([1,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7]), 2, 'Test 66');
test(diameterOfBinaryTree([1,null,2,null,3,null,4,null,5,null,6,null,7]), 6, 'Test 67');
test(diameterOfBinaryTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 14, 'Test 68');
test(diameterOfBinaryTree([1,2,null,3,4,null,null,5,6,null,null,7,8,null,null,9,10]), 5, 'Test 69');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,null,10,null,11,null,12,null,13,null,14,null,15]), 7, 'Test 70');
test(diameterOfBinaryTree([1,2,3,4,5,null,null,6,null,null,7,8,null,null,null,null,9]), 6, 'Test 71');
test(diameterOfBinaryTree([1,2,3,null,null,4,5,6,7,null,null,null,null,8,9]), 5, 'Test 72');
test(diameterOfBinaryTree([1,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), 2, 'Test 73');
test(diameterOfBinaryTree([1,2,3,null,4,null,5,6,7]), 5, 'Test 74');
test(diameterOfBinaryTree([1,2,3,4,5,null,null,6,7,null,null,8,9]), 5, 'Test 75');
test(diameterOfBinaryTree([1,2,3,4,5,null,null,6,7,8,9,null,null,null,10,null,null,11,null,null,12]), 7, 'Test 76');
test(diameterOfBinaryTree([1,2,3,null,4,null,5,null,6]), 5, 'Test 77');
test(diameterOfBinaryTree([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 78');
test(diameterOfBinaryTree([1,null,2,null,3,null,4,null,5,null,6]), 5, 'Test 79');
test(diameterOfBinaryTree([1,2,3,4,5,null,6,7,8,null,null,null,9,10,11]), 7, 'Test 80');
test(diameterOfBinaryTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 81');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,6,7,8,9,null,null,10]), 7, 'Test 82');
test(diameterOfBinaryTree([1,2,3,4,null,null,5,null,null,6,7,8,9,10,11,12,13,14,15]), 7, 'Test 83');
test(diameterOfBinaryTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 9, 'Test 84');
test(diameterOfBinaryTree([1,2,null,3,4,5,null,null,6,7,null,null,8,9]), 7, 'Test 85');
test(diameterOfBinaryTree([1,2,3,null,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 11, 'Test 86');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,null,null,null,12,13]), 8, 'Test 87');
test(diameterOfBinaryTree([1,2,3,null,4,null,5,null,null,6,7]), 5, 'Test 88');
test(diameterOfBinaryTree([1,2,3,4,5,null,null,6,7,8,9,10,11,12,13]), 5, 'Test 89');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,10,11,12]), 6, 'Test 90');
test(diameterOfBinaryTree([1,2,3,null,null,4,5,null,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), 11, 'Test 91');
test(diameterOfBinaryTree([1,2,3,4,5,6,7,8,9,null,null,null,null,10,11,12,13,14,15]), 7, 'Test 92');
test(diameterOfBinaryTree([1,null,2,3,null,4,null,5,null,6,null,7]), 6, 'Test 93');

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
