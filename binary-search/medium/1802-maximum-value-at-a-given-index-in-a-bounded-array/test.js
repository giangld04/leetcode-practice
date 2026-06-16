// Test: 1802. Maximum Value At A Given Index In A Bounded Array
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { maxValue } = require("./solution");

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

console.log("\n1802. Maximum Value At A Given Index In A Bounded Array\n");

test(maxValue(1, 0, 1), 1, 'Test 1');
test(maxValue(10, 5, 50), 7, 'Test 2');
test(maxValue(6, 1, 10), 3, 'Test 3');
test(maxValue(1000000000, 500000000, 1000000000), 1, 'Test 4');
test(maxValue(4, 2, 6), 2, 'Test 5');
test(maxValue(20, 10, 210), 15, 'Test 6');
test(maxValue(1000000000, 999999999, 2000000000), 44721, 'Test 7');
test(maxValue(7, 3, 20), 4, 'Test 8');
test(maxValue(1000000000, 1, 1200000000), 19999, 'Test 9');
test(maxValue(100000, 0, 10000000), 4450, 'Test 10');
test(maxValue(9, 4, 25), 5, 'Test 11');
test(maxValue(1000, 500, 500000), 750, 'Test 12');
test(maxValue(1000000000, 999999999, 1000000000), 1, 'Test 13');
test(maxValue(20, 10, 200), 15, 'Test 14');
test(maxValue(999999999, 999999998, 2000000000), 44721, 'Test 15');
test(maxValue(100, 50, 5000), 75, 'Test 16');
test(maxValue(1000000000, 500000000, 2500000000), 38730, 'Test 17');
test(maxValue(4, 1, 10), 3, 'Test 18');
test(maxValue(1000, 500, 100000), 315, 'Test 19');
test(maxValue(750000000, 375000000, 1500000000), 27387, 'Test 20');
test(maxValue(100000, 99999, 10000000), 4450, 'Test 21');
test(maxValue(1000000, 500000, 10000000), 3001, 'Test 22');
test(maxValue(500000000, 499999999, 1500000000), 44721, 'Test 23');
test(maxValue(999999999, 0, 999999999), 1, 'Test 24');
test(maxValue(999999999, 499999999, 10000000000), 94869, 'Test 25');
test(maxValue(1000000000, 0, 1000000000), 1, 'Test 26');
test(maxValue(50, 24, 1225), 37, 'Test 27');
test(maxValue(100, 50, 5050), 75, 'Test 28');
test(maxValue(9, 4, 45), 7, 'Test 29');
test(maxValue(35, 17, 3000), 94, 'Test 30');
test(maxValue(10000, 4999, 1000000), 995, 'Test 31');
test(maxValue(9, 4, 100), 13, 'Test 32');
test(maxValue(20, 0, 50), 8, 'Test 33');
test(maxValue(1000000000, 1, 2500000000), 54771, 'Test 34');
test(maxValue(750000000, 375000000, 1800000000), 32404, 'Test 35');
test(maxValue(50, 25, 500), 22, 'Test 36');
test(maxValue(500, 250, 150000), 425, 'Test 37');
test(maxValue(2000000000, 1000000000, 3000000000), 31623, 'Test 38');
test(maxValue(100, 50, 10000), 125, 'Test 39');
test(maxValue(300000000, 150000000, 1500000000), 34642, 'Test 40');
test(maxValue(5, 2, 15), 4, 'Test 41');
test(maxValue(1000000000, 0, 2000000000), 44721, 'Test 42');
test(maxValue(50, 24, 1275), 38, 'Test 43');
test(maxValue(200, 100, 2000), 43, 'Test 44');
test(maxValue(1, 0, 1000000000), 1000000000, 'Test 45');
test(maxValue(1000000000, 500000000, 10000000000), 94869, 'Test 46');
test(maxValue(8, 3, 30), 5, 'Test 47');
test(maxValue(12, 6, 75), 9, 'Test 48');
test(maxValue(10, 0, 36), 7, 'Test 49');
test(maxValue(50, 24, 5000), 112, 'Test 50');
test(maxValue(20, 19, 50), 8, 'Test 51');
test(maxValue(500000000, 250000000, 1000000000), 22361, 'Test 52');
test(maxValue(2, 1, 3), 2, 'Test 53');
test(maxValue(1000000000, 1, 2000000000), 44720, 'Test 54');
test(maxValue(15, 7, 120), 11, 'Test 55');
test(maxValue(500000000, 1, 1500000000), 44720, 'Test 56');
test(maxValue(500000000, 250000000, 1500000000), 31623, 'Test 57');
test(maxValue(10, 0, 100), 14, 'Test 58');
test(maxValue(15, 7, 500), 37, 'Test 59');
test(maxValue(50, 25, 1000), 32, 'Test 60');
test(maxValue(3, 1, 15), 5, 'Test 61');
test(maxValue(25, 12, 1500), 66, 'Test 62');
test(maxValue(7, 3, 25), 5, 'Test 63');
test(maxValue(10, 9, 100), 14, 'Test 64');
test(maxValue(3, 1, 1000000000), 333333334, 'Test 65');
test(maxValue(500, 250, 2000), 39, 'Test 66');
test(maxValue(20, 19, 200), 19, 'Test 67');
test(maxValue(500000, 250000, 100000000), 9975, 'Test 68');
test(maxValue(800000000, 400000000, 1600000000), 28285, 'Test 69');
test(maxValue(15, 7, 100), 10, 'Test 70');
test(maxValue(200, 100, 20100), 150, 'Test 71');
test(maxValue(999999999, 499999999, 999999999), 1, 'Test 72');
test(maxValue(200000000, 100000000, 500000000), 17321, 'Test 73');
test(maxValue(1000000, 999999, 2000000), 1414, 'Test 74');
test(maxValue(1000000000, 1, 1000000000), 1, 'Test 75');
test(maxValue(500000000, 0, 1200000000), 37417, 'Test 76');
test(maxValue(999999999, 0, 1500000000), 31623, 'Test 77');
test(maxValue(10, 4, 55), 8, 'Test 78');
test(maxValue(100, 50, 1000), 31, 'Test 79');
test(maxValue(10, 9, 25), 6, 'Test 80');
test(maxValue(10, 9, 36), 7, 'Test 81');
test(maxValue(100000, 50000, 5000000), 2214, 'Test 82');
test(maxValue(10, 0, 50), 9, 'Test 83');
test(maxValue(2, 1, 6), 3, 'Test 84');
test(maxValue(10, 0, 25), 6, 'Test 85');
test(maxValue(150, 75, 100000), 704, 'Test 86');
test(maxValue(2, 1, 1000000000), 500000000, 'Test 87');
test(maxValue(5, 2, 17), 4, 'Test 88');
test(maxValue(1000000000, 500000000, 1000000001), 2, 'Test 89');
test(maxValue(500000000, 250000000, 800000000), 17321, 'Test 90');
test(maxValue(5, 2, 20), 5, 'Test 91');
test(maxValue(7, 3, 50), 8, 'Test 92');

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
