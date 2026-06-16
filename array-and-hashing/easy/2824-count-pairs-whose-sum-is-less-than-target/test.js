// Test: 2824. Count Pairs Whose Sum Is Less Than Target
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { countPairs } = require("./solution");

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

console.log("\n2824. Count Pairs Whose Sum Is Less Than Target\n");

test(countPairs([5,5,5,5,5], 15), 10, 'Test 1');
test(countPairs([-10,-20,-30,-40,-50], -80), 1, 'Test 2');
test(countPairs([1,3,5,7,9], 10), 4, 'Test 3');
test(countPairs([1,1,1,1,1], 3), 10, 'Test 4');
test(countPairs([0,0,0,0,0], 0), 0, 'Test 5');
test(countPairs([1,2,3,4,5], 10), 10, 'Test 6');
test(countPairs([-1,-2,-3,-4,-5], -3), 9, 'Test 7');
test(countPairs([-5,-4,-3,-2,-1], -5), 6, 'Test 8');
test(countPairs([-6,2,5,-2,-7,-1,3], -2), 10, 'Test 9');
test(countPairs([0,0,0,0,0], 1), 10, 'Test 10');
test(countPairs([0,0,0,0], 1), 6, 'Test 11');
test(countPairs([10,20,30,40,50], 100), 10, 'Test 12');
test(countPairs([-1,1,2,3,1], 2), 3, 'Test 13');
test(countPairs([-5,-4,-3,-2,-1], -8), 1, 'Test 14');
test(countPairs([50,-50,25,-25], 0), 2, 'Test 15');
test(countPairs([-5, -10, 3, 8, 0, -2], 1), 9, 'Test 16');
test(countPairs([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -15), 6, 'Test 17');
test(countPairs([25, -25, 0, 15, -15, 10, -10, 5, -5, 20, -20], 0), 25, 'Test 18');
test(countPairs([25, 15, 5, -5, -15, -25, 35, 45, 55, -45], 0), 13, 'Test 19');
test(countPairs([-15, -25, -35, -45, -55], -70), 4, 'Test 20');
test(countPairs([-5, -4, -3, -2, -1], -2), 10, 'Test 21');
test(countPairs([-1, -1, -2, -3, -4, -5, -6, -7, -8, -9], -3), 42, 'Test 22');
test(countPairs([10, 20, 30, 40, 50, -10, -20, -30, -40, -50], 25), 32, 'Test 23');
test(countPairs([-3, -2, -1, 0, 1, 2, 3], 1), 12, 'Test 24');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 0), 90, 'Test 25');
test(countPairs([50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, -5, -10, -15, -20, -25, -30, -35, -40, -45], 5), 90, 'Test 26');
test(countPairs([0, 0, 0, 0, 0], 0), 0, 'Test 27');
test(countPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 50), 64, 'Test 28');
test(countPairs([-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30], -10), 25, 'Test 29');
test(countPairs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 1128, 'Test 30');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 30), 160, 'Test 31');
test(countPairs([-49, -47, -45, -43, -41, -39, -37, -35, -33, -31, -29, -27, -25, -23, -21, -19, -17, -15, -13, -11], -50), 134, 'Test 32');
test(countPairs([45, 46, 47, 48, 49, 50, -45, -46, -47, -48, -49, -50], 0), 30, 'Test 33');
test(countPairs([5, 2, 7, 1, 8, 4, 3, 6], 10), 16, 'Test 34');
test(countPairs([5, -5, 15, -15, 25, -25, 35], 0), 6, 'Test 35');
test(countPairs([5, 15, 25, 35, 45, 50, 45, 35, 25, 15, 5, 0, -5, -15, -25, -35, -45, -50, -45, -35, -25, -15, -5, 0, 5, 15, 25, 35, 45, 50, 45, 35, 25, 15, 5, 0, -5, -15, -25, -35, -45, -50, -45, -35, -25, -15, -5], 10), 604, 'Test 36');
test(countPairs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 45, 'Test 37');
test(countPairs([50, -50, 40, -40, 30, -30, 20, -20, 10, -10], 1), 25, 'Test 38');
test(countPairs([-1, 0, 1, 2, -2, -3, 3], 1), 12, 'Test 39');
test(countPairs([5, -5, 15, -15, 25, -25], 0), 6, 'Test 40');
test(countPairs([-10, 0, 10, -20, 20, -30, 30, -40, 40, -50, 50], 10), 30, 'Test 41');
test(countPairs([-45, -40, -35, -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45], -5), 72, 'Test 42');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 50, -1, -3, -5, -7, -9, -11, -13, -15, -17, -19, -21, -23, -25, -27, -29, -31, -33, -35, -37, -39, -41, -43, -45, -47, -49, -50], 10), 775, 'Test 43');
test(countPairs([0, 1, -1, 2, -2, 3, -3], 0), 9, 'Test 44');
test(countPairs([-4, -3, -2, -1, 0, 1, 2, 3, 4], 1), 20, 'Test 45');
test(countPairs([2, 3, 5, 7, 11, 13, 17], 15), 8, 'Test 46');
test(countPairs([30, 20, 10, 0, -10, -20, -30], 10), 12, 'Test 47');
test(countPairs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 50), 625, 'Test 48');
test(countPairs([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8), 25, 'Test 49');
test(countPairs([-2, -3, -4, -5, -6, 1, 2, 3, 4, 5], -5), 9, 'Test 50');
test(countPairs([48, 49, 50, -48, -49, -50], 0), 6, 'Test 51');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 15), 12, 'Test 52');
test(countPairs([-40, -30, -20, -10, 0, 10, 20, 30, 40, 50], 10), 20, 'Test 53');
test(countPairs([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], -5), 41, 'Test 54');
test(countPairs([25, 20, 15, 10, 5, 0, -5, -10, -15, -20, -25], 10), 35, 'Test 55');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 50), 576, 'Test 56');
test(countPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 180), 43, 'Test 57');
test(countPairs([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], 1), 20, 'Test 58');
test(countPairs([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 200), 44, 'Test 59');
test(countPairs([0, 0, 0, 0, 0, 0, 0], 1), 21, 'Test 60');
test(countPairs([25, 20, 15, 10, 5, 0, -5, -10, -15, -20, -25, 30, 35, 40, 45, 50, -30, -35, -40, -45, -50], 15), 129, 'Test 61');
test(countPairs([-1, 0, 1, 0, -1, 1, 0], 1), 14, 'Test 62');
test(countPairs([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], 0), 20, 'Test 63');
test(countPairs([49, 48, 47, 46, 45, 44, 43, 42, 41, 40], 90), 25, 'Test 64');
test(countPairs([100, -50, 25, -25, 0, 50, -100], 0), 9, 'Test 65');
test(countPairs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 25), 29, 'Test 66');
test(countPairs([-40, -30, -20, -10, 0, 10, 20, 30, 40], -15), 12, 'Test 67');
test(countPairs([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 0), 25, 'Test 68');
test(countPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 30), 27, 'Test 69');
test(countPairs([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], -15), 6, 'Test 70');
test(countPairs([-1, 0, 1, -2, 2, -3, 3, -4, 4, -5, 5], 2), 35, 'Test 71');
test(countPairs([30, 20, 10, 0, -10, -20, -30, -40, -50, -60], -5), 33, 'Test 72');
test(countPairs([49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30], 90), 170, 'Test 73');
test(countPairs([30, 20, 10, 0, -10, -20, -30, -40, -50], -25), 16, 'Test 74');
test(countPairs([23, 24, 25, 26, 27, 28, 29, 30], 50), 4, 'Test 75');
test(countPairs([-50, 0, 50, -40, 40], 10), 6, 'Test 76');
test(countPairs([15, 25, 35, 45, 55], 100), 9, 'Test 77');
test(countPairs([1, -1, 2, -2, 3, -3], 0), 6, 'Test 78');
test(countPairs([-25, -25, -25, -25, -25], -50), 0, 'Test 79');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11), 20, 'Test 80');
test(countPairs([-50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0], -10), 1245, 'Test 81');
test(countPairs([-40, -30, -20, -10, 0, 10, 20, 30], -5), 16, 'Test 82');
test(countPairs([0, 0, 0, 0, 0], 1), 10, 'Test 83');
test(countPairs([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 0], -5), 25, 'Test 84');
test(countPairs([10, -10, 20, -20, 30, -30], 0), 6, 'Test 85');
test(countPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), 36, 'Test 86');
test(countPairs([-5, 0, 5, 10, 15, 20, 25, 30, 35, 40], 20), 9, 'Test 87');
test(countPairs([-49, -48, -47, -46, -45, -44, -43, -42, -41, -40], -80), 45, 'Test 88');
test(countPairs([45, -45, 44, -44, 43, -43, 42], 0), 9, 'Test 89');
test(countPairs([-10, 0, 10, 20, 30, 40, 50], 0), 1, 'Test 90');
test(countPairs([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], 0), 20, 'Test 91');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20), 75, 'Test 92');
test(countPairs([5, 4, 3, 2, 1], 6), 4, 'Test 93');
test(countPairs([5, 4, 3, 2, 1], 7), 6, 'Test 94');
test(countPairs([1, 1, 1, 1, 1, -1, -1, -1, -1, -1], 0), 10, 'Test 95');
test(countPairs([-1, 0, 1, 2, 3, 4, 5], 4), 9, 'Test 96');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20), 20, 'Test 97');
test(countPairs([-1, 0, 1, 2, 3, 4, 5], 3), 6, 'Test 98');
test(countPairs([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 99');
test(countPairs([49, -49, 48, -48, 47, -47, 46, -46, 45, -45], 0), 20, 'Test 100');
test(countPairs([-10, -20, -30, -40, -50, -60, -70], -100), 4, 'Test 101');
test(countPairs([-5, -5, -5, -5, -5, 5, 5, 5, 5, 5], 0), 10, 'Test 102');
test(countPairs([-10, -20, -30, 10, 20, 30, 0], -15), 6, 'Test 103');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21), 90, 'Test 104');
test(countPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 190), 44, 'Test 105');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 36, 'Test 106');
test(countPairs([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -11), 20, 'Test 107');
test(countPairs([5, 8, -3, 6, 2, 7, 4, 1, -5, -10], 5), 24, 'Test 108');
test(countPairs([50, 49, 48, 47, 46], 99), 9, 'Test 109');
test(countPairs([23, 17, 42, 8, 3, 19, 5, 28], 30), 11, 'Test 110');
test(countPairs([-1, 0, 1, -2, 2, -3, 3], 1), 12, 'Test 111');
test(countPairs([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15], 45), 46, 'Test 112');

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
