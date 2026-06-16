// Test: 1458. Max Dot Product Of Two Subsequences
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { maxDotProduct } = require("./solution");

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

console.log("\n1458. Max Dot Product Of Two Subsequences\n");

test(maxDotProduct([-1,0,1], [-1,0,1]), 2, 'Test 1');
test(maxDotProduct([2,1,-2,5], [3,0,-6]), 18, 'Test 2');
test(maxDotProduct([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]), 46, 'Test 3');
test(maxDotProduct([1, 3, -5, 4], [-2, -4, 0, 3]), 32, 'Test 4');
test(maxDotProduct([-1,-1], [1,1]), -1, 'Test 5');
test(maxDotProduct([1000, -1000], [-1000, 1000]), 1000000, 'Test 6');
test(maxDotProduct([-1000, 1000], [-1000, 1000]), 2000000, 'Test 7');
test(maxDotProduct([5,4,-3], [4,-1,-2]), 26, 'Test 8');
test(maxDotProduct([1,2,3,4,5], [5,4,3,2,1]), 46, 'Test 9');
test(maxDotProduct([1000], [-1000]), -1000000, 'Test 10');
test(maxDotProduct([0,1,2,3,4], [5,6,7,8,9]), 80, 'Test 11');
test(maxDotProduct([-1000], [1000]), -1000000, 'Test 12');
test(maxDotProduct([3,-2], [2,-6,7]), 21, 'Test 13');
test(maxDotProduct([1,2,3,4], [-3,-2,-1,0]), 0, 'Test 14');
test(maxDotProduct([5,4,3,2,1], [1,2,3,4,5]), 46, 'Test 15');
test(maxDotProduct([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 46, 'Test 16');
test(maxDotProduct([1, 2, 3], [3, 2, 1]), 12, 'Test 17');
test(maxDotProduct([1,2,3], [-5,-4,-3]), -3, 'Test 18');
test(maxDotProduct([1,2,3], [4,5,6]), 32, 'Test 19');
test(maxDotProduct([5, 4, 3], [1, 2, 3]), 22, 'Test 20');
test(maxDotProduct([5,5,2,1,5], [1,2,4,2,5]), 59, 'Test 21');
test(maxDotProduct([1], [1]), 1, 'Test 22');
test(maxDotProduct([-5, -4, -3, -2, -1], [-1, -2, -3, -4, -5]), 46, 'Test 23');
test(maxDotProduct([0,0,0], [0,0,0]), 0, 'Test 24');
test(maxDotProduct([-5,-4,-3,-2,-1], [1,2,3,4,5]), -1, 'Test 25');
test(maxDotProduct([999, -999, 999, -999, 999], [-999, 999, -999, 999, -999]), 3992004, 'Test 26');
test(maxDotProduct([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]), 0, 'Test 27');
test(maxDotProduct([5, 2, -4, 7, -8], [3, -1, 6, -3, 2]), 85, 'Test 28');
test(maxDotProduct([0, 0, 0, 0], [1, 2, 3, 4]), 0, 'Test 29');
test(maxDotProduct([1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1]), 5, 'Test 30');
test(maxDotProduct([1, -1, 1, -1, 1], [1, -1, 1, -1, 1]), 5, 'Test 31');
test(maxDotProduct([5, 3, -4, 2, 1], [-2, 6, 3, -5, 4]), 67, 'Test 32');
test(maxDotProduct([5, 3, -2, 4], [1, 2, 3, 4, 5]), 47, 'Test 33');
test(maxDotProduct([100, -100, 200, -200, 300], [1, -1, 2, -2, 3]), 1900, 'Test 34');
test(maxDotProduct([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], [-5, 5, -4, 4, -3, 3, -2, 2, -1, 1]), 90, 'Test 35');
test(maxDotProduct([100, -100, 200, -200], [-100, 100, -200, 200]), 70000, 'Test 36');
test(maxDotProduct([10, 20, 30, 40, 50], [-1, -2, -3, -4, -5]), -10, 'Test 37');
test(maxDotProduct([-10, -20, -30, -40, -50], [1, 2, 3, 4, 5]), -10, 'Test 38');
test(maxDotProduct([999, 1000, -999, -1000], [-999, 999, -1000, 1000]), 1999000, 'Test 39');
test(maxDotProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), -100, 'Test 40');
test(maxDotProduct([10, 20, 30, 40, 50], [-10, -20, -30, -40, -50]), -100, 'Test 41');
test(maxDotProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 320, 'Test 42');
test(maxDotProduct([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], [1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 81, 'Test 43');
test(maxDotProduct([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), 125, 'Test 44');
test(maxDotProduct([5, -10, 15, -20, 25], [-5, 10, -15, 20]), 1000, 'Test 45');
test(maxDotProduct([1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 46, 'Test 46');
test(maxDotProduct([100, -100, 200, -200, 300, -300], [10, -10, 20, -20, 30, -30]), 28000, 'Test 47');
test(maxDotProduct([0, 1, -1, 2, -2, 3, -3], [3, -3, 2, -2, 1, -1, 0]), 24, 'Test 48');
test(maxDotProduct([5, -3, 10, 2, -7], [8, 4, -2, 6, 1]), 108, 'Test 49');
test(maxDotProduct([-500, -400, -300, -200, -100], [100, 200, 300, 400, 500]), -10000, 'Test 50');
test(maxDotProduct([-5, -3, -2, -4], [-1, -2, -3, -4, -5]), 47, 'Test 51');
test(maxDotProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1029, 'Test 52');
test(maxDotProduct([1, 2, 3], [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 74, 'Test 53');
test(maxDotProduct([100, 0, 200, 0, 300, 0, 400, 0, 500, 0], [0, 500, 0, 400, 0, 300, 0, 200, 0, 100]), 460000, 'Test 54');
test(maxDotProduct([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]), 190, 'Test 55');
test(maxDotProduct([10, -10, 20, -20, 30], [30, -30, 20, -20, 10]), 1800, 'Test 56');
test(maxDotProduct([-1, 0, 1, 0, -1], [-1, 0, 1, 0, -1]), 3, 'Test 57');
test(maxDotProduct([5, 4, 3, 2, 1], [-1, -2, -3, -4, -5]), -1, 'Test 58');
test(maxDotProduct([5, -3, 8, -1, 7], [-2, 4, 1, -5, 3]), 64, 'Test 59');
test(maxDotProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3]), 56, 'Test 60');
test(maxDotProduct([-1, -2, -3, -4, -5], [5, 4, 3, 2, 1]), -1, 'Test 61');
test(maxDotProduct([100, 200, 300, 400, 500], [-100, -200, -300, -400, -500]), -10000, 'Test 62');
test(maxDotProduct([1000, 900, 800, 700, 600], [10, 20, 30, 40, 50]), 114000, 'Test 63');
test(maxDotProduct([5, -3, 2, 1, 6], [-1, 2, -3, 4, 5]), 57, 'Test 64');
test(maxDotProduct([1, 2, 3], [100, 200, 300, 400, 500]), 2600, 'Test 65');
test(maxDotProduct([-1, -2, -3, -4, -5], [-5, -4, -3, -2, -1]), 46, 'Test 66');
test(maxDotProduct([-5, -4, -3, -2, -1], [1, 2, 3, 4, 5]), -1, 'Test 67');
test(maxDotProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), -1, 'Test 68');
test(maxDotProduct([1, -2, 3, -4, 5], [-5, 4, -3, 2, -1]), 44, 'Test 69');
test(maxDotProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 385, 'Test 70');
test(maxDotProduct([100, 200, 300, 400, 500], [1, 2, 3]), 2600, 'Test 71');
test(maxDotProduct([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], [-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 38500, 'Test 72');
test(maxDotProduct([999, -999, 888, -888, 777, -777], [-666, 666, -555, 555, -444, 444, -333, 333]), 2710620, 'Test 73');
test(maxDotProduct([1, -1, 1, -1, 1], [-1, 1, -1, 1, -1]), 4, 'Test 74');
test(maxDotProduct([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), 4750, 'Test 75');
test(maxDotProduct([1000, 999, 998, 997, 996], [1, 2, 3, 4, 5]), 14960, 'Test 76');
test(maxDotProduct([5, 4, 3, 2, 1], [100, 200, 300]), 2200, 'Test 77');
test(maxDotProduct([100, -100, 200, -200], [300, -300, 400, -400]), 220000, 'Test 78');
test(maxDotProduct([1, 2, 3], [4, 5, 6, 7, 8, 9, 10, 11, 12]), 68, 'Test 79');
test(maxDotProduct([1, 2, 3], [-1, -2, -3, 4, 5]), 23, 'Test 80');
test(maxDotProduct([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 81');
test(maxDotProduct([5, -3, 8, 1], [-7, 4, 6, -2]), 69, 'Test 82');
test(maxDotProduct([1, 3, -5, 7, -9], [-9, 7, -5, 3, 1]), 139, 'Test 83');
test(maxDotProduct([1, 3, -5, 7, -9, 11], [11, -9, 7, -5, 3, -1]), 235, 'Test 84');
test(maxDotProduct([1, 3, -5, 7, -9], [-2, 4, -6, 8, -10]), 188, 'Test 85');
test(maxDotProduct([10, 20, 30], [30, 20, 10]), 1200, 'Test 86');
test(maxDotProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3850, 'Test 87');
test(maxDotProduct([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 190, 'Test 88');
test(maxDotProduct([-5, -5, -5, -5, -5], [-5, -5, -5, -5, -5]), 125, 'Test 89');
test(maxDotProduct([1, 0, -1, 0, 1], [0, 1, 0, -1, 0]), 2, 'Test 90');
test(maxDotProduct([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), 460000, 'Test 91');
test(maxDotProduct([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), 55, 'Test 92');
test(maxDotProduct([-1, -2, -3, -4, -5], [1, 2, 3, 4, 5]), -1, 'Test 93');
test(maxDotProduct([-50, -40, -30, -20, -10], [-10, -20, -30, -40, -50]), 4600, 'Test 94');
test(maxDotProduct([1, -1, 2, -2, 3, -3], [-1, 1, -2, 2, -3, 3]), 22, 'Test 95');
test(maxDotProduct([100, 200, 300], [1, 2, 3, 4, 5]), 2600, 'Test 96');
test(maxDotProduct([0, 0, 0, 0], [0, 0, 0, 0]), 0, 'Test 97');
test(maxDotProduct([1, 2, 3, 4, 5], [-1, -1, -1, -1, -1]), -1, 'Test 98');
test(maxDotProduct([1, -1, 2, -2, 3, -3], [3, -3, 2, -2, 1, -1]), 24, 'Test 99');
test(maxDotProduct([1, 2, 3, 4, 5], [-1, -2, -3, -4, -5]), -1, 'Test 100');
test(maxDotProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10]), 1000, 'Test 101');
test(maxDotProduct([10, 20, 30, 40, 50], [-50, -40, -30, -20, -10]), -100, 'Test 102');
test(maxDotProduct([-10, -20, -30, -40, -50], [10, 20, 30, 40, 50]), -100, 'Test 103');
test(maxDotProduct([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), 4600, 'Test 104');
test(maxDotProduct([1, 0, -1, 0, 1], [1, 0, -1, 0, 1]), 3, 'Test 105');
test(maxDotProduct([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12, 14]), 504, 'Test 106');
test(maxDotProduct([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 107');
test(maxDotProduct([1, 1, 1, 1, 1], [-1, -1, -1, -1, -1]), -1, 'Test 108');
test(maxDotProduct([-1, 0, 1, -2, 0, 2], [2, 0, -2, 0, 1, -1]), 8, 'Test 109');

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
