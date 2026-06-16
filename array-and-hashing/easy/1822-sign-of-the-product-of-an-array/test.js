// Test: 1822. Sign Of The Product Of An Array
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { arraySign } = require("./solution");

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

console.log("\n1822. Sign Of The Product Of An Array\n");

test(arraySign([-1]), -1, 'Test 1');
test(arraySign([1]), 1, 'Test 2');
test(arraySign([0,0,0]), 0, 'Test 3');
test(arraySign([-99,-98,-97,-96,-95,-94,-93,-92,-91,-90]), 1, 'Test 4');
test(arraySign([100,-100,100]), -1, 'Test 5');
test(arraySign([0]), 0, 'Test 6');
test(arraySign([100,-100,1]), -1, 'Test 7');
test(arraySign([-100,0,100]), 0, 'Test 8');
test(arraySign([-1,-2,-3,-4,3,2,1]), 1, 'Test 9');
test(arraySign([100,-100,100,-100]), 1, 'Test 10');
test(arraySign([-1,-2,-3,-4]), 1, 'Test 11');
test(arraySign([0,0,0,0]), 0, 'Test 12');
test(arraySign([-1,1,-1,1,-1]), -1, 'Test 13');
test(arraySign([1,5,0,2,-3]), 0, 'Test 14');
test(arraySign([1,2,3,4,5]), 1, 'Test 15');
test(arraySign([-1,-2,-3]), -1, 'Test 16');
test(arraySign([-1, 0, 1, -1, 0, 1, -1, 0, 1]), 0, 'Test 17');
test(arraySign([100, -50, 25, -10, 5]), 1, 'Test 18');
test(arraySign([100, -50, 25, -12.5, 6.25]), 1, 'Test 19');
test(arraySign([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), 1, 'Test 20');
test(arraySign([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 1, 'Test 21');
test(arraySign([0, 1, -1, 2, -2, 3, -3]), 0, 'Test 22');
test(arraySign([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 0, 'Test 23');
test(arraySign([-1, 1, 0, -1, 1, 0, -1, 1, 0]), 0, 'Test 24');
test(arraySign([0, 1, 2, 3, 4, 5]), 0, 'Test 25');
test(arraySign([10, -10, 20, -20, 30, -30]), -1, 'Test 26');
test(arraySign([10, 20, 30, 40, 50, 0, 60, 70, 80, 90]), 0, 'Test 27');
test(arraySign([100, 200, 300, 400, 500, 600, 700, 800, 900, -1]), -1, 'Test 28');
test(arraySign([1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1]), 0, 'Test 29');
test(arraySign([-50, 50, -50, 50, -50, 50, -50, 50, -50, 50]), -1, 'Test 30');
test(arraySign([50, 25, -10, 4, -2, 0.5, 0.2]), 1, 'Test 31');
test(arraySign([-100, 0, 100, -100, 100, 0]), 0, 'Test 32');
test(arraySign([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]), 0, 'Test 33');
test(arraySign([1, 2, 3, 4, 5, -6, -7, -8, -9, -10]), -1, 'Test 34');
test(arraySign([-1, -1, -1, -1, -1]), -1, 'Test 35');
test(arraySign([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 1, 'Test 36');
test(arraySign([0, 0, 0, 0]), 0, 'Test 37');
test(arraySign([-100, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80, -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67, -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54, -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0]), 0, 'Test 38');
test(arraySign([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), -1, 'Test 39');
test(arraySign([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, -1]), -1, 'Test 40');
test(arraySign([99, -99, 100, -100, 101, -101]), -1, 'Test 41');
test(arraySign([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), -1, 'Test 42');
test(arraySign([1, 1, 1, 1, 1, 1, 1, 1, 1, 0]), 0, 'Test 43');
test(arraySign([1, -10, 100, -1000, 10000, -100000, 1000000, -10000000, 100000000, -1000000000]), -1, 'Test 44');
test(arraySign([0, 1, 2, 3]), 0, 'Test 45');
test(arraySign([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), -1, 'Test 46');
test(arraySign([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), -1, 'Test 47');
test(arraySign([10, -10, 100, -100, 1000, -1000, 10000, -10000]), 1, 'Test 48');
test(arraySign([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 49');
test(arraySign([0, 0, 0, 0, 0]), 0, 'Test 50');
test(arraySign([1, -1, 2, -2, 3, -3]), -1, 'Test 51');
test(arraySign([100, -50, 25, -12.5, 0.5]), 1, 'Test 52');
test(arraySign([-1, 0, 1, 0, -1, 0, 1, 0, -1, 0]), 0, 'Test 53');
test(arraySign([100, -100, 50, -50, 25, -25]), -1, 'Test 54');
test(arraySign([100, -100, 50, -50, 25, -25, 12, -12, 6, -6]), -1, 'Test 55');
test(arraySign([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 1, 'Test 56');
test(arraySign([1, 0, -1, 2, 0, -2, 3, 0, -3, 4, 0, -4]), 0, 'Test 57');
test(arraySign([100, -50, 0, 25, -10]), 0, 'Test 58');
test(arraySign([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), -1, 'Test 59');
test(arraySign([99, 98, 97, -96, -95, -94]), -1, 'Test 60');
test(arraySign([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 61');
test(arraySign([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0]), 0, 'Test 62');
test(arraySign([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 1, 'Test 63');
test(arraySign([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]), 1, 'Test 64');
test(arraySign([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 65');
test(arraySign([99, -99, 98, -98, 97, -97, 96, -96, 95, -95]), -1, 'Test 66');
test(arraySign([-10, 10, -10, 10]), 1, 'Test 67');
test(arraySign([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 68');
test(arraySign([1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10]), 0, 'Test 69');
test(arraySign([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), 1, 'Test 70');
test(arraySign([10, -20, 30, -40, 50, -60, 70, -80, 90, -100]), -1, 'Test 71');
test(arraySign([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 72');
test(arraySign([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1]), -1, 'Test 73');
test(arraySign([100, 200, 300, 400, 500, -1]), -1, 'Test 74');
test(arraySign([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), -1, 'Test 75');
test(arraySign([-10, -20, -30, -40, -50]), -1, 'Test 76');
test(arraySign([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1]), -1, 'Test 77');
test(arraySign([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]), 0, 'Test 78');
test(arraySign([100, -50, 20, -10, 5]), 1, 'Test 79');
test(arraySign([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -16]), -1, 'Test 80');
test(arraySign([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 1, 'Test 81');
test(arraySign([100, 200, 300, -400, -500, 600, -700, 800, -900, 1000]), 1, 'Test 82');
test(arraySign([1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 83');
test(arraySign([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), -1, 'Test 84');
test(arraySign([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80]), 1, 'Test 85');
test(arraySign([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1, 'Test 86');
test(arraySign([-1, 0, 1, 2, 3, 4, 5]), 0, 'Test 87');
test(arraySign([100, -100, 100, -100, 100]), 1, 'Test 88');
test(arraySign([1, -1, 1, -1, 1, -1]), -1, 'Test 89');
test(arraySign([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), -1, 'Test 90');
test(arraySign([5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5]), -1, 'Test 91');
test(arraySign([-1, -1, -1, -1, -1, -1, -1, -1, -1, 0]), 0, 'Test 92');
test(arraySign([100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100]), 1, 'Test 93');
test(arraySign([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 1, 'Test 94');
test(arraySign([-100, 100, -10, 10, -1, 1]), -1, 'Test 95');
test(arraySign([-100, -200, -300, -400, -500, 1]), -1, 'Test 96');

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
