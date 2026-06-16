// Test: 102. Binary Tree Level Order Traversal
// 67 test cases from LeetCodeDataset
// Run: node test.js

const { levelOrder } = require("./solution");

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

console.log("\n102. Binary Tree Level Order Traversal\n");

test(levelOrder([3,9,20,null,null,15,7]), [[3], [9, 20], [15, 7]], 'Test 1');
test(levelOrder([1]), [[1]], 'Test 2');
test(levelOrder([]), [], 'Test 3');
test(levelOrder([1,2,3,4,5,6,7]), [[1], [2, 3], [4, 5, 6, 7]], 'Test 4');
test(levelOrder([0,2,4,1,null,3,-1,5,1,null,6,null,8]), [[0], [2, 4], [1, 3, -1], [5, 1, 6, 8]], 'Test 5');
test(levelOrder([1,null,2,null,3,null,4,null,5]), [[1], [2], [3], [4], [5]], 'Test 6');
test(levelOrder([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19]), [[0], [-1, -2], [-3, -4, -5, -6], [-7, -8, -9, -10, -11, -12, -13, -14], [-15, -16, -17, -18, -19]], 'Test 7');
test(levelOrder([1,2,3,4,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16]], 'Test 8');
test(levelOrder([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]], 'Test 9');
test(levelOrder([3,9,20,10,null,null,15,7,8,11,16]), [[3], [9, 20], [10, 15], [7, 8, 11, 16]], 'Test 10');
test(levelOrder([1,2,3,4,null,null,5]), [[1], [2, 3], [4, 5]], 'Test 11');
test(levelOrder([1,2,3,null,4,null,5,null,null,6,null,null,7]), [[1], [2, 3], [4, 5], [6], [7]], 'Test 12');
test(levelOrder([3,9,20,15,7,18,19,21,null,null,null,null,22,23,24,25,26,null,27,28,29,30]), [[3], [9, 20], [15, 7, 18, 19], [21, 22, 23, 24], [25, 26, 27, 28, 29, 30]], 'Test 13');
test(levelOrder([1,null,3,2,4,null,5,6]), [[1], [3], [2, 4], [5, 6]], 'Test 14');
test(levelOrder([1,2,3,4,null,null,5,6,7,8,9]), [[1], [2, 3], [4, 5], [6, 7, 8, 9]], 'Test 15');
test(levelOrder([1,2,2,3,null,null,3,4,null,null,4]), [[1], [2, 2], [3, 3], [4, 4]], 'Test 16');
test(levelOrder([1,2,3,4,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]], 'Test 17');
test(levelOrder([3,9,20,null,null,15,7,12,null,16,18]), [[3], [9, 20], [15, 7], [12, 16, 18]], 'Test 18');
test(levelOrder([1,null,2,null,null,3,null,null,null,4]), [[1], [2]], 'Test 19');
test(levelOrder([3,9,20,15,7,16,8,17,18,19,20,21,22,23,24]), [[3], [9, 20], [15, 7, 16, 8], [17, 18, 19, 20, 21, 22, 23, 24]], 'Test 20');
test(levelOrder([1,2,3,4,5,6,7,8,null,null,9,null,null,10,null,11,null,null,12]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10], [11, 12]], 'Test 21');
test(levelOrder([1,2,3,null,null,null,4,5,6]), [[1], [2, 3], [4], [5, 6]], 'Test 22');
test(levelOrder([3,9,20,8,null,15,7,10,11,null,null,16,17]), [[3], [9, 20], [8, 15, 7], [10, 11, 16, 17]], 'Test 23');
test(levelOrder([3,1,4,null,null,2,null,5]), [[3], [1, 4], [2], [5]], 'Test 24');
test(levelOrder([10,5,15,null,null,6,20]), [[10], [5, 15], [6, 20]], 'Test 25');
test(levelOrder([1,2,3,4,null,null,5,null,null,6,null,null,7]), [[1], [2, 3], [4, 5], [6], [7]], 'Test 26');
test(levelOrder([1,null,2,3,null,4,null,5]), [[1], [2], [3], [4], [5]], 'Test 27');
test(levelOrder([3,9,20,11,12,13,14,null,null,null,null,15,null,null,null,16]), [[3], [9, 20], [11, 12, 13, 14], [15], [16]], 'Test 28');
test(levelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20]], 'Test 29');
test(levelOrder([10,5,15,3,7,null,18]), [[10], [5, 15], [3, 7, 18]], 'Test 30');
test(levelOrder([1,null,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), [[1], [2], [3, 4], [5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16]], 'Test 31');
test(levelOrder([3,9,20,12,13,14,15,16,17,18,19,20,21,22,23]), [[3], [9, 20], [12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23]], 'Test 32');
test(levelOrder([1,2,3,4,null,null,5,6,null,7,8]), [[1], [2, 3], [4, 5], [6, 7, 8]], 'Test 33');
test(levelOrder([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), [[1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14, 15], [16, 17], [18, 19], [20]], 'Test 34');
test(levelOrder([6,2,8,0,4,7,9,null,null,3,5]), [[6], [2, 8], [0, 4, 7, 9], [3, 5]], 'Test 35');
test(levelOrder([1,2,3,4,null,null,5,null,null,6,null,7]), [[1], [2, 3], [4, 5], [6], [7]], 'Test 36');
test(levelOrder([1,2,3,4,5,6,7,null,null,null,null,null,null,null,null,8,9,10,11,12,13,14,15,16,17,18,19,20]), [[1], [2, 3], [4, 5, 6, 7]], 'Test 37');
test(levelOrder([5,4,8,11,null,13,4,7,2,null,null,null,1]), [[5], [4, 8], [11, 13, 4], [7, 2, 1]], 'Test 38');
test(levelOrder([1,null,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [[1], [2], [3, 4], [5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16], [17, 18, 19, 20]], 'Test 39');
test(levelOrder([1,2,3,null,null,4,5,null,6,7]), [[1], [2, 3], [4, 5], [6, 7]], 'Test 40');
test(levelOrder([3,null,20,15,7]), [[3], [20], [15, 7]], 'Test 41');
test(levelOrder([3,9,20,15,7,10,8,null,null,null,null,null,12]), [[3], [9, 20], [15, 7, 10, 8], [12]], 'Test 42');
test(levelOrder([5,1,4,null,null,3,6]), [[5], [1, 4], [3, 6]], 'Test 43');
test(levelOrder([1,2,3,null,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [[1], [2, 3], [4], [5], [6], [7], [8], [9], [10]], 'Test 44');
test(levelOrder([10,5,-3,3,2,null,11,3,-2,null,1]), [[10], [5, -3], [3, 2, 11], [3, -2, 1]], 'Test 45');
test(levelOrder([3,9,20,null,null,15,7,18,19,21]), [[3], [9, 20], [15, 7], [18, 19, 21]], 'Test 46');
test(levelOrder([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,9,10]), [[3], [5, 1], [6, 2, 0, 8], [7, 4], [9, 10]], 'Test 47');
test(levelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]], 'Test 48');
test(levelOrder([1,null,2,3]), [[1], [2], [3]], 'Test 49');
test(levelOrder([3,5,1,6,2,0,8,null,null,7,4]), [[3], [5, 1], [6, 2, 0, 8], [7, 4]], 'Test 50');
test(levelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20]], 'Test 51');
test(levelOrder([1,2,3,4,5,null,null,6,7,8,9,10,11,12,13]), [[1], [2, 3], [4, 5], [6, 7, 8, 9], [10, 11, 12, 13]], 'Test 52');
test(levelOrder([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), [[0], [-1, -2], [-3, -4, -5, -6], [-7, -8, -9, -10, -11, -12, -13, -14], [-15]], 'Test 53');
test(levelOrder([1,2,3,4,null,null,5,null,null,6,7]), [[1], [2, 3], [4, 5], [6, 7]], 'Test 54');
test(levelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]], 'Test 55');
test(levelOrder([3,9,20,15,7,10,8,13,14,15,null,null,null,null,null,null,null,null,16]), [[3], [9, 20], [15, 7, 10, 8], [13, 14, 15], [16]], 'Test 56');
test(levelOrder([1,2,2,3,4,4,3]), [[1], [2, 2], [3, 4, 4, 3]], 'Test 57');
test(levelOrder([1,2,null,3,null,4,null,5]), [[1], [2], [3], [4], [5]], 'Test 58');
test(levelOrder([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,null,17,null,18,null,19,null,20]), [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20]], 'Test 59');
test(levelOrder([1,2,2,3,3,null,null,4,4]), [[1], [2, 2], [3, 3], [4, 4]], 'Test 60');
test(levelOrder([1,2,3,4,null,5,6,null,7,null,null,8,null,9]), [[1], [2, 3], [4, 5, 6], [7, 8], [9]], 'Test 61');
test(levelOrder([0,-1,2,-2,null,1,null,-3,null,null,-4]), [[0], [-1, 2], [-2, 1], [-3, -4]], 'Test 62');
test(levelOrder([3,9,20,null,17,15,7]), [[3], [9, 20], [17, 15, 7]], 'Test 63');
test(levelOrder([1,2,3,4,5,null,6,7,null,null,null,null,8]), [[1], [2, 3], [4, 5, 6], [7, 8]], 'Test 64');
test(levelOrder([0,-1,2,-2,null,-3,null,-4,-5]), [[0], [-1, 2], [-2, -3], [-4, -5]], 'Test 65');
test(levelOrder([3,9,20,8,10,null,17,1,null,null,18,2,5,null,null,null,4,6]), [[3], [9, 20], [8, 10, 17], [1, 18, 2, 5], [4, 6]], 'Test 66');
test(levelOrder([5,4,8,11,null,13,4,7,2,null,null,5,1]), [[5], [4, 8], [11, 13, 4], [7, 2, 5, 1]], 'Test 67');

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
