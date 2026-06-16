// Test: 473. Matchsticks To Square
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { makesquare } = require("./solution");

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

console.log("\n473. Matchsticks To Square\n");

test(makesquare([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), false, 'Test 1');
test(makesquare([1,1,1,1,2,2,2,2,3,3,3,3]), true, 'Test 2');
test(makesquare([10,10,10,10]), true, 'Test 3');
test(makesquare([5,5,5,5]), true, 'Test 4');
test(makesquare([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), true, 'Test 5');
test(makesquare([1,3,3,3,4]), false, 'Test 6');
test(makesquare([1,1,1,1,2,2,2,2]), true, 'Test 7');
test(makesquare([1,1,2,2,2]), true, 'Test 8');
test(makesquare([1,2,3,4,5]), false, 'Test 9');
test(makesquare([3,3,3,3,3,3,3,3,3,3,3,3,3,3,12]), false, 'Test 10');
test(makesquare([5,5,5,5,4,4,4,4]), true, 'Test 11');
test(makesquare([3,3,3,3,4]), false, 'Test 12');
test(makesquare([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), false, 'Test 13');
test(makesquare([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8]), true, 'Test 14');
test(makesquare([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 15');
test(makesquare([2,2,2,2,2,2,2,2]), true, 'Test 16');
test(makesquare([7,7,7,7,2,2,2,2,2,2,2,2,2,2,2]), false, 'Test 17');
test(makesquare([10,20,30,40,5,5,5,5,5,5,5,5,5,5,5]), false, 'Test 18');
test(makesquare([1,1,1,1,1,1,1,1]), true, 'Test 19');
test(makesquare([1,3,3,4,4,5,5,5,5,5,5,5,5,5,5]), false, 'Test 20');
test(makesquare([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), false, 'Test 21');
test(makesquare([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]), false, 'Test 22');
test(makesquare([7,8,10,10,10,11,11,11,11,12,12,12,12,12,12]), false, 'Test 23');
test(makesquare([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), false, 'Test 24');
test(makesquare([20,20,20,20,20,20,20,20,20,20,20,20,20,20,80]), false, 'Test 25');
test(makesquare([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), false, 'Test 26');
test(makesquare([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), false, 'Test 27');
test(makesquare([1,2,3,4,5,6,7,8,9,10,11,12,13,14,16]), false, 'Test 28');
test(makesquare([1,1,1,1,1,1,1,1,1,1,1,1,1,1,6]), false, 'Test 29');
test(makesquare([1,2,3,4,5,6,7,8,9,10,11,12,13,14,5]), false, 'Test 30');
test(makesquare([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), false, 'Test 31');
test(makesquare([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 30]), false, 'Test 32');
test(makesquare([2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]), false, 'Test 33');
test(makesquare([100000000, 100000000, 100000000, 100000000, 25000000, 25000000, 25000000, 25000000]), true, 'Test 34');
test(makesquare([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), false, 'Test 35');
test(makesquare([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), false, 'Test 36');
test(makesquare([15,15,15,15,15,15,15,15,15,15,15,15,15,15,1]), false, 'Test 37');
test(makesquare([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8]), true, 'Test 38');
test(makesquare([2,3,4,5,6,7,8,9,10,1,11,12,13,14,15]), true, 'Test 39');
test(makesquare([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), false, 'Test 40');
test(makesquare([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4]), true, 'Test 41');
test(makesquare([1,1,1,1,1,1,1,1,1,1,1,1,1,1,5]), false, 'Test 42');
test(makesquare([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9]), false, 'Test 43');
test(makesquare([5,5,5,5,5,5,5,5,5,5,5,5,5,5,1]), false, 'Test 44');
test(makesquare([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]), true, 'Test 45');
test(makesquare([10,10,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 46');
test(makesquare([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), false, 'Test 47');
test(makesquare([1,1,1,1,2,2,2,2,2,2,2,2,2,2,8]), true, 'Test 48');
test(makesquare([1,1,1,1,1,1,1,1,1,1,1,1,1,1,100]), false, 'Test 49');
test(makesquare([10,10,10,10,10,1,1,1,1,1,1,1,1,1,1]), false, 'Test 50');
test(makesquare([1,1,1,1,1,1,1,1,1,1,1,1,1,2,2]), false, 'Test 51');
test(makesquare([100,100,100,100,25,25,25,25,25,25,25,25,25,25,25]), false, 'Test 52');
test(makesquare([100000000,100000000,100000000,100000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000]), false, 'Test 53');
test(makesquare([100000000,100000000,100000000,100000000,1]), false, 'Test 54');
test(makesquare([1,1,2,2,2,3,3,3,4,4,4,5,5,5,6]), false, 'Test 55');
test(makesquare([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), false, 'Test 56');
test(makesquare([10,10,10,10,10,10,10,10,10,10,10,10,10,10,5]), false, 'Test 57');
test(makesquare([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), false, 'Test 58');
test(makesquare([5,5,5,5,5,5,5,5,5,5,5,5,5,1,1]), false, 'Test 59');
test(makesquare([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), true, 'Test 60');
test(makesquare([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3]), true, 'Test 61');
test(makesquare([100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000]), false, 'Test 62');
test(makesquare([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), false, 'Test 63');
test(makesquare([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), true, 'Test 64');
test(makesquare([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), false, 'Test 65');
test(makesquare([1,1,1,1,1,1,1,1,1,1,1,1,1,1,4]), false, 'Test 66');
test(makesquare([10, 20, 30, 40, 10, 20, 30, 40]), true, 'Test 67');
test(makesquare([1,2,3,4,5,6,7,8,9,10,11,12,13,14,28]), false, 'Test 68');
test(makesquare([10,10,10,10,10,10,10,10,10,10,10,10,10,10,1]), false, 'Test 69');
test(makesquare([2,2,2,2,3,3,3,3,4,4,4,4,5,5,5]), false, 'Test 70');
test(makesquare([15,15,15,15,1,2,3,4,5,6,7,8,9,10,11]), false, 'Test 71');
test(makesquare([5,5,5,5,5,5,5,5,5,5,5,5,5,5,15]), false, 'Test 72');
test(makesquare([10,20,30,40,50,15,5,25,35]), false, 'Test 73');
test(makesquare([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), true, 'Test 74');
test(makesquare([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), true, 'Test 75');
test(makesquare([8,8,8,8,8,8,8,8,1,1,1,1,1,1,1]), false, 'Test 76');
test(makesquare([8,8,8,8,8,8,8,8,8,8,8,8,8,8,32]), false, 'Test 77');
test(makesquare([15,15,15,15,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 78');
test(makesquare([100000000,100000000,100000000,100000000]), true, 'Test 79');
test(makesquare([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1]), false, 'Test 80');
test(makesquare([2,3,4,5,6,7,8,9,10,11,12,13,14,15,20]), false, 'Test 81');
test(makesquare([7,7,7,7,7,7,7,7,7,7,7,7,7,7,1]), false, 'Test 82');
test(makesquare([1,2,3,4,5,6,7,8,9,10,11,12,13,14,1]), false, 'Test 83');
test(makesquare([5,5,5,5,5,5,5,5,5,5,5,5,5,5,20]), false, 'Test 84');
test(makesquare([1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), true, 'Test 85');

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
