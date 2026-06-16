// Test: 889. Construct Binary Tree From Preorder And Postorder Traversal
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { constructFromPrePost } = require("./solution");

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

console.log("\n889. Construct Binary Tree From Preorder And Postorder Traversal\n");

test(constructFromPrePost([1,3,2], [3,2,1]), [1, 3, 2], 'Test 1');
test(constructFromPrePost([1,2,3,4,5,6,7,8], [4,5,2,6,7,3,8,1]), Error: list index out of range, 'Test 2');
test(constructFromPrePost([1], [1]), [1], 'Test 3');
test(constructFromPrePost([1,2,3], [2,3,1]), [1, 2, 3], 'Test 4');
test(constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1]), [1, 2, 3, 4, 5, 6, 7], 'Test 5');
test(constructFromPrePost([1,2,4,5,3], [4,5,2,3,1]), [1, 2, 3, 4, 5], 'Test 6');
test(constructFromPrePost([1,2,3,4,5], [4,5,3,2,1]), [1, 2, null, 3, null, 4, 5], 'Test 7');
test(constructFromPrePost([1,2,4,5,3,6,7,8,9], [4,5,2,8,9,6,7,3,1]), Error: list index out of range, 'Test 8');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [4,5,2,6,7,3,8,9,10,11,12,13,14,15,1]), Error: list index out of range, 'Test 9');
test(constructFromPrePost([10,5,3,2,1,4,8,6,7,9,12,11,13], [1,2,3,4,5,6,7,8,11,13,12,9,10]), Error: list index out of range, 'Test 10');
test(constructFromPrePost([1,2,3,6,7,4,8,5,9,10], [6,7,3,8,4,9,10,5,2,1]), Error: list index out of range, 'Test 11');
test(constructFromPrePost([1,2,4,5,3,6,8,9,7], [4,5,2,8,9,6,7,3,1]), [1, 2, 3, 4, 5, 6, 7, null, null, null, null, 8, 9], 'Test 12');
test(constructFromPrePost([1,3,6,11,12,7,13,2,4,8,9,5,10], [11,12,6,13,7,3,8,9,4,10,5,2,1]), [1, 3, 2, 6, 7, 4, 5, 11, 12, 13, null, 8, 9, 10], 'Test 13');
test(constructFromPrePost([1,2,3,5,6,7,4,8,9], [5,6,7,3,8,9,4,2,1]), Error: list index out of range, 'Test 14');
test(constructFromPrePost([1,2,4,5,8,9,6,7,3,10,11,12,13], [8,9,5,4,6,7,2,10,11,12,13,3,1]), Error: list index out of range, 'Test 15');
test(constructFromPrePost([1,2,4,5,8,9,10,6,11,12,3,7,13,14], [8,9,10,5,4,11,12,6,2,13,14,7,3,1]), Error: list index out of range, 'Test 16');
test(constructFromPrePost([1,3,2,5,4,6], [3,4,5,2,6,1]), [1, 3, 2, null, null, 5, 6, 4], 'Test 17');
test(constructFromPrePost([10,5,2,1,3,7,6,8,15,12,11,13,20,18,17,19], [1,2,3,5,6,8,7,10,11,12,13,15,17,18,19,20]), Error: list index out of range, 'Test 18');
test(constructFromPrePost([1,2,4,5,9,10,11,6,7,8,3,12,13,14,15], [9,10,11,5,4,7,8,6,2,12,13,14,15,3,1]), Error: list index out of range, 'Test 19');
test(constructFromPrePost([15,10,5,3,8,2,12,7,6,13,14,20,16,18,17,19], [3,2,8,5,6,7,12,10,17,18,19,16,14,13,20,15]), Error: list index out of range, 'Test 20');
test(constructFromPrePost([1,2,5,6,7,3,4,8,9,10], [6,7,5,2,10,8,9,4,3,1]), Error: list index out of range, 'Test 21');
test(constructFromPrePost([7,1,2,3,4,5,6,8,9,10], [2,3,4,5,6,1,8,9,10,7]), Error: list index out of range, 'Test 22');
test(constructFromPrePost([1,3,5,6,2,4,7], [5,6,3,7,4,2,1]), [1, 3, 2, 5, 6, 4, null, null, null, null, null, 7], 'Test 23');
test(constructFromPrePost([1,2,3,6,5,4,7,8,9], [6,5,4,3,8,9,7,2,1]), Error: list index out of range, 'Test 24');
test(constructFromPrePost([1,2,4,7,8,5,9,3,6], [7,8,4,9,5,2,6,3,1]), [1, 2, 3, 4, 5, 6, null, 7, 8, 9], 'Test 25');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [4,5,6,7,8,9,10,11,12,13,14,15,3,2,1]), Error: list index out of range, 'Test 26');
test(constructFromPrePost([1,2,4,12,13,5,14,6,7,3,8,9], [12,13,4,14,5,7,6,2,8,9,3,1]), Error: list index out of range, 'Test 27');
test(constructFromPrePost([10,5,2,1,4,3,8,6,7,9], [1,4,3,2,7,6,8,9,5,10]), Error: list index out of range, 'Test 28');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), Error: list index out of range, 'Test 29');
test(constructFromPrePost([1,2,3,5,6,7,4,8,9,10,11,12], [5,6,7,3,8,9,10,11,12,4,2,1]), Error: list index out of range, 'Test 30');
test(constructFromPrePost([1,2,3,5,10,11,6,7,8,4,9], [10,11,5,7,8,6,3,4,9,2,1]), Error: list index out of range, 'Test 31');
test(constructFromPrePost([1,2,4,8,9,5,10,11,3,6,12,7,13,14], [8,9,4,10,11,5,2,12,6,13,14,7,3,1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, null, 13, 14], 'Test 32');
test(constructFromPrePost([1,2,3,6,7,8,9,4,5], [6,7,8,9,3,4,5,2,1]), Error: list index out of range, 'Test 33');
test(constructFromPrePost([1,2,4,5,6,3,7,8,9,10,11,12,13,14,15], [4,5,6,2,10,11,12,13,14,15,8,9,7,3,1]), Error: list index out of range, 'Test 34');
test(constructFromPrePost([1,2,4,8,9,5,10,3,6,11,12,7,13,14], [8,9,4,10,5,2,11,12,6,13,14,7,3,1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 11, 12, 13, 14], 'Test 35');
test(constructFromPrePost([6,2,1,0,3,5,4,8,7,9], [0,1,5,4,3,2,7,9,8,6]), [6, 2, 8, 1, 3, 7, 9, 0, null, 5, 4], 'Test 36');
test(constructFromPrePost([1,2,4,8,5,9,3,6,10,7,11], [8,4,9,5,2,10,6,11,7,3,1]), [1, 2, 3, 4, 5, 6, 7, 8, null, 9, null, 10, null, 11], 'Test 37');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [4,5,2,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,3,1]), Error: list index out of range, 'Test 38');
test(constructFromPrePost([8,5,2,1,4,3,6,7,9], [1,4,3,2,7,6,5,9,8]), Error: list index out of range, 'Test 39');
test(constructFromPrePost([1,2,4,5,6,7,3,8,9,10], [4,5,6,7,2,8,9,10,3,1]), Error: list index out of range, 'Test 40');
test(constructFromPrePost([1,3,6,5,2,4,7,8,9], [6,5,3,8,9,7,4,2,1]), [1, 3, 2, 6, 5, 4, null, null, null, null, null, 7, null, 8, 9], 'Test 41');
test(constructFromPrePost([1,2,4,8,9,5,3,6,7], [8,9,4,5,2,6,7,3,1]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 42');
test(constructFromPrePost([1,2,4,5,3,6,7,8,9], [4,5,2,6,7,8,9,3,1]), Error: list index out of range, 'Test 43');
test(constructFromPrePost([5,4,2,1,3,6,7,8,9,10], [1,3,2,4,10,9,8,7,6,5]), [5, 4, 6, 2, null, 7, null, 1, 3, 8, null, null, null, null, null, 9, null, 10], 'Test 44');
test(constructFromPrePost([1,2,4,7,8,5,9,3,6,10,11], [7,8,4,5,9,2,10,11,6,3,1]), Error: list index out of range, 'Test 45');
test(constructFromPrePost([1,2,4,5,3,6,7,8,9,10,11,12,13,14,15], [4,5,2,6,7,8,9,10,11,12,13,14,15,3,1]), Error: list index out of range, 'Test 46');
test(constructFromPrePost([5,2,1,3,7,6,8,4,9,10,11], [1,3,2,6,8,7,4,11,10,9,5]), Error: list index out of range, 'Test 47');
test(constructFromPrePost([1,2,4,5,3,6,7,8,9,10], [5,4,2,8,9,6,10,7,3,1]), Error: list index out of range, 'Test 48');
test(constructFromPrePost([1,2,3,6,7,4,8,9,5], [6,7,3,8,9,4,5,2,1]), Error: list index out of range, 'Test 49');
test(constructFromPrePost([1,2,4,5,8,9,3,6,7,10,11], [8,9,5,4,10,11,6,7,2,3,1]), Error: list index out of range, 'Test 50');
test(constructFromPrePost([1,3,2,5,4,6], [2,4,6,5,3,1]), [1, 3, null, 2, 5, null, null, 4, 6], 'Test 51');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [4,5,3,6,7,2,8,9,10,11,12,13,14,15,1]), Error: list index out of range, 'Test 52');
test(constructFromPrePost([5,2,1,4,3,6,7,8,9], [1,4,3,2,8,9,7,6,5]), Error: list index out of range, 'Test 53');
test(constructFromPrePost([1,2,4,5,3,6,8,7,9], [4,5,2,8,6,9,7,3,1]), [1, 2, 3, 4, 5, 6, 7, null, null, null, null, 8, null, 9], 'Test 54');
test(constructFromPrePost([1,2,4,5,3,6,7,8,9], [4,5,2,6,8,9,7,3,1]), [1, 2, 3, 4, 5, 6, 7, null, null, null, null, null, null, 8, 9], 'Test 55');
test(constructFromPrePost([1,2,4,5,3,6,7,8,9], [4,5,2,8,9,7,3,1]), Error: 6, 'Test 56');
test(constructFromPrePost([1,2,4,5,6,7,3,8,9,10,11], [4,5,6,7,2,8,9,10,11,3,1]), Error: list index out of range, 'Test 57');
test(constructFromPrePost([1,2,4,8,9,5,3,6,7,10,11], [8,9,4,5,2,10,11,6,7,3,1]), Error: list index out of range, 'Test 58');
test(constructFromPrePost([1,3,5,4,2,6,7], [5,4,3,6,7,2,1]), [1, 3, 2, 5, 4, 6, 7], 'Test 59');
test(constructFromPrePost([3,9,4,5,10,20,2,15,7,16,8], [4,5,10,20,9,7,16,8,15,2,3]), Error: list index out of range, 'Test 60');
test(constructFromPrePost([1,3,2,5,4,6,7,8], [2,5,4,6,7,8,3,1]), Error: list index out of range, 'Test 61');
test(constructFromPrePost([2,1,3,4,5,6,7,8], [1,5,6,4,7,8,3,2]), Error: list index out of range, 'Test 62');
test(constructFromPrePost([1,3,2,6,5,4,7,9,8,11,10], [2,5,6,4,3,9,10,11,8,7,1]), [1, 3, 7, 2, 6, 9, 8, null, null, 5, 4, null, null, 11, null, null, null, null, null, 10], 'Test 63');
test(constructFromPrePost([1,2,4,3,5,6], [4,2,6,5,3,1]), [1, 2, 3, 4, null, 5, null, null, null, 6], 'Test 64');
test(constructFromPrePost([1,2,4,8,9,5,10,3,6,7], [8,9,4,10,5,2,6,7,3,1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 65');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [13,14,15,7,8,9,10,11,12,4,5,6,3,2,1]), Error: list index out of range, 'Test 66');
test(constructFromPrePost([1,2,4,8,12,13,9,14,5,10,11,6,7,3], [12,13,8,9,14,4,10,11,5,7,6,2,3,1]), Error: list index out of range, 'Test 67');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [2,4,5,3,7,8,6,1,10,11,12,13,14,15,9,17,18,16,20,21,19,24,25,26,23,28,29,27,30]), Error: 22, 'Test 68');
test(constructFromPrePost([1,2,4,5,3,6,8,9,7,10,11], [4,5,2,8,9,6,10,11,7,3,1]), [1, 2, 3, 4, 5, 6, 7, null, null, null, null, 8, 9, 10, 11], 'Test 69');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), Error: list index out of range, 'Test 70');
test(constructFromPrePost([1,3,7,8,9,5,6,2,4,10,11], [8,9,7,5,6,10,11,4,2,3,1]), Error: list index out of range, 'Test 71');
test(constructFromPrePost([1,2,4,7,8,5,3,6,9,10,11], [7,8,4,5,2,9,10,11,6,3,1]), Error: list index out of range, 'Test 72');
test(constructFromPrePost([1,2,3,5,6,4,7,8], [5,6,3,7,8,4,2,1]), [1, 2, null, 3, 4, 5, 6, 7, 8], 'Test 73');
test(constructFromPrePost([1,2,5,9,10,6,7,3,8,4], [9,10,5,7,6,2,8,4,3,1]), [1, 2, 3, 5, 6, 8, 4, 9, 10, 7], 'Test 74');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [4,5,6,3,7,8,9,2,10,11,12,13,14,15,1]), Error: list index out of range, 'Test 75');
test(constructFromPrePost([1,2,4,7,8,5,9,6,3,10,11], [7,8,4,9,5,6,2,10,11,3,1]), [1, 2, 3, 4, 5, 10, 11, 7, 8, 9, 6], 'Test 76');
test(constructFromPrePost([1,3,2,6,5,4,7], [6,5,4,2,7,3,1]), Error: list index out of range, 'Test 77');
test(constructFromPrePost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), Error: list index out of range, 'Test 78');
test(constructFromPrePost([1,2,3,5,6,4,7,8,9], [5,6,3,7,8,9,4,2,1]), Error: list index out of range, 'Test 79');

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
