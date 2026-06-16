// Test: 1266. Minimum Time Visiting All Points
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { minTimeToVisitAllPoints } = require("./solution");

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

console.log("\n1266. Minimum Time Visiting All Points\n");

test(minTimeToVisitAllPoints([[0,0],[1,1],[0,0],[1,1]]), 3, 'Test 1');
test(minTimeToVisitAllPoints([[5,5],[5,5],[5,5],[5,5]]), 0, 'Test 2');
test(minTimeToVisitAllPoints([[-5,-5],[-4,-4],[-3,-3],[-2,-2]]), 3, 'Test 3');
test(minTimeToVisitAllPoints([[0,0],[0,1],[0,2],[0,3]]), 3, 'Test 4');
test(minTimeToVisitAllPoints([[-1000,-1000],[1000,1000],[-1000,1000],[1000,-1000]]), 6000, 'Test 5');
test(minTimeToVisitAllPoints([[1,2],[2,3],[3,4],[4,5]]), 3, 'Test 6');
test(minTimeToVisitAllPoints([[5,5],[4,4],[3,3],[2,2],[1,1]]), 4, 'Test 7');
test(minTimeToVisitAllPoints([[3,2],[-2,2]]), 5, 'Test 8');
test(minTimeToVisitAllPoints([[1,2],[3,4],[5,6],[7,8]]), 6, 'Test 9');
test(minTimeToVisitAllPoints([[-1,-1],[1,1],[-1,-1],[1,1]]), 6, 'Test 10');
test(minTimeToVisitAllPoints([[0,0],[1,1],[1,0],[0,1]]), 3, 'Test 11');
test(minTimeToVisitAllPoints([[1,1],[2,2],[3,3],[4,4],[5,5]]), 4, 'Test 12');
test(minTimeToVisitAllPoints([[0,0],[0,1],[1,1],[1,0],[0,0]]), 4, 'Test 13');
test(minTimeToVisitAllPoints([[-1,-1],[-2,-2],[-3,-3],[-4,-4]]), 3, 'Test 14');
test(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]), 7, 'Test 15');
test(minTimeToVisitAllPoints([[-1000,-1000],[1000,1000]]), 2000, 'Test 16');
test(minTimeToVisitAllPoints([[1,1],[2,2],[2,1],[1,2],[0,0]]), 5, 'Test 17');
test(minTimeToVisitAllPoints([[0,0],[5,5],[10,10]]), 10, 'Test 18');
test(minTimeToVisitAllPoints([[0,0],[1,1],[2,2],[3,3]]), 3, 'Test 19');
test(minTimeToVisitAllPoints([[0,0],[1,0],[2,0],[3,0]]), 3, 'Test 20');
test(minTimeToVisitAllPoints([[0,0],[1000,1000]]), 1000, 'Test 21');
test(minTimeToVisitAllPoints([[10,10],[0,0],[5,5]]), 15, 'Test 22');
test(minTimeToVisitAllPoints([[-1,-1],[1,1],[-2,-2],[2,2]]), 9, 'Test 23');
test(minTimeToVisitAllPoints([[10,10],[5,5],[0,0],[-5,-5],[-10,-10]]), 20, 'Test 24');
test(minTimeToVisitAllPoints([[1000,1000],[-1000,-1000],[1000,-1000],[-1000,1000]]), 6000, 'Test 25');
test(minTimeToVisitAllPoints([[1000,1000],[-1000,-1000],[0,0]]), 3000, 'Test 26');
test(minTimeToVisitAllPoints([[-1000,0],[1000,0],[0,-1000],[0,1000]]), 5000, 'Test 27');
test(minTimeToVisitAllPoints([[999,999],[1000,1000],[999,1000],[1000,999],[999,999],[0,0],[-1,-1],[-1000,-1000]]), 2003, 'Test 28');
test(minTimeToVisitAllPoints([[-500,500],[500,-500],[-500,-500],[500,500],[-1,1],[1,-1]]), 3503, 'Test 29');
test(minTimeToVisitAllPoints([[-100,-100],[-90,-90],[-80,-80],[-70,-70],[-60,-60],[-50,-50],[-40,-40]]), 60, 'Test 30');
test(minTimeToVisitAllPoints([[-1,-1],[1,1],[-1,1],[1,-1],[-2,-2],[2,2],[-2,2],[2,-2]]), 21, 'Test 31');
test(minTimeToVisitAllPoints([[1,1],[2,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15],[15,17],[17,19]]), 18, 'Test 32');
test(minTimeToVisitAllPoints([[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,3],[0,3],[0,4],[1,4],[1,5],[0,5],[0,6],[1,6],[1,7],[0,7],[0,8],[1,8],[1,9],[0,9]]), 19, 'Test 33');
test(minTimeToVisitAllPoints([[5,5],[5,15],[15,15],[15,5],[5,5],[10,10],[15,5],[5,15]]), 60, 'Test 34');
test(minTimeToVisitAllPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), 9, 'Test 35');
test(minTimeToVisitAllPoints([[-2,-2],[-2,2],[2,2],[2,-2],[-2,-2],[1,1],[0,0],[-1,-1]]), 21, 'Test 36');
test(minTimeToVisitAllPoints([[100,200],[200,300],[300,400],[400,500],[500,600],[600,700],[700,800]]), 600, 'Test 37');
test(minTimeToVisitAllPoints([[5,5],[1,1],[-3,-3],[-5,-5],[0,0],[5,5],[10,10],[5,5]]), 30, 'Test 38');
test(minTimeToVisitAllPoints([[0,0],[0,2],[2,2],[2,0],[0,0],[2,0],[0,2],[2,2],[0,0],[2,2]]), 18, 'Test 39');
test(minTimeToVisitAllPoints([[-10,10],[0,0],[10,-10],[0,0],[-10,10],[0,0],[10,-10]]), 60, 'Test 40');
test(minTimeToVisitAllPoints([[10,10],[10,11],[11,11],[12,12],[12,13],[13,13],[13,14],[14,14]]), 7, 'Test 41');
test(minTimeToVisitAllPoints([[-999,-999],[-998,-998],[-997,-997],[-996,-996],[-995,-995],[-994,-994],[-993,-993]]), 6, 'Test 42');
test(minTimeToVisitAllPoints([[0,0],[1000,0],[0,1000],[1000,1000],[500,500],[0,0],[1000,0],[0,1000]]), 6000, 'Test 43');
test(minTimeToVisitAllPoints([[0,0],[1,1],[2,0],[1,-1],[0,0],[-1,-1],[-2,0],[-1,1]]), 7, 'Test 44');
test(minTimeToVisitAllPoints([[-1000,-1000],[-999,-999],[-998,-998],[-997,-997],[-996,-996],[-995,-995],[-994,-994],[-993,-993]]), 7, 'Test 45');
test(minTimeToVisitAllPoints([[100,0],[0,100],[100,100],[0,0],[50,50],[50,0],[0,50]]), 450, 'Test 46');
test(minTimeToVisitAllPoints([[0, 1], [1, 0], [0, -1], [-1, 0], [0, 1], [1, 0], [0, -1], [-1, 0], [0, 0]]), 8, 'Test 47');
test(minTimeToVisitAllPoints([[-100,-100],[-99,-101],[-98,-102],[-97,-103],[-96,-104],[-95,-105],[-94,-106]]), 6, 'Test 48');
test(minTimeToVisitAllPoints([[100,100],[200,150],[300,200],[350,250],[400,300],[500,350],[600,400]]), 500, 'Test 49');
test(minTimeToVisitAllPoints([[100,200],[200,300],[300,200],[200,100],[100,200],[200,300],[300,400],[400,300]]), 700, 'Test 50');
test(minTimeToVisitAllPoints([[1, 1], [1, 2], [2, 2], [3, 3], [3, 4], [4, 4], [5, 5], [5, 6], [6, 6], [7, 7], [7, 8], [8, 8], [9, 9], [9, 10], [10, 10]]), 14, 'Test 51');
test(minTimeToVisitAllPoints([[0,0],[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18],[10,20]]), 20, 'Test 52');
test(minTimeToVisitAllPoints([[-900,0],[-800,-100],[-700,-200],[-600,-300],[-500,-400],[-400,-500],[-300,-600],[-200,-700],[-100,-800],[0,-900]]), 900, 'Test 53');
test(minTimeToVisitAllPoints([[10,10],[20,20],[15,25],[25,15],[30,30],[40,40],[35,35],[45,45]]), 65, 'Test 54');
test(minTimeToVisitAllPoints([[0,0],[999,999],[1,1],[998,998],[2,2],[997,997],[3,3],[996,996],[4,4]]), 7964, 'Test 55');
test(minTimeToVisitAllPoints([[0,0],[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18]]), 18, 'Test 56');
test(minTimeToVisitAllPoints([[5, 5], [5, 15], [15, 15], [15, 5], [5, 5], [5, 25], [25, 25], [25, 5], [5, 5]]), 120, 'Test 57');
test(minTimeToVisitAllPoints([[0,0],[1,0],[0,1],[2,0],[0,2],[3,0],[0,3],[4,0],[0,4],[5,0],[0,5]]), 30, 'Test 58');
test(minTimeToVisitAllPoints([[5,5],[10,5],[15,5],[20,5],[25,5],[30,5],[35,5],[40,5],[45,5],[50,5]]), 45, 'Test 59');
test(minTimeToVisitAllPoints([[1,2],[2,5],[5,4],[7,8],[10,10],[5,5],[3,3],[2,2],[1,1]]), 22, 'Test 60');
test(minTimeToVisitAllPoints([[-500, 500], [500, -500], [-500, -500], [500, 500], [0, 0], [-1000, 1000], [1000, -1000]]), 6500, 'Test 61');
test(minTimeToVisitAllPoints([[0,0],[1,2],[3,4],[5,6],[7,8],[9,10]]), 10, 'Test 62');
test(minTimeToVisitAllPoints([[1,1],[1000,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 2005, 'Test 63');
test(minTimeToVisitAllPoints([[100,100],[200,200],[300,100],[200,0],[100,100]]), 400, 'Test 64');
test(minTimeToVisitAllPoints([[0,0],[10,0],[20,0],[30,0],[40,0],[50,0],[60,0],[70,0],[80,0],[90,0],[100,0]]), 100, 'Test 65');
test(minTimeToVisitAllPoints([[1000,0],[0,1000],[1000,1000],[0,0],[500,500],[250,250],[750,750]]), 4250, 'Test 66');
test(minTimeToVisitAllPoints([[-100, -100], [-50, -100], [0, -100], [50, -100], [100, -100], [100, -50], [100, 0], [100, 50], [100, 100], [50, 100], [0, 100], [-50, 100], [-100, 100], [-100, 50], [-100, 0], [-100, -50]]), 750, 'Test 67');
test(minTimeToVisitAllPoints([[-1,-1],[0,0],[1,1],[2,2],[3,3],[2,2],[1,1],[0,0],[-1,-1]]), 8, 'Test 68');
test(minTimeToVisitAllPoints([[-1,-1],[0,0],[1,1],[0,0],[-1,-1],[1,1],[0,0],[-1,-1],[1,1]]), 10, 'Test 69');
test(minTimeToVisitAllPoints([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16]]), 14, 'Test 70');
test(minTimeToVisitAllPoints([[-100,100],[100,-100],[-100,-100],[100,100],[-100,100]]), 800, 'Test 71');
test(minTimeToVisitAllPoints([[0, 0], [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]]), 16, 'Test 72');
test(minTimeToVisitAllPoints([[-10,10],[20,-20],[30,30],[-40,-40],[50,50],[0,0],[-50,-50]]), 340, 'Test 73');
test(minTimeToVisitAllPoints([[-1,-2],[-3,-4],[-5,-6],[-7,-8],[-9,-10],[-11,-12],[-13,-14],[-15,-16],[-17,-18]]), 16, 'Test 74');
test(minTimeToVisitAllPoints([[-999,999],[0,0],[999,-999],[0,0],[-999,999]]), 3996, 'Test 75');
test(minTimeToVisitAllPoints([[-100,0],[0,-100],[100,0],[0,100],[0,0],[-100,0],[0,-100],[100,0],[0,100]]), 800, 'Test 76');
test(minTimeToVisitAllPoints([[-500,-500],[500,500],[-500,500],[500,-500],[-500,-500],[0,0],[500,500],[0,0]]), 5500, 'Test 77');
test(minTimeToVisitAllPoints([[-100,-100],[0,0],[100,100],[0,0],[-100,-100]]), 400, 'Test 78');
test(minTimeToVisitAllPoints([[0,0],[0,500],[500,0],[1000,500],[500,1000],[0,500],[500,0]]), 3000, 'Test 79');
test(minTimeToVisitAllPoints([[10,10],[5,5],[0,0],[-5,-5],[-10,-10],[-5,-5],[0,0],[5,5],[10,10]]), 40, 'Test 80');
test(minTimeToVisitAllPoints([[-1,0],[0,-1],[1,0],[0,1],[-1,0]]), 4, 'Test 81');
test(minTimeToVisitAllPoints([[-1000,0],[0,1000],[1000,0],[0,-1000],[-1000,-1000]]), 4000, 'Test 82');
test(minTimeToVisitAllPoints([[0,0],[1,0],[2,1],[2,2],[3,3],[3,4],[4,4]]), 6, 'Test 83');
test(minTimeToVisitAllPoints([[1,1],[2,3],[3,5],[4,7],[5,9],[6,11],[7,13],[8,15],[9,17],[10,19]]), 18, 'Test 84');
test(minTimeToVisitAllPoints([[0,0],[0,1],[1,1],[1,0],[0,0],[0,-1],[-1,-1],[-1,0],[0,0]]), 8, 'Test 85');
test(minTimeToVisitAllPoints([[100,100],[200,200],[300,300],[400,400],[500,500],[600,600],[700,700],[800,800],[900,900]]), 800, 'Test 86');
test(minTimeToVisitAllPoints([[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10]]), 10, 'Test 87');
test(minTimeToVisitAllPoints([[0,0],[1,1],[2,0],[1,0],[0,1],[0,2],[1,1]]), 6, 'Test 88');
test(minTimeToVisitAllPoints([[-300,-300],[-200,-200],[-100,-100],[0,0],[100,100],[200,200],[300,300]]), 600, 'Test 89');
test(minTimeToVisitAllPoints([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20]]), 18, 'Test 90');
test(minTimeToVisitAllPoints([[100,0],[90,10],[80,20],[70,30],[60,40],[50,50],[40,60],[30,70],[20,80],[10,90],[0,100]]), 100, 'Test 91');
test(minTimeToVisitAllPoints([[-999,999],[999,-999],[-999,-999],[999,999],[0,0],[-100,100],[100,-100]]), 7293, 'Test 92');
test(minTimeToVisitAllPoints([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]]), 10, 'Test 93');
test(minTimeToVisitAllPoints([[0, 0], [100, 0], [100, 100], [0, 100], [0, 0], [100, 100], [100, 0], [0, 0]]), 700, 'Test 94');
test(minTimeToVisitAllPoints([[500,500],[0,0],[500,0],[0,500],[500,500],[250,250],[750,750],[250,750],[750,250]]), 3750, 'Test 95');
test(minTimeToVisitAllPoints([[100, 0], [50, 50], [0, 100], [-50, 50], [-100, 0], [-50, -50], [0, -100], [50, -50]]), 350, 'Test 96');
test(minTimeToVisitAllPoints([[-1000, 0], [0, -1000], [1000, 0], [0, 1000]]), 3000, 'Test 97');
test(minTimeToVisitAllPoints([[-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7], [-8, -8], [-9, -9], [-10, -10]]), 9, 'Test 98');
test(minTimeToVisitAllPoints([[-10,-10],[10,10],[-5,5],[5,-5],[0,0],[-5,-5],[5,5],[-10,-10],[10,10]]), 100, 'Test 99');
test(minTimeToVisitAllPoints([[-500,-500],[-400,-400],[-300,-300],[-200,-200],[-100,-100],[0,0],[100,100],[200,200],[300,300],[400,400],[500,500]]), 1000, 'Test 100');
test(minTimeToVisitAllPoints([[100, 100], [200, 200], [300, 300], [400, 400], [500, 500], [0, 0]]), 900, 'Test 101');
test(minTimeToVisitAllPoints([[0,0],[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18]]), 18, 'Test 102');
test(minTimeToVisitAllPoints([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]), 9, 'Test 103');
test(minTimeToVisitAllPoints([[-300, -400], [400, 300], [-200, 100], [200, -200], [0, 0]]), 1900, 'Test 104');
test(minTimeToVisitAllPoints([[500,500],[450,550],[400,600],[350,650],[300,700],[250,750],[200,800]]), 300, 'Test 105');
test(minTimeToVisitAllPoints([[0, 0], [100, 100], [200, 0], [300, 100], [400, 0], [500, 100], [600, 0], [700, 100], [800, 0], [900, 100]]), 900, 'Test 106');
test(minTimeToVisitAllPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 10, 'Test 107');
test(minTimeToVisitAllPoints([[-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8],[-9,9]]), 8, 'Test 108');
test(minTimeToVisitAllPoints([[-500,0],[0,500],[500,0],[0,-500],[-500,0],[0,0],[500,500],[-500,-500]]), 4000, 'Test 109');
test(minTimeToVisitAllPoints([[1, 1], [10, 10], [1, 10], [10, 1], [1, 1], [10, 10], [1, 10], [10, 1], [1, 1]]), 72, 'Test 110');
test(minTimeToVisitAllPoints([[-1,-2],[-3,-4],[-5,-6],[-7,-8],[-9,-10],[-11,-12],[-13,-14],[-15,-16],[-17,-18],[-19,-20]]), 18, 'Test 111');
test(minTimeToVisitAllPoints([[0,0],[1000,0],[0,1000],[1000,1000],[500,500],[0,0]]), 4000, 'Test 112');
test(minTimeToVisitAllPoints([[-1, 2], [3, -4], [5, 6], [-7, 8], [9, -10], [-11, 12], [13, -14], [-15, 16], [0, 0]]), 140, 'Test 113');
test(minTimeToVisitAllPoints([[0,0],[1,1],[2,0],[3,1],[4,0],[5,1],[6,0],[7,1],[8,0],[9,1]]), 9, 'Test 114');
test(minTimeToVisitAllPoints([[-1, 1], [1, -1], [-2, 2], [2, -2], [-3, 3], [3, -3], [-4, 4], [4, -4], [-5, 5], [5, -5]]), 54, 'Test 115');
test(minTimeToVisitAllPoints([[-100,-100],[-90,-90],[-80,-80],[-70,-70],[-60,-60],[-50,-50],[-40,-40],[-30,-30],[-20,-20],[-10,-10]]), 90, 'Test 116');
test(minTimeToVisitAllPoints([[-500, 500], [0, 0], [500, -500], [0, 0], [-500, 500], [0, 0], [500, -500], [0, 0]]), 3500, 'Test 117');
test(minTimeToVisitAllPoints([[0,0],[1000,1000],[-1000,-1000],[500,500],[-500,-500],[1,-1],[0,0]]), 6002, 'Test 118');
test(minTimeToVisitAllPoints([[1, 1], [2, 3], [3, 2], [4, 5], [5, 4], [6, 6], [7, 5], [8, 7], [9, 8], [10, 10]]), 15, 'Test 119');
test(minTimeToVisitAllPoints([[-1000, 1000], [1000, 0], [0, 1000], [1000, -1000], [0, 0]]), 6000, 'Test 120');

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
