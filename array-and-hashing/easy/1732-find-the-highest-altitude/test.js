// Test: 1732. Find The Highest Altitude
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { largestAltitude } = require("./solution");

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

console.log("\n1732. Find The Highest Altitude\n");

test(largestAltitude([4,3,2,1,0,-1,-2,-3,-4]), 10, 'Test 1');
test(largestAltitude([-1,-2,-3,-4]), 0, 'Test 2');
test(largestAltitude([-10,-20,-30,-40,-50]), 0, 'Test 3');
test(largestAltitude([1,2,3,4,5,6,7,8,9,100]), 145, 'Test 4');
test(largestAltitude([-1,1,-1,1,-1,1]), 0, 'Test 5');
test(largestAltitude([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 6');
test(largestAltitude([-5,-4,-3,-2,-1]), 0, 'Test 7');
test(largestAltitude([5,5,5,5]), 20, 'Test 8');
test(largestAltitude([-100,50,-50,100,-100]), 0, 'Test 9');
test(largestAltitude([-100,100,-100,100,-100]), 0, 'Test 10');
test(largestAltitude([100,-100,100,-100,100]), 100, 'Test 11');
test(largestAltitude([1,2,3,4,5]), 15, 'Test 12');
test(largestAltitude([-1,-2,-3,-4,-5,-6,-7,-8,-9,-100]), 0, 'Test 13');
test(largestAltitude([-1,-2,-3,-4,-5]), 0, 'Test 14');
test(largestAltitude([1,-1,1,-1,1,-1]), 1, 'Test 15');
test(largestAltitude([-50,50,-25,25,-12,12]), 0, 'Test 16');
test(largestAltitude([10,20,30,40,50]), 150, 'Test 17');
test(largestAltitude([0,0,0,0,0]), 0, 'Test 18');
test(largestAltitude([100,-50,50,-100,50]), 100, 'Test 19');
test(largestAltitude([100,-100,50,-50,25,-25]), 100, 'Test 20');
test(largestAltitude([100,-100,100,-100]), 100, 'Test 21');
test(largestAltitude([-5,1,5,0,-7]), 1, 'Test 22');
test(largestAltitude([0,0,0,0]), 0, 'Test 23');
test(largestAltitude([50,50,50,50,50]), 250, 'Test 24');
test(largestAltitude([-4,-3,-2,-1,4,3,2]), 0, 'Test 25');
test(largestAltitude([23, -15, 42, -5, 0, 17, -30, 29]), 62, 'Test 26');
test(largestAltitude([-10, -20, 30, 40, -50, 60, -70, 80, -90, 100]), 70, 'Test 27');
test(largestAltitude([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 28');
test(largestAltitude([10, -5, 15, -20, 25, -30, 35, -40]), 30, 'Test 29');
test(largestAltitude([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 0, 'Test 30');
test(largestAltitude([100, -100, 100, -100, 100, -100, 100, -100]), 100, 'Test 31');
test(largestAltitude([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5]), 50, 'Test 32');
test(largestAltitude([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15,16,-17,18,-19,20]), 10, 'Test 33');
test(largestAltitude([100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -98]), 100, 'Test 34');
test(largestAltitude([10, -5, 3, 2, -3, 4, -2, 5, -6, 1]), 14, 'Test 35');
test(largestAltitude([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 36');
test(largestAltitude([100, -1, 99, -2, 98, -3, 97, -4, 96, -5, 95, -6, 94, -7, 93, -8, 92, -9, 91, -10]), 910, 'Test 37');
test(largestAltitude([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 15, 'Test 38');
test(largestAltitude([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), 55, 'Test 39');
test(largestAltitude([-1,-1,-1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,1,1,1,1,1]), 0, 'Test 40');
test(largestAltitude([10,-5,3,2,-3,4,-1,-2,5,-6,7,-8,9,-10,11,-12,13,-14,15,-16]), 18, 'Test 41');
test(largestAltitude([5,-3,20,-20,30,-10,15,-5,25,-15,10,-5,30,-30,40]), 87, 'Test 42');
test(largestAltitude([10, 15, 20, 25, 30, 35, 40, 45, 50, -100]), 270, 'Test 43');
test(largestAltitude([50, -20, 30, -10, 40, -5, 60, -25, 70, -10]), 190, 'Test 44');
test(largestAltitude([0, 25, -25, 50, -50, 100, -100]), 100, 'Test 45');
test(largestAltitude([20, 30, -10, -40, 50, 10, -20, 30, -40, 50]), 80, 'Test 46');
test(largestAltitude([5, 10, 15, 20, 25, -5, -10, -15, -20, -25, 5, 10, 15, 20, 25, -5, -10, -15, -20, -25]), 75, 'Test 47');
test(largestAltitude([99, -50, 50, -100, 100, -99, 99, -49, 49, -51, 51, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5]), 99, 'Test 48');
test(largestAltitude([100, -25, 25, -50, 50, -75, 75, -100, 100]), 100, 'Test 49');
test(largestAltitude([10, -5, 3, -2, 8, -4, 6, -3, 5, -1, 7, -2, 9, -4, 11, -5, 13, -6, 15, -7]), 55, 'Test 50');
test(largestAltitude([5, 5, 5, 5, 5, -5, -5, -5, -5, -5, 10, 10, -10, -10, 15]), 25, 'Test 51');
test(largestAltitude([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11]), 210, 'Test 52');
test(largestAltitude([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 53');
test(largestAltitude([5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5]), 5, 'Test 54');
test(largestAltitude([100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100]), 100, 'Test 55');
test(largestAltitude([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), 0, 'Test 56');
test(largestAltitude([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20]), 10, 'Test 57');
test(largestAltitude([1,2,3,4,5,-5,-4,-3,-2,-1,1,2,3,4,5,-5,-4,-3,-2,-1]), 15, 'Test 58');
test(largestAltitude([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, 50, -50, 40, -40, 30, -30, 20, -20, 10, -10]), 150, 'Test 59');
test(largestAltitude([-5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5]), 0, 'Test 60');
test(largestAltitude([0, 20, -10, 5, -3, 15, -10]), 27, 'Test 61');
test(largestAltitude([10,-5,3,8,-2,15,-7,20]), 42, 'Test 62');
test(largestAltitude([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 63');
test(largestAltitude([-10, -20, -30, -40, -50, 10, 20, 30, 40, 50, -1, -2, -3, -4, -5, 1, 2, 3, 4, 5]), 0, 'Test 64');
test(largestAltitude([-5, -10, -15, 20, 25, -30, 35, -40, 45, -50, 55, -60, 65, -70, 75, -80, 85, -90, 95]), 50, 'Test 65');
test(largestAltitude([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), 50, 'Test 66');
test(largestAltitude([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100, -110, 120, -130, 140, -150]), 70, 'Test 67');
test(largestAltitude([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), 50, 'Test 68');
test(largestAltitude([99, -99, 98, -98, 97, -97, 96, -96, 95, -95]), 99, 'Test 69');
test(largestAltitude([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20, -21, 22, -23, 24, -25, 26, -27, 28, -29, 30]), 15, 'Test 70');
test(largestAltitude([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 0, 'Test 71');
test(largestAltitude([5, 10, 15, 20, 25, 30, -5, -10, -15, -20, -25, -30]), 105, 'Test 72');
test(largestAltitude([100, -50, 50, -100, 100, -100, 50, -50, 25, -25, 75, -75, 125, -125, 62, -62, 31, -31, 15, -15]), 125, 'Test 73');
test(largestAltitude([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 5, 'Test 74');
test(largestAltitude([10, -20, 30, -40, 50, -60, 70, -80, 90, -100, 110, -120, 130, -140, 150, -160, 170, -180, 190, -200]), 100, 'Test 75');
test(largestAltitude([100, -50, 25, -12, 50, -25, 60, -30, 70, -35, 80, -40, 90, -45, 100]), 338, 'Test 76');
test(largestAltitude([-10, 10, -10, 10, -10, 10, -10, 10, -10, 10]), 0, 'Test 77');
test(largestAltitude([20,-10,30,-15,40,-20,50,-25,60,-30,70,-35,80,-40,90]), 265, 'Test 78');
test(largestAltitude([10, -10, 20, -20, 30, -30, 40, -40, 50]), 50, 'Test 79');
test(largestAltitude([2, 3, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20, -21, 22, -23, 24, -25]), 17, 'Test 80');
test(largestAltitude([-50, 25, -25, 50, -50, 75, -100, 125]), 50, 'Test 81');
test(largestAltitude([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -15, -20, -25, -30, -35, -40, -45, -50]), 275, 'Test 82');
test(largestAltitude([-10, -20, -30, -40, -50, 50, 40, 30, 20, 10]), 0, 'Test 83');
test(largestAltitude([1, 1, 1, 1, 1, 1, 1, 1, 1, -10]), 9, 'Test 84');
test(largestAltitude([0,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 85');
test(largestAltitude([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 10, 'Test 86');
test(largestAltitude([-50, 0, 50, 0, -50, 0, 50, 0, -50, 0, 50, 0, -50, 0, 50]), 0, 'Test 87');
test(largestAltitude([0, 20, -10, 30, -20, 10, -30, 40, -50, 60]), 50, 'Test 88');
test(largestAltitude([10, -20, 30, -40, 50, -60, 70, -80, 90, -100]), 50, 'Test 89');
test(largestAltitude([100, -50, 50, -50, 100, -50, 50, -50, 100]), 200, 'Test 90');
test(largestAltitude([100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99, 100, -99]), 114, 'Test 91');
test(largestAltitude([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9]), 9, 'Test 92');
test(largestAltitude([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 10, 'Test 93');
test(largestAltitude([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20, 21, -22, 23, -24, 25, -26, 27, -28, 29, -30]), 15, 'Test 94');
test(largestAltitude([5, -5, 10, -10, 15, -15, 20, -20, 25, -25]), 25, 'Test 95');
test(largestAltitude([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), 210, 'Test 96');
test(largestAltitude([10, -20, 30, -40, 50, -60, 70]), 40, 'Test 97');
test(largestAltitude([10,-10,20,-20,30,-30,40,-40,50,-50]), 50, 'Test 98');
test(largestAltitude([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 15, 'Test 99');
test(largestAltitude([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 55, 'Test 100');
test(largestAltitude([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16, -17, 18, -19, 20, -21, 22, -23, 24, -25, 26, -27, 28, -29, 30, -30]), 15, 'Test 101');
test(largestAltitude([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 10, 'Test 102');
test(largestAltitude([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 0, 'Test 103');
test(largestAltitude([100,-99,98,-97,96,-95,94,-93,92,-91,90,-89,88,-87,86,-85,84,-83,82,-81,80]), 100, 'Test 104');
test(largestAltitude([2, 4, -3, 1, -2, 1, 5, -4, 3, -1, 0, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 12, 'Test 105');
test(largestAltitude([100, -50, 50, -100, 50, -50, 100, -100, 50, -50]), 100, 'Test 106');
test(largestAltitude([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 107');
test(largestAltitude([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100, -10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), 100, 'Test 108');
test(largestAltitude([-50, 50, -50, 50, -50, 50, -50, 50]), 0, 'Test 109');
test(largestAltitude([-1, 3, -2, 4, -3, 5, -4, 6, -5, 7]), 10, 'Test 110');

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
