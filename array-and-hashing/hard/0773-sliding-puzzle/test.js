// Test: 773. Sliding Puzzle
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { slidingPuzzle } = require("./solution");

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

console.log("\n773. Sliding Puzzle\n");

test(slidingPuzzle([[4,1,2],[0,5,3]]), 4, 'Test 1');
test(slidingPuzzle([[3,2,4],[1,5,0]]), 14, 'Test 2');
test(slidingPuzzle([[0,1,2],[4,5,3]]), 3, 'Test 3');
test(slidingPuzzle([[1,2,3],[4,0,5]]), 1, 'Test 4');
test(slidingPuzzle([[1,2,0],[3,4,5]]), 13, 'Test 5');
test(slidingPuzzle([[1,0,2],[4,5,3]]), 2, 'Test 6');
test(slidingPuzzle([[1,2,3],[5,4,0]]), -1, 'Test 7');
test(slidingPuzzle([[0,1,2],[3,4,5]]), 15, 'Test 8');
test(slidingPuzzle([[1,0,3],[4,2,5]]), 2, 'Test 9');
test(slidingPuzzle([[1,2,3],[0,4,5]]), 2, 'Test 10');
test(slidingPuzzle([[4,1,2],[5,0,3]]), 5, 'Test 11');
test(slidingPuzzle([[3,4,2],[0,1,5]]), -1, 'Test 12');
test(slidingPuzzle([[2,0,3],[1,5,4]]), -1, 'Test 13');
test(slidingPuzzle([[2,5,3],[0,4,1]]), 14, 'Test 14');
test(slidingPuzzle([[1,3,0],[4,2,5]]), 3, 'Test 15');
test(slidingPuzzle([[2,3,1],[4,0,5]]), 15, 'Test 16');
test(slidingPuzzle([[4,1,0],[2,5,3]]), 7, 'Test 17');
test(slidingPuzzle([[5,3,0],[4,1,2]]), 17, 'Test 18');
test(slidingPuzzle([[1,3,5],[2,4,0]]), -1, 'Test 19');
test(slidingPuzzle([[2,3,4],[1,0,5]]), -1, 'Test 20');
test(slidingPuzzle([[5,3,4],[1,2,0]]), 12, 'Test 21');
test(slidingPuzzle([[1,2,5],[0,4,3]]), -1, 'Test 22');
test(slidingPuzzle([[4,3,2],[1,5,0]]), 20, 'Test 23');
test(slidingPuzzle([[3,5,4],[0,2,1]]), 14, 'Test 24');
test(slidingPuzzle([[3,2,1],[6,5,4]]), null, 'Test 25');
test(slidingPuzzle([[5,1,3],[4,0,2]]), 15, 'Test 26');
test(slidingPuzzle([[2,3,0],[1,5,4]]), -1, 'Test 27');
test(slidingPuzzle([[1,2,0],[5,4,3]]), -1, 'Test 28');
test(slidingPuzzle([[1,4,2],[3,5,0]]), 16, 'Test 29');
test(slidingPuzzle([[2,3,4],[5,0,1]]), 15, 'Test 30');
test(slidingPuzzle([[3,2,1],[0,5,4]]), 20, 'Test 31');
test(slidingPuzzle([[5,1,4],[2,3,0]]), 14, 'Test 32');
test(slidingPuzzle([[5,3,0],[1,4,2]]), -1, 'Test 33');
test(slidingPuzzle([[0,5,4],[3,2,1]]), 15, 'Test 34');
test(slidingPuzzle([[2,5,3],[1,4,0]]), -1, 'Test 35');
test(slidingPuzzle([[0,5,4],[2,3,1]]), -1, 'Test 36');
test(slidingPuzzle([[5,4,0],[3,2,1]]), 13, 'Test 37');
test(slidingPuzzle([[3,5,4],[1,2,0]]), -1, 'Test 38');
test(slidingPuzzle([[5,0,2],[4,3,1]]), 16, 'Test 39');
test(slidingPuzzle([[0,5,1],[3,4,2]]), 13, 'Test 40');
test(slidingPuzzle([[5,1,2],[4,0,3]]), -1, 'Test 41');
test(slidingPuzzle([[1,3,5],[4,0,2]]), 5, 'Test 42');
test(slidingPuzzle([[1,3,0],[2,4,5]]), -1, 'Test 43');
test(slidingPuzzle([[3,2,0],[1,5,4]]), 13, 'Test 44');
test(slidingPuzzle([[3,1,2],[0,4,5]]), 16, 'Test 45');
test(slidingPuzzle([[1,0,2],[5,3,4]]), 14, 'Test 46');
test(slidingPuzzle([[1,5,3],[2,4,0]]), 14, 'Test 47');
test(slidingPuzzle([[5,1,2],[4,3,0]]), -1, 'Test 48');
test(slidingPuzzle([[5,2,3],[4,1,0]]), -1, 'Test 49');
test(slidingPuzzle([[1,5,3],[2,0,4]]), 13, 'Test 50');
test(slidingPuzzle([[3,5,2],[4,1,0]]), -1, 'Test 51');
test(slidingPuzzle([[1,4,0],[3,5,2]]), 15, 'Test 52');
test(slidingPuzzle([[4,3,5],[0,1,2]]), -1, 'Test 53');
test(slidingPuzzle([[4,1,2],[5,3,0]]), 6, 'Test 54');
test(slidingPuzzle([[3,0,1],[4,2,5]]), -1, 'Test 55');
test(slidingPuzzle([[5,4,3],[2,1,0]]), 14, 'Test 56');
test(slidingPuzzle([[1,0,5],[4,3,2]]), 6, 'Test 57');
test(slidingPuzzle([[2,1,3],[4,5,0]]), -1, 'Test 58');
test(slidingPuzzle([[2,1,0],[5,3,4]]), -1, 'Test 59');
test(slidingPuzzle([[4,3,1],[5,0,2]]), 9, 'Test 60');
test(slidingPuzzle([[5,0,1],[4,3,2]]), -1, 'Test 61');
test(slidingPuzzle([[2,5,1],[0,4,3]]), -1, 'Test 62');
test(slidingPuzzle([[4,0,2],[3,5,1]]), 14, 'Test 63');
test(slidingPuzzle([[1,3,2],[4,0,5]]), -1, 'Test 64');
test(slidingPuzzle([[3,1,2],[4,5,0]]), 14, 'Test 65');
test(slidingPuzzle([[4,2,0],[5,1,3]]), 7, 'Test 66');
test(slidingPuzzle([[5,2,3],[0,4,1]]), -1, 'Test 67');
test(slidingPuzzle([[4,5,1],[0,3,2]]), -1, 'Test 68');
test(slidingPuzzle([[4,3,0],[1,2,5]]), -1, 'Test 69');
test(slidingPuzzle([[4,5,3],[2,0,1]]), -1, 'Test 70');
test(slidingPuzzle([[0,5,2],[1,3,4]]), -1, 'Test 71');
test(slidingPuzzle([[2,1,3],[0,5,4]]), 14, 'Test 72');
test(slidingPuzzle([[4,3,5],[2,0,1]]), 9, 'Test 73');
test(slidingPuzzle([[4,2,3],[1,5,0]]), -1, 'Test 74');
test(slidingPuzzle([[2,5,3],[4,0,1]]), 13, 'Test 75');
test(slidingPuzzle([[2,3,1],[5,4,0]]), -1, 'Test 76');
test(slidingPuzzle([[5,1,2],[0,4,3]]), -1, 'Test 77');
test(slidingPuzzle([[3,0,1],[4,5,2]]), 12, 'Test 78');
test(slidingPuzzle([[2,3,5],[4,1,0]]), -1, 'Test 79');

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
