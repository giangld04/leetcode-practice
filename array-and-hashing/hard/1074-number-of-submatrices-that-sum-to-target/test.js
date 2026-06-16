// Test: 1074. Number Of Submatrices That Sum To Target
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { numSubmatrixSumTarget } = require("./solution");

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

console.log("\n1074. Number Of Submatrices That Sum To Target\n");

test(numSubmatrixSumTarget([[1]], 1), 1, 'Test 1');
test(numSubmatrixSumTarget([[1,2,3],[4,5,6]], 12), 1, 'Test 2');
test(numSubmatrixSumTarget([[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]], -9), 1, 'Test 3');
test(numSubmatrixSumTarget([[0,0,0],[0,0,0],[0,0,0]], 0), 36, 'Test 4');
test(numSubmatrixSumTarget([[1,2],[3,4]], 3), 2, 'Test 5');
test(numSubmatrixSumTarget([[904]], 0), 0, 'Test 6');
test(numSubmatrixSumTarget([[1,-1,0],[0,0,0],[0,0,0]], -1), 6, 'Test 7');
test(numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]], 0), 4, 'Test 8');
test(numSubmatrixSumTarget([[1,-1],[-1,1]], 0), 5, 'Test 9');
test(numSubmatrixSumTarget([[1,2,3],[4,5,6],[7,8,9]], 15), 4, 'Test 10');
test(numSubmatrixSumTarget([[1, -1, 1, -1], [-1, 1, -1, 1], [1, -1, 1, -1], [-1, 1, -1, 1]], 0), 64, 'Test 11');
test(numSubmatrixSumTarget([[-1,0,1,-1,1],[0,1,-1,1,-1],[1,-1,1,-1,1],[-1,1,-1,1,-1],[1,-1,1,-1,1]], 0), 128, 'Test 12');
test(numSubmatrixSumTarget([[5, 1, 2, 3], [1, 6, 4, 5], [2, 4, 7, 8], [3, 5, 8, 9]], 18), 0, 'Test 13');
test(numSubmatrixSumTarget([[1,-1,1,-1],[1,-1,1,-1],[-1,1,-1,1],[-1,1,-1,1]], 0), 52, 'Test 14');
test(numSubmatrixSumTarget([[1,2],[3,4],[5,6],[7,8]], 10), 2, 'Test 15');
test(numSubmatrixSumTarget([[-1, 2, -3, 4], [-2, 3, -4, 5], [-3, 4, -5, 6], [-4, 5, -6, 7]], 10), 0, 'Test 16');
test(numSubmatrixSumTarget([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]], 45), 2, 'Test 17');
test(numSubmatrixSumTarget([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]], -3), 6, 'Test 18');
test(numSubmatrixSumTarget([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 0), 100, 'Test 19');
test(numSubmatrixSumTarget([[-1, 1, -1], [1, -1, 1], [-1, 1, -1]], 0), 20, 'Test 20');
test(numSubmatrixSumTarget([[10, 20, 10], [20, 30, 20], [10, 20, 10]], 60), 0, 'Test 21');
test(numSubmatrixSumTarget([[1,2],[2,1],[1,2],[2,1]], 3), 10, 'Test 22');
test(numSubmatrixSumTarget([[1, 2], [3, 4], [5, 6], [7, 8]], 10), 2, 'Test 23');
test(numSubmatrixSumTarget([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]], 10), 2, 'Test 24');
test(numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15), 4, 'Test 25');
test(numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], 21), 4, 'Test 26');
test(numSubmatrixSumTarget([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]], 15), 6, 'Test 27');
test(numSubmatrixSumTarget([[5, 1, -2, 4], [2, 1, 0, 3], [-1, 3, -1, 2], [0, 2, 1, -1]], 3), 10, 'Test 28');
test(numSubmatrixSumTarget([[-1,1,2,-1],[1,1,-1,1],[-2,-2,1,2]], 0), 8, 'Test 29');
test(numSubmatrixSumTarget([[1000, -1000, 1000], [-1000, 1000, -1000], [1000, -1000, 1000]], 0), 20, 'Test 30');
test(numSubmatrixSumTarget([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], 4), 17, 'Test 31');
test(numSubmatrixSumTarget([[1,-2,3],[-4,5,-6],[7,-8,9]], -5), 2, 'Test 32');
test(numSubmatrixSumTarget([[1, -1, 0], [0, 1, -1], [-1, 0, 1]], 0), 19, 'Test 33');
test(numSubmatrixSumTarget([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 0), 60, 'Test 34');
test(numSubmatrixSumTarget([[-1, 2, -3, 4, 5], [2, -1, 3, -4, 6], [-3, 2, -1, 4, -5], [4, -3, 2, -1, 5]], 3), 19, 'Test 35');
test(numSubmatrixSumTarget([[1, 0, 1], [0, -1, 0], [1, 0, 1]], 2), 4, 'Test 36');
test(numSubmatrixSumTarget([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 20), 1, 'Test 37');
test(numSubmatrixSumTarget([[1, 2, 3], [1, 2, 3], [1, 2, 3]], 6), 8, 'Test 38');
test(numSubmatrixSumTarget([[5,-1,3],[-3,0,5],[3,-2,-1]], 4), 3, 'Test 39');
test(numSubmatrixSumTarget([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], 0), 100, 'Test 40');
test(numSubmatrixSumTarget([[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]], -15), 4, 'Test 41');
test(numSubmatrixSumTarget([[5, -4, -3, 4], [-3, -4, 4, 5], [5, 1, 5, -4]], 5), 6, 'Test 42');
test(numSubmatrixSumTarget([[-10, 20, -30], [40, -50, 60], [-70, 80, -90]], -50), 2, 'Test 43');
test(numSubmatrixSumTarget([[-1, 0, 1], [2, 3, 4], [5, 6, 7]], 10), 0, 'Test 44');
test(numSubmatrixSumTarget([[1, -2, 3, -4], [-4, 3, -2, 1], [2, -3, 4, -5], [-5, 4, -3, 2]], -6), 4, 'Test 45');
test(numSubmatrixSumTarget([[0, 1, 2], [3, 4, 5], [6, 7, 8]], 12), 3, 'Test 46');
test(numSubmatrixSumTarget([[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]], 1), 40, 'Test 47');
test(numSubmatrixSumTarget([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 25), 0, 'Test 48');
test(numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 30), 0, 'Test 49');
test(numSubmatrixSumTarget([[10, -10, 20, -20], [-10, 10, -20, 20], [20, -20, 30, -30], [-20, 20, -30, 30]], 0), 52, 'Test 50');
test(numSubmatrixSumTarget([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 150), 4, 'Test 51');
test(numSubmatrixSumTarget([[1, -2, 3, -4, 5], [6, -7, 8, -9, 10], [-11, 12, -13, 14, -15], [16, -17, 18, -19, 20]], 5), 10, 'Test 52');
test(numSubmatrixSumTarget([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]], 60), 3, 'Test 53');
test(numSubmatrixSumTarget([[5, 5, 5], [5, 5, 5], [5, 5, 5]], 15), 6, 'Test 54');
test(numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0],[1,0,1],[0,1,0]], 1), 33, 'Test 55');
test(numSubmatrixSumTarget([[1,0,-1,1],[2,3,2,-1],[-1,-1,-1,-1],[1,1,1,1]], 1), 18, 'Test 56');
test(numSubmatrixSumTarget([[-10, -20, -30], [-20, -30, -40], [-30, -40, -50]], -70), 4, 'Test 57');
test(numSubmatrixSumTarget([[1,0,1],[0,1,0],[1,0,1]], 2), 8, 'Test 58');
test(numSubmatrixSumTarget([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 30), 4, 'Test 59');
test(numSubmatrixSumTarget([[100, 200, 300], [400, 500, 600], [700, 800, 900]], 1500), 4, 'Test 60');
test(numSubmatrixSumTarget([[-1, 2, -3, 4], [-5, 6, -7, 8], [9, -10, 11, -12], [-13, 14, -15, 16]], 0), 9, 'Test 61');
test(numSubmatrixSumTarget([[1, 0, 1], [0, -2, 3]], 2), 2, 'Test 62');
test(numSubmatrixSumTarget([[10,20,30],[40,50,60],[70,80,90]], 150), 4, 'Test 63');
test(numSubmatrixSumTarget([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 3), 6, 'Test 64');
test(numSubmatrixSumTarget([[1, 2, -3, 4], [-1, 0, 2, 1], [3, -2, 1, 4], [0, 1, -1, 2]], 5), 4, 'Test 65');
test(numSubmatrixSumTarget([[1, 2, 3], [3, 2, 1], [4, 5, 6], [6, 5, 4]], 9), 3, 'Test 66');
test(numSubmatrixSumTarget([[-1, 2, 3], [-4, 5, -6], [7, -8, 9]], 5), 3, 'Test 67');
test(numSubmatrixSumTarget([[-1,2,-3,4,-5],[5,-6,7,-8,9],[-9,10,-11,12,-13],[14,-15,16,-17,18],[-19,20,-21,22,-23]], 0), 36, 'Test 68');
test(numSubmatrixSumTarget([[1, 2, 3], [2, 3, 4], [3, 4, 5]], 9), 4, 'Test 69');
test(numSubmatrixSumTarget([[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]], -15), 4, 'Test 70');
test(numSubmatrixSumTarget([[0, 1, 0], [1, 1, 1], [0, 1, 0], [1, 1, 1], [0, 1, 0]], 1), 30, 'Test 71');
test(numSubmatrixSumTarget([[1,2,-1,-4,-20],[2,3,-2,-3,-15],[3,4,-3,-2,-10],[4,5,-4,-1,-5]], -5), 9, 'Test 72');
test(numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]], 30), 2, 'Test 73');
test(numSubmatrixSumTarget([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 24), 3, 'Test 74');
test(numSubmatrixSumTarget([[10, 20, 30], [20, 30, 40], [30, 40, 50]], 70), 4, 'Test 75');
test(numSubmatrixSumTarget([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 0), 36, 'Test 76');
test(numSubmatrixSumTarget([[1, 2], [3, 4], [5, 6]], 10), 2, 'Test 77');
test(numSubmatrixSumTarget([[-1, 2, -3, 4], [2, -2, 1, 1], [-1, 3, -2, 2], [1, -1, 2, -2]], 0), 16, 'Test 78');
test(numSubmatrixSumTarget([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]], 2), 56, 'Test 79');
test(numSubmatrixSumTarget([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1), 16, 'Test 80');
test(numSubmatrixSumTarget([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 10), 3, 'Test 81');
test(numSubmatrixSumTarget([[1, -1, 1], [-1, 1, -1], [1, -1, 1]], 0), 20, 'Test 82');

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
