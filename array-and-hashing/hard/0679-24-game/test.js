// Test: 679. 24 Game
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { judgePoint24 } = require("./solution");

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

console.log("\n679. 24 Game\n");

test(judgePoint24([9,9,9,9]), false, 'Test 1');
test(judgePoint24([2,8,1,4]), true, 'Test 2');
test(judgePoint24([4,4,7,7]), true, 'Test 3');
test(judgePoint24([1,10,1,10]), false, 'Test 4');
test(judgePoint24([1,3,4,6]), true, 'Test 5');
test(judgePoint24([9,5,5,1]), true, 'Test 6');
test(judgePoint24([2,3,6,9]), true, 'Test 7');
test(judgePoint24([1,1,7,7]), false, 'Test 8');
test(judgePoint24([7,3,7,2]), true, 'Test 9');
test(judgePoint24([8,1,6,3]), true, 'Test 10');
test(judgePoint24([4,1,8,7]), true, 'Test 11');
test(judgePoint24([2,2,2,2]), false, 'Test 12');
test(judgePoint24([7,7,8,9]), false, 'Test 13');
test(judgePoint24([1,2,1,2]), false, 'Test 14');
test(judgePoint24([9,5,5,6]), false, 'Test 15');
test(judgePoint24([7,3,4,7]), true, 'Test 16');
test(judgePoint24([6,6,6,6]), true, 'Test 17');
test(judgePoint24([2,3,6,6]), true, 'Test 18');
test(judgePoint24([1,5,9,1]), false, 'Test 19');
test(judgePoint24([1,1,1,1]), false, 'Test 20');
test(judgePoint24([5,5,5,5]), true, 'Test 21');
test(judgePoint24([3,3,8,8]), true, 'Test 22');
test(judgePoint24([9,5,3,2]), true, 'Test 23');
test(judgePoint24([7,8,9,1]), true, 'Test 24');
test(judgePoint24([6,1,9,4]), true, 'Test 25');
test(judgePoint24([7,2,4,6]), true, 'Test 26');
test(judgePoint24([1,2,7,7]), true, 'Test 27');
test(judgePoint24([8, 3, 8, 3]), true, 'Test 28');
test(judgePoint24([4,6,6,6]), true, 'Test 29');
test(judgePoint24([7,8,9,6]), true, 'Test 30');
test(judgePoint24([5,5,1,9]), true, 'Test 31');
test(judgePoint24([9, 7, 2, 5]), true, 'Test 32');
test(judgePoint24([4,6,7,1]), true, 'Test 33');
test(judgePoint24([8,1,3,4]), true, 'Test 34');
test(judgePoint24([5,3,8,1]), true, 'Test 35');
test(judgePoint24([1,2,6,7]), true, 'Test 36');
test(judgePoint24([5,3,2,7]), true, 'Test 37');
test(judgePoint24([8,5,3,1]), true, 'Test 38');
test(judgePoint24([7, 9, 3, 1]), true, 'Test 39');
test(judgePoint24([9,2,4,5]), true, 'Test 40');
test(judgePoint24([9,5,6,3]), true, 'Test 41');
test(judgePoint24([6,4,3,2]), true, 'Test 42');
test(judgePoint24([9,1,7,3]), true, 'Test 43');
test(judgePoint24([9, 1, 9, 1]), false, 'Test 44');
test(judgePoint24([9,7,9,7]), false, 'Test 45');
test(judgePoint24([2,7,8,1]), true, 'Test 46');
test(judgePoint24([8,8,4,4]), true, 'Test 47');
test(judgePoint24([1,9,8,7]), true, 'Test 48');
test(judgePoint24([1,6,7,8]), false, 'Test 49');
test(judgePoint24([2,5,7,10]), true, 'Test 50');
test(judgePoint24([6,6,2,4]), true, 'Test 51');
test(judgePoint24([7,2,3,4]), true, 'Test 52');
test(judgePoint24([2,8,4,1]), true, 'Test 53');
test(judgePoint24([6, 6, 1, 9]), true, 'Test 54');
test(judgePoint24([4,4,2,2]), true, 'Test 55');
test(judgePoint24([5,5,1,1]), true, 'Test 56');
test(judgePoint24([3,9,7,2]), true, 'Test 57');
test(judgePoint24([2, 8, 3, 7]), true, 'Test 58');
test(judgePoint24([6,5,4,3]), true, 'Test 59');
test(judgePoint24([4, 7, 1, 6]), true, 'Test 60');
test(judgePoint24([9,7,5,3]), true, 'Test 61');
test(judgePoint24([5, 5, 1, 5]), true, 'Test 62');
test(judgePoint24([7,3,9,2]), true, 'Test 63');
test(judgePoint24([8, 1, 6, 3]), true, 'Test 64');
test(judgePoint24([7,8,6,2]), true, 'Test 65');
test(judgePoint24([3, 3, 8, 8]), true, 'Test 66');
test(judgePoint24([6, 7, 1, 3]), true, 'Test 67');
test(judgePoint24([6,7,8,9]), true, 'Test 68');
test(judgePoint24([1,6,6,6]), true, 'Test 69');
test(judgePoint24([7,7,7,7]), false, 'Test 70');
test(judgePoint24([4,4,2,8]), true, 'Test 71');
test(judgePoint24([5, 5, 3, 5]), false, 'Test 72');
test(judgePoint24([9,7,3,2]), true, 'Test 73');
test(judgePoint24([9,5,2,7]), true, 'Test 74');
test(judgePoint24([2,8,7,9]), true, 'Test 75');
test(judgePoint24([2,3,6,1]), true, 'Test 76');
test(judgePoint24([4,9,1,8]), true, 'Test 77');
test(judgePoint24([1,9,9,1]), false, 'Test 78');
test(judgePoint24([7, 2, 1, 10]), true, 'Test 79');
test(judgePoint24([9,3,5,7]), true, 'Test 80');
test(judgePoint24([5,3,3,9]), true, 'Test 81');
test(judgePoint24([4,6,6,2]), true, 'Test 82');
test(judgePoint24([7,7,2,2]), true, 'Test 83');
test(judgePoint24([9,9,1,1]), false, 'Test 84');
test(judgePoint24([5,7,8,2]), true, 'Test 85');
test(judgePoint24([6,1,1,1]), false, 'Test 86');
test(judgePoint24([7,5,5,2]), true, 'Test 87');
test(judgePoint24([4, 4, 2, 9]), true, 'Test 88');
test(judgePoint24([3,3,7,13]), true, 'Test 89');
test(judgePoint24([1,2,3,4]), true, 'Test 90');
test(judgePoint24([9,5,6,1]), true, 'Test 91');
test(judgePoint24([1,2,3,6]), true, 'Test 92');
test(judgePoint24([3,9,2,6]), true, 'Test 93');
test(judgePoint24([3,6,9,2]), true, 'Test 94');
test(judgePoint24([6, 1, 2, 6]), true, 'Test 95');
test(judgePoint24([9,5,9,5]), true, 'Test 96');
test(judgePoint24([9, 7, 6, 9]), true, 'Test 97');
test(judgePoint24([2, 3, 5, 7]), true, 'Test 98');
test(judgePoint24([2,9,1,6]), true, 'Test 99');
test(judgePoint24([8,8,8,1]), true, 'Test 100');
test(judgePoint24([5,5,6,6]), true, 'Test 101');
test(judgePoint24([4,5,6,7]), true, 'Test 102');
test(judgePoint24([1,1,10,10]), false, 'Test 103');
test(judgePoint24([1, 3, 4, 6]), true, 'Test 104');
test(judgePoint24([5,5,5,1]), true, 'Test 105');
test(judgePoint24([6,3,2,9]), true, 'Test 106');
test(judgePoint24([2,3,5,7]), true, 'Test 107');
test(judgePoint24([8,1,3,7]), true, 'Test 108');
test(judgePoint24([6,1,5,1]), true, 'Test 109');

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
