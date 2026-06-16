// Test: 672. Bulb Switcher Ii
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { flipLights } = require("./solution");

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

console.log("\n672. Bulb Switcher Ii\n");

test(flipLights(1, 1), 2, 'Test 1');
test(flipLights(5, 3), 8, 'Test 2');
test(flipLights(1000, 1000), 8, 'Test 3');
test(flipLights(4, 2), 7, 'Test 4');
test(flipLights(2, 1), 3, 'Test 5');
test(flipLights(10, 4), 8, 'Test 6');
test(flipLights(4, 3), 8, 'Test 7');
test(flipLights(100, 0), 1, 'Test 8');
test(flipLights(3, 3), 8, 'Test 9');
test(flipLights(3, 1), 4, 'Test 10');
test(flipLights(4, 1), 4, 'Test 11');
test(flipLights(5, 0), 1, 'Test 12');
test(flipLights(3, 2), 7, 'Test 13');
test(flipLights(10, 5), 8, 'Test 14');
test(flipLights(1000, 0), 1, 'Test 15');
test(flipLights(2, 2), 4, 'Test 16');
test(flipLights(10, 6), 8, 'Test 17');
test(flipLights(15, 5), 8, 'Test 18');
test(flipLights(100, 10), 8, 'Test 19');
test(flipLights(2, 0), 1, 'Test 20');
test(flipLights(5, 1), 4, 'Test 21');
test(flipLights(15, 6), 8, 'Test 22');
test(flipLights(6, 6), 8, 'Test 23');
test(flipLights(65, 5), 8, 'Test 24');
test(flipLights(10, 2), 7, 'Test 25');
test(flipLights(1000, 100), 8, 'Test 26');
test(flipLights(8, 3), 8, 'Test 27');
test(flipLights(8, 8), 8, 'Test 28');
test(flipLights(7, 3), 8, 'Test 29');
test(flipLights(100, 5), 8, 'Test 30');
test(flipLights(9, 3), 8, 'Test 31');
test(flipLights(9, 1), 4, 'Test 32');
test(flipLights(60, 8), 8, 'Test 33');
test(flipLights(90, 6), 8, 'Test 34');
test(flipLights(12, 5), 8, 'Test 35');
test(flipLights(10, 3), 8, 'Test 36');
test(flipLights(3, 10), 8, 'Test 37');
test(flipLights(45, 6), 8, 'Test 38');
test(flipLights(1, 10), 2, 'Test 39');
test(flipLights(9, 8), 8, 'Test 40');
test(flipLights(8, 2), 7, 'Test 41');
test(flipLights(3, 5), 8, 'Test 42');
test(flipLights(20, 3), 8, 'Test 43');
test(flipLights(20, 7), 8, 'Test 44');
test(flipLights(6, 2), 7, 'Test 45');
test(flipLights(10, 1), 4, 'Test 46');
test(flipLights(5, 4), 8, 'Test 47');
test(flipLights(4, 4), 8, 'Test 48');
test(flipLights(15, 3), 8, 'Test 49');
test(flipLights(14, 3), 8, 'Test 50');
test(flipLights(60, 6), 8, 'Test 51');
test(flipLights(2, 5), 4, 'Test 52');
test(flipLights(500, 15), 8, 'Test 53');
test(flipLights(1, 0), 1, 'Test 54');
test(flipLights(100, 7), 8, 'Test 55');
test(flipLights(20, 6), 8, 'Test 56');
test(flipLights(6, 1), 4, 'Test 57');
test(flipLights(50, 4), 8, 'Test 58');
test(flipLights(15, 7), 8, 'Test 59');
test(flipLights(25, 10), 8, 'Test 60');
test(flipLights(15, 4), 8, 'Test 61');
test(flipLights(8, 5), 8, 'Test 62');
test(flipLights(5, 5), 8, 'Test 63');
test(flipLights(8, 7), 8, 'Test 64');
test(flipLights(7, 0), 1, 'Test 65');
test(flipLights(20, 0), 1, 'Test 66');
test(flipLights(1, 2), 2, 'Test 67');
test(flipLights(12, 1), 4, 'Test 68');
test(flipLights(7, 6), 8, 'Test 69');
test(flipLights(70, 9), 8, 'Test 70');
test(flipLights(80, 10), 8, 'Test 71');
test(flipLights(7, 5), 8, 'Test 72');
test(flipLights(35, 7), 8, 'Test 73');
test(flipLights(30, 3), 8, 'Test 74');
test(flipLights(50, 5), 8, 'Test 75');
test(flipLights(4, 0), 1, 'Test 76');
test(flipLights(500, 10), 8, 'Test 77');
test(flipLights(7, 2), 7, 'Test 78');
test(flipLights(30, 5), 8, 'Test 79');
test(flipLights(2, 10), 4, 'Test 80');
test(flipLights(40, 3), 8, 'Test 81');
test(flipLights(40, 4), 8, 'Test 82');
test(flipLights(15, 2), 7, 'Test 83');
test(flipLights(12, 9), 8, 'Test 84');
test(flipLights(6, 3), 8, 'Test 85');
test(flipLights(1000, 1), 4, 'Test 86');
test(flipLights(7, 4), 8, 'Test 87');
test(flipLights(20, 2), 7, 'Test 88');
test(flipLights(20, 4), 8, 'Test 89');
test(flipLights(3, 0), 1, 'Test 90');

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
