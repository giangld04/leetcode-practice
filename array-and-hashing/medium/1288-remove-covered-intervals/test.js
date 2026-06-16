// Test: 1288. Remove Covered Intervals
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { removeCoveredIntervals } = require("./solution");

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

console.log("\n1288. Remove Covered Intervals\n");

test(removeCoveredIntervals([[1,2],[2,3],[3,4],[4,5]]), 4, 'Test 1');
test(removeCoveredIntervals([[1,100],[2,50],[3,75]]), 1, 'Test 2');
test(removeCoveredIntervals([[1,3],[2,4],[3,5]]), 3, 'Test 3');
test(removeCoveredIntervals([[1,4],[3,6],[2,8]]), 2, 'Test 4');
test(removeCoveredIntervals([[1,2],[1,4],[3,4]]), 1, 'Test 5');
test(removeCoveredIntervals([[1,4],[2,3]]), 1, 'Test 6');
test(removeCoveredIntervals([[0,10],[5,12]]), 2, 'Test 7');
test(removeCoveredIntervals([[1,100],[50,51],[51,101]]), 2, 'Test 8');
test(removeCoveredIntervals([[1,2],[2,3],[3,4]]), 3, 'Test 9');
test(removeCoveredIntervals([[1,2],[1,3],[1,4]]), 1, 'Test 10');
test(removeCoveredIntervals([[0,10],[5,15],[15,20]]), 3, 'Test 11');
test(removeCoveredIntervals([[1,2],[2,3],[3,4],[4,5],[5,6]]), 5, 'Test 12');
test(removeCoveredIntervals([[1,5],[2,5],[3,5]]), 1, 'Test 13');
test(removeCoveredIntervals([[1,10],[2,9],[3,8],[4,7],[5,6]]), 1, 'Test 14');
test(removeCoveredIntervals([[1,2]]), 1, 'Test 15');
test(removeCoveredIntervals([[1,5],[2,3],[4,6],[5,7],[6,8]]), 4, 'Test 16');
test(removeCoveredIntervals([[3,10],[5,7],[7,9],[8,10],[2,3]]), 2, 'Test 17');
test(removeCoveredIntervals([[1,10],[2,5],[3,7],[4,8],[5,9]]), 1, 'Test 18');
test(removeCoveredIntervals([[1,100],[1,50],[1,25],[1,125]]), 1, 'Test 19');
test(removeCoveredIntervals([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]), 7, 'Test 20');
test(removeCoveredIntervals([[2,5],[3,7],[5,10],[1,15]]), 1, 'Test 21');
test(removeCoveredIntervals([[10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [10, 60]]), 1, 'Test 22');
test(removeCoveredIntervals([[1,5],[5,10],[10,15],[15,20],[20,25]]), 5, 'Test 23');
test(removeCoveredIntervals([[1,5],[2,3],[4,9],[5,7],[6,8]]), 2, 'Test 24');
test(removeCoveredIntervals([[1,500],[50,1000],[100,1500],[150,2000],[200,2500]]), 5, 'Test 25');
test(removeCoveredIntervals([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]]), 7, 'Test 26');
test(removeCoveredIntervals([[1,20],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 1, 'Test 27');
test(removeCoveredIntervals([[1, 100000], [2, 99999], [3, 99998], [4, 99997]]), 1, 'Test 28');
test(removeCoveredIntervals([[5,10],[10,20],[15,25],[20,30],[25,35]]), 5, 'Test 29');
test(removeCoveredIntervals([[1, 3], [3, 5], [5, 7], [7, 9], [9, 11], [1, 11]]), 1, 'Test 30');
test(removeCoveredIntervals([[1,10],[2,5],[3,7],[8,9],[5,6]]), 1, 'Test 31');
test(removeCoveredIntervals([[1,2],[1,3],[1,4],[1,5],[1,6]]), 1, 'Test 32');
test(removeCoveredIntervals([[1,10],[2,5],[3,7],[5,9],[6,8]]), 1, 'Test 33');
test(removeCoveredIntervals([[1,10],[1,9],[1,8],[1,7],[1,6],[1,5],[1,4],[1,3],[1,2]]), 1, 'Test 34');
test(removeCoveredIntervals([[10,20],[15,25],[5,30],[20,30],[25,35]]), 2, 'Test 35');
test(removeCoveredIntervals([[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]), 7, 'Test 36');
test(removeCoveredIntervals([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]), 6, 'Test 37');
test(removeCoveredIntervals([[5,10],[6,9],[7,8],[8,7],[9,10],[10,11]]), 2, 'Test 38');
test(removeCoveredIntervals([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2]]), 1, 'Test 39');
test(removeCoveredIntervals([[1,100],[50,150],[10,50],[20,30],[70,100]]), 2, 'Test 40');
test(removeCoveredIntervals([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13]]), 9, 'Test 41');
test(removeCoveredIntervals([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16]]), 8, 'Test 42');
test(removeCoveredIntervals([[10,20],[20,30],[30,40],[40,50],[50,60]]), 5, 'Test 43');
test(removeCoveredIntervals([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13],[10,14]]), 10, 'Test 44');
test(removeCoveredIntervals([[1, 5], [6, 10], [11, 15], [16, 20], [21, 25], [26, 30]]), 6, 'Test 45');
test(removeCoveredIntervals([[5,10],[10,15],[15,20],[1,5],[5,5]]), 4, 'Test 46');
test(removeCoveredIntervals([[10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [15, 45]]), 4, 'Test 47');
test(removeCoveredIntervals([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10]]), 8, 'Test 48');
test(removeCoveredIntervals([[1,10],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9]]), 1, 'Test 49');
test(removeCoveredIntervals([[1,1],[2,2],[3,3],[4,4],[5,5]]), 5, 'Test 50');
test(removeCoveredIntervals([[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10]]), 1, 'Test 51');
test(removeCoveredIntervals([[1,100],[5,95],[10,90],[15,85],[20,80],[25,75],[30,70],[35,65],[40,60],[45,55]]), 1, 'Test 52');
test(removeCoveredIntervals([[1,10],[11,20],[21,30],[31,40],[41,50]]), 5, 'Test 53');
test(removeCoveredIntervals([[1,4],[2,5],[3,9],[4,8],[5,7]]), 3, 'Test 54');
test(removeCoveredIntervals([[1,10],[5,15],[10,20],[0,30]]), 1, 'Test 55');
test(removeCoveredIntervals([[5,10],[6,15],[10,15],[15,20],[16,20]]), 3, 'Test 56');
test(removeCoveredIntervals([[1, 10], [11, 20], [21, 30], [31, 40], [41, 50]]), 5, 'Test 57');
test(removeCoveredIntervals([[10,20],[20,30],[30,40],[40,50],[10,50],[15,45],[25,35]]), 1, 'Test 58');
test(removeCoveredIntervals([[1, 4], [2, 8], [3, 12], [4, 16], [5, 20], [6, 24], [7, 28]]), 7, 'Test 59');
test(removeCoveredIntervals([[1,3],[2,6],[3,9],[4,12],[5,15]]), 5, 'Test 60');
test(removeCoveredIntervals([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]]), 1, 'Test 61');
test(removeCoveredIntervals([[1,4],[1,5],[1,6],[1,7]]), 1, 'Test 62');
test(removeCoveredIntervals([[5,10],[10,15],[15,20],[20,25],[25,30],[30,35]]), 6, 'Test 63');
test(removeCoveredIntervals([[10,20],[15,25],[5,30],[25,35],[30,40]]), 3, 'Test 64');
test(removeCoveredIntervals([[10, 20], [15, 25], [20, 30], [25, 35], [30, 40], [5, 45]]), 1, 'Test 65');
test(removeCoveredIntervals([[5, 10], [10, 15], [15, 20], [5, 20], [10, 16]]), 1, 'Test 66');
test(removeCoveredIntervals([[1,5],[2,6],[3,7],[4,8],[5,9]]), 5, 'Test 67');
test(removeCoveredIntervals([[1,4],[2,3],[3,5],[4,6],[5,7],[6,8],[7,9]]), 6, 'Test 68');
test(removeCoveredIntervals([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 9, 'Test 69');
test(removeCoveredIntervals([[1,100],[50,150],[100,200],[200,300],[250,350]]), 5, 'Test 70');
test(removeCoveredIntervals([[1,20],[2,3],[3,19],[19,20],[15,18]]), 1, 'Test 71');
test(removeCoveredIntervals([[1,10],[2,5],[5,7],[6,9],[8,10]]), 1, 'Test 72');
test(removeCoveredIntervals([[1,10],[2,5],[3,7],[6,9],[4,8]]), 1, 'Test 73');
test(removeCoveredIntervals([[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[5,35]]), 1, 'Test 74');
test(removeCoveredIntervals([[0,5],[5,10],[10,15],[15,20],[0,20],[1,19],[2,18],[3,17]]), 1, 'Test 75');
test(removeCoveredIntervals([[1,5],[2,3],[4,6],[3,7],[8,10],[9,11],[10,12]]), 5, 'Test 76');
test(removeCoveredIntervals([[5,10],[4,9],[3,8],[2,7],[1,6]]), 5, 'Test 77');
test(removeCoveredIntervals([[5,10],[10,20],[20,30],[30,40],[40,50],[50,60],[60,70]]), 7, 'Test 78');
test(removeCoveredIntervals([[10,20],[20,30],[25,40],[35,50],[45,60]]), 5, 'Test 79');
test(removeCoveredIntervals([[1,20],[10,20],[15,20],[5,25],[1,30],[25,35],[30,40]]), 3, 'Test 80');
test(removeCoveredIntervals([[10,20],[15,25],[20,30],[25,35],[30,40],[5,15],[10,30],[15,35],[20,40]]), 4, 'Test 81');
test(removeCoveredIntervals([[0,1000],[1,999],[2,998],[3,997],[4,996]]), 1, 'Test 82');
test(removeCoveredIntervals([[1,1000],[50,550],[100,900],[200,800],[300,700],[400,600],[500,550],[600,650],[700,750]]), 1, 'Test 83');
test(removeCoveredIntervals([[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,40],[40,45],[45,50]]), 9, 'Test 84');
test(removeCoveredIntervals([[100,200],[150,250],[50,150],[200,300]]), 4, 'Test 85');
test(removeCoveredIntervals([[1,10],[2,5],[3,7],[4,9],[5,6]]), 1, 'Test 86');
test(removeCoveredIntervals([[100,200],[100,200],[150,250],[50,150],[200,300]]), 4, 'Test 87');
test(removeCoveredIntervals([[1,10],[11,20],[21,30],[31,40],[41,50],[51,60],[61,70]]), 7, 'Test 88');
test(removeCoveredIntervals([[1,5],[2,4],[3,3],[4,2],[5,1]]), 1, 'Test 89');
test(removeCoveredIntervals([[1, 4], [2, 5], [3, 6], [4, 7], [5, 8], [6, 9], [7, 10]]), 7, 'Test 90');
test(removeCoveredIntervals([[5,10],[10,15],[15,20],[20,25],[5,25]]), 1, 'Test 91');
test(removeCoveredIntervals([[1,4],[1,6],[1,8],[1,10],[1,12]]), 1, 'Test 92');
test(removeCoveredIntervals([[1,4],[2,3],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 7, 'Test 93');
test(removeCoveredIntervals([[1,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,40]]), 8, 'Test 94');
test(removeCoveredIntervals([[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[1,2],[2,3],[3,4]]), 1, 'Test 95');
test(removeCoveredIntervals([[1,3],[2,5],[4,7],[6,9],[8,10]]), 5, 'Test 96');
test(removeCoveredIntervals([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,13],[12,14]]), 12, 'Test 97');
test(removeCoveredIntervals([[1,3],[2,4],[3,5],[4,6],[5,7]]), 5, 'Test 98');
test(removeCoveredIntervals([[1,10],[1,5],[1,3],[1,2],[2,10],[2,5],[2,3],[3,10],[3,5],[4,10]]), 1, 'Test 99');
test(removeCoveredIntervals([[1, 10], [2, 8], [3, 6], [4, 5], [5, 4], [6, 3], [8, 2], [10, 1]]), 1, 'Test 100');
test(removeCoveredIntervals([[0, 10], [5, 15], [10, 20], [15, 25]]), 4, 'Test 101');
test(removeCoveredIntervals([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), 8, 'Test 102');
test(removeCoveredIntervals([[1,10000],[2,9999],[3,9998],[4,9997],[5,9996]]), 1, 'Test 103');
test(removeCoveredIntervals([[1,3],[3,5],[5,7],[7,9],[9,11],[1,11]]), 1, 'Test 104');
test(removeCoveredIntervals([[1,100],[50,150],[100,200],[150,250],[200,300]]), 5, 'Test 105');
test(removeCoveredIntervals([[10,20],[15,25],[20,30],[25,35],[30,40]]), 5, 'Test 106');
test(removeCoveredIntervals([[1, 5], [5, 10], [10, 15], [15, 20], [20, 25], [1, 25]]), 1, 'Test 107');
test(removeCoveredIntervals([[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9]]), 1, 'Test 108');
test(removeCoveredIntervals([[1,10],[2,5],[3,7],[8,15],[5,12]]), 3, 'Test 109');
test(removeCoveredIntervals([[5,10],[1,3],[4,5],[8,11],[10,15]]), 5, 'Test 110');
test(removeCoveredIntervals([[1,100],[5,50],[10,90],[20,80],[30,70],[40,60]]), 1, 'Test 111');

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
