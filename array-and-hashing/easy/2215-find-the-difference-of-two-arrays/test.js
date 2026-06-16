// Test: 2215. Find The Difference Of Two Arrays
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { findDifference } = require("./solution");

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

console.log("\n2215. Find The Difference Of Two Arrays\n");

test(findDifference([0,-1,-2], [1,-1,2]), [[0, -2], [1, 2]], 'Test 1');
test(findDifference([5,7,8], [9,10,5]), [[8, 7], [9, 10]], 'Test 2');
test(findDifference([1,2,3], []), [[1, 2, 3], []], 'Test 3');
test(findDifference([10,20,30], [5,15,25,35]), [[10, 20, 30], [25, 35, 5, 15]], 'Test 4');
test(findDifference([5,7,8], [9,10,11]), [[8, 5, 7], [9, 10, 11]], 'Test 5');
test(findDifference([1000,-1000], [-1000,1000]), [[], []], 'Test 6');
test(findDifference([1000, -1000], [-1000, 1000]), [[], []], 'Test 7');
test(findDifference([1,1,1,1], [1,1,1,1]), [[], []], 'Test 8');
test(findDifference([1,3,5,7], [2,4,6,8]), [[1, 3, 5, 7], [8, 2, 4, 6]], 'Test 9');
test(findDifference([1,2,3,3], [1,1,2,2]), [[3], []], 'Test 10');
test(findDifference([100,200,300], [100,200,300]), [[], []], 'Test 11');
test(findDifference([1,1,1,1], [2,2,2,2]), [[1], [2]], 'Test 12');
test(findDifference([1,3,5,7,9], [2,4,6,8,10]), [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]], 'Test 13');
test(findDifference([], [1,2,3]), [[], [1, 2, 3]], 'Test 14');
test(findDifference([-1,-2,-3], [-3,-4,-5]), [[-1, -2], [-5, -4]], 'Test 15');
test(findDifference([10,20,30], [30,40,50]), [[10, 20], [40, 50]], 'Test 16');
test(findDifference([5,7,9], [5,8,10]), [[9, 7], [8, 10]], 'Test 17');
test(findDifference([-1,-2,-3], [-2,-3,-4]), [[-1], [-4]], 'Test 18');
test(findDifference([1], [2]), [[1], [2]], 'Test 19');
test(findDifference([-1000,0,1000], [0]), [[-1000, 1000], []], 'Test 20');
test(findDifference([5,6,7], [7,8,9]), [[5, 6], [8, 9]], 'Test 21');
test(findDifference([1,2,3], [2,4,6]), [[1, 3], [4, 6]], 'Test 22');
test(findDifference([1,2,3], [4,5,6]), [[1, 2, 3], [4, 5, 6]], 'Test 23');
test(findDifference([-1,0,1], [0,1,2]), [[-1], [2]], 'Test 24');
test(findDifference([0], [0]), [[], []], 'Test 25');
test(findDifference([0,0,0], [0,0,0]), [[], []], 'Test 26');
test(findDifference([10,20,30], [15,25,35]), [[10, 20, 30], [25, 35, 15]], 'Test 27');
test(findDifference([-1, -2, -3, -4, -5, 0, 5, 10], [-5, -4, -3, -2, -1, 0, 1, 2]), [[10, 5], [1, 2]], 'Test 28');
test(findDifference([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]), [[], []], 'Test 29');
test(findDifference([6, 7, 8, 9, 10], [1, 2, 3, 4, 5]), [[6, 7, 8, 9, 10], [1, 2, 3, 4, 5]], 'Test 30');
test(findDifference([1, 1, 2, 2, 3, 3, 4, 4], [4, 4, 5, 5, 6, 6, 7, 7]), [[1, 2, 3], [5, 6, 7]], 'Test 31');
test(findDifference([-5, -10, -15, -20], [-10, -15, -20, -25]), [[-5], [-25]], 'Test 32');
test(findDifference([1000, 999, 998, 997, 996], [996, 995, 994, 993, 992]), [[1000, 997, 998, 999], [992, 993, 994, 995]], 'Test 33');
test(findDifference([1, 1, 2, 2, 3, 3, 4, 4], [2, 2, 3, 3, 5, 5, 6, 6]), [[1, 4], [5, 6]], 'Test 34');
test(findDifference([10, 20, 30, 40], [30, 40, 50, 60]), [[10, 20], [50, 60]], 'Test 35');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), [[1, 2, 3, 4], [11, 12, 13, 14]], 'Test 36');
test(findDifference([1000, 999, 998], [1000, 1001, 1002, 998]), [[999], [1001, 1002]], 'Test 37');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [[], []], 'Test 38');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [[1, 3, 5, 7, 9, 11, 13, 15, 17, 19], []], 'Test 39');
test(findDifference([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), [[], []], 'Test 40');
test(findDifference([100, 200, 300, 400, 500], [100, 200, 300, 400, 500]), [[], []], 'Test 41');
test(findDifference([100, 200, 300, 400, 500], [200, 400, 600, 800, 1000]), [[100, 500, 300], [800, 1000, 600]], 'Test 42');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]), [[2, 4, 6, 8, 10], []], 'Test 43');
test(findDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [[1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]], 'Test 44');
test(findDifference([0, 0, 0, 0], [1, 1, 1, 1]), [[0], [1]], 'Test 45');
test(findDifference([-1, -2, -3, -4], [-3, -4, -5, -6]), [[-1, -2], [-6, -5]], 'Test 46');
test(findDifference([1, 2, 2, 3, 4, 4, 5], [2, 4, 6, 7, 8, 8, 9]), [[1, 3, 5], [8, 9, 6, 7]], 'Test 47');
test(findDifference([1, 1, 2, 2, 3, 3], [2, 2, 4, 4, 5, 5]), [[1, 3], [4, 5]], 'Test 48');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]], 'Test 49');
test(findDifference([1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [[], [4, 5, 6, 7, 8, 9, 10]], 'Test 50');
test(findDifference([10, 20, 30, 40, 50], [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), [[], [35, 45, 15, 55, 25]], 'Test 51');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), [[2, 4, 6, 8, 10, 12, 14, 16, 18, 20], []], 'Test 52');
test(findDifference([100, 200, 300, 400], [300, 400, 500, 600]), [[200, 100], [600, 500]], 'Test 53');
test(findDifference([-1000, -999, -998], [-1000, -999, -997]), [[-998], [-997]], 'Test 54');
test(findDifference([1000, -1000, 0, 500, -500], [-1000, 0, 500, -500, 1000]), [[], []], 'Test 55');
test(findDifference([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16]), [[1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16]], 'Test 56');
test(findDifference([100, -50, 0, 200, 300], [-50, 0, 100, 400, 500]), [[200, 300], [400, 500]], 'Test 57');
test(findDifference([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [[], []], 'Test 58');
test(findDifference([100, 200, 300, 400], [100, 300, 500, 600]), [[200, 400], [600, 500]], 'Test 59');
test(findDifference([-1, -2, -3, -4, -5], [-5, -4, -3, -2, -1]), [[], []], 'Test 60');
test(findDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), [[], []], 'Test 61');
test(findDifference([0, 0, 0, 0], [0, 1, 2, 3, 4, 5]), [[], [1, 2, 3, 4, 5]], 'Test 62');
test(findDifference([-1, 0, 1], [0, -1, 2]), [[1], [2]], 'Test 63');
test(findDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), [[1], [2]], 'Test 64');
test(findDifference([-1000, -500, 0, 500, 1000], [-1000, -500, 0, 500, 1000]), [[], []], 'Test 65');
test(findDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [-1000, -900, -800, -700, -600, -500, -400, -300, -200, -100]), [[800, 900, 100, 1000, 200, 300, 400, 500, 600, 700], [-800, -700, -600, -500, -400, -900, -300, -200, -1000, -100]], 'Test 66');
test(findDifference([1, 1, 2, 2, 3, 3], [3, 3, 4, 4, 5, 5]), [[1, 2], [4, 5]], 'Test 67');
test(findDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), [[100, 70, 40, 10, 80, 50, 20, 90, 60, 30], [65, 35, 5, 75, 45, 15, 85, 55, 25, 95]], 'Test 68');
test(findDifference([10, 20, 30, 40, 50], [50, 60, 70, 80, 90]), [[40, 10, 20, 30], [80, 90, 60, 70]], 'Test 69');
test(findDifference([10, 20, 30, 40, 50], [5, 15, 25, 35, 45, 55]), [[40, 10, 50, 20, 30], [35, 5, 45, 15, 55, 25]], 'Test 70');
test(findDifference([500, 501, 502, 503, 504], [502, 503, 504, 505, 506]), [[500, 501], [505, 506]], 'Test 71');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [[], []], 'Test 72');
test(findDifference([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), [[40, 10, 50, 20, 30], [35, 5, 45, 15, 25]], 'Test 73');
test(findDifference([-1000, 1000, 0], [0, -1000, 1000]), [[], []], 'Test 74');
test(findDifference([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12]), [[1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12]], 'Test 75');
test(findDifference([100, 200, 300], [300, 200, 100, 400, 500]), [[], [400, 500]], 'Test 76');
test(findDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [[1, 3, 5, 7, 9], [12, 14, 16, 18, 20]], 'Test 77');
test(findDifference([], [1, 2, 3, 4, 5]), [[], [1, 2, 3, 4, 5]], 'Test 78');
test(findDifference([500, 501, 502, 503, 504, 505], [503, 504, 505, 506, 507, 508]), [[500, 501, 502], [506, 507, 508]], 'Test 79');
test(findDifference([-1, -2, -3], [-3, -4, -5]), [[-1, -2], [-5, -4]], 'Test 80');
test(findDifference([10, 20, 30], [30, 20, 10]), [[], []], 'Test 81');
test(findDifference([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]], 'Test 82');
test(findDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), [[], []], 'Test 83');
test(findDifference([100, -50, 200, 300, -100], [-50, 200, 400, 500, -100]), [[100, 300], [400, 500]], 'Test 84');
test(findDifference([1000, 500, -500, -1000], [500, -500, 1000, -1000]), [[], []], 'Test 85');
test(findDifference([1, 2, 3, 4, 5], [5, 6, 7, 8, 9]), [[1, 2, 3, 4], [8, 9, 6, 7]], 'Test 86');
test(findDifference([1000, -1000, 500, -500, 0], [0, 500, -500, 1000, -1000]), [[], []], 'Test 87');
test(findDifference([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), [[], []], 'Test 88');
test(findDifference([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]], 'Test 89');
test(findDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), [[], []], 'Test 90');
test(findDifference([10, 20, 30], [30, 40, 50, 10, 20]), [[], [40, 50]], 'Test 91');
test(findDifference([500, 600, 700], [800, 900, 1000, 500, 600]), [[700], [800, 1000, 900]], 'Test 92');
test(findDifference([100, -50, 23, 7, 3, 100], [-50, 23, 8, 9, 100, 101]), [[3, 7], [8, 9, 101]], 'Test 93');
test(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), [[], []], 'Test 94');
test(findDifference([0, 1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 0]), [[1, 2, 3, 4], [8, 9, 6, 7]], 'Test 95');
test(findDifference([100, 200, 300, 400, 500], [150, 250, 350, 450, 550]), [[100, 200, 300, 400, 500], [450, 550, 150, 250, 350]], 'Test 96');
test(findDifference([100, 200, 300, 400, 500], [500, 600, 700, 800, 900]), [[200, 100, 400, 300], [800, 700, 600, 900]], 'Test 97');
test(findDifference([-10, -20, -30], [-30, -40, -50, -10]), [[-20], [-40, -50]], 'Test 98');
test(findDifference([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], 'Test 99');
test(findDifference([100, 200, 300, 400], [100, 200, 300, 500]), [[400], [500]], 'Test 100');
test(findDifference([100, 200, 300, 400, 500], [101, 201, 301, 401, 501]), [[100, 200, 300, 400, 500], [101, 201, 301, 401, 501]], 'Test 101');
test(findDifference([-1, -2, -3, -4, -5], [-5, -6, -7, -8, -9]), [[-4, -3, -2, -1], [-8, -7, -6, -9]], 'Test 102');
test(findDifference([0, -1, -2, -3, -4], [-2, -4, -6, -8, -10]), [[0, -3, -1], [-8, -6, -10]], 'Test 103');
test(findDifference([100, 200, 300], [100, 200, 300, 400, 500]), [[], [400, 500]], 'Test 104');
test(findDifference([-1, -2, -3, -4], [-4, -5, -6, -7]), [[-3, -1, -2], [-7, -6, -5]], 'Test 105');
test(findDifference([0, 1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]), [[0, 1, 2], [8, 6, 7]], 'Test 106');
test(findDifference([-1000, -500, 0, 500, 1000], [1000, 500, 0, -500, -1000]), [[], []], 'Test 107');
test(findDifference([10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), [[40, 10, 50, 20, 30], [35, 45, 15, 55, 25]], 'Test 108');
test(findDifference([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [1, 6, 11, 16, 21, 26, 31, 36, 41, 46]), [[35, 5, 40, 10, 45, 15, 50, 20, 25, 30], [1, 36, 6, 41, 11, 46, 16, 21, 26, 31]], 'Test 109');
test(findDifference([1, 2, 3, 4, 5], []), [[1, 2, 3, 4, 5], []], 'Test 110');
test(findDifference([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], [3, 3, 4, 4, 5, 5, 6, 6]), [[1, 2], [5, 6]], 'Test 111');
test(findDifference([-1000, -999, -998, -997], [-999, -998, -997, -996]), [[-1000], [-996]], 'Test 112');

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
