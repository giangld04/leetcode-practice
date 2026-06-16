// Test: 1123. Lowest Common Ancestor Of Deepest Leaves
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { lcaDeepestLeaves } = require("./solution");

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

console.log("\n1123. Lowest Common Ancestor Of Deepest Leaves\n");

test(lcaDeepestLeaves([1,2,3,4,5,6,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 1');
test(lcaDeepestLeaves([1,2,3,4,5]), [2, 4, 5], 'Test 2');
test(lcaDeepestLeaves([1,null,2,null,3,null,4,null,5]), [5], 'Test 3');
test(lcaDeepestLeaves([2,1,3,null,null,4,5]), [3, 4, 5], 'Test 4');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 5');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,9,10,null,null,11,12,null,13,null,null,14]), [4, 8, 9, 13, null, null, 14], 'Test 6');
test(lcaDeepestLeaves([0,1,3,null,2]), [2], 'Test 7');
test(lcaDeepestLeaves([2,1,3,4,null,5,6]), [2, 1, 3, 4, null, 5, 6], 'Test 8');
test(lcaDeepestLeaves([2,1,3]), [2, 1, 3], 'Test 9');
test(lcaDeepestLeaves([1,null,2,null,3,null,4]), [4], 'Test 10');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4]), [2, 7, 4], 'Test 11');
test(lcaDeepestLeaves([1]), [1], 'Test 12');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,16,null,7,4,null,null,null,19]), [3, 5, 1, 6, 2, 0, 8, 16, null, 7, 4, null, null, null, 19], 'Test 13');
test(lcaDeepestLeaves([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [10], 'Test 14');
test(lcaDeepestLeaves([1,2,3,4,5,null,null,6,7,8,9,10,11,12,13,null,null,null,null,14,15,16]), [6, 10, 11, 14, 15, 16], 'Test 15');
test(lcaDeepestLeaves([3,5,1,6,2,null,8,null,null,7,4,10,null,null,null,null,9]), [9], 'Test 16');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,null,null,11,null,null,12]), [12], 'Test 17');
test(lcaDeepestLeaves([1,2,3,null,null,4,5,6,7,8,9,null,null,null,null,10,11]), [8, 10, 11], 'Test 18');
test(lcaDeepestLeaves([1,2,3,null,4,null,null,null,5]), [5], 'Test 19');
test(lcaDeepestLeaves([5,1,4,null,2,3,null,6,7,null,null,null,null,8,9]), [7, 8, 9], 'Test 20');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,10,11,null,null,12,null,null,13,null,null,14]), [14], 'Test 21');
test(lcaDeepestLeaves([1,2,null,3,null,4,null,5,null,6]), [6], 'Test 22');
test(lcaDeepestLeaves([6,2,8,0,4,7,9,null,null,3,5]), [4, 3, 5], 'Test 23');
test(lcaDeepestLeaves([1,2,null,3,null,null,4,null,null,5,null,null,null,null,null,6]), [4], 'Test 24');
test(lcaDeepestLeaves([0,1,3,4,5,null,null,6,7,8,9,null,null,null,null,null,10]), [10], 'Test 25');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,10,null,null,null,11]), [11], 'Test 26');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,9,10]), [7, 9, 10], 'Test 27');
test(lcaDeepestLeaves([2,7,4,null,null,5,6,null,8,null,null,null,null,9,null,10]), [8], 'Test 28');
test(lcaDeepestLeaves([2,1,3,null,4,null,null,5]), [5], 'Test 29');
test(lcaDeepestLeaves([1,null,2,3,4,5,6,7,8,9,10,11,12,13,14]), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 30');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,null,9]), [9], 'Test 31');
test(lcaDeepestLeaves([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), [11], 'Test 32');
test(lcaDeepestLeaves([1,2,3,4,5,null,6,7,null,null,null,null,8]), [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8], 'Test 33');
test(lcaDeepestLeaves([1,2,3,null,4,5,6,7,null,null,8,null,null,null,null,9,null,null,10,null,null,11,null,null,12]), [10], 'Test 34');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,11,12,null,null,13,14]), [7, 13, 14], 'Test 35');
test(lcaDeepestLeaves([1,2,3,null,4,null,null,5,null,null,null,6,null,null,null,7]), [5], 'Test 36');
test(lcaDeepestLeaves([1,2,3,null,4,null,null,5,6,7,8,null,null,9,10,null,null,11,12]), [9, 11, 12], 'Test 37');
test(lcaDeepestLeaves([5,1,4,null,2,null,3]), [5, 1, 4, null, 2, null, 3], 'Test 38');
test(lcaDeepestLeaves([2,1,3,null,4,5,null,6,null,7,null,8,null,9,null,10]), [10], 'Test 39');
test(lcaDeepestLeaves([1,2,2,3,null,null,3,4,null,null,4,5,null,null,5]), [1, 2, 2, 3, null, null, 3, 4, null, null, 4, 5, null, null, 5], 'Test 40');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,null,null,9]), [9], 'Test 41');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,null,null,null,null,null,null,9]), [1, 2, 3, 4, 5, 6, 7, 8, null, null, null, null, null, null, 9], 'Test 42');
test(lcaDeepestLeaves([1,2,3,null,null,4,5,6,7,8,9,10,null,null,11,12,13,null,null,14,15]), [10, 14, 15], 'Test 43');
test(lcaDeepestLeaves([1,2,3,null,4,null,5,null,null,6,null,null,7,null,null,8,null,null,9]), [7], 'Test 44');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,null,null,null,8,null,null,9]), [1, 2, 3, 4, 5, 6, 7, null, null, null, 8, null, null, 9], 'Test 45');
test(lcaDeepestLeaves([1,2,3,null,null,null,null,4,5,6,7,null,null,null,null,8,9]), [1, 2, 3], 'Test 46');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'Test 47');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [2, 4, 5, 8, 9, 10, 11, 16, 17, 18, 19, 20], 'Test 48');
test(lcaDeepestLeaves([0,1,2,3,4,5,6,7,null,null,8,null,9]), [0, 1, 2, 3, 4, 5, 6, 7, null, null, 8, null, 9], 'Test 49');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,16,17,7,4,18,19]), [3, 5, 1, 6, 2, 0, 8, 16, 17, 7, 4, 18, 19], 'Test 50');
test(lcaDeepestLeaves([0,1,3,null,2,null,4,null,5,null,6]), [0, 1, 3, null, 2, null, 4, null, 5, null, 6], 'Test 51');
test(lcaDeepestLeaves([1,2,3,4,5,null,6,7,8,null,null,null,null,9,10]), [7, 9, 10], 'Test 52');
test(lcaDeepestLeaves([20,8,22,4,12,10,14]), [20, 8, 22, 4, 12, 10, 14], 'Test 53');
test(lcaDeepestLeaves([5,3,6,2,4,null,7,1,null,null,null,8,null,9,null]), [9], 'Test 54');
test(lcaDeepestLeaves([8,6,5,null,7,null,3,9,null,2,null,10,null,11,null,12,null,13,null,14,null,15]), [8, 6, 5, null, 7, null, 3, 9, null, 2, null, 10, null, 11, null, 12, null, 13, null, 14, null, 15], 'Test 55');
test(lcaDeepestLeaves([1,2,3,4,5,null,null,6,7,null,null,8,9,null,null,null,null,10,11]), [9, 10, 11], 'Test 56');
test(lcaDeepestLeaves([1,2,3,null,4,5,6,null,7,null,null,null,null,8,9]), [7, 8, 9], 'Test 57');
test(lcaDeepestLeaves([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19]), [10, 5, 15, 3, 7, 13, 18, 1, 4, 6, 8, 12, 14, 17, 19], 'Test 58');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 'Test 59');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,null,null,null,8,null,null,null,9,null,null,null,null,10,null,null,null,null,11]), [1, 2, 3, 4, 5, 6, 7, null, null, null, 8, null, null, null, 9], 'Test 60');
test(lcaDeepestLeaves([1,2,3,4,5,null,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), [12], 'Test 61');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,15,null,null,null,null,16]), [16], 'Test 62');
test(lcaDeepestLeaves([7,3,8,1,4,6,9,null,null,2,5]), [4, 2, 5], 'Test 63');
test(lcaDeepestLeaves([10,20,30,40,50,null,60,null,70,80,90,null,null,null,null,null,100]), [100], 'Test 64');
test(lcaDeepestLeaves([1,2,3,null,null,4,5,6,7]), [4, 6, 7], 'Test 65');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,null,null,null,null,null,null,9,10]), [10], 'Test 66');
test(lcaDeepestLeaves([2,7,4,1,11,5,3,null,null,null,null,null,8,9]), [4, 5, 3, null, 8, 9], 'Test 67');
test(lcaDeepestLeaves([5,1,4,null,null,3,6]), [4, 3, 6], 'Test 68');
test(lcaDeepestLeaves([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [15], 'Test 69');
test(lcaDeepestLeaves([0,1,3,null,2,null,4,null,null,null,null,null,5]), [0, 1, 3, null, 2, null, 4], 'Test 70');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,9]), [9], 'Test 71');
test(lcaDeepestLeaves([0,1,2,3,null,4,null,5,6,null,7,null,null,null,8]), [8], 'Test 72');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,null,null,null,8,null,null,null,null,null,null,9]), [8], 'Test 73');
test(lcaDeepestLeaves([5,1,9,2,null,6,10,null,3,null,null,null,4,8,11]), [3, 8, 11], 'Test 74');
test(lcaDeepestLeaves([1,2,3,null,4,null,5,null,6]), [6], 'Test 75');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,12,13]), [7, 12, 13], 'Test 76');
test(lcaDeepestLeaves([1,null,2,null,3,null,4,null,5,null,6]), [6], 'Test 77');
test(lcaDeepestLeaves([1,2,3,null,4,null,5,null,null,6,null,null,7]), [7], 'Test 78');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,10,11,null,null,null,null,12,13,14,15]), [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, 10, 11, null, null, null, null, 12, 13, 14, 15], 'Test 79');
test(lcaDeepestLeaves([1,2,3,4,null,null,5,6,7,null,null,8,9,10,11,null,null,12,13]), [9, 12, 13], 'Test 80');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,11,12]), [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, 11, 12], 'Test 81');
test(lcaDeepestLeaves([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11]), [9, 10, 11], 'Test 82');
test(lcaDeepestLeaves([3,5,1,6,2,null,8,null,null,7,4,10,13,null,null,null,null,11,null,null,12,null,14]), [14], 'Test 83');
test(lcaDeepestLeaves([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [9], 'Test 84');
test(lcaDeepestLeaves([1,2,2,3,null,null,3,4,4,5,5]), [1, 2, 2, 3, null, null, 3, 4, 4, 5, 5], 'Test 85');
test(lcaDeepestLeaves([3,5,1,6,2,null,8,7,4,null,null,10,null,null,14]), [14], 'Test 86');
test(lcaDeepestLeaves([1,2,3,null,4,null,5,null,6,null,7,null,8]), [8], 'Test 87');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,9,10,11,12,13]), [13], 'Test 88');
test(lcaDeepestLeaves([1,2,null,3,4,null,5,6,7,8,9,null,10,11,12]), [2, 3, 4, null, 5, 6, 7, 8, 9, null, 10, 11, 12], 'Test 89');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,9,null,null,null,10,null,null,null,null,null,null,null,11]), [9], 'Test 90');
test(lcaDeepestLeaves([10,20,30,null,40,50,60,null,70,80,null,null,90]), [10, 20, 30, null, 40, 50, 60, null, 70, 80, null, null, 90], 'Test 91');
test(lcaDeepestLeaves([0,1,2,3,null,null,4,null,null,5,null,null,6]), [6], 'Test 92');
test(lcaDeepestLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,null,null,9,null,null,10]), [10], 'Test 93');
test(lcaDeepestLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,17,18,19,20,21,null,23,24,25,26,27,28,29]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null, 17, 18, 19, 20, 21, null, 23, 24, 25, 26, 27, 28, 29], 'Test 94');

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
