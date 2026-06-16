// Test: 111. Minimum Depth Of Binary Tree
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { minDepth } = require("./solution");

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

console.log("\n111. Minimum Depth Of Binary Tree\n");

test(minDepth([1,2,3,4,5,6,7]), 3, 'Test 1');
test(minDepth([0,2,4,1,null,3,-1,5,1,null,6,null,8]), 4, 'Test 2');
test(minDepth([1,null,2,null,3,null,4,null,5]), 5, 'Test 3');
test(minDepth([0,1,2,3,4,5,6,7,8,9]), 3, 'Test 4');
test(minDepth([2,null,3,null,4,null,5,null,6]), 5, 'Test 5');
test(minDepth([1,2,3,4,null,null,5]), 3, 'Test 6');
test(minDepth([1,2]), 2, 'Test 7');
test(minDepth([1,2,3,4,5,null,null,6,7,null,8,null,null,9,10]), 2, 'Test 8');
test(minDepth([0]), 1, 'Test 9');
test(minDepth([3,9,20,null,null,15,7]), 2, 'Test 10');
test(minDepth([1]), 1, 'Test 11');
test(minDepth([]), 0, 'Test 12');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 13');
test(minDepth([1,2,3,null,null,null,4,null,null,5,null,null,6]), 2, 'Test 14');
test(minDepth([1,2,2,3,null,null,3,4,null,null,4]), 4, 'Test 15');
test(minDepth([1,2,3,4,null,null,5,null,null,6,null,null,7]), 3, 'Test 16');
test(minDepth([10,5,15,null,null,6,20]), 2, 'Test 17');
test(minDepth([1,2,3,null,null,4,null,null,5,null,6,null,7,null,8]), 2, 'Test 18');
test(minDepth([10,9,8,7,6,5,4,3,2,1,null,null,null,null,null,null,null,null,null,null]), 3, 'Test 19');
test(minDepth([3,9,20,null,null,15,7,null,null,null,18]), 2, 'Test 20');
test(minDepth([1,null,null,2,null,null,3,null,null,4,null,null,5]), 1, 'Test 21');
test(minDepth([1,2,3,4,5,null,6,null,7,null,null,null,null,null,8]), 3, 'Test 22');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), 8, 'Test 23');
test(minDepth([1,null,2,null,null,null,3,null,null,null,null,4,null,null,null,null,null,5,null,null,null,null,null,6,null,null,null,null,null,7,null,null,null,null,null,8,null,null,null,null,null,9,null,null,null,null,null,10,null,null,null,null,null,11]), 2, 'Test 24');
test(minDepth([1,2,3,4,null,5,null,null,null,null,null,6]), 3, 'Test 25');
test(minDepth([1,2,3,4,null,null,5,null,null,null,null,6,7,null,8]), 3, 'Test 26');
test(minDepth([3,9,20,15,7,25,28,30,null,null,null,29,31]), 3, 'Test 27');
test(minDepth([1,null,2,null,null,null,3,null,null,null,null,4,null,null,null,null,5,null,null,null,null,6,null,null,null,null,7]), 2, 'Test 28');
test(minDepth([1,2,3,4,5,6,7,null,null,null,10,11,12,13,null,null,16,17,18,19]), 3, 'Test 29');
test(minDepth([1,2,2,3,3,null,null,4,4]), 2, 'Test 30');
test(minDepth([3,9,20,null,1,15,7,null,null,14,6,null,8]), 3, 'Test 31');
test(minDepth([1,2,3,4,5,null,6,null,null,null,null,7,8,null,null,9,null]), 3, 'Test 32');
test(minDepth([1,2,3,null,4,null,null,5,null,null,6,null,null,7]), 2, 'Test 33');
test(minDepth([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30]), 30, 'Test 34');
test(minDepth([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 6, 'Test 35');
test(minDepth([1,null,2,null,null,null,3,null,null,null,null,4,null,null,null,null,5]), 2, 'Test 36');
test(minDepth([1,2,3,4,5,null,6,null,7,null,8,9,null,10]), 4, 'Test 37');
test(minDepth([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7]), 2, 'Test 38');
test(minDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,14,null,null,null,null,15,null,null,null,null,16,null,null,null,null,17,null,null,null,null,18,null,null,null,null,19,null,null,null,null,20]), 3, 'Test 39');
test(minDepth([1,2,3,4,null,5,null,6,null,7]), 4, 'Test 40');
test(minDepth([1,2,null,null,3,null,null,null,null,4,null,5]), 3, 'Test 41');
test(minDepth([5,4,8,11,null,13,4,7,2,null,null,null,1]), 3, 'Test 42');
test(minDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,16]), 4, 'Test 43');
test(minDepth([1,2,3,4,5,null,null,6,7,8,9,null,null,null,null,10,11]), 2, 'Test 44');
test(minDepth([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9]), 5, 'Test 45');
test(minDepth([1,null,null,2,null,null,null,3]), 1, 'Test 46');
test(minDepth([1,null,2,null,null,null,null,3,null,null,null,null,null,4,null,null,null,null,null,5]), 2, 'Test 47');
test(minDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 5, 'Test 48');
test(minDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 4, 'Test 49');
test(minDepth([1,2,3,null,4,null,5,null,null,null,null,null,6,null,null,null,null,null,7,null,null,null,null,null,8,null,null,null,null,null,9]), 3, 'Test 50');
test(minDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16]), 4, 'Test 51');
test(minDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 4, 'Test 52');
test(minDepth([1,2,3,4,5,6,7,8,null,null,null,null,12,null,14]), 3, 'Test 53');
test(minDepth([1,2,3,null,4,null,null,5,6]), 2, 'Test 54');
test(minDepth([1,2,null,3,null,4,null,5]), 5, 'Test 55');
test(minDepth([1,2,3,4,5,null,6,7,null,8,9,null,null,10]), 3, 'Test 56');
test(minDepth([1,null,2,3,null,null,4,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), 6, 'Test 57');
test(minDepth([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 4, 'Test 58');
test(minDepth([1,null,2,null,null,null,3,null,4,null,5,null,6,null,7]), 2, 'Test 59');
test(minDepth([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 8, 'Test 60');
test(minDepth([10,5,15,null,7,null,18,null,8,null,20,16,22]), 4, 'Test 61');
test(minDepth([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), 7, 'Test 62');
test(minDepth([1,2,null,4,null,null,5,null,6,null,7,null,8]), 7, 'Test 63');
test(minDepth([1,2,2,3,3,null,null,4,4,null,null,null,null,5,5]), 2, 'Test 64');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6,null,7]), 7, 'Test 65');
test(minDepth([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25]), 13, 'Test 66');
test(minDepth([1,2,3,4,5,null,null,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13]), 2, 'Test 67');
test(minDepth([5,1,4,null,null,3,6]), 2, 'Test 68');
test(minDepth([5,3,6,2,4,null,7,1]), 3, 'Test 69');
test(minDepth([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 6, 'Test 70');
test(minDepth([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 5, 'Test 71');
test(minDepth([1,2,3,4,5,null,7,null,null,null,null,null,8]), 3, 'Test 72');
test(minDepth([1,2,3,null,5,null,7,null,9]), 3, 'Test 73');
test(minDepth([1,2,3,4,null,5,null,6,null,null,null,null,7,null,null,null,null,null,8,null,null,null,null,null,9,null,null,null,null,null,10,null,null,null,null,null,11,null,null,null,null,null,12,null,null,null,null,null,13]), 3, 'Test 74');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6]), 6, 'Test 75');
test(minDepth([3,9,20,null,null,15,7,null,null,null,null,16,18,17]), 2, 'Test 76');
test(minDepth([3,9,null,8,null,null,10,null,null,null,null,11,null,null,null,null,12]), 4, 'Test 77');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 12, 'Test 78');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), 16, 'Test 79');
test(minDepth([1,null,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7]), 1, 'Test 80');
test(minDepth([1,null,2,null,null,null,3,null,null,null,null,4,null,null,null,null,null,5,null,null,null,null,null,6]), 2, 'Test 81');
test(minDepth([1,2,3,4,5,6,7,8,null,null,9,10,null,null,11]), 4, 'Test 82');
test(minDepth([1,null,2,3,null,null,4,5,null,6,7,null,null,8,9,null,null,10,11,null,12,null,13]), 6, 'Test 83');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), 13, 'Test 84');
test(minDepth([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 85');
test(minDepth([1,2,3,null,null,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,null,null,null,14]), 2, 'Test 86');
test(minDepth([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 11, 'Test 87');
test(minDepth([1,2,2,3,3,null,null,4,4,null,null,5,5]), 2, 'Test 88');
test(minDepth([3,9,20,null,null,15,7,null,null,14,6,null,null,null,8]), 2, 'Test 89');
test(minDepth([42]), 1, 'Test 90');
test(minDepth([1,2,3,4,5,null,6,7,null,null,8,null,null,null,9]), 3, 'Test 91');
test(minDepth([1,2,3,4,5,6,7,null,8,9,null,10,null,11,null,12]), 4, 'Test 92');
test(minDepth([1,2,3,4,5,null,null,6,7,8,9,10,11,12,13]), 2, 'Test 93');
test(minDepth([1,2,2,3,4,4,3]), 3, 'Test 94');
test(minDepth([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,null,12]), 12, 'Test 95');

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
