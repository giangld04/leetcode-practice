// Test: 3193. Count The Number Of Inversions
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfPermutations } = require("./solution");

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

console.log("\n3193. Count The Number Of Inversions\n");

test(numberOfPermutations(4, [[3,3],[1,1],[2,2],[0,0]]), 1, 'Test 1');
test(numberOfPermutations(5, [[4,6],[2,2],[3,3],[1,1],[0,0]]), 1, 'Test 2');
test(numberOfPermutations(2, [[0,0],[1,0]]), 1, 'Test 3');
test(numberOfPermutations(3, [[2,2],[0,0]]), 2, 'Test 4');
test(numberOfPermutations(3, [[2,2],[1,1],[0,0]]), 1, 'Test 5');
test(numberOfPermutations(5, [[4,5],[2,2],[0,0]]), 8, 'Test 6');
test(numberOfPermutations(15, [[14,50],[10,25],[6,15],[4,10],[2,5],[0,0]]), 0, 'Test 7');
test(numberOfPermutations(6, [[5,6],[3,3],[1,1],[0,0]]), 12, 'Test 8');
test(numberOfPermutations(7, [[6,15],[4,10],[2,5],[0,0]]), 0, 'Test 9');
test(numberOfPermutations(30, [[29,150],[24,75],[19,40],[15,20],[11,10],[7,5],[5,3],[3,1],[1,0],[0,0]]), 363866727, 'Test 10');
test(numberOfPermutations(15, [[14,60],[8,20],[9,30],[4,8],[5,12],[2,4],[3,6],[6,18],[7,24],[10,40],[11,50],[12,60],[13,70],[1,2],[0,0]]), 0, 'Test 11');
test(numberOfPermutations(8, [[7,14],[5,6],[3,3],[1,1],[2,2],[4,4],[6,8],[0,0]]), 1, 'Test 12');
test(numberOfPermutations(15, [[14,85],[12,45],[10,20],[8,10],[6,6],[4,3],[2,2],[0,0],[3,5],[5,8],[7,12],[9,18],[11,30],[13,50]]), 0, 'Test 13');
test(numberOfPermutations(20, [[19,90],[16,60],[13,40],[10,20],[7,10],[4,5],[2,2],[0,0]]), 358259893, 'Test 14');
test(numberOfPermutations(5, [[4,10],[3,6],[2,3],[1,1],[0,0]]), 1, 'Test 15');
test(numberOfPermutations(15, [[14,91],[13,78],[12,65],[11,52],[10,39],[9,26],[8,13],[7,0],[6,0],[5,0],[4,0],[3,0],[2,0],[1,0],[0,0]]), 0, 'Test 16');
test(numberOfPermutations(12, [[11,40],[9,25],[7,15],[5,10],[3,5],[1,2],[0,0]]), 0, 'Test 17');
test(numberOfPermutations(7, [[6,21],[5,15],[4,10],[3,6],[2,3],[1,1],[0,0]]), 1, 'Test 18');
test(numberOfPermutations(8, [[7,18],[5,10],[4,7],[3,4],[2,3],[1,2],[0,0]]), 0, 'Test 19');
test(numberOfPermutations(10, [[9,30],[7,15],[5,8],[3,4],[1,2],[0,0]]), 0, 'Test 20');
test(numberOfPermutations(9, [[8,20],[6,12],[5,8],[4,5],[3,3],[2,2],[1,1],[0,0]]), 8, 'Test 21');
test(numberOfPermutations(6, [[5,10],[3,4],[2,2],[1,1],[0,0]]), 4, 'Test 22');
test(numberOfPermutations(20, [[19,171],[18,153],[17,136],[16,119],[15,102],[14,85],[13,68],[12,51],[11,34],[10,17],[9,0],[8,0],[7,0],[6,0],[5,0],[4,0],[3,0],[2,0],[1,0],[0,0]]), 0, 'Test 23');
test(numberOfPermutations(15, [[14,105],[11,40],[8,15],[6,7],[3,3],[2,1],[1,0],[0,0]]), 0, 'Test 24');
test(numberOfPermutations(8, [[7,28],[6,21],[5,15],[4,10],[3,6],[2,3],[1,1],[0,0]]), 1, 'Test 25');
test(numberOfPermutations(8, [[7,20],[6,15],[5,10],[4,6],[3,4],[2,3],[1,2],[0,0]]), 0, 'Test 26');
test(numberOfPermutations(12, [[11,45],[9,25],[7,15],[5,8],[3,4],[1,2],[0,0]]), 0, 'Test 27');
test(numberOfPermutations(9, [[8,18],[6,12],[4,8],[2,4],[0,0]]), 0, 'Test 28');
test(numberOfPermutations(10, [[9,35],[8,25],[7,20],[6,15],[5,10],[4,6],[3,4],[2,3],[1,2],[0,0]]), 0, 'Test 29');
test(numberOfPermutations(25, [[24,100],[15,30],[16,40],[12,20],[13,25],[8,10],[9,15],[6,5],[7,10],[4,3],[5,6],[2,2],[3,3],[17,50],[18,60],[19,70],[20,80],[21,90],[22,100],[23,110],[1,1],[0,0]]), 0, 'Test 30');
test(numberOfPermutations(12, [[11,66],[8,30],[6,15],[4,7],[2,2],[0,0]]), 0, 'Test 31');
test(numberOfPermutations(8, [[7,10],[4,4],[5,5],[2,1],[3,2],[6,6],[1,0],[0,0]]), 1, 'Test 32');
test(numberOfPermutations(25, [[24,150],[21,105],[18,70],[15,45],[12,30],[9,20],[6,15],[3,10],[0,0]]), 0, 'Test 33');
test(numberOfPermutations(9, [[8,25],[7,20],[6,15],[5,10],[4,6],[3,4],[2,3],[1,2],[0,0]]), 0, 'Test 34');
test(numberOfPermutations(7, [[6,15],[4,8],[2,4],[0,0]]), 0, 'Test 35');
test(numberOfPermutations(6, [[5,6],[4,3],[3,2],[2,1],[1,0],[0,0]]), 1, 'Test 36');
test(numberOfPermutations(7, [[6,10],[4,5],[3,3],[2,1],[1,0],[0,0]]), 6, 'Test 37');
test(numberOfPermutations(10, [[9,30],[5,10],[6,15],[3,4],[4,8],[2,2],[7,20],[8,25],[1,1],[0,0]]), 1, 'Test 38');
test(numberOfPermutations(6, [[5,10],[3,5],[1,2],[0,0]]), 0, 'Test 39');
test(numberOfPermutations(6, [[5,6],[3,2],[2,1],[1,0],[0,0]]), 5, 'Test 40');
test(numberOfPermutations(25, [[24,250],[22,170],[20,100],[18,60],[16,40],[14,20],[12,10],[10,6],[8,4],[6,3],[4,2],[2,1],[0,0],[1,1],[3,3],[5,5],[7,7],[9,9],[11,11],[13,13],[15,15],[17,17],[19,19],[21,21],[23,23]]), 0, 'Test 41');
test(numberOfPermutations(10, [[9,45],[7,21],[5,10],[4,6],[3,4],[2,2],[1,1],[0,0]]), 0, 'Test 42');
test(numberOfPermutations(10, [[9,25],[7,15],[5,10],[3,5],[1,2],[0,0]]), 0, 'Test 43');
test(numberOfPermutations(8, [[7,10],[5,5],[3,3],[1,1],[0,0]]), 54, 'Test 44');
test(numberOfPermutations(10, [[9,28],[7,15],[5,6],[3,3],[1,1],[2,2],[4,4],[6,8],[8,20],[0,0]]), 1, 'Test 45');
test(numberOfPermutations(6, [[5,9],[4,7],[3,5],[2,3],[1,1],[0,0]]), 1, 'Test 46');
test(numberOfPermutations(18, [[17,60],[13,30],[9,15],[6,10],[4,5],[2,2],[0,0]]), 217514306, 'Test 47');
test(numberOfPermutations(7, [[6,15],[5,10],[4,6],[3,4],[2,2],[1,1],[0,0]]), 1, 'Test 48');
test(numberOfPermutations(8, [[7,21],[5,10],[4,6],[3,4],[2,2],[1,1],[0,0]]), 3, 'Test 49');
test(numberOfPermutations(15, [[14,50],[12,30],[10,20],[8,15],[6,10],[4,5],[2,3],[0,0]]), 57024, 'Test 50');
test(numberOfPermutations(8, [[7,15],[3,5],[5,10],[2,2],[1,1],[0,0]]), 30, 'Test 51');
test(numberOfPermutations(7, [[6,15],[4,10],[2,3],[0,0],[3,4],[5,9],[1,1]]), 0, 'Test 52');
test(numberOfPermutations(20, [[19,130],[17,80],[15,40],[13,20],[11,10],[9,6],[7,4],[5,3],[3,2],[1,1],[0,0],[2,2],[4,4],[6,6],[8,8],[10,10],[12,12],[14,14],[16,16],[18,18]]), 0, 'Test 53');
test(numberOfPermutations(12, [[11,66],[10,55],[9,45],[8,36],[7,28],[6,21],[5,15],[4,10],[3,6],[2,3],[1,1],[0,0]]), 1, 'Test 54');
test(numberOfPermutations(6, [[5,12],[4,8],[3,5],[2,3],[1,1],[0,0]]), 1, 'Test 55');
test(numberOfPermutations(18, [[17,63],[14,42],[11,28],[8,21],[5,14],[2,7],[0,0]]), 0, 'Test 56');
test(numberOfPermutations(15, [[14,45],[11,25],[8,10],[5,5],[2,2],[0,0]]), 5518800, 'Test 57');
test(numberOfPermutations(12, [[11,28],[8,15],[5,8],[2,3],[0,0]]), 51170, 'Test 58');
test(numberOfPermutations(10, [[9,45],[8,36],[7,28],[6,21],[5,15],[4,10],[3,6],[2,3],[1,1],[0,0]]), 1, 'Test 59');
test(numberOfPermutations(25, [[24,100],[20,50],[15,25],[11,15],[7,10],[5,5],[3,2],[1,0],[0,0]]), 195391545, 'Test 60');
test(numberOfPermutations(10, [[9,35],[8,25],[7,18],[6,12],[5,8],[4,5],[3,3],[2,2],[1,1],[0,0]]), 0, 'Test 61');
test(numberOfPermutations(8, [[7,21],[4,10],[3,5],[2,3],[1,1],[0,0]]), 0, 'Test 62');
test(numberOfPermutations(8, [[7,10],[6,5],[5,2],[4,1],[3,0],[2,0],[1,0],[0,0]]), 1, 'Test 63');
test(numberOfPermutations(9, [[8,36],[7,28],[6,21],[5,15],[4,10],[3,6],[2,3],[1,1],[0,0]]), 1, 'Test 64');
test(numberOfPermutations(15, [[14,105],[13,84],[12,63],[11,42],[10,28],[9,21],[8,15],[7,10],[6,6],[5,4],[4,2],[3,1],[2,1],[1,0],[0,0]]), 0, 'Test 65');
test(numberOfPermutations(12, [[11,30],[8,15],[5,8],[3,3],[1,1],[0,0]]), 47250, 'Test 66');
test(numberOfPermutations(20, [[19,190],[18,171],[17,153],[16,136],[15,119],[14,105],[13,92],[12,80],[11,69],[10,58],[9,48],[8,39],[7,31],[6,24],[5,18],[4,13],[3,9],[2,6],[1,4],[0,0]]), 0, 'Test 67');
test(numberOfPermutations(5, [[4,6],[3,4],[2,3],[1,2],[0,0]]), 0, 'Test 68');
test(numberOfPermutations(8, [[7,14],[5,7],[3,3],[1,1],[0,0]]), 105, 'Test 69');
test(numberOfPermutations(10, [[9,45],[5,15],[3,5],[2,3],[1,1],[0,0]]), 0, 'Test 70');
test(numberOfPermutations(8, [[7,20],[5,10],[3,5],[1,2],[0,0],[6,12],[4,6]]), 0, 'Test 71');
test(numberOfPermutations(8, [[7,21],[5,12],[3,6],[1,3],[0,0]]), 0, 'Test 72');
test(numberOfPermutations(9, [[8,28],[6,18],[4,10],[2,5],[0,0]]), 0, 'Test 73');
test(numberOfPermutations(10, [[9,40],[7,25],[5,15],[4,10],[3,6],[2,4],[1,2],[0,0]]), 0, 'Test 74');
test(numberOfPermutations(6, [[5,6],[3,3],[1,1],[2,2],[4,4],[0,0]]), 1, 'Test 75');
test(numberOfPermutations(10, [[9,20],[6,10],[4,5],[2,2],[0,0]]), 2688, 'Test 76');
test(numberOfPermutations(7, [[6,15],[5,10],[4,6],[2,3],[0,0]]), 4, 'Test 77');
test(numberOfPermutations(5, [[4,6],[3,4],[2,2],[1,1],[0,0]]), 1, 'Test 78');
test(numberOfPermutations(20, [[19,80],[15,40],[11,20],[7,10],[5,5],[3,2],[1,0],[0,0]]), 208478921, 'Test 79');
test(numberOfPermutations(15, [[14,91],[12,50],[10,25],[8,15],[6,8],[4,4],[2,2],[0,0]]), 0, 'Test 80');
test(numberOfPermutations(6, [[5,15],[4,10],[3,6],[2,3],[1,1],[0,0]]), 1, 'Test 81');
test(numberOfPermutations(6, [[5,6],[3,3],[2,1],[1,0],[0,0]]), 4, 'Test 82');
test(numberOfPermutations(10, [[9,20],[8,15],[7,10],[6,5],[5,3],[4,2],[3,1],[2,0],[1,0],[0,0]]), 1, 'Test 83');
test(numberOfPermutations(20, [[19,150],[10,50],[11,60],[7,20],[8,30],[5,10],[6,15],[3,5],[4,10],[1,2],[2,3],[12,70],[13,80],[14,90],[15,100],[16,110],[17,120],[18,130],[0,0]]), 0, 'Test 84');

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
