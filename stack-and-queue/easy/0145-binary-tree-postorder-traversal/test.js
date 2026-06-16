// Test: 145. Binary Tree Postorder Traversal
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { postorderTraversal } = require("./solution");

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

console.log("\n145. Binary Tree Postorder Traversal\n");

test(postorderTraversal([2,null,1]), [1, 2], 'Test 1');
test(postorderTraversal([1,2,3,4,5,null,8,null,null,6,7,9]), [4, 6, 7, 5, 2, 9, 8, 3, 1], 'Test 2');
test(postorderTraversal([1,2]), [2, 1], 'Test 3');
test(postorderTraversal([1,null,2,3]), [3, 2, 1], 'Test 4');
test(postorderTraversal([3,1,2]), [1, 2, 3], 'Test 5');
test(postorderTraversal([1]), [1], 'Test 6');
test(postorderTraversal([]), [], 'Test 7');
test(postorderTraversal([1,null,2,null,null,3,null,null,4,null,null,5]), [2, 1], 'Test 8');
test(postorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 9');
test(postorderTraversal([1,null,2,null,null,null,3,null,null,null,null,null,4]), [2, 1], 'Test 10');
test(postorderTraversal([10,5,15,null,null,6,20]), [5, 6, 20, 15, 10], 'Test 11');
test(postorderTraversal([10,5,15,3,7,null,18,1,null,6,9]), [1, 3, 6, 9, 7, 5, 18, 15, 10], 'Test 12');
test(postorderTraversal([10,5,15,3,7,null,18]), [3, 7, 5, 18, 15, 10], 'Test 13');
test(postorderTraversal([1,null,2,3,4]), [3, 4, 2, 1], 'Test 14');
test(postorderTraversal([1,null,2,3,null,null,4,null,5,null,null,null,6]), [5, 4, 3, 2, 1], 'Test 15');
test(postorderTraversal([8,3,10,1,6,null,14,null,null,4,7,13]), [1, 4, 7, 6, 3, 13, 14, 10, 8], 'Test 16');
test(postorderTraversal([6,2,8,0,4,7,9,null,null,3,5]), [0, 3, 5, 4, 2, 7, 9, 8, 6], 'Test 17');
test(postorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 18');
test(postorderTraversal([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), [1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8], 'Test 19');
test(postorderTraversal([9,7,20,5,8,null,null,2,null,null,11]), [2, 5, 11, 8, 7, 20, 9], 'Test 20');
test(postorderTraversal([1,2,null,3,null,null,4,null,5]), [5, 4, 3, 2, 1], 'Test 21');
test(postorderTraversal([5,4,6,3,null,null,7,2,null,1]), [2, 3, 4, 1, 7, 6, 5], 'Test 22');
test(postorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [8, 7, 6, 5, 4, 3, 2, 1], 'Test 23');
test(postorderTraversal([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), [2, 4, 6, 8, 9, 7, 5, 3, 1], 'Test 24');
test(postorderTraversal([1,2,3,null,null,4,null,null,null,null,5]), [2, 4, 3, 1], 'Test 25');
test(postorderTraversal([3,1,2,null,null,4,5]), [1, 4, 5, 2, 3], 'Test 26');
test(postorderTraversal([2,1,3,null,null,4,null,null,null,5]), [1, 4, 3, 2], 'Test 27');
test(postorderTraversal([8,5,1,7,10,12]), [7, 10, 5, 12, 1, 8], 'Test 28');
test(postorderTraversal([1,2,null,3,4,null,null,5,null,null,null,6,null,7,null,null,8,null,null,9,null,null,10]), [3, 5, 4, 2, 1], 'Test 29');
test(postorderTraversal([5,1,6,null,2,null,null,3,4]), [3, 4, 2, 1, 6, 5], 'Test 30');
test(postorderTraversal([9,4,13,2,6,11,16,1,3,5,7,8,10,12,14,15]), [15, 1, 3, 2, 5, 7, 6, 4, 8, 10, 11, 12, 14, 16, 13, 9], 'Test 31');
test(postorderTraversal([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), [2, 1], 'Test 32');
test(postorderTraversal([7,3,15,null,null,9,20]), [3, 9, 20, 15, 7], 'Test 33');
test(postorderTraversal([22,11,33,5,17,27,41,2,6,14,19,25,31,37,45,1,3,4,7,10,13,16,18,21,24,26,29,32,36,38,40,43,44,46,47]), [43, 44, 1, 46, 47, 3, 2, 4, 7, 6, 5, 10, 13, 14, 16, 18, 19, 17, 11, 21, 24, 25, 26, 29, 31, 27, 32, 36, 37, 38, 40, 45, 41, 33, 22], 'Test 34');
test(postorderTraversal([10,5,15,null,null,6,20,null,null,null,30]), [5, 6, 30, 20, 15, 10], 'Test 35');
test(postorderTraversal([1,null,2,null,3,null,null,4,null,null,null,null,5]), [3, 2, 1], 'Test 36');
test(postorderTraversal([5,3,7,2,4,6,8,1,null,null,null,null,null,9,10]), [1, 2, 4, 3, 6, 9, 10, 8, 7, 5], 'Test 37');
test(postorderTraversal([1,2,null,3,4,null,5,null,null,6,7,null,null,null,null,8,null,null,null,null,9]), [6, 7, 5, 3, 4, 2, 1], 'Test 38');
test(postorderTraversal([1,2,3,4,5,6,7,8,null,null,9,null,null,10,11,null,null,null,null,null,null,12,13,null,null,14,15,null,null,null,null,16]), [8, 4, 9, 5, 2, 6, 10, 12, 14, 15, 13, 11, 7, 3, 1], 'Test 39');
test(postorderTraversal([7,3,15,null,null,null,20]), [3, 20, 15, 7], 'Test 40');
test(postorderTraversal([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10]), [10, 8, 6, 4, 2, 9, 7, 5, 3, 1], 'Test 41');
test(postorderTraversal([5,4,6,3,8,7,9]), [3, 8, 4, 7, 9, 6, 5], 'Test 42');
test(postorderTraversal([1,2,3,null,null,4,5,null,null,null,null,6,7]), [2, 4, 5, 3, 1], 'Test 43');
test(postorderTraversal([1,2,3,4,null,5,6]), [4, 2, 5, 6, 3, 1], 'Test 44');
test(postorderTraversal([25,15,35,10,20,30,40,5,null,18,null,null,null,null,22]), [5, 10, 18, 20, 15, 30, 22, 40, 35, 25], 'Test 45');
test(postorderTraversal([1,2,3,4,null,null,5,6,null,7,null,8,null,9]), [8, 6, 4, 2, 9, 7, 5, 3, 1], 'Test 46');
test(postorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [16, 17, 8, 18, 19, 9, 4, 20, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1], 'Test 47');
test(postorderTraversal([5,3,8,1,null,null,10,null,2,null,null,11]), [11, 2, 1, 3, 10, 8, 5], 'Test 48');
test(postorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1], 'Test 49');
test(postorderTraversal([5,3,8,2,4,6,9,1,7,null,null,null,null,null,10]), [1, 7, 2, 4, 3, 6, 10, 9, 8, 5], 'Test 50');
test(postorderTraversal([14,9,21,7,11,17,25,5,8,10,12,15,18,23,27,3,6,null,null,null,null,null,null,null,13,null,null,null,16,null,19,null,22,null,26,null,24,null,null,null,null,20,null,null,null,null,null,28]), [28, 20, 22, 3, 26, 6, 5, 8, 7, 10, 12, 11, 9, 24, 13, 15, 18, 17, 16, 23, 19, 27, 25, 21, 14], 'Test 51');
test(postorderTraversal([1,2,null,3,null,4,null,5]), [5, 4, 3, 2, 1], 'Test 52');
test(postorderTraversal([1,2,3,4,5,null,6,7,null,8,9,null,null,10]), [10, 7, 4, 8, 9, 5, 2, 6, 3, 1], 'Test 53');
test(postorderTraversal([1,2,3,4,5,6,7]), [4, 5, 2, 6, 7, 3, 1], 'Test 54');
test(postorderTraversal([1,null,2,null,3,null,4,null,5]), [5, 4, 3, 2, 1], 'Test 55');
test(postorderTraversal([17,8,26,4,13,22,31,2,6,11,15,19,24,28,34,1,3,5,7,9,10,12,14,16,18,20,23,25,27,29,32,33,35]), [33, 35, 1, 3, 2, 5, 7, 6, 4, 9, 10, 11, 12, 14, 15, 13, 8, 16, 18, 19, 20, 23, 24, 22, 25, 27, 28, 29, 32, 34, 31, 26, 17], 'Test 56');
test(postorderTraversal([1,null,2,null,null,null,3,null,null,null,null,4]), [2, 1], 'Test 57');
test(postorderTraversal([15,7,23,3,11,19,27,1,5,9,13,17,21,25,29,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31]), [2, 4, 1, 6, 8, 5, 3, 10, 12, 9, 14, 16, 13, 11, 7, 18, 20, 17, 22, 24, 21, 19, 26, 28, 25, 30, 31, 29, 27, 23, 15], 'Test 58');
test(postorderTraversal([1,null,2,null,3,null,4]), [4, 3, 2, 1], 'Test 59');
test(postorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,null,17,null,18,null,19]), [16, 8, 17, 9, 4, 18, 10, 19, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1], 'Test 60');
test(postorderTraversal([5,3,8,1,4,7,9,null,2,null,null,null,null,null,10]), [2, 1, 4, 3, 7, 10, 9, 8, 5], 'Test 61');
test(postorderTraversal([7,3,15,null,null,null,9]), [3, 9, 15, 7], 'Test 62');
test(postorderTraversal([1,2,null,3,4,null,5]), [5, 3, 4, 2, 1], 'Test 63');
test(postorderTraversal([25,15,30,10,20,28,35,5,12,17,22,27,33,32,36]), [5, 12, 10, 17, 22, 20, 15, 27, 33, 28, 32, 36, 35, 30, 25], 'Test 64');
test(postorderTraversal([5,3,8,1,4,7,10,null,2,6,9,11]), [2, 1, 6, 9, 4, 3, 11, 7, 10, 8, 5], 'Test 65');
test(postorderTraversal([1,null,2,null,3,null,4,null,5,null,6,null,7]), [7, 6, 5, 4, 3, 2, 1], 'Test 66');
test(postorderTraversal([5,1,4,null,null,3,6]), [1, 3, 6, 4, 5], 'Test 67');
test(postorderTraversal([1,null,2,3,null,null,4,null,5]), [5, 4, 3, 2, 1], 'Test 68');
test(postorderTraversal([1,2,3,null,5,null,6,7,null,8,null,9]), [9, 7, 5, 2, 8, 6, 3, 1], 'Test 69');
test(postorderTraversal([10,5,15,3,7,null,18,1,null,6,8,null,null,null,null,9]), [1, 3, 9, 6, 8, 7, 5, 18, 15, 10], 'Test 70');
test(postorderTraversal([11,7,19,3,9,13,21,1,5,null,8,null,12,17,null,null,null,null,null,14,16,18,20,22,23]), [1, 5, 3, 14, 16, 8, 9, 7, 18, 20, 12, 13, 22, 23, 17, 21, 19, 11], 'Test 71');
test(postorderTraversal([1,null,null,null,2]), [1], 'Test 72');
test(postorderTraversal([1,null,null]), [1], 'Test 73');
test(postorderTraversal([1,null,2,null,null,3,4]), [2, 1], 'Test 74');
test(postorderTraversal([16,8,24,4,12,20,28,2,6,10,14,18,22,26,30,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), [1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8, 17, 19, 18, 21, 23, 22, 20, 25, 27, 26, 29, 31, 30, 28, 24, 16], 'Test 75');
test(postorderTraversal([5,3,8,1,4,7,10,0,2,6,9,null,null,null,null,null,11]), [11, 0, 2, 1, 6, 9, 4, 3, 7, 10, 8, 5], 'Test 76');
test(postorderTraversal([2,null,3,null,4,null,5,null,6,null,7]), [7, 6, 5, 4, 3, 2], 'Test 77');
test(postorderTraversal([1,null,2,null,3,null,4,null,5,null,6]), [6, 5, 4, 3, 2, 1], 'Test 78');
test(postorderTraversal([1,2,3,4,5,6,7,8,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14]), [8, 14, 12, 9, 4, 5, 2, 13, 10, 6, 11, 7, 3, 1], 'Test 79');
test(postorderTraversal([1,null,2,null,null,3,null,4]), [2, 1], 'Test 80');
test(postorderTraversal([30,25,35,20,27,32,40,18,null,null,23,null,null,null,null,null,45]), [45, 18, 20, 23, 27, 25, 32, 40, 35, 30], 'Test 81');
test(postorderTraversal([1,2,null,3,4,null,5,null,6]), [5, 3, 6, 4, 2, 1], 'Test 82');
test(postorderTraversal([30,15,45,7,22,37,52,3,11,18,26,32,41,50,57,1,2,5,6,8,9,10,12,13,16,17,19,20,23,24,25,27,28,30,31,33,35,36,39,40,42,43,44,46,47,48,49,51,53,54,55,56,58,59]), [27, 28, 1, 30, 31, 2, 3, 33, 35, 5, 36, 39, 6, 11, 7, 40, 42, 8, 43, 44, 9, 18, 46, 47, 10, 48, 49, 12, 26, 22, 15, 51, 53, 13, 54, 55, 16, 32, 56, 58, 17, 59, 19, 41, 37, 20, 23, 50, 24, 25, 57, 52, 45, 30], 'Test 83');
test(postorderTraversal([7,3,15,1,5,9,20,null,null,2,6,null,null,8,12,null,18]), [1, 18, 2, 6, 5, 3, 9, 8, 12, 20, 15, 7], 'Test 84');
test(postorderTraversal([20,15,25,10,18,22,30,5,12,null,17,21,24,28,35]), [5, 12, 10, 17, 18, 15, 21, 24, 22, 28, 35, 30, 25, 20], 'Test 85');
test(postorderTraversal([4,2,6,1,3,5,7]), [1, 3, 2, 5, 7, 6, 4], 'Test 86');
test(postorderTraversal([3,1,2,4,null,5,6,7,null,8,9]), [7, 4, 1, 8, 9, 5, 6, 2, 3], 'Test 87');
test(postorderTraversal([3,1,2,4]), [4, 1, 2, 3], 'Test 88');
test(postorderTraversal([8,5,12,4,6,11,13,2,null,null,null,null,null,null,14]), [2, 4, 6, 5, 11, 14, 13, 12, 8], 'Test 89');
test(postorderTraversal([25,15,35,10,20,30,40,5,12,17,22,28,33,38,45,3,7,9,11,14,16,18,21,23,27,29,32,36,37,39,41,44,46]), [44, 46, 3, 7, 5, 9, 11, 12, 10, 14, 16, 17, 18, 21, 22, 20, 15, 23, 27, 28, 29, 32, 33, 30, 36, 37, 38, 39, 41, 45, 40, 35, 25], 'Test 90');
test(postorderTraversal([1,2,3,4,5,null,6,null,null,7,8]), [4, 7, 8, 5, 2, 6, 3, 1], 'Test 91');

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
