// Test: 2316. Count Unreachable Pairs Of Nodes In An Undirected Graph
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { countPairs } = require("./solution");

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

console.log("\n2316. Count Unreachable Pairs Of Nodes In An Undirected Graph\n");

test(countPairs(6, [[0,1],[1,2],[3,4]]), 11, 'Test 1');
test(countPairs(6, []), 15, 'Test 2');
test(countPairs(3, [[0,1],[0,2],[1,2]]), 0, 'Test 3');
test(countPairs(5, [[0,1],[2,3]]), 8, 'Test 4');
test(countPairs(10, [[0,1],[2,3],[4,5],[6,7],[8,9]]), 40, 'Test 5');
test(countPairs(5, [[0,1],[1,2],[3,4]]), 6, 'Test 6');
test(countPairs(4, []), 6, 'Test 7');
test(countPairs(1, []), 0, 'Test 8');
test(countPairs(10, []), 45, 'Test 9');
test(countPairs(7, [[0,2],[0,5],[2,4],[1,6],[5,4]]), 14, 'Test 10');
test(countPairs(6, [[0,1],[1,2],[2,3],[3,4],[4,5]]), 0, 'Test 11');
test(countPairs(10, [[0,1],[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[8,9]]), 25, 'Test 12');
test(countPairs(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,6],[15,16],[16,17],[17,18],[18,19],[19,15]]), 129, 'Test 13');
test(countPairs(10, [[0,1],[0,2],[1,2],[3,4],[4,5],[6,7],[7,8],[8,9]]), 33, 'Test 14');
test(countPairs(500, [[i, i+1] for i in range[0, 499, 2]] + [[i, i+1] for i in range[1, 499, 2]] + [[i, i+2] for i in range[0, 498, 2]] + [[i, i+2] for i in range[1, 498, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 15');
test(countPairs(16, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,0]]), 0, 'Test 16');
test(countPairs(15, [[0,1],[0,2],[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14]]), 96, 'Test 17');
test(countPairs(50, [[i, i+1] for i in range[0, 48, 2]] + [[i, i+1] for i in range[1, 49, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 18');
test(countPairs(100, [[i, i+1] for i in range[49]] + [[i, i+1] for i in range[50, 99]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 19');
test(countPairs(25, [[0,1],[1,2],[3,4],[4,5],[6,7],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24]]), 283, 'Test 20');
test(countPairs(10, [[0,1],[2,3],[3,4],[4,5],[6,7],[7,8],[8,9]]), 32, 'Test 21');
test(countPairs(100, [[i, i+1] for i in range[0, 99]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 22');
test(countPairs(75, [[i, [i+15] % 75] for i in range[75]] + [[i, [i+30] % 75] for i in range[75]] + [[i, [i+45] % 75] for i in range[75]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 23');
test(countPairs(100, [[i, [i+1] % 100] for i in range[50]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 24');
test(countPairs(1000, [[i, [i+1] % 1000] for i in range[0, 1000, 10]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 25');
test(countPairs(15, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,5],[9,10],[10,11],[11,9],[12,13],[13,14],[14,12]]), 83, 'Test 26');
test(countPairs(15, [[0,1],[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[8,9],[10,11],[11,12],[12,13],[13,14]]), 75, 'Test 27');
test(countPairs(50, [[i, i+1] for i in range[0, 48, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 28');
test(countPairs(1000, [[i, i+1] for i in range[0, 998, 2]] + [[i, i+1] for i in range[1, 999, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 29');
test(countPairs(15, [[0,1],[0,2],[1,2],[3,4],[3,5],[4,5],[6,7],[8,9],[9,10],[11,12],[13,14]]), 93, 'Test 30');
test(countPairs(20, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19]]), 180, 'Test 31');
test(countPairs(100, [[i, [i+1] % 100] for i in range[0, 100, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 32');
test(countPairs(75, [[i, i+1] for i in range[74]] + [[0, 74]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 33');
test(countPairs(15, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,0]]), 96, 'Test 34');
test(countPairs(25, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5],[10,11],[11,12],[12,13],[13,14],[14,10],[15,16],[16,17],[17,18],[18,19],[19,15],[20,21],[21,22],[22,23],[23,24],[24,20]]), 250, 'Test 35');
test(countPairs(100, [[i, i+1] for i in range[0, 98, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 36');
test(countPairs(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]]), 0, 'Test 37');
test(countPairs(50, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[24,25],[26,27],[28,29],[30,31],[32,33],[34,35],[36,37],[38,39],[40,41],[42,43],[44,45],[46,47],[48,49]]), 1200, 'Test 38');
test(countPairs(15, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[8,9],[9,10],[11,12],[13,14]]), 87, 'Test 39');
test(countPairs(100, []), 4950, 'Test 40');
test(countPairs(10, [[0,1],[1,2],[2,3],[3,4],[5,6],[6,7],[8,9]]), 31, 'Test 41');
test(countPairs(8, [[0,1],[1,2],[2,3],[4,5],[5,6],[7,4]]), 16, 'Test 42');
test(countPairs(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]), 100, 'Test 43');
test(countPairs(25, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,5],[9,10],[10,11],[11,12],[12,9],[13,14],[14,15],[15,16],[16,13],[17,18],[18,19],[19,20],[20,17],[21,22],[22,23],[23,24],[24,21]]), 260, 'Test 44');
test(countPairs(80, [[i, i+1] for i in range[0, 78, 3]] + [[i, i+2] for i in range[0, 78, 4]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 45');
test(countPairs(10000, [[i, i+1] for i in range[0, 9999, 2]] + [[i, i+1] for i in range[1, 9999, 2]] + [[i, i+2] for i in range[0, 9998, 2]] + [[i, i+2] for i in range[1, 9998, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 46');
test(countPairs(100, [[i, [i+1] % 100] for i in range[0, 100]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 47');
test(countPairs(10, [[0,1],[0,2],[1,2],[3,4],[3,5],[3,6],[7,8],[7,9]]), 33, 'Test 48');
test(countPairs(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]), 0, 'Test 49');
test(countPairs(50, [[i, i+1] for i in range[0, 49, 2]] + [[i, i+1] for i in range[1, 49, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 50');
test(countPairs(100, [[i, i+1] for i in range[0, 99, 2]] + [[i, i+1] for i in range[1, 99, 2]] + [[i, i+2] for i in range[0, 98, 2]] + [[i, i+2] for i in range[1, 98, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 51');
test(countPairs(50, [[i, [i+1] % 50] for i in range[0, 50, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 52');
test(countPairs(100, [[i, [i+10] % 100] for i in range[100]] + [[i, [i+20] % 100] for i in range[100]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 53');
test(countPairs(30, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[24,25],[26,27],[28,29]]), 420, 'Test 54');
test(countPairs(5, [[0,1],[0,2],[1,2],[3,4]]), 6, 'Test 55');
test(countPairs(50, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]), 1035, 'Test 56');
test(countPairs(100, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],[37,38],[38,39],[39,40],[40,41],[41,42],[42,43],[43,44],[44,45],[45,46],[46,47],[47,48],[48,49],[49,50],[50,51],[51,52],[52,53],[53,54],[54,55],[55,56],[56,57],[57,58],[58,59],[59,60],[60,61],[61,62],[62,63],[63,64],[64,65],[65,66],[66,67],[67,68],[68,69],[69,70],[70,71],[71,72],[72,73],[73,74],[74,75],[75,76],[76,77],[77,78],[78,79],[79,80],[80,81],[81,82],[82,83],[83,84],[84,85],[85,86],[86,87],[87,88],[88,89],[89,90],[90,91],[91,92],[92,93],[93,94],[94,95],[95,96],[96,97],[97,98],[98,99]]), 0, 'Test 57');
test(countPairs(15, [[0,1],[1,2],[3,4],[4,5],[5,6],[7,8],[8,9],[9,10],[11,12],[12,13],[13,14],[14,7]]), 68, 'Test 58');
test(countPairs(10, [[0,1],[0,2],[0,3],[4,5],[6,7],[6,8],[6,9]]), 32, 'Test 59');
test(countPairs(30, [[i, [i+1] % 30] for i in range[30]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 60');
test(countPairs(10, [[0,1],[1,2],[3,4],[4,5],[6,7],[8,9]]), 37, 'Test 61');
test(countPairs(15, [[0,1],[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[8,9],[9,10],[11,12],[12,13],[13,14]]), 74, 'Test 62');
test(countPairs(25, [[0,1],[1,2],[2,0],[3,4],[4,5],[5,3],[6,7],[7,8],[8,6],[9,10],[10,11],[11,9],[12,13],[13,14],[14,12],[15,16],[16,17],[17,15],[18,19],[19,20],[20,18],[21,22],[22,23],[23,21],[24,24]]), 276, 'Test 63');
test(countPairs(10000, [[i, i+1] for i in range[0, 9999, 100]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 64');
test(countPairs(5000, [[i, [i+1] % 5000] for i in range[0, 5000, 5]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 65');
test(countPairs(25, [[i, i+1] for i in range[24]] + [[0, 24]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 66');
test(countPairs(5000, [[i, i+1] for i in range[0, 4999, 2]] + [[i, i+1] for i in range[1, 4999, 2]] + [[i, i+2] for i in range[0, 4998, 2]] + [[i, i+2] for i in range[1, 4998, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 67');
test(countPairs(20000, [[i, [i+2] % 20000] for i in range[0, 20000, 20]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 68');
test(countPairs(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[7,8],[8,9],[9,10],[10,11],[11,7]]), 35, 'Test 69');
test(countPairs(25, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24]]), 0, 'Test 70');
test(countPairs(20, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,5],[9,10],[10,11],[11,12],[12,9],[13,14],[14,15],[15,16],[16,13],[17,18],[18,19],[19,17]]), 159, 'Test 71');
test(countPairs(100, [[i, i+1] for i in range[0, 98, 2]] + [[i, i+1] for i in range[1, 99, 2]] + [[50, 99]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 72');
test(countPairs(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[6,7],[7,8],[8,9],[9,10],[10,11]]), 36, 'Test 73');
test(countPairs(100, [[i, i+1] for i in range[0, 99, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 74');
test(countPairs(10, [[0,1],[1,2],[2,3],[4,5],[5,6],[7,8]]), 35, 'Test 75');
test(countPairs(500, [[i, i+1] for i in range[0, 498, 2]] + [[i, i+1] for i in range[1, 499, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 76');
test(countPairs(50, [[i, [i+5] % 50] for i in range[50]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 77');
test(countPairs(100, [[i,i+1] for i in range[0, 99, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 78');
test(countPairs(15, [[0,1],[1,2],[3,4],[4,5],[5,6],[7,8],[8,9],[10,11],[12,13],[13,14]]), 89, 'Test 79');
test(countPairs(20, [[0,1],[0,2],[1,3],[2,4],[5,6],[5,7],[6,8],[7,9],[10,11],[11,12],[12,13],[13,14],[15,16],[16,17],[17,18],[18,19]]), 150, 'Test 80');
test(countPairs(15, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,4],[7,8],[8,9],[9,10],[10,7],[11,12],[12,13],[13,11],[14]]), Error: not enough values to unpack [expected 2, got 1], 'Test 81');
test(countPairs(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0]]), 0, 'Test 82');
test(countPairs(1000, [[i, i+1] for i in range[0, 999, 2]] + [[i, i+1] for i in range[1, 999, 2]] + [[i, i+2] for i in range[0, 998, 2]] + [[i, i+2] for i in range[1, 998, 2]]), Error: Solution.countPairs[] missing 1 required positional argument: 'edges', 'Test 83');
test(countPairs(25, [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24]]), 150, 'Test 84');
test(countPairs(10, [[0,1],[1,2],[2,3],[4,5],[5,6],[7,8],[8,9]]), 33, 'Test 85');
test(countPairs(10, [[0,1],[1,2],[2,3],[3,4],[5,6],[7,8],[8,9]]), 31, 'Test 86');
test(countPairs(50, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,5],[9,10],[10,11],[11,9],[12,13],[13,14],[14,12],[15,16],[16,17],[17,15],[18,19],[19,20],[20,18],[21,22],[22,23],[23,21],[24,24],[25,26],[26,27],[27,28],[28,25],[29,30],[30,31],[31,29],[32,33],[33,34],[34,32],[35,36],[36,37],[37,35],[38,39],[39,40],[40,38],[41,42],[42,43],[43,41],[44,45],[45,46],[46,44],[47,48],[48,49],[49,47]]), 1167, 'Test 87');

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
