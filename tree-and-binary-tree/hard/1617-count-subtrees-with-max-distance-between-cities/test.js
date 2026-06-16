// Test: 1617. Count Subtrees With Max Distance Between Cities
// 45 test cases from LeetCodeDataset
// Run: node test.js

const { countSubgraphsForEachDiameter } = require("./solution");

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

console.log("\n1617. Count Subtrees With Max Distance Between Cities\n");

test(countSubgraphsForEachDiameter(6, [[1,2],[1,3],[1,4],[2,5],[2,6]]), [5, 8, 9, 0, 0], 'Test 1');
test(countSubgraphsForEachDiameter(5, [[1,2],[2,3],[3,4],[4,5]]), [4, 3, 2, 1], 'Test 2');
test(countSubgraphsForEachDiameter(10, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10]]), [9, 14, 18, 26, 33, 0, 0, 0, 0], 'Test 3');
test(countSubgraphsForEachDiameter(7, [[1,2],[1,3],[1,4],[2,5],[3,6],[4,7]]), [6, 7, 9, 7, 0, 0], 'Test 4');
test(countSubgraphsForEachDiameter(6, [[1,2],[1,3],[2,4],[2,5],[3,6]]), [5, 6, 4, 3, 0], 'Test 5');
test(countSubgraphsForEachDiameter(5, [[1,2],[1,3],[1,4],[1,5]]), [4, 11, 0, 0], 'Test 6');
test(countSubgraphsForEachDiameter(5, [[1,2],[1,3],[2,4],[2,5]]), [4, 5, 3, 0], 'Test 7');
test(countSubgraphsForEachDiameter(4, [[1,2],[2,3],[2,4]]), [3, 4, 0], 'Test 8');
test(countSubgraphsForEachDiameter(3, [[1,2],[2,3]]), [2, 1], 'Test 9');
test(countSubgraphsForEachDiameter(6, [[1,2],[1,3],[2,4],[3,5],[5,6]]), [5, 4, 3, 2, 1], 'Test 10');
test(countSubgraphsForEachDiameter(2, [[1,2]]), [1], 'Test 11');
test(countSubgraphsForEachDiameter(12, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[6,11],[7,12]]), [11, 16, 24, 33, 48, 55, 0, 0, 0, 0, 0], 'Test 12');
test(countSubgraphsForEachDiameter(9, [[1,2],[2,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]]), [8, 9, 9, 9, 7, 4, 2, 0], 'Test 13');
test(countSubgraphsForEachDiameter(11, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[5,11]]), [10, 17, 24, 48, 63, 0, 0, 0, 0, 0], 'Test 14');
test(countSubgraphsForEachDiameter(9, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9]]), [8, 13, 15, 15, 18, 0, 0, 0], 'Test 15');
test(countSubgraphsForEachDiameter(13, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[6,11],[7,12],[7,13]]), [12, 19, 30, 43, 66, 121, 0, 0, 0, 0, 0, 0], 'Test 16');
test(countSubgraphsForEachDiameter(12, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 17');
test(countSubgraphsForEachDiameter(11, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 18');
test(countSubgraphsForEachDiameter(14, [[1,2],[1,3],[1,4],[2,5],[2,6],[2,7],[3,8],[3,9],[3,10],[4,11],[4,12],[4,13],[5,14]]), [13, 38, 70, 649, 308, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 19');
test(countSubgraphsForEachDiameter(11, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[5,9],[6,10],[7,11]]), [10, 13, 18, 23, 30, 25, 0, 0, 0, 0], 'Test 20');
test(countSubgraphsForEachDiameter(13, [[1,2],[1,3],[2,4],[2,5],[2,6],[3,7],[3,8],[3,9],[4,10],[5,11],[6,12],[6,13]]), [12, 29, 49, 120, 259, 0, 0, 0, 0, 0, 0, 0], 'Test 21');
test(countSubgraphsForEachDiameter(8, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]), [7, 6, 5, 4, 3, 2, 1], 'Test 22');
test(countSubgraphsForEachDiameter(15, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15]]), [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 23');
test(countSubgraphsForEachDiameter(14, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[5,11],[6,12],[6,13],[7,14]]), [13, 22, 36, 65, 96, 231, 0, 0, 0, 0, 0, 0, 0], 'Test 24');
test(countSubgraphsForEachDiameter(8, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[6,8]]), [7, 10, 9, 11, 6, 0, 0], 'Test 25');
test(countSubgraphsForEachDiameter(7, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]]), [6, 9, 6, 9, 0, 0], 'Test 26');
test(countSubgraphsForEachDiameter(11, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[6,11]]), [10, 15, 21, 28, 39, 22, 0, 0, 0, 0], 'Test 27');
test(countSubgraphsForEachDiameter(12, [[1,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12]]), [11, 20, 36, 99, 126, 0, 0, 0, 0, 0, 0], 'Test 28');
test(countSubgraphsForEachDiameter(9, [[1,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9]]), [8, 13, 21, 39, 0, 0, 0, 0], 'Test 29');
test(countSubgraphsForEachDiameter(15, [[1,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14],[7,15]]), [14, 25, 48, 168, 483, 210, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 30');
test(countSubgraphsForEachDiameter(15, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[5,11],[6,12],[6,13],[7,14],[7,15]]), [14, 25, 42, 87, 126, 441, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 31');
test(countSubgraphsForEachDiameter(8, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8]]), [7, 10, 9, 11, 6, 0, 0], 'Test 32');
test(countSubgraphsForEachDiameter(12, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[5,11],[6,12]]), [11, 18, 27, 50, 69, 42, 0, 0, 0, 0, 0], 'Test 33');
test(countSubgraphsForEachDiameter(6, [[1,2],[2,3],[3,4],[4,5],[5,6]]), [5, 4, 3, 2, 1], 'Test 34');
test(countSubgraphsForEachDiameter(10, [[1,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10]]), [9, 16, 27, 81, 0, 0, 0, 0, 0], 'Test 35');
test(countSubgraphsForEachDiameter(13, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[5,11],[6,12],[6,13]]), [12, 21, 33, 54, 81, 126, 0, 0, 0, 0, 0, 0], 'Test 36');
test(countSubgraphsForEachDiameter(12, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12]]), [11, 14, 19, 26, 35, 34, 15, 0, 0, 0, 0], 'Test 37');
test(countSubgraphsForEachDiameter(8, [[1,2],[1,3],[2,4],[2,5],[3,6],[4,7],[5,8]]), [7, 8, 10, 10, 5, 0, 0], 'Test 38');
test(countSubgraphsForEachDiameter(9, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[3,8],[4,9]]), [8, 17, 13, 23, 14, 0, 0, 0], 'Test 39');
test(countSubgraphsForEachDiameter(9, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[5,9]]), [8, 11, 12, 16, 15, 0, 0, 0], 'Test 40');
test(countSubgraphsForEachDiameter(12, [[1,2],[2,3],[2,4],[3,5],[3,6],[4,7],[4,8],[5,9],[5,10],[6,11],[6,12]]), [11, 20, 36, 99, 126, 0, 0, 0, 0, 0, 0], 'Test 41');
test(countSubgraphsForEachDiameter(13, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 42');
test(countSubgraphsForEachDiameter(9, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), [8, 7, 6, 5, 4, 3, 2, 1], 'Test 43');
test(countSubgraphsForEachDiameter(9, [[1,2],[2,3],[2,4],[3,5],[3,6],[4,7],[4,8],[5,9]]), [8, 13, 21, 24, 12, 0, 0, 0], 'Test 44');
test(countSubgraphsForEachDiameter(15, [[1,2],[1,3],[1,4],[1,5],[2,6],[2,7],[2,8],[3,9],[3,10],[3,11],[4,12],[4,13],[4,14],[5,15]]), [14, 45, 154, 1995, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 45');

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
