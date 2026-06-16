// Test: 98. Validate Binary Search Tree
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { isValidBST } = require("./solution");

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

console.log("\n98. Validate Binary Search Tree\n");

test(isValidBST([1,null,1]), false, 'Test 1');
test(isValidBST([5,4,6,null,null,3,7]), false, 'Test 2');
test(isValidBST([0,-1]), true, 'Test 3');
test(isValidBST([5,1,4,null,null,3,6]), false, 'Test 4');
test(isValidBST([3,1,5,0,2,4,6]), true, 'Test 5');
test(isValidBST([3,1,4,3,2,6,5]), false, 'Test 6');
test(isValidBST([2,2,2]), false, 'Test 7');
test(isValidBST([2,null,1]), false, 'Test 8');
test(isValidBST([1,2]), false, 'Test 9');
test(isValidBST([2147483647]), true, 'Test 10');
test(isValidBST([1,null,2]), true, 'Test 11');
test(isValidBST([2,1,3]), true, 'Test 12');
test(isValidBST([32,26,47,19,null,null,56,null,27]), false, 'Test 13');
test(isValidBST([1, null, 2, 3]), false, 'Test 14');
test(isValidBST([4,2,6,1,3,5,7]), true, 'Test 15');
test(isValidBST([1]), true, 'Test 16');
test(isValidBST([10,5,15,null,null,6,20]), false, 'Test 17');
test(isValidBST([5,4,6,3,null,null,7]), true, 'Test 18');
test(isValidBST([3,2,5,1,null,null,6,0,null,null,4]), false, 'Test 19');
test(isValidBST([1,0,2,null,null,1.5,2.5]), true, 'Test 20');
test(isValidBST([5,3,7,1,4,6,9,null,null,null,null,null,10]), false, 'Test 21');
test(isValidBST([8,5,10,null,6,8,15,null,null,7]), false, 'Test 22');
test(isValidBST([9,7,10,null,null,8,null,6]), false, 'Test 23');
test(isValidBST([5,1,5,null,null,4,6]), false, 'Test 24');
test(isValidBST([10,5,15,3,7,null,18]), true, 'Test 25');
test(isValidBST([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190]), true, 'Test 26');
test(isValidBST([5,3,7,2,4,6,8,null,null,null,null,null,null,9]), false, 'Test 27');
test(isValidBST([6,2,8,0,4,7,9,null,null,3,5]), true, 'Test 28');
test(isValidBST([3,null,30,10,null,null,15,null,45]), false, 'Test 29');
test(isValidBST([10,null,20,15,30,null,null,12,17]), false, 'Test 30');
test(isValidBST([2,1,3,null,null,2]), false, 'Test 31');
test(isValidBST([10,5,15,1,7,null,20,null,null,6,8]), true, 'Test 32');
test(isValidBST([1,0,2,null,null,1.5]), true, 'Test 33');
test(isValidBST([5,1,5,null,null,5,5]), false, 'Test 34');
test(isValidBST([5,3,7,2,4,null,8]), true, 'Test 35');
test(isValidBST([50,20,60,10,25,55,70,5,15,22,30,52,65,67,80]), false, 'Test 36');
test(isValidBST([2,null,3,null,4,null,5,null,6]), true, 'Test 37');
test(isValidBST([8,5,15,1,7,null,18,null,6]), false, 'Test 38');
test(isValidBST([3,1,5,0,2,4,6,null,null,null,3]), false, 'Test 39');
test(isValidBST([8,5,15,1,7,10,18,null,null,null,8]), false, 'Test 40');
test(isValidBST([32,26,40,17,27,null,45,null,null,null,29,30]), false, 'Test 41');
test(isValidBST([12,7,14,3,9,13,15,null,null,8]), true, 'Test 42');
test(isValidBST([50,30,80,20,40,70,90,null,null,25,45,65,75,null,null,null,null,42]), false, 'Test 43');
test(isValidBST([9,4,10,null,null,null,11]), true, 'Test 44');
test(isValidBST([5,1,6,null,null,3,7,null,null,null,8]), false, 'Test 45');
test(isValidBST([2147483646,2147483647]), false, 'Test 46');
test(isValidBST([2,2,2,2,2,2,2]), false, 'Test 47');
test(isValidBST([7,3,15,null,null,9,20]), true, 'Test 48');
test(isValidBST([100,50,150,null,null,60,200]), false, 'Test 49');
test(isValidBST([12,7,14,3,9,13,20,1,5,8,11,12,17,16,18]), false, 'Test 50');
test(isValidBST([2,1,3,0,5,null,4]), false, 'Test 51');
test(isValidBST([5,4,6,null,null,3,7,2,null,null,null,4,null]), false, 'Test 52');
test(isValidBST([10,5,15,3,7,null,18,2,null,null,null,16]), true, 'Test 53');
test(isValidBST([7,3,15,null,null,null,20]), true, 'Test 54');
test(isValidBST([1,0,2,null,null,3,null]), false, 'Test 55');
test(isValidBST([32,26,40,18,28,36,48,13,19,27,31,34,43,49,52,null,14,null,null,24,29,null,null,32,null,35,41,44,46,47,50,null,null,51]), false, 'Test 56');
test(isValidBST([2,null,3,null,null,4]), true, 'Test 57');
test(isValidBST([5,2,14,null,null,10,20,8,15,11,19]), false, 'Test 58');
test(isValidBST([10,5,15,1,8,12,20,null,null,6,9,11,13]), true, 'Test 59');
test(isValidBST([12,7,14,3,9,13,18,1,null,8,null,11,15,null,17]), false, 'Test 60');
test(isValidBST([2,1,3,null,null,2,4]), false, 'Test 61');
test(isValidBST([1,null,2,null,3,null,4,null,5]), true, 'Test 62');
test(isValidBST([120,70,140,50,100,130,160,20,60,80,110,125,150,180,200]), false, 'Test 63');
test(isValidBST([1,1,null,1]), false, 'Test 64');
test(isValidBST([1,2,3,4,null,null,5]), false, 'Test 65');
test(isValidBST([1,1]), false, 'Test 66');
test(isValidBST([1,0,2]), true, 'Test 67');
test(isValidBST([5,1,4,null,null,3,6,2,2]), false, 'Test 68');
test(isValidBST([1,null,2,null,3,null,4]), true, 'Test 69');
test(isValidBST([5,3,7,2,4,6,8]), true, 'Test 70');
test(isValidBST([32,26,40,19,27,null,44,null,null,null,null,null,42]), false, 'Test 71');
test(isValidBST([50,30,80,20,40,70,90]), true, 'Test 72');
test(isValidBST([1,null,2,null,null,null,3,null,null,null,4]), true, 'Test 73');
test(isValidBST([1,null,1,null,1,null,1,null,1]), false, 'Test 74');
test(isValidBST([5,1,4,null,null,null,6]), false, 'Test 75');
test(isValidBST([3,2,4,null,null,3,null]), false, 'Test 76');
test(isValidBST([12,5,18,2,9,15,19,1,3,7,11,14,17,20]), false, 'Test 77');
test(isValidBST([5,1,8,null,4,7,9]), true, 'Test 78');
test(isValidBST([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 79');
test(isValidBST([8,5,10,null,6,9,11]), true, 'Test 80');
test(isValidBST([5,3,7,2,4,6,8,1,null,null,null,null,null,9]), false, 'Test 81');
test(isValidBST([5,1,5,null,7]), false, 'Test 82');
test(isValidBST([2,1,3,0,2,null,4]), false, 'Test 83');
test(isValidBST([3,1,4,3,3]), false, 'Test 84');
test(isValidBST([5,2,8,1,3,null,9]), true, 'Test 85');
test(isValidBST([20,10,30,5,15,null,null,null,null,13,18]), true, 'Test 86');
test(isValidBST([10,5,15,null,null,12,20]), true, 'Test 87');
test(isValidBST([3,1,4,null,null,2,6]), false, 'Test 88');
test(isValidBST([2147483647,2147483647]), false, 'Test 89');
test(isValidBST([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), true, 'Test 90');
test(isValidBST([5,3,7,2,4,6,8,null,null,null,null,null,null,null,9]), true, 'Test 91');
test(isValidBST([50,30,70,20,40,60,80,10,25,35,45,55,65,75,90]), true, 'Test 92');
test(isValidBST([1,2,3,4,5]), false, 'Test 93');
test(isValidBST([50,30,80,20,40,70,90,null,null,25,45,65,75,null,null,null,null,41]), false, 'Test 94');
test(isValidBST([1,null,3,null,2]), false, 'Test 95');
test(isValidBST([5,4,6,3,null,null,7,2,null,null,null,null,8]), false, 'Test 96');
test(isValidBST([10,5,15,1,7,null,18]), true, 'Test 97');

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
