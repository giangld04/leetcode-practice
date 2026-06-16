// Test: 836. Rectangle Overlap
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { isRectangleOverlap } = require("./solution");

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

console.log("\n836. Rectangle Overlap\n");

test(isRectangleOverlap([-5,-5,-3,-3], [-4,-4,-2,-2]), true, 'Test 1');
test(isRectangleOverlap([1,1,5,5], [4,4,8,8]), true, 'Test 2');
test(isRectangleOverlap([-5,-5,-2,-2], [-4,-4,-1,-1]), true, 'Test 3');
test(isRectangleOverlap([-2,-2,0,0], [-1,-1,1,1]), true, 'Test 4');
test(isRectangleOverlap([1,1,4,4], [0,0,3,3]), true, 'Test 5');
test(isRectangleOverlap([5,5,10,10], [1,1,6,6]), true, 'Test 6');
test(isRectangleOverlap([5,5,10,10], [8,8,15,15]), true, 'Test 7');
test(isRectangleOverlap([0,0,5,5], [5,5,10,10]), false, 'Test 8');
test(isRectangleOverlap([0,0,1,1], [2,2,3,3]), false, 'Test 9');
test(isRectangleOverlap([1,1,3,3], [2,2,4,4]), true, 'Test 10');
test(isRectangleOverlap([1,1,2,2], [2,2,3,3]), false, 'Test 11');
test(isRectangleOverlap([1,1,3,3], [0,0,1,1]), false, 'Test 12');
test(isRectangleOverlap([5,5,10,10], [10,10,15,15]), false, 'Test 13');
test(isRectangleOverlap([5,5,10,10], [11,11,16,16]), false, 'Test 14');
test(isRectangleOverlap([0,0,1,1], [1,0,2,1]), false, 'Test 15');
test(isRectangleOverlap([-5,-5,-2,-2], [-3,-3,-1,-1]), true, 'Test 16');
test(isRectangleOverlap([0,0,2,2], [1,1,3,3]), true, 'Test 17');
test(isRectangleOverlap([1,1,3,3], [0,0,2,2]), true, 'Test 18');
test(isRectangleOverlap([5,5,10,10], [6,6,11,11]), true, 'Test 19');
test(isRectangleOverlap([-1,-1,1,1], [0,0,2,2]), true, 'Test 20');
test(isRectangleOverlap([-200000000, -200000000, -100000000, -100000000], [-150000000, -150000000, -50000000, -50000000]), true, 'Test 21');
test(isRectangleOverlap([0, 0, 10, 10], [10, 10, 20, 20]), false, 'Test 22');
test(isRectangleOverlap([0, 0, 2, 2], [1, -1, 3, 1]), true, 'Test 23');
test(isRectangleOverlap([1, 2, 3, 4], [2, 3, 5, 6]), true, 'Test 24');
test(isRectangleOverlap([1,2,3,4], [2,3,4,5]), true, 'Test 25');
test(isRectangleOverlap([0, 0, 1000, 1000], [500, 500, 1500, 1500]), true, 'Test 26');
test(isRectangleOverlap([-1,-1,1,1], [-2,-2,0,0]), true, 'Test 27');
test(isRectangleOverlap([0, 0, 5, 5], [5, 5, 10, 10]), false, 'Test 28');
test(isRectangleOverlap([10,20,30,40], [25,35,45,55]), true, 'Test 29');
test(isRectangleOverlap([0, 0, 5, 5], [6, 6, 10, 10]), false, 'Test 30');
test(isRectangleOverlap([0, 0, 10, 10], [-5, -5, 5, 5]), true, 'Test 31');
test(isRectangleOverlap([0,0,5,5], [5,0,10,5]), false, 'Test 32');
test(isRectangleOverlap([-5, 0, 5, 10], [0, -10, 10, 0]), false, 'Test 33');
test(isRectangleOverlap([100, 200, 300, 400], [250, 250, 350, 350]), true, 'Test 34');
test(isRectangleOverlap([1000, 1000, 2000, 2000], [500, 500, 1500, 1500]), true, 'Test 35');
test(isRectangleOverlap([0,0,10,10], [5,-5,15,5]), true, 'Test 36');
test(isRectangleOverlap([0,0,1,1], [0.9,0.9,2,2]), true, 'Test 37');
test(isRectangleOverlap([-1000000000,-1000000000,1000000000,1000000000], [0,0,1,1]), true, 'Test 38');
test(isRectangleOverlap([0, 0, 1, 1], [-1, -1, 0, 0]), false, 'Test 39');
test(isRectangleOverlap([-10,-10,0,0], [0,0,10,10]), false, 'Test 40');
test(isRectangleOverlap([0,0,100,100], [50,50,150,150]), true, 'Test 41');
test(isRectangleOverlap([0, 0, 10, 10], [5, 5, 15, 15]), true, 'Test 42');
test(isRectangleOverlap([-5, -5, 5, 5], [-10, -10, -5, -5]), false, 'Test 43');
test(isRectangleOverlap([10,20,30,40], [25,35,35,45]), true, 'Test 44');
test(isRectangleOverlap([0, 0, 100, 100], [99, 99, 200, 200]), true, 'Test 45');
test(isRectangleOverlap([0, 0, 1, 1], [0.5, 0.5, 1.5, 1.5]), true, 'Test 46');
test(isRectangleOverlap([10, 10, 15, 15], [12, 12, 18, 18]), true, 'Test 47');
test(isRectangleOverlap([10, 10, 20, 20], [5, 5, 15, 15]), true, 'Test 48');
test(isRectangleOverlap([-100,100,-50,150], [-75,125,-25,175]), true, 'Test 49');
test(isRectangleOverlap([1,1,4,4], [2,2,3,3]), true, 'Test 50');
test(isRectangleOverlap([-100, -200, -50, -150], [-75, -175, -25, -125]), true, 'Test 51');
test(isRectangleOverlap([0,0,5,5], [0,5,5,10]), false, 'Test 52');
test(isRectangleOverlap([-10, -10, 0, 0], [-5, -5, 5, 5]), true, 'Test 53');
test(isRectangleOverlap([0, 0, 1, 1], [0, 1, 1, 2]), false, 'Test 54');
test(isRectangleOverlap([10,10,20,20], [15,15,25,25]), true, 'Test 55');
test(isRectangleOverlap([-10,20,-5,25], [-7,15,-2,22]), true, 'Test 56');
test(isRectangleOverlap([0, 0, 1, 1], [0, -1, 1, 0]), false, 'Test 57');
test(isRectangleOverlap([0, 0, 10, 10], [5, -5, 15, 5]), true, 'Test 58');
test(isRectangleOverlap([10, 10, 20, 20], [10, 10, 20, 20]), true, 'Test 59');
test(isRectangleOverlap([100, 100, 200, 200], [200, 200, 300, 300]), false, 'Test 60');
test(isRectangleOverlap([1, 1, 5, 5], [5, 5, 9, 9]), false, 'Test 61');
test(isRectangleOverlap([-1,0,0,1], [0,-1,1,0]), false, 'Test 62');
test(isRectangleOverlap([-1, -1, 1, 1], [1, 1, 2, 2]), false, 'Test 63');
test(isRectangleOverlap([-10, -20, -5, -15], [-7, -18, -3, -12]), true, 'Test 64');
test(isRectangleOverlap([1000000000, 1000000000, 2000000000, 2000000000], [1500000000, 1500000000, 2500000000, 2500000000]), true, 'Test 65');
test(isRectangleOverlap([-10, -10, 10, 10], [-5, -5, 5, 5]), true, 'Test 66');
test(isRectangleOverlap([1,1,5,5], [1,6,5,10]), false, 'Test 67');
test(isRectangleOverlap([0, 0, 10, 10], [10, 0, 20, 10]), false, 'Test 68');
test(isRectangleOverlap([1, 2, 3, 4], [4, 3, 5, 2]), false, 'Test 69');
test(isRectangleOverlap([-1000000000, -1000000000, 1000000000, 1000000000], [0, 0, 1, 1]), true, 'Test 70');
test(isRectangleOverlap([1,1,5,5], [1,1,6,6]), true, 'Test 71');
test(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]), false, 'Test 72');
test(isRectangleOverlap([100000000, 100000000, 200000000, 200000000], [150000000, 150000000, 250000000, 250000000]), true, 'Test 73');
test(isRectangleOverlap([1,1,5,5], [6,1,10,5]), false, 'Test 74');
test(isRectangleOverlap([10, 20, 30, 40], [25, 35, 45, 55]), true, 'Test 75');
test(isRectangleOverlap([0,0,1,1], [1,1,2,2]), false, 'Test 76');
test(isRectangleOverlap([1, 2, 3, 4], [3, 4, 5, 6]), false, 'Test 77');
test(isRectangleOverlap([0, 0, 10, 10], [9, 9, 11, 11]), true, 'Test 78');
test(isRectangleOverlap([0, 0, 1, 1], [1.5, 1.5, 2.5, 2.5]), false, 'Test 79');
test(isRectangleOverlap([1000, 1000, 2000, 2000], [1500, 1500, 2500, 2500]), true, 'Test 80');
test(isRectangleOverlap([-10, -10, 10, 10], [9, 9, 20, 20]), true, 'Test 81');
test(isRectangleOverlap([-500000000, -500000000, 500000000, 500000000], [0, 0, 1, 1]), true, 'Test 82');
test(isRectangleOverlap([0, 0, 100, 100], [90, 90, 200, 200]), true, 'Test 83');
test(isRectangleOverlap([1, 1, 4, 4], [4, 4, 7, 7]), false, 'Test 84');
test(isRectangleOverlap([10,10,20,20], [21,21,30,30]), false, 'Test 85');
test(isRectangleOverlap([0,0,5,5], [-5,-5,0,0]), false, 'Test 86');
test(isRectangleOverlap([10,10,20,20], [20,20,30,30]), false, 'Test 87');
test(isRectangleOverlap([2, 2, 5, 5], [5, 5, 8, 8]), false, 'Test 88');
test(isRectangleOverlap([1, 2, 4, 5], [3, 3, 6, 6]), true, 'Test 89');
test(isRectangleOverlap([0, 0, 10, 10], [-10, -10, 0, 0]), false, 'Test 90');
test(isRectangleOverlap([-1, -1, 1, 1], [0, 0, 2, 2]), true, 'Test 91');
test(isRectangleOverlap([-100, -100, 0, 0], [-50, -50, 50, 50]), true, 'Test 92');
test(isRectangleOverlap([-1000000,-1000000,-900000,-900000], [-950000,-950000,-850000,-850000]), true, 'Test 93');
test(isRectangleOverlap([0, 0, 1000000000, 1000000000], [500000000, 500000000, 1500000000, 1500000000]), true, 'Test 94');
test(isRectangleOverlap([-100, -100, 0, 0], [0, 0, 100, 100]), false, 'Test 95');
test(isRectangleOverlap([10, 20, 30, 40], [25, 30, 35, 45]), true, 'Test 96');
test(isRectangleOverlap([0,0,1,1], [0.5,0.5,1.5,1.5]), true, 'Test 97');
test(isRectangleOverlap([-20, -20, -10, -10], [-15, -15, -5, -5]), true, 'Test 98');
test(isRectangleOverlap([15, 25, 30, 45], [20, 30, 40, 50]), true, 'Test 99');
test(isRectangleOverlap([1,1,2,2], [1.5,1.5,2.5,2.5]), true, 'Test 100');
test(isRectangleOverlap([1,1,10,10], [5,5,5,10]), true, 'Test 101');
test(isRectangleOverlap([-1, -1, 1, 1], [-2, -2, 0, 0]), true, 'Test 102');
test(isRectangleOverlap([100,100,200,200], [150,150,250,250]), true, 'Test 103');
test(isRectangleOverlap([0, 0, 1, 1], [1, 1, 2, 2]), false, 'Test 104');
test(isRectangleOverlap([1,2,3,4], [2,1,4,3]), true, 'Test 105');
test(isRectangleOverlap([0, 0, 5, 5], [-5, -5, 0, 0]), false, 'Test 106');
test(isRectangleOverlap([-2,-2,2,2], [2,2,4,4]), false, 'Test 107');
test(isRectangleOverlap([0, 0, 100, 100], [50, 50, 150, 150]), true, 'Test 108');
test(isRectangleOverlap([-1, -1, 1, 1], [-2, -2, 2, 2]), true, 'Test 109');
test(isRectangleOverlap([0,0,1000000000,1000000000], [500000000,500000000,1500000000,1500000000]), true, 'Test 110');
test(isRectangleOverlap([10, 10, 20, 20], [15, 15, 25, 25]), true, 'Test 111');
test(isRectangleOverlap([-1000000000, -1000000000, 0, 0], [-500000000, -500000000, 500000000, 500000000]), true, 'Test 112');
test(isRectangleOverlap([-10,-10,0,0], [-5,-5,5,5]), true, 'Test 113');
test(isRectangleOverlap([10, 10, 20, 20], [20, 20, 30, 30]), false, 'Test 114');
test(isRectangleOverlap([0, 0, 10, 10], [2, 2, 8, 8]), true, 'Test 115');
test(isRectangleOverlap([-10, -10, -5, -5], [-8, -8, -3, -3]), true, 'Test 116');
test(isRectangleOverlap([-1000, -1000, 1000, 1000], [-2000, -2000, 0, 0]), true, 'Test 117');
test(isRectangleOverlap([5, 5, 15, 15], [5, 15, 15, 25]), false, 'Test 118');
test(isRectangleOverlap([100, 100, 200, 200], [150, 150, 250, 250]), true, 'Test 119');
test(isRectangleOverlap([1,1,2,2], [0,0,100,100]), true, 'Test 120');
test(isRectangleOverlap([-1, -2, 1, 2], [-2, -3, 2, 3]), true, 'Test 121');
test(isRectangleOverlap([-1000000000,-1000000000,0,0], [-500000000,-500000000,500000000,500000000]), true, 'Test 122');

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
