// Test: 223. Rectangle Area
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { computeArea } = require("./solution");

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

console.log("\n223. Rectangle Area\n");

test(computeArea(-2, -2, 2, 2, -2, -2, 2, 2), 16, 'Test 1');
test(computeArea(1, 1, 3, 3, 2, 2, 4, 4), 7, 'Test 2');
test(computeArea(0, 0, 5, 5, 5, 5, 10, 10), 50, 'Test 3');
test(computeArea(-3, 0, 3, 4, 0, -1, 9, 2), 45, 'Test 4');
test(computeArea(-5, -5, 0, 0, -3, -3, 3, 3), 52, 'Test 5');
test(computeArea(-5, -5, 0, 0, -3, -3, -1, -1), 25, 'Test 6');
test(computeArea(1, 1, 4, 5, 2, 2, 5, 6), 18, 'Test 7');
test(computeArea(0, 0, 1, 1, 2, 2, 3, 3), 2, 'Test 8');
test(computeArea(1, 1, 5, 5, 3, 3, 7, 7), 28, 'Test 9');
test(computeArea(-1, -1, 1, 1, 0, 0, 2, 2), 7, 'Test 10');
test(computeArea(1, 1, 3, 3, 4, 4, 6, 6), 8, 'Test 11');
test(computeArea(-20, -20, 20, 20, 15, 15, 25, 25), 1675, 'Test 12');
test(computeArea(-5, -5, 5, 5, -5, -5, -4, -4), 100, 'Test 13');
test(computeArea(1, 1, 4, 4, 2, 2, 5, 5), 14, 'Test 14');
test(computeArea(-1, -1, 1, 1, 1, 1, 3, 3), 8, 'Test 15');
test(computeArea(5, 5, 15, 15, 10, 10, 20, 20), 175, 'Test 16');
test(computeArea(-100, 100, 0, 200, -50, 150, 50, 250), 17500, 'Test 17');
test(computeArea(-100, -100, -50, -50, 50, 50, 100, 100), 5000, 'Test 18');
test(computeArea(-20, -20, 0, 0, -5, -5, 5, 5), 475, 'Test 19');
test(computeArea(500, 500, 600, 600, 550, 550, 700, 700), 30000, 'Test 20');
test(computeArea(-5000, -5000, 5000, 5000, 0, 0, 1, 1), 100000000, 'Test 21');
test(computeArea(-3, -3, 3, 3, -1, -1, 1, 1), 36, 'Test 22');
test(computeArea(1, 1, 10, 10, 5, 5, 15, 15), 156, 'Test 23');
test(computeArea(-10, -10, 10, 10, -20, -20, -15, -15), 425, 'Test 24');
test(computeArea(20, 20, 40, 60, 30, 40, 50, 80), 1400, 'Test 25');
test(computeArea(-2, 2, 2, 6, 1, 4, 3, 8), 22, 'Test 26');
test(computeArea(-800, -800, -700, -700, -750, -750, -650, -650), 17500, 'Test 27');
test(computeArea(-1, -1, 1, 1, 1, 1, 2, 2), 5, 'Test 28');
test(computeArea(0, 0, 10000, 10000, 5000, 5000, 15000, 15000), 175000000, 'Test 29');
test(computeArea(0, 0, 1, 1, -5000, -5000, 5000, 5000), 100000000, 'Test 30');
test(computeArea(-10, -10, 10, 10, 11, 11, 20, 20), 481, 'Test 31');
test(computeArea(-10, -10, 10, 10, -5, -5, 5, 5), 400, 'Test 32');
test(computeArea(0, 0, 5, 5, 5, 0, 10, 5), 50, 'Test 33');
test(computeArea(-10000, -10000, 10000, 10000, -5000, -5000, 5000, 5000), 400000000, 'Test 34');
test(computeArea(-200, -200, -100, -100, -150, -150, -50, -50), 17500, 'Test 35');
test(computeArea(0, 0, 10, 10, 1, 1, 9, 9), 100, 'Test 36');
test(computeArea(0, 0, 10000, 10000, 1, 1, 9999, 9999), 100000000, 'Test 37');
test(computeArea(-100, -100, 100, 100, 0, 0, 50, 50), 40000, 'Test 38');
test(computeArea(-10, -10, 10, 10, 5, 5, 15, 15), 475, 'Test 39');
test(computeArea(-20, -20, 5, 5, -15, -15, 0, 0), 625, 'Test 40');
test(computeArea(-10000, -10000, 10000, 10000, 5000, 5000, 15000, 15000), 475000000, 'Test 41');
test(computeArea(-1000, -1000, 1000, 1000, -500, -500, 500, 500), 4000000, 'Test 42');
test(computeArea(-10, -10, 5, 5, -5, -5, 15, 15), 525, 'Test 43');
test(computeArea(-10, -10, 10, 10, 10, 10, 20, 20), 500, 'Test 44');
test(computeArea(10, 20, 30, 40, 25, 30, 45, 50), 750, 'Test 45');
test(computeArea(0, 0, 1, 1, 1, 1, 2, 2), 2, 'Test 46');
test(computeArea(0, 0, 1, 1, -1, -1, 0, 0), 2, 'Test 47');
test(computeArea(-5, -5, 5, 5, -5, -5, 5, 5), 100, 'Test 48');
test(computeArea(-80, -80, -60, -40, -70, -70, -50, -50), 1000, 'Test 49');
test(computeArea(-2, -2, 2, 2, -1, -1, 1, 1), 16, 'Test 50');
test(computeArea(-50, -50, 50, 50, -30, -30, 30, 30), 10000, 'Test 51');
test(computeArea(-500, -500, 500, 500, -300, -300, 300, 300), 1000000, 'Test 52');
test(computeArea(1, 1, 5, 5, 2, 2, 6, 6), 23, 'Test 53');
test(computeArea(-5, -5, 5, 5, 5, -5, 15, 5), 200, 'Test 54');
test(computeArea(-10, -10, 10, 10, 0, -5, 5, 5), 400, 'Test 55');
test(computeArea(0, 0, 10, 10, 5, 5, 15, 15), 175, 'Test 56');
test(computeArea(-100, -100, 100, 100, -50, -50, 50, 50), 40000, 'Test 57');
test(computeArea(-10, -10, 0, 0, -5, -5, 5, 5), 175, 'Test 58');
test(computeArea(-20, -20, -10, -10, -15, -15, -5, -5), 175, 'Test 59');
test(computeArea(-50, -50, 50, 50, -60, -60, 60, 60), 14400, 'Test 60');
test(computeArea(-1000, -1000, -500, -500, -750, -750, -250, -250), 437500, 'Test 61');
test(computeArea(-10, -10, 0, 0, 0, 0, 10, 10), 200, 'Test 62');
test(computeArea(-500, -500, -200, -200, -400, -400, -100, -100), 140000, 'Test 63');
test(computeArea(-100, -100, -50, -50, -75, -75, -25, -25), 4375, 'Test 64');
test(computeArea(-10, -10, 10, 10, 5, -5, 15, 5), 450, 'Test 65');
test(computeArea(0, 0, 10, 20, 5, 5, 15, 15), 250, 'Test 66');
test(computeArea(0, 0, 0, 0, 0, 0, 0, 0), 0, 'Test 67');
test(computeArea(-10, -10, 10, 10, 10, -10, 20, 10), 600, 'Test 68');
test(computeArea(10, 10, 20, 20, 15, 15, 25, 25), 175, 'Test 69');
test(computeArea(-50, -50, 50, 50, -25, -25, 25, 25), 10000, 'Test 70');
test(computeArea(200, 200, 300, 300, 100, 100, 250, 250), 30000, 'Test 71');
test(computeArea(0, 0, 100, 100, 90, 90, 200, 200), 22000, 'Test 72');
test(computeArea(-5, -5, 5, 5, 6, 6, 10, 10), 116, 'Test 73');
test(computeArea(100, 100, 200, 200, 150, 150, 250, 250), 17500, 'Test 74');
test(computeArea(-5, -5, 5, 5, 6, 6, 11, 11), 125, 'Test 75');
test(computeArea(-1000, -1000, -900, -900, -950, -950, -850, -850), 17500, 'Test 76');

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
