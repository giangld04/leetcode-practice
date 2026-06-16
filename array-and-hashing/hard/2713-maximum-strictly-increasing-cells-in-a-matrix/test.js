// Test: 2713. Maximum Strictly Increasing Cells In A Matrix
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { maxIncreasingCells } = require("./solution");

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

console.log("\n2713. Maximum Strictly Increasing Cells In A Matrix\n");

test(maxIncreasingCells([[10,20,30],[15,25,35],[20,30,40]]), 5, 'Test 1');
test(maxIncreasingCells([[1]]), 1, 'Test 2');
test(maxIncreasingCells([[-100000,100000],[-100000,100000]]), 2, 'Test 3');
test(maxIncreasingCells([[1,1,1,1],[1,1,1,1],[1,1,1,1]]), 1, 'Test 4');
test(maxIncreasingCells([[10,9,8,7,6],[5,4,3,2,1],[6,7,8,9,10]]), 10, 'Test 5');
test(maxIncreasingCells([[3,1],[3,4]]), 2, 'Test 6');
test(maxIncreasingCells([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), 6, 'Test 7');
test(maxIncreasingCells([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9]]), 6, 'Test 8');
test(maxIncreasingCells([[9,8,7],[6,5,4],[3,2,1]]), 5, 'Test 9');
test(maxIncreasingCells([[10,9,8,7],[6,5,4,3],[2,1,0,-1]]), 6, 'Test 10');
test(maxIncreasingCells([[1,2,3],[4,5,6],[7,8,9]]), 5, 'Test 11');
test(maxIncreasingCells([[-1,-2,-3],[-2,-3,-4],[-3,-4,-5]]), 5, 'Test 12');
test(maxIncreasingCells([[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]]), 5, 'Test 13');
test(maxIncreasingCells([[1,2,3,4],[2,3,4,5],[3,4,5,6]]), 6, 'Test 14');
test(maxIncreasingCells([[1,1],[1,1]]), 1, 'Test 15');
test(maxIncreasingCells([[1,3,5],[2,4,6],[3,5,7]]), 5, 'Test 16');
test(maxIncreasingCells([[10,9,8],[7,6,5],[4,3,2],[1,1,1]]), 6, 'Test 17');
test(maxIncreasingCells([[3,1,6],[-9,5,7]]), 4, 'Test 18');
test(maxIncreasingCells([[1,2,3],[3,4,5],[5,6,7],[7,8,9]]), 6, 'Test 19');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29],[29,27,25,23,21,19,17,15,13,11,9,7,5,3,1],[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]]), 21, 'Test 20');
test(maxIncreasingCells([[-1,-2,-3,-4,-5],[-6,-7,-8,-9,-10],[-11,-12,-13,-14,-15],[-16,-17,-18,-19,-20]]), 8, 'Test 21');
test(maxIncreasingCells([[1,10,3,4,5],[10,1,8,7,6],[3,8,1,14,15],[18,7,14,1,16]]), 10, 'Test 22');
test(maxIncreasingCells([[10, 20, 30], [30, 20, 10], [10, 20, 30], [30, 20, 10], [10, 20, 30]]), 3, 'Test 23');
test(maxIncreasingCells([[-5, -4, -3, -2, -1], [-4, -3, -2, -1, 0], [-3, -2, -1, 0, 1], [-2, -1, 0, 1, 2], [-1, 0, 1, 2, 3]]), 9, 'Test 24');
test(maxIncreasingCells([[1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1], [9, 10, 11, 12, 13, 14, 15, 16], [16, 15, 14, 13, 12, 11, 10, 9]]), 16, 'Test 25');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[1,3,5,7,9,11,13,15,17,19],[19,17,15,13,11,9,7,5,3,1]]), 12, 'Test 26');
test(maxIncreasingCells([[1,3,5,7,9,11,13,15,17,19],[2,4,6,8,10,12,14,16,18,20],[19,18,17,16,15,14,13,12,11,10],[20,19,18,17,16,15,14,13,12,11]]), 14, 'Test 27');
test(maxIncreasingCells([[-5,-4,-3,-2,-1],[0,1,2,3,4],[5,6,7,8,9]]), 7, 'Test 28');
test(maxIncreasingCells([[-1,-2,-3,-4],[-4,-3,-2,-1],[-5,-6,-7,-8],[-8,-7,-6,-5]]), 8, 'Test 29');
test(maxIncreasingCells([[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]]), 1, 'Test 30');
test(maxIncreasingCells([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]), 1, 'Test 31');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30],[31,32,33,34,35,36,37,38,39,40]]), 13, 'Test 32');
test(maxIncreasingCells([[100, 200, 300], [150, 250, 350], [200, 300, 400]]), 5, 'Test 33');
test(maxIncreasingCells([[100, 99, 98, 97, 96], [95, 94, 93, 92, 91], [90, 89, 88, 87, 86], [85, 84, 83, 82, 81], [80, 79, 78, 77, 76]]), 9, 'Test 34');
test(maxIncreasingCells([[100,200,300],[150,250,350],[200,300,400]]), 5, 'Test 35');
test(maxIncreasingCells([[1,10,1,10,1,10],[10,1,10,1,10,1],[1,10,1,10,1,10],[10,1,10,1,10,1],[1,10,1,10,1,10]]), 2, 'Test 36');
test(maxIncreasingCells([[1,2,1,2,1],[2,1,2,1,2],[1,2,1,2,1],[2,1,2,1,2],[1,2,1,2,1]]), 2, 'Test 37');
test(maxIncreasingCells([[-10, -9, -8, -7], [-6, -5, -4, -3], [-2, -1, 0, 1], [2, 3, 4, 5]]), 7, 'Test 38');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30]]), 12, 'Test 39');
test(maxIncreasingCells([[1,1,1,1],[1,2,3,1],[1,3,1,1],[1,1,1,1]]), 3, 'Test 40');
test(maxIncreasingCells([[-1,0,1,2],[3,4,5,6],[7,8,9,10],[11,12,13,14]]), 7, 'Test 41');
test(maxIncreasingCells([[1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8], [5, 6, 7, 8, 9]]), 9, 'Test 42');
test(maxIncreasingCells([[5,3,1,4],[6,2,8,7],[9,11,13,12],[10,15,14,16]]), 12, 'Test 43');
test(maxIncreasingCells([[1,10,3,11,5],[12,6,7,8,9],[13,14,15,16,17],[18,19,20,21,22]]), 12, 'Test 44');
test(maxIncreasingCells([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]]), 7, 'Test 45');
test(maxIncreasingCells([[10,10,10,10],[10,10,10,10],[10,10,10,10],[10,10,10,10]]), 1, 'Test 46');
test(maxIncreasingCells([[5, 3, 8, 2, 9], [1, 6, 4, 7, 3], [9, 1, 8, 2, 5], [2, 7, 3, 8, 4], [8, 2, 9, 4, 1]]), 7, 'Test 47');
test(maxIncreasingCells([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [1, 1, 1, 1, 1]]), 8, 'Test 48');
test(maxIncreasingCells([[1,2,3,4,5],[1,3,5,7,9],[2,4,6,8,10],[10,8,6,4,2],[9,7,5,3,1]]), 7, 'Test 49');
test(maxIncreasingCells([[-10,-20,-30],[-20,-30,-40],[-30,-40,-50]]), 5, 'Test 50');
test(maxIncreasingCells([[1,3,2,4,5],[6,5,4,3,2],[7,8,9,10,11],[12,13,14,15,16]]), 11, 'Test 51');
test(maxIncreasingCells([[1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], [1, 3, 5, 7, 9, 11], [11, 9, 7, 5, 3, 1], [2, 4, 6, 8, 10, 12]]), 9, 'Test 52');
test(maxIncreasingCells([[5,5,5,5,5],[5,1,5,1,5],[5,1,10,1,5],[5,1,5,1,5],[5,5,5,5,5]]), 3, 'Test 53');
test(maxIncreasingCells([[1, 3, 2, 4, 5], [6, 8, 7, 9, 10], [11, 13, 12, 15, 14], [19, 18, 17, 20, 21], [22, 23, 24, 25, 26]]), 12, 'Test 54');
test(maxIncreasingCells([[1,2,3],[2,3,4],[3,4,5],[4,5,6],[5,6,7]]), 7, 'Test 55');
test(maxIncreasingCells([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]), 5, 'Test 56');
test(maxIncreasingCells([[1,1,1,1,1],[1,2,2,2,1],[1,2,3,2,1],[1,2,2,2,1],[1,1,1,1,1]]), 3, 'Test 57');
test(maxIncreasingCells([[5,5,5,5,5],[5,1,2,3,5],[5,4,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]), 4, 'Test 58');
test(maxIncreasingCells([[5,4,3,2,1],[1,2,3,4,5],[5,4,3,2,1],[1,2,3,4,5],[5,4,3,2,1]]), 5, 'Test 59');
test(maxIncreasingCells([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]), 10, 'Test 60');
test(maxIncreasingCells([[3,1,4,1,5],[9,2,6,5,3],[5,8,9,7,9],[3,2,3,8,4]]), 7, 'Test 61');
test(maxIncreasingCells([[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3]]), 3, 'Test 62');
test(maxIncreasingCells([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,100]]), 2, 'Test 63');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]]), 17, 'Test 64');
test(maxIncreasingCells([[1, 1, 1, 1], [1, 2, 2, 1], [1, 2, 3, 1], [1, 1, 1, 1]]), 3, 'Test 65');
test(maxIncreasingCells([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,3,5,7,9,11],[12,10,8,6,4,2]]), 8, 'Test 66');
test(maxIncreasingCells([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]), 3, 'Test 67');
test(maxIncreasingCells([[-1,-2,-3,-4],[-5,-6,-7,-8],[-9,-10,-11,-12],[-13,-14,-15,-16]]), 7, 'Test 68');
test(maxIncreasingCells([[3,1,4,1,5,9],[2,6,5,3,5,9],[5,8,9,7,9,3],[2,8,0,3,1,4]]), 9, 'Test 69');
test(maxIncreasingCells([[10,15,20],[25,30,35],[40,45,50],[55,60,65],[70,75,80]]), 7, 'Test 70');
test(maxIncreasingCells([[1,100,2,99,3,98,4,97,5,96],[6,95,7,94,8,93,9,92,10,91]]), 12, 'Test 71');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[2,3,4,5,6,7,8,9,10,11],[3,4,5,6,7,8,9,10,11,12]]), 12, 'Test 72');
test(maxIncreasingCells([[1, 100, 1], [100, 1, 100], [1, 100, 1]]), 2, 'Test 73');
test(maxIncreasingCells([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [3, 5, 7, 9, 11], [4, 6, 8, 10, 12], [5, 7, 9, 11, 13]]), 9, 'Test 74');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[1,3,5,7,9,2,4,6,8,10]]), 10, 'Test 75');
test(maxIncreasingCells([[1,1,1,1,1,1,1,1,1,1],[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[1,3,5,7,9,11,13,15,17,19],[19,17,15,13,11,9,7,5,3,1],[2,4,6,8,10,12,14,16,18,20],[1,1,1,1,1,1,1,1,1,1]]), 14, 'Test 76');
test(maxIncreasingCells([[5,2,3,4,1],[1,2,6,7,8],[3,4,5,6,9],[9,8,7,6,5]]), 8, 'Test 77');
test(maxIncreasingCells([[-10, -20, -30], [-30, -20, -10], [-10, -30, -20]]), 3, 'Test 78');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[1,3,5,7,9,2,4,6,8,10],[10,8,6,4,2,9,7,5,3,1]]), 10, 'Test 79');
test(maxIncreasingCells([[-10,-20,-30,-40],[-40,-30,-20,-10],[-50,-60,-70,-80],[-80,-70,-60,-50]]), 8, 'Test 80');
test(maxIncreasingCells([[1, 5, 3, 6, 2], [9, 8, 7, 10, 11], [4, 13, 12, 15, 14], [19, 18, 17, 20, 21]]), 12, 'Test 81');
test(maxIncreasingCells([[-1, -2, -3, -4], [-5, -6, -7, -8], [-9, -10, -11, -12], [-13, -14, -15, -16]]), 7, 'Test 82');
test(maxIncreasingCells([[1, 1, 1, 1, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]), 5, 'Test 83');
test(maxIncreasingCells([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9],[9,7,5,3,1]]), 6, 'Test 84');
test(maxIncreasingCells([[5, 3, 1, 2], [4, 6, 2, 3], [7, 5, 3, 4], [8, 6, 4, 5]]), 7, 'Test 85');
test(maxIncreasingCells([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]), 5, 'Test 86');
test(maxIncreasingCells([[10, 20, 30, 40], [15, 25, 35, 45], [20, 30, 40, 50], [25, 35, 45, 55]]), 7, 'Test 87');
test(maxIncreasingCells([[5,5,5,5],[5,5,5,5],[5,5,5,5]]), 1, 'Test 88');
test(maxIncreasingCells([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9],[9,7,5,3,1],[2,4,6,8,10]]), 7, 'Test 89');
test(maxIncreasingCells([[1,2,3,4,5],[10,9,8,7,6],[11,12,13,14,15],[20,19,18,17,16]]), 20, 'Test 90');
test(maxIncreasingCells([[1,2,3],[2,3,4],[3,4,5],[4,5,6]]), 6, 'Test 91');
test(maxIncreasingCells([[-10, -20, -30, -40], [-35, -25, -15, -5], [-50, -45, -40, -35], [-60, -55, -50, -45]]), 8, 'Test 92');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[20,19,18,17,16,15,14,13,12,11],[30,29,28,27,26,25,24,23,22,21]]), 21, 'Test 93');
test(maxIncreasingCells([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]), 8, 'Test 94');
test(maxIncreasingCells([[1, 2, 3, 4, 5], [10, 9, 8, 7, 6], [11, 12, 13, 14, 15], [20, 19, 18, 17, 16], [21, 22, 23, 24, 25]]), 25, 'Test 95');
test(maxIncreasingCells([[1,2,3,4,5],[5,4,3,2,1],[1,2,3,4,5],[5,4,3,2,1]]), 5, 'Test 96');
test(maxIncreasingCells([[1, 1000, 2, 999], [3, 998, 4, 997], [5, 996, 6, 995], [7, 994, 8, 993]]), 10, 'Test 97');
test(maxIncreasingCells([[5,3,9,1],[1,7,6,8],[2,9,5,1],[8,5,4,6]]), 6, 'Test 98');
test(maxIncreasingCells([[1, 2, 3, 4, 5], [10, 9, 8, 7, 6], [11, 12, 13, 14, 15], [20, 19, 18, 17, 16], [21, 22, 23, 24, 25], [26, 27, 28, 29, 30]]), 26, 'Test 99');
test(maxIncreasingCells([[9,8,7,6,5,4,3,2,1,0],[-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]]), 11, 'Test 100');
test(maxIncreasingCells([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[1,3,5,7,9,11,13,15,17,19],[19,17,15,13,11,9,7,5,3,1],[2,4,6,8,10,12,14,16,18,20]]), 14, 'Test 101');
test(maxIncreasingCells([[1, 2, 3, 4], [4, 3, 2, 1], [1, 2, 3, 4], [4, 3, 2, 1]]), 4, 'Test 102');
test(maxIncreasingCells([[1, 2, 1, 2, 1], [2, 1, 2, 1, 2], [1, 2, 1, 2, 1], [2, 1, 2, 1, 2], [1, 2, 1, 2, 1]]), 2, 'Test 103');
test(maxIncreasingCells([[-1,-2,-3],[-3,-2,-1],[1,0,-1],[-2,-3,-4]]), 5, 'Test 104');
test(maxIncreasingCells([[100,-100,200,-200,300],[-300,300,-400,400,-500],[500,-500,600,-600,700]]), 7, 'Test 105');
test(maxIncreasingCells([[100,-100,200,-200,300],[-100,200,-200,300,-300],[200,-200,300,-300,400],[0,0,0,0,0]]), 8, 'Test 106');

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
