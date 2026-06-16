// Test: 1991. Find The Middle Index In Array
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { findMiddleIndex } = require("./solution");

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

console.log("\n1991. Find The Middle Index In Array\n");

test(findMiddleIndex([1,-1,4]), 2, 'Test 1');
test(findMiddleIndex([1]), 0, 'Test 2');
test(findMiddleIndex([1,100]), -1, 'Test 3');
test(findMiddleIndex([0,1]), 1, 'Test 4');
test(findMiddleIndex([-1,-2,-3,-4,-5]), -1, 'Test 5');
test(findMiddleIndex([2,5]), -1, 'Test 6');
test(findMiddleIndex([0,0,0,0,0]), 0, 'Test 7');
test(findMiddleIndex([1,2,3,4,5]), -1, 'Test 8');
test(findMiddleIndex([1,0]), 0, 'Test 9');
test(findMiddleIndex([2,3,-1,8,4]), 3, 'Test 10');
test(findMiddleIndex([0]), 0, 'Test 11');
test(findMiddleIndex([1,2,3,4,5,6]), -1, 'Test 12');
test(findMiddleIndex([-1,-1,-1,-1]), -1, 'Test 13');
test(findMiddleIndex([1,7,3,6,5,6]), 3, 'Test 14');
test(findMiddleIndex([0,0,0,0]), 0, 'Test 15');
test(findMiddleIndex([1000,-1000,1000,-1000]), -1, 'Test 16');
test(findMiddleIndex([1,1]), -1, 'Test 17');
test(findMiddleIndex([1,2,3]), -1, 'Test 18');
test(findMiddleIndex([1000,-1000,1000,-1000,1000]), 0, 'Test 19');
test(findMiddleIndex([-1,-2,-3,-4,-5,-6]), -1, 'Test 20');
test(findMiddleIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), -1, 'Test 21');
test(findMiddleIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 22');
test(findMiddleIndex([1000, -500, 250, 250, -1000, 500, 500, 0, 0, 0]), 0, 'Test 23');
test(findMiddleIndex([100, 0, -100, 0, 100, 0, -100]), 3, 'Test 24');
test(findMiddleIndex([100, -50, 25, 25, -100, 50, 50]), 0, 'Test 25');
test(findMiddleIndex([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41]), -1, 'Test 26');
test(findMiddleIndex([5, 5, 5, 5, 5, 5, 5, 5]), -1, 'Test 27');
test(findMiddleIndex([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 28');
test(findMiddleIndex([0, 1, 0, -1, 0, 1, 0, -1, 0]), 0, 'Test 29');
test(findMiddleIndex([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), -1, 'Test 30');
test(findMiddleIndex([7, 1, 5, 2, -4, 3, 0, 1, -2, 3]), -1, 'Test 31');
test(findMiddleIndex([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), -1, 'Test 32');
test(findMiddleIndex([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), -1, 'Test 33');
test(findMiddleIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), -1, 'Test 34');
test(findMiddleIndex([0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1]), 0, 'Test 35');
test(findMiddleIndex([5, -10, 10, 5, 0]), -1, 'Test 36');
test(findMiddleIndex([-5, 5, -5, 5, -5, 5]), -1, 'Test 37');
test(findMiddleIndex([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 38');
test(findMiddleIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), -1, 'Test 39');
test(findMiddleIndex([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), -1, 'Test 40');
test(findMiddleIndex([3, -2, 1, 6, -4, 2, 5]), -1, 'Test 41');
test(findMiddleIndex([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), -1, 'Test 42');
test(findMiddleIndex([10, -10, 20, -20, 30, -30, 40]), 6, 'Test 43');
test(findMiddleIndex([100, 200, -300, 400, -500, 600, -700, 800]), -1, 'Test 44');
test(findMiddleIndex([7, 1, 5, 2, -4, 3, 0]), -1, 'Test 45');
test(findMiddleIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]), -1, 'Test 46');
test(findMiddleIndex([10, -10, 10, -10, 10, -10, 10, -10, 10, -10]), -1, 'Test 47');
test(findMiddleIndex([10, -10, 20, -20, 30, -30]), -1, 'Test 48');
test(findMiddleIndex([100, 200, 300, 400, 500, -1500, 600, 700]), -1, 'Test 49');
test(findMiddleIndex([1000, -1000, 0, 1000, -1000]), 2, 'Test 50');
test(findMiddleIndex([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), -1, 'Test 51');
test(findMiddleIndex([-1000, 500, -250, 125, -62, 31, -15, 7, -3, 1]), -1, 'Test 52');
test(findMiddleIndex([5, -5, 5, -5, 5, -5, 5]), 0, 'Test 53');
test(findMiddleIndex([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 54');
test(findMiddleIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), -1, 'Test 55');
test(findMiddleIndex([-1, -2, -3, -4, -5, 15]), -1, 'Test 56');
test(findMiddleIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 57');
test(findMiddleIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]), 9, 'Test 58');
test(findMiddleIndex([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), -1, 'Test 59');
test(findMiddleIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 9, 'Test 60');
test(findMiddleIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), -1, 'Test 61');
test(findMiddleIndex([1, -2, 3, 4, -3, 2]), -1, 'Test 62');
test(findMiddleIndex([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), -1, 'Test 63');
test(findMiddleIndex([10, 20, 30, 40, 50, 60, -210]), -1, 'Test 64');
test(findMiddleIndex([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 65');
test(findMiddleIndex([10, -10, 0, 5, -5, 5, -5]), 2, 'Test 66');
test(findMiddleIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), -1, 'Test 67');
test(findMiddleIndex([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), -1, 'Test 68');
test(findMiddleIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 69');
test(findMiddleIndex([1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000]), -1, 'Test 70');
test(findMiddleIndex([-10, 10, -20, 20, -30, 30, -40, 40]), -1, 'Test 71');
test(findMiddleIndex([0, 1, 0, -1, 0, 1, 0, -1]), 0, 'Test 72');
test(findMiddleIndex([999, 1, 999, 1, 999, 1, 999, 1, 999, 1]), -1, 'Test 73');
test(findMiddleIndex([1000, -1000, 500, -500, 250, -250, 125, -125]), -1, 'Test 74');
test(findMiddleIndex([0, 1, 2, 3, 4, 3, 2, 1, 0]), 4, 'Test 75');
test(findMiddleIndex([1, -1, 0, 1, -1]), 2, 'Test 76');
test(findMiddleIndex([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 7, 'Test 77');
test(findMiddleIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), -1, 'Test 78');
test(findMiddleIndex([10, 20, 30, 10, 10, 30]), -1, 'Test 79');
test(findMiddleIndex([1000, -500, 250, -125, 62, -31, 15, -7, 3, -1, 0]), -1, 'Test 80');
test(findMiddleIndex([1, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 81');
test(findMiddleIndex([1000, -1000, 1000, -1000, 1000, -1000]), -1, 'Test 82');
test(findMiddleIndex([100, -100, 50, -50, 25, -25, 12, -12, 6, -6, 3, -3, 1, -1]), -1, 'Test 83');
test(findMiddleIndex([-100, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80, -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67, -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54, -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), -1, 'Test 84');
test(findMiddleIndex([1, -1, 2, -2, 3, -3]), -1, 'Test 85');
test(findMiddleIndex([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]), -1, 'Test 86');
test(findMiddleIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), -1, 'Test 87');
test(findMiddleIndex([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 9, 'Test 88');
test(findMiddleIndex([1000, -1000, 500, -500, 250, -250]), -1, 'Test 89');
test(findMiddleIndex([1000, -1000, 500, -500, 0, 0]), 4, 'Test 90');
test(findMiddleIndex([7, 1, 5, 2, -4, 3, 0, 0, 0, 0]), -1, 'Test 91');
test(findMiddleIndex([1000, -500, 250, -125, 62, -31, 15, -7, 3, -1, 1]), -1, 'Test 92');
test(findMiddleIndex([-10, 10, -20, 20, -30, 30]), -1, 'Test 93');
test(findMiddleIndex([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 0]), 20, 'Test 94');

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
