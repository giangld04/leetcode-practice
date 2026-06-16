// Test: 2858. Minimum Edge Reversals So Every Node Is Reachable
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { minEdgeReversals } = require("./solution");

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

console.log("\n2858. Minimum Edge Reversals So Every Node Is Reachable\n");

test(minEdgeReversals(7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]), [0, 1, 2, 3, 4, 5, 6], 'Test 1');
test(minEdgeReversals(4, [[2,0],[2,1],[1,3]]), [1, 1, 0, 2], 'Test 2');
test(minEdgeReversals(5, [[0,1],[1,2],[2,3],[3,4]]), [0, 1, 2, 3, 4], 'Test 3');
test(minEdgeReversals(5, [[0,1],[2,0],[3,2],[4,2]]), [3, 4, 2, 1, 1], 'Test 4');
test(minEdgeReversals(5, [[0,1],[2,0],[3,2],[4,3]]), [3, 4, 2, 1, 0], 'Test 5');
test(minEdgeReversals(3, [[1,2],[2,0]]), [2, 0, 1], 'Test 6');
test(minEdgeReversals(6, [[0,1],[1,2],[2,3],[3,4],[4,5]]), [0, 1, 2, 3, 4, 5], 'Test 7');
test(minEdgeReversals(12, [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[6,7],[3,8],[8,9],[9,10],[10,11]]), [0, 1, 2, 3, 1, 2, 3, 4, 4, 5, 6, 7], 'Test 8');
test(minEdgeReversals(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 9');
test(minEdgeReversals(11, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[5,7],[6,8],[8,9],[9,10]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5], 'Test 10');
test(minEdgeReversals(13, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 11');
test(minEdgeReversals(16, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 12');
test(minEdgeReversals(15, [[0,1],[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[5,11],[6,12],[6,13],[7,14]]), [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4], 'Test 13');
test(minEdgeReversals(8, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[5,7]]), [0, 1, 1, 2, 2, 2, 2, 3], 'Test 14');
test(minEdgeReversals(15, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[5,7],[6,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9], 'Test 15');
test(minEdgeReversals(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,0]]), Error: maximum recursion depth exceeded, 'Test 16');
test(minEdgeReversals(8, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[7,4]]), Error: maximum recursion depth exceeded, 'Test 17');
test(minEdgeReversals(8, [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,7],[7,3]]), Error: maximum recursion depth exceeded, 'Test 18');
test(minEdgeReversals(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 19');
test(minEdgeReversals(8, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,5],[6,7]]), Error: maximum recursion depth exceeded, 'Test 20');
test(minEdgeReversals(14, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3], 'Test 21');
test(minEdgeReversals(20, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[5,7],[6,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 22');
test(minEdgeReversals(13, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3], 'Test 23');
test(minEdgeReversals(8, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4]]), Error: maximum recursion depth exceeded, 'Test 24');
test(minEdgeReversals(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]]), Error: maximum recursion depth exceeded, 'Test 25');
test(minEdgeReversals(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[5,6]]), Error: maximum recursion depth exceeded, 'Test 26');
test(minEdgeReversals(7, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]]), [0, 1, 1, 2, 2, 2, 2], 'Test 27');
test(minEdgeReversals(12, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3], 'Test 28');
test(minEdgeReversals(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 29');
test(minEdgeReversals(11, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[0,10]]), Error: maximum recursion depth exceeded, 'Test 30');
test(minEdgeReversals(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 31');
test(minEdgeReversals(11, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 'Test 32');
test(minEdgeReversals(13, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,0]]), Error: maximum recursion depth exceeded, 'Test 33');
test(minEdgeReversals(7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]), Error: maximum recursion depth exceeded, 'Test 34');
test(minEdgeReversals(9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 35');
test(minEdgeReversals(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0]]), Error: maximum recursion depth exceeded, 'Test 36');
test(minEdgeReversals(9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]]), Error: maximum recursion depth exceeded, 'Test 37');
test(minEdgeReversals(7, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,4]]), Error: maximum recursion depth exceeded, 'Test 38');
test(minEdgeReversals(7, [[0,1],[1,3],[2,1],[4,1],[5,2],[6,2]]), [4, 5, 4, 6, 4, 3, 3], 'Test 39');
test(minEdgeReversals(11, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 40');
test(minEdgeReversals(15, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 41');
test(minEdgeReversals(10, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3], 'Test 42');
test(minEdgeReversals(11, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[5,7],[5,8],[8,9],[9,10]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5], 'Test 43');
test(minEdgeReversals(8, [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6],[6,7]]), [0, 1, 2, 3, 1, 2, 3, 4], 'Test 44');
test(minEdgeReversals(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[5,7],[6,8]]), [0, 1, 1, 2, 2, 2, 2, 3, 3], 'Test 45');
test(minEdgeReversals(16, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14],[7,15]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4], 'Test 46');
test(minEdgeReversals(10, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[5,9]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3], 'Test 47');
test(minEdgeReversals(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 48');
test(minEdgeReversals(20, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14],[7,15],[7,16],[8,17],[8,18],[9,19]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 'Test 49');
test(minEdgeReversals(7, [[0,1],[1,3],[3,2],[2,4],[4,5],[5,6]]), [0, 1, 3, 2, 4, 5, 6], 'Test 50');
test(minEdgeReversals(6, [[0,1],[0,2],[1,3],[1,4],[2,5]]), [0, 1, 1, 2, 2, 2], 'Test 51');
test(minEdgeReversals(9, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8]]), [0, 1, 1, 2, 2, 2, 2, 3, 3], 'Test 52');
test(minEdgeReversals(12, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[5,7],[6,8],[8,9],[9,10],[10,11]]), [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6], 'Test 53');
test(minEdgeReversals(6, [[0,1],[1,3],[3,4],[4,5],[2,3]]), [1, 2, 2, 3, 4, 5], 'Test 54');
test(minEdgeReversals(14, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 55');

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
