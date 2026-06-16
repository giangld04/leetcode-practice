// Test: 2848. Points That Intersect With Cars
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfPoints } = require("./solution");

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

console.log("\n2848. Points That Intersect With Cars\n");

test(numberOfPoints([[1,100]]), 100, 'Test 1');
test(numberOfPoints([[1,3],[5,8]]), 7, 'Test 2');
test(numberOfPoints([[1,1],[2,2],[3,3]]), 3, 'Test 3');
test(numberOfPoints([[10,15],[20,25]]), 12, 'Test 4');
test(numberOfPoints([[1,100],[50,60],[60,90]]), 100, 'Test 5');
test(numberOfPoints([[5,10],[10,15]]), 11, 'Test 6');
test(numberOfPoints([[10,15],[12,20],[8,14]]), 13, 'Test 7');
test(numberOfPoints([[1,100],[50,60],[60,80]]), 100, 'Test 8');
test(numberOfPoints([[10,15],[12,20],[18,25]]), 16, 'Test 9');
test(numberOfPoints([[3,6],[1,5],[4,7]]), 7, 'Test 10');
test(numberOfPoints([[1,3],[4,6],[7,9],[10,12],[13,15],[16,18],[19,21],[22,24],[25,27],[28,30]]), 30, 'Test 11');
test(numberOfPoints([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20]]), 20, 'Test 12');
test(numberOfPoints([[10,20],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50],[45,55],[50,60],[55,65],[60,70],[65,75],[70,80],[75,85],[80,90],[85,95],[90,100]]), 91, 'Test 13');
test(numberOfPoints([[1,20],[5,25],[10,30],[15,35],[20,40]]), 40, 'Test 14');
test(numberOfPoints([[2,4],[6,8],[10,12],[14,16],[18,20]]), 15, 'Test 15');
test(numberOfPoints([[1,5],[2,4],[3,3],[4,4],[5,5]]), 5, 'Test 16');
test(numberOfPoints([[1,5],[6,10],[11,15],[16,20],[21,25],[26,30],[31,35],[36,40]]), 40, 'Test 17');
test(numberOfPoints([[1,100],[50,150],[100,200],[150,250],[200,300]]), Error: list index out of range, 'Test 18');
test(numberOfPoints([[5,10],[15,20],[25,30],[35,40],[45,50],[55,60],[65,70],[75,80],[85,90]]), 54, 'Test 19');
test(numberOfPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), 9, 'Test 20');
test(numberOfPoints([[1,10],[2,9],[3,8],[4,7],[5,6]]), 10, 'Test 21');
test(numberOfPoints([[1,50],[51,100],[1,100]]), 100, 'Test 22');
test(numberOfPoints([[5,10],[8,12],[15,20],[18,25],[22,30]]), 24, 'Test 23');
test(numberOfPoints([[5,10],[15,20],[25,30],[35,40],[45,50]]), 30, 'Test 24');
test(numberOfPoints([[3,6],[1,5],[4,7],[8,10],[11,13]]), 13, 'Test 25');
test(numberOfPoints([[1,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15],[15,17],[17,19],[19,21]]), 21, 'Test 26');
test(numberOfPoints([[30,40],[40,50],[50,60],[60,70],[70,80],[80,90],[90,100],[10,20],[20,30]]), 91, 'Test 27');
test(numberOfPoints([[1,50],[51,100],[25,75],[76,99],[1,100]]), 100, 'Test 28');
test(numberOfPoints([[2,10],[5,15],[8,20],[18,30]]), 29, 'Test 29');
test(numberOfPoints([[10,20],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50]]), 41, 'Test 30');
test(numberOfPoints([[30,40],[35,45],[40,50],[45,55]]), 26, 'Test 31');
test(numberOfPoints([[1,100],[2,99],[3,98],[4,97],[5,96],[6,95],[7,94],[8,93],[9,92],[10,91]]), 100, 'Test 32');
test(numberOfPoints([[10,20],[21,30],[31,40],[41,50],[51,60],[61,70],[71,80],[81,90],[91,100]]), 91, 'Test 33');
test(numberOfPoints([[1,2],[3,4],[5,6],[7,8],[9,10]]), 10, 'Test 34');
test(numberOfPoints([[1,10],[5,20],[15,30],[25,40]]), 40, 'Test 35');
test(numberOfPoints([[5,8],[8,11],[11,14],[14,17],[17,20],[20,23],[23,26],[26,29],[29,32]]), 28, 'Test 36');
test(numberOfPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20]]), 20, 'Test 37');
test(numberOfPoints([[10,20],[20,30],[30,40],[40,50],[50,60],[60,70]]), 61, 'Test 38');
test(numberOfPoints([[5,10],[10,15],[15,20]]), 16, 'Test 39');
test(numberOfPoints([[1,50],[20,60],[55,80],[70,100]]), 100, 'Test 40');
test(numberOfPoints([[1,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15],[15,17]]), 17, 'Test 41');
test(numberOfPoints([[1,10],[11,20],[21,30]]), 30, 'Test 42');
test(numberOfPoints([[10,30],[20,40],[30,50],[40,60],[50,70],[60,80],[70,90],[80,100]]), 91, 'Test 43');
test(numberOfPoints([[5,10],[15,20],[25,30],[5,15],[10,25]]), 26, 'Test 44');
test(numberOfPoints([[1,5],[5,9],[9,13],[13,17],[17,21],[21,25]]), 25, 'Test 45');
test(numberOfPoints([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12]]), 12, 'Test 46');
test(numberOfPoints([[1,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15]]), 15, 'Test 47');
test(numberOfPoints([[1,50],[51,100],[1,100],[25,75],[50,60]]), 100, 'Test 48');
test(numberOfPoints([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]), 12, 'Test 49');
test(numberOfPoints([[5,10],[15,20],[25,30],[35,40],[45,50],[55,60],[65,70],[75,80],[85,90],[95,100]]), 60, 'Test 50');
test(numberOfPoints([[1,30],[20,50],[40,70],[60,90],[80,100],[95,120]]), Error: list index out of range, 'Test 51');
test(numberOfPoints([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10]]), 10, 'Test 52');
test(numberOfPoints([[1,100],[2,99],[3,98]]), 100, 'Test 53');
test(numberOfPoints([[5,10],[10,15],[15,20],[20,25],[25,30]]), 26, 'Test 54');
test(numberOfPoints([[1,50],[51,100],[101,150],[151,200]]), Error: list index out of range, 'Test 55');
test(numberOfPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 10, 'Test 56');
test(numberOfPoints([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]]), 10, 'Test 57');
test(numberOfPoints([[10,20],[15,25],[20,30],[25,35],[30,40]]), 31, 'Test 58');
test(numberOfPoints([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22]]), 22, 'Test 59');
test(numberOfPoints([[3,3],[5,5],[7,7],[9,9],[11,11],[13,13],[15,15],[17,17],[19,19]]), 9, 'Test 60');
test(numberOfPoints([[2,4],[4,6],[6,8],[8,10]]), 9, 'Test 61');
test(numberOfPoints([[10,20],[20,30],[30,40],[40,50],[50,60]]), 51, 'Test 62');
test(numberOfPoints([[50,60],[60,70],[70,80],[80,90],[90,100],[100,110]]), Error: list index out of range, 'Test 63');
test(numberOfPoints([[1,50],[5,45],[10,40],[15,35],[20,30]]), 50, 'Test 64');
test(numberOfPoints([[1,100],[2,99],[3,98],[4,97]]), 100, 'Test 65');
test(numberOfPoints([[3,7],[7,11],[11,15],[15,19],[19,23],[23,27],[27,31],[31,35]]), 33, 'Test 66');
test(numberOfPoints([[1,1],[2,2],[3,3],[4,4],[5,5]]), 5, 'Test 67');
test(numberOfPoints([[1,3],[4,6],[7,9],[10,12],[13,15],[16,18],[19,21]]), 21, 'Test 68');
test(numberOfPoints([[1,100],[50,100],[1,50]]), 100, 'Test 69');
test(numberOfPoints([[1,100],[1,100],[1,100],[1,100],[1,100],[1,100],[1,100],[1,100],[1,100],[1,100]]), 100, 'Test 70');
test(numberOfPoints([[1,2],[4,6],[8,10],[12,14],[16,18],[20,22]]), 17, 'Test 71');
test(numberOfPoints([[1,10],[10,20],[20,30],[30,40],[40,50]]), 50, 'Test 72');
test(numberOfPoints([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13],[10,14]]), 14, 'Test 73');
test(numberOfPoints([[1,3],[3,5],[5,7],[7,9],[9,11]]), 11, 'Test 74');
test(numberOfPoints([[5,10],[12,15],[16,20],[22,25]]), 19, 'Test 75');
test(numberOfPoints([[1,10],[5,15],[10,20],[15,25]]), 25, 'Test 76');
test(numberOfPoints([[1,10],[11,20],[21,30],[31,40],[41,50],[51,60],[61,70],[71,80],[81,90],[91,100]]), 100, 'Test 77');
test(numberOfPoints([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]]), 10, 'Test 78');
test(numberOfPoints([[1,50],[50,100],[100,150],[150,200],[200,250],[250,300],[300,350]]), Error: list index out of range, 'Test 79');
test(numberOfPoints([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 10, 'Test 80');
test(numberOfPoints([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[29,30]]), 30, 'Test 81');
test(numberOfPoints([[10,20],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50],[45,55],[50,60]]), 51, 'Test 82');
test(numberOfPoints([[3,9],[6,12],[10,14],[13,19]]), 17, 'Test 83');
test(numberOfPoints([[5,15],[15,25],[25,35],[35,45],[45,55],[55,65],[65,75],[75,85],[85,95],[95,100]]), 96, 'Test 84');
test(numberOfPoints([[5,10],[10,15],[15,20],[20,25],[25,30],[30,35]]), 31, 'Test 85');
test(numberOfPoints([[1,10],[2,8],[3,7],[4,6],[5,5]]), 10, 'Test 86');
test(numberOfPoints([[1,2],[4,5],[7,8],[10,11],[13,14],[16,17],[19,20]]), 14, 'Test 87');
test(numberOfPoints([[30,40],[40,50],[50,60],[60,70],[70,80],[80,90]]), 61, 'Test 88');
test(numberOfPoints([[2,3],[5,8],[10,15],[20,22],[25,27],[30,35],[38,40],[45,50]]), 33, 'Test 89');
test(numberOfPoints([[5,10],[11,15],[16,20],[21,25]]), 21, 'Test 90');

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
