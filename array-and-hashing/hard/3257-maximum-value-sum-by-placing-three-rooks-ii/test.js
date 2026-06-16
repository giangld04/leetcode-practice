// Test: 3257. Maximum Value Sum By Placing Three Rooks Ii
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { maximumValueSum } = require("./solution");

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

console.log("\n3257. Maximum Value Sum By Placing Three Rooks Ii\n");

test(maximumValueSum(board), Error: Solution.maximumValueSum[] missing 1 required positional argument: 'board', 'Test 1');
test(maximumValueSum([[5,-2,3,7],[1,8,-1,2],[-4,4,-3,6],[3,7,5,-9]]), 20, 'Test 2');
test(maximumValueSum([[1,1,1],[1,1,1],[1,1,1]]), 3, 'Test 3');
test(maximumValueSum([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]), 57, 'Test 4');
test(maximumValueSum([[5, -5, 5, -5], [-5, 5, -5, 5], [5, -5, 5, -5], [-5, 5, -5, 5]]), 15, 'Test 5');
test(maximumValueSum([[5,-2,-3,-4],[1,0,3,1],[1,5,-3,2],[0,3,-1,2]]), 13, 'Test 6');
test(maximumValueSum([[3,2,1],[1,2,3],[2,1,3]]), 8, 'Test 7');
test(maximumValueSum([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9],[9,7,5,3,1],[1,1,1,1,1]]), 22, 'Test 8');
test(maximumValueSum([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]), 33, 'Test 9');
test(maximumValueSum([[0, 0, 0], [0, 0, 0], [0, 0, 0]]), 0, 'Test 10');
test(maximumValueSum([[-5,3,-2,7],[-1,4,-3,8],[-4,2,-1,6]]), 10, 'Test 11');
test(maximumValueSum([[100,200,300],[400,500,600],[700,800,900]]), 1500, 'Test 12');
test(maximumValueSum([[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]), 4, 'Test 13');
test(maximumValueSum([[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]]), -15, 'Test 14');
test(maximumValueSum([[-10,20,-30],[40,-50,60],[-70,80,-90]]), 130, 'Test 15');
test(maximumValueSum([[-10,-20,-30,-40],[-40,-50,-60,-70],[-70,-80,-90,-100],[-110,-120,-130,-140]]), -150, 'Test 16');
test(maximumValueSum([[1000000000,1000000000,1000000000],[1000000000,1000000000,1000000000],[1000000000,1000000000,1000000000]]), 3000000000, 'Test 17');
test(maximumValueSum([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]), 0, 'Test 18');
test(maximumValueSum([[5,-2,3,1],[1,4,-2,-3],[3,-1,2,-1],[-1,-2,1,5]]), 14, 'Test 19');
test(maximumValueSum([[5,3,2,1],[8,15,10,6],[12,9,11,7],[4,14,3,13]]), 40, 'Test 20');
test(maximumValueSum([[10,20,30,40],[50,60,70,80],[90,100,110,120],[130,140,150,160]]), 330, 'Test 21');
test(maximumValueSum([[-9,-8,-7],[-6,-5,-4],[-3,-2,-1]]), -15, 'Test 22');
test(maximumValueSum([[10,-5,20],[5,15,-10],[25,-25,30]]), 60, 'Test 23');
test(maximumValueSum([[-10,-10,-10],[-10,10,-10],[-10,-10,-10]]), -10, 'Test 24');
test(maximumValueSum([[-10,100,200],[-200,300,-400],[500,-600,700]]), 1000, 'Test 25');
test(maximumValueSum([[100,-100,200],[-200,300,-300],[400,-400,500]]), 900, 'Test 26');
test(maximumValueSum([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,2,4],[4,2,1,5,3],[3,5,4,1,2]]), 15, 'Test 27');
test(maximumValueSum([[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,-1]]), 0, 'Test 28');
test(maximumValueSum([[1000000000,-1000000000,1000000000],[-1000000000,1000000000,-1000000000],[1000000000,-1000000000,1000000000]]), 3000000000, 'Test 29');
test(maximumValueSum([[1,2,3,4,5],[5,4,3,2,1],[6,7,8,9,10],[10,9,8,7,6],[11,12,13,14,15]]), 34, 'Test 30');
test(maximumValueSum([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]), 3, 'Test 31');
test(maximumValueSum([[10,-10,10],[-10,10,-10],[10,-10,10]]), 30, 'Test 32');
test(maximumValueSum([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]), 15, 'Test 33');
test(maximumValueSum([[1,-1,1,-1,1],[1,-1,1,-1,1],[1,-1,1,-1,1],[1,-1,1,-1,1],[1,-1,1,-1,1]]), 3, 'Test 34');
test(maximumValueSum([[1,3,2],[3,2,1],[2,1,3]]), 9, 'Test 35');
test(maximumValueSum([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), 3, 'Test 36');
test(maximumValueSum([[-10,-20,-30],[-40,-50,-60],[-70,-80,-90]]), -150, 'Test 37');
test(maximumValueSum([[1,100,1],[100,1,100],[1,100,1]]), 201, 'Test 38');
test(maximumValueSum([[-1000000000,-1000000000,-1000000000],[-1000000000,-1000000000,-1000000000],[-1000000000,-1000000000,-1000000000]]), -3000000000, 'Test 39');
test(maximumValueSum([[10,20,30,40,50],[60,70,80,90,100],[110,120,130,140,150],[160,170,180,190,200],[210,220,230,240,250]]), 570, 'Test 40');
test(maximumValueSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 33, 'Test 41');
test(maximumValueSum([[10,20,30],[15,25,35],[20,30,40]]), 75, 'Test 42');
test(maximumValueSum([[10, -10, 20], [-20, 30, -30], [40, -40, 50]]), 90, 'Test 43');
test(maximumValueSum([[5,9,3,8],[7,2,4,1],[6,0,10,12],[11,14,13,15]]), 34, 'Test 44');
test(maximumValueSum([[1,2,3,4,5],[5,4,3,2,1],[2,3,4,5,6],[6,5,4,3,2],[3,4,5,6,7]]), 18, 'Test 45');
test(maximumValueSum([[-1,2,-3],[4,-5,6],[-7,8,-9]]), 13, 'Test 46');
test(maximumValueSum([[1,0,0],[0,1,0],[0,0,1]]), 3, 'Test 47');
test(maximumValueSum([[5,3,5],[1,2,1],[4,3,4]]), 11, 'Test 48');
test(maximumValueSum([[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]]), -15, 'Test 49');
test(maximumValueSum([[100,200,300,400],[500,600,700,800],[900,1000,1100,1200]]), 2100, 'Test 50');
test(maximumValueSum([[9,-1,-1],[-1,9,-1],[-1,-1,9]]), 27, 'Test 51');
test(maximumValueSum([[-5,-5,-5],[-5,-5,-5],[-5,-5,-5]]), -15, 'Test 52');
test(maximumValueSum([[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]), -3, 'Test 53');
test(maximumValueSum([[-10,0,10],[-20,0,20],[-30,0,30]]), 20, 'Test 54');
test(maximumValueSum([[1,3,5,7],[2,4,6,8],[9,11,13,15],[12,14,16,18]]), 35, 'Test 55');
test(maximumValueSum([[-10,-10,-10],[-10,100,-10],[-10,-10,-10]]), 80, 'Test 56');
test(maximumValueSum([[10,10,10],[10,10,10],[10,10,10]]), 30, 'Test 57');
test(maximumValueSum([[5,1,2],[1,5,3],[2,3,5]]), 15, 'Test 58');
test(maximumValueSum([[5,3,2,4,1],[6,7,8,9,0],[2,3,4,5,6],[7,8,9,0,1],[3,4,5,6,7]]), 25, 'Test 59');
test(maximumValueSum([[0,0,0],[0,0,0],[0,0,0]]), 0, 'Test 60');
test(maximumValueSum([[5,-2,3,-4],[1,0,-1,2],[-3,4,-5,6]]), 11, 'Test 61');
test(maximumValueSum([[100,200,300,400,500],[500,400,300,200,100],[100,300,500,700,900],[900,700,500,300,100],[100,100,100,100,100]]), 2200, 'Test 62');
test(maximumValueSum([[10,10,10,10,10],[10,10,10,10,10],[10,10,10,10,10],[10,10,10,10,10],[10,10,10,10,10]]), 30, 'Test 63');
test(maximumValueSum([[5,-2,-1],[1,6,3],[-3,4,8]]), 19, 'Test 64');
test(maximumValueSum([[-1, -2, -3, -4], [-5, -6, -7, -8], [-9, -10, -11, -12], [-13, -14, -15, -16]]), -18, 'Test 65');
test(maximumValueSum([[5,-2,-3,4],[1,0,3,-1],[2,-4,6,7],[-3,1,0,5]]), 16, 'Test 66');
test(maximumValueSum([[5,-1,-1],[-1,5,-1],[-1,-1,5]]), 15, 'Test 67');
test(maximumValueSum([[10,20,30],[40,50,60],[70,80,90]]), 150, 'Test 68');
test(maximumValueSum([[100, 200, 300], [400, 500, 600], [700, 800, 900]]), 1500, 'Test 69');
test(maximumValueSum([[100,200,300,400],[500,600,700,800],[900,1000,1100,1200],[1300,1400,1500,1600]]), 3300, 'Test 70');
test(maximumValueSum([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]]), 3, 'Test 71');
test(maximumValueSum([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9],[9,7,5,3,1],[2,4,6,8,0]]), 26, 'Test 72');
test(maximumValueSum([[9,8,7],[6,5,4],[3,2,1]]), 15, 'Test 73');
test(maximumValueSum([[-100,-200,-300,-400],[-500,-600,-700,-800],[-900,-1000,-1100,-1200],[-1300,-1400,-1500,-1600]]), -1800, 'Test 74');
test(maximumValueSum([[10,20,30,40],[50,60,70,80],[90,100,110,120]]), 210, 'Test 75');
test(maximumValueSum([[5,3,2,1],[8,15,10,6],[7,12,9,4],[14,9,13,11]]), 38, 'Test 76');
test(maximumValueSum([[5,3,2,1],[6,4,3,2],[7,5,4,3],[8,6,5,4]]), 16, 'Test 77');
test(maximumValueSum([[5,3,2],[1,6,4],[7,8,0]]), 17, 'Test 78');
test(maximumValueSum([[1,2,3],[4,5,6],[7,8,9]]), 15, 'Test 79');
test(maximumValueSum([[-1,2,-3,4,-5],[6,-7,8,-9,10],[-11,12,-13,14,-15],[16,-17,18,-19,20],[-21,22,-23,24,-25]]), 56, 'Test 80');
test(maximumValueSum([[5,5,5,5],[5,5,5,5],[5,5,5,5],[5,5,5,5]]), 15, 'Test 81');
test(maximumValueSum([[5,3,2,1],[1,4,6,5],[7,8,9,10],[11,12,13,14]]), 28, 'Test 82');

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
