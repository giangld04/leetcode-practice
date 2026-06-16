// Test: 2732. Find A Good Subset Of The Matrix
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { goodSubsetofBinaryMatrix } = require("./solution");

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

console.log("\n2732. Find A Good Subset Of The Matrix\n");

test(goodSubsetofBinaryMatrix([[1,0,1],[0,1,0],[1,0,1],[0,1,0]]), [2, 3], 'Test 1');
test(goodSubsetofBinaryMatrix([[0,0,0,0],[1,0,0,1],[0,1,1,0]]), [0], 'Test 2');
test(goodSubsetofBinaryMatrix([[0,0,0],[0,1,0],[1,0,0]]), [0], 'Test 3');
test(goodSubsetofBinaryMatrix([[0,1,1,0],[0,0,0,1],[1,1,1,1]]), [0, 1], 'Test 4');
test(goodSubsetofBinaryMatrix([[1,1,0],[0,0,1],[1,0,0]]), [0, 1], 'Test 5');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1],[0,1,0,1,0],[1,1,0,0,0]]), [0, 1], 'Test 6');
test(goodSubsetofBinaryMatrix([[0]]), [0], 'Test 7');
test(goodSubsetofBinaryMatrix([[1,1,1],[1,1,1]]), [], 'Test 8');
test(goodSubsetofBinaryMatrix([[0,0,0],[0,0,0],[0,0,0]]), [0], 'Test 9');
test(goodSubsetofBinaryMatrix([[1,0,0],[0,1,0],[0,0,1]]), [0, 1], 'Test 10');
test(goodSubsetofBinaryMatrix([[1,0,1],[0,1,0],[1,0,1]]), [1, 2], 'Test 11');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0]]), [3], 'Test 12');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1]]), [4, 5], 'Test 13');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]), [3, 4], 'Test 14');
test(goodSubsetofBinaryMatrix([[1,1,0,0,1],[0,0,1,1,0],[1,1,1,1,1],[0,0,0,0,0],[1,0,1,0,1]]), [3], 'Test 15');
test(goodSubsetofBinaryMatrix([[1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1]]), [0, 1], 'Test 16');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1],[0,0,0,0,0],[1,0,1,0,1],[0,1,0,1,0]]), [1], 'Test 17');
test(goodSubsetofBinaryMatrix([[1,1,1,0,0],[0,0,0,1,1],[1,0,1,0,1],[0,1,0,1,0]]), [0, 1], 'Test 18');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]), [0], 'Test 19');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1],[0,0,0,0,0],[1,0,1,0,1],[0,1,0,1,0],[1,1,0,0,1]]), [1], 'Test 20');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0,0],[1,1,1,1,1,1],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,0,0,1,1,1],[1,1,1,0,0,0]]), [0], 'Test 21');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[1,0,1,0,1]]), [0], 'Test 22');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0],[1,0,1,0,1],[0,1,0,1,0],[1,1,1,1,1],[0,0,0,0,0]]), [0], 'Test 23');
test(goodSubsetofBinaryMatrix([[0,0,0,1,0,0],[1,1,1,0,1,1],[0,0,1,1,0,0],[1,1,0,0,1,1]]), [0, 1], 'Test 24');
test(goodSubsetofBinaryMatrix([[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]), [0, 1], 'Test 25');
test(goodSubsetofBinaryMatrix([[0,1,0,1,0,1,0],[1,0,1,0,1,0,1],[0,0,0,0,0,0,0],[1,1,1,1,1,1,1]]), [2], 'Test 26');
test(goodSubsetofBinaryMatrix([[0,0,1,1,0,0],[1,1,0,0,1,1],[0,1,0,1,0,1],[1,0,1,0,1,0]]), [0, 1], 'Test 27');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1,1,1],[0,0,0,0,0,0,0],[1,0,1,0,1,0,1],[0,1,0,1,0,1,0]]), [1], 'Test 28');
test(goodSubsetofBinaryMatrix([[0,0,1,1,1],[0,1,0,1,1],[0,1,1,0,1],[1,0,0,1,0],[1,1,1,1,1]]), [2, 3], 'Test 29');
test(goodSubsetofBinaryMatrix([[0,0,1,1],[0,1,0,1],[1,0,0,1],[1,1,0,0],[1,0,1,0]]), [0, 3], 'Test 30');
test(goodSubsetofBinaryMatrix([[1,1,0,0,1,1,0,0,1,1],[0,0,1,1,0,0,1,1,0,0],[1,0,1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1]]), [0, 1], 'Test 31');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1]]), [2, 3], 'Test 32');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1]]), [0], 'Test 33');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]), [0], 'Test 34');
test(goodSubsetofBinaryMatrix([[0,1,0,1,0,1],[1,0,1,0,1,0],[0,0,0,0,0,0],[1,1,1,1,1,1]]), [2], 'Test 35');
test(goodSubsetofBinaryMatrix([[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[1,0,1,0,1],[0,1,0,1,0]]), [0, 4], 'Test 36');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1,0,1],[0,1,0,1,0,1,0],[1,1,1,1,1,1,1],[0,0,0,0,0,0,0],[1,1,0,0,1,1,0],[0,0,1,1,0,0,1]]), [3], 'Test 37');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), [], 'Test 38');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]]), [], 'Test 39');
test(goodSubsetofBinaryMatrix([[0,0,1,1,1],[1,0,0,1,0],[1,1,0,0,0],[0,0,0,0,1],[0,1,1,0,0]]), [0, 2], 'Test 40');
test(goodSubsetofBinaryMatrix([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]), [0], 'Test 41');
test(goodSubsetofBinaryMatrix([[1,1,1,1,0],[1,1,1,0,1],[1,1,0,1,1],[1,0,1,1,1],[0,1,1,1,1],[1,1,1,1,1]]), [], 'Test 42');
test(goodSubsetofBinaryMatrix([[1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0],[0,0,1,1,0,0,1,1]]), [2, 3], 'Test 43');
test(goodSubsetofBinaryMatrix([[0,1,1,0,1],[1,0,0,1,0],[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0]]), [2], 'Test 44');
test(goodSubsetofBinaryMatrix([[0,1,1,0,0],[1,0,0,1,1],[0,1,1,0,0],[1,0,0,1,1],[0,1,1,0,0]]), [3, 4], 'Test 45');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[1,0,1,0,1],[0,0,0,0,0],[1,1,1,1,1]]), [0], 'Test 46');
test(goodSubsetofBinaryMatrix([[0,0,1,1,0],[1,0,0,1,1],[0,1,1,0,0],[1,1,0,0,1]]), [0, 3], 'Test 47');
test(goodSubsetofBinaryMatrix([[1,1,0,1,0],[1,1,0,1,0],[1,1,0,1,0],[1,1,0,1,0],[1,1,0,1,0]]), [], 'Test 48');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1,1,1,1],[1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1],[1,1,1,0,0,0,0,0],[0,0,0,1,1,1,1,1],[0,1,0,1,0,1,0,1]]), [1, 5], 'Test 49');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1],[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0]]), [1, 2], 'Test 50');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1],[1,0,1,0,1],[0,1,0,1,0],[1,0,0,0,0],[0,0,0,1,1]]), [1, 2], 'Test 51');
test(goodSubsetofBinaryMatrix([[0,0,1,1],[0,1,0,1],[1,0,0,0],[0,0,0,0]]), [3], 'Test 52');
test(goodSubsetofBinaryMatrix([[1,1,0,0,0],[0,0,1,1,0],[0,0,0,0,1],[1,0,1,0,1],[1,1,1,1,1]]), [0, 1], 'Test 53');
test(goodSubsetofBinaryMatrix([[0,1,1,1,0],[1,0,0,0,1],[0,0,1,0,0],[1,1,0,1,1]]), [0, 1], 'Test 54');
test(goodSubsetofBinaryMatrix([[0,0,1,1,1],[0,1,0,1,1],[1,0,0,1,1],[1,1,1,0,0],[0,0,0,0,0]]), [4], 'Test 55');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), [0], 'Test 56');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1],[0,1,0,1,0],[1,0,1,0,1],[0,0,0,0,0],[0,0,0,0,0]]), [3], 'Test 57');
test(goodSubsetofBinaryMatrix([[0,1,1,0,1,0],[1,0,0,1,0,1],[0,0,0,0,0,0],[1,1,1,1,1,1],[0,1,0,1,0,1],[1,0,1,0,1,0]]), [2], 'Test 58');
test(goodSubsetofBinaryMatrix([[0,1,1,1,0,1],[1,0,0,1,0,0],[0,1,0,0,1,1],[1,0,1,1,0,1],[0,1,0,1,1,0]]), [1, 2], 'Test 59');
test(goodSubsetofBinaryMatrix([[1,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1]]), [0, 1], 'Test 60');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]]), [2, 3], 'Test 61');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), [0], 'Test 62');
test(goodSubsetofBinaryMatrix([[0,0,1,1,0],[1,0,0,0,1],[0,1,1,0,0],[1,1,0,1,1]]), [0, 1], 'Test 63');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]), [0], 'Test 64');
test(goodSubsetofBinaryMatrix([[1,0,1],[0,1,0],[1,0,1],[0,1,0],[1,0,1],[0,1,0]]), [4, 5], 'Test 65');
test(goodSubsetofBinaryMatrix([[1,1,1,1,0],[0,0,0,0,1],[1,0,1,0,1],[0,1,0,1,0],[1,1,0,0,0],[0,0,1,1,1]]), [0, 1], 'Test 66');
test(goodSubsetofBinaryMatrix([[0,0,0,1,1],[0,1,1,0,0],[1,0,1,0,1],[1,1,0,1,0],[0,0,0,0,0]]), [4], 'Test 67');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0]]), [1], 'Test 68');
test(goodSubsetofBinaryMatrix([[1,1,0,0],[0,0,1,1],[1,0,1,0],[0,1,0,1]]), [0, 1], 'Test 69');
test(goodSubsetofBinaryMatrix([[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1]]), [3, 4], 'Test 70');
test(goodSubsetofBinaryMatrix([[1,1,0,0,0],[0,0,1,1,1],[1,0,1,0,1],[0,1,0,1,0],[1,1,0,0,0],[0,0,1,1,1]]), [4, 5], 'Test 71');
test(goodSubsetofBinaryMatrix([[1,1,0,0,0],[0,0,1,1,0],[1,0,1,0,1],[0,1,0,1,1]]), [0, 1], 'Test 72');
test(goodSubsetofBinaryMatrix([[1,0,0,1,0,0,1,0],[0,1,0,0,1,0,0,1],[0,0,1,0,0,1,0,0],[0,0,0,1,0,0,1,0]]), [0, 1], 'Test 73');
test(goodSubsetofBinaryMatrix([[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[0,1,0,1,0]]), [2], 'Test 74');
test(goodSubsetofBinaryMatrix([[1,1,1,0,0],[1,1,1,0,0],[0,0,0,1,1],[0,0,0,1,1],[1,1,1,1,1]]), [1, 3], 'Test 75');
test(goodSubsetofBinaryMatrix([[0,1,1,1,0],[1,0,1,1,1],[1,1,0,1,1],[1,1,1,0,1],[1,1,1,1,0]]), [], 'Test 76');
test(goodSubsetofBinaryMatrix([[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]), [], 'Test 77');
test(goodSubsetofBinaryMatrix([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), [0], 'Test 78');
test(goodSubsetofBinaryMatrix([[0,1,0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1],[0,1,0,1,0,1,0,1,0,1]]), [2], 'Test 79');
test(goodSubsetofBinaryMatrix([[0,1,0,1,0,1,0],[1,0,1,0,1,0,1],[0,1,0,1,0,1,0],[1,0,1,0,1,0,1]]), [2, 3], 'Test 80');
test(goodSubsetofBinaryMatrix([[0,1,0,1,0],[1,0,1,0,1],[0,0,0,0,0],[1,1,1,1,1]]), [2], 'Test 81');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), [], 'Test 82');
test(goodSubsetofBinaryMatrix([[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]), [2, 3], 'Test 83');
test(goodSubsetofBinaryMatrix([[0,0,0,1,1],[1,0,1,0,1],[0,1,0,1,0],[1,1,1,1,1]]), [1, 2], 'Test 84');
test(goodSubsetofBinaryMatrix([[1,1,0,0,0],[0,0,1,1,0],[1,0,0,1,1],[0,1,1,0,1],[1,0,1,1,0]]), [0, 1], 'Test 85');
test(goodSubsetofBinaryMatrix([[1,1,1,1,1,1],[0,0,0,0,0,0],[1,1,1,1,1,1],[0,0,0,0,0,0]]), [1], 'Test 86');

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
