// Test: 2556. Disconnect Path In A Binary Matrix By At Most One Flip
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { isPossibleToCutPath } = require("./solution");

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

console.log("\n2556. Disconnect Path In A Binary Matrix By At Most One Flip\n");

test(isPossibleToCutPath([[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,0,1,1]]), true, 'Test 1');
test(isPossibleToCutPath([[1,1,1],[1,0,0],[1,1,1]]), true, 'Test 2');
test(isPossibleToCutPath([[1,1,0,0],[1,0,0,0],[1,1,1,0],[1,0,1,1]]), true, 'Test 3');
test(isPossibleToCutPath([[1,0],[0,1]]), true, 'Test 4');
test(isPossibleToCutPath([[1,1,1],[1,0,1],[1,1,1]]), false, 'Test 5');
test(isPossibleToCutPath([[1,1,0],[0,1,0],[0,1,1]]), true, 'Test 6');
test(isPossibleToCutPath([[1,0,0,0],[1,1,1,0],[0,1,1,1],[0,0,0,1]]), true, 'Test 7');
test(isPossibleToCutPath([[1,0,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,1]]), true, 'Test 8');
test(isPossibleToCutPath([[1,0,1,1],[1,1,0,0],[1,1,1,0],[0,1,1,1]]), true, 'Test 9');
test(isPossibleToCutPath([[1,1,1,1],[1,0,0,0],[1,1,1,0],[0,1,1,1]]), true, 'Test 10');
test(isPossibleToCutPath([[1,1,0],[1,0,1],[1,1,1]]), true, 'Test 11');
test(isPossibleToCutPath([[1,0,0,0],[1,1,1,0],[0,1,0,0],[1,1,1,1]]), true, 'Test 12');
test(isPossibleToCutPath([[1,1,0],[1,1,1],[0,1,1]]), true, 'Test 13');
test(isPossibleToCutPath([[1,0,1],[1,1,1],[1,0,1]]), true, 'Test 14');
test(isPossibleToCutPath([[1,1],[1,1]]), false, 'Test 15');
test(isPossibleToCutPath([[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1],[0,0,0,0,0,0,1],[1,1,1,1,1,1,1]]), true, 'Test 16');
test(isPossibleToCutPath([[1,1,1,0,0,0],[1,0,0,0,1,1],[1,1,1,1,0,0],[0,0,1,1,1,1],[1,1,1,0,0,1]]), true, 'Test 17');
test(isPossibleToCutPath([[1,1,1,1,1],[1,0,0,0,1],[1,1,1,0,1],[1,0,1,1,1],[1,1,1,1,1]]), false, 'Test 18');
test(isPossibleToCutPath(0), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 19');
test(isPossibleToCutPath([[1,0,1,0,1,1],[1,1,1,0,0,1],[0,0,1,1,1,1],[1,0,0,0,1,1],[1,1,1,1,1,1]]), true, 'Test 20');
test(isPossibleToCutPath([[1,1,0,0,1,1],[1,0,1,0,1,0],[1,1,1,1,1,1],[0,1,0,1,0,1],[1,1,1,1,1,1]]), true, 'Test 21');
test(isPossibleToCutPath([[1,1,1,1,1,1,1],[0,0,0,0,0,0,1],[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]]), true, 'Test 22');
test(isPossibleToCutPath([[1,0,0,0,0,0,1],[1,1,1,1,1,1,1],[0,0,0,0,0,0,1]]), true, 'Test 23');
test(isPossibleToCutPath([[1,1,1,1,0],[1,0,0,1,1],[1,1,0,0,1],[0,1,1,1,0],[1,0,1,1,1]]), true, 'Test 24');
test(isPossibleToCutPath([[1,1,1,1,1],[1,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]), false, 'Test 25');
test(isPossibleToCutPath([[1,1,1,0,0,0],[1,0,0,0,1,1],[0,1,1,0,0,1],[0,0,1,1,1,1],[1,0,0,0,0,1]]), true, 'Test 26');
test(isPossibleToCutPath([[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1]]), false, 'Test 27');
test(isPossibleToCutPath([[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1]]), true, 'Test 28');
test(isPossibleToCutPath([[1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1]]), false, 'Test 29');
test(isPossibleToCutPath([[1,1,0,0,0,0,1,1,1,1],[1,0,1,1,1,1,0,1,0,1],[1,1,0,0,0,0,0,1,1,1],[1,0,1,1,1,1,1,0,1,0],[1,1,0,0,0,0,1,1,1,1]]), true, 'Test 30');
test(isPossibleToCutPath([[1,1,0,1,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,1,1,1,1]]), true, 'Test 31');
test(isPossibleToCutPath([[1,1,1,1,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,1,1,1],[1,1,1,0,1]]), true, 'Test 32');
test(isPossibleToCutPath(r), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 33');
test(isPossibleToCutPath([[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1]]), true, 'Test 34');
test(isPossibleToCutPath([[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1]]), true, 'Test 35');
test(isPossibleToCutPath([[1,0,1,0,1,0,1,0,1],[1,1,0,1,0,1,0,1,1],[0,1,1,0,1,0,1,0,1],[1,0,1,1,0,1,0,1,1],[1,1,0,1,1,0,1,0,1]]), true, 'Test 36');
test(isPossibleToCutPath(d), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 37');
test(isPossibleToCutPath([[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,1,1,0,1,0,1],[1,0,0,1,0,1,1],[1,1,1,1,1,0,1],[1,0,1,1,1,1,1],[1,1,1,1,1,1,1]]), false, 'Test 38');
test(isPossibleToCutPath([[1,1,1,1,0],[1,0,0,1,0],[1,1,0,1,1],[0,1,1,0,1],[1,0,1,1,1]]), false, 'Test 39');
test(isPossibleToCutPath([[1,1,1,1,0,0,0,1],[1,0,0,1,1,1,0,1],[1,1,0,0,0,1,1,1],[1,0,1,1,1,0,0,1],[1,1,1,1,1,1,1,1]]), false, 'Test 40');
test(isPossibleToCutPath(1), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 41');
test(isPossibleToCutPath([[1,0,0,1],[1,1,1,1],[1,0,0,1],[1,1,1,1],[1,0,0,1]]), true, 'Test 42');
test(isPossibleToCutPath([[1,1,1,1,0,0],[1,0,0,1,1,0],[1,1,0,0,1,1],[0,1,1,0,0,1],[0,0,1,1,1,1]]), false, 'Test 43');
test(isPossibleToCutPath([[1,1,1,1,0,0,1,1],[1,0,0,0,1,1,0,1],[1,1,1,0,1,0,1,1],[0,0,0,1,0,1,0,1],[1,1,1,1,1,0,1,1],[1,0,1,0,1,1,0,1],[1,1,1,1,0,1,1,1]]), true, 'Test 44');
test(isPossibleToCutPath(]), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 45');
test(isPossibleToCutPath([[1,1,1,1,1],[1,0,0,0,1],[1,1,1,0,1],[0,1,0,1,1],[1,0,1,1,1]]), true, 'Test 46');
test(isPossibleToCutPath([[1,1,0,0,1,0],[1,0,1,1,1,1],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,1,1,1,0,1]]), true, 'Test 47');
test(isPossibleToCutPath([[1,0,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1]]), true, 'Test 48');
test(isPossibleToCutPath(), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 49');
test(isPossibleToCutPath([[1,1,1,1,1,1,1],[1,0,0,1,0,0,1],[1,1,1,1,1,1,1],[1,0,0,0,0,1,1],[1,1,1,1,1,1,1]]), false, 'Test 50');
test(isPossibleToCutPath([[1,1,0,0,1,0],[1,0,1,0,1,1],[1,1,1,0,1,0],[1,0,0,1,1,1],[1,1,1,1,1,1],[1,0,1,1,1,1]]), true, 'Test 51');
test(isPossibleToCutPath(,), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 52');
test(isPossibleToCutPath([[1,1,1,0,1,1],[1,0,0,0,0,1],[1,1,1,1,1,1],[1,0,0,0,1,1],[1,1,1,1,1,1]]), true, 'Test 53');
test(isPossibleToCutPath([[1,1,0,0,0,1],[1,0,1,1,0,1],[1,0,0,1,1,1],[1,1,1,0,0,1]]), true, 'Test 54');
test(isPossibleToCutPath([[1,1,0,0,1,1],[1,0,1,1,0,1],[1,1,0,0,1,1],[0,1,1,0,1,1],[1,1,0,1,1,1],[1,1,1,1,0,1]]), true, 'Test 55');
test(isPossibleToCutPath([[1,0,0,1,0],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1],[0,0,0,0,1]]), true, 'Test 56');
test(isPossibleToCutPath([[1,1,1,1,0,0,0],[1,0,0,1,1,0,0],[1,1,0,0,1,1,0],[0,1,1,0,0,1,0],[0,0,1,1,1,1,1]]), true, 'Test 57');
test(isPossibleToCutPath([[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]), false, 'Test 58');
test(isPossibleToCutPath([[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,1,1,0,1,0,1,1],[1,0,0,1,0,1,0,1],[1,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1]]), false, 'Test 59');
test(isPossibleToCutPath([[1,0,0,0,0],[1,1,1,1,0],[0,0,0,1,1],[1,1,0,1,1],[1,0,1,1,1]]), true, 'Test 60');
test(isPossibleToCutPath([[1,1,1,1,1,1,0,1,1,1],[1,0,0,0,0,0,0,1,0,1],[1,1,1,1,1,1,0,1,1,1],[1,0,0,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,1,1,1]]), true, 'Test 61');
test(isPossibleToCutPath([[1,1,0,0,0,0,1,1,1,1],[1,0,1,0,0,0,1,0,0,1],[1,1,1,0,1,0,1,1,0,1],[1,0,0,1,0,1,0,1,0,1],[1,1,1,1,1,0,1,1,1,1],[1,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1]]), true, 'Test 62');
test(isPossibleToCutPath([[1,1,0,0,1,0],[1,0,1,1,0,1],[1,1,1,0,1,1],[1,0,0,1,1,0],[1,1,1,1,1,1]]), true, 'Test 63');
test(isPossibleToCutPath([[1,1,1,1,0,0,0,1,1],[1,0,0,1,1,1,1,0,1],[1,1,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1]]), true, 'Test 64');
test(isPossibleToCutPath([[1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1]]), false, 'Test 65');
test(isPossibleToCutPath([[1,0,1,0,1,0,1],[1,1,0,1,0,1,1],[0,1,1,0,1,0,1],[1,0,1,1,0,1,1],[1,1,0,1,1,0,1],[1,0,1,0,1,1,1]]), true, 'Test 66');
test(isPossibleToCutPath([[1,1,1,0,1],[1,0,0,1,1],[1,1,0,0,1],[0,1,1,0,1],[1,1,1,1,1]]), true, 'Test 67');
test(isPossibleToCutPath([[1,1,0,1,1,1,1,1],[1,0,1,0,0,0,0,1],[1,1,1,1,1,1,0,1],[0,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,1],[1,0,1,1,1,0,1,1],[1,1,1,1,0,1,1,1]]), true, 'Test 68');
test(isPossibleToCutPath([[1,1,1,1,1],[1,0,0,0,1],[1,1,1,0,1],[1,0,1,1,1],[1,1,0,0,1],[1,1,1,1,1]]), false, 'Test 69');
test(isPossibleToCutPath([[1,1,1,1,0,1,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]]), true, 'Test 70');
test(isPossibleToCutPath([[1,1,1,1,0,1],[1,0,0,0,0,1],[1,1,1,1,0,1],[1,0,1,0,1,1],[1,1,1,1,1,1]]), true, 'Test 71');
test(isPossibleToCutPath([[1,1,1,1,1,1],[1,0,0,0,0,1],[1,1,1,1,1,1],[1,0,0,0,0,1],[1,1,1,1,1,1]]), false, 'Test 72');
test(isPossibleToCutPath(=), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 73');
test(isPossibleToCutPath([[1,1,0,0,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,0,1,1],[1,1,1,1,1]]), true, 'Test 74');
test(isPossibleToCutPath([[1,1,1,1,1,1],[1,0,0,0,0,0],[1,1,1,1,1,1],[0,0,0,0,0,1],[1,1,1,1,1,1]]), true, 'Test 75');
test(isPossibleToCutPath([[1,1,0,1,0,1],[1,0,1,1,0,1],[1,1,1,0,1,1],[1,0,1,1,0,1],[1,1,1,1,1,1]]), true, 'Test 76');
test(isPossibleToCutPath([[1,1,1,1,0,0,1],[1,0,0,0,1,0,1],[1,1,1,0,1,0,1],[1,0,1,1,1,0,1],[1,1,1,1,1,0,1]]), true, 'Test 77');
test(isPossibleToCutPath(i), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 78');
test(isPossibleToCutPath([[1,1,1,0,1,0,1,0,1],[1,0,1,1,0,1,0,1,1],[1,1,1,0,1,1,1,0,1],[1,0,1,1,0,1,0,1,0],[1,1,1,0,1,1,1,0,1],[1,0,1,1,0,1,0,1,1],[1,1,1,0,1,1,1,0,1]]), true, 'Test 79');
test(isPossibleToCutPath([[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,0,1,0,1,0,1,1],[1,0,0,1,0,1,0,1,0,1],[1,1,1,1,1,0,1,1,1,1],[1,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1]]), false, 'Test 80');
test(isPossibleToCutPath([[1,1,0,1,0,1,1],[1,0,1,0,1,0,1],[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1],[1,0,1,0,1,0,1],[1,1,0,1,0,1,1]]), true, 'Test 81');
test(isPossibleToCutPath([[1,1,0,0,1,1,0],[1,0,1,1,1,0,1],[1,1,0,1,1,0,1],[0,1,1,0,0,1,1],[1,0,1,1,1,1,1]]), true, 'Test 82');
test(isPossibleToCutPath([[1,0,1,0,1,0,1,0,1,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1],[1,0,1,0,1,0,1,0,1,1]]), true, 'Test 83');
test(isPossibleToCutPath([[1,1,0,1,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,1,1],[1,1,1,1,1]]), true, 'Test 84');
test(isPossibleToCutPath([[1,0,0,1,0,0,0,1,0,1],[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]), true, 'Test 85');
test(isPossibleToCutPath([[1,1,0,0,0,1,1],[1,0,1,1,1,0,1],[1,1,1,0,1,1,1],[0,1,0,1,0,0,1],[1,1,1,1,1,1,1]]), true, 'Test 86');
test(isPossibleToCutPath([[1,1,1,1,0,0],[1,0,1,0,1,0],[1,1,1,0,0,1],[1,0,1,1,0,1],[1,1,1,1,1,1]]), true, 'Test 87');
test(isPossibleToCutPath([[1,1,1,1,1,1],[1,0,0,0,0,1],[1,1,1,0,1,1],[1,0,0,1,0,1],[1,1,1,1,1,1],[1,0,1,1,1,1]]), false, 'Test 88');
test(isPossibleToCutPath([[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1],[0,0,0,0,0,0,1],[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]]), true, 'Test 89');
test(isPossibleToCutPath([), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 90');
test(isPossibleToCutPath(g), Error: Solution.isPossibleToCutPath[] missing 1 required positional argument: 'grid', 'Test 91');
test(isPossibleToCutPath([[1,1,0,0,1],[1,0,1,1,1],[1,1,0,1,1],[0,1,1,0,1],[1,1,1,1,1]]), true, 'Test 92');

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
