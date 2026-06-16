// Test: 1080. Insufficient Nodes In Root To Leaf Paths
// 62 test cases from LeetCodeDataset
// Run: node test.js

const { sufficientSubset } = require("./solution");

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

console.log("\n1080. Insufficient Nodes In Root To Leaf Paths\n");

test(sufficientSubset(limit), Error: Solution.sufficientSubset[] missing 2 required positional arguments: 'root' and 'limit', 'Test 1');
test(sufficientSubset(root), Error: Solution.sufficientSubset[] missing 2 required positional arguments: 'root' and 'limit', 'Test 2');
test(sufficientSubset([1,-2,-3,-4,null,null,-5], -2), null, 'Test 3');
test(sufficientSubset([1,-10,20,100,-100,30,-30], 50), [1, -10, 20, 100, null, 30], 'Test 4');
test(sufficientSubset([1,2], 3), [1, 2], 'Test 5');
test(sufficientSubset([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 30), null, 'Test 6');
test(sufficientSubset([10,-10,10,null,-10,null,-10,null,-10,null,-10], 8), null, 'Test 7');
test(sufficientSubset([2,-2,-3], -2), [2, -2, -3], 'Test 8');
test(sufficientSubset([10,-10,5,null,-2,null,6], 8), [10, null, 5, null, 6], 'Test 9');
test(sufficientSubset([1,null,2,null,3], 6), [1, null, 2, null, 3], 'Test 10');
test(sufficientSubset([-10,-5,-3,-6,-20], -15), [-10, null, -3], 'Test 11');
test(sufficientSubset([1,2,-3,-5,null,4,null], -1), [1, null, -3, 4], 'Test 12');
test(sufficientSubset([-5,-10,-3,-1,-4,-2], -13), [-5, null, -3, -2], 'Test 13');
test(sufficientSubset([5,4,8,11,null,17,4,7,1,null,null,5,3], 28), [5, null, 8, 17], 'Test 14');
test(sufficientSubset([1,null,-2,-3,-4,-5,-6], -1), null, 'Test 15');
test(sufficientSubset([1,null,-2,null,-3], -5), [1, null, -2, null, -3], 'Test 16');
test(sufficientSubset([1,null,-2,-3,-4], -1), null, 'Test 17');
test(sufficientSubset([2,-5,-2], -4), [2, -5, -2], 'Test 18');
test(sufficientSubset([10,5,15,3,7,null,18,1,null,6,8,16,20,null,null,null,null,null,19], 30), [10, 5, 15, null, 7, null, 18, null, 8, 16, 20, null, 19], 'Test 19');
test(sufficientSubset([1,2,3,4,5,6,7], 5), [1, 2, 3, 4, 5, 6, 7], 'Test 20');
test(sufficientSubset([1,-10,10,-100,100,-1000,1000], 0), [1, -10, 10, null, 100, null, 1000], 'Test 21');
test(sufficientSubset([1], 1), [1], 'Test 22');
test(sufficientSubset([1,-1,-2,-3,-4,null,null,null,null,null], -6), [1, -1, -2, -3, -4], 'Test 23');
test(sufficientSubset([1,2,3,4,5,6,7], 15), null, 'Test 24');
test(sufficientSubset([10,5,15,3,7,null,18], 15), [10, 5, 15, 3, 7, null, 18], 'Test 25');
test(sufficientSubset([1,2,3], 7), null, 'Test 26');
test(sufficientSubset([1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], 1), [1, 2, 3, 4, null, null, 7, 8, 9, null, 14], 'Test 27');
test(sufficientSubset([1,null,-2,-3,null,-4,-5,null,-6,null,-7,null,-8,null,-9], 0), null, 'Test 28');
test(sufficientSubset([100,50,150,25,75,null,200], 150), [100, 50, 150, 25, 75, null, 200], 'Test 29');
test(sufficientSubset([5,4,8,11,null,17,4,7,1,null,null,5,3], 22), [5, 4, 8, 11, null, 17, 4, 7, null, null, null, 5], 'Test 30');
test(sufficientSubset([1,2,3,4,5,6,7], 10), [1, null, 3, 6, 7], 'Test 31');
test(sufficientSubset([5,-6,-6], 0), null, 'Test 32');
test(sufficientSubset([20,10,30,5,15,25,35,2,7,12,18,23,27,32,38,1,3,6,8,11,13,17,19,22,26,28,31,33,37,39,40], 50), [20, 10, 30, 5, 15, 25, 35, null, 7, 12, 18, 23, 27, 32, 38, null, 8, 11, 13, 17, 19, 22, 26, 28, 31, 33, 37, 39, 40], 'Test 33');
test(sufficientSubset([1,null,2,null,3,null,4,null,5], 14), [1, null, 2, null, 3, null, 4, null, 5], 'Test 34');
test(sufficientSubset([1,null,-2,null,-3,null,-4,-5,null], -1), null, 'Test 35');
test(sufficientSubset([5,-6,6,5,9,-6,-3,2,-5,2,2,-1,-6,-6,-6], 2), [5, -6, 6, 5, 9, -6, -3, 2, null, 2, 2, -1, null, -6, -6], 'Test 36');
test(sufficientSubset([1,2,3,4,5,6,7], 3), [1, 2, 3, 4, 5, 6, 7], 'Test 37');
test(sufficientSubset([1,2,3,4,5], 8), [1, 2, null, null, 5], 'Test 38');
test(sufficientSubset([1,null,2,null,3,null,4,null,5], 6), [1, null, 2, null, 3, null, 4, null, 5], 'Test 39');
test(sufficientSubset([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], 15), [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9], 'Test 40');
test(sufficientSubset([5,3,8,2,4,7,9,1,6,null,null,null,null,null,null,null,10], 20), [5, 3, 8, 2, null, 7, 9, 1, null, null, null, null, null, null, 10], 'Test 41');
test(sufficientSubset([1], 2), null, 'Test 42');
test(sufficientSubset([10,5,15,3,7,null,18], 22), [10, 5, 15, null, 7, null, 18], 'Test 43');
test(sufficientSubset([10,5,15,3,7,null,18], 25), [10, null, 15, null, 18], 'Test 44');
test(sufficientSubset([1,2,3,4,5], 9), null, 'Test 45');
test(sufficientSubset([1,null,2,null,3,null,4,null,5], 15), [1, null, 2, null, 3, null, 4, null, 5], 'Test 46');
test(sufficientSubset([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 47');
test(sufficientSubset([1,null,2,null,3,null,4], 6), [1, null, 2, null, 3, null, 4], 'Test 48');
test(sufficientSubset([1,null,-2,-3,-4,null,-5,-6,null,-7,null,-8,null,-9,null,-10,null,-11,null,-12,-13,null,-14], -3), null, 'Test 49');
test(sufficientSubset([1,2,3], 6), null, 'Test 50');
test(sufficientSubset([10,-10,10,null,null,null,-10,null,-10], 0), [10, -10, 10, null, null, null, -10, null, -10], 'Test 51');
test(sufficientSubset([1,-2,-3,4,5,null,-6,-7,null,-8,null,9,null,-10,null], -1), [1, null, -3, null, -6, 9], 'Test 52');
test(sufficientSubset([-5,-6,-7], -15), [-5, -6, -7], 'Test 53');
test(sufficientSubset([10,5,15,3,7,null,18,null,null,6,9], 25), [10, 5, 15, null, 7, null, 18, 6, 9], 'Test 54');
test(sufficientSubset([10,-10,10,null,null,-10,null,-10,null], 8), null, 'Test 55');
test(sufficientSubset([1,2,3,4,5,6,7], 20), null, 'Test 56');
test(sufficientSubset([1,2,3,null,-5,null,4], 0), [1, null, 3, null, 4], 'Test 57');
test(sufficientSubset([1,2,3], 5), null, 'Test 58');
test(sufficientSubset([1,null,2,null,3], 4), [1, null, 2, null, 3], 'Test 59');
test(sufficientSubset([1,null,2,null,3], 5), [1, null, 2, null, 3], 'Test 60');
test(sufficientSubset([10,5,10], 21), null, 'Test 61');
test(sufficientSubset([10,5,15,3,7,12,18,1,2,6,8,11,13,17,19], 25), [10, 5, 15, null, 7, 12, 18, 6, 8, 11, 13, 17, 19], 'Test 62');

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
