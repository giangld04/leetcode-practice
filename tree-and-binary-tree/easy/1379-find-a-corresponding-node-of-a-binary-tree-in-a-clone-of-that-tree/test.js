// Test: 1379. Find A Corresponding Node Of A Binary Tree In A Clone Of That Tree
// 60 test cases from LeetCodeDataset
// Run: node test.js

const { getTargetCopy } = require("./solution");

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

console.log("\n1379. Find A Corresponding Node Of A Binary Tree In A Clone Of That Tree\n");

test(getTargetCopy([8,null,6,null,5,null,4,null,3,null,2,null,1], [8,null,6,null,5,null,4,null,3,null,2,null,1], 4), null, 'Test 1');
test(getTargetCopy([7,4,3,null,null,6,19], [7,4,3,null,null,6,19], 3), null, 'Test 2');
test(getTargetCopy([7], [7], 7), null, 'Test 3');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), null, 'Test 4');
test(getTargetCopy([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 5), null, 'Test 5');
test(getTargetCopy([5,3,6,2,4,null,8,1,null,null,null,7,9], [5,3,6,2,4,null,8,1,null,null,null,7,9], 7), null, 'Test 6');
test(getTargetCopy([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 6), null, 'Test 7');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 12), null, 'Test 8');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), null, 'Test 9');
test(getTargetCopy([3,1,4,null,null,2], [3,1,4,null,null,2], 2), null, 'Test 10');
test(getTargetCopy([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], [100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 140), null, 'Test 11');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 17), null, 'Test 12');
test(getTargetCopy([1,2,3,4,5,null,null,6,7,null,null,null,null,8,9], [1,2,3,4,5,null,null,6,7,null,null,null,null,8,9], 9), null, 'Test 13');
test(getTargetCopy([10,5,15,3,7,13,18,1,null,6,null,null,14,null,null,17], [10,5,15,3,7,13,18,1,null,6,null,null,14,null,null,17], 13), null, 'Test 14');
test(getTargetCopy([20,10,30,5,15,25,35,2,7,12,18,23,27,32,38,1,null,6,8,11,13,17,19,22,24,26,28,31,33,36,39,null,null,null,null,4,null,null,null,null,null,null,3,9,14,16,20,21,25,29,30,34,37,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null], [20,10,30,5,15,25,35,2,7,12,18,23,27,32,38,1,null,6,8,11,13,17,19,22,24,26,28,31,33,36,39,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 23), Error: 'nullType' object has no attribute 'left', 'Test 15');
test(getTargetCopy([9,4,20,null,null,15,170,11,null,null,16,null,null,13,null,12,null,10], [9,4,20,null,null,15,170,11,null,null,16,null,null,13,null,12,null,10], 13), null, 'Test 16');
test(getTargetCopy([4,2,7,1,3,6,9], [4,2,7,1,3,6,9], 9), null, 'Test 17');
test(getTargetCopy([5,3,6,2,4,null,7,1,null,null,null,null,null,null,8], [5,3,6,2,4,null,7,1,null,null,null,null,null,null,8], 4), null, 'Test 18');
test(getTargetCopy([2,1,3,null,null,4,5], [2,1,3,null,null,4,5], 4), null, 'Test 19');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8), null, 'Test 20');
test(getTargetCopy([4,2,7,1,3,6,9,null,null,null,null,5,8], [4,2,7,1,3,6,9,null,null,null,null,5,8], 6), null, 'Test 21');
test(getTargetCopy([20,10,30,5,15,25,35,2,7,12,17,22,27,32,37,1,3,6,8,11,13,16,18,21,23,26,28,31,33,36,38], [20,10,30,5,15,25,35,2,7,12,17,22,27,32,37,1,3,6,8,11,13,16,18,21,23,26,28,31,33,36,38], 13), null, 'Test 22');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 15), null, 'Test 23');
test(getTargetCopy([5,1,4,null,2,null,3], [5,1,4,null,2,null,3], 3), null, 'Test 24');
test(getTargetCopy([2,1,3,null,null,4,5,null,null,6,7], [2,1,3,null,null,4,5,null,null,6,7], 7), null, 'Test 25');
test(getTargetCopy([2,null,3,null,4,null,5,null,6], [2,null,3,null,4,null,5,null,6], 6), null, 'Test 26');
test(getTargetCopy([1,2,3,4,null,5,6,null,null,7,8], [1,2,3,4,null,5,6,null,null,7,8], 7), null, 'Test 27');
test(getTargetCopy([20,10,30,5,15,25,35,3,7,12,18,23,28,33,38,1,4,6,8,11,13,17,19,22,24,27,29,32,36,31,34,37,39,40], [20,10,30,5,15,25,35,3,7,12,18,23,28,33,38,1,4,6,8,11,13,17,19,22,24,27,29,32,36,31,34,37,39,40], 28), null, 'Test 28');
test(getTargetCopy([1,2,3,null,null,4,5,6,7,8,9], [1,2,3,null,null,4,5,6,7,8,9], 6), null, 'Test 29');
test(getTargetCopy([3,5,1,6,2,0,8,null,null,7,4], [3,5,1,6,2,0,8,null,null,7,4], 5), null, 'Test 30');
test(getTargetCopy([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 7), null, 'Test 31');
test(getTargetCopy([5,3,6,2,4,null,7,1], [5,3,6,2,4,null,7,1], 2), null, 'Test 32');
test(getTargetCopy([10,5,15,3,7,null,18], [10,5,15,3,7,null,18], 7), null, 'Test 33');
test(getTargetCopy([10,5,15,3,7,13,18,1,null,6], [10,5,15,3,7,13,18,1,null,6], 13), null, 'Test 34');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 13), null, 'Test 35');
test(getTargetCopy([3,1,4,null,2,null,null,null,null], [3,1,4,null,2,null,null,null,null], 2), null, 'Test 36');
test(getTargetCopy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), null, 'Test 37');
test(getTargetCopy([10,5,15,3,7,null,18,1,null,6], [10,5,15,3,7,null,18,1,null,6], 15), null, 'Test 38');
test(getTargetCopy([2,1,null,5,6], [2,1,null,5,6], 5), null, 'Test 39');
test(getTargetCopy([5,3,6,2,4,null,7,1,null,null,null,8], [5,3,6,2,4,null,7,1,null,null,null,8], 8), null, 'Test 40');
test(getTargetCopy([6,2,8,0,4,7,9,null,null,3,5], [6,2,8,0,4,7,9,null,null,3,5], 3), null, 'Test 41');
test(getTargetCopy([2,1,null,null,3,null,null,null,4,null,null,null,5,null,null,null,6,null,null,null,7], [2,1,null,null,3,null,null,null,4,null,null,null,5,null,null,null,6,null,null,null,7], 7), null, 'Test 42');
test(getTargetCopy([1,2,2,3,4,4,3], [1,2,2,3,4,4,3], 4), null, 'Test 43');
test(getTargetCopy([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], 9), null, 'Test 44');
test(getTargetCopy([2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11], [2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11], 8), null, 'Test 45');
test(getTargetCopy([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], [100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 60), null, 'Test 46');
test(getTargetCopy([2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 13), null, 'Test 47');
test(getTargetCopy([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 5), null, 'Test 48');
test(getTargetCopy([5,3,6,2,4,null,8,1,null,null,null,7,9], [5,3,6,2,4,null,8,1,null,null,null,7,9], 1), null, 'Test 49');
test(getTargetCopy([50,40,60,30,45,55,65,20,null,null,null,null,null,25,null], [50,40,60,30,45,55,65,20,null,null,null,null,null,25,null], 25), null, 'Test 50');
test(getTargetCopy([10,5,15,3,7,12,18,1,null,6], [10,5,15,3,7,12,18,1,null,6], 18), null, 'Test 51');
test(getTargetCopy([2,1,null,5,null,3,null,4,null], [2,1,null,5,null,3,null,4,null], 4), null, 'Test 52');
test(getTargetCopy([5,3,6,2,4,null,7,1,null,null,null,8], [5,3,6,2,4,null,7,1,null,null,null,8], 7), null, 'Test 53');
test(getTargetCopy([3,1,4,null,2], [3,1,4,null,2], 2), null, 'Test 54');
test(getTargetCopy([10,5,-3,3,2,null,11,3,-2,null,1], [10,5,-3,3,2,null,11,3,-2,null,1], 3), null, 'Test 55');
test(getTargetCopy([10,5,15,3,7,null,18,null,null,6], [10,5,15,3,7,null,18,null,null,6], 15), null, 'Test 56');
test(getTargetCopy([20,10,30,5,15,null,null,3,7,null,null,12,18], [20,10,30,5,15,null,null,3,7,null,null,12,18], 7), null, 'Test 57');
test(getTargetCopy([1,null,2,null,3,null,4,null,5], [1,null,2,null,3,null,4,null,5], 5), null, 'Test 58');
test(getTargetCopy([100,50,150,25,75,125,175,10,35,60,90,110,140,160,190,5,15,28,40,55,65,80,95,105,115,130,135,145,155,180,195], [100,50,150,25,75,125,175,10,35,60,90,110,140,160,190,5,15,28,40,55,65,80,95,105,115,130,135,145,155,180,195], 135), null, 'Test 59');
test(getTargetCopy([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8], [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8], 7), null, 'Test 60');

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
