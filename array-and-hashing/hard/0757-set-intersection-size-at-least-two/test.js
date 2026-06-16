// Test: 757. Set Intersection Size At Least Two
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { intersectionSizeTwo } = require("./solution");

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

console.log("\n757. Set Intersection Size At Least Two\n");

test(intersectionSizeTwo([[1,10],[5,10],[7,15]]), 2, 'Test 1');
test(intersectionSizeTwo([[1,2],[2,3]]), 3, 'Test 2');
test(intersectionSizeTwo([[1,3],[1,4],[2,5],[3,5]]), 3, 'Test 3');
test(intersectionSizeTwo([[1,3],[3,7],[8,9]]), 5, 'Test 4');
test(intersectionSizeTwo([[1,2],[3,4],[5,6]]), 6, 'Test 5');
test(intersectionSizeTwo([[1,5],[2,4],[3,6]]), 2, 'Test 6');
test(intersectionSizeTwo([[1,100],[50,75],[25,50],[75,100]]), 4, 'Test 7');
test(intersectionSizeTwo([[1,10],[2,9],[3,8],[4,7],[5,6]]), 2, 'Test 8');
test(intersectionSizeTwo([[1,2],[2,3],[2,4],[4,5]]), 5, 'Test 9');
test(intersectionSizeTwo([[1,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15],[15,17],[17,19],[19,21]]), 11, 'Test 10');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), 7, 'Test 11');
test(intersectionSizeTwo([[1,10],[2,5],[3,7],[4,8],[5,9]]), 3, 'Test 12');
test(intersectionSizeTwo([[1,5],[1,5],[1,5],[1,5],[1,5],[1,5],[1,5],[1,5],[1,5],[1,5]]), 2, 'Test 13');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]), 8, 'Test 14');
test(intersectionSizeTwo([[1,4],[2,5],[3,6],[4,7],[5,8],[6,9],[7,10],[8,11],[9,12],[10,13]]), 6, 'Test 15');
test(intersectionSizeTwo([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8]]), 5, 'Test 16');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20]]), 20, 'Test 17');
test(intersectionSizeTwo([[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[2,9],[3,8],[4,7],[5,6]]), 2, 'Test 18');
test(intersectionSizeTwo([[1,3],[3,6],[6,9],[9,12],[12,15]]), 6, 'Test 19');
test(intersectionSizeTwo([[1,3],[2,6],[4,7],[6,8],[8,10]]), 6, 'Test 20');
test(intersectionSizeTwo([[1,2],[1,3],[1,4],[1,5],[1,6]]), 2, 'Test 21');
test(intersectionSizeTwo([[10,20],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50]]), 6, 'Test 22');
test(intersectionSizeTwo([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13]]), 4, 'Test 23');
test(intersectionSizeTwo([[10,20],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50],[45,55],[50,60],[55,65]]), 8, 'Test 24');
test(intersectionSizeTwo([[1,1000],[500,750],[250,500],[750,1000],[100,300],[300,500],[500,700],[700,900],[900,1100]]), 6, 'Test 25');
test(intersectionSizeTwo([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13],[10,14]]), 5, 'Test 26');
test(intersectionSizeTwo([[1,100000000],[50000000,100000000],[1,50000000],[50000000,100000000],[25000000,75000000],[75000000,125000000]]), 4, 'Test 27');
test(intersectionSizeTwo([[1,100],[2,99],[3,98],[4,97],[5,96],[6,95],[7,94],[8,93],[9,92],[10,91]]), 2, 'Test 28');
test(intersectionSizeTwo([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10]]), 6, 'Test 29');
test(intersectionSizeTwo([[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [1, 4], [2, 4], [3, 4], [4, 4], [1, 3], [2, 3], [3, 3], [1, 2], [2, 2], [1, 1]]), 10, 'Test 30');
test(intersectionSizeTwo([[1,3],[3,7],[8,9],[10,12],[11,13]]), 7, 'Test 31');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]]), 14, 'Test 32');
test(intersectionSizeTwo([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10]]), 4, 'Test 33');
test(intersectionSizeTwo([[1,5],[1,5],[1,5],[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13]]), 4, 'Test 34');
test(intersectionSizeTwo([[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]]), 2, 'Test 35');
test(intersectionSizeTwo([[1,20],[5,15],[10,25],[15,30],[20,40]]), 4, 'Test 36');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16]]), 16, 'Test 37');
test(intersectionSizeTwo([[1, 5], [2, 6], [3, 7], [4, 8], [5, 9], [6, 10], [7, 11], [8, 12]]), 4, 'Test 38');
test(intersectionSizeTwo([[1,3],[3,5],[5,7],[7,9],[9,11]]), 6, 'Test 39');
test(intersectionSizeTwo([[1,10],[2,9],[3,8],[4,7],[5,6],[1,3],[2,4]]), 4, 'Test 40');
test(intersectionSizeTwo([[1,50],[10,30],[20,40],[30,50],[40,60],[50,70],[60,80],[70,90],[80,100]]), 6, 'Test 41');
test(intersectionSizeTwo([[10,20],[15,25],[20,30],[25,35],[30,40],[35,45]]), 5, 'Test 42');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15]]), 15, 'Test 43');
test(intersectionSizeTwo([[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,10]]), 2, 'Test 44');
test(intersectionSizeTwo([[1,3],[1,3],[1,3],[1,3],[1,3]]), 2, 'Test 45');
test(intersectionSizeTwo([[1,5],[2,6],[3,7],[4,8],[5,9]]), 3, 'Test 46');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 10, 'Test 47');
test(intersectionSizeTwo([[1,3],[1,5],[2,4],[2,6],[3,5],[3,7],[4,6],[4,8],[5,7],[5,9]]), 4, 'Test 48');
test(intersectionSizeTwo([[1,3],[4,6],[7,9],[10,12],[13,15],[16,18]]), 12, 'Test 49');
test(intersectionSizeTwo([[10, 20], [15, 25], [20, 30], [25, 35], [30, 40], [35, 45]]), 5, 'Test 50');
test(intersectionSizeTwo([[1,30],[10,20],[15,25],[20,30],[25,30]]), 4, 'Test 51');
test(intersectionSizeTwo([[1,10],[2,11],[3,12],[4,13],[5,14],[6,15],[7,16],[8,17],[9,18],[10,19]]), 3, 'Test 52');
test(intersectionSizeTwo([[1,20],[2,19],[3,18],[4,17],[5,16],[6,15],[7,14],[8,13],[9,12],[10,11]]), 2, 'Test 53');
test(intersectionSizeTwo([[5,10],[6,8],[7,9],[8,11],[9,12]]), 4, 'Test 54');
test(intersectionSizeTwo([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,13],[12,14],[13,15],[14,16],[15,17]]), 11, 'Test 55');
test(intersectionSizeTwo([[1,10],[10,20],[20,30],[30,40],[40,50],[50,60],[60,70],[70,80],[80,90],[90,100]]), 11, 'Test 56');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]), 12, 'Test 57');
test(intersectionSizeTwo([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]), 2, 'Test 58');
test(intersectionSizeTwo([[1,3],[3,7],[7,11],[11,15],[15,19],[19,23],[23,27],[27,31]]), 9, 'Test 59');
test(intersectionSizeTwo([[1,10],[2,8],[3,7],[4,6],[5,5]]), 2, 'Test 60');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[1,10],[5,15],[10,20],[15,25]]), 12, 'Test 61');
test(intersectionSizeTwo([[1,1000],[2,999],[3,998],[4,997],[5,996],[6,995],[7,994]]), 2, 'Test 62');
test(intersectionSizeTwo([[1, 10], [2, 9], [3, 8], [4, 7], [5, 6], [6, 5], [7, 4], [8, 3], [9, 2], [10, 1]]), 11, 'Test 63');
test(intersectionSizeTwo([[1,10],[1,9],[1,8],[1,7],[1,6],[1,5],[1,4],[1,3],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 10, 'Test 64');
test(intersectionSizeTwo([[1,10],[2,8],[3,7],[4,6],[5,5],[6,6]]), 4, 'Test 65');
test(intersectionSizeTwo([[1,3],[1,4],[2,5],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12]]), 8, 'Test 66');
test(intersectionSizeTwo([[1,10],[2,9],[3,8],[4,7],[5,6],[11,20],[12,19],[13,18],[14,17],[15,16]]), 4, 'Test 67');
test(intersectionSizeTwo([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]), 13, 'Test 68');
test(intersectionSizeTwo([[1,10],[11,20],[21,30],[31,40],[41,50],[51,60],[61,70],[71,80],[81,90],[91,100]]), 20, 'Test 69');
test(intersectionSizeTwo([[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]]), 2, 'Test 70');
test(intersectionSizeTwo([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[29,30]]), 30, 'Test 71');
test(intersectionSizeTwo([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]]), 11, 'Test 72');
test(intersectionSizeTwo([[1,10],[5,15],[10,20],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50],[45,55],[50,60]]), 8, 'Test 73');
test(intersectionSizeTwo([[1,10],[2,5],[3,6],[7,12],[8,9]]), 4, 'Test 74');
test(intersectionSizeTwo([[1,10],[2,10],[3,10],[4,10],[5,10],[6,10]]), 2, 'Test 75');
test(intersectionSizeTwo([[5,10],[10,15],[15,20],[20,25],[25,30]]), 6, 'Test 76');
test(intersectionSizeTwo([[1, 5], [5, 10], [10, 15], [15, 20], [20, 25], [25, 30]]), 7, 'Test 77');
test(intersectionSizeTwo([[1,100000000],[50000000,100000000],[1,50000000],[50000000,100000000]]), 3, 'Test 78');
test(intersectionSizeTwo([[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]]), 2, 'Test 79');
test(intersectionSizeTwo([[1, 10], [2, 8], [3, 6], [7, 10], [4, 5], [5, 9]]), 4, 'Test 80');
test(intersectionSizeTwo([[1,10],[11,20],[21,30],[1,20],[11,30],[1,30]]), 6, 'Test 81');
test(intersectionSizeTwo([[5,15],[10,20],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50]]), 6, 'Test 82');
test(intersectionSizeTwo([[1,50],[5,55],[10,60],[15,65],[20,70],[25,75],[30,80],[35,85],[40,90],[45,95]]), 2, 'Test 83');
test(intersectionSizeTwo([[1, 100], [1, 50], [50, 100], [25, 75], [75, 125], [100, 150]]), 4, 'Test 84');
test(intersectionSizeTwo([[10,20],[15,25],[20,30],[25,35],[30,40]]), 4, 'Test 85');
test(intersectionSizeTwo([[1,10],[11,20],[21,30],[31,40],[41,50],[51,60],[61,70],[71,80],[81,90],[91,100],[1,100]]), 20, 'Test 86');
test(intersectionSizeTwo([[1,100000000],[50000000,75000000],[25000000,50000000],[75000000,100000000]]), 4, 'Test 87');
test(intersectionSizeTwo([[1, 50], [2, 49], [3, 48], [4, 47], [5, 46], [6, 45], [7, 44], [8, 43], [9, 42], [10, 41], [11, 40], [12, 39], [13, 38], [14, 37], [15, 36], [16, 35], [17, 34], [18, 33], [19, 32], [20, 31], [21, 30], [22, 29], [23, 28], [24, 27], [25, 26]]), 2, 'Test 88');
test(intersectionSizeTwo([[1,3],[2,5],[3,7],[4,9],[5,11],[6,13],[7,15],[8,17],[9,19],[10,21]]), 6, 'Test 89');
test(intersectionSizeTwo([[1,100],[25,50],[50,75],[75,100],[100,125],[125,150]]), 6, 'Test 90');

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
