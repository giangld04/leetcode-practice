// Test: 735. Asteroid Collision
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { asteroidCollision } = require("./solution");

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

console.log("\n735. Asteroid Collision\n");

test(asteroidCollision([1,-1,2,-2,3,-3]), [], 'Test 1');
test(asteroidCollision([8,-8]), [], 'Test 2');
test(asteroidCollision([-2,-2,1,1]), [-2, -2, 1, 1], 'Test 3');
test(asteroidCollision([1,2,3,4,5,-1,-2,-3,-4,-5]), [1, 2, 3, 4], 'Test 4');
test(asteroidCollision([-1000,1000]), [-1000, 1000], 'Test 5');
test(asteroidCollision([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1], 'Test 6');
test(asteroidCollision([1,2,3,-4,-3,-2,-1]), [-4, -3, -2, -1], 'Test 7');
test(asteroidCollision([5,-1,5,-1]), [5, 5], 'Test 8');
test(asteroidCollision([-2,-1,1,2]), [-2, -1, 1, 2], 'Test 9');
test(asteroidCollision([1,2,3,-3,-2,-1]), [], 'Test 10');
test(asteroidCollision([-2,-2,1,-2]), [-2, -2, -2], 'Test 11');
test(asteroidCollision([1,2,3,-1,-2,-3]), [1, 2], 'Test 12');
test(asteroidCollision([1,-2,-2,-2]), [-2, -2, -2], 'Test 13');
test(asteroidCollision([1,2,3,-4,-5]), [-4, -5], 'Test 14');
test(asteroidCollision([1000,-1000]), [], 'Test 15');
test(asteroidCollision([-3,3,1,-1,-2,2]), [-3, 3, 2], 'Test 16');
test(asteroidCollision([10,1,2,-3,-4,-5,6,7,8,9]), [10, 6, 7, 8, 9], 'Test 17');
test(asteroidCollision([-2,-1,1,2,3,4]), [-2, -1, 1, 2, 3, 4], 'Test 18');
test(asteroidCollision([5,-10,10,-5]), [-10, 10], 'Test 19');
test(asteroidCollision([10,2,-5]), [10], 'Test 20');
test(asteroidCollision([-5,-4,-3,-2,-1,1,2,3,4,5]), [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], 'Test 21');
test(asteroidCollision([6,2,-3,-4,-5]), [6], 'Test 22');
test(asteroidCollision([5,10,-5]), [5, 10], 'Test 23');
test(asteroidCollision([5,10,-10,-5]), [], 'Test 24');
test(asteroidCollision([1,2,-3,-4]), [-3, -4], 'Test 25');
test(asteroidCollision([10,2,-3,5,-1,-4,6,-6]), [10, 5], 'Test 26');
test(asteroidCollision([-7,7,-8,8,-9,9,10,-10,11,-11]), [-7, -8, -9, 9], 'Test 27');
test(asteroidCollision([100,-100,50,-50,25,-25,10,-10,5,-5,3,-3,2,-2,1,-1]), [], 'Test 28');
test(asteroidCollision([50, 40, 30, 20, 10, -10, -20, -30, -40, -50]), [], 'Test 29');
test(asteroidCollision([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), [-2, -4, -6, -8, -10, -12, -14, 15], 'Test 30');
test(asteroidCollision([1,2,3,4,5,-6,-7,-8,-9,-10]), [-6, -7, -8, -9, -10], 'Test 31');
test(asteroidCollision([10, 20, 30, 40, 50, -15, -25, -35, -45, -55, 60, 70]), [-55, 60, 70], 'Test 32');
test(asteroidCollision([5, 5, 5, 5, 5, -5, -5, -5, -5, -5]), [], 'Test 33');
test(asteroidCollision([3,3,3,3,-3,-3,-3,-3,3,3,3,3,-3,-3,-3,-3]), [], 'Test 34');
test(asteroidCollision([50,-40,30,-20,10,-5,0,5,-10,20,-30,40,-50]), [], 'Test 35');
test(asteroidCollision([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), [], 'Test 36');
test(asteroidCollision([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, -29, -27, -25, -23, -21, -19, -17, -15, -13, -11, -9, -7, -5, -3, -1]), [], 'Test 37');
test(asteroidCollision([-50, 50, -40, 40, -30, 30, -20, 20, -10, 10]), [-50, 50, 40, 30, 20, 10], 'Test 38');
test(asteroidCollision([100,-90,-80,70,-60,50,-40,30,-20,10]), [100, 70, 50, 30, 10], 'Test 39');
test(asteroidCollision([-5,5,-10,10,-15,15,-20,20,25]), [-5, -10, -15, -20, 20, 25], 'Test 40');
test(asteroidCollision([10, 20, 30, 40, 50, -50, -40, -30, -20, -10]), [], 'Test 41');
test(asteroidCollision([1, -1, -1, 1, 2, -2, -2, 2, 3, -3, -3, 3, 4, -4, -4, 4]), [-1, -2, -3, -4, 4], 'Test 42');
test(asteroidCollision([-10,-20,-30,-40,-50,50,40,30,20,10]), [-10, -20, -30, -40, -50, 50, 40, 30, 20, 10], 'Test 43');
test(asteroidCollision([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), [], 'Test 44');
test(asteroidCollision([-1, -2, -3, 1, 2, 3, -4, -5, 4, 5]), [-1, -2, -3, -4, -5, 4, 5], 'Test 45');
test(asteroidCollision([5, 15, 25, 35, 45, 55, -5, -15, -25, -35, -45, -55]), [5, 15, 25, 35, 45], 'Test 46');
test(asteroidCollision([7, 6, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6, -7]), [], 'Test 47');
test(asteroidCollision([100, -200, 50, -50, 300, -150, 250, -100]), [-200, 300, 250], 'Test 48');
test(asteroidCollision([-10, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), [-10], 'Test 49');
test(asteroidCollision([5, 10, 15, 20, -20, -15, -10, -5]), [], 'Test 50');
test(asteroidCollision([8,-2,9,-3,4,-1,7,-5,6,-4]), [8, 9, 4, 7, 6], 'Test 51');
test(asteroidCollision([1,2,3,4,5,6,7,8,9,10,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), [], 'Test 52');
test(asteroidCollision([5, 5, 5, 5, -5, -5, -5, -5, 5, 5]), [5, 5], 'Test 53');
test(asteroidCollision([5, 7, 3, -7, 4, -4, 2, -2, 1, -1]), [5], 'Test 54');
test(asteroidCollision([1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 55');
test(asteroidCollision([9, 8, 7, 6, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6, -7, -8, -9]), [], 'Test 56');
test(asteroidCollision([-5, 5, -10, 10, -15, 15, -20, 20, -25, 25]), [-5, -10, -15, -20, -25, 25], 'Test 57');
test(asteroidCollision([2, -2, 4, -4, 6, -6, 8, -8, 10, -10, 12, -12, 14, -14, 16, -16]), [], 'Test 58');
test(asteroidCollision([1,3,5,7,9,-9,-7,-5,-3,-1,2,4,6,8,10,-10,-8,-6,-4,-2]), [], 'Test 59');
test(asteroidCollision([-1, -2, -3, 4, 5, 6, -7, -8, 9, 10, -10, 11, -11, 12, -12]), [-1, -2, -3, -7, -8, 9], 'Test 60');
test(asteroidCollision([-10,10,-9,9,-8,8,-7,7,-6,6,-5,5,-4,4,-3,3,-2,2,-1,1]), [-10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 61');
test(asteroidCollision([50, 40, 30, 20, 10, -10, -20, -30, -40, -50, 60, 70, 80, 90]), [60, 70, 80, 90], 'Test 62');
test(asteroidCollision([5,-3,7,-2,1,-10,15,-15,20]), [-10, 20], 'Test 63');
test(asteroidCollision([2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9,10,-10]), [], 'Test 64');
test(asteroidCollision([5, -10, 15, -20, 25, -30, 35, -40]), [-10, -20, -30, -40], 'Test 65');
test(asteroidCollision([5, -5, 5, -5, 5, -5, 5, -5, 5, -5]), [], 'Test 66');
test(asteroidCollision([5,-5,5,-5,5,-5]), [], 'Test 67');
test(asteroidCollision([100,-99,98,-97,96,-95,94,-93,92,-91,90]), [100, 98, 96, 94, 92, 90], 'Test 68');
test(asteroidCollision([-10, -20, -30, 30, 20, 10, -10, -20, -30]), [-10, -20, -30], 'Test 69');
test(asteroidCollision([10, 20, -15, -20, 5, 15, -10, 25, -30]), [-30], 'Test 70');
test(asteroidCollision([10, 20, 30, -5, -15, -25, -35, 40, -45, 50]), [-35, -45, 50], 'Test 71');
test(asteroidCollision([-10,-20,-30,10,20,30,-15,-25,5,15,-5,-10,-20,25,35,-40,40,-45,45]), [-10, -20, -30, -40, -45, 45], 'Test 72');
test(asteroidCollision([-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9]), [-9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 73');
test(asteroidCollision([5, 10, -10, -5, 20, -20, 15, -15, 25, -25]), [], 'Test 74');
test(asteroidCollision([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), [], 'Test 75');
test(asteroidCollision([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12]), [-1, -3, -5, -7, -9, -11, 12], 'Test 76');
test(asteroidCollision([1,2,3,4,5,-5,-4,-3,-2,-1]), [], 'Test 77');
test(asteroidCollision([10,-1,9,-2,8,-3,7,-4,6,-5]), [10, 9, 8, 7, 6], 'Test 78');
test(asteroidCollision([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), [], 'Test 79');
test(asteroidCollision([100,-99,98,-97,96,-95,94,-93,92,-91,90,-89]), [100, 98, 96, 94, 92, 90], 'Test 80');
test(asteroidCollision([1, 2, 3, 4, 5, 6, 7, 8, 9, -9, -8, -7, -6, -5, -4, -3, -2, -1]), [], 'Test 81');
test(asteroidCollision([1, 1, 1, 1, 1, -1, -1, -1, -1, -1]), [], 'Test 82');
test(asteroidCollision([5,10,-5,10,-10,5,-5,10]), [5, 10, 10], 'Test 83');
test(asteroidCollision([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), [], 'Test 84');
test(asteroidCollision([1, 2, 3, 4, 5, -5, -4, -3, -2, -1]), [], 'Test 85');
test(asteroidCollision([100, 200, 300, -100, -200, -300, 400, -400, 500, -500]), [100, 200], 'Test 86');
test(asteroidCollision([10,-20,30,-40,50,-60,70,-80,90,-100,100,-90,80,-70,60,-50,40,-30,20,-10]), [-20, -40, -60, -80, -100, 100, 80, 60, 40, 20], 'Test 87');
test(asteroidCollision([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10, 11, -11]), [], 'Test 88');
test(asteroidCollision([20,19,18,17,16,15,14,13,12,11,10,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20]), [], 'Test 89');
test(asteroidCollision([100, -1, 99, -2, 98, -3, 97, -4, 96, -5, 95, -6, 94, -7, 93, -8, 92, -9, 91, -10]), [100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 'Test 90');
test(asteroidCollision([10, -5, 5, -10, 10, -10, 5, -5, 2, -2]), [], 'Test 91');
test(asteroidCollision([-10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60]), [-10], 'Test 92');
test(asteroidCollision([100, -50, 50, -100, 200, -200, 300, -300, 400, -400]), [], 'Test 93');
test(asteroidCollision([1000,-1000,500,-500,250,-250,125,-125,63,-63,31,-31,15,-15,7,-7,3,-3,1,-1]), [], 'Test 94');
test(asteroidCollision([1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, -10, 10]), [-2, -3, -4, -5, -6, -7, -8, -9, -10, 10], 'Test 95');
test(asteroidCollision([-10, -20, -30, -40, -50, 50, 40, 30, 20, 10]), [-10, -20, -30, -40, -50, 50, 40, 30, 20, 10], 'Test 96');
test(asteroidCollision([100, 200, 300, 400, 500, -100, -200, -300, -400, -500, 600, 700, 800, 900, 1000]), [100, 200, 300, 400, 600, 700, 800, 900, 1000], 'Test 97');
test(asteroidCollision([10,20,30,40,50,-50,-40,-30,-20,-10]), [], 'Test 98');
test(asteroidCollision([-1, -2, -3, -4, -5, 5, 4, 3, 2, 1]), [-1, -2, -3, -4, -5, 5, 4, 3, 2, 1], 'Test 99');
test(asteroidCollision([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15, 16]), [-1, -3, -5, -7, -9, -11, -13, -15, 16], 'Test 100');
test(asteroidCollision([5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5]), [], 'Test 101');
test(asteroidCollision([10,-10,5,3,-3,-5,8,8,-8,2,-2]), [8], 'Test 102');
test(asteroidCollision([10, -20, 30, -40, 50, -60, 70, -80, 90, -100, 110, -120, 130, -140, 150]), [-20, -40, -60, -80, -100, -120, -140, 150], 'Test 103');
test(asteroidCollision([1, 2, 3, -3, -2, -1, 4, 5, -5, -4]), [], 'Test 104');
test(asteroidCollision([-1,-2,-3,-4,-5,5,4,3,2,1]), [-1, -2, -3, -4, -5, 5, 4, 3, 2, 1], 'Test 105');
test(asteroidCollision([5, 10, 15, -10, 20, -15, -20, 25, -25, 30, -30, 35, -35]), [5, 10, 15], 'Test 106');
test(asteroidCollision([100, -50, 50, -25, 25, -10, 10, -5, 5, -2, 2, -1, 1]), [100, 50, 25, 10, 5, 2, 1], 'Test 107');
test(asteroidCollision([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), [-1, -3, -5, -7, -9, 10], 'Test 108');
test(asteroidCollision([100, -50, 20, -10, 5, -5, 10, -20, 30, -40]), [100], 'Test 109');
test(asteroidCollision([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), [1, 2, 3, 4], 'Test 110');
test(asteroidCollision([10, 20, 30, 40, 50, 60, 70, 80, 90, -90, -80, -70, -60, -50, -40, -30, -20, -10]), [], 'Test 111');
test(asteroidCollision([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 112');
test(asteroidCollision([10,20,30,-15,-25,5,15,-5,-10,-20,25,35,-40,40,-45,45]), [-40, -45, 45], 'Test 113');
test(asteroidCollision([1,2,3,4,5,6,7,8,9,-9,-8,-7,-6,-5,-4,-3,-2,-1]), [], 'Test 114');
test(asteroidCollision([10, 20, 30, 40, 50, -10, -20, -30, -40, -50]), [10, 20, 30, 40], 'Test 115');
test(asteroidCollision([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 116');
test(asteroidCollision([50,-50,49,-49,48,-48,47,-47,46,-46,45,-45,44,-44,43,-43]), [], 'Test 117');
test(asteroidCollision([-100, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50, -50, 50]), [-100, 50], 'Test 118');
test(asteroidCollision([-1, -2, -3, -4, -5, 5, 4, 3, 2, 1, -6, 6, -7, 7, -8, 8, -9, 9]), [-1, -2, -3, -4, -5, -6, -7, -8, -9, 9], 'Test 119');
test(asteroidCollision([5,10,15,-15,-10,-5,20,-20,25,-25,30,-30]), [], 'Test 120');
test(asteroidCollision([1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9,10,-10]), [], 'Test 121');
test(asteroidCollision([1,1,1,1,1,-1,-1,-1,-1,-1]), [], 'Test 122');
test(asteroidCollision([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -15]), [-2, -4, -6, -8, -10, -12, -14], 'Test 123');

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
