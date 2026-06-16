// Test: 1005. Maximize Sum Of Array After K Negations
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { largestSumAfterKNegations } = require("./solution");

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

console.log("\n1005. Maximize Sum Of Array After K Negations\n");

test(largestSumAfterKNegations([-5,-4,-3,-2,-1], 5), 15, 'Test 1');
test(largestSumAfterKNegations([0,0,0,0], 3), 0, 'Test 2');
test(largestSumAfterKNegations([4,2,3], 1), 5, 'Test 3');
test(largestSumAfterKNegations([100,-100,50,-50], 3), 200, 'Test 4');
test(largestSumAfterKNegations([1,2,3,4], 2), 10, 'Test 5');
test(largestSumAfterKNegations([100,-100,50,-50], 5), 200, 'Test 6');
test(largestSumAfterKNegations([2,-3,-1,5,-4], 2), 13, 'Test 7');
test(largestSumAfterKNegations([3,-1,0,2], 3), 6, 'Test 8');
test(largestSumAfterKNegations([-1,-2,-3,-4], 2), 4, 'Test 9');
test(largestSumAfterKNegations([0,0,0,0], 4), 0, 'Test 10');
test(largestSumAfterKNegations([1,2,3], 6), 6, 'Test 11');
test(largestSumAfterKNegations([-1,0,1], 1), 2, 'Test 12');
test(largestSumAfterKNegations([-1,-2,-3,-4], 4), 10, 'Test 13');
test(largestSumAfterKNegations([0,0,0,0], 10), 0, 'Test 14');
test(largestSumAfterKNegations([1,2,3,4,5], 1), 13, 'Test 15');
test(largestSumAfterKNegations([1,-1,2,-2], 4), 6, 'Test 16');
test(largestSumAfterKNegations([1,2,3,4], 4), 10, 'Test 17');
test(largestSumAfterKNegations([0, 1, -1, 2, -2, 3, -3, 4, -4], 10), 20, 'Test 18');
test(largestSumAfterKNegations([1, -1, 2, -2, 3, -3], 9), 12, 'Test 19');
test(largestSumAfterKNegations([-100, -99, -98, -97, -96, -95, -94, -93, -92, -91], 10), 955, 'Test 20');
test(largestSumAfterKNegations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 53, 'Test 21');
test(largestSumAfterKNegations([-3, -2, -1, 0, 1, 2, 3], 5), 12, 'Test 22');
test(largestSumAfterKNegations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 53, 'Test 23');
test(largestSumAfterKNegations([-7, 3, -5, 2, -1], 6), 16, 'Test 24');
test(largestSumAfterKNegations([1,2,3,4,5,6,7,8,9,10], 5), 53, 'Test 25');
test(largestSumAfterKNegations([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 15), 8, 'Test 26');
test(largestSumAfterKNegations([-1, 1, -1, 1, -1], 8), 3, 'Test 27');
test(largestSumAfterKNegations([-10,20,-30,40,-50], 5), 150, 'Test 28');
test(largestSumAfterKNegations([1, 2, 3, 4, 5], 5), 13, 'Test 29');
test(largestSumAfterKNegations([99, -99, 50, -50, 25, -25], 10), 298, 'Test 30');
test(largestSumAfterKNegations([1, 2, 3, 4, 5], 20), 15, 'Test 31');
test(largestSumAfterKNegations([100,-100,100,-100,100], 100), 500, 'Test 32');
test(largestSumAfterKNegations([100, 200, 300, 400, 500], 1), 1300, 'Test 33');
test(largestSumAfterKNegations([-1,-2,-3,-4], 10), 10, 'Test 34');
test(largestSumAfterKNegations([-10, -9, -8, -7, -6], 10), 28, 'Test 35');
test(largestSumAfterKNegations([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10), 0, 'Test 36');
test(largestSumAfterKNegations([-10,-20,-30,-40,-50], 15), 150, 'Test 37');
test(largestSumAfterKNegations([-10, 20, -30, 40, -50], 15), 150, 'Test 38');
test(largestSumAfterKNegations([50, 40, 30, 20, 10, 0, -10, -20, -30, -40], 6), 250, 'Test 39');
test(largestSumAfterKNegations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 55, 'Test 40');
test(largestSumAfterKNegations([10, -20, 30, -40, 50, -60, 70, -80, 90, -100], 15), 550, 'Test 41');
test(largestSumAfterKNegations([1, -1, 1, -1], 7), 2, 'Test 42');
test(largestSumAfterKNegations([5, -3, 8, -2, 9, -4], 3), 31, 'Test 43');
test(largestSumAfterKNegations([-1, -2, -3, -4, -5], 10), 13, 'Test 44');
test(largestSumAfterKNegations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), 8, 'Test 45');
test(largestSumAfterKNegations([1,1,1,1,1,1,1,1,1,1], 9999), 8, 'Test 46');
test(largestSumAfterKNegations([0, 1, -1, 2, -2, 3, -3, 4, -4], 15), 20, 'Test 47');
test(largestSumAfterKNegations([99, -99, 50, -50, 1], 10000), 299, 'Test 48');
test(largestSumAfterKNegations([1, -2, 3, -4, 5, -6], 5), 21, 'Test 49');
test(largestSumAfterKNegations([-1,-2,-3,-4], 3), 8, 'Test 50');
test(largestSumAfterKNegations([-1, 0, 1], 2), 2, 'Test 51');
test(largestSumAfterKNegations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 8, 'Test 52');
test(largestSumAfterKNegations([0, 1, -2, 3, -4, 5, -6], 7), 21, 'Test 53');
test(largestSumAfterKNegations([1, -1, 1, -1, 1, -1], 100), 4, 'Test 54');
test(largestSumAfterKNegations([99, -99, 98, -98, 97, -97, 96, -96, 95, -95], 15), 970, 'Test 55');
test(largestSumAfterKNegations([-10, -20, -30, -40], 6), 100, 'Test 56');
test(largestSumAfterKNegations([-1, 0, 1], 3), 2, 'Test 57');
test(largestSumAfterKNegations([-1,2,-3,4,-5,6,-7,8,-9,10], 11), 55, 'Test 58');
test(largestSumAfterKNegations([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0], 9), 45, 'Test 59');
test(largestSumAfterKNegations([-50, 50, 25, -25, 12, -12, 6, -6, 3, -3], 12), 186, 'Test 60');
test(largestSumAfterKNegations([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], 7), 55, 'Test 61');
test(largestSumAfterKNegations([10, 20, 30, 40, 50], 3), 130, 'Test 62');
test(largestSumAfterKNegations([0,0,0,0], 7), 0, 'Test 63');
test(largestSumAfterKNegations([-1, 1, -2, 2, -3, 3], 5), 12, 'Test 64');
test(largestSumAfterKNegations([2, 4, 6, 8, 10], 1), 26, 'Test 65');
test(largestSumAfterKNegations([-10,10,-20,20,-30,30], 6), 100, 'Test 66');
test(largestSumAfterKNegations([5,-3,7,-2,1], 3), 16, 'Test 67');
test(largestSumAfterKNegations([0, 0, 0, 0, 0], 1000), 0, 'Test 68');
test(largestSumAfterKNegations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 53, 'Test 69');
test(largestSumAfterKNegations([-1, -2, -3, -4], 10), 10, 'Test 70');
test(largestSumAfterKNegations([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10], 15), 55, 'Test 71');
test(largestSumAfterKNegations([0, 0, 0, 0], 100), 0, 'Test 72');
test(largestSumAfterKNegations([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 5), 25, 'Test 73');
test(largestSumAfterKNegations([100, 50, 25, 12, 6, 3], 7), 190, 'Test 74');
test(largestSumAfterKNegations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1), 45, 'Test 75');
test(largestSumAfterKNegations([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 20), 110, 'Test 76');
test(largestSumAfterKNegations([5, -5, 15, -15, 25, -25], 11), 90, 'Test 77');
test(largestSumAfterKNegations([100, 100, 100, 100, 100], 10000), 500, 'Test 78');
test(largestSumAfterKNegations([0, -1, 1, -2, 2, -3, 3], 7), 12, 'Test 79');
test(largestSumAfterKNegations([10, -10, 20, -20, 30, -30], 6), 100, 'Test 80');
test(largestSumAfterKNegations([100, -50, 25, -10, 5], 3), 180, 'Test 81');
test(largestSumAfterKNegations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 53, 'Test 82');
test(largestSumAfterKNegations([99,-99,50,-50,25,-25], 7), 348, 'Test 83');
test(largestSumAfterKNegations([-1, -2, -3, 4, 5, 6], 4), 19, 'Test 84');
test(largestSumAfterKNegations([1, -1, 1, -1, 1, -1], 10), 4, 'Test 85');
test(largestSumAfterKNegations([1, 2, 3, -4, -5, -6], 3), 21, 'Test 86');
test(largestSumAfterKNegations([10, -10, 20, -20, 30, -30], 9), 120, 'Test 87');
test(largestSumAfterKNegations([10, -10, 20, -20, 30, -30, 40, -40], 20), 200, 'Test 88');
test(largestSumAfterKNegations([1, -1, 2, -2, 3, -3, 4, -4], 8), 20, 'Test 89');
test(largestSumAfterKNegations([0, 0, 0, 0, 0], 100), 0, 'Test 90');
test(largestSumAfterKNegations([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40], 14), 250, 'Test 91');
test(largestSumAfterKNegations([-1,0,1], 5), 2, 'Test 92');
test(largestSumAfterKNegations([-99, -98, -97, -96, -95], 10), 295, 'Test 93');
test(largestSumAfterKNegations([10, -10, 20, -20, 30, -30], 7), 120, 'Test 94');
test(largestSumAfterKNegations([-1,0,1,2,3,4,5,6,7,8,9], 10), 46, 'Test 95');
test(largestSumAfterKNegations([100,100,100,100,100], 3), 300, 'Test 96');
test(largestSumAfterKNegations([5, 5, 5, 5, 5], 1000), 25, 'Test 97');
test(largestSumAfterKNegations([1, 1, 1, 1, 1, -1, -1, -1, -1, -1], 15), 10, 'Test 98');
test(largestSumAfterKNegations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 20), 100, 'Test 99');
test(largestSumAfterKNegations([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], 20), 280, 'Test 100');
test(largestSumAfterKNegations([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], 10), 55, 'Test 101');
test(largestSumAfterKNegations([5, -5, 5, -5, 5, -5], 6), 20, 'Test 102');
test(largestSumAfterKNegations([-1, 0, 1, 0, -1, 0, 1, 0], 8), 4, 'Test 103');
test(largestSumAfterKNegations([10,9,8,7,6,5,4,3,2,1], 5), 53, 'Test 104');
test(largestSumAfterKNegations([5, -1, -2, -3, -4], 6), 15, 'Test 105');
test(largestSumAfterKNegations([1,-1,2,-2,3,-3,4,-4], 8), 20, 'Test 106');
test(largestSumAfterKNegations([-100, -200, -300, -400, -500], 2), -1500, 'Test 107');
test(largestSumAfterKNegations([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], 8), 53, 'Test 108');
test(largestSumAfterKNegations([-100, -50, 0, 50, 100], 3), 300, 'Test 109');
test(largestSumAfterKNegations([10, -20, 30, -40, 50, -60], 5), 210, 'Test 110');
test(largestSumAfterKNegations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9), 53, 'Test 111');
test(largestSumAfterKNegations([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 10), 10, 'Test 112');
test(largestSumAfterKNegations([-10, -20, -30, -40, -50], 3), 90, 'Test 113');
test(largestSumAfterKNegations([1,-2,3,-4,5,-6,7,-8,9,-10], 8), 53, 'Test 114');
test(largestSumAfterKNegations([-100, -50, -25, -12, -6, -3], 8), 196, 'Test 115');
test(largestSumAfterKNegations([-10, -20, 0, 20, 10], 5), 60, 'Test 116');
test(largestSumAfterKNegations([-10, -20, -30, -40, -50], 20), 130, 'Test 117');
test(largestSumAfterKNegations([-1, 0, 1], 1), 2, 'Test 118');
test(largestSumAfterKNegations([-100, -100, -100, -100, -100], 10001), 500, 'Test 119');
test(largestSumAfterKNegations([-10, -20, -30, -40, -50], 6), 130, 'Test 120');
test(largestSumAfterKNegations([100, -100, 50, -50, 25, -25, 12, -12, 6, -6], 20), 374, 'Test 121');

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
