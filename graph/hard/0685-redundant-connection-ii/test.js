// Test: 685. Redundant Connection Ii
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { findRedundantDirectedConnection } = require("./solution");

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

console.log("\n685. Redundant Connection Ii\n");

test(findRedundantDirectedConnection([[1,2],[2,3],[3,1],[4,5]]), Error: list index out of range, 'Test 1');
test(findRedundantDirectedConnection([[3,1],[4,1],[5,2],[3,2],[3,5]]), [3, 1], 'Test 2');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,1]]), [3, 1], 'Test 3');
test(findRedundantDirectedConnection([[3,1],[4,1],[5,2],[3,5],[4,2]]), [4, 1], 'Test 4');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,1],[4,3]]), [2, 3], 'Test 5');
test(findRedundantDirectedConnection([[2,1],[3,1],[1,4],[4,3]]), [3, 1], 'Test 6');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,3]]), [2, 3], 'Test 7');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,2],[1,5],[5,2]]), [4, 2], 'Test 8');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,1],[1,4]]), [3, 1], 'Test 9');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,2]]), [3, 2], 'Test 10');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,1],[1,5]]), [4, 1], 'Test 11');
test(findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]]), [2, 1], 'Test 12');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[6,11],[7,12],[8,13],[9,14],[10,15],[11,16],[12,17],[13,18],[14,19],[15,20],[16,21],[17,22],[18,23],[19,24],[20,25],[21,26],[22,27],[23,28],[24,29],[25,30],[30,1]]), [30, 1], 'Test 13');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,3]]), [12, 3], 'Test 14');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,4]]), [12, 4], 'Test 15');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,8]]), [14, 8], 'Test 16');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,1]]), [15, 1], 'Test 17');
test(findRedundantDirectedConnection([[3,1],[4,1],[5,1],[3,2],[3,4],[3,5]]), [3, 4], 'Test 18');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[19,1],[20,1]]), [5, 1], 'Test 19');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[1,3],[2,5],[3,6]]), [2, 3], 'Test 20');
test(findRedundantDirectedConnection([[10,1],[1,2],[1,3],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), [2, 4], 'Test 21');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,1],[3,6]]), [5, 1], 'Test 22');
test(findRedundantDirectedConnection([[5,1],[1,2],[2,3],[3,4],[4,1],[1,5]]), [5, 1], 'Test 23');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,4]]), [10, 4], 'Test 24');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,4],[7,1]]), [6, 4], 'Test 25');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,3],[3,6],[6,7]]), [5, 3], 'Test 26');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1]]), [10, 1], 'Test 27');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[2,4]]), [3, 4], 'Test 28');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,6]]), [11, 6], 'Test 29');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,4],[4,5],[5,1]]), [2, 4], 'Test 30');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],[1,11],[11,12],[12,13],[13,14],[14,15],[15,11]]), [1, 11], 'Test 31');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,3],[1,6]]), [5, 3], 'Test 32');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,3]]), [5, 3], 'Test 33');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,10]]), [25, 10], 'Test 34');
test(findRedundantDirectedConnection([[5,2],[1,5],[4,1],[3,5],[4,3]]), [3, 5], 'Test 35');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1],[1,3]]), [2, 3], 'Test 36');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1]]), [9, 1], 'Test 37');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,3]]), [9, 3], 'Test 38');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,5],[1,5]]), [10, 5], 'Test 39');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,1],[12,2]]), [1, 2], 'Test 40');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,5],[1,9]]), [8, 5], 'Test 41');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],[1,5]]), [4, 5], 'Test 42');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,5],[5,4],[4,2],[1,4]]), [1, 2], 'Test 43');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,4],[4,5],[5,6],[6,2]]), [1, 2], 'Test 44');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,1],[1,8],[8,9],[9,10],[10,7]]), [6, 7], 'Test 45');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,1]]), [11, 1], 'Test 46');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,1],[1,3]]), [2, 3], 'Test 47');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[6,11],[7,12],[8,13],[9,14],[10,15],[11,16],[12,17],[13,18],[14,19],[15,20],[16,21],[17,22],[18,23],[19,24],[20,25],[21,26],[22,27],[23,28],[24,29],[25,30],[30,15]]), [30, 15], 'Test 48');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,3]]), [11, 3], 'Test 49');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,4],[4,5],[5,6],[6,7],[7,1]]), [2, 4], 'Test 50');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,3],[2,4]]), [2, 3], 'Test 51');
test(findRedundantDirectedConnection([[5,3],[1,5],[2,3],[4,1],[5,2],[4,5]]), [5, 3], 'Test 52');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,1],[1,3],[2,5]]), [2, 3], 'Test 53');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,2]]), [6, 2], 'Test 54');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,2]]), [10, 2], 'Test 55');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,7]]), [13, 7], 'Test 56');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,3],[1,6],[6,7]]), [5, 3], 'Test 57');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,4]]), [3, 4], 'Test 58');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[6,8],[7,8],[8,2]]), [1, 2], 'Test 59');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,4],[4,5],[5,6],[6,7],[7,3]]), [1, 3], 'Test 60');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,5]]), [2, 4], 'Test 61');
test(findRedundantDirectedConnection([[7,8],[8,9],[9,10],[10,11],[11,12],[12,7],[1,7],[1,8],[1,9]]), Error: list index out of range, 'Test 62');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,15]]), [30, 15], 'Test 63');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,6]]), [9, 6], 'Test 64');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,5]]), [12, 5], 'Test 65');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,1]]), [30, 1], 'Test 66');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,2]]), [5, 2], 'Test 67');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,1],[20,2]]), [1, 2], 'Test 68');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,4]]), [6, 4], 'Test 69');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],[2,10],[3,10],[5,10]]), [10, 1], 'Test 70');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,5]]), [20, 5], 'Test 71');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,2]]), [9, 2], 'Test 72');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,1],[6,5],[7,6],[8,7],[9,8],[10,9],[11,10],[12,11],[13,12],[1,13]]), [4, 5], 'Test 73');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,5]]), [10, 5], 'Test 74');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,3]]), [10, 3], 'Test 75');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,3],[1,6],[6,7],[7,8],[8,9],[9,10]]), [5, 3], 'Test 76');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,4],[1,9],[9,10],[10,1]]), [3, 4], 'Test 77');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],[1,3],[3,5]]), [2, 3], 'Test 78');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,1],[4,2]]), [1, 2], 'Test 79');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,5]]), [9, 5], 'Test 80');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],[2,4]]), [3, 4], 'Test 81');
test(findRedundantDirectedConnection([[2,3],[4,3],[5,3],[1,4],[2,5],[4,5]]), [2, 5], 'Test 82');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,9]]), [8, 9], 'Test 83');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],[2,10],[5,10]]), [10, 1], 'Test 84');
test(findRedundantDirectedConnection([[1,3],[2,3],[3,4],[4,5],[5,1],[6,1]]), [1, 3], 'Test 85');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,5],[1,10]]), [4, 5], 'Test 86');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,7]]), [14, 7], 'Test 87');
test(findRedundantDirectedConnection([[1,2],[1,3],[1,4],[1,5],[2,6],[3,6],[4,6],[5,6],[2,3]]), [1, 3], 'Test 88');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,13]]), [20, 13], 'Test 89');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,4]]), [8, 4], 'Test 90');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,7]]), [9, 7], 'Test 91');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,4],[4,5],[5,2]]), [1, 2], 'Test 92');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,4]]), [9, 4], 'Test 93');
test(findRedundantDirectedConnection([[1,5],[2,5],[3,5],[4,5],[5,1]]), [5, 1], 'Test 94');
test(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,5],[5,3],[6,4]]), [3, 4], 'Test 95');
test(findRedundantDirectedConnection([[1,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[9,5]]), [9, 5], 'Test 96');

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
