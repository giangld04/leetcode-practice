// Test: 623. Add One Row To Tree
// 40 test cases from LeetCodeDataset
// Run: node test.js

const { addOneRow } = require("./solution");

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

console.log("\n623. Add One Row To Tree\n");

test(addOneRow(depth), Error: Solution.addOneRow[] missing 3 required positional arguments: 'root', 'val', and 'depth', 'Test 1');
test(addOneRow(val), Error: Solution.addOneRow[] missing 3 required positional arguments: 'root', 'val', and 'depth', 'Test 2');
test(addOneRow(root), Error: Solution.addOneRow[] missing 3 required positional arguments: 'root', 'val', and 'depth', 'Test 3');
test(addOneRow([1,2,3,4,5,6,7], 0, 2), [1, 0, 0, 2, null, null, 3, 4, 5, 6, 7], 'Test 4');
test(addOneRow([1,2,3,4,5,6,7], 0, 4), [1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 5');
test(addOneRow([1,2,3,4], 5, 5), [1, 2, 3, 4], 'Test 6');
test(addOneRow([1,2,3,4,5,6,7], 10, 4), [1, 2, 3, 4, 5, 6, 7, 10, 10, 10, 10, 10, 10, 10, 10], 'Test 7');
test(addOneRow([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, 3), [1, 2, 3, 1, 1, 1, 1, 4, null, null, 5, 6, null, null, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 8');
test(addOneRow([1,null,2,null,3], 4, 4), [1, null, 2, null, 3, 4, 4], 'Test 9');
test(addOneRow([1,null,2,null,3,null,4], 5, 5), [1, null, 2, null, 3, null, 4, 5, 5], 'Test 10');
test(addOneRow([1,2,3], 4, 4), [1, 2, 3], 'Test 11');
test(addOneRow([1,null,2,null,3,null,4], 5, 4), [1, null, 2, null, 3, 5, 5, null, null, null, 4], 'Test 12');
test(addOneRow([1,2,3], 5, 4), [1, 2, 3], 'Test 13');
test(addOneRow([5,4,8,11,null,17,4,7,1,null,null,5,3], 1, 3), [5, 4, 8, 1, 1, 1, 1, 11, null, null, null, 17, null, null, 4, 7, 1, null, null, 5, 3], 'Test 14');
test(addOneRow([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, 1), [1, 1, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 15');
test(addOneRow([1,2,3,4,5,6,7], 0, 3), [1, 2, 3, 0, 0, 0, 0, 4, null, null, 5, 6, null, null, 7], 'Test 16');
test(addOneRow([1,2,3,4,5,6,7], 8, 1), [8, 1, null, 2, 3, 4, 5, 6, 7], 'Test 17');
test(addOneRow([1,2,3,4,5,6,7], 8, 4), [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8], 'Test 18');
test(addOneRow([1], 2, 1), [2, 1], 'Test 19');
test(addOneRow([1,2,3,4,5,6,7], 3, 3), [1, 2, 3, 3, 3, 3, 3, 4, null, null, 5, 6, null, null, 7], 'Test 20');
test(addOneRow([1,2,3,4], 5, 4), [1, 2, 3, 4, null, null, null, 5, 5], 'Test 21');
test(addOneRow([1,null,2,null,3,null,4,null,5], 2, 3), [1, null, 2, 2, 2, null, null, null, 3, null, 4, null, 5], 'Test 22');
test(addOneRow([5,4,8,11,null,13,4,7,2,null,null,null,1], 3, 3), [5, 4, 8, 3, 3, 3, 3, 11, null, null, null, 13, null, null, 4, 7, 2, null, null, null, 1], 'Test 23');
test(addOneRow([1,null,2,null,3,null,4], 5, 3), [1, null, 2, 5, 5, null, null, null, 3, null, 4], 'Test 24');
test(addOneRow([4,2,6,3,1,5], 1, 2), [4, 1, 1, 2, null, null, 6, 3, 1, 5], 'Test 25');
test(addOneRow([1,2,3], 4, 5), [1, 2, 3], 'Test 26');
test(addOneRow([4,2,null,3,1], 1, 3), [4, 2, null, 1, 1, 3, null, null, 1], 'Test 27');
test(addOneRow([1,null,2], 3, 2), [1, 3, 3, null, null, null, 2], 'Test 28');
test(addOneRow([1,2,3,4,5,6,7,8,9], 6, 2), [1, 6, 6, 2, null, null, 3, 4, 5, 6, 7, 8, 9], 'Test 29');
test(addOneRow([1,2,3,4,5], -1, 2), [1, -1, -1, 2, null, null, 3, 4, 5], 'Test 30');
test(addOneRow([1,2,3,null,4], 5, 3), [1, 2, 3, 5, 5, 5, 5, null, null, null, 4], 'Test 31');
test(addOneRow([1,2,3,4], 5, 2), [1, 5, 5, 2, null, null, 3, 4], 'Test 32');
test(addOneRow([1,2,3], 4, 2), [1, 4, 4, 2, null, null, 3], 'Test 33');
test(addOneRow([1,2,3,4,5,6,7], 3, 4), [1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 34');
test(addOneRow([1,2,3,4,5], 0, 4), [1, 2, 3, 4, 5, null, null, 0, 0, 0, 0], 'Test 35');
test(addOneRow([5,4,8,11,null,13,4,7,2,null,null,5,1], 1, 2), [5, 1, 1, 4, null, null, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 'Test 36');
test(addOneRow([1,2,3], 0, 2), [1, 0, 0, 2, null, null, 3], 'Test 37');
test(addOneRow([1,null,2,null,3,null,4,null,5], 1, 3), [1, null, 2, 1, 1, null, null, null, 3, null, 4, null, 5], 'Test 38');
test(addOneRow([1,null,2,null,3], 4, 2), [1, 4, 4, null, null, null, 2, null, 3], 'Test 39');
test(addOneRow([5,4,8,11,null,17,4,7,1,5,3], 2, 3), [5, 4, 8, 2, 2, 2, 2, 11, null, null, null, 17, null, null, 4, 7, 1, 5, 3], 'Test 40');

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
