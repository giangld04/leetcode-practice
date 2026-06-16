// Test: 1232. Check If It Is A Straight Line
// 125 test cases from LeetCodeDataset
// Run: node test.js

const { checkStraightLine } = require("./solution");

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

console.log("\n1232. Check If It Is A Straight Line\n");

test(checkStraightLine([[0,0],[0,1],[0,2],[0,3]]), true, 'Test 1');
test(checkStraightLine([[-10000,-10000],[0,0],[10000,10000]]), true, 'Test 2');
test(checkStraightLine([[-4,-3],[1,0],[3,-1],[0,-1],[-5,2]]), false, 'Test 3');
test(checkStraightLine([[0,0],[5,5],[10,10],[15,15]]), true, 'Test 4');
test(checkStraightLine([[1,1],[2,2],[3,3],[4,4],[5,4]]), false, 'Test 5');
test(checkStraightLine([[1,1],[2,2],[3,5]]), false, 'Test 6');
test(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]), false, 'Test 7');
test(checkStraightLine([[-1,0],[0,1],[1,2],[2,3]]), true, 'Test 8');
test(checkStraightLine([[1,2],[2,1],[3,0],[4,-1],[5,-2]]), true, 'Test 9');
test(checkStraightLine([[-1,-1],[0,0],[1,1],[2,2],[3,3]]), true, 'Test 10');
test(checkStraightLine([[1,2],[1,3],[1,4],[1,5],[1,6]]), true, 'Test 11');
test(checkStraightLine([[0,0],[1,1],[2,2],[3,3]]), true, 'Test 12');
test(checkStraightLine([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]]), true, 'Test 13');
test(checkStraightLine([[1,1],[2,2],[2,3]]), false, 'Test 14');
test(checkStraightLine([[-4,-3],[-1,1],[2,5],[5,9]]), true, 'Test 15');
test(checkStraightLine([[0,0],[1,1],[2,2],[3,3],[4,4]]), true, 'Test 16');
test(checkStraightLine([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]]), true, 'Test 17');
test(checkStraightLine([[-1,-1],[0,0],[1,1],[2,2]]), true, 'Test 18');
test(checkStraightLine([[0,1],[1,3],[-1,-1],[2,5]]), true, 'Test 19');
test(checkStraightLine([[1,1],[2,2],[3,3],[4,6]]), false, 'Test 20');
test(checkStraightLine([[1,2],[2,3],[3,5]]), false, 'Test 21');
test(checkStraightLine([[-1,0],[0,1],[1,0],[2,1],[3,0]]), false, 'Test 22');
test(checkStraightLine([[-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5]]), true, 'Test 23');
test(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), true, 'Test 24');
test(checkStraightLine([[-1,0],[0,1],[1,2],[2,3],[3,4]]), true, 'Test 25');
test(checkStraightLine([[1,1],[2,2],[3,3],[4,4],[5,5]]), true, 'Test 26');
test(checkStraightLine([[10,5],[15,10],[20,15],[25,20]]), true, 'Test 27');
test(checkStraightLine([[10000,10000],[5000,5000],[0,0]]), true, 'Test 28');
test(checkStraightLine([[2,4],[2,5],[2,6]]), true, 'Test 29');
test(checkStraightLine([[0,0],[0,1],[0,2],[0,3],[0,4]]), true, 'Test 30');
test(checkStraightLine([[-1, 0], [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]]), true, 'Test 31');
test(checkStraightLine([[5, -10], [10, -5], [15, 0], [20, 5], [25, 10]]), true, 'Test 32');
test(checkStraightLine([[-1, -2], [-2, -3], [-3, -4], [-4, -5], [-5, -6]]), true, 'Test 33');
test(checkStraightLine([[-10, 5], [-5, 10], [0, 15], [5, 20], [10, 25], [15, 30], [20, 35], [25, 40]]), true, 'Test 34');
test(checkStraightLine([[-2,-4],[-1,-2],[0,0],[1,2],[2,4]]), true, 'Test 35');
test(checkStraightLine([[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10]]), true, 'Test 36');
test(checkStraightLine([[1000, 2000], [2000, 4000], [3000, 6000], [4000, 8000], [5000, 10000]]), true, 'Test 37');
test(checkStraightLine([[10, 20], [20, 40], [30, 60], [40, 80], [50, 100], [60, 120]]), true, 'Test 38');
test(checkStraightLine([[1,2],[2,3],[4,5],[5,6],[7,8],[8,9],[10,11]]), true, 'Test 39');
test(checkStraightLine([[-5,-20],[0,-10],[5,0],[10,10],[15,20]]), true, 'Test 40');
test(checkStraightLine([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 8]]), false, 'Test 41');
test(checkStraightLine([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14]]), true, 'Test 42');
test(checkStraightLine([[-1, -2], [-2, -4], [-3, -6], [-4, -8], [-5, -10]]), true, 'Test 43');
test(checkStraightLine([[-10, 15], [-5, 10], [0, 5], [5, 0], [10, -5], [15, -10]]), true, 'Test 44');
test(checkStraightLine([[2, 2], [4, 4], [6, 6], [8, 8], [10, 10], [12, 12], [14, 14], [16, 16]]), true, 'Test 45');
test(checkStraightLine([[1, 3], [2, 5], [3, 7], [4, 9], [5, 11]]), true, 'Test 46');
test(checkStraightLine([[-2, 3], [-1, 4], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9], [5, 10]]), true, 'Test 47');
test(checkStraightLine([[10000,10000],[5000,5000],[0,0],[-5000,-5000],[-10000,-10000]]), true, 'Test 48');
test(checkStraightLine([[-20, -30], [-10, -15], [0, 0], [10, 15], [20, 30]]), true, 'Test 49');
test(checkStraightLine([[-5, 5], [-10, 10], [-15, 15], [-20, 20], [-25, 25], [-30, 30]]), true, 'Test 50');
test(checkStraightLine([[1, 1], [2, 3], [3, 5], [4, 7], [5, 9], [6, 11], [7, 13], [8, 15]]), true, 'Test 51');
test(checkStraightLine([[-5, -10], [0, 0], [5, 10], [10, 20], [15, 30]]), true, 'Test 52');
test(checkStraightLine([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]), true, 'Test 53');
test(checkStraightLine([[10, 5], [20, 10], [30, 15], [40, 20], [50, 25], [60, 30], [70, 35]]), true, 'Test 54');
test(checkStraightLine([[-3, -3], [-2, -2], [-1, -1], [0, 0], [1, 1], [2, 2], [3, 3]]), true, 'Test 55');
test(checkStraightLine([[-2, 1], [-1, 3], [0, 5], [1, 7], [2, 9], [3, 11]]), true, 'Test 56');
test(checkStraightLine([[0, -10000], [10000, -10000], [20000, -10000], [30000, -10000]]), true, 'Test 57');
test(checkStraightLine([[-4, -2], [-2, 0], [0, 2], [2, 4], [4, 6]]), true, 'Test 58');
test(checkStraightLine([[-100, 100], [-50, 150], [0, 200], [50, 250], [100, 300]]), true, 'Test 59');
test(checkStraightLine([[-2, 2], [0, 0], [2, -2], [4, -4], [6, -6]]), true, 'Test 60');
test(checkStraightLine([[-1,-2],[1,0],[3,2],[5,4],[7,6],[9,8]]), true, 'Test 61');
test(checkStraightLine([[-10, 15], [-5, 10], [0, 5], [5, 0], [10, -5]]), true, 'Test 62');
test(checkStraightLine([[5,0],[5,1],[5,2],[5,3],[5,4]]), true, 'Test 63');
test(checkStraightLine([[0, -10], [0, -5], [0, 0], [0, 5], [0, 10], [0, 15]]), true, 'Test 64');
test(checkStraightLine([[100, 200], [200, 400], [300, 600], [400, 800], [500, 1000]]), true, 'Test 65');
test(checkStraightLine([[0,1],[1,3],[2,5],[3,7],[4,9]]), true, 'Test 66');
test(checkStraightLine([[-3, 7], [-2, 5], [-1, 3], [0, 1], [1, -1], [2, -3]]), true, 'Test 67');
test(checkStraightLine([[-1, -2], [1, 0], [3, 2], [5, 4], [7, 6], [9, 8], [11, 10]]), true, 'Test 68');
test(checkStraightLine([[-5,-5],[0,-2.5],[5,0],[10,2.5],[15,5]]), true, 'Test 69');
test(checkStraightLine([[-500, 500], [-250, 750], [0, 1000], [250, 1250], [500, 1500]]), true, 'Test 70');
test(checkStraightLine([[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]]), true, 'Test 71');
test(checkStraightLine([[-1,0],[0,1],[1,2],[2,3],[3,4],[4,5]]), true, 'Test 72');
test(checkStraightLine([[-10, 0], [-5, 0], [0, 0], [5, 0], [10, 0], [15, 0]]), true, 'Test 73');
test(checkStraightLine([[-2,-1],[0,0],[2,1],[4,2],[6,3],[8,4]]), true, 'Test 74');
test(checkStraightLine([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), true, 'Test 75');
test(checkStraightLine([[-2,-3],[-1,-1],[0,1],[1,3],[2,5],[3,7]]), true, 'Test 76');
test(checkStraightLine([[-3,-3],[-2,-2],[-1,-1],[0,0],[1,1],[2,2],[3,3]]), true, 'Test 77');
test(checkStraightLine([[-100,200],[-200,400],[-300,600],[-400,800],[-500,1000]]), true, 'Test 78');
test(checkStraightLine([[-5,-10],[0,0],[5,10],[10,20],[15,30]]), true, 'Test 79');
test(checkStraightLine([[-5,-10],[-4,-8],[-3,-6],[-2,-4],[-1,-2],[0,0]]), true, 'Test 80');
test(checkStraightLine([[-5, -5], [0, 0], [5, 5], [10, 10], [15, 15], [20, 20]]), true, 'Test 81');
test(checkStraightLine([[-100, 100], [-50, 50], [0, 0], [50, -50], [100, -100]]), true, 'Test 82');
test(checkStraightLine([[-5,5],[-4,4],[-3,3],[-2,2],[-1,1],[0,0]]), true, 'Test 83');
test(checkStraightLine([[-100, -100], [-50, -50], [0, 0], [50, 50], [100, 100]]), true, 'Test 84');
test(checkStraightLine([[-5, 5], [0, 10], [5, 15], [10, 20], [15, 25], [20, 30], [25, 35]]), true, 'Test 85');
test(checkStraightLine([[100,-200],[200,-400],[300,-600],[400,-800],[500,-1000]]), true, 'Test 86');
test(checkStraightLine([[1, 3], [2, 5], [3, 7], [4, 9], [5, 11], [6, 13], [7, 15], [8, 17], [9, 19], [10, 21]]), true, 'Test 87');
test(checkStraightLine([[-1,-2],[-2,-4],[-3,-6],[-4,-8],[-5,-10]]), true, 'Test 88');
test(checkStraightLine([[100,100],[200,200],[300,300],[400,401],[500,500]]), false, 'Test 89');
test(checkStraightLine([[-100,100],[100,-100],[0,0]]), true, 'Test 90');
test(checkStraightLine([[2, 3], [4, 6], [6, 9], [8, 12], [10, 15]]), true, 'Test 91');
test(checkStraightLine([[-3, 3], [-6, 6], [-9, 9], [-12, 12], [-15, 15]]), true, 'Test 92');
test(checkStraightLine([[-1, 0], [0, 1], [1, 0], [0, -1], [-1, 0]]), false, 'Test 93');
test(checkStraightLine([[-10, -20], [0, 0], [10, 20], [20, 40], [30, 60]]), true, 'Test 94');
test(checkStraightLine([[1, 1], [3, 5], [5, 9], [7, 13], [9, 17]]), true, 'Test 95');
test(checkStraightLine([[1,2],[2,4],[3,6],[4,8],[5,10]]), true, 'Test 96');
test(checkStraightLine([[-1,-5],[0,-2],[1,1],[2,4],[3,7],[4,10]]), true, 'Test 97');
test(checkStraightLine([[0, 1000], [1000, 1000], [2000, 1000], [3000, 1000], [4000, 1000]]), true, 'Test 98');
test(checkStraightLine([[-2,-3],[-1,-1],[0,1],[1,3],[2,5]]), true, 'Test 99');
test(checkStraightLine([[1, 2], [2, 4], [4, 8], [8, 16], [16, 32], [32, 64]]), true, 'Test 100');
test(checkStraightLine([[-100, -200], [-200, -400], [-300, -600], [-400, -800], [-500, -1000]]), true, 'Test 101');
test(checkStraightLine([[1, 2], [2, 4], [3, 6], [4, 8], [5, 10], [6, 12], [7, 14]]), true, 'Test 102');
test(checkStraightLine([[1, 2], [4, 6], [7, 10], [10, 14], [13, 18], [16, 22], [19, 26]]), true, 'Test 103');
test(checkStraightLine([[10,10],[20,20],[30,30],[40,40],[50,50]]), true, 'Test 104');
test(checkStraightLine([[-3,-6],[1,-2],[5,2],[7,3]]), false, 'Test 105');
test(checkStraightLine([[-100,0],[0,0],[100,0],[200,0],[300,0]]), true, 'Test 106');
test(checkStraightLine([[-1000, 2000], [0, 0], [1000, -2000]]), true, 'Test 107');
test(checkStraightLine([[-5, -10], [0, 0], [5, 10], [10, 20], [15, 30], [20, 40]]), true, 'Test 108');
test(checkStraightLine([[-10, 0], [0, 5], [10, 10], [20, 15], [30, 20], [40, 25], [50, 30], [60, 35]]), true, 'Test 109');
test(checkStraightLine([[-1, 1], [0, 0], [1, -1], [2, -2], [3, -3]]), true, 'Test 110');
test(checkStraightLine([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10]]), true, 'Test 111');
test(checkStraightLine([[0,0],[1,2],[2,4],[3,6],[4,8],[5,10]]), true, 'Test 112');
test(checkStraightLine([[1,1],[1,2],[1,3],[1,4],[1,5]]), true, 'Test 113');
test(checkStraightLine([[-10,-10],[-5,-5],[0,0],[5,5],[10,10]]), true, 'Test 114');
test(checkStraightLine([[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]]), true, 'Test 115');
test(checkStraightLine([[0, 1], [1, 2], [2, 3], [3, 5], [4, 6], [5, 8]]), false, 'Test 116');
test(checkStraightLine([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 15]]), false, 'Test 117');
test(checkStraightLine([[10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80]]), true, 'Test 118');
test(checkStraightLine([[-1, -1], [1, 1], [3, 3], [5, 5], [7, 7], [9, 9]]), true, 'Test 119');
test(checkStraightLine([[-1000, 0], [-500, 0], [0, 0], [500, 0], [1000, 0]]), true, 'Test 120');
test(checkStraightLine([[-10000, 10000], [-5000, 10000], [0, 10000], [5000, 10000], [10000, 10000]]), true, 'Test 121');
test(checkStraightLine([[5, 3], [10, 6], [15, 9], [20, 12], [25, 15]]), true, 'Test 122');
test(checkStraightLine([[1, 1], [2, 2], [3, 3], [4, 3], [5, 5]]), false, 'Test 123');
test(checkStraightLine([[-2, 4], [-1, 2], [0, 0], [1, -2], [2, -4]]), true, 'Test 124');
test(checkStraightLine([[0,5],[1,5],[2,5],[3,5],[4,5]]), true, 'Test 125');

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
