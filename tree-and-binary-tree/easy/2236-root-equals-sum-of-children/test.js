// Test: 2236. Root Equals Sum Of Children
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { checkTree } = require("./solution");

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

console.log("\n2236. Root Equals Sum Of Children\n");

test(checkTree([1,-1,2]), true, 'Test 1');
test(checkTree([-5,-3,-2]), true, 'Test 2');
test(checkTree([5,3,1]), false, 'Test 3');
test(checkTree([99,50,49]), true, 'Test 4');
test(checkTree([-100,50,50]), false, 'Test 5');
test(checkTree([100,-50,150]), true, 'Test 6');
test(checkTree([1,0,1]), true, 'Test 7');
test(checkTree([2,1,1]), true, 'Test 8');
test(checkTree([0,0,0]), true, 'Test 9');
test(checkTree([10,4,6]), true, 'Test 10');
test(checkTree([-1,1,0]), false, 'Test 11');
test(checkTree([100,0,100]), true, 'Test 12');
test(checkTree([50,-25,75]), true, 'Test 13');
test(checkTree([99,-50,149]), true, 'Test 14');
test(checkTree([-100,0,-100]), true, 'Test 15');
test(checkTree([0,100,-100]), true, 'Test 16');
test(checkTree([100,-1,101]), true, 'Test 17');
test(checkTree([2, 1, 1]), true, 'Test 18');
test(checkTree([-100,-99,-1]), true, 'Test 19');
test(checkTree([-100,100,0]), false, 'Test 20');
test(checkTree([99,-1,-98]), false, 'Test 21');
test(checkTree([-100, 33, -67]), false, 'Test 22');
test(checkTree([0,-1,1]), true, 'Test 23');
test(checkTree([-100,0,0]), false, 'Test 24');
test(checkTree([0, -1, 1]), true, 'Test 25');
test(checkTree([50,25,25]), true, 'Test 26');
test(checkTree([1,100,-99]), true, 'Test 27');
test(checkTree([-75,-25,-50]), true, 'Test 28');
test(checkTree([-1,-1,0]), true, 'Test 29');
test(checkTree([5, 5, 0]), true, 'Test 30');
test(checkTree([100,1,99]), true, 'Test 31');
test(checkTree([-100,-50,-50]), true, 'Test 32');
test(checkTree([99,49,50]), true, 'Test 33');
test(checkTree([-60,-40,-20]), true, 'Test 34');
test(checkTree([100,50,50]), true, 'Test 35');
test(checkTree([1, 0, 1]), true, 'Test 36');
test(checkTree([-50,-25,-25]), true, 'Test 37');
test(checkTree([-2, -1, -1]), true, 'Test 38');
test(checkTree([-99,99,-198]), true, 'Test 39');
test(checkTree([99, 49, 50]), true, 'Test 40');
test(checkTree([33,16,17]), true, 'Test 41');
test(checkTree([-99,50,-51]), false, 'Test 42');
test(checkTree([50, 24, 26]), true, 'Test 43');
test(checkTree([100,-100,200]), true, 'Test 44');
test(checkTree([-25,-25,50]), false, 'Test 45');
test(checkTree([1, -1, 2]), true, 'Test 46');
test(checkTree([1,99,-98]), true, 'Test 47');
test(checkTree([100, 50, 50]), true, 'Test 48');
test(checkTree([100,-50,50]), false, 'Test 49');
test(checkTree([-1,99,-98]), false, 'Test 50');
test(checkTree([50,25,-25]), false, 'Test 51');
test(checkTree([100,99,1]), true, 'Test 52');
test(checkTree([99,-99,198]), true, 'Test 53');
test(checkTree([10, 3, 7]), true, 'Test 54');
test(checkTree([-100,0,100]), false, 'Test 55');
test(checkTree([50, 25, 25]), true, 'Test 56');
test(checkTree([1,1,0]), true, 'Test 57');
test(checkTree([-99, -49, -50]), true, 'Test 58');
test(checkTree([1,2,-1]), true, 'Test 59');
test(checkTree([-10, -5, -5]), true, 'Test 60');
test(checkTree([100, -100, 200]), true, 'Test 61');
test(checkTree([-1, -50, 49]), true, 'Test 62');
test(checkTree([-7, -3, -4]), true, 'Test 63');
test(checkTree([-100,50,-50]), false, 'Test 64');
test(checkTree([10,-10,20]), true, 'Test 65');
test(checkTree([-100,-100,0]), true, 'Test 66');
test(checkTree([50,-25,-25]), false, 'Test 67');
test(checkTree([1, -50, 51]), true, 'Test 68');
test(checkTree([7, 3, 4]), true, 'Test 69');
test(checkTree([-50,25,25]), false, 'Test 70');
test(checkTree([33,32,1]), true, 'Test 71');
test(checkTree([-100, -50, -50]), true, 'Test 72');

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
