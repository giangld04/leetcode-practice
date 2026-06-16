// Test: 617. Merge Two Binary Trees
// 60 test cases from LeetCodeDataset
// Run: node test.js

const { mergeTrees } = require("./solution");

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

console.log("\n617. Merge Two Binary Trees\n");

test(mergeTrees(root1), Error: Solution.mergeTrees[] missing 2 required positional arguments: 'root1' and 'root2', 'Test 1');
test(mergeTrees(root2), Error: Solution.mergeTrees[] missing 2 required positional arguments: 'root1' and 'root2', 'Test 2');
test(mergeTrees([5,3,2,1], [2,4,6,8]), [7, 7, 8, 9], 'Test 3');
test(mergeTrees([3,4,5,1,2], [4,5,6]), [7, 9, 11, 1, 2], 'Test 4');
test(mergeTrees([5,3,6,2,4,null,null,1,null,null,null,null,null,null,8], [7,4,5,null,null,null,null,3,6,9]), [12, 7, 11, 2, 4, null, null, 1], 'Test 5');
test(mergeTrees([3,4,5,1,2], [0,-1,-2,-3,-4]), [3, 3, 3, -2, -2], 'Test 6');
test(mergeTrees([1,2,null,3], [1,null,2,null,3]), [2, 2, 2, 3, null, null, 3], 'Test 7');
test(mergeTrees([1,-2,3], [-4,5,-6]), [-3, 3, -3], 'Test 8');
test(mergeTrees([], [1]), [1], 'Test 9');
test(mergeTrees([1,2,3,4,5,6,7], [7,6,5,4,3,2,1]), [8, 8, 8, 8, 8, 8, 8], 'Test 10');
test(mergeTrees([5,3,2,1], [2,1,3]), [7, 4, 5, 1], 'Test 11');
test(mergeTrees([5,3,6,2,4,null,7], [1,2,null,3,null,6,8]), [6, 5, 6, 5, 4, null, 7, 6, 8], 'Test 12');
test(mergeTrees([5,15,50,10,20], [10,20,60,5,15,55,65]), [15, 35, 110, 15, 35, 55, 65], 'Test 13');
test(mergeTrees([1,null,2,null,3], [2,null,3,null,4]), [3, null, 5, null, 7], 'Test 14');
test(mergeTrees([-1,-2,-3], [-4,-5,-6]), [-5, -7, -9], 'Test 15');
test(mergeTrees([5,3,2,1], [1,2,3,4]), [6, 5, 5, 5], 'Test 16');
test(mergeTrees([1,2,3,4,5,6,7], [1,2,3,4,5,6,7]), [2, 4, 6, 8, 10, 12, 14], 'Test 17');
test(mergeTrees([], []), null, 'Test 18');
test(mergeTrees([1,null,2,null,3], [2,1,null,3,null]), [3, 1, 2, 3, null, null, 3], 'Test 19');
test(mergeTrees([1], [1,2]), [2, 2], 'Test 20');
test(mergeTrees([4,3,null,1,2], [4,3,null,2,1]), [8, 6, null, 3, 3], 'Test 21');
test(mergeTrees([5,10,15], [3,6,9,12,15,18,21]), [8, 16, 24, 12, 15, 18, 21], 'Test 22');
test(mergeTrees([3,4,5,1,2], [4,1,2]), [7, 5, 7, 1, 2], 'Test 23');
test(mergeTrees([1,null,2,null,3,null,4,null,5], [5,null,4,null,3,null,2,null,1]), [6, null, 6, null, 6, null, 6, null, 6], 'Test 24');
test(mergeTrees([1,null,2,null,3], [4,5,6,7,8,9,10]), [5, 5, 8, 7, 8, 9, 13], 'Test 25');
test(mergeTrees([1,2], [3]), [4, 2], 'Test 26');
test(mergeTrees([5,3,8], [1,2,3]), [6, 5, 11], 'Test 27');
test(mergeTrees([1,2], [3,4,5,6]), [4, 6, 5, 6], 'Test 28');
test(mergeTrees([1,2], []), [1, 2], 'Test 29');
test(mergeTrees([1,2,3,4,5,6,7], [8,9,10,11,12,13,14]), [9, 11, 13, 15, 17, 19, 21], 'Test 30');
test(mergeTrees([1,2,3], [4,5,6]), [5, 7, 9], 'Test 31');
test(mergeTrees([1,2], [3,4,5]), [4, 6, 5], 'Test 32');
test(mergeTrees([1,null,2], [3,4]), [4, 4, 2], 'Test 33');
test(mergeTrees([10,15,12,8,null,9,10], [12,13,10,9,null,10,11]), [22, 28, 22, 17, null, 19, 21], 'Test 34');
test(mergeTrees([1,2,3,4,5], [5,4,3,2,1]), [6, 6, 6, 6, 6], 'Test 35');
test(mergeTrees([1,null,2,null,3], [4,null,5,null,6]), [5, null, 7, null, 9], 'Test 36');
test(mergeTrees([1,null,2,null,3], [3,null,2,null,1]), [4, null, 4, null, 4], 'Test 37');
test(mergeTrees([1,3,null,5,3], [2,1,3,null,4,null,7]), [3, 4, 3, 5, 7, null, 7], 'Test 38');
test(mergeTrees([3,5,2,6,7], [4,1,2,null,null,3,8]), [7, 6, 4, 6, 7, 3, 8], 'Test 39');
test(mergeTrees([3,4,5,1,2], [2,4,6]), [5, 8, 11, 1, 2], 'Test 40');
test(mergeTrees([1,null,2,null,3,null,4,null,5], [1,null,2,null,3,null,4,null,5]), [2, null, 4, null, 6, null, 8, null, 10], 'Test 41');
test(mergeTrees([3,4,5,1,2], [6,7,8,9,10]), [9, 11, 13, 10, 12], 'Test 42');
test(mergeTrees([5,3,8], [6,2,4]), [11, 5, 12], 'Test 43');
test(mergeTrees([1,null,2,null,3,null,4,null,5,null,6], [6,5,4,3,2,1]), [7, 5, 6, 3, 2, 1, 3, null, null, null, null, null, null, null, 4, null, 5, null, 6], 'Test 44');
test(mergeTrees([1], []), [1], 'Test 45');
test(mergeTrees([5,3,8,1,4,null,9,null,null,2,6,null,null,null,null,null,7], [5,3,8,1,null,null,9,null,4,null,7,null,null,2,6]), [10, 6, 16, 2, 4, null, 18, null, 4, 2, 6, null, 7, null, null, null, null, null, 7, 2, 6], 'Test 46');
test(mergeTrees([5,3,8,1,4,7,10], [3,2,5,null,4,null,6]), [8, 5, 13, 1, 8, 7, 16], 'Test 47');
test(mergeTrees([5,3,8,1,4,null,9], [7,2,10,null,null,6,null]), [12, 5, 18, 1, 4, 6, 9], 'Test 48');
test(mergeTrees([100,-99,98], [99,100,-99]), [199, 1, -1], 'Test 49');
test(mergeTrees([5,3,2,1], [3,4,6]), [8, 7, 8, 1], 'Test 50');
test(mergeTrees([1,null,3], [2,4]), [3, 4, 3], 'Test 51');
test(mergeTrees([1,2,3], []), [1, 2, 3], 'Test 52');
test(mergeTrees([], [1,2,3]), [1, 2, 3], 'Test 53');
test(mergeTrees([1,3,null,null,2], [2,null,3,null,4]), [3, 3, 3, null, 2, null, 4], 'Test 54');
test(mergeTrees([1], [2,null,3]), [3, null, 3], 'Test 55');
test(mergeTrees([10,15,20], [20,15,10]), [30, 30, 30], 'Test 56');
test(mergeTrees([1,2,3,4,5,6,7], []), [1, 2, 3, 4, 5, 6, 7], 'Test 57');
test(mergeTrees([1,3,2,5], [2,1,3,null,4,null,7]), [3, 4, 5, 5, 4, null, 7], 'Test 58');
test(mergeTrees([], [2,1,3]), [2, 1, 3], 'Test 59');
test(mergeTrees([1,2,3,4,5], [6,7,8,9,10]), [7, 9, 11, 13, 15], 'Test 60');

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
