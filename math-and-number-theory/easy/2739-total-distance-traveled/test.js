// Test: 2739. Total Distance Traveled
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { distanceTraveled } = require("./solution");

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

console.log("\n2739. Total Distance Traveled\n");

test(distanceTraveled(10, 0), 100, 'Test 1');
test(distanceTraveled(100, 100), 1240, 'Test 2');
test(distanceTraveled(5, 10), 60, 'Test 3');
test(distanceTraveled(3, 0), 30, 'Test 4');
test(distanceTraveled(7, 3), 80, 'Test 5');
test(distanceTraveled(0, 5), 0, 'Test 6');
test(distanceTraveled(1, 2), 10, 'Test 7');
test(distanceTraveled(0, 10), 0, 'Test 8');
test(distanceTraveled(10, 5), 120, 'Test 9');
test(distanceTraveled(0, 50), 0, 'Test 10');
test(distanceTraveled(20, 0), 200, 'Test 11');
test(distanceTraveled(20, 20), 240, 'Test 12');
test(distanceTraveled(5, 0), 50, 'Test 13');
test(distanceTraveled(45, 5), 500, 'Test 14');
test(distanceTraveled(80, 10), 900, 'Test 15');
test(distanceTraveled(55, 0), 550, 'Test 16');
test(distanceTraveled(15, 1), 160, 'Test 17');
test(distanceTraveled(1, 50), 10, 'Test 18');
test(distanceTraveled(3, 20), 30, 'Test 19');
test(distanceTraveled(50, 50), 620, 'Test 20');
test(distanceTraveled(25, 30), 310, 'Test 21');
test(distanceTraveled(25, 10), 310, 'Test 22');
test(distanceTraveled(5, 25), 60, 'Test 23');
test(distanceTraveled(80, 20), 990, 'Test 24');
test(distanceTraveled(30, 3), 330, 'Test 25');
test(distanceTraveled(50, 15), 620, 'Test 26');
test(distanceTraveled(49, 5), 540, 'Test 27');
test(distanceTraveled(45, 50), 560, 'Test 28');
test(distanceTraveled(3, 4), 30, 'Test 29');
test(distanceTraveled(30, 30), 370, 'Test 30');
test(distanceTraveled(7, 1), 80, 'Test 31');
test(distanceTraveled(99, 99), 1230, 'Test 32');
test(distanceTraveled(75, 15), 900, 'Test 33');
test(distanceTraveled(9, 3), 110, 'Test 34');
test(distanceTraveled(60, 30), 740, 'Test 35');
test(distanceTraveled(9, 2), 110, 'Test 36');
test(distanceTraveled(15, 2), 170, 'Test 37');
test(distanceTraveled(50, 10), 600, 'Test 38');
test(distanceTraveled(75, 20), 930, 'Test 39');
test(distanceTraveled(5, 50), 60, 'Test 40');
test(distanceTraveled(8, 1), 90, 'Test 41');
test(distanceTraveled(30, 0), 300, 'Test 42');
test(distanceTraveled(99, 1), 1000, 'Test 43');
test(distanceTraveled(30, 8), 370, 'Test 44');
test(distanceTraveled(40, 30), 490, 'Test 45');
test(distanceTraveled(10, 99), 120, 'Test 46');
test(distanceTraveled(80, 3), 830, 'Test 47');
test(distanceTraveled(3, 7), 30, 'Test 48');
test(distanceTraveled(9, 10), 110, 'Test 49');
test(distanceTraveled(15, 0), 150, 'Test 50');
test(distanceTraveled(75, 25), 930, 'Test 51');
test(distanceTraveled(49, 10), 590, 'Test 52');
test(distanceTraveled(25, 0), 250, 'Test 53');
test(distanceTraveled(75, 30), 930, 'Test 54');
test(distanceTraveled(24, 6), 290, 'Test 55');
test(distanceTraveled(45, 30), 560, 'Test 56');
test(distanceTraveled(99, 100), 1230, 'Test 57');
test(distanceTraveled(25, 5), 300, 'Test 58');
test(distanceTraveled(45, 10), 550, 'Test 59');
test(distanceTraveled(80, 8), 880, 'Test 60');
test(distanceTraveled(49, 2), 510, 'Test 61');
test(distanceTraveled(50, 25), 620, 'Test 62');
test(distanceTraveled(30, 15), 370, 'Test 63');
test(distanceTraveled(100, 1), 1010, 'Test 64');
test(distanceTraveled(25, 25), 310, 'Test 65');
test(distanceTraveled(25, 15), 310, 'Test 66');
test(distanceTraveled(60, 25), 740, 'Test 67');
test(distanceTraveled(60, 0), 600, 'Test 68');
test(distanceTraveled(8, 7), 90, 'Test 69');
test(distanceTraveled(5, 20), 60, 'Test 70');
test(distanceTraveled(2, 10), 20, 'Test 71');
test(distanceTraveled(5, 5), 60, 'Test 72');
test(distanceTraveled(30, 10), 370, 'Test 73');
test(distanceTraveled(8, 3), 90, 'Test 74');
test(distanceTraveled(60, 15), 740, 'Test 75');
test(distanceTraveled(10, 9), 120, 'Test 76');
test(distanceTraveled(100, 0), 1000, 'Test 77');
test(distanceTraveled(5, 4), 60, 'Test 78');
test(distanceTraveled(4, 5), 40, 'Test 79');

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
