// Test: 3423. Maximum Difference Between Adjacent Elements In A Circular Array
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { maxAdjacentDistance } = require("./solution");

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

console.log("\n3423. Maximum Difference Between Adjacent Elements In A Circular Array\n");

test(maxAdjacentDistance([100,1,100,1,100]), 99, 'Test 1');
test(maxAdjacentDistance([10,20,30,40,50,60]), 50, 'Test 2');
test(maxAdjacentDistance([1,-1,2,-2,3,-3]), 6, 'Test 3');
test(maxAdjacentDistance([50,45,40,35,30,25,20,15,10,5]), 45, 'Test 4');
test(maxAdjacentDistance([7,9,1,5,3]), 8, 'Test 5');
test(maxAdjacentDistance([9,7,5,3,1]), 8, 'Test 6');
test(maxAdjacentDistance([-10,0,10,-10,0,10]), 20, 'Test 7');
test(maxAdjacentDistance([3,8,15,1,2]), 14, 'Test 8');
test(maxAdjacentDistance([50,50,50,50,50]), 0, 'Test 9');
test(maxAdjacentDistance([1,2,4]), 3, 'Test 10');
test(maxAdjacentDistance([1,3,5,7,9]), 8, 'Test 11');
test(maxAdjacentDistance([1,-1,1,-1,1,-1]), 2, 'Test 12');
test(maxAdjacentDistance([-1,0,1,-2,2,-3,3]), 6, 'Test 13');
test(maxAdjacentDistance([-1,1,-1,1,-1]), 2, 'Test 14');
test(maxAdjacentDistance([1,1,1,1,1,1,1]), 0, 'Test 15');
test(maxAdjacentDistance([5,10,15,20,25,30]), 25, 'Test 16');
test(maxAdjacentDistance([1,1,2,2,1,1]), 1, 'Test 17');
test(maxAdjacentDistance([1,-1,2,-2,3,-3,4,-4]), 8, 'Test 18');
test(maxAdjacentDistance([-5,-10,-5]), 5, 'Test 19');
test(maxAdjacentDistance([-1,-3,-5,-7,-9]), 8, 'Test 20');
test(maxAdjacentDistance([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 21');
test(maxAdjacentDistance([2,-2,2,-2,2]), 4, 'Test 22');
test(maxAdjacentDistance([10,-10,20,-20,30,-30]), 60, 'Test 23');
test(maxAdjacentDistance([0,0,0,0]), 0, 'Test 24');
test(maxAdjacentDistance([100,-100,100,-100]), 200, 'Test 25');
test(maxAdjacentDistance([-10,-20,-30,-40,-50,-60]), 50, 'Test 26');
test(maxAdjacentDistance([5,5,5,5,5,5]), 0, 'Test 27');
test(maxAdjacentDistance([5,4,3,2,1]), 4, 'Test 28');
test(maxAdjacentDistance([5,10,15,20,25,30,35,40,45,50]), 45, 'Test 29');
test(maxAdjacentDistance([30,25,20,15,10,5]), 25, 'Test 30');
test(maxAdjacentDistance([100,-100]), 200, 'Test 31');
test(maxAdjacentDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 49, 'Test 32');
test(maxAdjacentDistance([5, -5, 15, -15, 25, -25, 35, -35]), 70, 'Test 33');
test(maxAdjacentDistance([1, 10, 1, 10, 1, 10, 1, 10]), 9, 'Test 34');
test(maxAdjacentDistance([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80, 90, -90, 100, -100]), 200, 'Test 35');
test(maxAdjacentDistance([5, -15, 25, -35, 45, -55, 65, -75]), 140, 'Test 36');
test(maxAdjacentDistance([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, 100]), 120, 'Test 37');
test(maxAdjacentDistance([0,100,1,99,2,98,3,97]), 100, 'Test 38');
test(maxAdjacentDistance([100, 50, 25, 12, 6, 3, 1, 0, -1, -3, -6, -12, -25, -50]), 150, 'Test 39');
test(maxAdjacentDistance([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91]), 99, 'Test 40');
test(maxAdjacentDistance([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15]), 29, 'Test 41');
test(maxAdjacentDistance([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1]), 9, 'Test 42');
test(maxAdjacentDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 11, 'Test 43');
test(maxAdjacentDistance([0, 10, -10, 20, -20, 30, -30, 40, -40, 50]), 90, 'Test 44');
test(maxAdjacentDistance([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100, -90, -80, -70, -60, -50, -40, -30, -20, -10]), 200, 'Test 45');
test(maxAdjacentDistance([-10, 20, -30, 40, -50, 60, -70, 80, -90]), 170, 'Test 46');
test(maxAdjacentDistance([0, 10, -10, 20, -20, 30, -30, 40, -40]), 80, 'Test 47');
test(maxAdjacentDistance([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -100, 100]), 200, 'Test 48');
test(maxAdjacentDistance([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 39, 'Test 49');
test(maxAdjacentDistance([100, -100, 100, -100, 100, -100, 100, -100, 100, -100]), 200, 'Test 50');
test(maxAdjacentDistance([10,20,30,40,50,-10,-20,-30,-40,-50]), 60, 'Test 51');
test(maxAdjacentDistance([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 2, 'Test 52');
test(maxAdjacentDistance([99, 1, 98, 2, 97, 3, 96, 4, 95, 5]), 98, 'Test 53');
test(maxAdjacentDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 1, 'Test 54');
test(maxAdjacentDistance([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9]), 18, 'Test 55');
test(maxAdjacentDistance([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, -50]), 100, 'Test 56');
test(maxAdjacentDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 9, 'Test 57');
test(maxAdjacentDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 58');
test(maxAdjacentDistance([99, -99, 98, -98, 97, -97, 96, -96]), 198, 'Test 59');
test(maxAdjacentDistance([10, -20, 30, -40, 50, -60]), 110, 'Test 60');
test(maxAdjacentDistance([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 6, 'Test 61');
test(maxAdjacentDistance([-10, -20, 30, 25, -40, 10, 15]), 65, 'Test 62');
test(maxAdjacentDistance([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34, -35, -36, -37, -38, -39, -40, -41, -42, -43, -44, -45, -46, -47, -48, -49, -50]), 100, 'Test 63');
test(maxAdjacentDistance([-50, -45, -40, -35, -30, -25, -20, -15, -10, -5]), 45, 'Test 64');
test(maxAdjacentDistance([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15,16,-17,18,-19,20]), 39, 'Test 65');
test(maxAdjacentDistance([100, -100, 50, -50, 25, -25, 0]), 200, 'Test 66');
test(maxAdjacentDistance([25,50,75,100,125,150,175,200,225,250,275,300]), 275, 'Test 67');
test(maxAdjacentDistance([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 5, 'Test 68');
test(maxAdjacentDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 69');
test(maxAdjacentDistance([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 99, 'Test 70');
test(maxAdjacentDistance([-10, 10, -20, 20, -30, 30, -40, 40, -50, 50, -60, 60, -70, 70, -80, 80, -90, 90, -100, 100, -100]), 200, 'Test 71');
test(maxAdjacentDistance([5, -3, 12, 7, -8, 15, -10]), 25, 'Test 72');
test(maxAdjacentDistance([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, 50]), 100, 'Test 73');
test(maxAdjacentDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -100]), 120, 'Test 74');
test(maxAdjacentDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 29, 'Test 75');
test(maxAdjacentDistance([-50, 0, 50, 0, -50, 0, 50, 0, -50, 0, 50]), 100, 'Test 76');
test(maxAdjacentDistance([1, -99, 98, -97, 96, -95, 94, -93, 92, -91, 90]), 197, 'Test 77');
test(maxAdjacentDistance([10,-10,20,-20,30,-30,40,-40,50,-50]), 100, 'Test 78');
test(maxAdjacentDistance([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, -60, -70]), 120, 'Test 79');
test(maxAdjacentDistance([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 20, 'Test 80');
test(maxAdjacentDistance([-2, -4, -6, -8, -10, -12, -14, -16, -18, -20, -2, -4, -6]), 18, 'Test 81');
test(maxAdjacentDistance([99, -99, 99, -99, 99, -99]), 198, 'Test 82');
test(maxAdjacentDistance([5, -10, 15, -20, 25, -30, 35, -40, 45, -50]), 95, 'Test 83');
test(maxAdjacentDistance([5, 23, -50, 22, 0, 77, -30]), 107, 'Test 84');
test(maxAdjacentDistance([50,-50,49,-49,48,-48]), 100, 'Test 85');
test(maxAdjacentDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 1]), 20, 'Test 86');
test(maxAdjacentDistance([7, 3, 1, -1, -3, -7, 3, 7, 1, -1, -3, -7, 3, 7, 1]), 10, 'Test 87');
test(maxAdjacentDistance([-100, 0, 100, -100, 0, 100]), 200, 'Test 88');
test(maxAdjacentDistance([0, 100, 50, 0, -50, -100, -50, 0, 50, 100, 50, 0, -50, -100, -50, 0, 50, 100, 50, 0, -50, -100, -50, 0, 50, 100]), 100, 'Test 89');
test(maxAdjacentDistance([10, 20, 30, 40, 50, -10, -20, -30, -40, -50]), 60, 'Test 90');
test(maxAdjacentDistance([0, 100, 200, 300, 400, 500, 600, 700, 800, 900, -100, -200, -300, -400, -500, -600, -700, -800, -900, 0]), 1000, 'Test 91');
test(maxAdjacentDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 92');
test(maxAdjacentDistance([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 18, 'Test 93');
test(maxAdjacentDistance([1, 2, 3, 4, 5, -10, 6, 7, 8, 9, 10]), 16, 'Test 94');
test(maxAdjacentDistance([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 95');
test(maxAdjacentDistance([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50]), 100, 'Test 96');
test(maxAdjacentDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 19, 'Test 97');
test(maxAdjacentDistance([-10, 0, 10, 20, -20, 30, -30, 40, -40]), 80, 'Test 98');
test(maxAdjacentDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 99');
test(maxAdjacentDistance([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 0]), 100, 'Test 100');
test(maxAdjacentDistance([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0]), 25, 'Test 101');
test(maxAdjacentDistance([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 200, 'Test 102');
test(maxAdjacentDistance([75, 25, 50, 0, 100, 50, 0, 75, 25, 50, 0]), 100, 'Test 103');
test(maxAdjacentDistance([1,100,2,99,3,98,4,97,5,96,6,95,7,94,8,93,9,92]), 99, 'Test 104');
test(maxAdjacentDistance([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50]), 100, 'Test 105');
test(maxAdjacentDistance([-50, 0, 50, -50, 0, 50]), 100, 'Test 106');
test(maxAdjacentDistance([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 90, 'Test 107');
test(maxAdjacentDistance([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 108');
test(maxAdjacentDistance([-99, 99, -98, 98, -97, 97, -96, 96, -95, 95, -94, 94, -93, 93, -92, 92, -91, 91, -90, 90]), 198, 'Test 109');
test(maxAdjacentDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, -1]), 40, 'Test 110');
test(maxAdjacentDistance([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 50, 'Test 111');
test(maxAdjacentDistance([100, -50, 200, -100, 300, -150, 400, -200, 500]), 700, 'Test 112');
test(maxAdjacentDistance([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 2, 'Test 113');
test(maxAdjacentDistance([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -50]), 150, 'Test 114');
test(maxAdjacentDistance([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100]), 200, 'Test 115');
test(maxAdjacentDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,-1,-2,-3,-4,-5]), 21, 'Test 116');
test(maxAdjacentDistance([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 9, 'Test 117');
test(maxAdjacentDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), 99, 'Test 118');
test(maxAdjacentDistance([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 90, 'Test 119');
test(maxAdjacentDistance([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80]), 19, 'Test 120');

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
