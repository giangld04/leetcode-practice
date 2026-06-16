// Test: 1981. Minimize The Difference Between Target And Chosen Elements
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { minimizeTheDifference } = require("./solution");

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

console.log("\n1981. Minimize The Difference Between Target And Chosen Elements\n");

test(minimizeTheDifference([[1],[2],[3]], 100), 94, 'Test 1');
test(minimizeTheDifference([[5,5,5],[5,5,5],[5,5,5]], 15), 0, 'Test 2');
test(minimizeTheDifference([[1,2,3],[4,5,6],[7,8,9]], 13), 0, 'Test 3');
test(minimizeTheDifference([[7,8,9],[1,2,3],[4,5,6]], 20), 2, 'Test 4');
test(minimizeTheDifference([[1,3,5,7,9],[2,4,6,8,10],[11,13,15,17,19]], 25), 1, 'Test 5');
test(minimizeTheDifference([[10,20,30],[5,15,25],[1,10,20]], 50), 4, 'Test 6');
test(minimizeTheDifference([[7,8,9],[10,11,12],[13,14,15]], 36), 0, 'Test 7');
test(minimizeTheDifference([[70,70,70],[70,70,70],[70,70,70]], 150), 60, 'Test 8');
test(minimizeTheDifference([[1,3,5,7,9],[2,4,6,8,10],[3,6,9,12,15]], 20), 0, 'Test 9');
test(minimizeTheDifference([[70,70,70],[70,70,70],[70,70,70]], 100), 110, 'Test 10');
test(minimizeTheDifference([[10,20,30],[40,50,60],[70,80,90]], 150), 0, 'Test 11');
test(minimizeTheDifference([[1,2,9,8,7]], 6), 1, 'Test 12');
test(minimizeTheDifference([[1,1,1],[1,1,1],[1,1,1]], 5), 2, 'Test 13');
test(minimizeTheDifference([[1,2,3,4,5,6,7],[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]], 21), 0, 'Test 14');
test(minimizeTheDifference([[70, 60, 50, 40, 30], [20, 10, 0, -10, -20], [-30, -40, -50, -60, -70], [80, 90, 100, 110, 120]], 200), 20, 'Test 15');
test(minimizeTheDifference([[70,70,70,70,70],[70,70,70,70,70],[70,70,70,70,70]], 800), 590, 'Test 16');
test(minimizeTheDifference([[2,4,6,8,10],[3,6,9,12,15],[5,10,15,20,25],[7,14,21,28,35]], 100), 15, 'Test 17');
test(minimizeTheDifference([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [1, 1, 1, 1, 1]], 25), 5, 'Test 18');
test(minimizeTheDifference([[10, 20, 30, 40, 50], [5, 15, 25, 35, 45], [1, 11, 21, 31, 41], [7, 17, 27, 37, 47]], 150), 3, 'Test 19');
test(minimizeTheDifference([[5,15,25],[5,15,25],[5,15,25],[5,15,25],[5,15,25]], 50), 5, 'Test 20');
test(minimizeTheDifference([[70, 1], [70, 1], [70, 1], [70, 1], [70, 1], [70, 1], [70, 1]], 200), 14, 'Test 21');
test(minimizeTheDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]], 75), 12, 'Test 22');
test(minimizeTheDifference([[50, 60, 70], [10, 20, 30], [40, 50, 60], [70, 80, 90]], 200), 0, 'Test 23');
test(minimizeTheDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21]], 105), 21, 'Test 24');
test(minimizeTheDifference([[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21]], 50), 8, 'Test 25');
test(minimizeTheDifference([[1,10,100],[1,10,100],[1,10,100],[1,10,100],[1,10,100],[1,10,100],[1,10,100]], 700), 0, 'Test 26');
test(minimizeTheDifference([[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28]], 100), 30, 'Test 27');
test(minimizeTheDifference([[10, 20, 30, 40, 50], [5, 15, 25, 35, 45], [1, 2, 3, 4, 5]], 85), 1, 'Test 28');
test(minimizeTheDifference([[60,59,58,57,56,55,54],[53,52,51,50,49,48,47],[46,45,44,43,42,41,40],[39,38,37,36,35,34,33],[32,31,30,29,28,27,26],[25,24,23,22,21,20,19]], 420), 165, 'Test 29');
test(minimizeTheDifference([[10,20,30,40,50,60,70],[70,60,50,40,30,20,10],[1,2,3,4,5,6,7]], 200), 53, 'Test 30');
test(minimizeTheDifference([[1,1,1,1,1,1,1],[2,2,2,2,2,2,2],[3,3,3,3,3,3,3],[4,4,4,4,4,4,4],[5,5,5,5,5,5,5]], 50), 35, 'Test 31');
test(minimizeTheDifference([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [11, 13, 15, 17, 19], [20, 22, 24, 26, 28]], 50), 0, 'Test 32');
test(minimizeTheDifference([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]], 50), 1, 'Test 33');
test(minimizeTheDifference([[5, 10, 15], [20, 25, 30], [35, 40, 45], [50, 55, 60]], 120), 0, 'Test 34');
test(minimizeTheDifference([[1, 2, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6, 7, 8], [3, 4, 5, 6, 7, 8, 9], [4, 5, 6, 7, 8, 9, 10]], 50), 16, 'Test 35');
test(minimizeTheDifference([[50, 50, 50, 50, 50, 50, 50], [50, 50, 50, 50, 50, 50, 50], [50, 50, 50, 50, 50, 50, 50], [50, 50, 50, 50, 50, 50, 50], [50, 50, 50, 50, 50, 50, 50], [50, 50, 50, 50, 50, 50, 50], [50, 50, 50, 50, 50, 50, 50]], 400), 50, 'Test 36');
test(minimizeTheDifference([[1, 70], [2, 69], [3, 68], [4, 67], [5, 66], [6, 65], [7, 64], [8, 63], [9, 62], [10, 61]], 400), 1, 'Test 37');
test(minimizeTheDifference([[5,10,15,20,25,30,35,40,45,50],[1,6,11,16,21,26,31,36,41,46],[2,7,12,17,22,27,32,37,42,47],[3,8,13,18,23,28,33,38,43,48]], 150), 1, 'Test 38');
test(minimizeTheDifference([[1,1,1,1,1,1,1],[2,2,2,2,2,2,2],[3,3,3,3,3,3,3],[4,4,4,4,4,4,4],[5,5,5,5,5,5,5],[6,6,6,6,6,6,6],[7,7,7,7,7,7,7]], 28), 0, 'Test 39');
test(minimizeTheDifference([[1, 50, 100], [2, 51, 101], [3, 52, 102], [4, 53, 103], [5, 54, 104]], 260), 0, 'Test 40');
test(minimizeTheDifference([[70,69,68,67,66,65,64],[63,62,61,60,59,58,57],[56,55,54,53,52,51,50],[49,48,47,46,45,44,43]], 260), 22, 'Test 41');
test(minimizeTheDifference([[10,20,30,40,50,60,70],[11,21,31,41,51,61,71],[12,22,32,42,52,62,72],[13,23,33,43,53,63,73],[14,24,34,44,54,64,74],[15,25,35,45,55,65,75]], 300), 5, 'Test 42');
test(minimizeTheDifference([[1,10,100],[10,100,1000],[100,1000,10000]], 1234), 34, 'Test 43');
test(minimizeTheDifference([[10, 20, 30], [40, 50, 60], [70, 80, 90], [100, 110, 120], [130, 140, 150], [160, 170, 180], [190, 200, 210]], 700), 0, 'Test 44');
test(minimizeTheDifference([[70, 69, 68], [67, 66, 65], [64, 63, 62], [61, 60, 59], [58, 57, 56]], 250), 60, 'Test 45');
test(minimizeTheDifference([[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28]], 100), 30, 'Test 46');
test(minimizeTheDifference([[50,49,48,47,46,45,44],[43,42,41,40,39,38,37],[36,35,34,33,32,31,30]], 130), 1, 'Test 47');
test(minimizeTheDifference([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], 10), 6, 'Test 48');
test(minimizeTheDifference([[3,10,7],[8,6,4],[15,12,9],[18,16,13]], 50), 1, 'Test 49');
test(minimizeTheDifference([[60, 70, 80, 90, 100], [1, 2, 3, 4, 5], [10, 20, 30, 40, 50], [5, 15, 25, 35, 45], [100, 90, 80, 70, 60]], 300), 0, 'Test 50');
test(minimizeTheDifference([[7, 8, 9], [1, 2, 3], [4, 5, 6], [10, 11, 12]], 25), 0, 'Test 51');
test(minimizeTheDifference([[7,21,42,58],[9,23,46,62],[11,25,49,65],[13,27,51,67],[15,29,53,69]], 200), 0, 'Test 52');
test(minimizeTheDifference([[70, 60, 50, 40], [30, 20, 10, 0], [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], 150), 26, 'Test 53');
test(minimizeTheDifference([[70, 60, 50, 40, 30], [20, 30, 40, 50, 60], [10, 20, 30, 40, 50]], 200), 20, 'Test 54');
test(minimizeTheDifference([[7, 17, 27, 37, 47], [8, 18, 28, 38, 48], [9, 19, 29, 39, 49], [10, 20, 30, 40, 50], [11, 21, 31, 41, 51]], 150), 5, 'Test 55');
test(minimizeTheDifference([[70,69,68,67],[66,65,64,63],[62,61,60,59],[58,57,56,55]], 260), 4, 'Test 56');
test(minimizeTheDifference([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]], 80), 30, 'Test 57');
test(minimizeTheDifference([[7, 8, 9], [4, 5, 6], [1, 2, 3], [7, 8, 9], [4, 5, 6], [1, 2, 3]], 30), 0, 'Test 58');
test(minimizeTheDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]], 50), 5, 'Test 59');
test(minimizeTheDifference([[70, 60, 50, 40, 30], [10, 20, 30, 40, 50], [60, 50, 40, 30, 20], [1, 2, 3, 4, 5]], 180), 1, 'Test 60');
test(minimizeTheDifference([[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30]], 60), 0, 'Test 61');
test(minimizeTheDifference([[1,3,5,7,9,11,13],[2,4,6,8,10,12,14],[15,17,19,21,23,25,27]], 50), 0, 'Test 62');
test(minimizeTheDifference([[10,20,30],[11,21,31],[12,22,32],[13,23,33],[14,24,34]], 120), 0, 'Test 63');
test(minimizeTheDifference([[5,5,5,5,5,5,5],[5,5,5,5,5,5,5],[5,5,5,5,5,5,5],[5,5,5,5,5,5,5]], 10), 10, 'Test 64');
test(minimizeTheDifference([[1, 3, 5, 7], [2, 4, 6, 8], [9, 11, 13, 15], [17, 19, 21, 23]], 30), 1, 'Test 65');
test(minimizeTheDifference([[1, 70], [1, 70], [1, 70], [1, 70], [1, 70], [1, 70], [1, 70]], 300), 17, 'Test 66');
test(minimizeTheDifference([[10, 20, 30], [15, 25, 35], [20, 30, 40], [25, 35, 45]], 120), 0, 'Test 67');
test(minimizeTheDifference([[10, 20, 30], [40, 50, 60], [70, 80, 90], [100, 110, 120], [130, 140, 150], [160, 170, 180]], 600), 0, 'Test 68');
test(minimizeTheDifference([[1,3,5,7,9],[2,4,6,8,10],[3,6,9,12,15]], 100), 66, 'Test 69');
test(minimizeTheDifference([[1,1,1,1,1,1,1],[2,2,2,2,2,2,2],[3,3,3,3,3,3,3],[4,4,4,4,4,4,4]], 20), 10, 'Test 70');
test(minimizeTheDifference([[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31, 32, 33, 34, 35]], 150), 45, 'Test 71');
test(minimizeTheDifference([[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]], 1), 5, 'Test 72');
test(minimizeTheDifference([[5, 10, 15], [10, 20, 30], [15, 25, 35], [20, 30, 40], [25, 35, 45]], 100), 0, 'Test 73');
test(minimizeTheDifference([[10, 20, 30, 40, 50], [5, 15, 25, 35, 45], [1, 11, 21, 31, 41]], 120), 4, 'Test 74');
test(minimizeTheDifference([[70,70,70],[70,70,70],[70,70,70],[70,70,70],[70,70,70],[70,70,70],[70,70,70]], 800), 310, 'Test 75');
test(minimizeTheDifference([[5,15,25],[10,20,30],[15,25,35],[20,30,40]], 100), 0, 'Test 76');
test(minimizeTheDifference([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14]], 50), 0, 'Test 77');
test(minimizeTheDifference([[1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2], [3, 3, 3, 3, 3, 3, 3], [4, 4, 4, 4, 4, 4, 4], [5, 5, 5, 5, 5, 5, 5]], 100), 85, 'Test 78');
test(minimizeTheDifference([[1,100,200],[2,150,250],[3,200,300],[4,250,350]], 800), 0, 'Test 79');
test(minimizeTheDifference([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [11, 13, 15, 17, 19]], 50), 12, 'Test 80');
test(minimizeTheDifference([[5, 15, 25, 35], [10, 20, 30, 40], [15, 25, 35, 45], [20, 30, 40, 50], [25, 35, 45, 55]], 200), 5, 'Test 81');
test(minimizeTheDifference([[5, 10, 15, 20, 25], [30, 35, 40, 45, 50], [55, 60, 65, 70, 75]], 120), 0, 'Test 82');
test(minimizeTheDifference([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [11, 13, 15, 17, 19]], 30), 0, 'Test 83');
test(minimizeTheDifference([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], 10), 3, 'Test 84');
test(minimizeTheDifference([[1, 50, 100, 150, 200], [2, 51, 101, 151, 201], [3, 52, 102, 152, 202], [4, 53, 103, 153, 203], [5, 54, 104, 154, 204]], 500), 10, 'Test 85');
test(minimizeTheDifference([[70, 60, 50, 40, 30, 20, 10], [65, 55, 45, 35, 25, 15, 5], [1, 2, 3, 4, 5, 6, 7]], 200), 58, 'Test 86');
test(minimizeTheDifference([[1,3,5,7,9],[2,4,6,8,10],[3,6,9,12,15],[4,8,12,16,20]], 40), 0, 'Test 87');
test(minimizeTheDifference([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]], 30), 4, 'Test 88');
test(minimizeTheDifference([[1,5,9,14],[3,7,10,17],[4,8,12,19],[6,11,15,20]], 45), 0, 'Test 89');
test(minimizeTheDifference([[7,14,21,28],[35,42,49,56],[63,70,77,84]], 210), 42, 'Test 90');
test(minimizeTheDifference([[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21]], 50), 8, 'Test 91');
test(minimizeTheDifference([[1,2,3,4,5,6,7,8,9,10],[2,3,4,5,6,7,8,9,10,11],[3,4,5,6,7,8,9,10,11,12]], 55), 22, 'Test 92');
test(minimizeTheDifference([[1, 100, 200], [1, 100, 200], [1, 100, 200], [1, 100, 200], [1, 100, 200]], 500), 0, 'Test 93');
test(minimizeTheDifference([[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4], [5, 5, 5, 5, 5]], 15), 0, 'Test 94');
test(minimizeTheDifference([[7, 14, 21, 28, 35], [42, 49, 56, 63, 70], [77, 84, 91, 98, 105]], 250), 40, 'Test 95');
test(minimizeTheDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24], [25, 26, 27], [28, 29, 30]], 150), 0, 'Test 96');
test(minimizeTheDifference([[1,3,5,7,9],[2,4,6,8,10],[3,5,7,9,11],[4,6,8,10,12],[5,7,9,11,13]], 30), 1, 'Test 97');
test(minimizeTheDifference([[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31, 32, 33, 34, 35], [36, 37, 38, 39, 40, 41, 42]], 200), 53, 'Test 98');
test(minimizeTheDifference([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14]], 49), 0, 'Test 99');
test(minimizeTheDifference([[7,8,9],[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9]], 50), 5, 'Test 100');
test(minimizeTheDifference([[7, 8, 9], [1, 2, 3], [4, 5, 6], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21]], 80), 0, 'Test 101');
test(minimizeTheDifference([[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4]], 25), 15, 'Test 102');
test(minimizeTheDifference([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18],[19,20,21]], 100), 16, 'Test 103');
test(minimizeTheDifference([[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]], 7), 0, 'Test 104');

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
