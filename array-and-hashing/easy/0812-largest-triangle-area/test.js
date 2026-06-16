// Test: 812. Largest Triangle Area
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { largestTriangleArea } = require("./solution");

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

console.log("\n812. Largest Triangle Area\n");

test(largestTriangleArea([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 0, 'Test 1');
test(largestTriangleArea([[-1,-1],[1,1],[0,0]]), 0, 'Test 2');
test(largestTriangleArea([[-1,-1],[-2,-3],[-3,-1]]), 2.0, 'Test 3');
test(largestTriangleArea([[-50,-50],[50,50],[-50,50],[50,-50],[0,0]]), 5000.0, 'Test 4');
test(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]), 2.0, 'Test 5');
test(largestTriangleArea([[-50,-50],[-50,50],[50,-50],[50,50],[0,0]]), 5000.0, 'Test 6');
test(largestTriangleArea([[-50,-50],[50,50],[0,0]]), 0, 'Test 7');
test(largestTriangleArea([[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90]]), 0, 'Test 8');
test(largestTriangleArea([[10,10],[10,20],[20,10],[20,20],[15,15]]), 50.0, 'Test 9');
test(largestTriangleArea([[1,1],[2,3],[3,1]]), 2.0, 'Test 10');
test(largestTriangleArea([[-1,0],[0,-1],[1,0],[0,1],[0,0]]), 1.0, 'Test 11');
test(largestTriangleArea([[-50,-50],[-49,-49],[-48,-48],[0,0]]), 0, 'Test 12');
test(largestTriangleArea([[-50,-50],[50,50],[0,0],[25,-25],[-25,25]]), 2500.0, 'Test 13');
test(largestTriangleArea([[0,0],[1,0],[0,1],[1,1],[0.5,0.5]]), 0.5, 'Test 14');
test(largestTriangleArea([[1,0],[0,0],[0,1]]), 0.5, 'Test 15');
test(largestTriangleArea([[0,0],[10,0],[5,5],[5,10],[10,5]]), 50.0, 'Test 16');
test(largestTriangleArea([[0,0],[1,0],[0,1],[1,1],[2,2]]), 1.5, 'Test 17');
test(largestTriangleArea([[0,0],[5,0],[0,5]]), 12.5, 'Test 18');
test(largestTriangleArea([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), 0, 'Test 19');
test(largestTriangleArea([[1,1],[2,2],[3,3],[4,4]]), 0, 'Test 20');
test(largestTriangleArea([[-1,-1],[1,1],[-1,1],[1,-1],[0,0]]), 2.0, 'Test 21');
test(largestTriangleArea([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]]), 0, 'Test 22');
test(largestTriangleArea([[0,0],[1,1],[2,2],[3,3]]), 0, 'Test 23');
test(largestTriangleArea([[10,0],[0,10],[-10,0],[0,-10],[0,0]]), 100.0, 'Test 24');
test(largestTriangleArea([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 0, 'Test 25');
test(largestTriangleArea([[1,1],[2,3],[5,1],[3,4],[4,5],[6,2]]), 8.5, 'Test 26');
test(largestTriangleArea([[-1,-1],[0,0],[1,1],[2,2],[3,3]]), 0, 'Test 27');
test(largestTriangleArea([[-10,-10],[10,10],[-10,10],[10,-10],[0,0]]), 200.0, 'Test 28');
test(largestTriangleArea([[5,5],[5,-5],[-5,-5],[-5,5],[0,0]]), 50.0, 'Test 29');
test(largestTriangleArea([[-50,-50],[0,0],[50,50],[-40,-40],[40,40]]), 0, 'Test 30');
test(largestTriangleArea([[0, 0], [1, 0], [0, 1], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]), 8.5, 'Test 31');
test(largestTriangleArea([[10, 20], [20, 30], [30, 10], [40, 40], [50, 5], [0, 0]]), 900.0, 'Test 32');
test(largestTriangleArea([[10,10],[20,20],[30,30],[15,25],[25,15],[5,5],[25,35],[35,25]]), 250.0, 'Test 33');
test(largestTriangleArea([[0,0],[10,0],[5,5],[8,2],[3,7],[6,1],[9,4],[2,6],[7,3],[4,8]]), 40.0, 'Test 34');
test(largestTriangleArea([[0,0],[10,0],[10,10],[0,10],[5,5],[1,1],[9,9],[2,2],[8,8],[3,3],[7,7]]), 50.0, 'Test 35');
test(largestTriangleArea([[-20, 20], [30, -30], [15, 45], [-40, -10], [25, 10], [0, 0], [-15, -25]]), 2475.0, 'Test 36');
test(largestTriangleArea([[0,0],[1,0],[0,1],[1,1],[2,0],[2,1],[1,2],[0,2],[2,2],[1.5,1.5]]), 2.0, 'Test 37');
test(largestTriangleArea([[5,5],[15,10],[25,5],[15,0],[25,10],[35,5]]), 100.0, 'Test 38');
test(largestTriangleArea([[-40, 40], [40, -40], [-30, 30], [30, -30], [-20, 20], [20, -20], [-10, 10], [10, -10], [0, 0], [-5, 5], [5, -5]]), 0, 'Test 39');
test(largestTriangleArea([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), 0, 'Test 40');
test(largestTriangleArea([[-20, 30], [10, -40], [0, 0], [25, 25], [-30, -30], [40, 40], [5, 5]]), 2250.0, 'Test 41');
test(largestTriangleArea([[-3,-3],[-2,-2],[-1,-1],[0,0],[1,1],[2,2],[3,3],[-3,3],[-2,2],[-1,1]]), 18.0, 'Test 42');
test(largestTriangleArea([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]), 0, 'Test 43');
test(largestTriangleArea([[-30,-20],[20,25],[0,0],[10,-10],[-25,15],[5,30],[-15,-25],[15,-5],[25,10]]), 975.0, 'Test 44');
test(largestTriangleArea([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]]), 0, 'Test 45');
test(largestTriangleArea([[10,10],[20,20],[30,30],[40,40],[50,50],[-10,-10],[-20,-20],[-30,-30],[-40,-40],[-50,-50]]), 0, 'Test 46');
test(largestTriangleArea([[-1,-1],[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]]), 0, 'Test 47');
test(largestTriangleArea([[-50, -40], [-40, -30], [-30, -20], [-20, -10], [-10, 0], [0, 10], [10, 20], [20, 30], [30, 40], [40, 50]]), 0, 'Test 48');
test(largestTriangleArea([[-10, 10], [10, -10], [-20, 20], [20, -20], [-30, 30], [30, -30], [-40, 40], [40, -40], [-50, 50], [50, -50], [-60, 60], [60, -60]]), 0, 'Test 49');
test(largestTriangleArea([[-30, -30], [0, 0], [30, 30], [-20, 20], [20, -20], [-10, 10], [10, -10], [-5, 5], [5, -5]]), 1200.0, 'Test 50');
test(largestTriangleArea([[-25,0],[0,25],[25,0],[0,-25],[0,0],[12.5,12.5],[-12.5,-12.5]]), 625.0, 'Test 51');
test(largestTriangleArea([[-10,0],[10,0],[0,-10],[0,10],[5,5],[-5,-5],[-5,5],[5,-5],[1,1],[-1,-1]]), 100.0, 'Test 52');
test(largestTriangleArea([[-45, 45], [-35, 35], [-25, 25], [-15, 15], [-5, 5], [5, -5], [15, -15], [25, -25], [35, -35], [45, -45], [0, 0]]), 0, 'Test 53');
test(largestTriangleArea([[-25,25],[-50,0],[0,0],[25,0],[50,0],[0,-25],[0,25],[25,25],[-25,0]]), 1562.5, 'Test 54');
test(largestTriangleArea([[-10, 10], [-5, 5], [0, 0], [5, -5], [10, -10], [-8, 8], [-3, 3], [3, -3], [8, -8]]), 0, 'Test 55');
test(largestTriangleArea([[-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8],[-9,-9],[-10,-10]]), 0, 'Test 56');
test(largestTriangleArea([[50,0],[0,50],[-50,0],[0,-50],[25,25],[-25,-25],[25,-25],[-25,25],[0,0]]), 2500.0, 'Test 57');
test(largestTriangleArea([[-10, -10], [-5, -5], [0, 0], [5, 5], [10, 10], [15, 15], [20, 20], [25, 25]]), 0, 'Test 58');
test(largestTriangleArea([[-40,-40],[-20,-20],[-30,-10],[0,0],[10,10],[20,20],[30,30]]), 700.0, 'Test 59');
test(largestTriangleArea([[10, 20], [30, 40], [50, 60], [15, 25], [35, 45], [55, 65], [20, 30], [40, 50], [60, 70]]), 0, 'Test 60');
test(largestTriangleArea([[1,3],[2,6],[3,9],[4,12],[5,15],[6,18],[7,21],[8,24],[9,27]]), 0, 'Test 61');
test(largestTriangleArea([[1,1],[1,2],[2,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13]]), 11.5, 'Test 62');
test(largestTriangleArea([[-2,-2],[-1,1],[0,0],[1,-1],[2,2],[3,-3],[4,4]]), 18.0, 'Test 63');
test(largestTriangleArea([[-5,5],[-4,4],[-3,3],[-2,2],[-1,1],[0,0],[1,-1],[2,-2],[3,-3]]), 0, 'Test 64');
test(largestTriangleArea([[-10, -20], [15, 25], [-15, -25], [20, 20], [0, 0], [25, 15], [-25, -15]]), 400.0, 'Test 65');
test(largestTriangleArea([[-3,-3],[3,3],[0,0],[2,4],[-2,-4],[5,-1],[-5,1]]), 23.0, 'Test 66');
test(largestTriangleArea([[1, 2], [4, 8], [10, 20], [15, 30], [25, 40], [30, 10], [40, 50], [50, 60]]), 645.0, 'Test 67');
test(largestTriangleArea([[-45,45],[-40,40],[-35,35],[-30,30],[-25,25],[-20,20],[-15,15],[-10,10],[-5,5],[0,0]]), 0, 'Test 68');
test(largestTriangleArea([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [4, 1], [4, 2], [5, 1], [5, 2], [6, 1], [6, 2]]), 2.5, 'Test 69');
test(largestTriangleArea([[-45, -45], [45, 45], [45, -45], [-45, 45], [0, 0], [25, 25], [-25, -25], [25, -25], [-25, 25]]), 4050.0, 'Test 70');
test(largestTriangleArea([[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7], [8, -8], [9, -9], [10, -10]]), 0, 'Test 71');
test(largestTriangleArea([[-49,-49],[49,49],[-49,49],[49,-49],[0,0],[25,25],[-25,-25],[30,30],[-30,-30]]), 4802.0, 'Test 72');
test(largestTriangleArea([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20]]), 0, 'Test 73');
test(largestTriangleArea([[-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[1,-1],[2,-2],[3,-3],[4,-4],[5,-5]]), 0, 'Test 74');
test(largestTriangleArea([[-49,-49],[-48,-48],[-47,-47],[-46,-46],[-45,-45],[-44,-44],[-43,-43],[-42,-42],[-41,-41],[-40,-40]]), 0, 'Test 75');
test(largestTriangleArea([[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70]]), 0, 'Test 76');
test(largestTriangleArea([[1,2],[2,3],[3,1],[4,5],[5,6],[6,4],[7,8],[8,9],[9,7]]), 10.5, 'Test 77');
test(largestTriangleArea([[-30,-30],[-30,30],[30,-30],[30,30],[0,0],[10,10],[-10,-10],[10,-10],[-10,10]]), 1800.0, 'Test 78');
test(largestTriangleArea([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18]]), 0, 'Test 79');
test(largestTriangleArea([[1,1],[1,2],[2,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), 7.5, 'Test 80');
test(largestTriangleArea([[-25, 25], [0, 50], [25, -25], [50, 0], [-50, 0], [0, -50], [-25, -25], [25, 25], [0, 0]]), 2500.0, 'Test 81');
test(largestTriangleArea([[-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8],[-9,9],[-10,10]]), 0, 'Test 82');
test(largestTriangleArea([[1,1],[2,1],[1,2],[2,2],[1,3],[2,3],[1,4],[2,4],[1,5],[2,5]]), 2.0, 'Test 83');
test(largestTriangleArea([[1,1],[2,1],[1,2],[2,2],[3,3],[4,3],[3,4],[4,4],[5,5],[6,5],[5,6],[6,6]]), 4.5, 'Test 84');
test(largestTriangleArea([[-5,-5],[5,5],[-5,5],[5,-5],[0,0],[3,3],[-3,-3],[2,2],[-2,-2]]), 50.0, 'Test 85');
test(largestTriangleArea([[-4,-4],[-3,-3],[-2,-2],[-1,-1],[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 0, 'Test 86');
test(largestTriangleArea([[-20,20],[-10,10],[0,0],[10,-10],[20,20],[30,-30]]), 1000.0, 'Test 87');
test(largestTriangleArea([[1,1],[1,2],[2,1],[2,2],[1,3],[2,3],[3,1],[3,2],[3,3],[1,4],[2,4],[3,4]]), 3.0, 'Test 88');
test(largestTriangleArea([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10]]), 22.5, 'Test 89');
test(largestTriangleArea([[0,1],[1,0],[0,-1],[-1,0],[2,2],[-2,-2],[2,-2],[-2,2],[3,3],[-3,-3]]), 12.0, 'Test 90');
test(largestTriangleArea([[-30, 30], [30, -30], [-20, 20], [20, -20], [-10, 10], [10, -10], [0, 0], [-5, 5], [5, -5]]), 0, 'Test 91');
test(largestTriangleArea([[5,5],[10,10],[15,15],[20,20],[25,25],[30,30],[35,35],[40,40],[45,45],[50,50]]), 0, 'Test 92');
test(largestTriangleArea([[-1,-1],[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 0, 'Test 93');
test(largestTriangleArea([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2], [0, 3], [1, 3], [2, 3]]), 3.0, 'Test 94');
test(largestTriangleArea([[-10,-10],[10,10],[-10,10],[10,-10],[0,0],[2,2],[4,4]]), 200.0, 'Test 95');
test(largestTriangleArea([[-10,0],[-20,10],[0,20],[10,10],[20,-10],[10,-20],[0,-20],[-20,-10]]), 600.0, 'Test 96');
test(largestTriangleArea([[0,0],[0,1],[1,0],[1,1],[0,2],[1,2],[2,0],[2,1],[2,2],[0,3]]), 3.0, 'Test 97');
test(largestTriangleArea([[-20,20],[-10,10],[0,0],[10,-10],[20,-20],[-15,15],[-5,5],[5,-5],[15,-15]]), 0, 'Test 98');
test(largestTriangleArea([[-5,0],[-4,1],[-3,2],[-2,3],[-1,4],[0,5],[1,4],[2,3],[3,2],[4,1],[5,0]]), 25.0, 'Test 99');
test(largestTriangleArea([[-10,-10],[-10,10],[10,-10],[10,10],[0,0],[5,5],[-5,5],[-5,-5],[5,-5]]), 200.0, 'Test 100');
test(largestTriangleArea([[-1, -1], [1, 1], [-2, -2], [2, 2], [-3, -3], [3, 3], [-4, -4], [4, 4], [-5, -5], [5, 5], [0, 0], [-0.5, -0.5], [0.5, 0.5]]), 0, 'Test 101');
test(largestTriangleArea([[-10,0],[0,-10],[10,0],[0,10],[5,5],[-5,-5],[5,-5],[-5,5],[2,2],[-2,-2]]), 100.0, 'Test 102');
test(largestTriangleArea([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]), 0, 'Test 103');
test(largestTriangleArea([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]]), 0, 'Test 104');
test(largestTriangleArea([[-40, 40], [-30, 30], [-20, 20], [-10, 10], [0, 0], [10, -10], [20, -20], [30, -30], [40, -40], [25, 25], [-25, -25]]), 2000.0, 'Test 105');
test(largestTriangleArea([[-10,-10],[10,-10],[-10,10],[10,10],[0,0],[5,5],[-5,-5],[5,-5],[-5,5]]), 200.0, 'Test 106');
test(largestTriangleArea([[1,2],[2,3],[3,1],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 12.5, 'Test 107');
test(largestTriangleArea([[-1, -1], [-2, -2], [-3, -3], [1, 1], [2, 2], [3, 3], [0, 0], [-1, 1], [1, -1], [-2, 2], [2, -2]]), 12.0, 'Test 108');
test(largestTriangleArea([[-20, 20], [-10, 10], [0, 0], [10, -10], [20, -20], [-20, -20], [-10, -10], [10, 10], [20, 20]]), 800.0, 'Test 109');
test(largestTriangleArea([[0,0],[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1],[0,2]]), 3.0, 'Test 110');
test(largestTriangleArea([[0, 50], [50, 0], [25, 25], [-25, 25], [25, -25], [-25, -25], [10, 10], [-10, 10], [10, -10], [-10, -10]]), 2500.0, 'Test 111');
test(largestTriangleArea([[-10,10],[0,0],[10,-10],[20,20],[30,-30],[40,40]]), 1600.0, 'Test 112');
test(largestTriangleArea([[-5, 5], [5, -5], [10, 10], [-10, -10], [0, 0], [15, -15], [-15, 15], [5, 5], [-5, -5]]), 300.0, 'Test 113');

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
