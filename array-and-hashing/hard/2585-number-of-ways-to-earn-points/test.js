// Test: 2585. Number Of Ways To Earn Points
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { waysToReachTarget } = require("./solution");

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

console.log("\n2585. Number Of Ways To Earn Points\n");

test(waysToReachTarget(10, [[2,5],[1,3]]), 1, 'Test 1');
test(waysToReachTarget(1, [[1,1]]), 1, 'Test 2');
test(waysToReachTarget(30, [[5,10],[3,5],[2,15]]), 5, 'Test 3');
test(waysToReachTarget(750, [[50,15],[50,25],[50,35]]), 119, 'Test 4');
test(waysToReachTarget(20, [[2,5],[3,10],[4,20]]), 3, 'Test 5');
test(waysToReachTarget(10, [[1,1],[1,2],[1,3],[1,4],[1,5]]), 3, 'Test 6');
test(waysToReachTarget(5, [[50,1],[50,2],[50,5]]), 4, 'Test 7');
test(waysToReachTarget(10, [[10,1],[5,2]]), 6, 'Test 8');
test(waysToReachTarget(100, [[10,5],[10,10],[10,15],[10,20]]), 90, 'Test 9');
test(waysToReachTarget(20, [[2,5],[2,10],[3,15]]), 3, 'Test 10');
test(waysToReachTarget(6, [[6,1],[3,2],[2,3]]), 7, 'Test 11');
test(waysToReachTarget(10, [[10,1],[5,2],[3,3]]), 14, 'Test 12');
test(waysToReachTarget(20, [[1,10],[2,5],[3,2]]), 1, 'Test 13');
test(waysToReachTarget(1000, [[100,10],[100,20],[100,30],[100,40]]), 8037, 'Test 14');
test(waysToReachTarget(20, [[1,1],[1,2],[1,3],[1,4],[1,5]]), 0, 'Test 15');
test(waysToReachTarget(18, [[6,1],[3,2],[2,3]]), 1, 'Test 16');
test(waysToReachTarget(20, [[5,10],[3,5],[2,2]]), 2, 'Test 17');
test(waysToReachTarget(500, [[20,10],[30,20],[40,30],[10,50]]), 721, 'Test 18');
test(waysToReachTarget(500, [[20,10],[20,15],[20,20],[20,25],[20,30]]), 6939, 'Test 19');
test(waysToReachTarget(450, [[50,3],[50,6],[50,9],[50,12],[50,15]]), 165604, 'Test 20');
test(waysToReachTarget(400, [[20, 5], [20, 10], [20, 15], [20, 20], [20, 25]]), 12066, 'Test 21');
test(waysToReachTarget(650, [[40,10],[30,15],[20,20],[10,25],[5,30],[2,35],[1,40]]), 56729, 'Test 22');
test(waysToReachTarget(700, [[25, 5], [30, 10], [35, 15], [40, 20], [45, 25], [50, 30], [55, 35], [60, 40], [65, 45], [70, 50], [75, 55]]), 124162326, 'Test 23');
test(waysToReachTarget(800, [[15,5],[25,10],[35,15],[45,20],[55,25]]), 59531, 'Test 24');
test(waysToReachTarget(600, [[50,50],[50,100],[50,150],[50,200]]), 34, 'Test 25');
test(waysToReachTarget(999, [[49,1],[49,2],[49,3],[49,4],[49,5]]), 0, 'Test 26');
test(waysToReachTarget(650, [[30,20],[30,21],[30,22],[30,23],[30,24]]), 2012, 'Test 27');
test(waysToReachTarget(700, [[25,28],[25,29],[25,30],[25,31],[25,32]]), 624, 'Test 28');
test(waysToReachTarget(200, [[10,10],[20,20],[30,30],[40,40]]), 90, 'Test 29');
test(waysToReachTarget(300, [[30,10],[20,20],[40,30],[10,40],[30,50]]), 674, 'Test 30');
test(waysToReachTarget(300, [[50,10],[30,15],[20,20],[10,25],[5,30],[2,35]]), 2734, 'Test 31');
test(waysToReachTarget(600, [[10, 5], [20, 10], [30, 15], [40, 20], [50, 25], [60, 30]]), 124635, 'Test 32');
test(waysToReachTarget(600, [[10,1],[20,2],[30,3],[40,4],[50,5]]), 0, 'Test 33');
test(waysToReachTarget(250, [[50,1],[50,2],[50,3],[50,4],[50,5]]), 692188, 'Test 34');
test(waysToReachTarget(550, [[25,10],[25,20],[25,30],[25,40],[25,50]]), 4654, 'Test 35');
test(waysToReachTarget(250, [[15, 5], [15, 10], [15, 15], [15, 20], [15, 25], [15, 30], [15, 35], [15, 40], [15, 45], [15, 50], [15, 55], [15, 60], [15, 65], [15, 70], [15, 75]]), 129491, 'Test 36');
test(waysToReachTarget(950, [[100,9],[100,18],[100,27],[100,36],[100,45]]), 0, 'Test 37');
test(waysToReachTarget(450, [[30, 5], [30, 10], [30, 15], [30, 20], [30, 25], [30, 30], [30, 35], [30, 40], [30, 45], [30, 50], [30, 55], [30, 60]]), 6856397, 'Test 38');
test(waysToReachTarget(650, [[50,10],[60,20],[70,30],[80,40],[90,50],[100,60],[110,70]]), 65012, 'Test 39');
test(waysToReachTarget(800, [[10,80],[20,40],[30,20],[40,10],[50,5]]), 26045, 'Test 40');
test(waysToReachTarget(600, [[50,1],[50,2],[50,4],[50,8]]), 6711, 'Test 41');
test(waysToReachTarget(350, [[25,5],[25,15],[25,25],[25,35]]), 530, 'Test 42');
test(waysToReachTarget(550, [[15,10],[15,20],[15,30],[15,40],[15,50],[15,60],[15,70]]), 22303, 'Test 43');
test(waysToReachTarget(900, [[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10]]), 0, 'Test 44');
test(waysToReachTarget(700, [[40,10],[30,20],[20,30],[10,40]]), 2426, 'Test 45');
test(waysToReachTarget(800, [[15,20],[25,30],[10,40],[20,50]]), 574, 'Test 46');
test(waysToReachTarget(600, [[25,10],[25,20],[25,30],[25,40],[25,50],[25,60]]), 17893, 'Test 47');
test(waysToReachTarget(300, [[20, 10], [30, 15], [40, 25], [50, 30]]), 276, 'Test 48');
test(waysToReachTarget(500, [[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90]]), 34142, 'Test 49');
test(waysToReachTarget(350, [[15,7],[15,14],[15,21],[15,28],[15,35]]), 2610, 'Test 50');
test(waysToReachTarget(800, [[50,5],[50,10],[50,15],[50,20]]), 19178, 'Test 51');
test(waysToReachTarget(250, [[25,5],[25,10],[25,15],[25,20],[25,25]]), 3432, 'Test 52');
test(waysToReachTarget(700, [[50,10],[50,20],[50,30],[50,40],[50,50]]), 12306, 'Test 53');
test(waysToReachTarget(450, [[50,5],[50,15],[50,25],[50,35],[50,45],[50,55]]), 11092, 'Test 54');
test(waysToReachTarget(1000, [[20,50],[15,60],[10,70],[5,80],[10,90]]), 451, 'Test 55');
test(waysToReachTarget(650, [[50, 10], [40, 20], [30, 30], [20, 40], [10, 50], [5, 60], [3, 70], [2, 80], [1, 90]]), 157298, 'Test 56');
test(waysToReachTarget(700, [[25, 5], [25, 10], [25, 15], [25, 20], [25, 25], [25, 30], [25, 35], [25, 40], [25, 45], [25, 50]]), 56776700, 'Test 57');
test(waysToReachTarget(999, [[30,5],[20,10],[40,20],[30,25]]), 0, 'Test 58');
test(waysToReachTarget(400, [[20,25],[30,50],[25,75],[40,100],[30,125]]), 101, 'Test 59');
test(waysToReachTarget(500, [[15,5],[25,10],[35,15],[45,20]]), 2461, 'Test 60');
test(waysToReachTarget(700, [[50,1],[50,3],[50,7],[50,11],[50,13],[50,17],[50,19]]), 53354051, 'Test 61');
test(waysToReachTarget(400, [[25,4],[25,8],[25,12],[25,16],[25,20]]), 27739, 'Test 62');
test(waysToReachTarget(550, [[45,15],[55,25],[65,35],[75,45],[85,55],[95,65]]), 2608, 'Test 63');
test(waysToReachTarget(1000, [[50,1],[50,3],[50,7],[50,11],[50,13]]), 433268, 'Test 64');
test(waysToReachTarget(250, [[20,1],[30,2],[20,3],[10,4],[10,5],[5,6]]), 35, 'Test 65');
test(waysToReachTarget(450, [[30,10],[40,20],[50,30],[60,40],[70,50],[80,60]]), 5852, 'Test 66');
test(waysToReachTarget(650, [[50,10],[50,20],[50,30],[50,40],[50,50]]), 9472, 'Test 67');
test(waysToReachTarget(800, [[40, 10], [50, 20], [60, 30], [70, 40], [80, 50]]), 18680, 'Test 68');
test(waysToReachTarget(700, [[5,50],[10,100],[15,150],[20,200],[25,250]]), 52, 'Test 69');
test(waysToReachTarget(450, [[50, 1], [50, 2], [50, 3], [50, 4], [50, 5], [50, 6], [50, 7], [50, 8], [50, 9], [50, 10]]), 909681426, 'Test 70');
test(waysToReachTarget(500, [[25,20],[25,30],[25,40],[25,50]]), 258, 'Test 71');
test(waysToReachTarget(350, [[20,10],[20,20],[20,30],[20,40],[20,50],[20,60],[20,70],[20,80]]), 4950, 'Test 72');
test(waysToReachTarget(400, [[50,20],[30,15],[20,10],[10,5]]), 1129, 'Test 73');
test(waysToReachTarget(600, [[50, 1], [50, 2], [50, 3], [50, 4], [50, 5], [50, 6], [50, 7], [50, 8], [50, 9], [50, 10]]), 209801687, 'Test 74');
test(waysToReachTarget(450, [[15,30],[20,25],[25,20],[30,15],[35,10]]), 5753, 'Test 75');
test(waysToReachTarget(500, [[30, 10], [20, 15], [10, 20], [5, 25]]), 535, 'Test 76');
test(waysToReachTarget(300, [[15,5],[15,10],[15,15],[15,20],[15,25],[15,30],[15,35],[15,40],[15,45]]), 108177, 'Test 77');
test(waysToReachTarget(200, [[20,10],[20,20],[20,30],[20,40]]), 108, 'Test 78');
test(waysToReachTarget(800, [[30,25],[40,50],[20,75]]), 101, 'Test 79');
test(waysToReachTarget(900, [[20,10],[30,20],[10,30],[20,40]]), 1725, 'Test 80');
test(waysToReachTarget(500, [[20,25],[20,30],[20,35],[20,40],[20,45]]), 520, 'Test 81');
test(waysToReachTarget(900, [[100,9],[100,10],[100,11],[100,12],[100,13]]), 199590, 'Test 82');
test(waysToReachTarget(550, [[15, 5], [25, 10], [35, 15], [45, 20], [55, 25], [65, 30], [75, 35], [85, 40], [95, 45], [105, 50]]), 8359201, 'Test 83');
test(waysToReachTarget(600, [[50,12],[50,14],[50,16],[50,18],[50,20]]), 14453, 'Test 84');
test(waysToReachTarget(999, [[50, 1], [50, 2], [50, 3], [50, 4], [50, 5], [50, 6], [50, 7], [50, 8], [50, 9], [50, 10], [50, 11], [50, 12], [50, 13], [50, 14], [50, 15]]), 805840421, 'Test 85');
test(waysToReachTarget(550, [[40,5],[40,10],[40,15],[30,20],[20,25],[10,30]]), 249864, 'Test 86');
test(waysToReachTarget(800, [[40, 10], [30, 20], [20, 30], [10, 40], [5, 50]]), 13462, 'Test 87');
test(waysToReachTarget(900, [[30, 5], [30, 15], [30, 25], [30, 35], [30, 45], [30, 55], [30, 65], [30, 75], [30, 85], [30, 95]]), 5111100, 'Test 88');
test(waysToReachTarget(800, [[60,20],[70,40],[80,60],[90,80]]), 632, 'Test 89');
test(waysToReachTarget(850, [[10,5],[20,10],[30,15],[40,20],[50,25],[60,30],[70,35],[80,40],[90,45],[100,50]]), 117144248, 'Test 90');
test(waysToReachTarget(800, [[50,1],[50,3],[50,5],[50,7],[50,9]]), 485554, 'Test 91');
test(waysToReachTarget(600, [[50,5],[50,10],[50,15],[50,20],[50,25]]), 79630, 'Test 92');
test(waysToReachTarget(700, [[30,15],[30,25],[30,35],[30,45],[30,55]]), 2386, 'Test 93');
test(waysToReachTarget(1000, [[50,1],[50,2],[50,3],[50,4],[50,5]]), 0, 'Test 94');
test(waysToReachTarget(900, [[25,30],[35,45],[45,60],[50,75]]), 414, 'Test 95');
test(waysToReachTarget(300, [[60,5],[60,6],[60,7],[60,8],[60,9]]), 27971, 'Test 96');
test(waysToReachTarget(400, [[25,1],[25,2],[25,3],[25,4],[25,5],[25,6],[25,7],[25,8]]), 683239099, 'Test 97');
test(waysToReachTarget(300, [[20,5],[30,10],[10,15]]), 116, 'Test 98');
test(waysToReachTarget(250, [[50,5],[50,10],[50,15],[50,20],[50,25]]), 3765, 'Test 99');
test(waysToReachTarget(600, [[30,10],[20,20],[10,30],[5,40]]), 858, 'Test 100');
test(waysToReachTarget(300, [[10,2],[20,3],[30,5],[40,7],[50,11]]), 18034, 'Test 101');
test(waysToReachTarget(900, [[50,1],[50,2],[50,5],[50,10]]), 1, 'Test 102');
test(waysToReachTarget(900, [[50, 15], [40, 25], [30, 35], [20, 45], [10, 55], [5, 65]]), 19430, 'Test 103');
test(waysToReachTarget(400, [[20,10],[20,20],[20,30],[20,40],[20,50]]), 1583, 'Test 104');
test(waysToReachTarget(400, [[10,1],[20,2],[30,3],[40,4],[50,5],[60,6]]), 2270071, 'Test 105');
test(waysToReachTarget(500, [[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90],[100,100]]), 48055, 'Test 106');
test(waysToReachTarget(400, [[80,5],[80,10],[80,15],[80,20],[80,25]]), 20282, 'Test 107');
test(waysToReachTarget(700, [[40,10],[50,20],[60,30],[70,40],[80,50]]), 11867, 'Test 108');
test(waysToReachTarget(300, [[10, 1], [20, 2], [30, 3], [40, 4], [50, 5], [60, 6], [70, 7]]), 19837096, 'Test 109');
test(waysToReachTarget(250, [[10,1],[20,2],[30,3],[40,4],[50,5]]), 57127, 'Test 110');
test(waysToReachTarget(800, [[40,10],[30,20],[20,30],[10,40]]), 3041, 'Test 111');
test(waysToReachTarget(950, [[5,100],[10,50],[15,33],[20,25],[25,20],[30,16],[35,14],[40,12],[45,11],[50,10]]), 240007134, 'Test 112');
test(waysToReachTarget(200, [[10,5],[10,10],[10,15],[10,20],[10,25]]), 1003, 'Test 113');
test(waysToReachTarget(600, [[50,1],[50,2],[50,3],[50,4],[50,5],[50,6],[50,7],[50,8],[50,9],[50,10]]), 209801687, 'Test 114');
test(waysToReachTarget(300, [[10,10],[20,20],[30,30],[40,40]]), 203, 'Test 115');
test(waysToReachTarget(900, [[20,5],[30,10],[40,15],[10,20],[10,25]]), 21573, 'Test 116');
test(waysToReachTarget(750, [[50,1],[50,2],[50,3],[50,4],[50,5],[50,6],[50,7],[50,8],[50,9],[50,10]]), 450083451, 'Test 117');

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
