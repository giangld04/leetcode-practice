// Test: 2145. Count The Hidden Sequences
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfArrays } = require("./solution");

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

console.log("\n2145. Count The Hidden Sequences\n");

test(numberOfArrays([0,0,0], 1, 1), 1, 'Test 1');
test(numberOfArrays([5,-5,5,-5], -10, 10), 16, 'Test 2');
test(numberOfArrays([3,-4,5,1,-2], -4, 5), 4, 'Test 3');
test(numberOfArrays([1,-3,4], 1, 6), 2, 'Test 4');
test(numberOfArrays([-1,-1,-1], -3, 3), 4, 'Test 5');
test(numberOfArrays([-1], -2, -1), 1, 'Test 6');
test(numberOfArrays([-1,-2,-3,-4,-5], -100, 1), 87, 'Test 7');
test(numberOfArrays([100000,-100000,100000,-100000], -100000, 100000), 100001, 'Test 8');
test(numberOfArrays([10,-5,15,-10], -10, 10), 1, 'Test 9');
test(numberOfArrays([0,0,0], 1, 5), 5, 'Test 10');
test(numberOfArrays([1,1,1], -5, -1), 2, 'Test 11');
test(numberOfArrays([100000,-100000], -100000, 100000), 100001, 'Test 12');
test(numberOfArrays([1,2,3], 0, 10), 5, 'Test 13');
test(numberOfArrays([-1,-2,-3], -10, 0), 5, 'Test 14');
test(numberOfArrays([10,-10,10,-10], -5, 5), 1, 'Test 15');
test(numberOfArrays([100000,-100000,100000], -100000, 100000), 100001, 'Test 16');
test(numberOfArrays([0,0,0], 0, 0), 1, 'Test 17');
test(numberOfArrays([1], 1, 2), 1, 'Test 18');
test(numberOfArrays([-1,-2,-3], -5, 5), 5, 'Test 19');
test(numberOfArrays([-1,-1,-1], 1, 5), 2, 'Test 20');
test(numberOfArrays([1,2,3,4,5], 1, 100), 85, 'Test 21');
test(numberOfArrays([0,0,0], 0, 10), 11, 'Test 22');
test(numberOfArrays([4,-7,2], 3, 6), 0, 'Test 23');
test(numberOfArrays([2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], -15, 15), 21, 'Test 24');
test(numberOfArrays([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], -10, 10), 11, 'Test 25');
test(numberOfArrays([2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 100), 47, 'Test 26');
test(numberOfArrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100, -90, -80, -70, -60, -50, -40, -30, -20, -10], 0, 500), 0, 'Test 27');
test(numberOfArrays([5,10,15,20,25,30], 0, 100), 0, 'Test 28');
test(numberOfArrays([1000, -500, 200, -100, 50, -25, 10], -1000, 1000), 1001, 'Test 29');
test(numberOfArrays([100000, 0, -100000, 0, 100000, 0, -100000], -200000, 200000), 300001, 'Test 30');
test(numberOfArrays([-5,-10,-15,-20,-25,-30], -100, 0), 0, 'Test 31');
test(numberOfArrays([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1], 0, 2), 2, 'Test 32');
test(numberOfArrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10, 60), 1, 'Test 33');
test(numberOfArrays([5, -2, 8, -3, 7], -5, 20), 11, 'Test 34');
test(numberOfArrays([10000, -20000, 30000, -40000, 50000], -100000, 100000), 150001, 'Test 35');
test(numberOfArrays([-1, 2, -1, 2, -1], -10, 10), 18, 'Test 36');
test(numberOfArrays([-1,0,1,0,-1], -5, 5), 10, 'Test 37');
test(numberOfArrays([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -20, -10), 0, 'Test 38');
test(numberOfArrays([3,3,3,3,3,3,3,3,3,3], 1, 50), 20, 'Test 39');
test(numberOfArrays([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 0, 1), 1, 'Test 40');
test(numberOfArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 10), 1, 'Test 41');
test(numberOfArrays([50000, -50000, 50000, -50000, 50000, -50000, 50000, -50000], -100000, 100000), 150001, 'Test 42');
test(numberOfArrays([100000, 100000, 100000, -300000, 100000, 100000, 100000], -100000, 100000), 0, 'Test 43');
test(numberOfArrays([-1, 1, -1, 1, -1], 0, 5), 5, 'Test 44');
test(numberOfArrays([10000, -10000, 20000, -20000], -50000, 50000), 80001, 'Test 45');
test(numberOfArrays([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], -10, 10), 11, 'Test 46');
test(numberOfArrays([-5, 10, -15, 20, -25], -30, 30), 36, 'Test 47');
test(numberOfArrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5, 5), 1, 'Test 48');
test(numberOfArrays([0, 0, 0, 0, 0], -1, 1), 3, 'Test 49');
test(numberOfArrays([-1, 2, -3, 4, -5, 6, -7, 8], -10, 10), 13, 'Test 50');
test(numberOfArrays([-1, 2, -3, 4, -5, 6, -7], -20, 20), 34, 'Test 51');
test(numberOfArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 0, 100), 0, 'Test 52');
test(numberOfArrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1, 1000), 450, 'Test 53');
test(numberOfArrays([5,-2,3,7,-4], 1, 20), 7, 'Test 54');
test(numberOfArrays([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15], -100, 0), 0, 'Test 55');
test(numberOfArrays([5, -5, 5, -5, 5, -5], -10, 10), 16, 'Test 56');
test(numberOfArrays([0, 0, 0, 0, 0], 1, 1), 1, 'Test 57');
test(numberOfArrays([-1, 2, -2, 1, -1], -5, 5), 9, 'Test 58');
test(numberOfArrays([10, 20, 30, 40, 50], 0, 200), 51, 'Test 59');
test(numberOfArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 10), 0, 'Test 60');
test(numberOfArrays([50, -25, 75, -37, 100, -50, 125, -62, 150, -75, 175, -87, 200, -93, 225, -100, 250, -112, 275, -125], 0, 300), 0, 'Test 61');
test(numberOfArrays([100000, -100000, 100000, -100000, 100000], -50000, 50000), 1, 'Test 62');
test(numberOfArrays([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], -100, 100), 151, 'Test 63');
test(numberOfArrays([1, -1, 1, -1, 1], 1, 5), 4, 'Test 64');
test(numberOfArrays([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -55, -45), 0, 'Test 65');
test(numberOfArrays([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], -10, 0), 0, 'Test 66');
test(numberOfArrays([1, 2, -3, 4, -5, 6], 1, 10), 4, 'Test 67');
test(numberOfArrays([100, -50, 200, -100, 50, -200, 100], -1000, 1000), 1751, 'Test 68');
test(numberOfArrays([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1], -1, 1), 2, 'Test 69');
test(numberOfArrays([-1, -2, -3, -4, -5, -6], -15, -5), 0, 'Test 70');
test(numberOfArrays([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -1000, 1), 452, 'Test 71');
test(numberOfArrays([-15, 14, -13, 12, -11, 10, -9, 8, -7, 6, -5, 4, -3, 2, -1], -20, 20), 26, 'Test 72');
test(numberOfArrays([1,-1,2,-2,3,-3,4,-4,5,-5], -10, 10), 16, 'Test 73');
test(numberOfArrays([5, 10, -15, 20, -25], -100, 100), 176, 'Test 74');
test(numberOfArrays([100000, -50000, 50000, -100000, 50000], -100000, 100000), 100001, 'Test 75');
test(numberOfArrays([100, -50, 25, -10, 5], 0, 200), 101, 'Test 76');
test(numberOfArrays([-5, -5, -5, -5, -5, -5, -5, -5, -5, -5], -50, 0), 1, 'Test 77');
test(numberOfArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 20), 0, 'Test 78');
test(numberOfArrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100, 1000), 351, 'Test 79');
test(numberOfArrays([5, -2, 3, -4, 1], 1, 10), 4, 'Test 80');
test(numberOfArrays([2, -1, 3, -2, 4, -3, 5, -4], -5, 10), 8, 'Test 81');
test(numberOfArrays([0, 0, 0, 0, 0], 0, 10), 11, 'Test 82');
test(numberOfArrays([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], -10, -1), 0, 'Test 83');
test(numberOfArrays([5, -2, 3, -1, 4], -5, 5), 2, 'Test 84');
test(numberOfArrays([100000, -50000, 25000, -12500, 6250, -3125, 1562, -781, 390, -195], 0, 100000), 1, 'Test 85');
test(numberOfArrays([-10, 20, -30, 40, -50, 60], -20, 20), 0, 'Test 86');
test(numberOfArrays([-10, -20, -30, -40, -50], -200, 0), 51, 'Test 87');
test(numberOfArrays([5, 10, -5, -10, 15, -15, 20, -20], -100, 100), 181, 'Test 88');
test(numberOfArrays([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], -10, 0), 1, 'Test 89');
test(numberOfArrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0, 50), 1, 'Test 90');
test(numberOfArrays([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], -50, 50), 91, 'Test 91');
test(numberOfArrays([20,-10,30,-15,5,-1], -100, 100), 161, 'Test 92');
test(numberOfArrays([2, 3, -2, 1, -3, 2], -5, 15), 16, 'Test 93');
test(numberOfArrays([2, 3, -5, 2, 3, -5], -3, 3), 2, 'Test 94');
test(numberOfArrays([100, -50, 25, -10, 5], -20, 200), 121, 'Test 95');
test(numberOfArrays([100000, 0, -100000, 0, 100000], 50000, 150000), 1, 'Test 96');
test(numberOfArrays([-100000, 50000, -50000, 100000, -50000], -100000, 100000), 100001, 'Test 97');
test(numberOfArrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -1, 1), 3, 'Test 98');
test(numberOfArrays([1, -1, 1, -1, 1, -1], 1, 5), 4, 'Test 99');
test(numberOfArrays([1, 2, 3, -1, -2, -3, 1, 2, 3, -1, -2, -3], -5, 5), 5, 'Test 100');
test(numberOfArrays([10, -10, 10, -10, 10, -10, 10, -10], 0, 20), 11, 'Test 101');
test(numberOfArrays([10, -20, 30, -40, 50], 5, 15), 0, 'Test 102');
test(numberOfArrays([2, 4, -6, 8, -10, 12, -14], -15, 15), 17, 'Test 103');
test(numberOfArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 10), 0, 'Test 104');
test(numberOfArrays([10, 20, 30, 40, 50], 100, 200), 0, 'Test 105');
test(numberOfArrays([5, -5, 10, -10, 15, -15], -50, 50), 86, 'Test 106');
test(numberOfArrays([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -50, 0), 0, 'Test 107');
test(numberOfArrays([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], -1, 1), 2, 'Test 108');
test(numberOfArrays([5, -2, 8, -6, 3], 2, 12), 0, 'Test 109');
test(numberOfArrays([100,-50,25,-12,6,-3,1], 0, 500), 401, 'Test 110');
test(numberOfArrays([1, 2, 3, 4, 5, 6], 5, 15), 0, 'Test 111');
test(numberOfArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 50), 0, 'Test 112');
test(numberOfArrays([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], -10, 10), 16, 'Test 113');
test(numberOfArrays([0, 0, 0, 0, 0], 0, 0), 1, 'Test 114');
test(numberOfArrays([5, -2, 3, -4, 7, -1], -5, 15), 12, 'Test 115');
test(numberOfArrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 0), 1, 'Test 116');
test(numberOfArrays([-3,-3,-3,-3,-3,-3,-3,-3,-3,-3], -50, -1), 20, 'Test 117');
test(numberOfArrays([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16], -100, 100), 185, 'Test 118');
test(numberOfArrays([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15], -50, 50), 86, 'Test 119');
test(numberOfArrays([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -1000, -100), 351, 'Test 120');
test(numberOfArrays([5, -2, 3, 7, -5, 8, -6], -10, 20), 15, 'Test 121');
test(numberOfArrays([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], -5, 5), 1, 'Test 122');
test(numberOfArrays([-1, -2, -3, -4, -5], -15, -5), 0, 'Test 123');

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
