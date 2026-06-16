// Test: 1971. Find If Path Exists In Graph
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { validPath } = require("./solution");

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

console.log("\n1971. Find If Path Exists In Graph\n");

test(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5), Error: maximum recursion depth exceeded, 'Test 1');
test(validPath(3, [[0,1],[1,2],[2,0]], 0, 2), Error: maximum recursion depth exceeded, 'Test 2');
test(validPath(5, [[0,1],[0,2],[1,3],[1,4]], 0, 4), Error: maximum recursion depth exceeded, 'Test 3');
test(validPath(5, [[0,1],[1,2],[2,3],[3,4]], 0, 4), Error: maximum recursion depth exceeded, 'Test 4');
test(validPath(5, [[0,1],[2,3],[1,4]], 0, 4), Error: maximum recursion depth exceeded, 'Test 5');
test(validPath(4, [[0,1],[1,2],[2,3]], 0, 3), Error: maximum recursion depth exceeded, 'Test 6');
test(validPath(4, [[0,1],[2,3]], 0, 3), Error: maximum recursion depth exceeded, 'Test 7');
test(validPath(1, [], 0, 0), true, 'Test 8');
test(validPath(4, [[0,1],[1,2]], 0, 3), Error: maximum recursion depth exceeded, 'Test 9');
test(validPath(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], 0, 9), Error: maximum recursion depth exceeded, 'Test 10');
test(validPath(7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]], 0, 3), Error: maximum recursion depth exceeded, 'Test 11');
test(validPath(8, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4]], 0, 7), Error: maximum recursion depth exceeded, 'Test 12');
test(validPath(15, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,0]], 14, 7), Error: maximum recursion depth exceeded, 'Test 13');
test(validPath(15, [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,13],[12,14]], 0, 14), Error: maximum recursion depth exceeded, 'Test 14');
test(validPath(100, [], 0, 99), false, 'Test 15');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[1,3],[2,5],[5,9],[9,15],[15,19]], 0, 19), Error: maximum recursion depth exceeded, 'Test 16');
test(validPath(25, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,0]], 15, 10), true, 'Test 17');
test(validPath(25, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24]], 0, 24), Error: maximum recursion depth exceeded, 'Test 18');
test(validPath(150, [[i, i+1] for i in range[149]] + [[i, i+2] for i in range[148]] + [[i, i+3] for i in range[147]], 0, 149), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 19');
test(validPath(10, [[0,1],[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[8,9]], 0, 9), Error: maximum recursion depth exceeded, 'Test 20');
test(validPath(100, [[i, i+1] for i in range[99]] + [[i, i+3] for i in range[97]], 0, 99), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 21');
test(validPath(35, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[24,25],[26,27],[28,29],[30,31],[32,33],[33,34]], 0, 34), Error: maximum recursion depth exceeded, 'Test 22');
test(validPath(10, [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[3,6]], 0, 9), Error: maximum recursion depth exceeded, 'Test 23');
test(validPath(15, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,10],[10,13]], 0, 14), Error: maximum recursion depth exceeded, 'Test 24');
test(validPath(5, [[0,1],[1,2],[2,3],[3,0],[1,3],[2,0]], 0, 4), Error: maximum recursion depth exceeded, 'Test 25');
test(validPath(100, [[i,i+1] for i in range[99]], 0, 99), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 26');
test(validPath(50, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],[37,38],[38,39],[39,40],[40,41],[41,42],[42,43],[43,44],[44,45],[45,46],[46,47],[47,48],[48,49],[49,0]], 0, 49), Error: maximum recursion depth exceeded, 'Test 27');
test(validPath(25, [[i,i+1] for i in range[24]] + [[i,i+2] for i in range[0,23,2]], 0, 24), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 28');
test(validPath(25, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,0]], 0, 24), Error: maximum recursion depth exceeded, 'Test 29');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[0,19]], 0, 19), Error: maximum recursion depth exceeded, 'Test 30');
test(validPath(200, [[i, i+1] for i in range[199]], 50, 150), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 31');
test(validPath(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[0,14]], 0, 14), Error: maximum recursion depth exceeded, 'Test 32');
test(validPath(75, [[i, i+1] for i in range[74]] + [[i, i+2] for i in range[73]], 0, 74), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 33');
test(validPath(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], 0, 5), Error: maximum recursion depth exceeded, 'Test 34');
test(validPath(8, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[0,7]], 0, 7), Error: maximum recursion depth exceeded, 'Test 35');
test(validPath(25, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[23,24]], 0, 24), Error: maximum recursion depth exceeded, 'Test 36');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,0]], 0, 9), Error: maximum recursion depth exceeded, 'Test 37');
test(validPath(100, [[i,i+1] for i in range[0, 99, 2]] + [[i,i+1] for i in range[1, 98, 2]], 0, 99), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 38');
test(validPath(5, [[0,1],[1,2],[2,3],[3,4],[4,0],[0,2],[1,3],[2,4]], 0, 4), Error: maximum recursion depth exceeded, 'Test 39');
test(validPath(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]], 14, 0), true, 'Test 40');
test(validPath(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]], 0, 14), Error: maximum recursion depth exceeded, 'Test 41');
test(validPath(35, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,34]], 0, 34), Error: maximum recursion depth exceeded, 'Test 42');
test(validPath(50, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],[37,38],[38,39],[39,40],[40,41],[41,42],[42,43],[43,44],[44,45],[45,46],[46,47],[47,48],[48,49],[49,0]], 10, 35), Error: maximum recursion depth exceeded, 'Test 43');
test(validPath(10, [[0,1],[2,3],[4,5],[6,7],[8,9]], 0, 9), Error: maximum recursion depth exceeded, 'Test 44');
test(validPath(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0]], 0, 5), Error: maximum recursion depth exceeded, 'Test 45');
test(validPath(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,9],[0,8],[0,7],[0,6],[0,5],[0,4],[0,3],[0,2]], 0, 9), Error: maximum recursion depth exceeded, 'Test 46');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]], 0, 19), Error: maximum recursion depth exceeded, 'Test 47');
test(validPath(20, [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,13],[12,14],[13,15],[14,16],[15,17],[16,18],[17,19],[18,19]], 0, 19), Error: maximum recursion depth exceeded, 'Test 48');
test(validPath(10, [[0,1],[0,3],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], 0, 9), Error: maximum recursion depth exceeded, 'Test 49');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]], 0, 19), Error: maximum recursion depth exceeded, 'Test 50');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,0]], 5, 15), Error: maximum recursion depth exceeded, 'Test 51');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[0,19]], 0, 9), Error: maximum recursion depth exceeded, 'Test 52');
test(validPath(30, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[24,25],[26,27],[28,29]], 0, 29), Error: maximum recursion depth exceeded, 'Test 53');
test(validPath(50, [[i, [i+1]%50] for i in range[50]], 0, 25), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 54');
test(validPath(5, [[0,1],[0,2],[0,3],[0,4]], 0, 4), Error: maximum recursion depth exceeded, 'Test 55');
test(validPath(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,9]], 0, 9), Error: maximum recursion depth exceeded, 'Test 56');
test(validPath(100, [[i,[i+1]%100] for i in range[100]], 0, 99), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 57');
test(validPath(9, [[0,1],[1,2],[2,0],[3,4],[4,5],[5,3],[6,7],[7,8],[8,6]], 0, 8), Error: maximum recursion depth exceeded, 'Test 58');
test(validPath(15, [[0,1],[1,2],[3,4],[4,5],[6,7],[7,8],[9,10],[10,11],[12,13],[13,14]], 0, 14), Error: maximum recursion depth exceeded, 'Test 59');
test(validPath(15, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,0],[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14]], 0, 14), Error: maximum recursion depth exceeded, 'Test 60');
test(validPath(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,0]], 0, 7), Error: maximum recursion depth exceeded, 'Test 61');
test(validPath(15, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5],[10,11],[11,12],[12,13],[13,14],[14,10]], 0, 14), Error: maximum recursion depth exceeded, 'Test 62');
test(validPath(30, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29]], 0, 29), Error: maximum recursion depth exceeded, 'Test 63');
test(validPath(10, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5]], 0, 5), Error: maximum recursion depth exceeded, 'Test 64');
test(validPath(30, [[i,i+1] for i in range[29]] + [[i,i+2] for i in range[0,28,2]] + [[i,i+3] for i in range[0,27,3]], 0, 29), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 65');
test(validPath(20, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19]], 0, 19), Error: maximum recursion depth exceeded, 'Test 66');
test(validPath(100, [[i, [i+1] % 100] for i in range[100]], 0, 50), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 67');
test(validPath(10, [[0,1],[1,2],[3,4],[5,6],[7,8],[8,9]], 0, 9), Error: maximum recursion depth exceeded, 'Test 68');
test(validPath(50, [[i, [i+1] % 50] for i in range[50]], 0, 25), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 69');
test(validPath(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[0,19],[0,18],[0,17],[0,16],[0,15],[0,14],[0,13],[0,12],[0,11],[0,10],[0,9],[0,8],[0,7],[0,6],[0,5],[0,4],[0,3],[0,2]], 0, 19), Error: maximum recursion depth exceeded, 'Test 70');
test(validPath(100, [[i, i+1] for i in range[99]], 0, 99), Error: Solution.validPath[] missing 1 required positional argument: 'edges', 'Test 71');
test(validPath(15, [[0,1],[0,2],[0,3],[0,4],[1,5],[1,6],[2,7],[2,8],[3,9],[3,10],[4,11],[4,12],[5,13],[6,14]], 0, 14), Error: maximum recursion depth exceeded, 'Test 72');
test(validPath(50, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],[37,38],[38,39],[39,40],[40,41],[41,42],[42,43],[43,44],[44,45],[45,46],[46,47],[47,48],[48,49]], 0, 49), Error: maximum recursion depth exceeded, 'Test 73');
test(validPath(10, [[0,1],[1,2],[2,0],[3,4],[4,5],[5,3],[6,7],[7,8],[8,9],[9,6]], 0, 5), Error: maximum recursion depth exceeded, 'Test 74');
test(validPath(30, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,0]], 0, 29), Error: maximum recursion depth exceeded, 'Test 75');
test(validPath(15, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14]], 0, 14), Error: maximum recursion depth exceeded, 'Test 76');
test(validPath(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,0]], 0, 5), Error: maximum recursion depth exceeded, 'Test 77');

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
